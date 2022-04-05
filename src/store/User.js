import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";

/**
 * @description Modulo Usuario, contiene state, mutations, actions y getters
 */
const User = {
    state: () => ({
        userLogin: null,
        userMsjError: null,
    }),
    mutations: {
        SET_USER_LOGIN(state, payload) {
            state.userLogin = payload;
        },
        SET_USER_MSJ_ERROR(state, payload) {
            state.userMsjError = payload;
        },
    },
    actions: {
        async registerUser({ commit }, userParam) {
            const { email, password } = userParam;
            const auth = getAuth();
            await createUserWithEmailAndPassword(auth, email, password)
                .then(() => {
                    commit('SET_USER_MSJ_ERROR', null);
                })
                .catch((error) => {
                    console.log(error);
                    commit('SET_USER_MSJ_ERROR', errorCodeToStringLabelFirebase(error.code));
                });
        },
        async loginUser({ commit }, userParam) {
            const { email, password } = userParam;
            const auth = getAuth();
            await signInWithEmailAndPassword(auth, email, password)
                .then(() => {
                    commit('SET_USER_MSJ_ERROR', null);
                })
                .catch((error) => {
                    console.log(error);
                    commit('SET_USER_MSJ_ERROR', errorCodeToStringLabelFirebase(error.code));
                });;
        },
        async logoutUser({ commit }) {
            await getAuth()
                .signOut()
                .then(() => {
                    commit('SET_USER_LOGIN', null);
                });
        },
        getUserLogin({ commit }) {
            getAuth().onAuthStateChanged((user) => {
                if (user) {
                    commit('SET_USER_LOGIN', user.email);
                }
            });
        },
    },
    getters: {}
};

export default User;