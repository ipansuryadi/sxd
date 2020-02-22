<template>
  <div>
    <div class="mb-5" v-for="(job, index) in jobs" :key="index">
      <div class="job-item">
        <div class="flex shadow" @click="toDetail(job.id)">
          <div class="flex items-center pl-5">
            <vs-avatar
              class="m-0"
              :src="require(`@/assets/images/profile/user-uploads/user-13.jpg`)"
              size="48px"
            ></vs-avatar>
          </div>
          <div style="flex:6" class="p-5">
            <div>
              <h3>{{job.name}}</h3>
            </div>
            <div>{{jobStages(job.stages)}}</div>
          </div>
          <div style="background:#F3F3F3" class="flex">
            <div style="flex:1" class="p-2">
              <div style="border-bottom:1px solid lightgray">
                <small>{{jobStatus==='pending'?'Due Date':'Submitted Date'}}</small>
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
            <div v-if="jobStatus==='pending'" style="background:red; width:10px"></div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "JobItem",
  computed: {
    jobs() {
      return this.$store.getters["executor/jobs"];
    },
    jobStatus() {
      return this.$store.state.executor.jobStatus;
    }
  },
  methods: {
    jobStages(stages) {
      return stages.reduce((acc, curr) => (curr += " > " + acc));
    },
    toDetail(id) {
      if (this.jobStatus === "pending") {
        this.$router.push("/executor/jobdetail/" + id);
      } else if (this.jobStatus === "done") {
        this.$router.push("/executor/reportdetail/" + id);
      }
    }
  }
};
</script>
<style lang="css">
.job-item:hover {
  box-shadow: 0 2px 4px 0 rgba(255, 74, 74, 0.5) !important;
  cursor: pointer;
}
</style>