<template>
  <div id="wrapper">
    <SiteSidebar />
    
    <!-- router-view -->
    <router-view></router-view>
    
    <!-- footer -->  
    <SiteFooter />
  </div>
</template>

<script>
import SiteFooter from './components/SiteFooter.vue';
import SiteSidebar from './components/SiteSidebar.vue';
export default {
    components: { SiteFooter, SiteSidebar }
}
</script>

<style>

</style>