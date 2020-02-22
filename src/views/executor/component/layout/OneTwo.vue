<template>
  <div class="p-6">
    <div class="vx-row">
      <div :class="item" @click="selectCard(index)" v-for="(item, index) in layout" :key="index">
        <div
          class="vx-card flex items-center justify-center hover:bg-warning hover:text-white cursor-pointer"
          style="height:150px"
        >
          <feather-icon icon="PlusIcon" svgClasses="w-10 h-10" v-if="!report.layoutContent[index]" />
          <div v-else>
            <feather-icon
              v-show="report.layoutContent[index].type=='freetext'"
              icon="AlignLeftIcon"
              svgClasses="w-10 h-10"
              badge
            />
            <feather-icon
              v-show="report.layoutContent[index].type=='table'"
              icon="LayoutIcon"
              svgClasses="w-10 h-10"
              badge
            />
            <feather-icon
              v-show="report.layoutContent[index].type=='chart'"
              icon="PieChartIcon"
              svgClasses="w-10 h-10"
              badge
            />
            <feather-icon icon="CheckIcon" svgClasses="w-10 h-10 text-success" badge />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["report"],
  data() {
    return {
      layout: [
        "vx-col sm:w-full p-5",
        "vx-col sm:w-1/2 p-5",
        "vx-col sm:w-1/2 p-5"
      ]
    };
  },
  methods: {
    selectCard(index) {
      this.$emit("select-card", index);
    }
  }
};
</script>
