<template lang="html">
  <section class="Tofacitinib">
    <h2 class="title">TOFACITINIB</h2>
<span class="line"></span>

    <p><span class="bold">DCI :</span> TOFACITINIB</p>
    <p><span class="bold">Nom commercial :</span> XELJANZ</p>

    <p><span class="bold">Voie d’administration :</span></p>
    <ul>
      <li>LI : per-os en cp de 5 ou 10 mg</li>
      <li>LP 11 mg en cours de commercialisation</li>
    </ul>

    <p><span class="bold">Demi-vie d’élimination :</span> 3h</p>
    <p><span class="bold">Prix :</span>700 euros à 1300 euros par mois selon posologie</p>

    <p><span class="bold">AMM :</span></p>
    <ul>
      <li>PR</li>
      <li>Rpso</li>
      <li>RCH</li>
    </ul>

    <p><span class="bold">Posologies</span></p>
    <ul>
      <li class="bold">Tt d’induction (RCH) : 10 mg 2/jour</li>
      <li>Tt d’entretien : 5 mg x2/jour</li>
      <li>
        Adaptation posologique à 5 mg par jour
        <ul>
          <li>Clairance rénale < 30 mL/min</li>
          <li>Co-prescription d’inhibiteurs du CYP450  ou inducteurs du CYP3A4</li>
        </ul>
      </li>
    </ul>

    <p><span class="bold">Contre-indications (RCP)</span></p>
    <ul>
      <li>Anémie < 9 g/dL, leucopénie < 1 G/L, lymphopénie < 0,75 G/L</li>
      <li>Insuffisance hépatique</li>
      <li>Grossesse</li>
    </ul>

    <p><span class="bold">Recommandations supplémentaires du CRI</span></p>
    <ul>
      <li>Contre-indiqué si infections VIH, HBV ou HCV actives non traitées</li>
      <li>Sur-risque de MTEV et d’herpès viral ou zona</li>
    </ul>

    <p><span class="bold">Surveillance :</span> NFS, créatininémie, transaminases, bilan lipidique</p>
    <p><span class="bold">Mécanisme d’action :</span> inhibition JAK1 et JAK3 et donc de la production cytokinique d’aval  (IL-17, IL-23, IL-6 et indirectement TNF). Diminution expression de pSTAT3, pSTAT1 et NFkB dans les fibroblastes cutanés. </p>

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
        name: 'Tofacitinib',


    }
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .Tofacitinib {
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
