<template lang="html">
  <section class="Osteoporose">
    <h2 class="title">Fiche REF Bilan étiologique ostéoporose</h2>
    <span class="line"></span>

    <h4>Sources :</h4>
    <p>
      Actualisation 2012 des recommandations françaises du traitement médicamenteux de l’ostéoporose post-ménopausique
      <br><br>
      Briot et al. Male osteoporosis: Diagnosis and fracture risk evaluation. Joint Bone Spine. 2009;76:129-133
    </p>

    <h4>Première intention</h4>
    <p>
      Recherche de causes iatrogènes : corticothérapie, hormonothérapie, traitements induisant une hyperprolactinémie
      <br><br>
      Recherche d’une comorbidité associée à la fragilité osseuse: insuffisance hépatique, bpco…
      <br><br>
      Biologie
    </p>
    <ul>
      <li>NFS</li>
      <li>VS</li>
      <li>CRP</li>
      <li>Electrophorèse des protéines sériques</li>
      <li>Immunoélectrophorèse des protéines urinaires</li>
      <li>Ionogramme sanguin</li>
      <li>Calcémie</li>
      <li>Phosphatémie</li>
      <li>ASAT, ALAT</li>
      <li>Phosphatases alcalines</li>
      <li>GGT</li>
      <li>25 OH vitamine D</li>
      <li>PTH</li>
      <li>TSH</li>
    </ul>
    <p>Densitométrie osseuse</p>

    <h4>Deuxième intention :</h4>
    <p>si femme < 50 ans et homme < 70 ans</p>
    <ul>
      <li>Fer sérique, coefficient saturation de la transferrine</li>
      <li>FSH, LH</li>
      <li>Prolactine</li>
      <li>Testostéronémie,</li>
      <li>Calciurie des 24 heures</li>
      <li>Créatininurie des 24 heures</li>
      <li>Protéinurie des 24 heures</li>
      <li>Taux de réabsorption du phosphate</li>
      <li>Tryptase</li>
      <li>Anticorps anti-transglutaminase et anti-endomysium</li>
    </ul>
  </section>
</template>

<script lang="js">
    export default {
        name: 'Osteoporose',


    }
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .Osteoporose {
      padding: 0 15px;
      text-align: left;



      .bold {
        font-weight: bold;
      }
    }
</style>
