<template>
  <div class="posts">
    <div
      class="post p-3 rounded-2 shadow-lg mt-5"
      v-for="post in posts"
      :key="post._id"
    >
      <div class="user d-flex align-items-center">
        <img :src="`http://localhost:3000/images/${post.Userimg}`" alt="" />
        <div class="info">
          <h4>{{ post.name }} {{ post.surname }}</h4>
        </div>
        <i class="fa-solid fa-user-plus ms-auto" v-if="post.user.toString() !== userid"></i>
      </div>
      <div class="post-image mt-4 shadow-lg">
        <div class="post-description mb-2">
          <span class="fs-5">{{ post.Text }}</span>
        </div>
        <img :src="post.Postimg" alt="" />
      </div>
      <div class="reacts d-flex justify-content-between p-3 mt-2">
        <div class="d-flex gap-4">
          <div class="d-flex gap-2 align-items-center">
            <i class="fa-regular fa-heart"></i>
            <span>{{ post.likes }}</span>
          </div>
          <div class="d-flex gap-2 align-items-center">
            <i class="fa-regular fa-comment"></i>
            <span>{{ post.comments }}</span>
          </div>
        </div>

        <div class="d-flex gap-2 align-items-center">
          <i class="fa-solid fa-share-nodes"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      posts: [],
      show: true,
      userid:''
    };
  },
  methods: {
    async getAllposts() {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/post/getposts`
        );
        if (response) {
          this.posts = response.data;
          this.getAllposts();
        }
      } catch (err) {
        console.log(err);
      }
    },
    
  },
  mounted() {
    this.userid = localStorage.getItem('UserId');
    this.getAllposts();

  },
};
</script>
<style scoped>
@import "./explorel.css";
</style>
