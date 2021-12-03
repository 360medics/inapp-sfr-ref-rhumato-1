<template lang="html">
  <section class="Echographie">
    <h2>Echographie</h2>

    <p class="bold">Echographie ostéo articulaire : </p>
    <p class="red bold">Région intérêt (à préciser)</p>
    <ul>
      <li><span class="underline">Indication</span> : XXX</li>
      <li><span class="underline">Résultats</span> : </li>
      <li>
        Préciser les articulations étudiées :
        <ul>
          <li>Synovite : Oui / Non, Si oui : grade (1-2-3), doppler B : Oui / Non : Si oui grade 1 – 2 – 3</li>
          <li>Présence de calcifications : Oui / Non, si oui : description</li>
          <li>Etudes structures para articulaires : tendons …</li>
        </ul>
      </li>
      <li><span class="underline">Conclusion</span> : </li>
    </ul>
  </section>
</template>

<script lang="js">
    export default {
        name: 'Echographie',
    }
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .Echographie {
      padding: 0 15px;
      text-align: left;

      h2 {
        text-align: center;
      }

      .bold {
        font-weight: bold;
      }

      .red {
        color: red;
      }

      .underline {
        text-decoration: underline;
      }
    }
</style>
