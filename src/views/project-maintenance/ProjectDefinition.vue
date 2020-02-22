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
            <div class="vx-col w-full sm:w-1/2 md:w-1/3 mb-base" v-for="datum in dataTable" v-bind:key="datum">
                <vx-card>
                    <div class="mb-4">
                        <h5 class="mb-2">{{ datum.name }}</h5>
                        <p class="text-grey">Client : {{ datum.client }}</p>
                        <p class="text-grey">Job No : {{ datum.job_no }}</p>
                        <p class="text-grey">Status : {{ datum.status }}</p>
                    </div>
                    <div class="mb-4">
                        <div class="flex justify-between">
                            <small class="font-semibold">{{ datum.job_list_finish }} job list finished</small>
                            <small class="text-grey">{{ datum.total_job_list }}</small>
                        </div>
                        <vs-progress :percent="datum.job_list_finish_percentage" class="block mt-1 shadow-md"></vs-progress>
                        <div class="mt-2 center">
                            <small class="font-semibold center">Periode : {{ datum.project_period }}</small>
                        </div>
                    </div>
                    <div class="flex justify-between flex-wrap">
                        <vs-button type="gradient" class="w-full mt-2" color="#7367F0" gradient-color-secondary="#CE9FFC">Detail</vs-button>
                    </div>
                </vx-card>
            </div>
        </div>
    </div>
</template>

<script>
import AddNewDataSidebar from './AddNewDataProjectSidebar.vue';
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
        this.dataTable = this.$store.state.project.projects;
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
.center{
    text-align: center;
}
</style>