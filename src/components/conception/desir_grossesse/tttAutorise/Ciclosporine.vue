<template lang="html">
  <section class="Ciclosporine">
    <h2 class="title">Ciclosporine</h2>
<span class="line"></span>

    <p>Grossesse: </p>
    <ul>
      <li>Possible pendant toute la durée de la grossesse</li>
      <li>
        Attention !
        <ul>
          <li>Surveillance de la pression artérielle</li>
          <li>Risque accru d’infection materno-fœtale, <span class="bold">CMV</span> surtout</li>
          <li>Baisse possible des concentrations plasmatiques au cours de la grossesse</li>
        </ul>
      </li>

    </ul>

    <p>Allaitement:</p>
    <ul>
      <li>Possible pendant l’allaitement</li>
    </ul>
  </section>
</template>

<script lang="js">
    export default {
        name: 'Ciclosporine',


    }
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .Ciclosporine {
      padding: 0 15px;
      text-align: left;



      .bold {
        font-weight: bold;
      }
    }
</style>
