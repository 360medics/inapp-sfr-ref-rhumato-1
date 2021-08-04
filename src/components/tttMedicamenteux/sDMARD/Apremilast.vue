<template lang="html">
  <section class="Apremilast">
    <h2 class="title">METHOTREXATE</h2>
<span class="line"></span>

    <p><span class="bold">DCI :</span> APREMILAST</p>
    <p><span class="bold">Nom commercial :</span> OTELZA</p>
    <p><span class="bold">Voie d’administration :</span> per-os (10/20/30 mg en cp)</p>
    <p><span class="bold">Demi-vie :</span> 9h</p>
    <p><span class="bold">Prix :</span> 580 euros/mois</p>

    <p><span class="bold">AMM</span> </p>
    <ul>
      <li>Rpso</li>
      <li>Psoriasis</li>
      <li>Maladie de Behçet (ulcères buccaux)</li>
    </ul>

    <p><span class="bold">Posologies</span> </p>
    <ul>
      <li>Initiation progressive sur 6 jours (+ 10 mg par jour)</li>
      <li>30 mg 2 fois par jour</li>
      <li>Adaptation posologique à 30 mg par jour le matin si clairance < 30 mL/min</li>
    </ul>

    <p><span class="bold">Contre-indications :</span> </p>
    <ul>
      <li>Grossesse</li>
    </ul>

    <p><span class="bold">Surveillance particulière (signal post-commercialisation) </span> </p>
    <ul>
      <li>
        <span class="bold">Clinique :</span>
        <ul>
          <li>Diarrhées, nausées et vomissements parfois sévères (hospitalisation) survenus dans les 2 à 4 semaines d’initiation</li>
          <li>Insomnie et dépression avec quelques cas rapportés de suicides</li>
        </ul>
      </li>
      <li>Précaution en cas d’insuffisance pondérale (risque de majorer perte de poids)</li>
    </ul>

    <p><span class="bold">Mécanisme d’action :</span> effet anti-inflammatoire par inhibition de la phosphodiesterase 4 (PDE4)</p>

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
        name: 'Apremilast',


    }
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .Apremilast {
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
