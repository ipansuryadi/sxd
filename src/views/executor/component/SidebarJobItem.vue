<template>
  <div>
    <div :class="{'bg-primary-gradient text-white shadow-lg': isActiveJob}">
      <div class="p-5">
        <div style="text-align:center">
          <h5 class="font-semibold" :class="{'text-white': isActiveJob}">{{job.name}}</h5>
          <small>{{jobStages(job.stages)}}</small>
        </div>
        <vs-divider class="border-grey-light my-2" />
        <div style="display:flex">
          <div style="flex:1">Job No</div>
          <div style="flex:1">{{job.jobNo}}</div>
        </div>
        <div style="display:flex">
          <div style="flex:1">Project</div>
          <div style="flex:1">{{job.project}}</div>
        </div>
        <div style="display:flex">
          <div style="flex:1">Due Date</div>
          <div style="flex:1">{{job.dueDate}}</div>
        </div>
        <div style="display:flex">
          <div style="flex:1">Client</div>
          <div style="flex:1">{{job.client}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    job: {
      type: Object,
      required: true
    },
    isActiveJob: {
      type: Boolean
    }
  },
  methods: {
    jobStages(stages) {
      return stages.reduce((acc, curr) => (curr += " > " + acc));
    }
  }
};
</script>