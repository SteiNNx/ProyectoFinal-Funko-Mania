import {
    collection,
    addDoc,
    query,
    where,
    getDocs,
    onSnapshot,
    doc,
    deleteDoc,
    updateDoc
} from "firebase/firestore";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";

import { db } from "@/plugins/firebase";
import { errorCodeToStringLabelFirebase } from '@/utils/functions';

/**
 * @description Modulo Usuario, contiene state, mutations, actions y getters
 */
const User = {
    namespaced: true,
    state: {
        userLogin: null,
        userMsjError: null,
    },
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
            const { email, password, region, comuna, nombre } = userParam;
            const auth = getAuth();
            await createUserWithEmailAndPassword(auth, email, password)
                .then(async (response) => {
                    const { uid } = response.user;
                    commit('SET_USER_MSJ_ERROR', null);
                    const docRef = await addDoc(collection(db, "users"), {
                        uid,
                        nombre,
                        email,
                        region,
                        comuna,
                        isAdmin: false,
                    });
                    console.log("Document written with ID: ", docRef.id);
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
            getAuth()
                .onAuthStateChanged(async (user) => {
                    if (user) {
                        const usersRef = collection(db, "users");
                        const q = query(usersRef, where("uid", "==", user.uid));
                        const querySnapshot = await getDocs(q);
                        querySnapshot.forEach((doc) => {
                            const infoUser = doc.data();
                            const userCompleteData = {
                                ...user,
                                infoUser,
                            }
                            commit('SET_USER_LOGIN', userCompleteData);
                        });
                    }
                });
        },
    },
    getters: {}
};

export default User;