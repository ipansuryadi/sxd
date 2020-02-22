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
        <vs-input label="Name" name="name" v-model="name" class="mt-5 w-full" />

        <!-- NAME -->
        <vs-input label="Email" name="email" v-model="email" class="mt-5 mb-5 w-full" />

        <!-- ROLE -->
        <vs-select
          autocomplete
          class="mt-5 mb-5 w-full" 
          label="Role"
          v-model="role"
          >
          <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in options1" />
        </vs-select>

        <!-- STATUS -->
        <vs-select
          autocomplete
          class="mt-5 mb-5 w-full" 
          label="Status"
          v-model="status"
          >
          <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in options2" />
        </vs-select>

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
      name:'',
      email:'',
      role:'',
      status:'Active',
      settings: { // perfectscrollbar settings
          maxScrollbarLength: 60,
          wheelSpeed: .60,
      },
      options1:[
        {text:'Super Admin',value:'Super Admin'},
        {text:'Chief Executive',value:'Chief Executive'},
        {text:'Chief of Business & Creative',value:'Chief of Business & Creative'},
        {text:'Chief of Operations',value:'Chief of Operations'},
        {text:'Chief of Finance',value:'Chief of Finance'},
      ],
      options2:[
        {text:'Active',value:'Active'},
        {text:'Inactive',value:'Inactive'},
        {text:'Locked',value:'Locked'}
      ],
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
      this.name = '';
      this.email = '';
      this.role = ''; 
      this.status = 'Active';
    },
    submit(){
      this.$parent.dataTable.unshift({'name':this.name,'email':this.email,'role':this.role,'status':this.status});
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
