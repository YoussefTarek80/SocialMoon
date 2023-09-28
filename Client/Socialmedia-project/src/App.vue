<template>
  <router-view></router-view>
</template>

<script>
export default {
  data() {
    return {
      isAuthenticated: false,
    };
  },
  created() {
    const storedAuthStatus = localStorage.getItem("isAuthenticated");
    if (storedAuthStatus === "true") {
      this.$root.isAuthenticated = true;
    }
  },
  watch: {
    $route(to) {
      if (to.meta.requiresAuth && !this.isAuthenticated) {
        this.$router.replace("/login");
      }
    },
  },
};
</script>
