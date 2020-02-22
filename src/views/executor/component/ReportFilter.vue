<template>
  <div class="shadow p-5" style="height:75vmin;">
    <div style="width:100%">
      <div class="font-semibold pb-5">Filter Data</div>
      <div class="search-page__search-bar flex items-center pb-5">
        <vs-input
          class="w-full input-rounded-full no-icon-border"
          icon="icon-search"
          icon-pack="feather"
          label-placeholder="Project Name"
          v-model="projectName"
        />
      </div>
      <div class="search-page__search-bar flex items-center pb-5">
        <vs-input
          class="w-full input-rounded-full no-icon-border"
          icon="icon-search"
          icon-pack="feather"
          label-placeholder="Client"
          v-model="clientName"
        />
      </div>
      <div class="pb-5">
        <datepicker
          :minimumView="'month'"
          :maximumView="'month'"
          placeholder="Current Month"
          v-model="jobDueDateFrom"
        ></datepicker>
      </div>
      <div class="pb-5">
        <datepicker
          :minimumView="'month'"
          :maximumView="'month'"
          placeholder="Current Month"
          v-model="jobDueDateTo"
        ></datepicker>
      </div>
    </div>
    <div>
      <vs-button class="w-full" @click="filterJob">Apply</vs-button>
    </div>
  </div>
</template>
<script>
import Datepicker from "vuejs-datepicker";
export default {
  data() {
    return {
      projectName: null,
      clientName: null,
      jobDueDateFrom: null,
      jobDueDateTo: null
    };
  },
  components: {
    Datepicker
  },
  methods: {
    filterJob() {
      const payload = {
        project: this.projectName,
        client: this.clientName
      };
      this.$store.dispatch("executor/setJobSearchQuery", payload);
    }
  },
  mounted() {
    this.$store.dispatch("executor/resetSearch");
  }
};
</script>
<style lang="css">
div.vdp-datepicker div input {
  width: 100%;
}
</style>