<template lang="html">
  <section class="AntiBaff">
    <h2 class="title">ANTI BAFF</h2>
<span class="line"></span>

    <p class="bold">BELIMUMAB</p>
    <div>
      DCI : BELIMUMAB<br>
      NOM COMMERCIAL : BENLYSTA<br>
      VOIE D’ADMINISTRATION : IV, SC<br>
      DEMI-VIE : 19 jours<br>
      <span class="underline">AMM :</span>
      <ul>
        <li>Lupus actif avec présence d’auto-anticorps et activité de la maladie élevée chez les patients > 5 ans</li>
      </ul>
      <span class="underline">POSOLOGIES :</span>
      <ul>
        <li>IV : 10 mg/kg à J0, J14 et J28 puis toutes les 4 semaines.</li>
        <li>Passage en SC : 200 mg/semaine (1ère injection 1 à 4 semaines après la dernière dose IV)</li>
      </ul>
    </div>

    <p class="bold">CONTRE-INDICATIONS</p>
    <ul>
      <li>Hypersensibilité à la substance active</li>
      <li>Infections sévères et incontrôlées telles que sepsis et infections opportunistes</li>
    </ul>

    <p class="bold">PRECAUTIONS</p>
    <ul>
      <li>Neutropénie et thrombopénie</li>
      <li>Pathologie hépatique active ou greffe</li>
      <li>Pathologie rénale active et IR, greffe</li>
      <li>Maladie neuropsychiatrique (Néoplasie < 5 ans sauf cancer cutané (hors mélanome) avec exérèse complète dont les limites passent en zone saine</li>
      <li>Traitements immunosuppresseurs associés en particulier ceux ciblant le lymphocyte B et cyclophosphamide.</li>
      <li class="bold">Une contraception efficace est justifiée.</li>
    </ul>
  </section>
</template>

<script lang="js">
    export default {
        name: 'AntiBaff',


    }
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .AntiBaff {
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
