<template lang="html">
  <section class="LesionOsseuse">
    <h2 class="title">Fiche REF Bilan diagnostique lésion osseuse</h2>
    <span class="line"></span>

    <h4>Imagerie :</h4>
    <ul>
      <li>Scanner (estimation du risque fracturaire en plus de la recherche étiologique)</li>
      <li>IRM</li>
    </ul>
    <p class="bold">Si lésion suspecte de malignité sur les imageries</p>

    <h4>Interrogatoire</h4>
    <ul>
      <li>Antécédent personnels et familiaux de cancers</li>
      <li>Douleur : oui/non, horaire</li>
      <li>Altération de l’état général</li>
      <li>Signes neurologiques surtout si lésions au rachis</li>
    </ul>

    <h4>Examen clinique</h4>
    <ul>
      <li>
        Recherche de primitif :
        <ul>
          <li>Femme : palpation mammaire, examen gynécologique (toucher pelvien, spéculum)</li>
          <li>Homme : palpation testiculaire, toucher rectal,</li>
          <li>Deux sexes : aires ganglionnaires, palpation abdominale</li>
        </ul>
      </li>
      <li>Examen neurologique : recherche de signes de gravité surtout si lésions au rachis</li>
    </ul>

    <h4>Biologie</h4>
    <ul>
      <li>NFS</li>
      <li>CRP</li>
      <li>Calcémie (si hypercalcémie, PTH)</li>
      <li>Créatinine, urée</li>
      <li>Electrophorèse des protéines sériques</li>
      <li>Immunoélectrophorèse des protéines urinaires</li>
      <li>Chaînes légères sériques</li>
      <li>TSH</li>
      <li>PSA</li>
    </ul>

    <h4>Imagerie</h4>
    <ul>
      <li>Scanner thoracoabdominopelvien ou TEP scanner</li>
      <li>Mammographie</li>
    </ul>
    <p>Si absence de primitif, <span class="bold">biopsie de la lésion osseuse</span></p>
  </section>
</template>

<script lang="js">
    export default {
        name: 'LesionOsseuse',


    }
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .LesionOsseuse {
      padding: 0 15px;
      text-align: left;

      .bold {
        font-weight: bold;
      }
    }
</style>
