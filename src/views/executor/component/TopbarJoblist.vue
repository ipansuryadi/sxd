<template>
  <div>
    <div class="vx-row">
      <div
        class="vx-col w-full sm:w-1/2 mb-base cursor-pointer"
        :class="`md:w-1/${list.length}`"
        v-for="(item, index) in list"
        :key="index"
        @click="setActive(index)"
      >
        <vx-card class="custom" :class="item.active?'active':''">
          <div class="vx-row">
            <div class="w-1/4">
              <vs-avatar
                class="m-0"
                :src="
                      require(`@/assets/images/profile/user-uploads/user-13.jpg`)
                    "
                size="48px"
              ></vs-avatar>
            </div>
            <div class="w-3/4">
              <h5 class="mb-2" :class="item.active?'active':''">{{item.label}}</h5>
              <h5 class="mb-2" :class="item.active?'active':''">{{item.count}}</h5>
            </div>
          </div>
        </vx-card>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          label: "Joblist",
          count: "3",
          active: true,
          component: "job-list"
        },
        {
          label: "Review",
          count: "3",
          active: false,
          component: "review"
        },
        {
          label: "Report",
          count: "3",
          active: false,
          component: "report"
        }
      ],
      prevIndex: 0
    };
  },
  methods: {
    setActive(index) {
      this.list[index].active = true;
      this.$emit("selected-menu", this.list[index].component);
      if (this.prevIndex !== undefined && this.prevIndex !== index) {
        this.list[this.prevIndex].active = false;
      }
      this.prevIndex = index;
    }
  }
};
</script>
<style scoped lang="css">
.custom:hover {
  font-weight: 400;
  box-shadow: 0px 0px 10px 1px rgba(var(--vs-primary), 0.7);
}
.custom.active {
  background: linear-gradient(
    118deg,
    rgba(var(--vs-primary), 1),
    rgba(var(--vs-primary), 0.7)
  );
}
h5.mb-2.active {
  color: white;
}
</style>