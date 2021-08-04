<template>
    <div class="NewYorkCriteria">
      <table class="table">
        <tbody>
        <tr>
          <th class='table__th' >Critères cliniques </th>
        </tr>
        <tr>
          <td class="table__td">Lombalgies avec raideur de plus de trois mois, améliorées à l'effort, mais ne cédant pas au repos
            Limitation des mouvements du rachis lombaire à la fois dans le plan frontal et sagital
            Limitation de l'ampliation thoracique par rapport aux valeurs normales corrigées pour l'âge et le sexe</td>
        </tr>
        </tbody>
      </table>

      <table class="table">
        <tbody>
        <tr>
          <th class='table__th' >Critères radiologiques</th>
        </tr>
        <tr>
          <td class="table__td">Sacro-ilite bilatérale de grade &#8805; 2, ou sacro-ilite unilatérale de grade &#8805; 3</td>
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

    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "NewYorkCriteria",
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
