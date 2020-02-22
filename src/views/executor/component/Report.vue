<template>
  <div>
    <div class="vx-row">
      <div class="vx-col w-full md:w-1/3">
        <ReportFilter />
      </div>
      <div class="vx-col w-full md:w-2/3 p5">
        <JobItem />
      </div>
    </div>
  </div>
</template>
<script>
import JobItem from "./JobItem";
import ReportFilter from "./ReportFilter";
export default {
  components: {
    JobItem,
    ReportFilter
  },
  mounted() {
    this.$store.dispatch("executor/setJobStatus", "done");
  }
};
</script>