<template lang="html">
  <section class="TableauRecap">
    <h2 class="title">TABLEAUX RÉCAPITULATIFS</h2>
<span class="line"></span>

    <p>
      Gestion des anticoagulants- antiagrégants plaquettaires avant infiltrations
      <br>
      Vue d’ensemble
    </p>
    <PNGViewer :src="'ponction_infiltration1.png'" :myID="'ponction_infiltration2.png'"/>

    <p>
      Gestion des anticoagulants- antiagrégants plaquettaires avant infiltrations
      <br>
      Risques hémorragiques vs risques thrombo-emboliques
    </p>
    <PNGViewer :src="'ponction_infiltration2.png'" :myID="'ponction_infiltration2.png'"/>
  </section>
</template>

<script lang="js">

  import PNGViewer from '@/components/PNGViewer.vue';
  export default {
    name: 'TableauRecap',
    components: { PNGViewer }
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
