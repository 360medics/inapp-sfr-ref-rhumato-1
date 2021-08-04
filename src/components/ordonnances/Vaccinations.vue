<template lang="html">
  <section class="Vaccinations">
    <h2 class="title">MAJ Vaccination pré-biothérapie</h2>
<span class="line"></span>

    <img src="@/assets/Vaccinations.png">
  </section>
</template>

<script lang="js">
    export default {
        name: 'Vaccinations',


    }
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .Vaccinations {
      padding: 0 15px;

      p {
        text-align: left;
      }


      img {
        max-width: 100%;
        border: 1px solid black;
      }
    }
</style>
