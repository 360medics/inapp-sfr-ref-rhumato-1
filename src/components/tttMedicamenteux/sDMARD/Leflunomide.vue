<template lang="html">
  <section class="Leflunomide">
    <h2 class="title">LEFLUNOMIDE</h2>
<span class="line"></span>

    <p><span class="bold">DCI :</span> LEFLUNOMIDE</p>
    <p><span class="bold">Nom commercial :</span> ARAVA</p>
    <p><span class="bold">Voie d’administration :</span> per-os (cp)</p>
    <p><span class="bold">Demi-vie d’élimination :</span> 15 jours</p>
    <p><span class="bold">Prix :</span> 30 euros/mois</p>
    <p><span class="bold">AMM</span>  PR, RPso</p>

    <p><span class="bold">Posologies</span> </p>
    <ul>
      <li>PR : 10 à 20 mg par jour en une prise</li>
      <li>Rpso : 20 mg par jour en une prise</li>
      <li>Prévention immunisation contre biothérapie dès 10mg/j</li>
    </ul>

    <p><span class="bold">Contre-indications :</span> </p>
    <ul>
      <li>Infection médullaire</li>
      <li>IR modérée à sévère (DFG < 60 mL/min) car non representé dans études</li>
      <li>Hypoprotidémie sévère</li>
      <li>Grossesse et allaitement</li>
    </ul>

    <p><span class="bold">Surveillance particulière :</span> </p>
    <ul>
      <li>Clinique : tension artérielle (risque d’HTA)</li>
      <li>Paraclinique : NFS, transaminases 1/15 jours pendant 6 mois puis 1x/2 mois</li>
    </ul>

    <p><span class="bold">Mécanisme d’action :</span> inhibe l’enzyme humaine dihydroorotate déshydrogénase de la chaine respiratoire mitochondriale (DHODH) et a une action anti-prolifératrice.</p>

    <p><span class="bold">Les « trucs » des jeunes rhumatologues :</span> </p>
    <ul>
      <li>Possibilité de wash out par cholestyramine 8 g 3 fois par jour pendant 11 jours</li>
      <li>En cas d’HTA : modification modalités traitement ou introduction tt anti-HTA ?</li>
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
        name: 'Leflunomide',


    }
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .Leflunomide {
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
