<template>
  <div id="app">
    <Header />
      <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '@/components/Header.vue';
export default Vue.extend({
  components: { Header },
});
</script>

<style lang="scss">
  @import 'src/sass/global.scss';
  html,
  body {
    margin: 0;
    background-color: #fff;
    padding: 0 0 0.75rem;
  }

  #app {
    font-family: 'Helvetica Neue';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
    height: 100%;
    margin-top: 6rem;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  .score_ref {
    font-style: italic;
    font-size: smaller;
  }

</style>
