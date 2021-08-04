<template lang="html">
  <section class="MembreSuperieur">
    <h2 class="title">Membre supérieur</h2>
<span class="line"></span>

    <p>
      Réalisation des ponctions-infiltrations en pratique
      <br>
      Comment réaliser ces gestes ?
    </p>

    <p class="underline red">Articulations périphériques : membre supérieur</p>

    <p class="underline bold">Matériel pour le membre supérieur</p>
    <ul>
      <li>Aiguilles : aiguille verte (21 G) courte (40 mm) ou longue (50 mm), bleue (23 G) ou orange (25 G).</li>
      <li>Compresses stériles</li>
      <li>Gants</li>
      <li>Masque</li>
      <li>Antiseptique au mieux alcoolique, type povidone iodé ou chlorhexidine</li>
    </ul>

    <p class="underline bold">Voies d'abord</p>

    <p class="bold">Epaule</p>
    <ul>
      <li><span class="bold">Articulation gléno-humérale par voie antérieure</span> : patient en décubitus dorsal, insérer l’aiguille verticalement jusqu’au contact cartilagineux, au point situé 1 cm en dehors et en bas de la pointe de l’apophyse coracoïde</li>
      <li><span class="bold">Articulation gléno-humérale sous échographie par voie postérieure</span> : patient en décubitus latéral, insérer l’aiguille verticalement jusqu’au contact cartilagineux</li>
      <li><span class="bold">Bourse sous-acromio-deltoïdienne par voie latérale</span> : patient assis, insérer l’aiguille horizontalement et avec un trajet légèrement ascendant, 1 cm sous la dépression palpée sous le rebord acromial ; jusqu’au contact osseux (sous-acromial). Injecter sans résistance.</li>
    </ul>

    <p class="bold">Coude</p>
    <ul>
      <li>
        <span class="bold">Voie postérieure</span> : à l’aveugle ou échorepérée/échoguidée.
        <br>
        Coude fléchi, repérer en postéro-latéral le récessus articulaire de la fossette olécranienne. Insérer l’aiguille perpendiculairement au plan cutané jusqu’au contact osseux, l’aiguille traversant alors les fibres musculaires du triceps s’insérant sur le tendon situé plus médialement.
      </li>
      <li><span class="bold">Voie latérale</span> : coude fléchi à 90°, insérer l’aiguille sur 2 à 2,5 cm verticalement en regard de la dépression palpée au milieu d’une ligne située entre l’épicondyle latérale et l’olécrâne.</li>
      <li><span class="bold">Insertion tendineuse des épicondyliens latéraux</span> : insérer l’aiguille à 45° vers le poignet, à quelques mm en distalité de l’épicondyle latérale et effectuer une infiltration profonde afin de réduire le risque d’atrophie cutanée.</li>
    </ul>
  </section>
</template>

<script lang="js">
    export default {
        name: 'MembreSuperieur',


    }
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .MembreSuperieur {
      padding: 0 15px;
      text-align: left;



      .bold {
        font-weight: bold;
      }

      .underline {
        text-decoration: underline;
      }

      .red {
        color: red;
      }
    }
</style>
