<template lang="html">
    <section class="CEFEPIME">
      <h2 class="title">CEFEPIME</h2>
<span class="line"></span>

      <p>- DCI : CEFEPIME</p>
      <p><span class="bold">- Nom commercial</span> Axepim®</p>

      <div>
        - Voie d’administration
        <ul>
          <li>IV :  2g/10mL flacon</li>
        </ul>
      </div>

      <p class="bold">- Posologies</p>

      <p>- Arthrite septique documentée à Entérobactérie du groupe 3 sur articulation native</p>
      <ul>
        <li><span class="bold">IV</span> : Dose de charge 2 g IVL sur 1h 75-100 mg/kg/J à répartir en 3 perfusions par jour ou perfusion continue IVSE</li>
      </ul>

      <div>
        <span class="bold">- Contre-indications</span>
        <ul>
          <li>Hypersensibilité aux céphalosporines</li>
        </ul>
      </div>

      <div>
        <span class="bold">- Précautions d’emploi</span>
        <ul>
          <li>Antécédent Asthme</li>
          <li>Insuffisance rénale</li>
          <li>Insuffisance hépatique</li>
          <li>Grossesse et Allaitement</li>
        </ul>
      </div>

      <div>
        <span class="bold">- Effets indésirables</span>
        <ul>
          <li>Toxidermie</li>
          <li>Œdème de Quincke</li>
          <li>Troubles digestifs</li>
          <li>Cytopénie</li>
          <li>Hépatite aigue cytolytique</li>
          <li>Insuffisance rénale</li>
        </ul>
      </div>

      <div>
        <span class="bold">- Surveillance</span>
        <ul>
          <li>Si antibiothérapie IVSE mesure du taux résiduel 48-72h objectif entre 20 et 50 μg/mL</li>
          <li>Surveillance de la fonction hépatique et rénale</li>
        </ul>
      </div>
    </section>
</template>

<script lang="js">
    export default {
        name: 'CEFEPIME',


    }
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .CEFEPIME {
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
