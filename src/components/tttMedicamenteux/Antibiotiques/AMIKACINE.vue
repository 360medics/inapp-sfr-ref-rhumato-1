<template lang="html">
    <section class="AMIKACINE">
      <h2 class="title">AMIKACINE</h2>
<span class="line"></span>

      <p>- DCI : AMIKACINE</p>
      <p><span class="bold">- Nom commercial</span> AMIKLIN® </p>

      <div>
        - Voie d’administration
        <ul>
          <li>IV 500 mg, 1g  flacon</li>
        </ul>
      </div>

      <p class="bold">- Posologies</p>

      <p>- Arthrite septique documentée à Entérocoque en bithérapie</p>
      <p>- Arthrite septique associée à une choc septique</p>
      <ul>
        <li><span class="bold">IV :</span> 20-30 mg/kg une fois par jour sur 30 minutes</li>
      </ul>

      <div>
        <span class="bold">- Contre-indications</span>
        <ul>
          <li>Hypersensibilité aux aminosides</li>
          <li>Cirrhose sévère Child-Pugh B-C</li>
          <li>Antécédent de colite pseudo-membraneuse</li>
        </ul>
      </div>

      <div>
        <span class="bold">- Précautions d’emploi</span>
        <ul>
          <li>Insuffisance rénale</li>
          <li>Trouble de l’audition</li>
          <li>Insuffisance hépatique</li>
          <li>Grossesse et allaitement</li>
          <li>Prise concomitante de médicaments néprhotoxiques</li>
          <li>Prise concomitante de médicaments ototoxiques</li>
          <li>Prise de Polymixine B, toxine botulique, curare, diurétique de l’anse, amphotéricine B, Ciclosporine, Tacrolimus</li>
          <li>Prise concomitante d’anti-vitamine K</li>
        </ul>
      </div>

      <div>
        <span class="bold">- Effets indésirables</span>
        <ul>
          <li>Toxidermie</li>
          <li>Toxicité rénale</li>
          <li>Toxicité auditive</li>
        </ul>
      </div>

      <div>
        <span class="bold">- Surveillance</span>
        <ul>
          <li>Surveillance de la fonction hépatique et rénale</li>
          <li>Surveillance taux résiduel si patient insuffisant rénal ou traitement > 5 jours.</li>
        </ul>
      </div>
    </section>
</template>

<script lang="js">
    export default {
        name: 'AMIKACINE',


    }
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .AMIKACINE {
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
