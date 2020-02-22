<template>
  <div>
    <div class="vx-row">
      <div class="vx-col w-full md:w-1/3">
        <JobFilter />
      </div>
      <div class="vx-col w-full md:w-2/3 p5">
        <JobItem />
      </div>
    </div>
  </div>
</template>
<script>
import JobItem from "./JobItem";
import JobFilter from "./JobFilter";
export default {
  components: {
    JobItem,
    JobFilter
  },
  mounted() {
    this.$store.dispatch("executor/setJobStatus", "pending");
  }
};
</script>