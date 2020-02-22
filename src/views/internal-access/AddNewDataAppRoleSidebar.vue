<!-- =========================================================================================
  File Name: AddNewDataSidebar.vue
  Description: Add New Data - Sidebar component
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <vs-sidebar click-not-close position-right parent="body" default-index="1" color="primary" class="add-new-data-sidebar items-no-padding" spacer v-model="isSidebarActiveLocal">
    <div class="mt-6 flex items-center justify-between px-6">
        <h4>ADD NEW DATA</h4>
        <feather-icon icon="XIcon" @click.stop="isSidebarActiveLocal = false" class="cursor-pointer"></feather-icon>
    </div>
    <vs-divider class="mb-0"></vs-divider>

    <VuePerfectScrollbar class="scroll-area--data-list-add-new pt-4 pb-6" :settings="settings">

      <div class="p-6">
        <!-- CODE -->
        <vs-input label="Code" name="code" v-model="code" class="mt-5 w-full" />

        <!-- NAME -->
        <vs-input label="Name" name="name" v-model="name" class="mt-5 mb-5 w-full" />

        <label class="mt-5 vs-input--label">Permission Access</label>
        <!-- CATEGORY -->
        <treeselect v-model="value" :multiple="true" :options="options" class="w-full" />

      </div>
    </VuePerfectScrollbar>

    <div class="flex flex-wrap items-center justify-center p-6" slot="footer">
      <vs-button class="mr-6" @click="submit">Add Data</vs-button>
      <vs-button type="border" color="danger" @click="isSidebarActiveLocal = false">Cancel</vs-button>
    </div>
  </vs-sidebar>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import Treeselect from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'

export default {
  props: {
    isSidebarActive: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      code:'',
      name: '',
      settings: { // perfectscrollbar settings
          maxScrollbarLength: 60,
          wheelSpeed: .60,
      },
      value: null,
        // define options
        options: [ 
          {
            id: 'pc',
            label: 'Parameter Config'
          },
          {
            id: 'at',
            label: 'Audit Trail'
          },
          {
            id: 'ia',
            label: 'Internal Access',
            children: [ {
              id: 'ar',
              label: 'App Role',
            }, {
              id: 'au',
              label: 'App User',
            }, {
              id: 'ou',
              label: 'Organization Unit',
            } ],
          },
          {
            id: 'pm',
            label: 'Project Maintenance',
            children: [ {
              id: 'jl',
              label: 'Job List',
            }, {
              id: 'pd',
              label: 'Project Definition',
            } ],
          },
          {
            id: 'pa',
            label: 'Project Access',
            children: [ {
              id: 'cm',
              label: 'Client Maintenance',
              children: [ {
                id: 'cr',
                label: 'Client Registration',
              }, {
                id: 'rs',
                label: 'Report Setup',
              }, {
                id: 'uca',
                label: 'User Client Access',
              } ]
            },
            {
              id: 'em',
              label: 'Executor Maintenance',
              children: [ {
                id: 'er',
                label: 'Executor Registration',
              }, {
                id: 'uea',
                label: 'User Executor Access',
              } ]
            } ],
          } ],
    }
  },
  computed: {
    isSidebarActiveLocal: {
      get() {
        return this.isSidebarActive
      },
      set(val) {
        if(!val) {
          this.$emit('closeSidebar');
          this.initValues();
        }
      }
    }
  },
  methods: {
    initValues() {
      this.code = '';
      this.name = '';
      this.value = null; 
    },
    submit(){
      this.$parent.dataTable.unshift({'code':this.code,'name':this.name});
      this.isSidebarActiveLocal = false;
      this.$vs.notify({
        title:'Success',
        text:'Data Successfully Added',
        color:'success'
      })
    }
  },
  components: {
    VuePerfectScrollbar,
    Treeselect
  }
}
</script>

<style lang="scss" scoped>
.add-new-data-sidebar {
  /deep/ .vs-sidebar--background {
    z-index: 52010;
  }

  /deep/ .vs-sidebar {
    z-index: 52010;
    width: 400px;
    max-width: 90vw;

    .img-upload {
      margin-top: 2rem;

      .con-img-upload {
        padding: 0;
      }

      .con-input-upload {
        width: 100%;
        margin: 0;
      }
    }
  }
}

.scroll-area--data-list-add-new {
    height: calc(100% - 4.3rem);
}
</style>
