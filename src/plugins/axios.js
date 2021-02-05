import axios                                         from 'axios';
import { RequestError, ApiResponseError, UserError } from '~/lib/classes/error';
import store                                         from '~/store/index';

const config = {
    baseURL: '',
    timeout: 60 * 1000,
    withCredentials: true,
};
const instance = axios.create( config );

instance.interceptors.request.use(
    function( config ) {

        return config;
    },
    function( e ) { console.log( e, 2 );

      // The request was canceled by client with axios cancelToken
        if ( axios.isCancel( e ) ) return;

        // The request was made but no response was received
        const { status, statusText } = e.request;
        const data= {
            type: 'systemError',
            status,
            statusText,
        };
        this.$store.commit( 'ui/showAlertMessage', data );
        return Promise.reject( new RequestError( status, statusText ) );
    },
);

instance.interceptors.response.use(
    function( response ) {

      // The request was made and the server responded with a status code in the range of 2xx
        const { error, errorMessage, result } = response.data;
        const data= {
            type: undefined,
            error,
            errorMessage,
        };

        if ( error ) {
            data.type = 'userError';
            this.$store.commit( 'ui/showAlertMessage', data );
            throw new UserError( errorMessage );
        }

        data.type = 'success';
        this.$store.commit( 'ui/showAlertMessage', data );
        response.data = result;
        return response;
    },
    function( e ) {
        // The request was made and the server responded with a status code that falls out of the range of 2xx
        const { status, statusText } = e.response;
        const data= {
            type: 'systemError',
            status,
            statusText,
        };
        store.commit( 'ui/showAlertMessage', data );
        return Promise.reject( new RequestError( status, statusText ) );
    },
);

export { instance as $axios };
