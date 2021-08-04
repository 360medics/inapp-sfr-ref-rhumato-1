<template lang="html">
  <section class="Hypercalcemie">
    <h2 class="title">HYPERCALCEMIE</h2>
<span class="line"></span>

    <ul>
      <li>EST-ELLE SYMPTOMATIQUE ?
      <li>Signes digestifs : anorexie, nausées, vomissements, constipation, syndrome subocclusif, douleurs abdominales pseudo-chirurgicales</li>
      <li>Signes rénaux : polyurie et polydipsie, insuffisance rénale aiguë fonctionnelle, alcalose métabolique de contraction</li>
      <li>Signe généraux : asthénie, léthargie, fatigabilité, céphalées, confusion, coma et convulsions</li>
      <li>Signes ECG : raccourcissement du QT, aplatissement de l'onde T , allongement de l'espace PR et troubles du rythme</li>
    </ul>

    <p>Si hypercalcémie prolongée : calcifications viscérales des reins (néphrocalcinose, lithiases rénales (possible en cas d'hypercalcémie aiguë)), du myocarde, des artères, des yeux, du tympan et du poumon</p>

    <p>Bilan minimum :</p>
    <ul>
      <li>Calcémie</li>
      <li>Calcémie corrigée</li>
      <li>Phosphore</li>
      <li>Ionogramme, urée, créatininémie</li>
      <li>Vitamine D</li>
      <li>PTH</li>
      <li>Calciurie des 24h</li>
    </ul>

    <p>ETOLOGIE :</p>

    <p>Hyperparathyroïdie</p>
    <ul>
      <li>
        Primaire :
        <ul>
          <li>adénome parathyroïdien isolé ou adénomes multiples</li>
          <li> NEM (1 ou 2a)</li>
          <li>carcinome parathyroïdien</li>
        </ul>
      </li>
      <li>Tertiaire (autonomisée) : pendant une IRC ou une transplantation rénale </li>
    </ul>

    <p>Origine néoplasique</p>
    <ul>
      <li>
        Ostéolyse directe :
        <ul>
          <li>myélome</li>
          <li>métastases osseuses (cancer du sein, du rein, de la thyroïde)</li>
          <li>cancer du poumon, du rein, du sein</li>
          <li>myélome</li>
          <li>lymphomes hodgkiniens et non hodgkiniens</li>
        </ul>
      </li>
      <li>
        Toxiques ou médicaments
        <ul>
          <li>intoxication par la vitamine D</li>
          <li>Intoxication par la vitamine A (rétinoïdes)</li>
          <li>Diurétiques thiazidiques</li>
          <li>Sels de calcium Intoxication : lithium, hormones thyroïdiennes</li>
          <li>Syndrome des buveurs de lait</li>
        </ul>
      </li>
      <li>
        Granulomatoses
        <ul>
          <li>sarcoïdose</li>
          <li>tuberculose</li>
        </ul>
      </li>
      <li>
        Hypercalcémie d'immobilisation
        <ul>
          <li>Pathologies endocriniennes</li>
          <li>Hyperthyroïdie</li>
          <li>Phéochromocytome (hors NEM 1)</li>
          <li>insuffisance surrénale</li>
          <li>Insuffisance hépatique chronique sévère</li>
        </ul>
      </li>
      <li>Hypophosphorémie</li>
      <li>Hypercalcémie familiale avec hypocalciurie</li>
    </ul>

    <p>TRAITEMENT DE L’HYPERCALCEMIE SANS SIGNE DE GRAVITE</p>
    <ul>
      <li>Arrêt des traitement hypercalcémiant</li>
      <li>Réhydratation par du sérum physiologique : 3 à 6 L / 24 h selon volémie avec surveillance de la diurèse pour correction de l'hypovolémie liée à la polyurie</li>
      <li>Correction de l'hypokaliémie</li>
      <li>Biphosphonates : Pamidronate (60–90 mg IV sur 4 h) ou zolédronate (4 mg IV sur 15 min) Délai d'action de 2 à 4 jours, nadir de calcémie après 4 à 7 jours</li>
      <li>Corticoïdes Uniquement en cas d'hypercalcémie liée à une hypervitaminose D (calcitriol) 40 à 100 mg par jour en équivalent prednisone Per os ou intraveineux</li>
    </ul>

    <p>TRAITEMENT DE L’HYPERCALCEMIE SANS SIGNE DE GRAVITE</p>
    <ul>
      <li>Dénosumab : Délai d'action 2 à 4 jours et durée d'action 100 jours pour l’hypercalcémie secondaire à une néoplasie, en association aux biphosphonates en cas d'échec ou de contreindication des biphosphonates</li>
      <li>Traitement de la cause</li>
      <li>Monitoring ECG</li>
    </ul>
  </section>
</template>

<script lang="js">
    export default {
        name: 'Hypercalcemie',


    }
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .Hypercalcemie {
      padding: 0 15px;
      text-align: left;



      .bold {
        font-weight: bold;
      }
    }
</style>
