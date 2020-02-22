/*=========================================================================================
  File Name: store.js
  Description: Vuex store
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import Vue from 'vue';
import Vuex from 'vuex';

import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

import moduleAppUser from './appUser/moduleAppUser.js';
import moduleAppRole from './appRole/moduleAppRole.js';
import moduleTodo from './todo/moduleTodo.js';
import moduleCalendar from './calendar/moduleCalendar.js';
import moduleChat from './chat/moduleChat.js';
import moduleEmail from './email/moduleEmail.js';
import moduleJobList from './jobList/moduleJobList.js';
import moduleAuth from './auth/moduleAuth.js';
import moduleECommerce from './eCommerce/moduleECommerce.js';
import moduleProject from './project/moduleProject.js';
import moduleClientRegistration from './clientRegistration/moduleClientRegistration.js';
import moduleExecutorRegistration from './executorRegistration/moduleExecutorRegistration.js';
import moduleUserExecutorAccess from './userExecutorAccess/moduleUserExecutorAccess.js';
import moduleExecutor from './executor';

export default new Vuex.Store({
  getters,
  mutations,
  state,
  actions,
  modules: {
    appUser: moduleAppUser,
    appRole: moduleAppRole,
    todo: moduleTodo,
    calendar: moduleCalendar,
    chat: moduleChat,
    email: moduleEmail,
    jobList: moduleJobList,
    auth: moduleAuth,
    eCommerce: moduleECommerce,
    project: moduleProject,
    clientRegistration: moduleClientRegistration,
    executorRegistration: moduleExecutorRegistration,
    userExecutorAccess: moduleUserExecutorAccess,
    executor: moduleExecutor,
  },
  strict: process.env.NODE_ENV !== 'production',
});
