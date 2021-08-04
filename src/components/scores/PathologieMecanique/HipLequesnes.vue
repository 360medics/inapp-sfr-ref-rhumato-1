<template>
  <div class="HipLequesnes">
    <h2 class="title">Indice de Lequesne</h2>
    <p class="details">(Hanche)</p>
    <span class="line"></span>

    <div v-for="(dataQuestion, i) in datasQuestion" :key="i">
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
    <h3 class="title">
      Indice <em>{{ finalScore }}</em
      >.
    </h3>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HipLequesnesQuestion from "./HipLequesnesQuestion.vue";
export default Vue.extend({
  name: "HipLequesnes",
  components: { HipLequesnesQuestion },
  data() {
    return {
      finalScore: 0,
      scores: [],
      datasQuestion: [
        { title: "Douleur ou gêne", question: " Douleur ou gêne Nocturne", response: ['0 - Aucune', '1 - Seulement aux mouvements et dans certaines postures.','2 - Même immobile, sans bouger.'], malusScore: [0,1,2], userScore: 0},
        { question: "Dérouillage matinal", response: [ '0 - Aucun ou inférieur à 1 minute.', '1 - Entre une et 15 minutes.','2 - Plus de 15 minutes'],  malusScore: [0,1,2], userScore: 0},
        { question: "Rester debout ou piétiner sur place 1/2 heure augmente-t-il la douleur ?", response: [ '0 - Non', '1 - Oui.'],  malusScore: [0,1], userScore: 0},
        { question: "Douleur à la marche", response: ['0 - Non.', '1 - Seulement après quelque distance.', '2 - Dès le début de la marche et de façon croissante.'], malusScore: [0,1,2], userScore: 0},
        { question: "Souffrez-vous à la station assise prolongée (2 heures) avant de vous relever ?", response: [ '0 - Non', '1 - Oui.'], malusScore: [0,1], userScore: 0},
        { title : 'Périmètre de marche', question: "Périmètre (quelle que soit la douleur)", response: ['0 - Illimité.', '1 - Limité mais supérieur à 1 km.', '2 - Environ 1 km (environ 15 minutes).','3 - 500 à 900 mètres (environ 8 à 15 minutes).', '4 - 300 à 500 mètres.', '5 - 100 à 300 mètres.'], malusScore: [0,1,2,3,4,5], userScore: 0},
        { question: "Aides nécessaires", response: ['+0 - Aucune canne ou béquille nécessaire.', '+1 - Une canne ou une béquille est nécessaire.', '+2 - Deux cannes ou deux béquilles sont nécessaires.'], malusScore: [0,1,2], userScore: 0},
        { title: "Autres difficultés de la vie quotidienne", question: "Pouvez-vous monter ou descendre un étage ?", response: ['0.0 - Sans difficulté.', '0.5 - Assez facilement.', '1.0 - Avec difficulté.', '1.5 - Avec beaucoup de difficulté.','2.0 - Impossible.'], malusScore: [0,0.5,1,1.5,2], userScore: 0},
        { question: "Pouvez-vous enfiler vos chaussettes par devant ?", response: ['0.0 - Sans difficulté.','0.5 - Assez facilement.', '1.0 - Avec difficulté.', '1.5 - Avec beaucoup de difficulté.', '2.0 - Impossible.'], malusScore: [0,0.5,1,1.5,2], userScore: 0},
        { title: "Pouvez-vous ramasser un objet par terre ?", question: "Pouvez-vous monter ou descendre un étage ?", response: ['0.0 - Sans difficulté.','0.5 - Assez facilement.', '1.0 - Avec difficulté.', '1.5 - Avec beaucoup de difficulté.', '2.0 - Impossible.'], malusScore: [0,0.5,1,1.5,2], userScore: 0},
        { title: "Pouvez-vous sortir d'une voiture, d'un fauteuil profond ?", question: "Pouvez-vous monter ou descendre un étage ?", response: ['0.0 - Sans difficulté.','0.5 - Assez facilement.', '1.0 - Avec difficulté.', '1.5 - Avec beaucoup de difficulté.', '2.0 - Impossible.'], malusScore: [0,0.5,1,1.5,2], userScore: 0},
      ],
    };
  },
  methods: {
    calcResult() {
      this.finalScore = this.scores.reduce((x1, x2) => (parseFloat(x1) + parseFloat(x2)).toFixed(1));
    },
    upwardChange(e: any) {
      this.scores[e.index] = e.userScore;
      this.calcResult();
    },
  },

});
</script>

<style lang="sass">
@import "src/sass/global"
</style>
