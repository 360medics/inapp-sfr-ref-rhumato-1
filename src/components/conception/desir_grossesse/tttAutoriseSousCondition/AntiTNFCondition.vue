<template lang="html">
  <section class="AntiTNF">
    <h2 class="title">Anti-TNF</h2>
<span class="line"></span>

    <p>Grossesse :</p>
    <ul>
      <li>
        Infliximab, adalimumab et golimumab :
        <ul>
          <li>Arrêter à la conception</li>
          <li>Poursuite possible si maladie active, arrêt au début du T3</li>
        </ul>
      </li>
      <li>
        <span class="bold">Etanercept</span> et <span class="bold">certolizumab</span> – <span class="bold">A PRIVILEGIER</span> :
        <ul>
          <li>Faible passage transplacentaire</li>
          <li>Possible pendant toute la durée de la grossesse pour le certolizumab, arrêt de l’étanercept à 32 SA si possible</li>
        </ul>
      </li>
    </ul>

    <p>Allaitement :</p>
    <ul>
      <li>Possibles pendant l’allaitement</li>
    </ul>

    <p>En cas de grossesse sous <span class="bold">infliximab, adalimumab, golimumab</span> :</p>
    <ul>
      <li>Rassurer la patiente sur le risque malformatif</li>
      <li>Dernière injection au début du T3 (longue ½-vie)</li>
      <li>Surveillance obstétricale, surrisque d’infection materno-fœtale</li>
      <li>Nouveau-né considéré immunodéprimé <span class="bold">pendant 6 mois après la dernière injection</span> (vaccins vivants !)</li>
    </ul>

    <p>En cas de grossesse sous <span class="bold">étanercept</span> :</p>
    <ul>
      <li>Rassurer la patiente sur le risque malformatif</li>
      <li>Possible quel que soit le terme de la grossesse (lecrat.fr) / arrêt à 32 SA si possible (ACR 2020)</li>
      <li>Surveillance obstétricale, surrisque d’infection materno-fœtale</li>
    </ul>

    <p>En cas de grossesse sous <span class="bold">certolizumab</span> :</p>
    <ul>
      <li>Rassurer la patiente sur le risque malformatif</li>
      <li>Surveillance obstétricale, surrisque d’infection materno-fœtale</li>
      <li>Nouveau-né considéré immunodéprimé <span class="bold">pendant 2 mois et demi après la dernière injection</span> (vaccins vivants !)</li>
    </ul>
  </section>
</template>

<script lang="js">
    export default {
        name: 'AntiTNF',


    }
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .AntiTNF {
      padding: 0 15px;
      text-align: left;



      .bold {
        font-weight: bold;
      }
    }
</style>
