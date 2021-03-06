/*=========================================================================================
  File Name: moduleEjobListMutations.js
  Description: EjobList Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default {
    SET_MAIL_SEARCH_QUERY(state, query) {
        state.jobListSearchQuery = query;
    },
    UPDATE_MAIL_FILTER(state, filterName) {
        state.jobList_filter = filterName
    },
    TOGGLE_IS_MAIL_STARRED(state, payload) {
        state.jobLists.forEach((jobList) => {
            if(jobList.id == payload.jobListId) {
                jobList.isStarred = payload.value
            }
        })
    },
    MOVE_MAILS_TO(state, payload) {
        payload.jobLists.forEach((jobListId) => {
            const jobListIndex = state.jobLists.findIndex((jobList) => jobList.id == jobListId);

            state.jobLists[jobListIndex].jobListType = payload.to;
        })
    },
    UPDATE_MAIL_UNREAD(state, payload) {
        payload.jobLists.forEach((jobListId) => {
            const jobListIndex = state.jobLists.findIndex((jobList) => jobList.id == jobListId);

            state.jobLists[jobListIndex].unread = payload.unread;
        })
    },
    ADD_LABEL_TO_MAILS(state, payload) {
        payload.jobLists.forEach((jobListId) => {
            const jobListIndex = state.jobLists.findIndex((jobList) => jobList.id == jobListId);

            const index = state.jobLists[jobListIndex].labels.indexOf(payload.label)

            if(index == -1) {
                state.jobLists[jobListIndex].labels.push(payload.label)
            }else{
                state.jobLists[jobListIndex].labels.splice(index, 1);
            }
        })
    },
    UPDATE_MAIL_LABELS(state, payload) {
        const jobListIndex = state.jobLists.findIndex((jobList) => jobList.id == payload.jobListId);
        state.jobLists[jobListIndex].labels = payload.value;
    },
}