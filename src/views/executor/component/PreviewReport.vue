<template>
  <vs-popup fullscreen class="holamundo" title="Preview Report" :active.sync="popup">
    <div class="vx-row justify-center" style="min-height:450px">
      <div class="vx-col w-3/4">
        <div class="vx-row">
          <div :class="item" v-for="(item, index) in layout[report.layout]" :key="index">
            <div v-if="report.layoutContent[index]">
              <span
                v-if="report.layoutContent[index].type==='freetext'"
                v-html="report.layoutContent[index].content"
              ></span>
              <div v-if="report.layoutContent[index].type==='table'">
                <generated-table :data="report.layoutContent[index].content" :summary="summary" />
              </div>
              <div v-if="report.layoutContent[index].type==='chart'">
                <generated-chart :data="report.layoutContent[index].content" :summary="summary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="vx-row">
      <div class="vx-col w-full flex justify-end">
        <vs-button class="btnx" color="primary" @click="published">Publish</vs-button>
      </div>
    </div>
  </vs-popup>
</template>
<script>
import GeneratedTable from "./reportInput/GeneratedTable";
import GeneratedChart from "./reportInput/GeneratedChart";
export default {
  props: ["report"],
  data() {
    return {
      popup: false,
      layout: {
        "four-four": [
          "vx-col sm:w-1/2 p-5",
          "vx-col sm:w-1/2 p-5",
          "vx-col sm:w-1/2 p-5",
          "vx-col sm:w-1/2 p-5"
        ],
        "one-two": [
          "vx-col sm:w-full p-5",
          "vx-col sm:w-1/2 p-5",
          "vx-col sm:w-1/2 p-5"
        ]
      }
    };
  },
  components: {
    GeneratedTable,
    GeneratedChart
  },
  computed: {
    summary() {
      return this.$store.getters["executor/summary"];
    }
  },
  watch: {
    popup(val) {
      if (!val) {
        this.$emit("close-preview");
      }
    }
  },
  methods: {
    published(){
      this.$emit("published",this.report)
      this.popup=false
    }
  },
  mounted() {
    this.popup = true;
    console.log("summary", this.summary);
  }
};
</script>