<template lang="html">
  <section class="AJI">
    <h2 class="title">Forme d’AJI</h2>
<span class="line"></span>

    <!-- <table>
      <tr>
        <th>AJI</th>
        <th>Forme oligoarticulaire</th>
        <th>Forme polyarticulaire FR-</th>
        <th>Forme polyarticulaire FR+</th>
        <th>Forme de type SpA</th>
        <th>AJI systématique</th>
      </tr>
      <tr>
        <td>Age moyen</td>
        <td>2-4 ans</td>
        <td>2-4 ans<br>6-12 ans</td>
        <td>9-12 ans</td>
        <td>10 ans</td>
        <td>1-5 ans</td>
      </tr>
    </table> -->
    <img src="@/assets/rhumato_aji.png">
  </section>
</template>

<script lang="js">
    export default {
        name: 'AJI',


    }
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .AJI {
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
        background-color: #4472c4;
        color: white;
      }

      img {
        width: 100%;
      }
    }
</style>
