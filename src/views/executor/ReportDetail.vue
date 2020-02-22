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
      <div class="chat__profile-search flex p-4">
        <vs-input
          class="w-full input-rounded-full no-icon-border"
          icon="icon-search"
          icon-pack="feather"
          label-placeholder="Report Name"
        />
      </div>
      <VuePerfectScrollbar class="chat-scroll-area pt-4" :settings="settings">
        <ul class="chat__contacts bordered-items" :key="reportListKey">
          <li
            class="cursor-pointer"
            v-for="(report, index) in reports"
            :key="index"
            @click="updateActiveReport(report.id)"
          >
            <SidebarReportItem :report="report" :isActiveReport="isActiveReport(report.id)" />
          </li>
        </ul>
      </VuePerfectScrollbar>
    </vs-sidebar>
    <!-- RIGHT COLUMN -->
    <div
      class="app-fixed-height chat-content-area border border-solid border-grey-light border-t-0 border-r-0 border-b-0"
      :class="{'sidebar-spacer--wide': clickNotClose}"
    >
      <div class="chat__navbar">
        <div class="job-item">
          <div class="flex shadow">
            <div class="flex items-center pl-5">
              <vs-avatar
                class="m-0"
                :src="require(`@/assets/images/profile/user-uploads/user-13.jpg`)"
                size="48px"
              ></vs-avatar>
            </div>
            <div style="flex:6" class="p-5">
              <div>
                <h4>Project Name</h4>
              </div>
              <small>Job No.</small>
              <small>Client</small>
            </div>
            <div style="background:#F3F3F3" class="flex">
              <div style="flex:1" class="p-2">
                <div style="border-bottom:1px solid lightgray">
                  <small>Due Date</small>
                </div>
                <div class="flex items-center">
                  <div style="font-size:28px; font-weight:bold">20</div>
                  <div>
                    <small>Oktober</small>
                    <br />
                    <small>2019</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <VuePerfectScrollbar class="scroll-area">
        <content-report
          v-show="selectedReport.layout"
          :layout="selectedReport.layout"
          :report="selectedReport"
        />
        <popup-layout @select-layout="setLayout" @preview="showPreview" />
      </VuePerfectScrollbar>
    </div>
    <preview-report v-if="preview" @close-preview="preview=false" :report="selectedReport" @published="published"/>
  </div>
</template>
<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import SidebarReportItem from "./component/SidebarReportItem";
import ContentReport from "./component/ContentReport";
import PopupLayout from "./component/PopupLayout";
import PreviewReport from "./component/PreviewReport";
export default {
  data() {
    return {
      clickNotClose: true,
      isChatSidebarActive: true,
      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: 0.7
      },
      activeReport: "",
      activeProject: "",
      popupTemplatePickerActive: false,
      layoutSelected: null,
      preview: false,
      reportListKey:0
    };
  },
  components: {
    VuePerfectScrollbar,
    SidebarReportItem,
    ContentReport,
    PopupLayout,
    PreviewReport
  },
  watch: {
    "$route.params.id": function(val) {
      this.activeReport = val;
    }
  },
  computed: {
    reports() {
      return this.$store.getters["executor/reports"];
    },
    selectedReport() {
      return this.reports.find(o => o.id === this.activeReport);
    }
  },
  methods: {
    published(report){
      this.$store.dispatch("executor/updateReportPublished",report)
      this.reportListKey+=1
    },
    setLayout(val) {
      // this.selectedReport.layout = val;
      const payload = {
        reportId: this.activeReport,
        newLayout: val
      };
      this.$store.dispatch("executor/updateReportLayout", payload);
    },
    setSidebarWidth() {
      if (this.windowWidth < 1200) {
        this.isChatSidebarActive = this.clickNotClose = false;
      } else {
        this.isChatSidebarActive = this.clickNotClose = true;
      }
    },
    isActiveReport(id) {
      return id === this.activeReport;
    },
    updateActiveReport(id) {
      this.activeReport = id;
    },
    showPreview() {
      this.preview = true;
    }
  },
  mounted() {
    this.activeProject = this.$route.params.id;
    this.activeReport = this.reports[0].id;
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
