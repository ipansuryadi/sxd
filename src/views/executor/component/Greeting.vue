<template>
  <vx-card class="mt-base">
    <div class="post-header flex">
      <div class="flex items-center">
        <vs-avatar
          class="m-0"
          :src="require(`@/assets/images/profile/user-uploads/user-13.jpg`)"
          size="48px"
        ></vs-avatar>
      </div>
      <div class="flex items-center">
        <div class="ml-4">
          <h4>Welcome Dito</h4>
          <div>You have {{this.$store.getters["executor/countPendingJob"]}} Todo Joblist</div>
        </div>
      </div>
    </div>
  </vx-card>
</template>