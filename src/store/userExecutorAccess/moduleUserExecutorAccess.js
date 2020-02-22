/*=========================================================================================
  File Name: moduleEmail.js
  Description: Email Module
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default {
	namespaced: true,
    state: {
      project1:[
        {name:'Executor 1', expired_date:'01-10-2019', total_job_list:8, job_list_finish:2, status:'In Progress'},
        {name:'Executor 4', expired_date:'01-10-2019', total_job_list:9, job_list_finish:4, status:'In Progress'},
        {name:'Executor 7', expired_date:'01-10-2019', total_job_list:7, job_list_finish:7, status:'Completed'}
      ],
      project2:[
        {name:'Executor 2', expired_date:'01-10-2019', total_job_list:6, job_list_finish:3, status:'In Progress'},
        {name:'Executor 5', expired_date:'01-10-2019', total_job_list:9, job_list_finish:2, status:'In Progress'},
        {name:'Executor 8', expired_date:'01-10-2019', total_job_list:8, job_list_finish:1, status:'In Progress'},
        {name:'Executor 9', expired_date:'01-10-2019', total_job_list:7, job_list_finish:5, status:'In Progress'}
      ],
      project3:[
        {name:'Executor 3', expired_date:'01-10-2019', total_job_list:5, job_list_finish:4, status:'In Progress'},
        {name:'Executor 6', expired_date:'01-10-2019', total_job_list:9, job_list_finish:5, status:'In Progress'},
        {name:'Executor 10', expired_date:'01-10-2019', total_job_list:10, job_list_finish:10, status:'Completed'}
      ]
    },
    mutations: {},
    actions: {}
}