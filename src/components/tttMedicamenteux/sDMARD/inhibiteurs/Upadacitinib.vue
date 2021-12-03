<template lang="html">
  <section class="Upadacitinib">
    <h2 class="title">UPADACITINIB</h2>
<span class="line"></span>

    <p><span class="bold">DCI :</span> UPADACITINIB</p>
    <p><span class="bold">Nom commercial :</span> RINVOQ</p>
    <p><span class="bold">Voie d’administration :</span> 15 mg LP</p>
    <p><span class="bold">Demi-vie d’élimination :</span> 24h.</p>
    <p><span class="bold">Prix :</span> 700 euros/mois</p>

    <p><span class="bold">AMM :</span></p>
    <ul>
      <li>PR après échec ou intolérance à csDMARD</li>
      <li>(Pas d’AMM dans Rpso ou psoriasis)</li>
    </ul>

    <p><span class="bold">Posologies</span></p>
    <ul>
      <li>15 mg une fois par jour</li>
      <li>Pas d’adaptation posologique prévue mais population âgée (> 75 ans ou présentant insuffisance rénale sévère) non représentée dans les études.</li>
    </ul>

    <p><span class="bold">Contre-indications</span></p>
    <ul>
      <li>Anémie < 9 g/dL, leucopénie < 1 G/L, lymphopénie < 0,75 G/L</li>
      <li>Tuberculose active, infection grave (et infections VIH, VHB et VHC actives non traitées)</li>
      <li> Insuffisance hépatique sévère</li>
      <li>Grossesse</li>
    </ul>

    <p><span class="bold">Bilan pré-thérapeutique :</span></p>
    <ul>
      <li>NFS, transaminases, créatininémie, <span class="bold">CPK, EAL</span>, beta-HCG si femme en âge procréer</li>
      <li>Sérologie VIH VHB VHC</li>
      <li>Radiographie du thorax ++ (TDM si doute) et quantiféron</li>
    </ul>

    <p><span class="bold">Surveillance :</span> NFS, créatininémie, transaminases, CPK, bilan lipidique</p>
    <p><span class="bold">Mécanisme d’action :</span> inhibition préférentielle de JAK1 versus JAK2, JAK3 et TYK2</p>

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
        name: 'Upadacitinib',


    }
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .Upadacitinib {
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
