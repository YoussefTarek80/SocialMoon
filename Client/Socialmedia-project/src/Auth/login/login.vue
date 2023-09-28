<template>
  <div class="box rounded-4 p-3 shadow-lg">
    <h1 class="text-info">SocialMoon</h1>
    <form action="" method="post" @submit.prevent="login">
      <div>
        <input type="text" placeholder="Email" v-model="email" />
      </div>
      <div>
        <input type="password" placeholder="Password" v-model="password" />
      </div>
      <button class="btn btn-info mt-4 mb-4 w-100">
        <span>Login</span>
        <reload :show="false" />
      </button>
      <router-link to="/" class="text-decoration-none"
        >Forgotten account?</router-link
      >
    </form>
    <div class="mt-4">
      <span class="divide-box">or</span>
    </div>
    <router-link to="/signup" class="btn btn-outline-info mt-4 fs-6"
      >Create new Account</router-link
    >
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const loginuser = {
          email: this.email,
          password: this.password,
        };
        const response = await axios.post(
          "http://localhost:3000/api/auth/login",
          loginuser
        );
        this.$root.isAuthenticated = true;
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("UserId",response.data.UserIdLogin)
        if (response.data) {
          this.$router.replace("/explore");
        } else {
          console.log("cant logging");
        }
      } catch (err) {
        console.log(err);
      }
    },
    reload() {},
  },
};
</script>
<style scoped>
@import "./login.css";
</style>
