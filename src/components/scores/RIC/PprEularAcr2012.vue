<template>
  <div class="PprEularAcr2012">
    <h2 class="title">Critères de classification de la PPR EULAR/ACR 2012</h2>
    <span class="line"></span>

      <div v-for="option in options" :key="option.id">
          <h4 class="subtitle" v-if="option.subtitle">{{option.subtitle}}</h4>
          <div v-else>
              <p class="description">{{ option.describe }}</p>
              <p class="description__info" v-if="option.text">{{ option.text }}</p>

              <div class="btn__container">
                  <input type="radio" v-model="option.selected" :value="0" :name="option.name" :id="`No-${option.id}`" @change="calculate('decrement', option.value)">
                  <label class="btn btn__halfsize" :class="{selected:  option.selected === 0}" :for="`No-${option.id}`">NON</label>

                  <input type="radio" v-model="option.selected" :value="option.value" :name="option.name" :id="`Yes-${option.id}`" @change="calculate('increment', option.value)">
                  <label class="btn btn__halfsize"  :class="{selected: option.selected === option.value}" :for="`Yes-${option.id}`">OUI</label>
              </div>
          </div>
      </div>

    <div class="result">
      <h3>{{ result }} Points</h3>
      <h3> 0 Critère d'exclusion </h3>
      <h3>{{ result >= 4 ? "Positif" : "Negatif" }}</h3>
    </div>

         <div class="info">
      <span>Si le patient a plus de 50 ans, des douleurs scapulaires bilatérales, une CRP et/ou une VS augmentées ET un score ≥ 4 sans les critères échographiques ou un score ≥ 5 avec les critères échographiques ⇒ la sensibilité est de 68 % et la spécificité est de 78 % sans l’échographie et 66 % et 81 % avec l’échographie. </span>
    </div>

      <ReferencesMedical sourceLink="https://www.fai2r.org/les-pathologies-rares/maladie-de-horton-pseudo-polyarthrite-rhizomelique/criteres/criteres-de-classification-de-la-ppr-eular-acr-2012/" />
      <Footer/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ReferencesMedical from "@/components/ReferencesMedical.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  name: "PprEularAcr2012",
    components: { Footer, ReferencesMedical },
    data() {
    return {
      result: 0,
        options: [
            { id: 1,describe: 'Dérouillage matinal > 45 minutes',value: 2 , name: 'btnradio1', selected: 0 },
            { id: 2,describe: 'Douleur de hanche ou limitation articulaire',value: 1 , name: 'btnradio2', selected: 0 },
            { id: 3,describe: 'Absence de facteurs rhumatoïdes et d\'anticorps anti-CCP',value: 2 , name: 'btnradio3', selected: 0 },
            { id: 4,describe: 'Absence d\'autres articulations atteintes',value: 1 , name: 'btnradio4', selected: 0 },
            { id: 5,describe: 'Critères relatifs à l\'échographie :',value: 1 , name: 'btnradio5', selected: 0, text: 'Au moins 1 épaule avec une bursite sous-deltoïdienne et/ou une ténosynovite bicipitale et/ou une synovite glénohumérale (postérieure ou axillaire) et au moins une hanche avec une synovite et/ou une bursite trochantérienne' },
            { id: 6,describe: 'Bursite sous-deltoïdienne, ténosynovite bicipitale ou synovite glénohumérale bilatérale',value: 1 , name: 'btnradio6', selected: 0 },
        ]
    };
  },
  methods: {
      calculate: function (action, amount) {
          if (action === 'decrement') {
              this.result -= amount
          }
          if (action === 'increment') {
              this.result += amount
          }
      },
  }
});
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
.description__info {
  font-style: italic;
  margin: 0;
}
[type="radio"] {
  display: none;
}
</style>
