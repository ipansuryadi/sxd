/*=========================================================================================
  File Name: moduleEmailState.js
  Description: Email Module State
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import jobLists from '@/views/project-maintenance/jobLists'

export default {
    jobLists: jobLists,
    jobList_filter: 'inbox',
    jobListTags: [
        { text: 'Personal', value : 'personal', color:"success"},
        { text: 'Company', value: 'company', color:"primary"},
        { text: 'Important', value: 'important', color:"warning"},
        { text: 'Private', value: 'private', color:"danger"},
    ],
    jobListSearchQuery: '',
}