<template>
  <div>
    <div class="p-5">
      <vx-card
        :class="isActiveReport?'border border-primary border-solid shadow-lg': 'border border-grey-light border-solid no-shadow'"
      >
        <template slot="actions">
          <feather-icon
            v-if="report.isPublished"
            icon="CheckCircleIcon"
            svgClasses="w-10 h-10 text-success absolute pin-r"
            badge
          ></feather-icon>
        </template>
        <img
          :src="require(`@/assets/images/pages/${report.screenShot}`)"
          alt="content-img"
          class="responsive rounded-lg"
        />
        <div class="my-6">
          <h5 class="mb-2">{{ report.page }}</h5>
          <p class="text-grey">{{ report.name }}</p>
        </div>
      </vx-card>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    report: {
      type: Object,
      required: true
    },
    isActiveReport: {
      type: Boolean
    }
  },
  methods: {}
};
</script>