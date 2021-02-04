export default {
    state: {
        project: undefined,
    },
    getters: {
        currentProject: state => state.project,
    },
    mutations: {
        changeCurrentProject( state, project ) {
            this.state.app.project = project;
        },
    },
    actions: {
    },
};
