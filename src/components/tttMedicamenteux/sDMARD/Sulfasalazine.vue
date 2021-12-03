<template lang="html">
  <section class="Sulfasalazine">
    <h2 class="title">SULFASALAZINE</h2>
<span class="line"></span>

    <p><span class="bold">DCI :</span> SULFASALAZINE</p>
    <p><span class="bold">Nom commercial :</span> SALAZOPYRINE</p>
    <p><span class="bold">Voie d’administration :</span> per-os (cp)</p>
    <p><span class="bold">Demi-vie d’élimination :</span> environ 10h. (3h chez les Japonais) mais effet immuno-modulateur prolongé.</p>
    <p><span class="bold">Prix :</span> 11 euros/mois</p>

    <p><span class="bold">AMM</span> </p>
    <ul>
      <li>PR (Pas d’AMM dans le Rpso)</li>
      <li>MICI : RCH,  maladie de Crohn de forme colique</li>
    </ul>

    <p><span class="bold">Posologies</span> </p>
    <ul>
      <li>Débuter par 1 cp (500 mg) puis augmentation par palier hebdomadaire d’1 cp (pour limiter les effets secondaires digestifs)</li>
      <li>PR : 4 cp par jour en 2 prises = 2 g</li>
      <li>
        MICI
        <ul>
          <li>Tt d’attaque : 8 à 12 cp par jour en 3 à 6 prises</li>
          <li>Tt d’entretien : 4 cp par jour en 2 prises</li>
        </ul>
      </li>
      <li>Prévention immunisation contre biothérapie dès 1 g/jour</li>
    </ul>

    <p><span class="bold">Précaution  :</span> rechercher déficit en G6PD en pré-thérapeutique (risque d’hémolyse)</p>

    <p><span class="bold">Contre-indications :</span> </p>
    <ul>
      <li>Hypersensibilité aux sulfamides et/ou salicylés</li>
      <li>Déficit en G6PD</li>
      <li>Porphyrie</li>
    </ul>

    <p><span class="bold">Surveillance particulière</span> </p>
    <ul>
      <li>Clinique : informer patient du risque de DRESS / Sd de Lyell.</li>
      <li>Paraclinique : NFS, transaminases tous les 15 jours pendant 1 mois puis tous les mois pendant 2 mois puis tous les 3 mois</li>
    </ul>

    <p><span class="bold">Mécanisme d’action :</span> effet immuno-modulateur (inhibition de synthèse de cytokines) et anti-inflammatoire (inhibition chimiotactisme)</p>
    <p><span class="bold">Les « trucs » des jeunes rhumatologues :</span> </p>
    <ul>
      <li>Population japonaise : posologie limitée à 1 g/jour</li>
    </ul>

    <div class="footer">
      <span class="underline">Abréviations:</span><br>
      Rpso = rhumatisme psoriasique<br>
      PR = polyarthrite rhumatoïde<br>
      SA = spondyloarthrite ankylosante<br>
      axSpa = spondyloarthrite axiale<br>
      pSpA = spondyloarthrite périphérique<br>
      <br>
      <span class="underline">Sources :</span>
      <ul>
        <li>RCP</li>
        <li>http://www.cri-net.com (fiches pratiques)</li>
        <li>Recommandations SFR de la PR et de la spondyloarthrite</li>
        <li>JAK-Stat Signaling as a Target for inflammatory and autoimmune diseases : current and future prospects</li>
        <li>Filgotinib : First Approval, Dilhon and al. Drugs, Nov 2020</li>
        <li>Safety profile of upadacitinib in rheumatoïd arthritis : integrated analysis from the SELECT phase III clinical programme, Cohen an al, ARD, Oct 2020</li>
      </ul>
    </div>
  </section>
</template>

<script lang="js">
    export default {
        name: 'Sulfasalazine',


    }
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .Sulfasalazine {
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
