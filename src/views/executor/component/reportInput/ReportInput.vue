<template>
  <div>
    <vs-popup v-if="freetextActive" title="Freetext Input Report" :active.sync="freetextActive">
      <free-text-report-editor @save="reportSaved" @reset="reportReset" :content="content" />
    </vs-popup>
    <vs-popup
      :fullscreen="tableGenerateMode"
      v-if="tableActive"
      title="Table Input Report"
      :active.sync="tableActive"
    >
      <table-report-editor
        @generate="generateTable"
        @save="reportSaved"
        @reset="reportReset"
        :content="content"
      />
    </vs-popup>
    <vs-popup
      :fullscreen="true"
      v-if="chartActive"
      title="Chart Input Report"
      :active.sync="chartActive"
    >
      <chart-report-editor
        @generate="generateChart"
        @save="reportSaved"
        @reset="reportReset"
        :content="content"
      />
    </vs-popup>
  </div>
</template>
<script>
import FreeTextReportEditor from "./FreeTextReportEditor";
import TableReportEditor from "./TableReportEditor";
import ChartReportEditor from "./ChartReportEditor";
export default {
  props: ["type", "content"],
  data() {
    return {
      freetextActive: false,
      tableActive: false,
      chartActive: false,
      tableGenerateMode: false,
      chartGenerateMode: false
    };
  },
  components: {
    FreeTextReportEditor,
    TableReportEditor,
    ChartReportEditor
  },
  watch: {
    type(val) {
      this.resetActive();
      switch (val) {
        case "freetext":
          this.freetextActive = true;
          break;
        case "table":
          this.tableActive = true;
          break;
        case "chart":
          this.chartActive = true;
          break;
      }
    }
  },
  methods: {
    generateTable(val) {
      this.tableGenerateMode = val;
    },
    generateChart(val) {
      this.chartGenerateMode = val;
    },
    reportSaved(val) {
      this.resetActive();
      this.$emit("report-saved", val);
    },
    reportReset() {
      this.resetActive();
      this.$emit("report-reset");
    },
    resetActive() {
      this.freetextActive = false;
      this.tableActive = false;
      this.chartActive = false;
    }
  }
};
</script>
