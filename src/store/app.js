export default {
    namespaced: true,
    state: {
        project: undefined,
    },
    getters: {
        currentProject: state => state.project,
    },
    mutations: {
        changeCurrentProject( state, project ) {
            state.project = project;
        },
    },
    actions: {
    },
};
