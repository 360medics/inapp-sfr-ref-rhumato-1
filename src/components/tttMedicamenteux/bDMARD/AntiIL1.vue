<template lang="html">
  <section class="AntiIL1">
    <h2 class="title">ANTI IL-1</h2>
<span class="line"></span>

    <p class="bold">ANAKINRA</p>
    <div>
      DCI : ANAKINRA<br>
      NOM COMMERCIAL : KINERET<br>
      VOIE D’ADMINISTRATION : SC<br>
      DEMI-VIE : 4 à 6 heures<br>
      <span class="underline">AMM :</span>
      <ul>
        <li>PR en association au MTX</li>
        <li>Syndrome de fièvre périodique</li>
        <li>Syndrome périodique associé à la cryopyrine (CAPS)</li>
        <li>FMF</li>
        <li>Maladie de Still</li>
        <li>Goutte (hors AMM)</li>
      </ul>
      <span class="underline">POSOLOGIES :</span>
      <ul>
        <li>Adulte ou > 50 kg : 100 mg/j SC</li>
        <li>< 50 kg : 1 à 2 mg/kg/j SC</li>
      </ul>
    </div>
<div class="line"></div>
    <p class="bold">CANAKINUMAB</p>
    <div>
      DCI : CANAKINUMAB<br>
      NOM COMMERCIAL : ILARIS<br>
      VOIE D’ADMINISTRATION : SC<br>
      DEMI-VIE : 26 jours<br>
      <span class="underline">AMM :</span>
      <ul>
        <li>Arthrite goutteuse, avec échec, contre-indication des AINS ou colchicine ou CTC</li>
        <li>Syndrome de fièvre périodique (FMF, CAPS,  TRAPS, MKD)</li>
        <li>Maladie de Still avec échec AINS ou CTC, en association ou non au MTX</li>
      </ul>
      <span class="underline">POSOLOGIES :</span>
      <ul>
        <li>Maladie de Still : 4 mg/kg toutes les 4 semaines, max 300 mg</li>
        <li>Arthrite goutteuse : 150 mg en une dose unique au cours de la crise</li>
      </ul>
      Syndrome de fièvre : 150 mg toutes les 4 semaines si > 40 kg ou 2 mg/kg si entre 7,5 et 40 kg. Si inefficace à J7, possible 2ème injection à J7
    </div>

    <p class="bold">CONTRE-INDICATIONS</p>
    <ul>
      <li>Neutropénie < 1,5 G/L</li>
      <li>Hypersensibilité à la substance ou excipient</li>
      <li>Infection active</li>
    </ul>

    <p class="bold">PRECAUTIONS</p>
    <ul>
      <li>Perturbations du bilan hépatique</li>
      <li>Adaptation selon fonction rénale</li>
      <li>Dépistage tuberculose (Canakinumab)</li>
      <li>Pathologie maligne</li>
    </ul>
  </section>
</template>

<script lang="js">
    export default {
        name: 'AntiIL1',


    }
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .AntiIL1 {
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
