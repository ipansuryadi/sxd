<template>
  <div class="w-full">
    <vs-popup title="Pick Report Type" :active.sync="reportPickerActive">
      <div class="vx-row">
        <div class="vx-col w-1/3">
          <vs-button
            size="large"
            class="bg-primary-gradient w-full"
            icon-pack="feather"
            icon="icon-align-left"
            @click="reportTypeSelected('freetext')"
          >Freetext</vs-button>
        </div>
        <div class="vx-col w-1/3">
          <vs-button
            size="large"
            class="bg-primary-gradient w-full"
            icon-pack="feather"
            icon="icon-layout"
            @click="reportTypeSelected('table')"
          >Table</vs-button>
        </div>
        <div class="vx-col w-1/3">
          <vs-button
            size="large"
            class="bg-primary-gradient w-full"
            icon-pack="feather"
            icon="icon-pie-chart"
            @click="reportTypeSelected('chart')"
          >Chart</vs-button>
        </div>
      </div>
    </vs-popup>
    <div
      :is="layout"
      @select-card="selectCard"
      :report="report"
      :key="layoutKey"
      style="margin-bottom:-50px"
    />
    <report-input
      v-if="selectedContent"
      :type="reportType"
      :content="selectedContent"
      @report-saved="saveReport"
      @report-reset="resetReport"
    />
  </div>
</template>
<script>
import FourFour from "./layout/FourFour";
import OneTwo from "./layout/OneTwo";
import TwoOne from "./layout/TwoOne";
import OneOneHorizontal from "./layout/OneOneHorizontal";
import OneOneVertical from "./layout/OneOneVertical";
import OneFull from "./layout/OneFull";
import ReportInput from "./reportInput/ReportInput";
export default {
  props: ["report", "layout"],
  components: {
    "four-four": FourFour,
    "one-two": OneTwo,
    "two-one": TwoOne,
    "one-one-horizontal": OneOneHorizontal,
    "one-one-vertical": OneOneVertical,
    "one-full": OneFull,
    ReportInput
  },
  data() {
    return {
      reportPickerActive: false,
      reportType: "",
      layoutContentIndex: "",
      selectedContent: "",
      layoutKey: 0
    };
  },
  watch: {
    report(val) {
      this.report = val;
    }
  },
  methods: {
    selectCard(index) {
      this.layoutContentIndex = index;
      this.reportType = "";
      if (!this.report.layoutContent[index]) {
        this.selectedContent = { type: "", content: "" };
        this.reportPickerActive = true;
      } else {
        this.selectedContent = { ...this.report.layoutContent[index] };
        setTimeout(() => {
          this.reportTypeSelected(this.report.layoutContent[index].type);
        }, 50);
      }
    },
    reportTypeSelected(type) {
      this.reportPickerActive = false;
      this.reportType = type;
    },
    saveReport(val) {
      const content = {
        type: this.reportType,
        content: val
      };
      this.report.layoutContent[this.layoutContentIndex] = content;
      this.$store.dispatch("executor/updateReport", this.report);
      this.layoutKey += 1;
    },
    resetReport() {
      this.report.layoutContent[this.layoutContentIndex] = null;
      this.layoutKey += 1;
    }
  },
  mounted() {
    console.log("content report ", this.report);
  }
};
</script>