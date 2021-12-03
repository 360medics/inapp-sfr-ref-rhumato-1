<template lang="html">
    <section class="VANCOMYCINE">
      <h2 class="title">VANCOMYCINE</h2>
<span class="line"></span>

      <p>- DCI : VANCOMYCINE</p>
      <p><span class="bold">- Nom commercial</span> Vancomycin®</p>

      <div>
        - Voie d’administration
        <ul>
          <li>IV :  125 mg flacon</li>
        </ul>
      </div>

      <p class="bold">- Posologies</p>

      <p>- Arthrite septique documentée à Staphylococcus Aureus résistant à la méticilline</p>
      <ul>
        <li><span class="bold">IV :</span> Dose de charge 1g g IVL puis 40mg/kg/jour IVSE à adapter selon taux résiduels.</li>
      </ul>

      <div>
        <span class="bold">- Contre-indications</span>
        <ul>
          <li>Hypersensibilité aux glycopeptides</li>
        </ul>
      </div>

      <div>
        <span class="bold">- Précautions d’emploi</span>
        <ul>
          <li>Insuffisance rénale</li>
          <li>Insuffisance hépatique</li>
          <li>Altération de l’audition</li>
          <li>Grossesse et Allaitement</li>
          <li>Prise concomitante de médicament néphrotoxiques et ototoxiques</li>
        </ul>
      </div>

      <div>
        <span class="bold">- Effets indésirables</span>
        <ul>
          <li>Toxidermie</li>
          <li>Œdème de Quincke</li>
          <li>Red Man syndrome</li>
          <li>Troubles digestifs</li>
          <li>Cytopénie</li>
          <li>Ototoxicité</li>
          <li>Veinotoxicité</li>
          <li>Hépatite aigue cytolytique</li>
          <li>Insuffisance rénale</li>
        </ul>
      </div>

      <div>
        <span class="bold">- Surveillance</span>
        <ul>
          <li>Si antibiothérapie IVSE mesure du taux résiduel 48-72h objectif entre 30 et 50 μg/mL</li>
          <li>Surveillance de la fonction hépatique et rénale</li>
        </ul>
      </div>

     <div>
        <span class="bold">- Astuce de jeunes rhumatologues :</span>
        <ul>
          <li>Attention risque de « Red man syndrom » si perfusion trop rapide moins de 30 minutes</li>
          <li>La vancomycine est veinotoxique, surveillance du site de perfusion</li>
        </ul>
      </div>
    </section>
</template>

<script lang="js">
    export default {
        name: 'VANCOMYCINE',


    }
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .VANCOMYCINE {
      padding: 0 15px;
      text-align: left;



      .bold {
        font-weight: bold;
      }

      .underline {
        text-decoration: underline;
      }

      .footer {
        font-size: x-small;
        color: gray;
      }
    }
</style>
