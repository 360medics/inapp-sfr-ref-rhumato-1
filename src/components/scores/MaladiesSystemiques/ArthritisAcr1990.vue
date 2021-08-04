<template>
  <!-- fai2r.org/les-pathologies-rares/maladie-de-horton-pseudo-polyarthrite-rhizomelique/criteres/criteres-de-classification-de-larterite-a-cellules-geantes-de-lacr-1990 -->
  <div class="ArthritisAcr1990">
    <h3 class="title">
      Critères de classification de l’Artérite à Cellules Géantes de l’ACR 1990
    </h3>
    <span class="line"></span>

    <div>
      <label class="btn" :class="{selected: questions.includes('1')}" for="toggle1">Age au diagnostic ≥ 50 ans</label>
      <input
        type="checkbox"
        id="toggle1"
        class="visually-hidden"
        value="1"
        v-model="questions"
      />
      <div class="control-me"></div>
    </div>
    <div>
      <label class="btn" :class="{selected: questions.includes('2')}" for="toggle2">Céphalées inhabituelles</label>
      <input
        type="checkbox"
        id="toggle2"
        class="visually-hidden"
        value="2"
        v-model="questions"
      />
      <div class="control-me"></div>
    </div>
    <div>
      <label class="btn" :class="{selected: questions.includes('3')}" for="toggle3"
        >Artère temporale anormale: douleur à la palpation ou diminution de la
        pulsatilité, non due à de l'athérosclérose</label
      >
      <input
        type="checkbox"
        id="toggle3"
        class="visually-hidden"
        value="3"
        v-model="questions"
      />
      <div class="control-me"></div>
    </div>
    <div>
      <label class="btn" :class="{selected: questions.includes('4')}" for="toggle4">VS ≥ 50 mm / 1ere heure</label>
      <input
        type="checkbox"
        id="toggle4"
        class="visually-hidden"
        value="4"
        v-model="questions"
      />
      <div class="control-me"></div>
    </div>
    <div>
      <label class="btn" :class="{selected: questions.includes('5')}" for="toggle5"
        >Anomalies de la biopsie d'artère temporale: vascularite; infiltration à
        prédominance de cellules mononucléées ou granulomateuse, habituellement
        avec des cellules géantes multinuclées</label
      >
      <input
        type="checkbox"
        id="toggle5"
        class="visually-hidden"
        value="5"
        v-model="questions"
      />
      <div class="control-me"></div>
    </div>
    <div class="result">
      <p>{{ this.questions.length }} Points</p>
      <p>0 Critère d'exclusion</p>
      <p v-if="this.questions.length >= 3">Positif</p>
      <p v-else>Négatif</p>
      <p>Si 3 critères sont présents, la sensibilité est de 93,5% et la spécificité est de 91,2%</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ArthritisAcr1990",
  data() {
    return {
      questions: [],
    };
  },

});
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
.ArthritisAcr1990 {
  div {
    margin: 10px 0;
  }

  [type="checkbox"] {
    display: none;
  }
}
</style>
