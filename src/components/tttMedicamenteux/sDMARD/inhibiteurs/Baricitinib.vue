<template lang="html">
  <section class="Baricitinib">
    <h2 class="title">BARICITINIB</h2>
<span class="line"></span>

    <p><span class="bold">DCI :</span> BARICITINB</p>
    <p><span class="bold">Nom commercial :</span> OLUMIANT</p>
    <p><span class="bold">Voie d’administration :</span> per-os en cp de 2 mg ou 4 mg</p>
    <p><span class="bold">Demi-vie d’élimination :</span> 12h</p>
    <p><span class="bold">Prix :</span> 730 euros/mois</p>
    <p><span class="bold">AMM :</span> PR, études en cours dans le lupus</p>

    <p><span class="bold">Posologies</span></p>
    <ul>
      <li>4 mg par jour en une prise</li>
      <li>
        Adaptation posologique à 2 mg pour
        <ul>
          <li>> 75 ans</li>
          <li>Antécédents d’infections chroniques ou à répétition</li>
          <li>Clairance rénale entre 30 et 60 ml/min</li>
          <li>Co-prescription de probénécide</li>
        </ul>
      </li>
    </ul>

    <p><span class="bold">Contre-indications (RCP)</span></p>
    <ul>
      <li>Anémie < 8 g/dL, leucopénie < 1 G/L, lymphopénie < 0,5 G/L</li>
      <li>Insuffisance hépatique, insuffisance rénale sévère</li>
      <li>Grossesse</li>
    </ul>

    <p><span class="bold">Surveillance</span></p>
    <ul>
      <li>Biologique : NFS, créatininémie, transaminases, bilan lipidique</li>
    </ul>

    <p><span class="bold">Recommandations supplémentaires du CRI</span></p>
    <ul>
      <li>Contre-indiqué si infections VIH, HBV ou HCV actives non traitées)</li>
      <li>Sur-risque de MTEV et d’herpès viral ou zona comparativement aux bDARMDS</li>
    </ul>

    <p><span class="bold">Mécanisme d’action :</span> inhibition sélective de JAK1 et JAK2 et donc de la production cytokinique d’aval (GM-CSF, IL-6, IL-12, IL-23) et indirectement du TNF.</p>

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
        name: 'Baricitinib',


    }
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .Baricitinib {
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
