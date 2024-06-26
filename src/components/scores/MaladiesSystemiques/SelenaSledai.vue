<template>
  <div class="score">
    <h2 class="title">SCORE SELENA-SLEDAI</h2>
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

    <span class="line"></span>
    <br>
    <div class="result" :class="{red: (finalScore > 74), orange: (finalScore > 49 && finalScore < 75), marron: (finalScore > 25 && finalScore < 50), green: finalScore < 26}">
      Score final <em>{{ finalScore }}</em>.
      <p>Vérification de la présence ou non de 24 variable. Le résultat varie de 0 à 105.</p>
    </div>

    <h3>Interprétation :</h3>
    <p>Donne une évaluation de l'activité de la maladie lupique. Le poids attribué à chaque variable a été déterminé par analyse de régression mutliple. Les manifestations décrites sont prises en comptes si elle sont présentes le jour de la consultation ou bien dans les 10 jours précédents.</p>
    <p class="score_ref">
      Références:<br />
      Bombardier C., Gladmann D.D., Urowitz M.B., Caron D., Chang C.H., and the
      Committee on prognosis studies in SLE – Derivation of the SLEDAI : a
      disease activity index for lupus patients. Arthritis Rheum., 1992, 35,
      630-640.
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
      finalScore: 0,
      scores: [],
      datasQuestion: [
        { question: 'Convulsion', malusScore: 8, userScore: 0 },
        { question: 'Psychose', malusScore: 8, userScore: 0 },
        { question: 'Atteinte cérébrale', malusScore: 8, userScore: 0 },
        { question: 'Troubles visuels', malusScore: 8, userScore: 0 },
        { question: 'Nerfs crâniens', malusScore: 8, userScore: 0 },
        { question: 'Céphalées', malusScore: 8, userScore: 0 },
        { question: 'AVC', malusScore: 8, userScore: 0 },
        { question: 'Vascularite', malusScore: 8, userScore: 0 },
        { question: 'Arthrites', malusScore: 4, userScore: 0 },
        { question: 'Myosite', malusScore: 4, userScore: 0 },
        { question: 'Cylindres urinaires', malusScore: 4, userScore: 0 },
        { question: 'Hématurie', malusScore: 4, userScore: 0 },
        { question: 'Protéinurie', malusScore: 4, userScore: 0 },
        { question: 'Pyurie', malusScore: 4, userScore: 0 },
        { question: 'Nouvelle éruption cutanée', malusScore: 2, userScore: 0 },
        { question: 'Alopécie', malusScore: 2, userScore: 0 },
        { question: 'Ulcères muqueux', malusScore: 2, userScore: 0 },
        { question: 'Pleurésie', malusScore: 2, userScore: 0 },
        { question: 'Péricardite', malusScore: 2, userScore: 0 },
        { question: 'Complément', malusScore: 2, userScore: 0 },
        { question: 'Anti-ADN', malusScore: 2, userScore: 0 },
        { question: 'Fièvre', malusScore: 1, userScore: 0 },
        { question: 'Thrombopénie', malusScore: 1, userScore: 0 },
        { question: 'Leucopénie', malusScore: 1, userScore: 0 },
      ],
    };
  },
  methods: {
    calcResult() {
      this.finalScore = this.scores.reduce((x1, x2) => x1 + x2);
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
@import 'src/sass/global';
</style>
