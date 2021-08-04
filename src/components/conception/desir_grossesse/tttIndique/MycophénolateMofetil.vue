<template lang="html">
  <section class="MycophénolateMofetil">
    <h2 class="title">Mycophénolate Mofetil</h2>
<span class="line"></span>

    <p>Grossesse :</p>
    <ul>
      <li class="bold">TERATOGENE</li>
      <li>Arrêter <span class="bold">6 semaines</span> avant la grossesse</li>
      <li>Contre-indication pendant toute la durée de la grossesse</li>
    </ul>

    <p>Allaitement :</p>
    <ul>
      <li>Contre-indication pendant l’allaitement</li>
    </ul>

    <p>Découverte d’une grossesse sous Méthotrexate:</p>
    <ul>
      <li>Risque malformatif élevé si exposition au T1</li>
      <li>Dépistage prénatal des malformations si grossesse maintenue</li>
      <li>Traitement possible après la fin du T1 si indispensable (risque infectieux, CMV)</li>
    </ul>
  </section>
</template>

<script lang="js">
    export default {
        name: 'MycophénolateMofetil',


    }
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .MycophénolateMofetil {
      padding: 0 15px;
      text-align: left;



      .bold {
        font-weight: bold;
      }
    }
</style>
