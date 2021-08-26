<template>
  <div class="KneeLequesnes">
    <h2 class="title">Indice de Lequesne</h2>
      <p class="details">(Genou)</p>
    <span class="line"></span>

    <div v-for="(dataQuestion, i) in dataQuestions" :key="i">
      <HipLequesnesQuestion
        :index="i"
        :title="dataQuestion.title"
        :question="dataQuestion.question"
        :response="dataQuestion.response"
        :malusScore="dataQuestion.malusScore"
        :scores="scores"
        @upwardChange="upwardChange"
      ></HipLequesnesQuestion>
      <br/>

    </div>


    <span class="line"></span>
      <div class="result" v-if="finalScore">
          <h4 >Indice {{ finalScore }}</h4>
      </div>

    <p>Si l’indice est ≥ à 10-12, une prothèse peut être envisagée</p>

      <ReferencesMedical sourceLink="http://www.antalvite.fr/pdf/Indice%20algo-fonctionnel%20de%20Lequesne%20pour%20le%20genou.pdf" />
      <Footer/>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import HipLequesnesQuestion from "@/components/scores/PathologieMecanique/HipLequesnesQuestion.vue";
import { isMobile } from '@/global';
import ReferencesMedical from "@/components/ReferencesMedical.vue";
import Footer from "@/components/Footer.vue";

export default Vue.extend({
  name:"KneeLequesnes",
  components: {
      Footer,
      ReferencesMedical,
    HipLequesnesQuestion
  },

  data() {
    return {
      finalScore: 0,
      scores: [],
      dataQuestions: [
        {
          title: "Douleur",
          question: "Nocturne",
          response: [
            '0 - Aucune',
            '1 - Seulement aux mouvements et dans certaines positions',
            '2 - Même immobile, sans bouger.'
          ],
          malusScore: [0, 1, 2],
          userScore: 0
        },
        {
          question: "Dérouillage matinal",
          response: [
            '0 - Aucun ou inférieur à 1 minute',
            '1 - Entre 1 et 15 minutes',
            '2 - Plus d‘un quart d’heure'
          ],
          malusScore: [0, 1, 2],
          userScore: 0
        },
        {
          question: "Rester debout ou piétiner sur place ½ hre augmente-t-il la douleur",
          response: [
            '0 - Non',
            '1 - Oui'
          ],
          malusScore: [0, 1],
          userScore: 0
        },
        {
          question: "Douleur à la marche",
          response: [
            '0 - Non',
            '1 - Seulement après quelque distance',
            '2 - Dès le début de la marche et de façon croissante'
          ],
          malusScore: [0, 1, 2],
          userScore: 0
        },
        {
          question: "Pouvez-vous vous relever d’une chaise sans l’aide des bras?",
          response: [
            '0 - Non',
            '1 - Oui'
          ],
          malusScore: [0, 1],
          userScore: 0
        },
        {
          title: "PÉRIMÈTRE DE MARCHE (quelle que soit la douleur)",
          question: "Distance",
          response: [
            '0 - Illimité', '1 - Limité, mais supérieur à 1 km',
            '2 - Environ 1 km (environ 15 minutes)',
            '3 - 500 à 900 mètres (environ 8 à 15 minutes)',
            '4 - 300 à 500 mètres', '5 - 100 à 300 mètres'
          ],
          malusScore: [0, 1, 2, 3, 4, 5]
        },
        {
          question: "Béquille",
          response: [
            '0 - Pas besoin',
            '1 - Une canne ou une béquille est nécessaire',
            '2 - Deux cannes ou deux béquilles sont nécessaires'
          ],
          malusScore: [0, 1, 2]
        },
        {
          title: "AUTRES DIFFICULTÉS DE LA VIE QUOTIDIENNE",
          question: "Pouvez-vous monter un étage ?",
            response: [
                '0.0 - Sans difficulté',
                '0.5 - Assez facilement',
                '1.0 - Avec difficulté',
                '1.5 - Avec beaucoup de difficulté',
                '2.0 - Impossible',
            ],
            malusScore: [0, 0.5, 1, 1.5, 2],
          userScore: 0
        },
        {
          question: "Pouvez-vous descendre un étage?",
            response: [
                '0.0 - Sans difficulté',
                '0.5 - Assez facilement',
                '1.0 - Avec difficulté',
                '1.5 - Avec beaucoup de difficulté',
                '2.0 - Impossible',
            ],
            malusScore: [0, 0.5, 1, 1.5, 2],
          userScore: 0
        },

        {
          question: "Pouvez-vous vous accroupir ou rester à genoux?",
            response: [
                '0.0 - Sans difficulté',
                '0.5 - Assez facilement',
                '1.0 - Avec difficulté',
                '1.5 - Avec beaucoup de difficulté',
                '2.0 - Impossible',
            ],
            malusScore: [0, 0.5, 1, 1.5, 2],
            userScore: 0
        },
        {
          question: "Pouvez-vous marcher en terrain irrégulier?",
            response: [
                '0.0 - Sans difficulté',
                '0.5 - Assez facilement',
                '1.0 - Avec difficulté',
                '1.5 - Avec beaucoup de difficulté',
                '2.0 - Impossible',
            ],
          malusScore: [0, 0.5, 1, 1.5, 2],
          userScore: 0
        },
      ],
    };
  },
  methods: {
    isMobile,
    calcResult() {
      this.finalScore = parseFloat(this.scores.reduce((x1, x2) => (parseFloat(x1) + parseFloat(x2)).toFixed(1)));
    },
    upwardChange(e: any) {
      this.scores[e.index] = e.userScore;
      this.calcResult();
    },
  },
});
</script>

<style scoped lang="scss">
@import "src/sass/global";
</style>
