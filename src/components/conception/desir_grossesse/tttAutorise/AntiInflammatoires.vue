<template lang="html">
  <section class="AntiInflammatoires">
    <h2 class="title">ANTI-INFLAMMATOIRES</h2>
<span class="line"></span>

    <p>Grossesse :</p>
    <ul>
      <li>Possible pendant les 2 premiers trimestres de la grossesse</li>
      <li><span class="bold">SAUF pour les inhibiteurs sélectifs de COX2 non autorisés</span> (peu de données)</li>
    </ul>

    <p>Allaitement :</p>
    <ul>
      <li>Possibles pendant l’allaitement <span class="bold">SAUF les inhibiteurs sélectifs de COX2</span></li>
      <li>Préférer les AINS de courte ½-vie</li>
    </ul>
  </section>
</template>

<script lang="js">
    export default {
        name: 'AntiInflammatoires',


    }
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .AntiInflammatoires {
      padding: 0 15px;
      text-align: left;



      .bold {
        font-weight: bold;
      }
    }
</style>
