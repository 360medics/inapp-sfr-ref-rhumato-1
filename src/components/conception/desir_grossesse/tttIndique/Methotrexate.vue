<template lang="html">
    <section class="Methotrexate">
        <h2 class="title">Methotrexate</h2>
<span class="line"></span>

      <p>Grossesse :</p>
      <ul>
        <li class="bold">TERATOGENE</li>
        <li>Arrêter le méthotrexate <span class="bold">1 mois avant</span></li>
        <li>Contre-indication pendant toute la durée de la grossesse</li>
      </ul>

      <p>Allaitement :</p>
      <ul>
        <li>Contre-indication pendant l’allaitement</li>
      </ul>

      <p>Découverte d’une grossesse sous Méthotrexate:</p>
      <ul>
        <li><span class="bold">ARRÊT</span> du traitement dès que possible</li>
        <li>Évaluation personnalisée du risque</li>
        <li>Dépistage prénatal des malformations si grossesse maintenue</li>
      </ul>
    </section>
</template>

<script lang="js">
    export default {
        name: 'Methotrexate',


    }
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .Methotrexate {
      padding: 0 15px;
      text-align: left;



      .bold {
        font-weight: bold;
      }
    }
</style>
