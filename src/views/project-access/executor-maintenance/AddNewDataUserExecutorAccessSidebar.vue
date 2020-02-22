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

        <vs-row>
          <vs-col vs-justify="center" vs-align="center" vs-sm="12" vs-lg="6">
            <div class="p-6 w-full">
            <!-- CODE -->
            <vs-input label="Name" name="name" v-model="name" class="w-full" />

            <!-- NO HP -->
            <vs-input icon="call" label="No HP" name="no_hp" v-model="n" class="mt-5 mb-5 w-full" />

            <!-- NAME -->
            <vs-input icon="mail_outline" label="Email" name="email" v-model="email" class="mt-5 mb-5 w-full" />

            <!-- ADDRESS -->
            <vs-input icon="home" label="Email" name="email" v-model="email" class="mt-5 mb-5 w-full" />

            <label for="" class="vs-input--label">Address</label>
            <vs-textarea v-model="address" class="mb-5 w-full" />

            <!-- STATUS -->
            <vs-select
              autocomplete
              class="mt-5 mb-5 w-full" 
              label="Status"
              v-model="status"
              >
              <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in optionsStatus" />
            </vs-select>

            </div>
          </vs-col>
          <vs-col vs-justify="center" vs-align="center" vs-sm="12" vs-lg="6">
            <div class="p-6 w-full">
              <label for="" class="vs-input--label mt-5">Profile</label>
              <vs-textarea v-model="profile" class="mb-5 w-full"/>
              <vs-upload @on-success="successUpload" />
            </div>
          </vs-col>
        </vs-row>

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
      address:'',
      profile:'',
      role:'',
      status:'Active',
      settings: { // perfectscrollbar settings
          maxScrollbarLength: 60,
          wheelSpeed: .60,
      },
      optionsStatus:[
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
      this.address = '';
      this.profile = '';
      this.status = 'Active';
    },
    successUpload(){
      this.$vs.notify({color:'success',title:'Upload Success',text:'Lorem ipsum dolor sit amet, consectetur'})
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
    width: 50%;
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
