<template lang="html">
  <section class="GeneralitesTacTag">
    <h2 class="title">GENERALITES</h2>
<span class="line"></span>

    <p>
      Gestion des anticoagulants- antiagrégants plaquettaires avant infiltrations
      <br>
      Questions préliminaires
    </p>

    <p class="bold">Conduite à tenir en pratique :</p>
    <ul>
      <li>Existe-t-il une contre indication au geste percutané ?</li>
      <li>Quel est le niveau de risque hémorragique du geste percutané envisagé ?</li>
      <li>Y a-t-il une molécule interférant sur l’agrégation plaquettaire ou la coagulation sanguine (AAP/AC) ?</li>
      <li>Etant donné le niveau de risque du geste (point 2), est-il nécessaire d’adapter ou d’arrêter le traitement AAP/AC ?</li>
      <li>Si tel est le cas, combien de jours avant le geste faut-il prévoir l’arrêt (demi-vie) ?</li>
      <li>Un relais doit-il être organisé (risque thrombotique) ?</li>
      <li>Quand reprendre le traitement au décours du geste (risque hémorragique et complication) ?</li>
    </ul>

    <p class="bold">Quel bilan biologique proposer ? </p>
    <ul>
      <li><span class="underline">Pour tous</span> : <span class="bold">plaquettes > 50G/L</span> (hors urgence diagnostique)</li>
      <li><span class="underline">AVK</span> : <span class="bold">INR</span> (cible selon le niveau de risque <3 ou <1,5</li>
      <li><span class="underline">AAP ou AOD ou héparines</span> : aucun</li>
    </ul>

    <p class="bold">Rappels pour les ponctions lombaires/ infiltrations rachidiennes</p>
    <p class="underline">Indication :</p>
    <ul>
      <li>Urgente O / N (PL pour méningite, +/- arthrocentèse pour arthrite septique)</li>
      <li>Diagnostique / thérapeutique</li>
      <li>Bénéfice (diagnostique, antalgie) vs Risque(s)</li>
    </ul>
    <p class="underline">Contre-indications :</p>
    <ul>
      <li>Pq < 10 G/L en urgence dans certaines situations <span class="red bold"><50G/L hors urgence</span></li>
      <li class="red bold">Pathologie locale (infectieuse, néoplasique, fibrose... )</li>
      <li>Anomalie connue de l’hémostase ou saignement actif ou anticoagulation efficace</li>
      <li><span class="bold">Instabilité hémodynamique</span> (hors pupura fulminans)</li>
      <li><span class="bold">Signe d’engagement cérébral</span> (mydriase unilatérale, hoquet, troubles ventilatoires, mouvements d’enroulement)</li>
      <li><span class="bold">Risque élevé d’engagement cérébral après PL</span> (signes de focalisation neurologique, troubles de la vigilance avec GCS < ou = 11, crises convulsives “récentes” ou en cours => TDM sans et avec IV</li>
    </ul>

    <p class="bold"></p>
    <ul>

    </ul>
  </section>
</template>

<script lang="js">
    export default {
        name: 'GeneralitesTacTag',


    }
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .GeneralitesTacTag {
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
    }
</style>
