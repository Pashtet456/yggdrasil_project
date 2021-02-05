export default {
    namespaced: true,
    state: {
        alert: {
            type: undefined,
            code: undefined,
            message: undefined,
        },
    },
    getters: {
        appAlertType: state => state.alert.type,
        appAlertCode: state => state.alert.code,
        appAlertMessage: state => state.alert.message,
    },
    mutations: {
        showAlertMessage( state, payload ) {
            state.alert.type = payload.type;
            state.alert.code = payload.error?payload.error:payload.status;
            state.alert.message = payload.message?payload.message:payload.statusText;
        },
        hideAlertMessage( state ) {
            state.alert.type = null;
            state.alert.code = null;
            state.alert.message = null;
        },
    },
    actions: {
    },
};
