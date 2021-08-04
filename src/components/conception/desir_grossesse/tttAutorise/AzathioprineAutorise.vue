<template lang="html">
  <section class="Azathioprine">
    <h2 class="title">Azathioprine</h2>
<span class="line"></span>

    <p>Grossesse:</p>
    <ul>
      <li>Possible pendant toute la durée de la grossesse</li>
      <li>Attention au risque accru d’infection materno-fœtale, <span class="bold">CMV</span> surtout</li>
    </ul>

    <p>Allaitement:</p>
    <ul>
      <li>Possible pendant l’allaitement</li>
      <li>Attention aux patientes avec un déficit en thiopurine méthyltransférase</li>
    </ul>
  </section>
</template>

<script lang="js">
    export default {
        name: 'Azathioprine',


    }
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .Azathioprine {
      padding: 0 15px;
      text-align: left;



      .bold {
        font-weight: bold;
      }
    }
</style>
