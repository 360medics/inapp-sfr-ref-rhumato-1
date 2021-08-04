<template lang="html">
  <section class="Abatacept">
    <h2 class="title">ABATACEPT</h2>
<span class="line"></span>

    <p class="bold">ABATACEPT</p>
    <div>
      DCI : ABATACEPT<br>
      NOM COMMERCIAL : ORENCIA<br>
      VOIE D’ADMINISTRATION : IV, SC<br>
      DEMI-VIE : 13 jours (IV), 14 jours (SC)<br>
      <span class="underline">AMM :</span>
      <ul>
        <li>PR traité précédemment ou non par MTX ou anti TNF.</li>
        <li>Rpso seul ou en association au MTX</li>
        <li>AJI polyarticulaire en association au MTX</li>
      </ul>
      <span class="underline">POSOLOGIES :</span>
      <ul>
        <li>PR et RP (IV) : 500 mg si < 60 kg, 750 mg si entre 60 et 100 kg, 1000 mg si > 100 kg à S0, S2, S4 puis 1/4S</li>
        <li>PR et RP (SC) : 125 mg/sem</li>
        <li>AJI (IV) : 10 mg/kg si < 75 kg, idem adulte si > 75 kg.</li>
        <li>AJI (SC) : 50 mg/s si 10 à 25 kg, 87,5 mg/s si 25 à 50 kg, 125 mg si > 50 kg</li>
      </ul>
    </div>

    <p class="bold">CONTRE-INDICATIONS</p>
    <ul>
      <li>Hypersensibilité à la substance active</li>
      <li>Infections sévères et incontrôlées telles que sepsis et infections opportunistes</li>
    </ul>

    <p class="bold">PRECAUTIONS</p>
    <ul>
      <li>ATCD d’infection récurrente ou facteurs prédisposant aux infections.</li>
      <li>ATCD de tuberculose</li>
      <li>ATCD hépatite virale</li>
      <li>Vaccination récente ou prévue</li>
      <li>Diabète : abatacept peut interférer avec la mesure de la glycémie sur certains appareils de mesure</li>
      <li>MGUS</li>
      <li>Néoplasie < 5 ans sauf cancer cutané (hors mélanome et carcinome spinocellulaire sévère) avec exérèse complète dont les limites passent en zone saine.</li>
    </ul>
  </section>
</template>

<script lang="js">
    export default {
        name: 'Abatacept',


    }
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .Abatacept {
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
