<template lang="html">
  <section class="CalendrierVaccinal">
    <h2 class="title">Calendrier Vaccinal</h2>
<span class="line"></span>

    <img src="@/assets/calendrier_vaccinal.png">

    <p>
      Vaccin vivants atténués (BCG, ROR, varicelle, fièvre jaune) contre indiqués si traitement immunosuppresseur, biothérapie et/ou corticothérapie à dose immunosuppressive (>10 mg d’équivalent prednisone ou > 2mg/kg/j)
      <br><br>
      Vaccins à réaliser de préférence au cours d’une phase inactive de l’AJI
    </p>
  </section>
</template>

<script lang="js">
    export default {
        name: 'CalendrierVaccinal',


    }
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .CalendrierVaccinal {
      padding: 0 15px;
      text-align: left;



      .bold {
        font-weight: bold;
      }

      img {
        width: 100%;
      }
    }
</style>
