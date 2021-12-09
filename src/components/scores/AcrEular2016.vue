<template>
  <!-- https://www.fai2r.org/les-pathologies-rares/gougerot-sjogren/criteres-de-classification-du-gougerot-sjogren-acr-eular-2016/ -->
  <div class="acrEular2016">
      <h2 class="title">Critères de classification du Gougerot-Sjögren: ACR/EULAR 2016</h2>

      <h4 class="subtitle">Sialadénite lymphocytaire avec focus score ≥ 1 sur la biopsie de glandes salivaires accessoires et focus score ≥ 1 foci/4mm² </h4>
      <div>
          <p @click="choice1(0)" class="btn" :class="{ selected: score1 === 0 }">
              Non
          </p>
      </div>
      <div>
          <p @click="choice1(3)" class="btn" :class="{ selected: score1 === 3 }">
              Oui
          </p>
      </div>

      <h4 class="subtitle">Anticorps anti-SSA/Ro positif</h4>
      <div>
          <p @click="choice2(0)" class="btn" :class="{ selected: score2 === 0 }">
              Non
          </p>
      </div>
      <div>
          <p @click="choice2(3)" class="btn" :class="{ selected: score2 === 3 }">
              Oui
          </p>
      </div>
      <h4 class="subtitle">Ocular Staining Score ≥ 5 (ou score de van Bijsterveld ≥ 4) pour au moins un oeil </h4>
      <div>
          <p @click="choice3(0)" class="btn" :class="{ selected: score3 === 0 }">
              Non
          </p>
      </div>
      <div>
          <p @click="choice3(1)" class="btn" :class="{ selected: score3 === 1 }">
              Oui
          </p>
      </div>
      <h4 class="subtitle">Test de Schirmer ≤ 5 mm/ 5 min pour au moins un oeil</h4>
      <div>
          <p @click="choice4(0)" class="btn" :class="{ selected: score4 === 0 }">
              Non
          </p>
      </div>
      <div>
          <p @click="choice4(1)" class="btn" :class="{ selected: score4=== 1 }">
              Oui
          </p>
      </div>
      <h4 class="subtitle">Flux salivaire sans stimulation ≤ 0,1 mL / min</h4>
      <div>
          <p @click="choice5(0)" class="btn" :class="{ selected: score5 === 0 }">
              Non
          </p>
      </div>
      <div>
          <p @click="choice5(1)" class="btn" :class="{ selected: score5 === 1 }">
              Oui
          </p>
      </div>
      <span class="line" />
      <h3>Critères d'exclusion :</h3>
      <h4 class="subtitle">Antécédent d'irradiation cervicale</h4>
      <div>
          <p @click="choice6(0)" class="btn" :class="{ selected: score6 === 0 }">
              Non
          </p>
      </div>
      <div>
          <p @click="choice6(1)" class="btn" :class="{ selected: score6 === 1 }">
              Oui
          </p>
      </div>
      <h4 class="subtitle">Infection par le VHC</h4>
      <div>
          <p @click="choice7(0)" class="btn" :class="{ selected: score7 === 0 }">
              Non
          </p>
      </div>
      <div>
          <p @click="choice7(1)" class="btn" :class="{ selected: score7 === 1 }">
              Oui
          </p>
      </div>
      <h4 class="subtitle">Infection par le VIH</h4>
      <div>
          <p @click="choice8(0)" class="btn" :class="{ selected: score8 === 0 }">
              Non
          </p>
      </div>
      <div>
          <p @click="choice8(1)" class="btn" :class="{ selected: score8 === 1 }">
              Oui
          </p>
      </div>
      <h4 class="subtitle">Sarcoïdose</h4>
      <div>
          <p @click="choice9(0)" class="btn" :class="{ selected: score9 === 0 }">
              Non
          </p>
      </div>
      <div>
          <p @click="choice9(1)" class="btn" :class="{ selected: score9 === 1 }">
              Oui
          </p>
      </div>
      <h4 class="subtitle">Amylose</h4>
      <div>
          <p @click="choice10(0)" class="btn" :class="{ selected: score10 === 0 }">
              Non
          </p>
      </div>
      <div>
          <p @click="choice10(1)" class="btn" :class="{ selected: score10 === 1 }">
              Oui
          </p>
      </div>
      <h4 class="subtitle">Réaction du greffon contre l'hôte</h4>
      <div>
          <p @click="choice11(0)" class="btn" :class="{ selected: score11 === 0 }">
              Non
          </p>
      </div>
      <div>
          <p @click="choice11(1)" class="btn" :class="{ selected: score11 === 1 }">
              Oui
          </p>
      </div>
      <h4 class="subtitle">Maladie associée aux IgG4</h4>
      <div>
          <p @click="choice12(0)" class="btn" :class="{ selected: score12 === 0 }">
              Non
          </p>
      </div>
      <div>
          <p @click="choice12(1)" class="btn" :class="{ selected: score12 === 1 }">
              Oui
          </p>
      </div>
      <span class="line" />

      <div class="result">
          <h3>{{ resultPoint }} Points</h3>
          <h3> {{ resultExclusion }} Critère d'exclusion </h3>
          <h3>{{ resultPoint >= 4 &&  resultExclusion === 0 ? "Positif" : "Negatif" }}</h3>
      </div>

      <ReferencesMedical sourceLink="https://www.fai2r.org/les-pathologies-rares/gougerot-sjogren/criteres-de-classification-du-gougerot-sjogren-acr-eular-2016/" />
      <Footer/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { isMobile } from '@/global';
import Footer from "@/components/Footer.vue";
import ReferencesMedical from '@/components/ReferencesMedical.vue'

export default Vue.extend({
  name: "AcrEular2016",
    components: { ReferencesMedical, Footer },
    data() {
    return {
        score1: 0,
        score2: 0,
        score3: 0,
        score4: 0,
        score5: 0,
        score6: 0,
        score7: 0,
        score8: 0,
        score9: 0,
        score10: 0,
        score11: 0,
        score12: 0,
        resultPoint: 0,
        resultExclusion: 0,
    };
  },
  methods: {
    isMobile,
      countPoints() {
          this.resultPoint = parseInt(this.score1) + parseInt(this.score2) + parseInt(this.score3) + parseInt(this.score4) + parseInt(this.score5);
      },
      countExclusion() {
          this.resultExclusion = parseInt(this.score6) + parseInt(this.score7) + parseInt(this.score8) + parseInt(this.score9) + parseInt(this.score10) + parseInt(this.score11) + parseInt(this.score12);
      },
      choice1(number) {
          this.score1 = number;
          this.countPoints();
      },
      choice2(number) {
          this.score2 = number;
          this.countPoints();
      },
      choice3(number) {
          this.score3 = number;
          this.countPoints();
      },
      choice4(number) {
          this.score4 = number;
          this.countPoints();
      },
      choice5(number) {
          this.score5 = number;
          this.countPoints();
      },
      choice6(number) {
          this.score6 = number;
          this.countExclusion();
      },
      choice7(number) {
          this.score7 = number;
          this.countExclusion();
      },
      choice8(number) {
          this.score8 = number;
          this.countExclusion();
      },
      choice9(number) {
          this.score9 = number;
          this.countExclusion();
      },
      choice10(number) {
          this.score10 = number;
          this.countExclusion();
      },
      choice11(number) {
          this.score11 = number;
          this.countExclusion();
      },
      choice12(number) {
          this.score12 = number;
          this.countExclusion();
      },
  }
});
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
</style>
