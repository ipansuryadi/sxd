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
      appUsers:[
        {name:'User 1', email:'user1@sixdimensions.co.id', role:'Chief Executive', status:'Active'},
        {name:'User 2', email:'user2@sixdimensions.co.id', role:'Chief of Business & Creative', status:'Locked'},
        {name:'User 3', email:'user3@sixdimensions.co.id', role:'Chief of Operations',status:'Active'},
        {name:'User 4', email:'user4@sixdimensions.co.id', role:'Chief of Finance',status:'Active'},
        {name:'User 5', email:'user5@sixdimensions.co.id', role:'Account & Planning Head',status:'Active'},
        {name:'User 6', email:'user6@sixdimensions.co.id', role:'Project Leader 1',status:'Locked'},
        {name:'User 7', email:'user7@sixdimensions.co.id', role:'Project Leader 2',status:'Inactive'},
        {name:'User 8', email:'user8@sixdimensions.co.id', role:'Creative Lead',status:'Locked'},
        {name:'User 9', email:'user9@sixdimensions.co.id', role:'Operations Lead',status:'Active'},
        {name:'User 10', email:'user10@sixdimensions.co.id', role:'Creative Service Lead',status:'Active'}
      ]
    },
    mutations: {},
    actions: {}
}