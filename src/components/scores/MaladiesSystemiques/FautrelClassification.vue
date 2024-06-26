<template>
  <div class="FautrelClassification">
      <h2 class="title">Critères de classification proposés par Fautrel (2002)</h2>
      <p class="description">Calcul des critères de classification ou de diagnostic</p>
      <span class="line"></span>

      <h4 class="subtitle">Critères majeurs :</h4>

          <!-- first choice -->
          <p class="description">Fièvre hectique ≥ 39°C</p>
      <div class="btn__container">
            <input type="radio"  name="btnradio1" id="btnradio1" @click="choice1(0)">
            <label class="btn btn__halfsize" :class="{selected: number1 === 0}"  for="btnradio1">NON</label>

            <input type="radio"  name="btnradio1" id="btnradio2" @click="choice1(1)">
            <label class="btn btn__halfsize" :class="{selected: number1 === 1}" for="btnradio2">OUI</label>
      </div>
          <!-- second choice -->
      <p class="description"> Arthralgies ou arthrites </p>
      <div class="btn__container">
            <input type="radio"  name="btnradio3" id="btnradio3" @click="choice2(0)">
            <label class="btn btn__halfsize" :class="{selected: number2 === 0}" for="btnradio3">NON</label>

            <input type="radio"  name="btnradio3" id="btnradio4" @click="choice2(1)">
            <label class="btn btn__halfsize" :class="{selected: number2 === 1}" for="btnradio4">OUI</label>
            </div>
          <!-- third choice -->
      <p class="description">Erythème fugace</p>
      <div class="btn__container">
            <input type="radio"  name="btnradio4" id="btnradio5" @click="choice3(0)">
            <label class="btn btn__halfsize" :class="{selected: number3 === 0}" for="btnradio5">NON</label>

            <input type="radio"  name="btnradio4" id="btnradio6" @click="choice3(1)">
            <label class="btn btn__halfsize" :class="{selected: number3 === 1}" for="btnradio6">OUI</label>
            </div>
          <!-- fourth choice -->
      <p class="description">Pharyngite</p>
      <div class="btn__container">
            <input type="radio"  name="btnradio5" id="btnradio7" @click="choice4(0)">
            <label class="btn btn__halfsize" :class="{selected: number4 === 0}" for="btnradio7">NON</label>

            <input type="radio"  name="btnradio5" id="btnradio8" @click="choice4(1)">
            <label class="btn btn__halfsize" :class="{selected: number4 === 1}" for="btnradio8">OUI</label>
            </div>
          <!-- fifth choice -->
          <p class="description">Polynucléaires neutrophiles ≥ 80%</p>
            <div class="btn__container">
            <input type="radio"  name="btnradio6" id="btnradio9" @click="choice5(0)">
            <label class="btn btn__halfsize" :class="{selected: number5 === 0}" for="btnradio9">NON</label>

            <input type="radio"  name="btnradio6" id="btnradio10" @click="choice5(1)">
            <label class="btn btn__halfsize" :class="{selected: number5 === 1}" for="btnradio10">OUI</label>
            </div>
          <!-- sixth choice -->
          <p class="description">Ferritine glycosylée ≤ 20%</p>
            <div class="btn__container">
            <input type="radio"  name="btnradio7" id="btnradio11"  @click="choice6(0)">
            <label class="btn btn__halfsize" :class="{selected: number6 === 0}" for="btnradio11">NON</label>

            <input type="radio"  name="btnradio7" id="btnradio12" @click="choice6(1)">
            <label class="btn btn__halfsize" :class="{selected: number6 === 1}" for="btnradio12">OUI</label>
            </div>

        <h4 class="subtitle">Critères mineurs :</h4>
          <!-- seventh choice -->
          <p class="description">Rash maculo-papuleux</p>
            <div class="btn__container">
            <input type="radio"  name="btnradio8" id="btnradio13" @click="choice7(0)">
            <label class="btn btn__halfsize" :class="{selected: number7 === 0}" for="btnradio13">NON</label>

            <input type="radio"  name="btnradio8" id="btnradio14" @click="choice7(1)">
            <label class="btn btn__halfsize" :class="{selected: number7 === 1}" for="btnradio14">OUI</label>
            </div>
          <!-- eighth choice -->
          <p class="description">Leucocytes ≥ 10 000 mm3 </p>
            <div class="btn__container">
            <input type="radio"  name="btnradio9" id="btnradio15"  @click="choice8(0)">
            <label class="btn btn__halfsize" :class="{selected: number8 === 0}" for="btnradio15">NON</label>

            <input type="radio" name="btnradio9" id="btnradio16"  @click="choice8(1)">
            <label class="btn btn__halfsize" :class="{selected: number8 === 1}" for="btnradio16">OUI</label>
            </div>
      <div class="result">

        <span v-if="majorCriterias() <= 1">{{ majorCriterias() }} critère majeur</span>
        <span v-else>{{ majorCriterias() }} critères majeurs</span> <br>

        <span  v-if="minorCriterias() <= 1"> {{ minorCriterias() }} critère mineur</span>
        <span v-else>{{ minorCriterias() }} critères mineurs</span> <br>

        <p>Nombre de critères nécessaires: 4 critères majeurs ou 3 critères majeurs + 2 critères mineurs</p>

      </div>

      <ReferencesMedical sourceLink="https://www.fai2r.org/les-pathologies-rares/maladie-de-still-de-ladulte/criteres/criteres-de-classification-proposes-fautrel/" />
      <Footer/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import ReferencesMedical from "@/components/ReferencesMedical.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
    components: { ReferencesMedical, Footer },
    data() {
    return {
      number1: 0,
      number2: 0,
      number3: 0,
      number4: 0,
      number5: 0,
      number6: 0,
      number7: 0,
      number8: 0,
      majorCriteriaCount : 0,
      minorCriteria: 0
    };
  },
  methods: {
    choice1(x) {
      this.number1 = x;
      this.majorCriteriaCount += this.number1;
    },
    choice2(x) {
      this.number2 = x
      this.majorCriteriaCount += this.number2;
    },
    choice3(x) {
      this.number3 = x;
      this.majorCriteriaCount += this.number3;
    },
    choice4(x) {
      this.number4 = x;
      this.majorCriteriaCount += this.number4;
    },
    choice5(x) {
      this.number5 = x;
      this.majorCriteriaCount += this.number5;
    },
    choice6(x) {
      this.number6 = x;
      this.majorCriteriaCount += this.number6;
    },
    choice7(x) {
      this.number7 = x;
      this.minorCriteria += this.number7;
    },
    choice8(x) {
      this.number8 = x;
      this.minorCriteria += this.number8;
    },
    majorCriterias() {
      return this.number1 + this.number2 + this.number3 + this.number4 + this.number5 + this.number6;
    },
    minorCriterias() {
      return this.number7 + this.number8;
    }
  },
})

</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
.FautrelClassification {
  [type="radio"] {
    display: none;
  }
}
</style>

