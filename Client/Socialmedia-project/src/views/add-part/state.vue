<template>
  <div class="main">
    <form
      action=""
      method="post"
      @submit.prevent="addPost"
      enctype="multipart/form-data"
    >
      <div>
        <div class="user-think">
          <img :src="`http://localhost:3000/images/${userData.img}`" alt="" />
          <input
            type="text"
            placeholder="What's on your mind.."
            v-model="Text"
          />
        </div>
      </div>
      <hr />
      <div class="options p-3">
        <div class="options-buttons">
          <i class="fa-solid fa-image"></i>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            @change="handleFileChange"
          />
          <label for="image">image</label>
        </div>
        <div class="options-buttons">
          <i class="fa-solid fa-clipboard"></i>
          <span>clip</span>
        </div>
        <div class="options-buttons">
          <i class="fa-solid fa-paperclip"></i>
          <span>Attachment</span>
        </div>
        <div class="options-buttons">
          <i class="fa-solid fa-audio-description"></i>
          <span>Audio</span>
        </div>
      </div>
      <div>
        <img
          v-if="selectfile"
          :src="imageUrl"
          alt="Selected Image"
          class="preview-image shadow-lg"
        />
      </div>
      <div class="w-100 mt-4">
        <button class="btn btn-info w-100">POST</button>
      </div>
    </form>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      userData: [],
      Text: "",
      likes: null,
      comments: "",
      postimage: "",
      imageUrl: "",
      selectfile: null,
    };
  },
  computed: {
    ...mapState("user", ["userData"]),
  },
  methods: {
    ...mapActions("user", ["fetchUserData"]),
    async addPost() {
      try {
        const newpost = {
          Text: this.Text,
          likes: this.likes,
          comments: this.comments,
          Postimg:this.imageUrl
        };
        const userid = localStorage.getItem("UserId");
        const response = await axios.post(
          `http://localhost:3000/api/post/add/${userid}`,
          newpost
        );
        if (response.status === 200) {
          console.log("Post Shared");
          this.Text="";
          this.imageUrl="";
          this.selectfile=null
        } else {
          console.log("Post Shared failed");
        }
      } catch (err) {
        console.error("from backend " + err);
      }
    },
    handleFileChange(event) {
      this.selectfile = event.target.files[0];
      if (this.selectfile) {
        console.log("Selected file:", this.selectfile);
        this.imageUrl = URL.createObjectURL(this.selectfile);
      }
    },
  },
  mounted() {
    this.fetchUserData().then(() => {
      this.userData = this.$store.state.user.userData;
    });
  },
};
</script>
<style scoped>
@import "./state.css";
</style>
