<template lang="html">
  <section class="AideCodage">
    <table class="AideCodage__table">
      <tr>
        <th>Code</th>
        <th>Intitulé CCAM</th>
      </tr>

      <tr>
        <td>APC</td>
        <td>Avis ponctuel de consultant du médecin</td>
      </tr>

      <tr>
        <td>CS+MPC+MCS+MCU</td>
        <td>Cs urgente demande du médecin traitant</td>
      </tr>

      <tr>
        <td>Cs PR épisode aigu ou aggravation</td>
        <td>CS+MPC+MCS+PPR</td>
      </tr>

      <tr>
        <td>Cs initiale complexe RI</td>
        <td>CS+MPC+MCS+MAV</td>
      </tr>

      <tr>
        <td>Cs instauration biothérapie</td>
        <td>CS+MPC+MCS+MPB</td>
      </tr>

      <tr>
        <td>NZLB001</td>
        <td>Inj artic MI sans guidage <br> Evacuation MS sans guidage <br> Evacuation MI</td>
      </tr>

      <tr>
        <td>NZLB001 + NZLB001</td>
        <td>Inj artic MI sans guidage x <br> Evacuation puis infiltration MI <br> Evacuation puis infiltration MS</td>
      </tr>

      <tr>
        <td>NZHB002 + NZLB001</td>
        <td>Ponction + Infiltration MI</td>
      </tr>

      <tr>
        <td>AHLB003</td>
        <td>Infiltration Arnold</td>
      </tr>

      <tr>
        <td>AHLB006</td>
        <td>Infiltration canal carpien</td>
      </tr>

      <tr>
        <td>AHLB012</td>
        <td>Infiltration Morton/Meralgie</td>
      </tr>

      <tr>
        <td>LHLB001</td>
        <td>Infiltration articulaire postérieure sans guidage</td>
      </tr>

      <tr>
        <td>PBQM003</td>
        <td>Echographie isolée</td>
      </tr>

      <tr>
        <td>YYYY028 + ZZLJ002</td>
        <td>Echographie + infiltration superficielle</td>
      </tr>

      <tr>
        <td>PBQM003 + AHLB006</td>
        <td>Echogaphie puis infiltration du canal carpien</td>
      </tr>

      <tr>
        <td>PBQM003 + AHLB012</td>
        <td>Echographie puis infiltration syndrome canalaire</td>
      </tr>

      <tr>
        <td>PBQM003 + NZLB001</td>
        <td>Echographie puis infiltration MI</td>
      </tr>

      <tr>
        <td>PBQM003 + MZLB001</td>
        <td>Echographie puis infiltration MS</td>
      </tr>

      <tr>
        <td>PBQM003 + MZJB001</td>
        <td>Echographie puis évacuation MS</td>
      </tr>

      <tr>
        <td>MAQK001 + Y + MAQK001 + Y + PBQM003</td>
        <td>Radiographie + échograpgie des deux épaules</td>
      </tr>

      <tr>
        <td>LEQK002 + Y + NAQK015 + Y</td>
        <td>Radiographie du rachis dorso lombaire + bassin</td>
      </tr>

       <tr>
        <td>MZQK003 + Y + MZQK003</td>
        <td>Radiographie des deux mains face + 2 poignets face et profil</td>
      </tr>

       <tr>
        <td>MAQK001 + MAQK001</td>
        <td>Radiographie des épaules bilatérales 3 ou 4 incidences</td>
      </tr>

       <tr>
        <td>MAQK001 + Y</td>
        <td>Radiographie épaule unilatérale 3 ou 4 incidences</td>
      </tr>

       <tr>
        <td>NFQK003 + Y</td>
        <td>Radiographie du genou 3 ou 4 incidences</td>
      </tr>

       <tr>
        <td>AFLH001 + YYYY033 + Y</td>
        <td>Infiltration épidurale sous contrôle radio</td>
      </tr>

       <tr>
        <td>YYYY033 + Y + MZLH002</td>
        <td>Infiltration MS avec guidage radio <br> Infiltration MI avec guidage radio</td>
      </tr>
    </table>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'AideCodage',
});
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .AideCodage {
      display: flex;
      justify-content: center;

      h2 {
        text-align: center;
      }

      .bold {
        font-weight: bold;
      }

      table {
        border-collapse: collapse;
        width: 100%;
        margin-bottom: 15px;
        margin-top: $gutter_medium;
      }

      td, th {
        border: 1px solid #ddd;
        padding: 8px;

        &.sep {
          color: indianred;
          font-weight: bold;
          text-align: center;
        }
      }

      table tr:nth-child(even){background-color: #f2f2f2;}

      table th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #472e5a;
        color: white;
      }
    }
</style>
