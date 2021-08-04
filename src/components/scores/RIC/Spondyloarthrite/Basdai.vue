<template>
  <div class="Basdai">
    <h3 class="title">Score Basdai</h3>
    <span align="center" class="score_note"
      >Pour chaque item, indiquez une valeur de 0 (absent) à 10 (extrême)
      concernant votre ressenti.</span
    >
    <span class="line"></span>
    <form name="Form" id="Form">
      <p>1. Où situez-vous votre degré global de fatigue&nbsp;?</p>
      <input
        name="vItem1"
        id="vItem1"
        type="number"
        class="inputNumber"
        v-model="vItem1"
        min="0"
        max="10"
      /><span class="score_note"> (0=absent, 10=extrême)</span>
      <p>
        2. Où situez-vous votre degré global de douleur au niveau du cou, du dos
        et des hanches dans le cadre de votre spondylarthrite ankylosante&nbsp;?
      </p>
      <input
        name="vItem2"
        id="vItem2"
        type="number"
        class="inputNumber"
        v-model="vItem2"
        min="0"
        max="10"
      /><span class="score_note"> (0=absent, 10=extrême)</span>
      <p align="left" colspan="2">
        3. Où situez-vous votre degré de gonflement articulaire en dehors du
        cou, du dos et des hanches&nbsp;?
      </p>
      <input
        name="vItem3"
        id="vItem3"
        type="number"
        class="inputNumber"
        v-model="vItem3"
        min="0"
        max="10"
      /><span class="score_note"> (0=absent, 10=extrême)</span>
      <p>
        4. Où situez-vous votre degré de gêne pour les zones sensibles au
        toucher ou à la pression&nbsp;?
      </p>
      <input
        class="inputNumber"
        name="vItem4"
        id="vItem4"
        type="number"
        v-model="vItem4"
        min="0"
        max="10"
      /><span class="score_note"> (0=absent, 10=extrême)</span>
      <p>
        5. Où situez-vous votre degré de raideur matinale depuis votre
        réveil&nbsp;?
      </p>
      <input
        class="inputNumber"
        name="vItem5"
        id="vItem5"
        type="number"
        v-model="vItem5"
        min="0"
        max="10"
      /><span class="score_note"> (0=absent, 10=extrême)</span>
      <p>
        6. Quelle est la durée de votre raideur matinale à partir de votre
        réveil&nbsp;?
      </p>
      <div class="radio">
        <input
          name="vDuree"
          id="vDuree1"
          type="radio"
          value="0"
          v-model="picked"
          checked="checked"
        /><label
          class="btn"
          for="vDuree1"
          :class="{ selected: picked === '0' || picked === 0 }"
          >Aucune</label
        ><br />
      </div>
      <div class="radio">
        <input
          name="vDuree"
          id="vDuree2"
          type="radio"
          v-model="picked"
          value="1.25"
        /><label
          class="btn"
          for="vDuree2"
          :class="{ selected: picked === '1.25' }"
          >15 minutes</label
        ><br />
      </div>
      <div class="radio">
        <input
          name="vDuree"
          id="vDuree3"
          type="radio"
          v-model="picked"
          value="2.5"
        /><label
          class="btn"
          for="vDuree3"
          :class="{ selected: picked === '2.5' }"
          >30 minutes</label
        ><br />
      </div>
      <div class="radio">
        <input
          name="vDuree"
          id="vDuree4"
          type="radio"
          v-model="picked"
          value="3.75"
        /><label
          class="btn"
          for="vDuree4"
          :class="{ selected: picked === '3.75' }"
          >45 minutes</label
        ><br />
      </div>
      <div class="radio">
        <input
          name="vDuree"
          id="vDuree5"
          type="radio"
          v-model="picked"
          value="5"
        /><label class="btn" for="vDuree5" :class="{ selected: picked === '5' }"
          >1 heure</label
        ><br />
      </div>
      <div class="radio">
        <input
          name="vDuree"
          id="vDuree6"
          type="radio"
          value="6.25"
          v-model="picked"
        /><label
          class="btn"
          for="vDuree6"
          :class="{ selected: picked === '6.25' }"
          >1 h 15</label
        ><br />
      </div>
      <div class="radio">
        <input
          name="vDuree"
          id="vDuree7"
          type="radio"
          value="7.5"
          v-model="picked"
        /><label
          class="btn"
          for="vDuree7"
          :class="{ selected: picked === '7.5' }"
          >1 h 30</label
        ><br />
      </div>
      <div class="radio">
        <input
          name="vDuree"
          id="vDuree8"
          type="radio"
          value="8.75"
          v-model="picked"
        /><label
          class="btn"
          for="vDuree8"
          :class="{ selected: picked === '8.75' }"
          >1 h 45</label
        ><br />
      </div>
      <div class="radio">
        <input
          name="vDuree"
          id="vDuree9"
          type="radio"
          value="10"
          v-model="picked"
        /><label
          class="btn"
          for="vDuree9"
          :class="{ selected: picked === '10' }"
          >2 h ou plus</label
        ><br />
      </div>
      <br />
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
      Références:<br />
      Garrett S., Jenkinson T., Kennedy L.G., Whitelock H., Gaisford P., Calin
      A.; A new approach to defining disease status in ankylosing spondylitis:
      the Bath Ankylosing Spondylitis Disease Activity Index; Journal of
      Rheumatology; Dec. 1994, 21(12):2286-91.
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Basdai',
  data() {
    return {
      vItem1: 0,
      vItem2: 0,
      vItem3: 0,
      vItem4: 0,
      vItem5: 0,
      result: 0,
      picked: 0,
    };
  },
  methods: {
    f_Calculer() {
      // calcul du résultat
      var Dummy = (this.vItem5 * 1 + this.picked * 1) / 2;
      var Res =
        (this.vItem1 * 1 +
          this.vItem2 * 1 +
          this.vItem3 * 1 +
          this.vItem4 * 1 +
          Dummy) /
        5;

      // Affichage du résultat
      return (this.result = Res);
    },
  },

});
</script>

<style scoped lang="scss">
@import 'src/sass/global.scss';
@import 'src/sass/global';

.Basdai {
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
    border-collapse: 0;
    margin-left: auto;
    margin-right: auto;
    padding: 2;
  }
}
</style>
