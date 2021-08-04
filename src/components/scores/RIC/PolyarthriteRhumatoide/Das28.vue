<template>
  <div class="Das28">
    <h2 class="title">Score DAS 28</h2>
    <p class="description"></p>
    <span class="line"></span>
    <form class="form" style="display: flex; flex-direction: column">
      <section>
        <label class="categorie">Articulations Douloureuses</label>
        <input
          type="number"
          required
          v-model="valuePainfullJoint"
          class="inputNumber"
        />
      </section>
      <section>
        <label class="categorie">Articulations Gonflées</label>
        <input
          type="number"
          required
          v-model="valueSwollenJoint"
          class="inputNumber"
        />
      </section>

      <section>
        <label class="categorie">Evaluation de la maladie</label>
        <input
          type="number"
          required
          v-model="valueDiseaseAssesment"
          class="inputNumber"
        />
      </section>

      <section>
        <label class="categorie">V.S. ou C.R.P. (mm.h1 ou mg/l)</label>
        <input
          type="number"
          required
          v-model="valueVsCrp"
          class="inputNumber"
        />
      </section>

      <section>
        <div>
          <label for="Vs">Utiliser V.S.</label>
          <input type="radio" class="btn" value="Vs" v-model="picked" id="Vs"/>
        </div>

        <div>
          <label for="Crp">Utiliser C.R.P.</label>
          <input
            type="radio"
            class="btn"
            value="Crp"
            v-model="picked"
            id="Crp"/>
        </div>
      </section>

      <button type="button" class="btn validate" v-on:click="calcScore">
        Calculer résultat
      </button>
    </form>

    <div class="result">
      <p>Score :{{ score }}</p>
      <p>Activité P.R :{{ prActivity }}</p>
    </div>

    <div class="info">
      <em>
        Interprétation:<br>
        Le nombre d'articulations douloureuses (de 0 à 28) est indiqué par le
        patient lors de la consultation. Le nombre d'articulations gonflées est
        constaté par le médecin lors de la consultation. Attention, les
        articulations des pieds et des chevilles ne sont pas prises en compte.<br>
        L'évaluation globale par le patient de l’activité de la PR est une
        échelle visuelle analogique de 0 à 100 mm. Le principe est le même que
        pour l'évaluation de la douleur : 0 = aucune manifestation de la PR, 100
        = gravité maximale que peut imaginer le patient.<br>
        Lors de l'utilisation de la VS, le nombre à indiquer est le nombre de mm
        à la première heure.
      </em>
      <br><br>
      <em>
        Réference:<br>
        Formules:
        DAS (VS) = 0,56 x √ad + 0,28 x √ag + 0,7 x ln(VS) + 0,014 x em
        DAS (CRP) = 0,56 x √ad + 0,28 x √ag + 0,36 x ln(CRP + 1) + 0,014 x em + 0,96
     Van der Heijde DMFM van't Hof MA van Riel PLCM et al. Judging disease activity in clinical practice in rheumatoid arthritis: first step in the development of a disease activity score. Ann Rheum Dis1990;49:916–20.
     Site DAS 28 : http://www.das-score.nl
      </em>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Das28",

  data() {
    return {
      valuePainfullJoint: 0,
      valueSwollenJoint: 0,
      valueDiseaseAssesment: 0,
      valueVsCrp: 0,
      score: 0,
      picked: "Vs",
      prActivity: "",
    };
  },
  methods: {
    calcScore() {
      this.score =
        0.56 * Math.sqrt(this.valuePainfullJoint) +
        0.28 * Math.sqrt(this.valueSwollenJoint) +
        0.014 * this.valueDiseaseAssesment;
      switch (this.picked) {
        case "Vs":
          this.score = this.score + 0.7 * Math.log(this.valueVsCrp);
          break;
        case "Crp":
          // Witout Number(), Js do a concatenation instead of a sum
          this.score =
            this.score +
            0.36 * Math.log(Number(this.valueVsCrp) + Number(1)) +
            0.96;
          break;
        default:
          this.score = 0;
      }
      this.calcPrActivity();
    },

    calcPrActivity() {
      if (this.score < 2.6) {
        this.prActivity = "Rémission";
      }
      if (this.score >= 2.6 && this.score < 3.3) {
        this.prActivity = "Faible";
      }
      if (this.score >= 3.3 && this.score <= 5.1) {
        this.prActivity = "Modérée";
      }
      if (this.score > 5.1) {
        this.prActivity = "Forte";
      }
    },
  },
});
</script>



<style scoped lang="scss">
@import "src/sass/global.scss";
@import "src/sass/global";

.Das28 {
  .inputNumber {
    width: 60px;
  }



  section {
    padding: 5px 10px;
    line-height: 30px;
    display: flex;
    justify-content: space-between;

    div {
      line-height: 20px;
    }
  }
}
</style>


