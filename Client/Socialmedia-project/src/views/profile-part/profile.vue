<template>
  <div class="profile-card p-4">
    <div class="user-info d-flex align-items-center justify-content-between">
      <div class="user-name d-flex align-items-center">
        <img :src="`http://localhost:3000/images/${userData.img}`" alt="" />
        <div>
          <h5>{{ userData.name }} {{ userData.surname }}</h5>
          <span v-if="userData.friends">
            {{ userData.friends.length }} Friends</span
          >
        </div>
      </div>
    </div>
    <hr />
    <div class="user-address d-flex flex-column gap-2">
      <div class="d-flex gap-3 align-items-center">
        <i class="fa-solid fa-location-dot"></i>
        <span>Some Where out there </span>
      </div>
      <div class="d-flex gap-3 align-items-center">
        <i class="fa-solid fa-briefcase"></i>
        <span>Some Where out there </span>
      </div>
    </div>
    <hr />
    <div class="user-feed d-flex flex-column gap-1">
      <div class="d-flex align-items-center justify-content-between">
        <span>who views your profile</span>
        <span>3000</span>
      </div>
      <div class="d-flex align-items-center justify-content-between">
        <span>impressions of your post</span>
        <span>1200</span>
      </div>
    </div>
    <hr />
    <div class="user-social">
      <h4>Social Profiles</h4>
      <div class="d-flex align-items-center gap-3">
        <i class="fa-brands fa-twitter"></i>
        <div class="d-flex flex-column">
          <span class="fw-bold text-primary">Twitter</span>
          <span>Social Network</span>
        </div>
        <i class="fa-solid fa-pen-to-square ms-auto p-2 bd-highlight"></i>
      </div>
      <br />
      <div class="d-flex align-items-center gap-3">
        <i class="fa-brands fa-linkedin"></i>
        <div class="d-flex flex-column">
          <span class="fw-bold text-primary">Linkedin</span>
          <span>Network Platwork</span>
        </div>
        <i class="fa-solid fa-pen-to-square ms-auto p-2 bd-highlight"></i>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      userData: {},
    };
  },
  computed: {
    ...mapState("user", ["userData"]),
  },
  methods: {
    ...mapActions("user", ["fetchUserData"]),
  },
  mounted() {
    this.fetchUserData().then(() => {
      this.userData = this.$store.state.user.userData;
    });
  },
  // methods: {
  //   async getUserData() {
  //     try {
  //       const user = localStorage.getItem("UserId");
  //       const response = await axios.get(
  //         `http://localhost:3000/api/user/data/${user}`
  //       );
  //       if (response.status === 200) {
  //         this.userData = response.data;
  //       } else {
  //         console.log("Request failed with status:", response.status);
  //       }
  //     } catch (err) {
  //       console.error("Error:", err);
  //     }
  //   },
  // },
  // mounted() {
  //   this.getUserData();
  // },
};
</script>
<style scoped>
@import "./profile.css";
</style>
