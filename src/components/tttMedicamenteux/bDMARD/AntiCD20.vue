<template lang="html">
  <section class="AntiCD20">
    <h2 class="title">ANTI CD20</h2>
<span class="line"></span>

    <p class="bold">RITUXIMAB</p>
    <div>
      DCI : RITUXIMAB<br>
      NOM COMMERCIAL : MABTHERA<br>
      BIOSIMILAIRE: RIXATHON<br>
      VOIE D’ADMINISTRATION : IV<br>
      DEMI-VIE : 22 jours<br>
      <span class="underline">AMM :</span>
      <ul>
        <li>Lymphome non Hodgkinien, LLC</li>
        <li>PR en association au MTX après intolérance ou réponse inadéquate au tmt de fond dont un anti TNF</li>
        <li>Granulomatose avec polyangéite et polyangéite microscopique</li>
        <li>Pemphigus vulgaires</li>
      </ul>
      <span class="underline">POSOLOGIES :</span>
      <ul>
        <li>PR : 1000 mg à J1 puis J15 puis tous les 6 à 12 mois</li>
        <li> GPA et PAM : 375 mg/m2 puis 500 mg en entretien</li>
        <li>Pemphigus : 1000 mg J1-J15 puis 500mg</li>
      </ul>
    </div>

    <p class="bold">CONTRE-INDICATIONS</p>
    <ul>
      <li>Hypersensibilité à la substance active</li>
      <li>Infections sévères, évolutives</li>
      <li>Déficit immunitaire sévère</li>
      <li>Insuffisance cardiaque sévère</li>
    </ul>

    <p class="bold">PRECAUTIONS</p>
    <ul>
      <li>IgG en dessous de la normale du laboratoire (surtout < 5 g/L)</li>
      <li>Lymphopénie T et/ou B</li>
      <li>Hépatite, VIH</li>
      <li>Neutropénie > 1500/mm3</li>
    </ul>
    <p>/!\ Il n’existe pas de test prédictif du risque de LEMP (Leucoencéphalopathie multifocale progressive)</p>
  </section>
</template>

<script lang="js">
    export default {
        name: 'AntiCD20',


    }
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .AntiCD20 {
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
