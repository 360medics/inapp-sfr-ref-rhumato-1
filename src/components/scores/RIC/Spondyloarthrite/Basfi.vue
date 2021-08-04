<template>
  <div class="Basfi">
    <h3 class="title">Score Basfi</h3>
    <span align="center" class="score_note"
      >Pour chaque item, indiquez une valeur de 0 (sans problème) à 10
      (impossible) selon la facilité à réaliser les actions.</span
    >
    <span class="line"></span>

    <form name="Form" id="Form">
      <p>
        1. Pouvez-vous mettre vos chaussettes ou vos collants sans aide
        extérieure et sans moyen extérieur (ex. tire-bas) ?
      </p>
      <input
        name="vItem1"
        id="vItem1"
        type="number"
        class="inputNumber"
        v-model="vItem1"
        min="0"
        max="10"
      /><span class="score_note"> (0=aisé, 10=impossible)</span>

      <p>
        2. Pouvez-vous vous pencher en avant pour ramasser un stylo par terre,
        sans aide ?
      </p>
      <input
        name="vItem2"
        id="vItem2"
        type="number"
        class="inputNumber"
        v-model="vItem2"
        min="0"
        max="10"
      /><span class="score_note"> (0=aisé, 10=impossible)</span>

      <p>
        3. Pouvez-vous prendre quelque chose sur une étagère élevée sans aide
        (ex. pince) ?
      </p>
      <input
        name="vItem3"
        id="vItem3"
        type="number"
        class="inputNumber"
        v-model="vItem3"
        min="0"
        max="10"
      /><span class="score_note"> (0=aisé, 10=impossible)</span>

      <p>
        4. Pouvez-vous vous lever d'un siège dans accoudoirs, sans vous aider de
        vos mains ni d'aucune aide ?
      </p>
      <input
        name="vItem4"
        id="vItem4"
        type="number"
        class="inputNumber"
        v-model="vItem4"
        min="0"
        max="10"
      /><span class="score_note"> (0=aisé, 10=impossible)</span>

      <p>
        5. Pouvez-vous passer de la position couchée sur le dos à la position
        debout sans aide ?
      </p>
      <input
        name="vItem5"
        id="vItem5"
        type="number"
        class="inputNumber"
        v-model="vItem5"
        min="0"
        max="10"
      /><span class="score_note"> (0=aisé, 10=impossible)</span>

      <p>
        6. Pouvez-vous rester debout 10 minutes sans soutien et sans avoir mal ?
      </p>
      <input
        name="vItem6"
        id="vItem6"
        type="number"
        class="inputNumber"
        v-model="vItem6"
        min="0"
        max="10"
      /><span class="score_note"> (0=aisé, 10=impossible)</span>

      <p>
        7. Pouvez-vous monter 12 à 15 marches sans vous tenir à la rampe ou
        utiliser un autre soutien et en ne posant qu'un seul pied par marche ?
      </p>
      <input
        name="vItem7"
        id="vItem7"
        type="number"
        class="inputNumber"
        v-model="vItem7"
        min="0"
        max="10"
      /><span class="score_note"> (0=aisé, 10=impossible)</span>

      <p>
        8. Pouvez-vous regarder par-dessus votre épaule sans vous retourner ?
      </p>
      <input
        name="vItem8"
        id="vItem8"
        type="number"
        class="inputNumber"
        v-model="vItem8"
        min="0"
        max="10"
      /><span class="score_note"> (0=aisé, 10=impossible)</span>

      <p>
        9. Pouvez-vous effectuer des activités nécessitant un effort physique
        (ex: kinésithérapie, jardinage ou sport) ?
      </p>
      <input
        name="vItem9"
        id="vItem9"
        type="number"
        class="inputNumber"
        v-model="vItem9"
        min="0"
        max="10"
      /><span class="score_note"> (0=aisé, 10=impossible)</span>

      <p>
        10. Pouvez-vous rester actif toute la journée, que ce soit chez vous ou
        au travail ?
      </p>
      <input
        name="vItem10"
        id="vItem10"
        type="number"
        class="inputNumber"
        v-model="vItem10"
        min="0"
        max="10"
      /><span class="score_note"> (0=aisé, 10=impossible)</span>

      <div>
        <hr width="80%" class="line" />
        <p align="center">
          <input
            class="btn"
            name="Submit"
            type="button"
            @click="f_Calculer()"
            value="Calculer"
          />
        </p>
        <hr width="80%" class="line" />
        <p class="result">
          Score :
          {{ result }}
        </p>
      </div>
    </form>
    <p class="score_ref">
      Références:<br />Calin A, Garrett S, Whitelock H et al. A new approch to
      defining functional ability in ankylosing spondylitis : the development of
      the Bath Ankylosing Spondylitis Functional Index. J.Rheumatol.
      1994;21(12):2281-2285.
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Basfi',
  data() {
    return {
      vItem1: null,
      vItem2: null,
      vItem3: null,
      vItem4: null,
      vItem5: null,
      vItem6: null,
      vItem7: null,
      vItem8: null,
      vItem9: null,
      vItem10: null,
      result: 0,
    };
  },
  methods: {
    f_Calculer() {
      // calcul du résultat
      var Res =
        (this.vItem1 * 1 +
          this.vItem2 * 1 +
          this.vItem3 * 1 +
          this.vItem4 * 1 +
          this.vItem5 * 1 +
          this.vItem6 * 1 +
          this.vItem7 * 1 +
          this.vItem8 * 1 +
          this.vItem9 * 1 +
          this.vItem10 * 1) /
        10;

      // Affichage du résultat
      return (this.result = Res);
    },
  },

});
</script>

<style scoped lang="scss">
@import 'src/sass/global.scss';
@import 'src/sass/global';

.Basfi {
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  label {
  }

  .label:hover,
  .label:focus {
    color: grey;
  }

  .label:active {
    background-color: white;
    color: black;
    outline: 1px solid black;
  }

  [type='radio']:checked + label {
    background-color: violet;
  }

  .score_note {
    font-size: smaller;
    font-style: italic;
  }

  .inputNumber {
    border-radius: 30px;
    padding: 8px;
    font-size: 15px;
    width: 90%;
  }

  .form {
    align-self: center;
  }

  .score_table {
    border-width: 0;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
