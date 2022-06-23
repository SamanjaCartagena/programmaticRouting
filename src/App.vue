<script>
import TheNavigation from "./components/TheNavigation.vue"
export default{
  components:{
    TheNavigation
  }
}
 
</script>

<template>
<div>
  <the-navigation></the-navigation>
  <div class="container">
  <router-view></router-view>
  </div>
</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
