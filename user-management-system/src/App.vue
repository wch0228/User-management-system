<template>
  <div id="App">
    <app-Header></app-Header>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
    "app-Header": Header
  }
};
</script>

<style scoped>
</style>>

