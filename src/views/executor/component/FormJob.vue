<template>
  <div class="w-full">
    <div class="p-6">
      <h4>{{selectedJob.name}}</h4>
      <p class="text-small">{{jobStages(selectedJob.stages)}}</p>
      <p class="text-small">Job No : XA/BSE/19/08/001</p>
      <vs-divider class="m-1 mb-4"></vs-divider>
      <div class="vx-col w-full mb-base">
        <vx-card>
          <div class="vx-row mb-6">
            <div class="vx-col w-full">
              <vs-input
                v-validate="'required'"
                name="q1"
                class="w-full"
                label="Question 1"
                v-model="q1"
              />
            </div>
          </div>
          <div class="vx-row mb-6">
            <div class="vx-col w-full">
              <vs-input
                v-validate="'required'"
                name="q2"
                class="w-full"
                label="Question 2"
                v-model="q2"
              />
            </div>
          </div>
          <div class="vx-row mb-6">
            <div class="vx-col w-full">
              <vs-input
                v-validate="'required'"
                name="q3"
                class="w-full"
                label="Question 3"
                v-model="q3"
              />
            </div>
          </div>
          <div class="vx-row mb-6">
            <div class="vx-col w-full">
              <vs-input
                v-validate="'required'"
                name="q4"
                class="w-full"
                label="Question 4"
                v-model="q4"
              />
            </div>
          </div>
          <div class="vx-row mb-6">
            <div class="vx-col w-full">
              <p>Please upload the photo</p>
              <div class="mt-0">
                <vs-upload multiple text="Can Be Upload Multiple" />
              </div>
            </div>
          </div>
          <div class="vx-row mb-6 mt-6">
            <div class="vx-col w-full">
              <p>Please upload the video</p>
              <div class="mt-0">
                <vs-upload multiple text="Can Be Upload Multiple" />
              </div>
            </div>
          </div>
          <div class="vx-row mb-6">
            <div class="vx-col w-full">
              <vs-checkbox
                class="inline-flex"
                v-model="check"
                v-validate="'required'"
                name="check"
              >Lorem ipsum, or lipsum as it is sometimes known</vs-checkbox>
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full">
              <vs-button class="mr-3 mb-2" :disabled="!validateForm" @click="submitNext">Submit Next</vs-button>
              <vs-button color="warning" type="border" class="mb-2" @click="reset">Reset</vs-button>
            </div>
          </div>
        </vx-card>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["activeJob"],
  data() {
    return {
      q1: "",
      q2: "",
      q3: "",
      q4: "",
      check: false
    };
  },
  watch: {
    selectedJob() {
      this.reset();
    }
  },
  computed: {
    selectedJob() {
      return this.$store.getters["executor/selectedJob"](this.activeJob);
    },
    validateForm() {
      return (
        !this.errors.any() &&
        this.q1 != "" &&
        this.q2 != "" &&
        this.q3 != "" &&
        this.q4 != "" &&
        this.check != false
      );
    }
  },
  methods: {
    redirectToFirstPendingJob() {
      const firstJob = this.$store.getters["executor/jobsFilteredByStatus"][0];
      this.$router.push("/executor/jobdetail/" + firstJob.id);
    },
    reset() {
      this.q1 = "";
      this.q2 = "";
      this.q3 = "";
      this.q4 = "";
      this.check = false;
    },
    submitNext() {
      const payload = {
        activeJob: this.activeJob,
        ...this.$data
      };
      this.$store.dispatch("executor/submitJobDetail", payload);
      this.reset();
      this.redirectToFirstPendingJob();
    },
    jobStages(stages) {
      return stages.reduce((acc, curr) => (curr += " > " + acc));
    }
  }
};
</script>