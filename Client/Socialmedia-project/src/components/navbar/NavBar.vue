<template>
  <header class="p-3">
    <nav
      class="d-flex flex-wrap align-items-center justify-content-around w-100"
    >
      <div
        class="flex-wrap d-flex align-items-center justify-content-center gap-3  w-50"
      >
        <h2 class="text-info">SocialMoon</h2>
        <div class="mobile-responsive" v-if="responsive">
          <i class="fa-solid fa-bars fs-3"></i>
        </div>
        <div class="search-bar w-50  flex-wrap d-flex gap-2 align-items-center ">
          <input type="text" placeholder="Search.." />
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div class="notification-bar flex-wrap d-flex gap-4 align-items-center justify-content-between w-25">
        <div class="d-flex gap-4">
          <i class="fa-solid fa-moon"></i>
          <i class="fa-solid fa-flag"></i>
          <i class="fa-solid fa-bell"></i>
          <i class="fa-solid fa-question"></i>
        </div>
        <button class="w-50 btn btn-outline-info" @click="logout">Logout</button>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  data() {
    return {
      responsive: false,
    };
  },
  created() {
    this.updateMobileStatus();
    window.addEventListener("resize", this.updateMobileStatus);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateMobileStatus);
  },
  methods: {
    updateMobileStatus() {
      this.responsive = window.innerWidth <= 1200;
    },
    logout() {
      localStorage.removeItem("isAuthenticated");
      location.reload();
    },
  },
};
</script>
<style scoped>
@import "./navbar.css";
</style>
