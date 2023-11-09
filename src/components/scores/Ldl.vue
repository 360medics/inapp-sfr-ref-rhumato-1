<template>
  <div class="Ldl">
    <h2>LDL-Cible</h2>
    <span class="line"></span>

    <a href="https://www.ldlcible.com/" target="_blank" rel="noopener noreferrer">Calculer en ligne</a>
  </div>

</template>

<script lang="ts">
  import { defineComponent } from "vue";
  export default defineComponent({
    name: 'Ldl',
  });
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
@import "src/sass/global";

.Ldl {
  a {
    top: 15px;
    position: relative;
  }
}
</style>


