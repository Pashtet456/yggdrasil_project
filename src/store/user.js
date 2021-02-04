export default {
    namespaced: true,
    state: {
        id: undefined,
        awardCoins: undefined,
        realCoins: undefined,
        avatar: undefined,
        email: undefined,
        dateRegistration: undefined,
        dateLastVisit: undefined,
    },
    getters: {
        userIsLogin: state => state.id !== undefined,
    },
    mutations: {
    },
    actions: {
    },
};
