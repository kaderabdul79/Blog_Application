<template>
  <!-- sidebar -->
    <div class="sidebar" :class="{ showOverlay: overlayVisibility }">
      <span class="closeButton" @click="hideOverlay">&times;</span>
      <p class="brand-title"><a href="">Laravel with Vue Blog</a></p>

      <div class="side-links">
        <ul>
          <li>
            <router-link @click="hideOverlay" :to="{ name: 'Home' }"
              >Home</router-link
            >
          </li>
          <li>
            <router-link @click="hideOverlay" :to="{ name: 'Blog' }"
              >Blog</router-link
            >
          </li>
          <li>
            <router-link @click="hideOverlay" :to="{ name: 'About' }"
              >About</router-link
            >
          </li>
          <li>
            <router-link @click="hideOverlay" :to="{ name: 'Contact' }"
              >Contact</router-link
            >
          </li>
          <li>
            <router-link @click="hideOverlay" :to="{ name: 'Login' }"
              >Login</router-link
            >
          </li>
          <li>
            <router-link @click="hideOverlay" :to="{ name: 'Register' }"
              >Register</router-link
            >
          </li>
          <li>
            <router-link @click="hideOverlay" :to="{ name: 'Dashboard' }"
              >Dashboard</router-link
            >
          </li>
        </ul>
      </div>

      <!-- sidebar footer -->
      <footer class="sidebar-footer">
        <div>
          <a href=""><i class="fab fa-facebook-f"></i></a>
          <a href=""><i class="fab fa-instagram"></i></a>
          <a href=""><i class="fab fa-twitter"></i></a>
        </div>

        <small>&copy; 2022 Laravel with Vue Blog</small>
      </footer>
    </div>
    <!-- Menu Button -->
    <div class="menuButton" @click="ShowOverlay">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      overlayVisibility: false,
    };
  },
  methods: {
    ShowOverlay() {
      this.overlayVisibility = true;
    },
    hideOverlay() {
      this.overlayVisibility = false;
    },
  },
};
</script>
<style scoped>
.showOverlay {
  width: 100%;
  z-index: 5;
}
</style>