<template>
  <div style="height:150px; padding:25px">
    <div class="vx-row">
      <div class="vx-col w-full flex items-center justify-between">
        <vs-button @click="pickLayoutPopup=true">Pick Layout</vs-button>
        <vs-button @click="$emit('preview')" color="success">Preview</vs-button>
      </div>
    </div>
    <vs-popup class="holamundo" title="Pick Layout" :active.sync="pickLayoutPopup">
      <div class="p-1">
        <div class="vx-row">
          <!-- layout 1 -->
          <div class="vx-col vx-col sm:w-1/3 mb-5">
            <div @click="pickLayout('four-four')" class="vx-card p-5 hover:bg-grey cursor-pointer">
              <div class="vx-row mb-5">
                <div class="vx-col w-1/2">
                  <div class="border border-solid border-success h-50"></div>
                </div>
                <div class="vx-col w-1/2">
                  <div class="border border-solid border-success h-50"></div>
                </div>
              </div>
              <div class="vx-row">
                <div class="vx-col w-1/2">
                  <div class="border border-solid border-success h-50"></div>
                </div>
                <div class="vx-col w-1/2">
                  <div class="border border-solid border-success h-50"></div>
                </div>
              </div>
            </div>
          </div>
          <!-- layout 2 -->
          <div class="vx-col vx-col sm:w-1/3 mb-5">
            <div @click="pickLayout('one-two')" class="vx-card p-5 hover:bg-grey cursor-pointer">
              <div class="vx-row mb-5">
                <div class="vx-col w-full">
                  <div class="border border-solid border-success h-50"></div>
                </div>
              </div>
              <div class="vx-row">
                <div class="vx-col w-1/2">
                  <div class="border border-solid border-success h-50"></div>
                </div>
                <div class="vx-col w-1/2">
                  <div class="border border-solid border-success h-50"></div>
                </div>
              </div>
            </div>
          </div>
          <!-- layout 3 -->
          <div class="vx-col vx-col sm:w-1/3 mb-5">
            <div @click="pickLayout('two-one')" class="vx-card p-5 hover:bg-grey cursor-pointer">
              <div class="vx-row mb-5">
                <div class="vx-col w-1/2">
                  <div class="border border-solid border-success h-50"></div>
                </div>
                <div class="vx-col w-1/2">
                  <div class="border border-solid border-success h-50"></div>
                </div>
              </div>
              <div class="vx-row">
                <div class="vx-col w-full">
                  <div class="border border-solid border-success h-50"></div>
                </div>
              </div>
            </div>
          </div>
          <!-- layout 4 -->
          <div class="vx-col vx-col sm:w-1/3 mb-5">
            <div
              @click="pickLayout('one-one-horizontal')"
              class="vx-card p-5 hover:bg-grey cursor-pointer"
            >
              <div class="vx-row mb-5">
                <div class="vx-col w-full">
                  <div class="border border-solid border-success h-50"></div>
                </div>
              </div>
              <div class="vx-row">
                <div class="vx-col w-full">
                  <div class="border border-solid border-success h-50"></div>
                </div>
              </div>
            </div>
          </div>
          <!-- layout 5 -->
          <div class="vx-col vx-col sm:w-1/3 mb-5">
            <div
              @click="pickLayout('one-one-vertical')"
              class="vx-card p-5 hover:bg-grey cursor-pointer"
            >
              <div class="vx-row">
                <div class="vx-col w-1/2">
                  <div class="border border-solid border-success h-120"></div>
                </div>
                <div class="vx-col w-1/2">
                  <div class="border border-solid border-success h-120"></div>
                </div>
              </div>
            </div>
          </div>
          <!-- layout 6 -->
          <div class="vx-col vx-col sm:w-1/3 mb-5">
            <div @click="pickLayout('one-full')" class="vx-card p-5 hover:bg-grey cursor-pointer">
              <div class="vx-row">
                <div class="vx-col w-full">
                  <div class="border border-solid border-success h-120 w-133"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </vs-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pickLayoutPopup: false
    };
  },
  methods: {
    pickLayout(val) {
      this.$emit("select-layout", val);
      this.pickLayoutPopup = false;
    }
  }
};
</script>
<style scoped lang="css">
.h-50 {
  height: 50px;
}
.h-120 {
  height: 120px;
}
.w-133 {
  width: 133px;
}
</style>