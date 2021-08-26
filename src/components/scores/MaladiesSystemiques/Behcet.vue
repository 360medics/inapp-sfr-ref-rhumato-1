<template>
  <!-- <h3> https://www.fai2r.org/les-pathologies-rares/behcet/criteres </h3> -->
  <div class="Behcet" id="container">
    <h2 class="title">Critères de classification pour la maladie de Behçet</h2>
    <span class="line"></span>
    <!-- first choice -->
      <label> Aphtose orale </label>
      <span v-if="this.score1 == 0">
      <button type="button" class="btn" @click="choice1(1);">non</button>
      </span>
      <span v-else>
      <button type="button" class="btn selected" @click="choice1(0)">oui</button>
      </span>
    <!-- second choice -->
      <br>
      <label>Aphtose génitale </label>
      <span v-if="this.score2 == 0">
      <button type="button" class="btn" @click="choice2(2);">non</button>
      </span>
      <span v-else>
      <button type="button" class="btn selected" @click="choice2(0)">oui</button>
      </span>
      <br>
      <!-- third choice -->
      <label> Lésions cutanées </label>
      <span v-if="this.score3 == 0">
      <button type="button" class="btn" @click="choice3(1);">non</button>
      </span>
      <span v-else>
      <button type="button" class="btn selected"  @click="choice3(0)">oui</button>
      </span>
      <br>
      <!-- fourth choice -->
      <label> Atteinte oculaire </label>
      <span v-if="this.score4 == 0">
      <button type="button" class="btn" @click="choice4(2);">non</button>
      </span>
      <span v-else>
      <button type="button"  class="btn selected" @click="choice4(0)">oui</button>
      </span>
      <br>
      <!-- fifth choice -->
      <label> Test pathergique positif  </label>
      <span v-if="this.score5 == 0">
      <button type="button"  class="btn" @click="choice5(1);">non</button>
      </span>
      <span v-else>
      <button type="button"  class="btn selected" @click="choice5(0)">oui</button>
      </span>
      <br>
      <!-- sixth choice -->
      <label> Lésion vasculaire (thrombose artérielle, veineuse, anévrysme) </label>
      <span v-if="this.score6 == 0">
      <button type="button"  class="btn" @click="choice6(1);">non</button>
      </span>
      <span v-else>
      <button type="button" class="btn selected" @click="choice6(0)">oui</button>
      </span>
      <br>

    <br>
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
import Vue from "vue";
import Footer from "@/components/Footer.vue";
import ReferencesMedical from "@/components/ReferencesMedical.vue";



export default Vue.extend({
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
  .btn {
    background-color: rgb(199, 197, 197);
    border: none;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin-bottom: 5px;
    justify-content: center;
    align-content: space-around;
    align-items: flex-start;
    height: 50px;
    border-radius: 8px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 20px;
    color: rgb(49, 49, 49);
  }

  .btn:focus {
    background-color: rgb(63, 160, 177);
    border: none;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin-bottom: 5px;
    justify-content: center;
    align-content: space-around;
    align-items: flex-start;
    height: 50px;
    border-radius: 8px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 20px;
    color: white;

  }
}
</style>
