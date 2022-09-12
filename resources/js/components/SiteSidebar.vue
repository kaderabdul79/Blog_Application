<template>
    <!-- sidebar -->
    <div class="sidebar">
    <span class="closeButton">&times;</span>
    <p class="brand-title"><router-link :to="{name: 'Home'}">Laravel with Vue Blog</router-link></p>

    <div class="side-links">
        <ul>
        <li><router-link class="active" :to="{name: 'Home'}">Home</router-link></li>
        <li><router-link :to="{name: 'Blog'}">Blog</router-link></li>
        <li><router-link :to="{name: 'About'}">About</router-link></li>
        <li><router-link :to="{name: 'Contact'}">Contact</router-link></li>
        </ul>
    </div>

        <!-- sidebar footer -->
        <footer class="sidebar-footer">
          <div>
            <a href=""><i class="fab fa-facebook-f"></i></a>
            <a href=""><i class="fab fa-instagram"></i></a>
            <a href=""><i class="fab fa-twitter"></i></a>
          </div>

          <small>&copy; 2022 Laravel & Vue Blog</small>
        </footer>
      </div>
</template>

<script>
export default {

}
</script>

<style>

</style>