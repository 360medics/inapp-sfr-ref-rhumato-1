<template lang="html">
  <section class="Complications">
    <h2 class="title">Contre-indications aux infiltrations</h2>
    <span class="line"></span>

    <p class="underline bold">Contre-indications absolues</p>
    <ul>
      <li>Infection de l’articulation à infiltrer</li>
      <li>Infection cutanée et dermatose au niveau du site à infiltrer</li>
      <li>Infection à distance</li>
      <li>
        Traitement anticoagulant et antiagrégants plaquettaires selon les cas
        (cf supra)
      </li>
      <li>
        Allergie sévère aux produits utilisés (iodés, anesthésiques ou certains
        excipients présents dans le corticoïde)
      </li>
      <li>Matériel (ostéosynthèse, prothèse)</li>
      <li>Arthropathie des hémodialysés</li>
    </ul>

    <p class="underline bold">Contre-indications relatives</p>
    <ul>
      <li>
        Ostéonécrose épiphysaire (infiltration à faire plusieurs mois avant
        éventuelle arthroplastie)
      </li>
      <li>Diabète déséquilibré</li>
      <li>Pathologie psychiatrique déséquilibrée avec risque d’agitation</li>
      <li>
        Infiltration d’un membre après curage ganglionnaire ( à éviter car
        risque de lymphoedème )
      </li>
    </ul>
  </section>
</template>

<script lang="js">
export default {
    name: 'Complications',


}
</script>

<style scoped lang="scss">
@import 'src/sass/global.scss';
.Complications {
  padding: 0 15px;
  text-align: left;

  .bold {
    font-weight: bold;
  }

  .underline {
    text-decoration: underline;
  }
}
</style>
