<template lang="html">
  <section class="AntiIL6R">
    <h2 class="title">ANTI IL-6R</h2>
<span class="line"></span>

    <p class="bold">TOCILIZUMAB</p>
    <div>
      DCI : TOCILIZUMAB<br>
      NOM COMMERCIAL : ROACTEMRA<br>
      VOIE D’ADMINISTRATION : SC<br>
      DEMI-VIE : 12 jours<br>
      <span class="underline">AMM :</span>
      <ul>
        <li>PR en association ou non au MTX</li>
        <li>AJI  systémique ou polyarticulaire en association ou non au MTX</li>
        <li>Artérite à cellules géantes (SC)</li>
      </ul>
      <span class="underline">POSOLOGIES :</span>
      <ul>
        <li>PR et ACG : 1 injection SC 162 mg/sem</li>
        <li>AJIp: < 30 kg : 1 injection 162 mg/3 semaines, > 20 kg 162 mg/2 semaines</li>
        <li>AJIs : < 30 kg : 1 inj 162 mg/2s, > 30 kg : 1 inj/s</li>
      </ul>

      <br><br>

      DCI : TOCILIZUMAB<br>
      NOM COMMERCIAL : ROACTEMRA<br>
      VOIE D’ADMINISTRATION : IV<br>
      DEMI-VIE : 14 jours<br>
      <span class="underline">AMM :</span>
      <ul>
        <li>PR en association ou non au MTX</li>
        <li>AJI  systémique ou polyarticulaire en association ou non au MTX</li>
        <li>Syndrome de relargage cytokinique</li>
      </ul>
      <span class="underline">POSOLOGIES :</span>
      <ul>
        <li>PR : 8 mg/kg toutes les 4 semaines, max 800 mg.</li>
        <li>Sd relargage : 8 mg/kg si > 30 kg, 12 mg/kg si < 30 kg</li>
        <li>AJIs : 8 mg/kg toutes les 2 semaines si > 30 kg, 12 mg/kg toutes les 2 semaines si < 30 kg</li>
        <li>AJIp : 8 mg/kg/4s si > 30 kg, 10 mg/kg/4s si < 30 kg</li>
      </ul>
    </div>
<div class="line"></div>
    <p class="bold">SARILUMAB</p>
    <div>
      DCI : SARILUMAB<br>
      NOM COMMERCIAL : KEVZARA<br>
      VOIE D’ADMINISTRATION : SC<br>
      DEMI-VIE : 21 jours<br>
      <span class="underline">AMM :</span>
      <ul>
        <li>PR en association ou non au MTX</li>
      </ul>
      <span class="underline">POSOLOGIES :</span>
      <ul>
        <li>200 mg toutes les 2 semaines</li>
        <li>En cas de neutropénie, augmentation transaminases ou thrombopénie : 150 mg toutes les 2 semaines</li>
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
      <li> Diverticulite</li>
      <li>Hépatotoxicité</li>
      <li>Anomalies du bilan lipidique</li>
      <li>Tumeurs malignes solides (active ou rémission < 5 ans sauf carcinome basocellulaire ou carcinome épidermoïde)</li>
      <li>Pathologie démyélinisante</li>
    </ul>
  </section>
</template>

<script lang="js">
    export default {
        name: 'AntiIL6R',


    }
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .AntiIL6R {
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
