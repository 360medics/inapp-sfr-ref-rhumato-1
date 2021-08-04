<template lang="html">
  <section class="ReactionAllergique">
    <h2 class="title">REACTION LORS DE L’ADMINISTRATION D’UN BIIOMEDICAMENT IV</h2>
<span class="line"></span>

    <p>Réaction d’hypersensibilité médicamenteuse (RHM) à différencier d’une allergie médicamenteuse qui dépend d’un mécanisme immunologique</p>

    <p>Les manifestations cliniques :</p>
    <ul>
      <li>Cutanées : érythème, urticaire, prurit angio-oedème</li>
      <li>Respiratoires : congestion nasale, éternuements, douleurs thoracique, dyspnée, désaturation</li>
      <li>Cardio-vasculaires : syncope, bradycardie, hypo/hyperPA</li>
      <li>Digestifs : nausées, vomissements, diarrhées, douleurs abdominales</li>
      <li>Neurologiques : épilepsie, perte de conscience, sensation de mort imminente</li>
      <li>Douleurs rachidiennes</li>
      <li>Anaphylaxie</li>
    </ul>

    <p>Réaction d’hypersensibilité médicamenteuse (RHM) à différencier d’une allergie médicamenteuse qui dépend d’un mécanisme immunologique</p>
    <ol>
      <li>
        Caractériser le phénotype de la RHM :
        <ul>
          <li>Chronologie : réaction immédiate < 6h ou réaction retardée > 6h</li>
          <li>Réaction de type I : immédiate (<6h), tryptase sérique augmentée (implication des mastocytes et basophiles), IgE médiée ou non. Si IgE médiée, apparition à partir de la 2ème perfusion</li>
          <li>Réaction de relargage cytokinique : immédiate (<6h), impliquant le lymphocyte T</li>
          <li>Réaction liée à la perfusion : immédiate (<6h),  résolution spontanée, répond à la prémédication</li>
          <li>Réaction mixte (type T et relargage cytokinique)</li>
        </ul>
      </li>
       <li>
         Définir la gravité clinique
        <ul>
          <li>
            Selon la classification de Brown<br>
            légère :  atteinte de la peau ou de 1 organe<br>
            modérée  : 2 organes atteints ou plus sans atteinte du pronostic vital<br>
            sévère : atteinte pronostic vital
          </li>
        </ul>
      </li>
       <li>
         Conduite à tenir en pratique :
        <ul>
          <li>Arrêt de la perfusion</li>
          <li>
            Prise des constantes
            <br>
            => Si constantes rassurantes : administration d’anti-histaminiques et/ou Methylprednisolone 0,5-1mg/kg + dosage tryptase entre la 30ème et la 120 minutes post réaction et 24h après
            avis allergo pour reprise de la perfusion à vitesse moindre
            <br>
            => Si constantes altérées : prise en charge d’une anaphylaxie
          </li>
          <li>Si RHM compatible avec une réaction IgE médiée : bilan allergologique (prick test), à distance de la réaction (au moins 4 semaines)</li>
          <li>Attention à l’effet rebond des corticoïdes notamment en cas de réaction urticarienne</li>
        </ul>
      </li>
    </ol>

  </section>
</template>

<script lang="js">
    export default {
        name: 'ReactionAllergique',


    }
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .ReactionAllergique {
      padding: 0 15px;
      text-align: left;



      .bold {
        font-weight: bold;
      }
    }
</style>
