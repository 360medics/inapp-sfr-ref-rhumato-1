<template lang="html">
  <section class="bDMARS">
    <h2 class="title">bDMARDS/ JAK inhibiteur/Tériparatide</h2>
<span class="line"></span>

    <p>Sur ordonnance d’exception</p>

    <img src="@/assets/bDMARDS.png">

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
  </section>
</template>

<script lang="js">
    export default {
        name: 'bDMARS',


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
