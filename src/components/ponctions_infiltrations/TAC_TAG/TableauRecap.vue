<template lang="html">
  <section class="TableauRecap">
    <h2 class="title">TABLEAUX RÉCAPITULATIFS</h2>
<span class="line"></span>

    <p>
      Gestion des anticoagulants- antiagrégants plaquettaires avant infiltrations
      <br>
      Vue d’ensemble
    </p>
    <img src="@/assets/ponction_infiltration1.png">

    <p>
      Gestion des anticoagulants- antiagrégants plaquettaires avant infiltrations
      <br>
      Risques hémorragiques vs risques thrombo-emboliques
    </p>
    <img src="@/assets/ponction_infiltration2.png">
  </section>
</template>

<script lang="js">
    export default {
        name: 'TableauRecap',


    }
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .TableauRecap {
      padding: 0 15px;
      text-align: left;



      .bold {
        font-weight: bold;
      }

      .underline {
        text-decoration: underline;
      }

      .red {
        color: red;
      }

      img {
        max-width: 100%;
      }
    }
</style>
