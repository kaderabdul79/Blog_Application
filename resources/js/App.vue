<template>
  <div>
    <!-- header/footer -->
    <Navigation />
    <!-- router-view -->
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
export default {
    components: { Navigation }
}
</script>

<style>

</style>