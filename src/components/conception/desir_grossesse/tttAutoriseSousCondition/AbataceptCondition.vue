<template lang="html">
  <section class="Abatacept">
    <h2 class="title">Abatacept</h2>
<span class="line"></span>

    <p>Grossesse :</p>
    <ul>
      <li>Arrêter à la conception</li>
      <li>A éviter pendant toute la durée de la grossesse sauf si absence d’autre alternative</li>
    </ul>

    <p>Allaitement :</p>
    <ul>
      <li>A éviter pendant l’allaitement mais possible en l’absence d’alternative (haut poids moléculaire)</li>
    </ul>
  </section>
</template>

<script lang="js">
    export default {
        name: 'Abatacept',


    }
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .Abatacept {
      padding: 0 15px;
      text-align: left;



      .bold {
        font-weight: bold;
      }
    }
</style>
