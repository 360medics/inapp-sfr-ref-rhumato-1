<template>
  <!-- https://www.fai2r.org/les-pathologies-rares/syndrome-des-antiphospholipides/criteres/criteres-de-classification-sapl -->
  <div class="SAPL">
    <h3 class="title">
      Critères de classification du SAPL, dits “critères de Sydney” (2006)
    </h3>
    <span class="line"></span>

    <h3>Critères cliniques :</h3>
    <div>
      <label class="btn" :class="{selected: questions1.includes('1')}" for="toggle1"
        >Thrombose vasculaire: au moins un épisode thrombotique artériel,
        veineux ou des petits vaisseaux, touchant tout tissu ou organe. La
        thrombose doit être confirmée par un critère objectif et validé (aspect
        typique à l’imagerie ou lors de l’examen anatomopathologique ; la
        thrombose doit être présente sans qu’il y ait une inflammation
        vasculaire sous jacente).</label
      >
      <input
        type="checkbox"
        id="toggle1"
        class="visually-hidden"
        value="1"
        v-model="questions1"
      />
      <div class="control-me"></div>
    </div>
    <div>
      <label class="btn" :class="{selected: questions1.includes('2')}" for="toggle2"
        >Morbidité obstétricale: Survenue d’au moins une mort fœtale
        inexpliquée, après la 10e semaine d'aménorrhée, avec morphologie foetale
        normale documentée par une échographie ou par examen macroscopique OU
        survenue d’au moins une naissance prématurée avant la 34e semaine
        d'aménorrhée, d’un fœtus morphologiquement normal, en rapport avec la
        survenue d’une éclampsie ou d’une prééclampsie sévère ou avec
        démonstration d’une insuffisance placentaire OU survenue d’au moins 3
        fausses couches consécutives et inexpliquées avant la 10e semaine
        d'aménorrhée, après exclusion d’une anomalie anatomique ou hormonale
        maternelle et d’une anomalie chromosomique maternelle ou
        paternelle.</label
      >
      <input
        type="checkbox"
        id="toggle2"
        class="visually-hidden"
        value="2"
        v-model="questions1"
      />
      <div class="control-me"></div>
    </div>

    <h3>Critères biologiques :</h3>
    <div>
      <label class="btn" :class="{selected: questions2.includes('3')}" for="toggle3"
        >Anticorps anticardiolipines (IgG et/ou IgM) présents à au moins 2
        reprises, à au moins 12 semaines d'intervalle, à un titre intermédiaire
        ou élevé (> 40 UGPL ou MPL ou > 99e percentile) mesuré par une technique
        ELISA standardisée</label
      >
      <input
        type="checkbox"
        id="toggle3"
        class="visually-hidden"
        value="3"
        v-model="questions2"
      />
      <div class="control-me"></div>
    </div>
    <div>
      <label class="btn" :class="{selected: questions2.includes('4')}" for="toggle4"
        >Lupus anticoagulant présent à au moins 2 reprises, à 12 semaines
        d’intervalle, détection selon les recommandations de l’International
        Society of Thrombosis and Hemostasis</label
      >
      <input
        type="checkbox"
        id="toggle4"
        class="visually-hidden"
        value="4"
        v-model="questions2"
      />
      <div class="control-me"></div>
    </div>
    <div>
      <label class="btn" :class="{selected: questions2.includes('5')}" for="toggle5"
        >Anticorps anti-beta2GPI (IgG ou IgM) présents à un titre > au 99e
        percentile, à au moins 2 reprises, à 12 semaines d’intervalle selon une
        technique ELISA standardisée</label
      >
      <input
        type="checkbox"
        id="toggle5"
        class="visually-hidden"
        value="5"
        v-model="questions2"
      />
      <div class="control-me"></div>
    </div>
    <div class="result">
      <p>{{ questions1.length }} critère clinique</p>
      <p>{{ questions2.length }} critères biologiques</p>
      <p>
        Les critères de SAPL sont remplis si au moins un critère clinique et un
        critère biologique sont présents.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Sapl",
  data() {
    return {
      questions1: [],
      questions2: [],
    };
  },

});
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
.SAPL {
  div {
    margin: 16px 0;
  }

  [type="checkbox"] {
    display: none;
  }
}
</style>
