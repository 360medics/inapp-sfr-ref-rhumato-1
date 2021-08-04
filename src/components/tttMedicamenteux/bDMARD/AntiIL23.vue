<template lang="html">
  <section class="AntiIL23">
    <h2 class="title">ANTI IL-23</h2>
<span class="line"></span>

    <p class="bold">RISANKIZUMAB</p>
    <div>
      DCI : RISANKIZUMAB<br>
      NOM COMMERCIAL : SKYRIZI<br>
      VOIE D’ADMINISTRATION : SC<br>
      DEMI-VIE : 28 à 29 jours<br>
      <span class="underline">AMM :</span>
      <ul>
        <li>Psoriasis sévère</li>
      </ul>
      <span class="underline">POSOLOGIES :</span>
      <ul>
        <li>150 mg (soit 2 injections 75 mg) à S0, S4 puis toutes les 12 semaines</li>
      </ul>
    </div>
<div class="line"></div>
    <p class="bold">GUSELKUMAB</p>
    <div>
      DCI : GUSELKUMAB<br>
      NOM COMMERCIAL : TREMFYA<br>
      VOIE D’ADMINISTRATION : SC<br>
      DEMI-VIE : 15 à 18 jours<br>
      <span class="underline">AMM :</span>
      <ul>
        <li>Psoriasis modéré à sévère</li>
      </ul>
      <span class="underline">POSOLOGIES :</span>
      <ul>
        <li>100 mg SC à S0 et S4 puis toutes les 8 semaines</li>
      </ul>
    </div>

    <p class="bold">CONTRE-INDICATIONS</p>
    <ul>
      <li>Infection active et cliniquement importante (par exemple tuberculose).</li>
      <li>Hypersensibilité à la substance ou excipient.</li>
    </ul>

    <p class="bold">PRECAUTIONS</p>
    <ul>
      <li>Infection chronique ou antécédents d’infections récurrentes</li>
      <li>Dépistage tuberculose latente</li>
      <li>Grossesse</li>
    </ul>
  </section>
</template>

<script lang="js">
    export default {
        name: 'AntiIL23',


    }
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .AntiIL23 {
      padding: 0 15px;
      text-align: left;



      .bold {
        font-weight: bold;
      }

      .underline {
        text-decoration: underline;
      }

      .line {
        width: 80%;
        margin: auto;
        border: 1px solid black;
      }
    }
</style>
