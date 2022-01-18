<template>
  <div class="SystemicSclerodermaAcrEular">
    <h2 class="title">
      Critères de classification ACR-EULAR de la sclérodermie systémique
    </h2>

      <div v-for="option in options" :key="option.id">
          <h4 class="subtitle" v-if="option.subtitle">{{option.subtitle}}</h4>
          <div v-else>
              <p class="description">{{ option.describe }}</p>
              <div class="btn__container">
                  <input type="radio" v-model="option.selected" :value="0" :name="option.name" :id="`No-${option.id}`" @change="calculate('decrement', option.value)">
                  <label class="btn btn__halfsize" :class="{selected:  option.selected === 0}" :for="`No-${option.id}`">NON</label>

                  <input type="radio" v-model="option.selected" :value="option.value" :name="option.name" :id="`Yes-${option.id}`" @change="calculate('increment', option.value)">
                  <label class="btn btn__halfsize"  :class="{selected: option.selected === option.value}" :for="`Yes-${option.id}`">OUI</label>
              </div>
          </div>
      </div>

    <div class="result">
        <p>{{ total }} Points</p>
        <h3>{{ total < 9 ? "Negatif" : "Positif" }}</h3>

        <p>
            Le critère peut être retenu s'il est présent à un moment au moins de l'histoire clinique. <br>
            Un score ≥ 9 permet de classer les patients comme atteints de sclérodermie systémique.
        </p>
    </div>

      <ReferencesMedical sourceLink="https://www.fai2r.org/les-pathologies-rares/sclerodermie-systemique/criteres/" />
      <Footer/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ReferencesMedical from "@/components/ReferencesMedical.vue";
import Footer from "@/components/Footer.vue";

export default Vue.extend({
  name: "SystemicSclerodermaAcrEular",
    components: {Footer, ReferencesMedical},
    data(){
    return{
      total:0,
        options: [
            { subtitle: 'Epaississement cutané (ne tenir compte que du score le plus élevé) :'},
            { id: 1,describe: 'Epaississement cutané des doigts des mains s\'étendant au-delà des articulations MCP',value: 9 , name: 'btnradio1', selected: 0 },
            { id: 2,describe: 'Doigts boudinés',value: 2 , name: 'btnradio2', selected: 0 },
            { id: 3,describe: 'Atteinte des doigts ne dépassant pas les articulations MCP',value: 4 , name: 'btnradio3', selected: 0 },
            { id: 4,describe: 'Ulcères pulpaires digitaux',value: 2 , name: 'btnradio4', selected: 0 },
            { subtitle: 'Lésions pulpaires (ne tenir compte que du score le plus élevé) :'},
            { id: 5,describe: 'Cicatrices déprimées',value: 3 , name: 'btnradio5', selected: 0 },
            { id: 6,describe: 'Télangiectasies',value: 2 , name: 'btnradio6', selected: 0 },
            { id: 7,describe: 'Anomalies capillaroscopiques',value: 2 , name: 'btnradio7', selected: 0 },
            { id: 8,describe: 'HTAP et/ou fibrose pulmonaire',value: 2 , name: 'btnradio8', selected: 0 },
            { id: 9,describe: 'Phénomène de Raynaud',value: 3 , name: 'btnradio9', selected: 0 },
            { id: 10,describe: 'Anticorps spécifiques: anti-topoisomérase I ou anti-centromères ou anti-ARN polymérase de type III',value: 3 , name: 'btnradio10', selected: 0 },
        ]
    }
  },

  methods:{
      calculate : function (action,amount) {
          if (action === 'decrement') {
              this.total -= amount
          }
          if (action === 'increment') {
              this.total += amount
          }
      }
  },

});
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
.SystemicSclerodermaAcrEular {
  div {
    margin: 16px 0;
  }

  [type="radio"] {
    display: none;
  }
}
</style>
