<!-- =========================================================================================
  File Name: DataListListView.vue
  Description: Data List - List View
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div>
    <organization-chart :datasource="ds"></organization-chart>
  </div>
</template>

<script>
import OrganizationChart from 'vue-organization-chart'
import 'vue-organization-chart/dist/orgchart.css'

export default {
  components: {
    OrganizationChart
  },
  data() {
    return {
        ds: {
          'id': '1',
          'name': 'Chief Executive',
          'title': 'HSW',
          'children': [
            { 'id': '2', 'name': 'Chief of Business & Creative', 'title': 'KTU' ,
                'children': [
                    { 'id': '21', 'name': 'WHE', 'title': 'Account & Planning Lead'},
                    { 'id': '22', 'name': 'ATU', 'title': 'Creative Lead'}
                ]
            },
            { 'id': '3', 'name': 'Chief of Operations', 'title': 'APS',
                'children': [
                    { 'id': '31', 'name': 'MCT', 'title': 'Operations Lead'}
                ]
            },
            { 'id': '4', 'name': 'Chief of Finance', 'title': 'YAD' ,
              'children': [
                { 'id': '5', 'name': 'THA', 'title': 'Finance & Accounting Lead'}
               ]
             }
          ]
        }
      }
    }
}
</script>
