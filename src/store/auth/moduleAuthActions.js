/*=========================================================================================
  File Name: moduleAuthActions.js
  Description: Auth Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import router from "@/router";
import authService from "../../auth/authService";

export default {
  loginAttempt({ dispatch }, payload) {
    const newPayload = {
      userDetails: payload.userDetails,
      notify: payload.notify
    };
    if (!payload.checkbox_remember_me) {
      localStorage.setItem("remember_me", false);
      // firebase
      //   .auth()
      //   .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      //   .then(function() {
      dispatch("login", newPayload);
      //   })
      //   .catch(function(err) {
      //     payload.notify({
      //       time: 2500,
      //       title: 'Error',
      //       text: err.message,
      //       iconPack: 'feather',
      //       icon: 'icon-alert-circle',
      //       color: 'danger',
      //     });
      //   });
    } else {
      localStorage.setItem("remember_me", true);
      dispatch("login", newPayload);
    }
  },
  login({ commit, state }, payload) {
    if (state.isUserLoggedIn()) {
      payload.notify({
        title: "Login Attempt",
        text: "You are already logged in!",
        iconPack: "feather",
        icon: "icon-alert-circle",
        color: "warning"
      });
      return false;
    }
    //ipansuryadi hit api login disini

    // firebase
    //   .auth()
    //   .signInWithEmailAndPassword(
    //     payload.userDetails.email,
    //     payload.userDetails.password
    //   )
    //   .then(
    //     (result) => {
    const authResult = {
      idToken: "adfadsfadfa",
      idTokenPayload: {
        exp: 1604336400,
        name:
          payload.userDetails.email === "client@client.com"
            ? "Client"
            : "Admin",
        email: payload.userDetails.email,
        picture:
          "https://timedotcom.files.wordpress.com/2014/07/mug-shot_2-july.jpg?w=600&quality=85",
        sub: "adfadfadfa|sdsds"
      }
    };
    authService.localLogin(authResult);
    // router.push(router.currentRoute.query.to || "/");
    router.push("/");
    /* 
    const userInfo = {
      providerId: 'local',
      uid: 'asdfadfasdf',
      displayName: 'Admin',
      email: 'demo@demo.comm',
      photoURL:
        'https://timedotcom.files.wordpress.com/2014/07/mug-shot_2-july.jpg?w=600&quality=85',
    };
    commit('UPDATE_AUTHENTICATED_USER', userInfo); */

    //     },
    //     (err) => {
    //       payload.notify({
    //         time: 2500,
    //         title: 'Error',
    //         text: err.message,
    //         iconPack: 'feather',
    //         icon: 'icon-alert-circle',
    //         color: 'danger',
    //       });
    //     }
    //   );
  },
  updateAuthenticatedUser({ commit }, payload) {
    commit("UPDATE_AUTHENTICATED_USER", payload);
  }
};
