<template lang="html">
  <section class="Troubles">
    <h2 class="title">TROUBLES PHOSPHO CALCIQUES</h2>
<span class="line"></span>

    <table>
      <tr>
        <th></th>
        <th>HPT I</th>
        <th>HPT II</th>
        <th>HPT III</th>
      </tr>

      <tr>
        <td>Calcémie</td>
        <td>↑</td>
        <td>= ou ↓</td>
        <td>↑</td>
      </tr>

      <tr>
        <td>Calciurie</td>
        <td>↑ (sauf si hypercalcémie-hypocalciurie familiale)</td>
        <td>=</td>
        <td>↑</td>
      </tr>

      <tr>
        <td>Vit D</td>
        <td>=</td>
        <td>↓</td>
        <td>=</td>
      </tr>

      <tr>
        <td>Phosphore</td>
        <td>↓</td>
        <td>= ou ↑</td>
        <td>↑</td>
      </tr>

      <tr>
        <td>PTH</td>
        <td>↑</td>
        <td>↑</td>
        <td>↑</td>
      </tr>
    </table>
  </section>
</template>

<script lang="js">
    export default {
        name: 'Troubles',


    }
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .Troubles {
      padding: 0 15px;
      text-align: left;



      .bold {
        font-weight: bold;
      }

      table {
        border-collapse: collapse;
        width: 100%;
        margin-bottom: 15px;
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
