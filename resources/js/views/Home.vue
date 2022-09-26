<template>
  <div>
    <!-- header -->
    <SiteHeader />
  <!-- main -->
    <main class="container">
        <h2 class="header-title">Latest Blog Posts</h2>
        <section class="cards-blog latest-blog">
          <div class="card-blog-content" v-for="post in posts" :key="post.id">
            <img :src="post.imagePath" alt="" />
            <p>
              {{ post.created_at }}
              <span style="float: right">Written By {{ post.user }}</span>
            </p>
          </div>
      </section>
    </main>
  </div>
</template>

<script>
import axios from 'axios';
import SiteHeader from '../components/SiteHeader.vue';

export default {
  emits: ["updateSidebar"],
  data() {
    return {
      posts: [],
    };
  },

  mounted() {
    axios
      .get("/api/home-posts")
      .then((response) => (this.posts = response.data.data))
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>

</style>