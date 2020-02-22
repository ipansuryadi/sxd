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
      executors:[
        {name:'Executor 1', email:'executor1@gmail.com', no_hp:'081332432323', project_ongoing:'Project 1', project_done:1, status:'Active'},
        {name:'Executor 2', email:'executor2@gmail.com', no_hp:'081283829283', project_ongoing:'Project 2', project_done:0, status:'Locked'},
        {name:'Executor 3', email:'executor3@gmail.com', no_hp:'085610201999', project_ongoing:'Project 3', project_done:2, status:'Active'},
        {name:'Executor 4', email:'executor4@gmail.com', no_hp:'081291001928', project_ongoing:'Project 1', project_done:2, status:'Active'},
        {name:'Executor 5', email:'executor5@gmail.com', no_hp:'081392020219', project_ongoing:'Project 2', project_done:4, status:'Active'},
        {name:'Executor 6', email:'executor6@gmail.com', no_hp:'081291010910', project_ongoing:'Project 3', project_done:1, status:'Locked'},
        {name:'Executor 7', email:'executor7@gmail.com', no_hp:'081301010101', project_ongoing:'Project 1', project_done:2, status:'Inactive'},
        {name:'Executor 8', email:'executor8@gmail.com', no_hp:'085692900390', project_ongoing:'Project 2', project_done:4, status:'Locked'},
        {name:'Executor 9', email:'executor9@gmail.com', no_hp:'081300010299', project_ongoing:'Project 2', project_done:2, status:'Active'},
        {name:'Executor 10', email:'executor10@gmail.com', no_hp:'081320010292', project_ongoing:'Project 3', project_done:3, status:'Active'}
      ]
    },
    mutations: {},
    actions: {}
}