<template>
  <div class="h-screen flex w-full bg-img" id="page-login">
    <div class="vx-row sm:w-full md:w-3/4 lg:w-1/2 xl:w-1/2 mx-auto self-center">
      <div class="vx-col w-full sm:w-1/2 md:w-1/2">
        <vx-card>
          <div style="display:flex; justify-content:center">
            <vs-icon icon="assignment" size="75px" color="#7367F0"></vs-icon>
          </div>
          <vs-button
            class="shadow-lg w-full"
            type="gradient"
            color="#7367F0"
            gradient-color-secondary="#CE9FFC"
            @click="$router.push('/dashboard/analytics')"
          >Web Configurator</vs-button>
        </vx-card>
      </div>
      <div class="vx-col w-full sm:w-1/2 md:w-1/2">
        <vx-card>
          <div style="display:flex; justify-content:center">
            <vs-icon icon="directions_run" size="75px" color="#7367F0"></vs-icon>
          </div>
          <vs-button
            class="shadow-lg w-full"
            type="gradient"
            color="#7367F0"
            gradient-color-secondary="#CE9FFC"
            @click="$router.push('/executor/dashboard')"
          >Web Executor</vs-button>
        </vx-card>
      </div>
    </div>
  </div>
</template>