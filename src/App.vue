<template>
  <div id="app">
    <Header />
      <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';

export default defineComponent({
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
    margin-top: 4rem;
    display: flex;
    justify-content: center;
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
