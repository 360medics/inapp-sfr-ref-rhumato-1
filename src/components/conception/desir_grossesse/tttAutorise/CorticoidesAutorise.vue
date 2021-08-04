<template lang="html">
  <section class="Corticoides">
    <h2 class="title">Corticoïdes</h2>
<span class="line"></span>

    <p>Grossesse :</p>
    <ul>
      <li>Possibles pendant toute la durée de la grossesse</li>
      <li>Baisser la dose en-dessous de 20 mg/j (risque infectieux)</li>
    </ul>

    <p>Allaitement :</p>
    <ul>
      <li>Possibles pendant l’allaitement</li>
      <li>Respecter un délai de 4h avant l’allaitement en cas de dose > 20 mg/j</li>
    </ul>
  </section>
</template>

<script lang="js">
    export default {
        name: 'Corticoides',


    }
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .Corticoides {
      padding: 0 15px;
      text-align: left;



      .bold {
        font-weight: bold;
      }
    }
</style>
