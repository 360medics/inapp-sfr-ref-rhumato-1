<template lang="html">
  <section class="Hydroxychloroquine">
    <h2 class="title">HYDROXYCHLOROQUINE</h2>
<span class="line"></span>

    <p><span class="bold">DCI :</span> HYDROXYCHLOROQUINE</p>
    <p><span class="bold">Nom commercial :</span> PLAQUENIL</p>
    <p><span class="bold">Voie d’administration :</span> per-os (cp de 200 mg)</p>
    <p><span class="bold">Prix :</span> 4 à 12 euros/mois selon posologie</p>
    <p><span class="bold">Demi-vie d’élimination :</span> 30 à 50 jours (accumulation dans les tissus)</p>

    <p><span class="bold">AMM</span> </p>
    <ul>
      <li>PR en association avec autres sDMARD</li>
      <li>Lupus</li>
    </ul>

    <p><span class="bold">Posologies</span> </p>
    <ul>
      <li>Lupus : 1 à 3 cp max par jour selon indication</li>
      <li>PR : 2 à 3 cp par jour en tt d’attaque, 1 à 2 cp en entretien en 1 à 2 prises</li>
    </ul>

    <p><span class="bold">Contre-indications :</span> </p>
    <ul>
      <li>Rétinopathie pré-existante (anomalie au FO)</li>
      <li>Myasthénie</li>
      <li>Co-prescription d’(es)citalopram, dompéridone, pipéraquine car risque de TdP par allongement du QT (association déconseilée avec tout autre traitement allongeant le QT)</li>
    </ul>

    <p><span class="bold">Bilan pré-thérapeutique (selon PNDS)</span> </p>
    <ul>
      <li>Examen ophtalmologique + FO + champ visuel central automatisé + ERG multifocal ou OCT-SD</li>
    </ul>

    <p><span class="bold">Surveillance</span> </p>
    <ul>
      <li>Examen ophtalmologique (clinique et paraclinique) annuel dès l’initiation du traitement si facteur de risque de toxicité, sinon à partir de 5 ans de traitement</li>
    </ul>

    <p><span class="bold">Les « trucs » des jeunes rhumatologues :</span> </p>
    <ul>
      <li>Si doute sur observance, réalisation dosage plasmatique (plaquénilémie)</li>
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
        name: 'Hydroxychloroquine',


    }
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .Hydroxychloroquine {
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
