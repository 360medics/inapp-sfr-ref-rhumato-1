<template lang="html">
  <section class="ContreIndications">
    <h2 class="title">Complications des infiltrations</h2>
<span class="line"></span>

    <ul>
      <li>Infections (arthrites septiques iatrogènes)</li>
      <li>Arthrites microcristallines réactionnelles (dans les 24 heures après le geste, surtout avec les produits contenant des micro-cristaux de grande taille type Hexatrione®)</li>
      <li>Flushs par passage systémique du produit (érythème facial,bouffées vaso-motrices, voire céphalées, disparaissant en 24 à 48 heures)</li>
      <li>Douleurs et malaises vagaux (rare syndrome de Tachon : violentes douleurs lombaires et/ou dorsales et/ou thoraciques avec sensation de mort imminente, survenant après quelques minutes. Lié à la diffusion dans la circulation veineuse du corticoïde via une brèche formée durant le geste)</li>
      <li>Hématome</li>
      <li>Atrophie sous cutanée et dépigmentation</li>
      <li>Nécrose des parties molles par diffusion d’Hexatrione®en périarticulaire</li>
    </ul>
  </section>
</template>

<script lang="js">
    export default {
        name: 'ContreIndications',


    }
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .ContreIndications {
      padding: 0 15px;
      text-align: left;



      .bold {
        font-weight: bold;
      }

      .underline {
        text-decoration: underline;
      }
    }
</style>
