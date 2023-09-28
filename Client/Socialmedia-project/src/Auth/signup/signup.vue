<template>
  <div class="center d-flex align-items-center justify-content-center">
    <div class="box rounded-2 p-3">
      <h3>Create a new account</h3>
      <hr />
      <form
        action=""
        method="post"
        @submit.prevent="registerUser"
        enctype="multipart/form-data"
      >
        <div class="container d-flex flex-column gap-3">
          <div class="row">
            <div class="col">
              <input
                type="file"
                id="img"
                name="img"
                accept="image/*"
                @change="handleFileUpload"
              />
              <label for="img" class="custom-file-upload">Choose Image</label>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <img
                v-if="selectfile"
                :src="imageUrl"
                alt="Selected Image"
                class="preview-image shadow-lg"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <input type="text" placeholder="First Name" v-model="name" />
            </div>
            <div class="col-6">
              <input type="text" placeholder="Surname" v-model="surname" />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <input type="text" placeholder="Email" v-model="email" />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <input
                type="password"
                placeholder="New Password"
                v-model="password"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-12 text-start ms-2">
              <span>Date of Birth</span>
            </div>
            <div class="col">
              <select id="day" v-model="selectedDay">
                <option value="" disabled>Select Day</option>
                <option v-for="day in days" :key="day" :value="day">
                  {{ day }}
                </option>
              </select>
            </div>
            <div class="col">
              <select id="month" v-model="selectedMonth">
                <option value="" disabled>Select Month</option>
                <option v-for="month in monthes" :key="month" :value="month">
                  {{ month }}
                </option>
              </select>
            </div>
            <div class="col">
              <select id="year" v-model="selectYear">
                <option value="" disabled>Select Year</option>
                <option v-for="year in years" :key="year" :value="year">
                  {{ year }}
                </option>
              </select>
            </div>
          </div>
          <div class="row">
            <span class="text-start ms-3 mb-3">Gender</span>
            <div class="">
              <select id="gender" v-model="selectedGender">
                <option value="" disabled>Select Gender</option>
                <option v-for="gender in genders" :key="gender" :value="gender">
                  {{ gender }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <button class="btn btn-info mt-5">Create New Account</button>
        <div class="mt-2">
          <router-link to="/login" class="text-decoration-none"
            >Already have an account?</router-link
          >
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      surname: "",
      email: "",
      password: "",
      selectedDay: "",
      selectedMonth: "",
      selectYear: "",
      selectedGender: "",
      selectfile: null,
      days: [],
      monthes: [],
      years: [],
      genders: ["Male", "Female"],
      imageUrl: null,
    };
  },
  methods: {
    async registerUser() {
      try {
        const formData = new FormData(); 
        formData.append("img", this.selectfile);
        formData.append("name", this.name);
        formData.append("surname", this.surname);
        formData.append("email", this.email);
        formData.append("password", this.password);
        formData.append("day", this.selectedDay);
        formData.append("month", this.selectedMonth);
        formData.append("year", this.selectYear);
        formData.append("gender", this.selectedGender);
        const response = await axios.post(
          "http://localhost:3000/api/auth/register",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (response.status === 200) {
          console.log("Registration successful");
          this.clear();
        } else {
          console.log("Registration failed");
        }
      } catch (err) {
        console.error("An error occurred:", err);
      }
    },
    // async registerUser() {
    //   try {
    //     const userData = {
    //       img: this.imageUrl,
    //       name: this.name,
    //       surname:this.surname,
    //       email: this.email,
    //       password: this.password,
    //       day: this.selectedDay,
    //       month: this.selectedMonth,
    //       year: this.selectYear,
    //       gender: this.selectedGender,
    //     };
    //     const response = await axios.post(
    //       "http://localhost:3000/api/auth/register",
    //       userData
    //     );
    //     if (response.status === 200) {
    //       console.log("Registration successful");
    //       this.clear();
    //     } else {
    //       console.log("Registration failed");
    //     }
    //   } catch (err) {
    //     console.error("An error occurred:", err);
    //   }
    // },
    handleFileUpload(event) {
      this.selectfile = event.target.files[0];
      if (this.selectfile) {
        console.log("Selected file:", this.selectfile);
        this.imageUrl = URL.createObjectURL(this.selectfile);
      }
    },
    clear() {
      this.name = "";
      this.surname = "";
      this.email = "";
      this.password = "";
      this.selectedDay = "";
      this.selectedMonth = "";
      this.selectYear = "";
      this.selectedGender = "";
      this.selectfile = null;
      this.imageUrl = null;
    },
    getDays() {
      this.days = Array.from({ length: 31 }, (_, index) => index + 1);
    },
    getMonthes() {
      this.monthes = Array.from({ length: 12 }, (_, index) => index + 1);
    },
    getYears() {
      const currentYear = new Date().getFullYear();
      const startYear = 1900;
      this.years = Array.from(
        { length: currentYear - startYear + 1 },
        (_, index) => startYear + index
      );
    },
  },
  mounted() {
    this.getDays();
    this.getMonthes();
    this.getYears();
  },
};
</script>
<style scoped>
@import "./signup.css";
</style>
