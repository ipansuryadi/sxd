<!-- =========================================================================================
    File Name: CardBasic.vue
    Description: Basic Cards
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    <div id="demo-basic-card">
        <add-new-data-sidebar :isSidebarActive="addNewDataSidebar" @closeSidebar="addNewDataSidebar = false" />
        <div class="flex flex-wrap-reverse items-center">

          <!-- ACTION - DROPDOWN -->
          <vs-dropdown vs-trigger-click class="cursor-pointer mr-4 mb-4">

            <div class="p-4 shadow-drop rounded-lg d-theme-dark-bg cursor-pointer flex items-center justify-center text-lg font-medium w-32">
              <span class="mr-2">Actions</span>
              <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
            </div>

            <vs-dropdown-menu>

              <vs-dropdown-item>
                <span>Delete</span>
              </vs-dropdown-item>
              
            </vs-dropdown-menu>
          </vs-dropdown>

          <!-- ADD NEW -->
          <div class="p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-between text-lg font-medium text-base text-primary border border-solid border-primary" @click="addNewDataSidebar = true">
              <feather-icon icon="PlusIcon" svgClasses="h-4 w-4" />
              <span class="ml-2 text-base text-primary">Add New</span>
          </div>
        </div>
        <div class="vx-row">
            <!-- USER PROFILE CARD 2 - MINIMAL -->
            <div class="vx-col w-full sm:w-1/2 md:w-1/3 mb-base" v-for="datum in dataTable" v-bind:key="datum">
                <vx-card class="p-2">
                    <vs-avatar class="mx-auto mb-6 block" size="80px" :src="require(`@/assets/images/logo/brand/${datum.image}`)" />
                    <div class="text-center">
                        <h4>{{ datum.name }}</h4>
                    </div>
                    <template slot="footer">
                        <vs-divider />
                        <div class="flex justify-between">
                            <span class="flex items-center">
                                <feather-icon icon="StarIcon" svgClasses="h-5 w-5 text-warning stroke-current" />
                                <span class="ml-2">{{ datum.status }}</span>
                            </span>
                            <span class="flex items-center">
                                <feather-icon icon="BriefcaseIcon" svgClasses="h-5 w-5 text-primary stroke-current" />
                                <span class="ml-2">{{ datum.total_project }} project</span>
                            </span>
                        </div>
                    </template>
                    <vs-button type="gradient" class="w-full mt-6" color="#7367F0" gradient-color-secondary="#CE9FFC">Detail</vs-button>
                </vx-card>
            </div>

        </div>
    </div>
</template>

<script>
import AddNewDataSidebar from './AddNewDataClientSidebar.vue';
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default{
    data() {
        return {
            dataTable: [],
            itemsPerPage: 5,
            isMounted: false,
            addNewDataSidebar: false,

            settings: { // perfectscrollbar settings
                maxScrollbarLength: 60,
                wheelSpeed: .60,
            },
        }
    },
    components: {
        VuePerfectScrollbar,
        AddNewDataSidebar
    },
    created() {
        this.dataTable = this.$store.state.clientRegistration.clients;
    },
    mounted() {
        this.isMounted = true;
    }
}
</script>

<style lang="scss">
#demo-basic-card {
    .overlay-card {
        .vx-card__collapsible-content {
            max-height: 485px;
        }
    }
}
</style>