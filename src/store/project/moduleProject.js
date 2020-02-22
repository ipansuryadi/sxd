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
      projects:[
        {name:'Project One - Video', client:'Bukan Sembarang, PT', job_open_date:'20-08-2019', job_no:'XA/BSE/19/08/001', project_period:'28-09-2019', job_close_date:'29-09-2019', status:'Project Completed', total_job_list: 32, job_list_finish: 32, job_list_finish_percentage:100, remarks:''},
        {name:'Project One - AddCost', client:'Bukan Sembarang, PT', job_open_date:'26-08-2019', job_no:'XA/BSE/19/08/001A', project_period:'28-09-2019', job_close_date:'29-09-2019', status:'Project Completed', total_job_list: 35, job_list_finish: 35, job_list_finish_percentage:100, remarks:''},
        {name:'Project One - AddCost Part 2', client:'Bukan Sembarang, PT', job_open_date:'27-08-2019', job_no:'XA/BSE/19/08/001B', project_period:'29-09-2019', job_close_date:'29-09-2019', status:'Project Completed', total_job_list: 25, job_list_finish: 25, job_list_finish_percentage:100, remarks:''},
        {name:'Design Room Office', client:'Maju Bersama Terus, PT', job_open_date:'22-08-2019', job_no:'XP/MBT/19/08/001', project_period:'28-10-2019 - 30-12-2019', job_close_date:'30-08-2019', status:'Merger with another job', total_job_list: 12, job_list_finish: 12, job_list_finish_percentage:100, remarks:'Merger w/ Maju Bersama Jakarta Activation XP/MBT/19/08/003'},
        {name:'Touch Up Maju Bersama', client:'Maju Bersama Terus, PT', job_open_date:'23-08-2019', job_no:'XP/MBT/19/08/002 ', project_period:'30-10-2019 - 08-03-2019', job_close_date:'', status:'Open', total_job_list: 15, job_list_finish: 0, job_list_finish_percentage:0, remarks:''},
        {name:'Renovasi Maju Bersama Meeting Room', client:'Maju Bersama Terus, PT', job_open_date:'24-08-2019', job_no:'XP/MBT/19/08/003', project_period:'28-10-2019 - 30-12-2019', job_close_date:'', status:'Open', total_job_list: 20, job_list_finish: 0, job_list_finish_percentage:0, remarks:''},
      ]
    },
    mutations: {},
    actions: {}
}