<template>
  <div>
    Home {{name}}
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import axios from 'axios';

export default {
  setup(){
    const name = ref("hasan al kadir")
    async function checkTest(){
       const a = await axios.get('/test')
      .then(res=>console.log(res))
      .then(error => console.log(error))

      return a;
    }
    onMounted(()=>{
      checkTest()
    })
    return {name}
  }
}
</script>

<style>

</style>