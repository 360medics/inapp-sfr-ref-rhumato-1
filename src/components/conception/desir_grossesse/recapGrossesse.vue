<template lang="html">
  <section class="recapGrossesse">
    <h2 class="title">Récapitulatif</h2>
<span class="line"></span>

    <table>
      <tr>
        <th>Traitement</th>
        <th>Préconception</th>
        <th>Pendant la grossesse</th>
        <th>Allaitement</th>
      </tr>
      <tr>
        <td class="bold">AINS (en dehors des inhibiteurs sélectifs de COX2)</td>
        <td>+ (suspendre si difficultés conceptionnelles)</td>
        <td>+ (SAUF AU T3)</td>
        <td>+ (préférer l’ibuprofène) </td>
      </tr>
      <tr>
        <td class="bold">Prednisone</td>
        <td>+ (dose < 20mg/j)</td>
        <td>+ (dose < 20 mg/j)</td>
        <td>+ (délai de 4h si dose > 20 mg/j)</td>
      </tr>
      <tr>
        <td class="bold">Hydroxychloroquine</td>
        <td>+++</td>
        <td>+++</td>
        <td>+++</td>
      </tr>
      <tr>
        <td class="bold">Colchicine</td>
        <td>+++</td>
        <td>+++</td>
        <td>+++</td>
      </tr>

      <tr>
        <td class="sep" colspan="4">csDMARD</td>
      </tr>
      <tr>
        <td class="bold">Sulfasalazine</td>
        <td>+++</td>
        <td>+++</td>
        <td>+++</td>
      </tr>
      <tr>
        <td class="bold">Azathioprine</td>
        <td>+++</td>
        <td>+++</td>
        <td>+++</td>
      </tr>
      <tr>
        <td class="bold">Méthotrexate</td>
        <td>- (1 mois avant)</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td class="bold">Léflunomide</td>
        <td>- (wash-out)</td>
        <td>-</td>
        <td>-</td>
      </tr>

      <tr>
        <td class="sep" colspan="4">bDMARD</td>
      </tr>
      <tr>
        <td class="bold">Certolizumab</td>
        <td>+++</td>
        <td>+++</td>
        <td>+++</td>
      </tr>
      <tr>
        <td class="bold">Etanercept</td>
        <td>+++</td>
        <td>++ (arrêter si possible à 30-32 SA)</td>
        <td>+++</td>
      </tr>
      <tr>
        <td class="bold">Infliximab, golimumab, adalimumab</td>
        <td>+</td>
        <td>+ (arrêter si possible à 20 SA)</td>
        <td>+++</td>
      </tr>
      <tr>
        <td class="bold">Rituximab</td>
        <td>-</td>
        <td>+ (si mise en jeu du pronostic vital)</td>
        <td>+</td>
      </tr>
      <tr>
        <td class="bold">Anakinra, belimumab, abatacept, tocilizumab, secukinumab, ustekinumab</td>
        <td>-</td>
        <td>- (sauf si absence d’autre alternative)</td>
        <td>+ (peu de données, mais molécules de HPM)</td>
      </tr>

      <tr>
        <td class="sep" colspan="4">tDMARD</td>
      </tr>
      <tr>
        <td class="bold">Tofacitnib, baricitinib </td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>

      <tr>
        <td class="sep" colspan="4">AUTRES</td>
      </tr>
      <tr>
        <td class="bold">Ciclosporine, tacrolimus</td>
        <td>+ (attention à la TA)</td>
        <td>+ (attention à la TA)</td>
        <td>+</td>
      </tr>
      <tr>
        <td class="bold">Mycophénolate mofétil</td>
        <td>- (6 semaines avant)</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td class="bold">Cyclophosphamide</td>
        <td>- (3 mois avant)</td>
        <td>+ (si mise en jeu du pronostic vital, T2 et T2 seulement)</td>
        <td>-</td>
      </tr>
    </table>
  </section>
</template>

<script lang="js">
    export default {
        name: 'recapGrossesse',


    }
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .recapGrossesse {
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
    }
</style>
