<template>
  <div class="layout--main" :class="[navbarClasses, footerClasses, {'app-page': isAppPage}]">
    <vx-sidebar
      :sidebarItems="sidebarItems"
      :logo="require('@/assets/images/logo/logo.png')"
      title="Report Sys"
      parent=".layout--main"
    />

    <div id="content-area" :class="[contentAreaClass, {'show-overlay': bodyOverlay}]">
      <div class="content-wrapper">
        <div class="mx-5">
          <vx-card class="mt-base">
            <div class="post-header flex justify-between">
              <feather-icon
                class="sm:inline-flex xl:hidden cursor-pointer mr-1"
                icon="MenuIcon"
                @click.stop="showSidebar"
              ></feather-icon>
              <div class="flex items-center">
                <div class="ml-4">
                  <div v-if="pageMode('dashboard')||pageMode('jobdetail')">
                    <h4>Welcome Dito</h4>
                    You have {{countPendingJob}} To do Job List
                  </div>
                  <div v-if="pageMode('reportdetail')">
                    <h4>Report</h4>
                  </div>
                </div>
              </div>
              <div class="flex items-center">
                <vs-avatar
                  class="m-0"
                  :src="require(`@/assets/images/profile/user-uploads/user-13.jpg`)"
                  size="48px"
                ></vs-avatar>
              </div>
            </div>
          </vx-card>
        </div>
        <div class="router-view">
          <div class="router-content mt-0" :class="{'mt-0': navbarType == 'hidden'}">
            <transition :name="routerTransition">
              <div
                class="router-header flex flex-wrap items-center mb-6"
                v-if="$route.meta.breadcrumb || $route.meta.pageTitle"
              >
                <div
                  class="content-area__heading"
                  :class="{'pr-4 border-0 md:border-r border-t-0 border-b-0 border-l-0 border-solid border-grey-light' : $route.meta.breadcrumb}"
                >
                  <h2 class="mb-1">{{ routeTitle }}</h2>
                </div>
                <vx-breadcrumb class="ml-4 md:block hidden" v-if="$route.meta.breadcrumb" />
              </div>
            </transition>
            <div class="content-area__content">
              <back-to-top bottom="5%" visibleoffset="500" v-if="!hideScrollToTop">
                <vs-button icon-pack="feather" icon="icon-arrow-up" class="shadow-lg" />
              </back-to-top>
              <transition :name="routerTransition" mode="out-in">
                <router-view @changeRouteTitle="changeRouteTitle"></router-view>
              </transition>
            </div>
          </div>
        </div>
      </div>

      <the-footer></the-footer>
    </div>
  </div>
</template>

<script>
import VxSidebar from "@/layouts/components/vx-sidebar/VxSidebar.vue";
import TheNavbar from "../components/TheNavbar.vue";
import TheFooter from "../components/TheFooter.vue";
import themeConfig from "@/../themeConfig.js";
import sidebarItems from "./sidebarItemsExecutor.js";
import BackToTop from "vue-backtotop";
const VxTour = () => import("@/components/VxTour.vue");

export default {
  data() {
    return {
      navbarType: themeConfig.navbarType || "floating",
      navbarColor: themeConfig.navbarColor || "#fff",
      footerType: themeConfig.footerType || "static",
      routerTransition: themeConfig.routerTransition || "none",
      isNavbarDark: false,
      routeTitle: this.$route.meta.pageTitle,
      sidebarItems: sidebarItems,
      disableCustomizer: themeConfig.disableCustomizer,
      windowWidth: window.innerWidth, //width of windows
      hideScrollToTop: themeConfig.hideScrollToTop,
      disableThemeTour: themeConfig.disableThemeTour
    };
  },
  watch: {
    $route() {
      this.routeTitle = this.$route.meta.pageTitle;
    },
    isThemeDark(val) {
      if (this.navbarColor == "#fff" && val) {
        this.updateNavbarColor("#10163a");
      } else {
        this.updateNavbarColor("#fff");
      }
    }
  },
  computed: {
    isAppPage() {
      if (this.$route.path.includes("/apps/")) return true;
      else return false;
    },
    isThemeDark() {
      return this.$store.state.theme == "dark";
    },
    sidebarWidth() {
      return this.$store.state.sidebarWidth;
    },
    bodyOverlay() {
      return this.$store.state.bodyOverlay;
    },
    contentAreaClass() {
      if (this.sidebarWidth == "default") return "content-area-default";
      else if (this.sidebarWidth == "reduced") return "content-area-reduced";
      else if (this.sidebarWidth) return "content-area-full";
    },
    navbarClasses() {
      return {
        "navbar-hidden": this.navbarType == "hidden",
        "navbar-sticky": this.navbarType == "sticky",
        "navbar-static": this.navbarType == "static",
        "navbar-floating": this.navbarType == "floating"
      };
    },
    footerClasses() {
      return {
        "footer-hidden": this.footerType == "hidden",
        "footer-sticky": this.footerType == "sticky",
        "footer-static": this.footerType == "static"
      };
    },
    countPendingJob() {
      return this.$store.getters["executor/countPendingJob"];
    }
  },
  methods: {
    pageMode(mode) {
      return this.$route.fullPath.includes(mode);
    },
    showSidebar() {
      this.$store.commit("TOGGLE_IS_SIDEBAR_ACTIVE", true);
    },
    changeRouteTitle(title) {
      this.routeTitle = title;
    },
    updateNavbar(val) {
      this.navbarType = val;
    },
    updateNavbarColor(val) {
      this.navbarColor = val;
      if (val == "#fff") this.isNavbarDark = false;
      else this.isNavbarDark = true;
    },
    updateFooter(val) {
      this.footerType = val;
    },
    updateRouterTransition(val) {
      this.routerTransition = val;
    },
    handleWindowResize(event) {
      this.windowWidth = event.currentTarget.innerWidth;
      this.setSidebarWidth();
    },
    setSidebarWidth() {
      if (this.windowWidth < 1200) {
        this.$store.commit("TOGGLE_IS_SIDEBAR_ACTIVE", false);
        this.$store.dispatch("updateSidebarWidth", "no-sidebar");
        this.disableThemeTour = true;
      } else if (this.windowWidth < 1200) {
        this.$store.dispatch("updateSidebarWidth", "reduced");
      } else {
        this.$store.commit("TOGGLE_IS_SIDEBAR_ACTIVE", true);
      }
    },
    toggleHideScrollToTop(val) {
      this.hideScrollToTop = val;
    }
  },
  components: {
    VxSidebar,
    TheNavbar,
    TheFooter,
    BackToTop,
    VxTour
  },
  created() {
    this.setSidebarWidth();
    if (this.navbarColor == "#fff" && this.isThemeDark) {
      this.updateNavbarColor("#10163a");
    } else {
      this.updateNavbarColor(this.navbarColor);
    }
  }
};
</script>
