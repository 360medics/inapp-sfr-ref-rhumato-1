<template lang="html">
  <section class="Methotrexate">
    <h2 class="title">Denosumab / Tériparatide</h2>
    <span class="line"></span>
    <p>Sur ordonnance d’exception</p>
    <PNGViewer :src="'deno.png'" :myID="'deno.png'"/>

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

    <h2 class="title">Posologie du Denosumab et du Tériparatide</h2>
    <span class="line"></span>
    <p>Denosumab 60 mg 1 injection SC tous les 6 mois</p>
    <p>Tériparatide 20µg/80µl 1 injection par jour pendant 18 mois</p>
  </section>
</template>

<script lang="js">
import PNGViewer from "@/components/PNGViewer";
export default {
  name: 'DenosumabOrdonnance',
  components: { PNGViewer }
}
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
.Methotrexate {
  padding: 0 15px;



  img {
    max-width: 100%;
    border: 1px solid black;
  }
}
</style>
