<template>
  <div class="h-screen flex w-full bg-img" id="page-login">
    <div class="vx-col self-center md:w-1/3 w-full">
      <div slot="no-body">
        <div class="vx-row">
          <div class="vx-col mx-auto self-center w-full">
            <div class="p-8">
              <div class="vx-card__title mb-8 text-center">
                <img class="pt-10" src="@/assets/images/pages/logo.svg" style="max-width:120px" />
                <h4 class="mb-4 pt-3" style="font-weight:bold; color:white">Report System</h4>
                <p style="color:white">Six Dimensions</p>
              </div>
              <vs-input
                v-validate="'required|email|min:3'"
                data-vv-validate-on="blur"
                name="email"
                icon="icon icon-user"
                icon-pack="feather"
                label-placeholder="Email"
                v-model="email"
                class="w-full no-icon-border input-rounded-full"
              />
              <span class="text-danger text-sm">{{ errors.first('email') }}</span>

              <vs-input
                data-vv-validate-on="blur"
                v-validate="'required|min:6|max:10'"
                type="password"
                name="password"
                icon="icon icon-lock"
                icon-pack="feather"
                label-placeholder="Password"
                v-model="password"
                class="w-full mt-6 no-icon-border input-rounded-full pt-5"
              />
              <span class="text-danger text-sm">{{ errors.first('password') }}</span>

              <div class="flex flex-wrap justify-center my-5 pt-5">
                <button
                  class="vs-button w-full"
                  :disabled="!validateForm"
                  @click="login"
                  style="background:white;  color:#6399E5; font-weight:bold; border-radius:100px"
                >Login</button>
                <span class="pt-20" style="color:white">2019 | Six Dimension</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "demo@demo.com",
      password: "demodemo",
      checkbox_remember_me: false
    };
  },
  computed: {
    validateForm() {
      return !this.errors.any() && this.email != "" && this.password != "";
    }
  },
  methods: {
    login() {
      const payload = {
        checkbox_remember_me: this.checkbox_remember_me,
        userDetails: {
          email: this.email,
          password: this.password
        },
        notify: this.$vs.notify
      };
      this.$store.dispatch("auth/loginAttempt", payload);
    },
    notifyAlreadyLogedIn() {
      this.$vs.notify({
        title: "Login Attempt",
        text: "You are already logged in!",
        iconPack: "feather",
        icon: "icon-alert-circle",
        color: "warning"
      });
    }
  }
};
</script>

<style lang="scss">
#page-login {
  .social-login {
    .bg-facebook {
      background-color: #1551b1;
    }
    .bg-twitter {
      background-color: #00aaff;
    }
    .bg-google {
      background-color: #1551b1;
    }
    .bg-github {
      background-color: #333;
    }
  }
}
</style>