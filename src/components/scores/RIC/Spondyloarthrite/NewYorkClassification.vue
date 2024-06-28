<template>
  <div class="NewYorkClassification">
    <h3 class="title">Classification de New York</h3>
    <span class="line"></span>
    <table>
      <tr class="NewYorkClassification__table__tr">
        <td class="NewYorkClassification__table__td--left">Stade 0</td>
        <td>Aspect normal des sacro-iliaques</td>
      </tr>
      <tr class="NewYorkClassification__table__tr">
        <td class="NewYorkClassification__table__td--left">Stade 1</td>
        <td>Sacro-iliite douteuse (sclérose et altération focalisée de l'interligne)</td>
      </tr>
      <tr class="NewYorkClassification__table__tr">
        <td class="NewYorkClassification__table__td--left">Stade 2</td>
        <td>Sacro-iliite modérée (pseudo-élargissement érosions et sclérose)</td>
      </tr>
      <tr class="NewYorkClassification__table__tr">
        <td class="NewYorkClassification__table__td--left">Stade 3</td>
        <td>Sacro-iliite avérée (sclérose et érosions franches, en timbre-poste)</td>
      </tr>
      <tr class="NewYorkClassification__table__tr">
        <td class="NewYorkClassification__table__td--left">Stade 4</td>
        <td>Ankylose sacro-iliaque</td>
      </tr>

    </table>

      <ReferencesMedical sourceLink="https://www.edimark.fr/Front/frontpost/getfiles/17243.pdf" />
      <Footer/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ReferencesMedical from "@/components/ReferencesMedical.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  name: "NewYorkClassification",
    components: { ReferencesMedical, Footer },
    data() {
    return {
      result: null,
    };
  },

});
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
.NewYorkClassification {
  &__table{
    &__tr {
      line-height: 2em;
    }
    &__td--left {
      width: 20vw;
      vertical-align: top;
    }
  }

}
</style>
