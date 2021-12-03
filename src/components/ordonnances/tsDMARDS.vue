<template lang="html">
  <section class="bDMARS">
    <h2 class="title">tsDMARDS</h2>
<span class="line"></span>

    <p>Sur ordonnance d’exception</p>
    <PNGViewer :src="'tsDMARDS.png'" :myID="'tsDMARDS.png'"/>

    <p>
      <span class="bold">1 : Patient</span><br>
      Nom, Prénom
      <br>
      DDN
    </p>

    <p>
      <span class="bold">2 : Prescripteur</span><br>
      Nom prénom<br>
      Titre<br>
      N°ADELI/RPPS<br>
      Adresse<br>
    </p>

    <p>
      <span class="bold">3 : Prescription</span><br>
      Produit (DCI)<br>
      Stylo / seringue<br>
      Posologie<br>
      Voie admini.<br>
      Durée prescr.<br>
    </p>

    <h2 class="title">Posologie des différents ts DMARDS</h2>
    <span class="line"></span>

    <p>Baricitinib 4mg (2mg si > 75 ans, infections chronique ou récidivante, DFG entre 30 et 60 mL/min) , 1 comprimé par jour en 1 prise</p>
    <p>Tofacitinib 5mg, 1 comprimé matin et soir</p>
    <p>Upadacitinib 15mg, 1 comprimé par jour</p>
    <p>Filgotinib 200 mg, 1 comprimé par jour</p>
  </section>
</template>

<script lang="js">
  import PNGViewer from "@/components/PNGViewer";
  export default {
    name: 'tsDMARS',
    components: {PNGViewer},
    component: { PNGViewer }


  }
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .bDMARS {
      padding: 0 15px;

      p {
        text-align: left;
      }


      .bold {
        font-weight: bold;
      }

      img {
        max-width: 100%;
        border: 1px solid black;
      }
    }
</style>
