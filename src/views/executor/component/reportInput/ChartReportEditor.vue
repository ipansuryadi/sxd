<template>
  <div>
    <div v-if="!generate" style="min-height:450px">
      <div class="vx-row flex items-center justify-center px-10 mx-10">
        <div class="vx-col w-1/2">
          <div class="vx-row items-center">
            <div class="vx-col w-1/4">
              <b>Chart Type :</b>
            </div>
            <div class="vx-col w-1/4">
              <v-select
                label="name"
                v-model="chartType"
                :options="chartTypeOptions"
                :key="chartTypeKey"
                :clearable="false"
              ></v-select>
            </div>
          </div>
          <div v-for="(item, index) in columnRow" :key="index">
            <div class="vx-row">
              <div class="vx-col w-full">
                <div class="bg-primary my-5 p-2">
                  <b class="text-white">{{item}}</b>
                </div>
              </div>
              <div class="vx-col w-1/2 px-5">
                <div v-if="item==='X-Axis'">
                  <v-select
                    v-model="selectedColumn"
                    label="name"
                    :options="options"
                    :key="columnKey"
                    @input="columnSelected"
                    :clearable="false"
                  ></v-select>
                </div>
                <div v-if="item==='Y-Axis'" style="margin-bottom:5px">
                  <i>
                    <b>{{selectedRow.name}}</b>
                  </i>
                </div>
              </div>
            </div>
            <div
              style="padding:5px"
              v-if="(selectedColumn.code==='joblist'&&item==='X-Axis')||(selectedRow.code==='joblist'&&item==='Y-Axis')"
            >
              <div class="vx-row pt-2">
                <div class="vx-col w-full">
                  <i>Select Field</i>
                </div>
                <div class="vx-col w-full">
                  <v-select
                    multiple
                    v-model="selectedField"
                    label="name"
                    :options="fieldOptions"
                    :key="fieldKey"
                  ></v-select>
                </div>
                <div class="vx-col w-full flex items-center pt-2">
                  <div class="pr-5">
                    <i>From :</i>
                  </div>
                  <datepicker v-model="fromDate" placeholder="Select Date"></datepicker>
                  <div class="px-5">
                    <i>To :</i>
                  </div>
                  <datepicker v-model="toDate" placeholder="Select Date"></datepicker>
                </div>
              </div>
            </div>
            <div
              style="padding:5px"
              v-if="(selectedColumn.code==='venue'&&item==='X-Axis')||(selectedRow.code==='venue'&&item==='Y-Axis')"
            >
              <div class="vx-row">
                <div class="vx-col w-full">
                  <i>Select Venue</i>
                </div>
                <div class="vx-col w-full">
                  <v-select
                    multiple
                    v-model="selectedVenue"
                    label="name"
                    :options="venueOptions"
                    :key="venueKey"
                  ></v-select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else style="min-height:450px">
      <div class="vx-row flex items-center justify-center">
        <div class="vx-col w-3/4">
          <generated-chart :data="result" :summary="summary" />
        </div>
      </div>
    </div>
    <div class="flex justify-between" v-if="!generate">
      <vs-button class="btnx" color="warning" @click="$emit('reset')">Reset</vs-button>
      <vs-button class="btnx" color="success" @click="generateResult">Generate</vs-button>
    </div>
    <div class="flex justify-between" v-else>
      <vs-button class="btnx" color="warning" @click="backFromGenerate">Back</vs-button>
      <vs-button class="btnx" color="success" @click="$emit('save',result)">Save</vs-button>
    </div>
  </div>
</template>

<script>
import vSelect from "vue-select";
import Datepicker from "vuejs-datepicker";
import GeneratedChart from "./GeneratedChart";
const option = {
  code: "",
  name: ""
};
export default {
  props: ["content"],
  components: {
    "v-select": vSelect,
    Datepicker,
    GeneratedChart
  },
  data() {
    return {
      chartType: "",
      chartTypeOptions: [
        { code: "line", name: "Line" },
        { code: "bar", name: "Bar" }
      ],
      columnRow: ["X-Axis", "Y-Axis"],
      options: [
        { code: "joblist", name: "Job List" },
        { code: "venue", name: "Venue" }
      ],
      fromDate: null,
      toDate: null,
      selectedColumn: { ...option },
      selectedRow: { ...option },
      selectedField: null,
      selectedVenue: null,
      fieldOptions: [
        {
          code: "expected-audience",
          name: "Expected Audiens"
        },
        {
          code: "actual-audience",
          name: "Actual Audiens"
        },
        {
          code: "contact-reached",
          name: "Contact Reached"
        },
        {
          code: "selling",
          name: "Selling"
        },
        {
          code: "photo-spot",
          name: "Photo Spot"
        }
      ],
      venueOptions: [
        {
          code: "uin",
          name: "Universitas Islam Negeri"
        },
        {
          code: "sman-52",
          name: "SMAN 52"
        },
        {
          code: "sma-1",
          name: "SMA 1 Cikarang"
        },
        {
          code: "ug",
          name: "Universitas Gunadarma"
        }
      ],
      columnKey: 0,
      rowKey: 0,
      fieldKey: 0,
      venueKey: 0,
      generate: false,
      result: null
    };
  },
  computed: {
    summary() {
      return this.$store.getters["executor/summary"];
    }
  },
  methods: {
    backFromGenerate() {
      this.generate = false;
      this.$emit("generate", false);
    },
    columnSelected(e) {
      this.selectedRow = this.options.find(o => o.code !== e.code);
    },
    rowSelected(e) {
      this.selectedColumn = this.options.find(o => o.code !== e.code);
    },
    mapContentToData(content) {
      this.selectedColumn = content.column;
      this.selectedRow = content.row;
      this.selectedField = content.joblistFields;
      this.selectedVenue = content.venueFields;
      this.fromDate = content.fromDate;
      this.toDate = content.toDate;
      this.chartType = content.chartType;
    },
    generateResult() {
      const result = {
        column: this.selectedColumn,
        row: this.selectedRow,
        joblistFields: this.selectedField,
        venueFields: this.selectedVenue,
        fromDate: this.fromDate,
        toDate: this.toDate,
        chartType: this.chartType
      };
      this.showGenerate(result);
    },
    showGenerate(result) {
      this.result = result;
      this.$emit("generate", true);
      this.generate = true;
    }
  },
  mounted() {
    if (this.content.type) {
      this.showGenerate(this.content.content);
      this.mapContentToData(this.content.content);
    }
  }
};
</script>
