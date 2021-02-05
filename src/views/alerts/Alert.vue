<template>
    <div v-show="appAlertType"
         class="alert">
        <v-alert v-if="appAlertType==='userError'"
                 type="error">
            {{ appAlertMessage }}
        </v-alert>
        <v-alert v-else-if="appAlertType==='systemError'"
                 type="warning">
            Возникла системная ошибка <br>
            {{ appAlertCode + " " + appAlertMessage }}
        </v-alert>
        <v-alert v-else-if="appAlertType==='success'"
                 type="success">
            {{ appAlertMessage }}
        </v-alert>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex';

    export default {
        name: 'Alert',
        computed: {
            ...mapGetters( 'ui',['appAlertType', 'appAlertCode', 'appAlertMessage'] ),
        },
        watch: {
            appAlertType: function( value ) {
                if ( !value ) return ;

                setTimeout( ()=> {
                    this.$store.commit( 'ui/hideAlertMessage' );
                }, 2000 );

                return value;
            },
        },
    };
</script>

<style scoped>
.alert {
  position: absolute;
  top: 100px;
  left: 60px;
  width: 400px;
  height: 100px;
  z-index: 9999;
}
</style>
