<template lang="html">
  <section class="Tocilizumab">
    <h2 class="title">Tocilizumab</h2>
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

    <p>En cas de grossesse sous tocilizumab :</p>
    <ul>
      <li>Rassurer la patiente sur le risque malformatif</li>
      <li>Dernière injection au début du T3 (longue ½-vie)</li>
      <li>Surveillance obstétricale, surrisque d’infection materno-fœtale</li>
      <li>Nouveau-né considéré immunodéprimé <span class="bold">pendant 10 semaines après la dernière injection</span> (vaccins vivants !)</li>
    </ul>
  </section>
</template>

<script lang="js">
    export default {
        name: 'Tocilizumab',


    }
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .Tocilizumab {
      padding: 0 15px;
      text-align: left;



      .bold {
        font-weight: bold;
      }
    }
</style>
