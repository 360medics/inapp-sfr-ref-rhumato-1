<template>
  <div class="NewYorkClassification">
    <h3 class="title">Classification de New York</h3>
    <span class="line"></span>
    <table>
      <tr>
        <td>Stade 0</td>
        <td>Aspect normal des sacro-iliaques</td>
      </tr>
      <tr>
        <td>Stade 1</td>
        <td>Sacro-iliite douteuse (sclérose et altération focalisée de l'interligne)</td>
      </tr>
      <tr>
        <td>Stade 2</td>
        <td>Sacro-iliite modérée (pseudo-élargissement érosions et sclérose)</td>
      </tr>
      <tr>
        <td>Stade 3</td>
        <td>Sacro-iliite avérée (sclérose et érosions franches, en timbre-poste)</td>
      </tr>
      <tr>
        <td>Stade 4</td>
        <td>Ankylose sacro-iliaque</td>
      </tr>

    </table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "NewYorkClassification",
  data() {
    return {
      result: null,
    };
  },

});
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
.NewYorkClassification {}
</style>
