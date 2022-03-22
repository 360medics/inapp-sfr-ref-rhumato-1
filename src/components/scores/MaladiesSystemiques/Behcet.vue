<template>
  <!-- <h3> https://www.fai2r.org/les-pathologies-rares/behcet/criteres </h3> -->
  <div class="Behcet" id="container">
    <h2 class="title">Critères de classification pour la maladie de Behçet</h2>
    <span class="line"></span>
    <!-- first choice -->
      <p class="description">Aphtose orale</p>
      <div class="btn__container">
          <input type="radio"  name="btnradio1" id="btnradio1"  @click="choice1(0)">
          <label class="btn btn__halfsize" :class="{selected: score1 === 0}" for="btnradio1">NON</label>

          <input type="radio"  name="btnradio1" id="btnradio2" @click="choice1(1)">
          <label class="btn btn__halfsize" :class="{selected: score1 === 1}" for="btnradio2">OUI</label>
      </div>
    <!-- second choice -->
      <p class="description">Aphtose génitale</p>
      <div class="btn__container">
          <input type="radio"  name="btnradio2" id="btnradio3"  @click="choice2(0)">
          <label class="btn btn__halfsize" :class="{selected: score2 === 0}" for="btnradio3">NON</label>

          <input type="radio"  name="btnradio2" id="btnradio4" @click="choice2(2)">
          <label class="btn btn__halfsize" :class="{selected: score2 === 2}" for="btnradio4">OUI</label>
      </div>
      <!-- third choice -->
            <p class="description">Lésions cutanées</p>
      <div class="btn__container">
          <input type="radio"  name="btnradio3" id="btnradio5"  @click="choice3(0)">
          <label class="btn btn__halfsize" :class="{selected: score3 === 0}" for="btnradio5">NON</label>

          <input type="radio"  name="btnradio3" id="btnradio6" @click="choice3(1)">
          <label class="btn btn__halfsize" :class="{selected: score3 === 1}" for="btnradio6">OUI</label>
      </div>
      <!-- fourth choice -->
            <p class="description">Atteinte oculaire</p>
      <div class="btn__container">
          <input type="radio"  name="btnradio4" id="btnradio7"  @click="choice4(0)">
          <label class="btn btn__halfsize" :class="{selected: score4 === 0}" for="btnradio7">NON</label>

          <input type="radio"  name="btnradio4" id="btnradio8" @click="choice4(2)">
          <label class="btn btn__halfsize" :class="{selected: score4 === 2}" for="btnradio8">OUI</label>
      </div>
      <!-- fifth choice -->
            <p class="description">Test pathergique positif</p>
      <div class="btn__container">
          <input type="radio"  name="btnradio5" id="btnradio9"  @click="choice5(0)">
          <label class="btn btn__halfsize" :class="{selected: score5 === 0}" for="btnradio9">NON</label>

          <input type="radio"  name="btnradio5" id="btnradio10" @click="choice5(1)">
          <label class="btn btn__halfsize" :class="{selected: score5 === 1}" for="btnradio10">OUI</label>
      </div>
      <!-- sixth choice -->
            <p class="description">Lésion vasculaire (thrombose artérielle, veineuse, anévrysme)</p>
      <div class="btn__container">
          <input type="radio"  name="btnradio6" id="btnradio11"  @click="choice6(0)">
          <label class="btn btn__halfsize" :class="{selected: score6 === 0}" for="btnradio11">NON</label>

          <input type="radio"  name="btnradio6" id="btnradio12" @click="choice6(1)">
          <label class="btn btn__halfsize" :class="{selected: score6 === 1}" for="btnradio12">OUI</label>
      </div>

    <div class="result">
    <div >
      <span>{{ total() }} Points</span> <br>
      <span>{{ 0 }} Critère d'exclusion</span> <br>
      <span v-if="total() >= 3"> POSITIF</span> <span v-else>NEGATIF</span>
  </div>
  </div>
      <ReferencesMedical sourceLink="https://www.fai2r.org/les-pathologies-rares/behcet/criteres/" />
      <Footer/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Footer from "@/components/Footer.vue";
import ReferencesMedical from "@/components/ReferencesMedical.vue";



export default defineComponent({
  name: "Behcet",
    components: {ReferencesMedical, Footer},
    data() {
    return {
      score1: 0,
      score2: 0,
      score3: 0,
      score4: 0,
      score5: 0,
      score6: 0
    };
  },
  methods: {
    choice1(x) {
      this.score1 = x;
    },
    choice2(x) {
      this.score2 = x;
    },
    choice3(x) {
      this.score3 = x;
    },
    choice4(x) {
      this.score4 = x;
    },
    choice5(x) {
      this.score5 = x;
    },
    choice6(x) {
      this.score6 = x;
    },
    total() {
      return this.score1 + this.score2 + this.score3 + this.score4 + this.score5 + this.score6;
    },
  },
});
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
.Behcet {
  [type="radio"] {
    display: none;
  }
}
</style>
