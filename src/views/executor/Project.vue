<template>
    <div id="demo-basic-card">
      <h4>My Project</h4>
      <vs-divider class="m-1 pt-4 pb-4"></vs-divider>
        <div class="vx-row" @click="$router.push('/executor/projectdetail/'+1)">
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
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default{
    data() {
        return {
            dataTable: [],
            itemsPerPage: 5,
            isMounted: false,

            settings: { // perfectscrollbar settings
                maxScrollbarLength: 60,
                wheelSpeed: .60,
            },
        }
    },
    components: {
        VuePerfectScrollbar
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