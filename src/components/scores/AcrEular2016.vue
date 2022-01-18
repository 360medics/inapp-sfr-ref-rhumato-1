<template>
  <!-- https://www.fai2r.org/les-pathologies-rares/gougerot-sjogren/criteres-de-classification-du-gougerot-sjogren-acr-eular-2016/ -->
  <div class="acrEular2016">
      <h2 class="title">Critères de classification du Gougerot-Sjögren: ACR/EULAR 2016</h2>

      <div v-for="option in options" :key="option.id">
          <h4 class="subtitle" v-if="option.subtitle">{{option.subtitle}}</h4>
          <div v-else>
              <p class="description">{{ option.describe }}</p>
              <div v-if="option.countPoint" class="btn__container">
                  <input type="radio" v-model="option.selected" :value="0" :name="option.name" :id="`No-${option.id}`" @change="calculate('decrementPoint', option.value)">
                  <label class="btn btn__halfsize" :class="{selected:  option.selected === 0}" :for="`No-${option.id}`">NON</label>

                  <input type="radio" v-model="option.selected" :value="option.value" :name="option.name" :id="`Yes-${option.id}`" @change="calculate('incrementPoint', option.value)">
                  <label class="btn btn__halfsize"  :class="{selected: option.selected === option.value}" :for="`Yes-${option.id}`">OUI</label>
              </div>
              <span v-if="option.divider" class="line" />
              <div v-if="option.countExclusion" class="btn__container">
                  <input type="radio" v-model="option.selected" :value="0" :name="option.name" :id="`No-${option.id}`" @change="calculate('decrementExclusion', option.value)">
                  <label class="btn btn__halfsize" :class="{selected:  option.selected === 0}" :for="`No-${option.id}`">NON</label>

                  <input type="radio" v-model="option.selected" :value="option.value" :name="option.name" :id="`Yes-${option.id}`" @change="calculate('incrementExclusion', option.value)">
                  <label class="btn btn__halfsize"  :class="{selected: option.selected === option.value}" :for="`Yes-${option.id}`">OUI</label>
              </div>
          </div>
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
        resultPoint: 0,
        resultExclusion: 0,
        options: [
            { id: 1,describe: 'Sialadénite lymphocytaire avec focus score ≥ 1 sur la biopsie de glandes salivaires accessoires et focus score ≥ 1 foci/4mm²',value: 3 , name: 'btnradio1', selected: 0, countPoint: true, countExclusion: false  },
            { id: 2,describe: 'Anticorps anti-SSA/Ro positif',value: 3 , name: 'btnradio2', selected: 0, countPoint: true, countExclusion: false },
            { id: 3,describe: 'Ocular Staining Score ≥ 5 (ou score de van Bijsterveld ≥ 4) pour au moins un oeil',value: 1 , name: 'btnradio3', selected: 0, countPoint: true, countExclusion: false },
            { id: 4,describe: 'Test de Schirmer ≤ 5 mm/ 5 min pour au moins un oeil',value: 1 , name: 'btnradio4', selected: 0, countPoint: true, countExclusion: false },
            { id: 5,describe: 'Flux salivaire sans stimulation ≤ 0,1 mL / min',value: 1 , name: 'btnradio5', selected: 0, countPoint: true, countExclusion: false },
            { divider: true},
            { subtitle: 'Critères d\'exclusion :'},
            { id: 6,describe: 'Antécédent d\'irradiation cervicale',value: 1 , name: 'btnradio6', selected: 0, countPoint: false, countExclusion: true },
            { id: 7,describe: 'Infection par le VHC',value: 1 , name: 'btnradio7', selected: 0, countPoint: false, countExclusion: true },
            { id: 8,describe: 'Infection par le VIH',value: 1 , name: 'btnradio8', selected: 0, countPoint: false, countExclusion: true },
            { id: 9,describe: 'Sarcoïdose',value: 1 , name: 'btnradio9', selected: 0, countPoint: false, countExclusion: true },
            { id: 10,describe: 'Amylose',value: 1 , name: 'btnradio10', selected: 0, countPoint: false, countExclusion: true },
            { id: 11,describe: 'Réaction du greffon contre l\'hôte',value: 1 , name: 'btnradio11', selected: 0, countPoint: false, countExclusion: true },
            { id: 12,describe: 'Maladie associée aux IgG4',value: 1 , name: 'btnradio12', selected: 0, countPoint: false, countExclusion: true },
        ]
    };
  },
  methods: {
      calculate : function (action,amount) {
          if (action === 'decrementExclusion') {
              this.resultExclusion -= amount
          }
          if (action === 'incrementExclusion') {
              this.resultExclusion += amount
          }
          if (action === 'decrementPoint') {
              this.resultPoint -= amount
          }
          if (action === 'incrementPoint') {
              this.resultPoint += amount
          }
      },
  }
});
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
[type="radio"] {
  display: none;
}
</style>
