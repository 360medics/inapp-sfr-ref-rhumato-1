<template>
    <div class="NewYorkCriteria">
      <table class="table">
        <tbody>
        <tr>
          <th class='table__th' >Critères cliniques </th>
        </tr>
        <tr>
          <td class="table__td">Lombalgies avec raideur de plus de trois mois, améliorées à l'effort, mais ne cédant pas au repos
            <br>Limitation des mouvements du rachis lombaire à la fois dans le plan frontal et sagittal
            <br>Limitation de l'ampliation thoracique par rapport aux valeurs normales corrigées pour l'âge et le sexe</td>
        </tr>
        </tbody>
      </table>

      <table class="table">
        <tbody>
        <tr>
          <th class='table__th' >Critères radiologiques</th>
        </tr>
        <tr>
          <td class="table__td">Sacro-ilite bilatérale de grade &#8805; 2,<br>ou sacro-ilite unilatérale de grade &#8805; 3</td>
        </tr>
        </tbody>
      </table>

      <table class="table">
        <tbody>
        <tr class="table__tr">
          <th class='table__th'>Score</th>
        </tr>
        <tr>
          <td class="table__td">La spondylarthrite est définie si le critère radiologique est associé à au moins un des critères cliniques</td>
        </tr>
        </tbody>
      </table>

        <ReferencesMedical message2="van der Linden S, Valkenburg HA, Cats A. Evaluation of diagnostic criteria for ankylosing spondylitis. A proposal for modification of the New York criteria. Arthritis Rheum. avr 1984;27(4):361" />
        <Footer/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ReferencesMedical from "@/components/ReferencesMedical.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  name: "NewYorkCriteria",
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
.NewYorkCriteria {}

.table {
  margin: 10px 0;
  empty-cells: hide;
  border-collapse: collapse;
  width: 100%;

  &__title {
    color: blue;
  }

  &__th {
    border: 1px solid #D3D3D3;
    padding: 8px;
    background-color: #4c2b62;
    color: #fff;
  }

  &__td {
    font-size: 0.95em;
    letter-spacing: 0.20px;
    color: #404040;
    padding: 0.5em 0;
  }
}
</style>
