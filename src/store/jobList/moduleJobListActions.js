/*=========================================================================================
  File Name: moduleEmailActions.js
  Description: Email Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default {
    setJobListSearchQuery({ commit }, query){
        commit('SET_JOB_LIST_SEARCH_QUERY', query)
    },
    updateJobListFilter({ commit }, filterName){
        commit('UPDATE_JOB_LIST_FILTER', filterName)
    },
    toggleIsJobListStarred({ commit }, payload) {
        commit('TOGGLE_IS_JOB_LIST_STARRED', payload);
    },
    moveJobListsTo({ commit }, payload) {
        commit('MOVE_JOB_LISTS_TO', payload);
    },
    updateJobListUnread({ commit }, payload) {
        commit('UPDATE_JOB_LIST_UNREAD', payload);
    },
    addLabelToJobLists({ commit }, payload) {
        commit('ADD_LABEL_TO_JOB_LISTS', payload);
    },
    updateJobListLabels({ commit }, payload) {
        commit('UPDATE_JOB_LIST_LABELS', payload);
    },
}