<template>
  <div class="PprEularAcr2012">
    <h2 class="title">Critères de classification de la PPR EULAR/ACR 2012</h2>
    <span class="line"></span>


    <h4 class="subtitle"> Dérouillage matinal > 45 minutes </h4>
    <div>
      <p @click="choice1(0)" class="btn" :class="{ selected: score1 === 0 }">
        Non
      </p>
    </div>
    <div>
      <p @click="choice1(2)" class="btn" :class="{ selected: score1 === 2 }">
        Oui
      </p>
    </div>

    <h4 class="subtitle"> Douleur de hanche ou limitation articulaire </h4>
    <div>
      <p @click="choice2(0)" class="btn" :class="{ selected: score2 === 0 }">
        Non
      </p>
    </div>
    <div>
      <p @click="choice2(1)" class="btn" :class="{ selected: score2 === 1 }">
        Oui
      </p>
    </div>

    <h4 class="subtitle"> Absence de facteurs rhumatoïdes et d'anticorps anti-CCP </h4>
    <div>
      <p @click="choice3(0)" class="btn" :class="{ selected: score3 === 0 }">
        Non
      </p>
    </div>
    <div>
      <p @click="choice3(2)" class="btn" :class="{ selected: score3 === 2 }">
        Oui
      </p>
    </div>

    <h4 class="subtitle"> Absence d'autres articulations atteintes </h4>
    <div>
      <p @click="choice4(0)" class="btn" :class="{ selected: score4 === 0 }">
        Non
      </p>
    </div>
    <div>
      <p @click="choice4(1)" class="btn" :class="{ selected: score4 === 1 }">
        Oui
      </p>
    </div>

    <h4 class="subtitle">Critères relatifs à l'échographie :</h4>
    <p>Au moins 1 épaule avec une bursite sous-deltoïdienne et/ou une ténosynovite bicipitale et/ou une synovite glénohumérale (postérieure ou axillaire) et au moins une hanche avec une synovite et/ou une bursite trochantérienne </p>
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

    <p> Bursite sous-deltoïdienne, ténosynovite bicipitale ou synovite glénohumérale bilatérale </p>
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

    <div class="result" v-if="showResult">
      <h3>{{ result }} Points</h3>
      <h3> 0 Critère d'exclusion </h3>
      <h3>{{ result >= 4 ? "Positif" : "Negatif" }}</h3>
    </div>

         <div class="info">
      <span>Si le patient a plus de 50 ans, des douleurs scapulaires bilatérales, une CRP et/ou une VS augmentées ET un score ≥ 4 sans les critères échographiques ou un score ≥ 5 avec les critères échographiques ⇒ la sensibilité est de 68 % et la spécificité est de 78 % sans l’échographie et 66 % et 81 % avec l’échographie. </span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "PprEularAcr2012",
  data() {
    return {
      score1: null,
      score2: null,
      score3: null,
      score4: null,
      score5: null,
      score6: null,
      result: 0,
      showResult: false
    };
  },
  methods: {
    calcul() {
      this.result = parseInt(this.score1) + parseInt(this.score2) + parseInt(this.score3) + parseInt(this.score4) + parseInt(this.score5) + parseInt(this.score6);
      if (isNaN(this.result)){
        this.showResult = false
      } else {
        this.showResult = true
      }
    },

    choice1(number) {
      this.score1 = number;
      this.calcul();
    },
    choice2(number) {
      this.score2 = number;
      this.calcul();
    },
    choice3(number) {
      this.score3 = number;
      this.calcul();
    },
    choice4(number) {
      this.score4 = number;
      this.calcul();
    },
    choice5(number) {
      this.score5 = number;
      this.calcul();
    },
    choice6(number) {
      this.score6 = number;
      this.calcul();
    },
  },
});
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
.PprEularAcr2012 {
  ul {
    list-style: none;
    padding: 0;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
    background-color: #eceaf0;
    cursor: pointer;

    border: none;
    padding: 5px 5px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 0 0 1em;
    justify-content: center;
    align-content: space-around;
    align-items: flex-start;
    height: 100%;
    width: 80%;
    border-radius: 8px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 1rem;
    color: rgb(49, 49, 49);
  }



  .btn.selected {
    background-color: #3abaea;
    color: white;
  }

  .title {
    color: rgb(143, 58, 177);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  .result {
    width: 80%;
    margin: auto;
    border-radius: 10px;
    background-color: #4c2b62;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    justify-content: center;
    display: block !important;
    margin-top: 2rem;
    margin-bottom: 1rem;
    text-align: center;
    color: white;
  }

  .line {
    display: block;
    width: 100%;
    border-top: 2px solid #ccc;
  }
}
</style>
