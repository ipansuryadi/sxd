<template>
  <div>
    <div slot="no-body">
      <TopbarJoblist @selected-menu="selectedMenu" />
    </div>
    <div>
      <div :is="activeComponent" />
    </div>
  </div>
</template>
<script>
import Greeting from "./component/Greeting";
import JobItem from "./component/JobItem";
import JobFilter from "./component/JobFilter";
import TopbarJoblist from "./component/TopbarJoblist";
import Joblist from "./component/JobList";
import Review from "./component/Review";
import Report from "./component/Report";

export default {
  data() {
    return {
      jobList: [],
      colorx: "success",
      activeComponent: "job-list"
    };
  },
  components: {
    Greeting,
    JobItem,
    JobFilter,
    TopbarJoblist,
    "job-list": Joblist,
    review: Review,
    report: Report
  },
  methods: {
    allJob(status) {
      this.$store.dispatch("executor/setJobStatus", status);
    },
    selectedMenu(val) {
      this.activeComponent = val;
    }
  },
  mounted() {}
};
</script>
<style lang="css">
.con-slot-tabs {
  background: #ffffffc4;
}

.activeChild button.vs-tabs--btn {
  background: #6397e3;
  box-shadow: 0px 4px 20px rgba(143, 143, 143, 0.25);
}
.vs-tabs-primary .con-ul-tabs .activeChild button,
.vs-tabs-primary .con-ul-tabs button:not(:disabled):hover {
  color: white !important;
  background: #6397e3;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.vs-tabs--li button.vs-tabs--btn {
  width: 150px;
  background: #e4e4e4;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-right: 5px;
}
li.vs-tabs--li.activeChild > button > span {
  color: white;
}
.vs-tabs--li button {
  color: #b6b6b6;
  font-weight: bold;
}
</style>
