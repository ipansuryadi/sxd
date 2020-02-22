<template>
  <div class="vx-row">
    <div class="vx-col w-full">
      <vue-apex-charts
        :type="data.chartType.code"
        height="400"
        :options="chartOptions"
        :series="series"
        :key="chartKey"
      />
    </div>
  </div>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
export default {
  props: ["data", "summary"],
  data() {
    return {
      chartKey: 0,
      series: null,
      chartOptions: {
        dataLabels: {
          enabled: true
        },
        stroke: {
          curve: "smooth"
        },
        colors: ["#7367F0", "#28C76F", "#EA5455", "#FF9F43", "#1E1E1E"],
        xaxis: null,
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm"
          }
        }
      }
    };
  },
  components: {
    VueApexCharts
  },
  methods: {
    table(type) {
      let columnHeader;
      let rowHeader;
      if (this.data.column.code === "joblist") {
        columnHeader = this.data.joblistFields;
        rowHeader = this.data.venueFields;
      } else {
        columnHeader = this.data.venueFields;
        rowHeader = this.data.joblistFields;
      }
      return type === "columnHeader" ? columnHeader : rowHeader;
    },
    createXAxos() {
      const columnHeader = this.table("columnHeader");
      let categories = [];
      columnHeader.forEach(element => {
        categories.push(element.name);
      });
      const xaxis = {
        type: "category",
        categories: categories
      };
      this.chartOptions.xaxis = { ...xaxis };
    },
    displayValue(x, y) {
      const jobCode = this.data.column.code === "joblist" ? x : y;
      const venueCode = this.data.column.code === "venue" ? x : y;
      const obj = this.summary.find(o => {
        return o.jobCode === jobCode && o.venueCode === venueCode;
      });
      return (obj && obj.value) || 0;
    },
    createSeries() {
      const columnHeader = this.table("columnHeader");
      const rowHeader = this.table("rowHeader");
      let mySeries = [];
      rowHeader.forEach(y => {
        let myData = [];
        columnHeader.forEach(x => {
          myData.push(this.displayValue(x.code, y.code));
        });
        mySeries.push({ name: y.name, data: myData });
      });
      this.series = [...mySeries];
    }
  },
  mounted() {
    this.createXAxos();
    this.createSeries();
  }
};
</script>