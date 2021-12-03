<template lang="html">
  <section class="Filgotinib">
    <h2 class="title">FILGOTINIB</h2>
<span class="line"></span>

    <p><span class="bold">DCI :</span> FILGOTINIB</p>
    <p><span class="bold">Nom commercial :</span> JYSELECA</p>
    <p><span class="bold">Voie d’administration :</span> Per-os en comprimé</p>
    <p><span class="bold">Demi-vie :</span> 9h.</p>
    <p><span class="bold">Prix :</span> ?</p>

    <p><span class="bold">AMM  (autorisation de l’EMA en septembre 2020):</span></p>
    <ul>
      <li>PR après échec ou intolérance à csDMARD</li>
      <li>En cours d’étude / validation pour MICI, lupus, dermatomyosite, Rpso, Spa</li>
    </ul>

    <p><span class="bold">Posologies</span></p>
    <ul>
      <li>200 mg par jour</li>
      <li>Adaptation posologique à 100 mg si âge > 75 ans ou clairance rénale < 60 mL/min</li>
      <li>Population avec IR < 15 mL/min, insuffisance hépatique sévère, HCV, HBV et HIV non représentés dans étude</li>
    </ul>

    <p><span class="bold">Contre-indications</span></p>
    <ul>
      <li>Anémie < 8 g/dL, leucopénie < 1 G/L ou lymphopénie < 0,5 G/L</li>
      <li>Infections actives ou ITL</li>
      <li>Grossesse</li>
    </ul>

    <p><span class="bold">Bilan pré-thérapeutique</span></p>
    <ul>
      <li>NFS, transaminases, créatininémie, <span class="bold">CPK</span>, EAL, beta-HCG si femme en âge procréer</li>
      <li>Sérologie VIH VHB VHC</li>
      <li>Radiographie du thorax ++ (TDM si doute) et quantiféron</li>
    </ul>

    <p><span class="bold">Surveillance :</span> NFS, créatininémie, transaminases, bilan lipidique</p>
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
        name: 'Filgotinib',


    }
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .Filgotinib {
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
