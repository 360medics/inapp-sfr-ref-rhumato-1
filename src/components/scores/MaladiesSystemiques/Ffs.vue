<template>
  <div class="Ffs">
    <h2 class="title">SCORE FFS</h2>
    <span class="line"></span>
    <br>
    <div v-for="(dataQuestion, i) in datasQuestion" :key="i">
      <HelperCheckBox
        :index="i"
        :question="dataQuestion.question"
        :malusScore="dataQuestion.malusScore"
        @upwardChange="upwardChange"
      ></HelperCheckBox>
      <br />
    </div>
    <div class="result" :class="{red: finalScore >= 2, orange: finalScore === 1, green: finalScore === 0}">
      <p>Score : {{ finalScore }}</p>
      <p>SURVIE À 5 ANS (%): <strong>{{ percentageSurvivalAtFiveYears }}</strong></p>
      <p>RISQUE DE DÉCÈS : <strong>{{ riskOfDeath }}</strong></p>
    </div>
    <p class="score_ref">
      Références:<br />- Gayraud M, Guillevin L, le Toumelin P, Cohen P, Lhote
      F, Casassus P, et al. Long-term followup of polyarteritis nodosa,
      microscopic polyangiitis, and Churg-Strauss syndrome: analysis of four
      prospective trials including 278 patients. Arthritis Rheum
      2001;44(3):666-75. <br />- Guillevin L, Lhote F, Gayraud M, Cohen P,
      Jarrousse B, Lortholary O, et al. Prognostic factors in polyarteritis
      nodosa and Churg-Strauss syndrome. A prospective study in 342 patients.
      Medicine (Baltimore) 1996;75(1):17-28.
    </p>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelperCheckBox from './HelperCheckBox.vue';
import Footer from '@/components/Footer.vue';

export default defineComponent({
  components: { HelperCheckBox, Footer },
  name: 'SelenaSledai',
  data() {
    return {
      percentageSurvivalAtFiveYears: 88.1,
      riskOfDeath: 0.62,
      finalScore: 0,
      scores: [],
      datasQuestion: [
        {
          question: 'Âge du patient supérieur à 65 ans',
          malusScore: 1,
          userScore: 0,
        },
        {
          question: 'Créatininémie supérieure à 150 μmol/l',
          malusScore: 1,
          userScore: 0,
        },
        { question: 'Cardiomyopathie', malusScore: 1, userScore: 0 },
        { question: 'Atteinte digestive', malusScore: 1, userScore: 0 },
        {
          question:
            'Absence d’atteinte ORL au cours d’une granulomatose avec polyangéite (de Wegener) ou d’un syndrome de Churg-Strauss',
          malusScore: 1,
          userScore: 0,
        },
      ],
    };
  },
  methods: {
    calcResult() {
      this.finalScore = this.scores.reduce(
        (x1, x2) => parseFloat(x1) + parseFloat(x2)
      );

      switch (this.finalScore) {
        case 0:
          this.percentageSurvivalAtFiveYears = 88.1;
          this.riskOfDeath = 0.62;
          break;
        case 1:
          this.percentageSurvivalAtFiveYears = 74.1;
          this.riskOfDeath = 1.35;
          break;
        default:
          this.percentageSurvivalAtFiveYears = 54.1;
          this.riskOfDeath = 2.4;
      }
    },
    upwardChange(e: any) {
      this.scores[e.index] = e.userScore;
      this.calcResult();
    },
  },
  watch: {
    choise: {
      handler: function() {
        this.calcResult();
      },
      deep: true,
    },
  },

});
</script>
<style scoped lang="scss">
@import 'src/sass/global.scss';
.Ffs {
}
</style>
