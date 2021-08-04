<template>
  <div class="Asdas">
    <h3 class="title">Score ASDAS</h3>

    <span align="center" class="score_note"
      >Renseignez chaque item. Indiquez une valeur de 0 (absent) à 10 (extrême)
      pour les questions concernant votre ressenti.</span
    >
    <span class="line"></span>

    <form>
      <section>
        <h5 class="categorie">
          1. Où situez-vous votre degré global de douleur au niveau du cou, du
          dos et des hanches dans le cadre de votre spondylarthrite ankylosante
          ?
        </h5>
        <div>
          <input type="number" v-model="painScale" max="10" />
          <p>(0=absent, 10=extrême)</p>
        </div>
      </section>

      <section>
        <h5 class="categorie">
          2. Quelle est la durée de votre raideur matinale à partir de votre
          réveil ?
        </h5>
        <div>
          <input
            type="radio"
            value="none"
            v-model="durationMorningStiffness"
            id="btnradio1"
          />
          <label
            class="btn"
            for="btnradio1"
            :class="{ selected: durationMorningStiffness === 'none' }"
            >Aucune</label
          >
        </div>
        <div>
          <input
            type="radio"
            value="15min"
            v-model="durationMorningStiffness"
            id="btnradio2"
          />
          <label
            class="btn"
            for="btnradio2"
            :class="{ selected: durationMorningStiffness === '15min' }"
            >15 min</label
          >
        </div>
        <div>
          <input
            type="radio"
            value="30min"
            v-model="durationMorningStiffness"
            id="btnradio3"
          />
          <label
            class="btn"
            for="btnradio3"
            :class="{ selected: durationMorningStiffness === '30min' }"
            >30 min</label
          >
        </div>
        <div>
          <input
            type="radio"
            value="45min"
            v-model="durationMorningStiffness"
            id="btnradio4"
          />
          <label
            class="btn"
            for="btnradio4"
            :class="{ selected: durationMorningStiffness === '45min' }"
            >45 min</label
          >
        </div>
        <div>
          <input
            type="radio"
            value="1h"
            v-model="durationMorningStiffness"
            id="btnradio5"
          />
          <label
            class="btn"
            for="btnradio5"
            :class="{ selected: durationMorningStiffness === '1h' }"
            >1 heure</label
          >
        </div>
        <div>
          <input
            type="radio"
            value="1h15"
            v-model="durationMorningStiffness"
            id="btnradio6"
          />
          <label
            class="btn"
            for="btnradio6"
            :class="{ selected: durationMorningStiffness === '1h15' }"
            >1h15</label
          >
        </div>
        <div>
          <input
            type="radio"
            value="1h30"
            v-model="durationMorningStiffness"
            id="btnradio7"
          />
          <label
            class="btn"
            for="btnradio7"
            :class="{ selected: durationMorningStiffness === '1h30' }"
            >1h30</label
          >
        </div>
        <div>
          <input
            type="radio"
            value="1h45"
            v-model="durationMorningStiffness"
            id="btnradio8"
          />
          <label
            class="btn"
            for="btnradio8"
            :class="{ selected: durationMorningStiffness === '1h45' }"
            >1h45</label
          >
        </div>
        <div>
          <input
            type="radio"
            value="2hOrMore"
            v-model="durationMorningStiffness"
            id="btnradio9"
          />
          <label
            class="btn"
            for="btnradio9"
            :class="{ selected: durationMorningStiffness === '2hOrMore' }"
            >2h ou plus</label
          >
        </div>
      </section>
      <section>
        <h5>3. Comment évaluez-vous globalement de votre maladie ?</h5>
        <input type="number" v-model="selfEval" max="10" />
        <p>(0=absent, 10=extrême)</p>
      </section>

      <section>
        <h5 class="categorie">
          4. Où situez-vous votre degré de gonflement ou de douleur articulaire
          en dehors du cou, du dos et des hanches ?
        </h5>
        <input type="number" v-model="scaleStateJoint" max="10" />
        <p>(0=absent, 10=extrême)</p>
      </section>

      <section id="cpr-vs">
        <input type="radio" value="cpr" v-model="picked" id="btnradio10" />
        <label class="btn" for="btnradio10">Utiliser CPR</label>
        <input type="radio" value="vs" v-model="picked" id="btnradio11" />
        <label class="btn" for="btnradio11">Utiliser VS.</label>
      </section>

      <section class="input-cpr-vs">
        <div v-if="picked === 'cpr'">
          <label>CPR : </label>
          <input type="number" v-model="cprValue" />
          <label>mg/l</label>
        </div>

        <div v-if="picked === 'vs'">
          <label>VS : </label>
          <input type="number" v-model="vsValue" />
          <label>s</label>
        </div>
      </section>

      <button type="button" class="btn validate" v-on:click="calcScore">
        calculer
      </button>
    </form>
    <section class="result">
      <p>
        Le score ASDAS (Ankylosing Spondylitis Disease Activity Score) permet de
        quantifier l'activité d'une spondylarthrite ankylosante
      </p>
      <p class="score">Score : {{ score }}</p>
      <p class="score">Seuil d'activité : {{ interpretation }}</p>
    </section>
    <p class="score_ref">
      Références:<br />
      Lukas C, Landewe R, Sieper J, Dougados M, Davis J, Braun J, et al.
      Development of an ASAS-endorsed disease activity score (ASDAS) in patients
      with ankylosing spondylitis. Ann Rheum Dis. 2009 Jan; 68(1):18-24.<br />
      Van der Heijde D, et al. ASDAS, a highly discriminatory ASAS-endorsed
      disease activity score in patients with ankylosing spondylitis. Ann Rheum
      Dis 2009;68:1811-8.
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Asdas',

  data() {
    return {
      painScale: 0,
      durationMorningStiffness: '',
      valueMorningStiffness: 0,
      selfEval: 0,
      scaleStateJoint: 0,
      picked: '',
      cprValue: 0,
      vsValue: 0,
      score: 0,
      interpretation: '',
    };
  },
  methods: {
    calcScore() {
      this.getValueForMorningStiffness();
      switch (this.picked) {
        case 'cpr':
          this.score =
            0.121 * this.painScale +
            0.058 * this.valueMorningStiffness +
            0.11 * this.selfEval +
            0.073 * this.scaleStateJoint +
            0.579 * Math.log(Number(this.cprValue) + Number(1));
          break;
        case 'vs':
          this.score =
            0.079 * this.painScale +
            0.069 * this.valueMorningStiffness +
            0.113 * this.selfEval +
            0.086 * this.scaleStateJoint +
            0.293 * Math.sqrt(Number(this.vsValue) + Number(1));
          break;
      }
      //Final result
      this.score = Math.round(this.score * 100) / 100;
      this.getScoreInterpretation(this.score);
    },

    getValueForMorningStiffness() {
      switch (this.durationMorningStiffness) {
        case 'none':
          this.valueMorningStiffness = 0;
          break;
        case '15min':
          this.valueMorningStiffness = 1.25;
          break;
        case '30min':
          this.valueMorningStiffness = 2.5;
          break;
        case '45min':
          this.valueMorningStiffness = 3.75;
          break;
        case '1h':
          this.valueMorningStiffness = 5;
          break;
        case '1h15':
          this.valueMorningStiffness = 6.25;
          break;
        case '1h30':
          this.valueMorningStiffness = 7.5;
          break;
        case '1h45':
          this.valueMorningStiffness = 8.75;
          break;
        case '2hOrMore':
          this.valueMorningStiffness = 10;
          break;
      }
    },

    getScoreInterpretation(score) {
      if (score < 1.3) {
        this.interpretation = 'Inactif';
      }
      if (score >= 1.3 && score < 2.1) {
        this.interpretation = 'Modéré';
      }
      if (score >= 2.1 && score < 3.5) {
        this.interpretation = 'Actif';
      }
      if (score >= 3.5) {
        this.interpretation = 'Très actif';
      }
    },
  },
});
</script>

<style scoped lang="scss">
@import 'src/sass/global.scss';
@import 'src/sass/global';

.Asdas {
  input:not([type='radio']) {
    height: 30px;
    padding: 0 3px;
    background: #EDECF4 0% 0% no-repeat padding-box;
    border-radius: 5px;
    opacity: 1;
    margin: .75em;
    border: none;
    width: 60px;
  }
  [type='radio'] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  label:hover,
  label:focus {
    color: grey;
  }

  label:active {
    background-color: white;
    color: black;
    outline: 1px solid black;
  }

  [type='radio']:checked + label {
    background-color: violet;
  }

  .input-cpr-vs {
    margin-bottom: 5%;
  }

  .btn {
    width: 40%;
  }

  .score {
    font-size: 30px;
    font-weight: 900;
  }
}
.score_note {
  display: flex;
  font-size: smaller;
  font-style: italic;
  justify-content: center;
}
</style>
