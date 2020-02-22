<template>
  <div id="chat-app" class="border border-solid border-grey-light rounded relative overflow-hidden">
    <!-- LEFT COLUMN -->
    <vs-sidebar
      class="items-no-padding"
      parent="#chat-app"
      :click-not-close="clickNotClose"
      :hidden-background="clickNotClose"
      v-model="isChatSidebarActive"
      id="chat-list-sidebar"
    >
      <SidebarJob />
      <vs-divider class="border-grey-light m-0" />
      <VuePerfectScrollbar class="chat-scroll-area pt-4" :settings="settings">
        <ul class="chat__contacts bordered-items">
          <li
            class="cursor-pointer"
            v-for="(job, index) in jobs"
            :key="index"
            @click="updateActiveJob(job.id)"
          >
            <SidebarJobItem :job="job" :isActiveJob="isActiveJob(job.id)" />
          </li>
        </ul>
      </VuePerfectScrollbar>
    </vs-sidebar>

    <!-- RIGHT COLUMN -->
    <div
      class="app-fixed-height chat-content-area border border-solid border-grey-light border-t-0 border-r-0 border-b-0"
      :class="{'sidebar-spacer--wide': clickNotClose}"
    >
      <VuePerfectScrollbar class="scroll-area">
        <FormJob :activeJob="activeJob" ref="formJob" />
      </VuePerfectScrollbar>
    </div>
  </div>
</template>
<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import FormJob from "./component/FormJob";
import SidebarJob from "./component/SidebarJob";
import SidebarJobItem from "./component/SidebarJobItem";
export default {
  data() {
    return {
      clickNotClose: true,
      isChatSidebarActive: true,
      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: 0.7
      },
      activeJob: 0
    };
  },
  components: {
    VuePerfectScrollbar,
    SidebarJob,
    SidebarJobItem,
    FormJob
  },
  computed: {
    jobs() {
      return this.$store.getters["executor/jobs"];
    }
  },
  watch: {
    "$route.params.id": function(val) {
      this.activeJob = val;
    }
  },
  methods: {
    setSidebarWidth() {
      if (this.windowWidth < 1200) {
        this.isChatSidebarActive = this.clickNotClose = false;
      } else {
        this.isChatSidebarActive = this.clickNotClose = true;
      }
    },
    isActiveJob(id) {
      return id === this.activeJob;
    },
    updateActiveJob(id) {
      this.$router.push("/executor/jobdetail/" + id);
    }
  },
  mounted() {
    this.activeJob = this.$route.params.id;
  },
  created() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.handleWindowResize);
    });
    this.setSidebarWidth();
  },
  beforeDestroy: function() {
    window.removeEventListener("resize", this.handleWindowResize);
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/vuesax/apps/chat.scss";
</style>