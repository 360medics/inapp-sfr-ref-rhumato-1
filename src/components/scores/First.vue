<template>
  <!-- http://medicalcul.free.fr/firstquest.html -->
  <div class="First">
    <h3 class="title">Questionnaire FiRST</h3>
    <span class="line"></span>

    <h3>Cocher les items présents</h3>
    <div>
      <input
        type="checkbox"
        id="toggle1"
        class="visually-hidden"
        v-model="quest"
        value="1"
      />
      <label class="btn" :class="{selected: quest.includes('1')}" for="toggle1"
        >Mes douleurs sont localisées partout dans tout mon corps.</label
      >
      <div class="control-me"></div>
    </div>
    <div>
      <input
        type="checkbox"
        id="toggle2"
        class="visually-hidden"
        v-model="quest"
        value="2"
      />
      <label class="btn" :class="{selected: quest.includes('2')}" for="toggle2"
        >Mes douleurs s'accompagnent d'une fatigue générale permanente.</label
      >
      <div class="control-me"></div>
    </div>
    <div>
      <input
        type="checkbox"
        id="toggle3"
        class="visually-hidden"
        v-model="quest"
        value="3"
      />
      <label class="btn" :class="{selected: quest.includes('3')}" for="toggle3"
        >Mes douleurs sont comme des brûlures, des décharges électriques ou des
        crampes.</label
      >
      <div class="control-me"></div>
    </div>
    <div>
      <input
        type="checkbox"
        id="toggle4"
        class="visually-hidden"
        v-model="quest"
        value="4"
      />
      <label class="btn" :class="{selected: quest.includes('4')}" for="toggle4"
        >Mes douleurs s'accompagnent d'autres sensations anormales comme des
        fourmillements, des picotements ou des sensations d'engourdissement,
        dans tout mon corps</label
      >
      <div class="control-me"></div>
    </div>
    <div>
      <input
        type="checkbox"
        id="toggle5"
        class="visually-hidden"
        v-model="quest"
        value="5"
      />
      <label class="btn" :class="{selected: quest.includes('5')}" for="toggle5"
        >Mes douleurs s'accompagnent d'autres problèmes de santé comme des
        problèmes digestifs, des problèmes urinaires, des maux de tête, ou des
        impatiences dans les jambes.</label
      >
      <div class="control-me"></div>
    </div>
    <div>
      <input
        type="checkbox"
        id="toggle6"
        class="visually-hidden"
        v-model="quest"
        value="6"
      />
      <label class="btn" :class="{selected: quest.includes('6')}" for="toggle6"
        >Mes douleurs ont un retentissement important dans ma vie : en
        particulier, sur mon sommeil, ma capacité à me concentrer avec une
        impression de fonctionner au ralenti.</label
      >
      <div class="control-me"></div>
    </div>
    <div class="result">
      Items présents : {{ quest.length }}
    </div>

    <ReferencesMedical
      message1="Le questionnaire FiRST est un outil de dépistage de la fibromyalgie, simple et facile d'utilisation, avec une bonne sensibilité et spécificité. Un score de 5 items sur les 6 items du questionnaire permet de détecter la fibromyalgie avec une sensibilité de 90,5 % et une spécificité de 85,7 %."
      message2="Burckhardt CS, clark SR, Benett RM. Fibromyalgia and quality of life : a comparative analysis. J Rheumatology 1993 ; 20:475-9.
        Perrot S, Bouhassira D, Fermanian J. Cercle d'Etude de la Douleur en Rhumatologie. Development and validation of the Fibromyalgia Rapid Screening tool (FiRST). Pain. 2010 ; 150:250."
      source-link="http://medicalcul.free.fr/firstquest.html"
    />
      <Footer/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { isMobile } from '@/global';
import Footer from "@/components/Footer.vue";
import ReferencesMedical from "@/components/ReferencesMedical.vue";

export default Vue.extend({
  name: "First",
    components: {Footer, ReferencesMedical },
    data() {
    return {
      quest: [],
    };
  },
  methods: {
    isMobile
  }

});
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
.First {
  div {
    margin-top: 12px;
  }

  [type="checkbox"] {
    display: none;
  }
}
</style>
