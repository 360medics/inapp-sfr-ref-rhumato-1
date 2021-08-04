<template lang="html">
  <section class="Arthrite">
    <h2 class="title">ARTHRITE SEPTIQUE</h2>
<span class="line"></span>

    <img src="@/assets/urgence1.png">
    <p>Recommandations françaises 2020 sur la prise en charge des arthrites septiques sur articulation native de l’adulte, JBS</p>

    <p class="bold">L’antibiothérapie sera initiée dès la réception de résultats microbiologiques positifs (examen direct, culture du liquide synovial ou hémoculture). Une antibiothérapie probabiliste peut être envisagée en cas de liquide synovial franchement purulent sans cristaux</p>
    <ul>
      <li>Si ATB probabiliste (signes de gravité immédiat, SOFA ≥ 2) : C1G injectable (céfazoline) si < 70 ans et C3G injectable (ceftriaxone ou céfotaxime) si > 70 ans</li>
      <li>Bithérapie d’emble si Pseudomonas aeruginosa</li>
      <li>Adjonction d’un aminoside si infection à Enterococcus sp. ou Pseudomonas aeruginosa</li>
      <li>Si allergie à une pénicilline, l’emploi d’une céphalosporine peut être envisagé car le risque d’allergie croisée entre les pénicillines et les céphalosporines est faible</li>
    </ul>
    <p>Recommandations françaises 2020 sur la prise en charge des arthrites septiques sur articulation native de l’adulte, JBS</p>

    <img src="@/assets/urgence2.png">
    <p>Recommandations françaises 2020 sur la prise en charge des arthrites septiques sur articulation native de l’adulte, JBS</p>

    <ul>
      <li>La durée totale d’antibiothérapie (intraveineuse puis orale) doit être de 4 à 6 semaines pour une arthrite septique bactérienne à pyogènes</li>
      <li>Si bactériémie sans EI : ATB au moins 5 jours IV et au moins 7 jours si S. aureus</li>
      <li>Le dépistage d’une endocardite infectieuse par une échographie cardiaque doit être réalisé en cas d’arthrite septique à Staphylococcus aureus, Streptocoques non groupables d’origine buccodentaire, Streptococcus gallolyticus, ou Enterococcus faecalis</li>
    </ul>
    <p>Recommandations françaises 2020 sur la prise en charge des arthrites septiques sur articulation native de l’adulte, JBS</p>
  </section>
</template>

<script lang="js">
    export default {
        name: 'Arthrite',


    }
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .Arthrite {
      padding: 0 15px;
      text-align: left;



      .bold {
        font-weight: bold;
      }

      img {
        max-width: 100%;
      }
    }
</style>
