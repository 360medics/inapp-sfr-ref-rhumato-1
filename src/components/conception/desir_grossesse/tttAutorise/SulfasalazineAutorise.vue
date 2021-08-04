<template lang="html">
  <section class="Sulfasalazine">
    <h2 class="title">Sulfasalazine</h2>
<span class="line"></span>

    <p>Grossesse :</p>
    <ul>
      <li>Possible pendant toute la durée de la grossesse</li>
      <li>Supplémentation en acide folique</li>
    </ul>

    <p>Allaitement :</p>
    <ul>
      <li>
        Possible pendant l’allaitement sauf si
        <ul>
          <li>Prématurité</li>
          <li>Déficit en G6PD</li>
          <li>Hyperbilirubinémie</li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script lang="js">
    export default {
        name: 'Sulfasalazine',


    }
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .Sulfasalazine {
      padding: 0 15px;
      text-align: left;



      .bold {
        font-weight: bold;
      }
    }
</style>
