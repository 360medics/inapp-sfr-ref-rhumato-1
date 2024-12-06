<template>
  <div class="Sdai">
    <h2 class="title">Polyarthrite rhumatoïde - SDAI</h2>
    <p class="description">
      Le SDAI ou Simplified Disease Activity Index est inspiré de la famille de
      scores « DAS » pour la polyarthrite rhumatoïde, comprenant DAS28 et
      DAS28-CRP. Il est très utiles pour réaliser une évaluation objective,
      reproductible et comparable de l'activité de la polyarthrite rhumatoïde.
    </p>
    <p class="line"></p>

    <form class="form">
      <div>
        <label for="tenderJoins"
          >Nombre d'articulations douloureuses (sur 28)</label
        >
        <input
          v-model="tenderJoins"
          type="number"
          id="tenderJoins"
          name="tenderJoins"
          min="0"
          max="28"
        />
      </div>

      <div>
        <label for="swollenJoins"
          >Nombre d'articulations enflées (sur 28)</label
        >
        <input
          v-model="swollenJoins"
          type="number"
          id="swollenJoins"
          name="swollenJoins"
          min="0"
          max="28"
        />
      </div>

      <div>
        <label for="patientEvaluation"
          >Évaluation globale par le patient de l'activité de la maladie (sur
          10)</label
        >
        <input
          v-model="patientEvaluation"
          type="number"
          id="patientEvaluation"
          name="patientEvaluation"
          min="0"
          max="10"
        />
      </div>

      <div>
        <label for="medicEvaluation"
          >Évaluation globale par le l'équipe soignante de l'activité de la
          maladie (sur 10)</label
        >
        <input
          v-model="medicEvaluation"
          type="number"
          id="medicEvaluation"
          name="medicEvaluation"
          min="0"
          max="10"
        />
      </div>
    </form>

    <form class="form">
        <div>
      <p>CRP en :</p>
            <div>
                <label for="crpTypeL">mg/L</label>
                <input type="radio" id="crpTypeL" value="l" v-model="crpType" />

                <label for="crpTypeDl">mg/dL</label>
                <input type="radio" id="crpTypeDl" value="dl" v-model="crpType" />
            </div>

        <input
          v-model="crpL"
          type="number"
          id="crpL"
          name="crpL"
          min="0"
          v-if="crpType === 'l'"
        />
            <input
                    v-model="crpDl"
                    type="number"
                    id="crpDl"
                    name="crpDl"
                    min="0"
                    v-if="crpType === 'dl'"
            />
      </div>

    </form>

    <div class="result" v-if="calcTotal() <= 2.8">
      Rémission : {{ calcTotal() }}
    </div>
    <div class="result" v-if="2.8 < calcTotal() && calcTotal() <= 10">
      Activité faible : {{ calcTotal() }}
    </div>
    <div class="result" v-if="10 < calcTotal() && calcTotal() <= 22">
      Activité modérée : {{ calcTotal() }}
    </div>
    <div class="result" v-if="22 < calcTotal()">
      Activité forte : {{ calcTotal() }}
    </div>

    <div class="info">
      <p
        >L'interprétation de ce score compris entre 0 et 76 ne dépend pas de son
        évolution au cours du temps.<br>Généralement, on considère qu'il y a
        rémission si le score est compris entre 0 et 2,8 inclus. <br>Une activité
        faible est indiquée par un score > 2,8 jusqu'à 10 inclus. <br>Une activité
        modérée est indiquée par un score compris entre > 10 et 22 inclus,
        tandis qu'une activité élevée est indiquée par un score strictement
        supérieur à 22.</p
      >
    </div>

    <em class="source">
      <p>source : Application Rheumatools</p>
      <span>Références :</span>
      <p>Van der Heijde DMFM van't Hof MA van Riel PLCM et al. Judging disease activity in clinical practice in rheumatoid arthritis: first step in the development of a disease activity score/</p>
      <p>Ann Rheum Dis1990;49;916-20</p>
      <p>Site DAS :</p>
      <a class="source" v-if="!isMobile()" :href="'https://www.das-score.nl/nl-nl/'" target="blank">https://www.das-score.nl/nl-nl/</a>
      <a class="source" v-else :href="'medics://viewer?m_source=' + 'https://www.das-score.nl/nl-nl/'">https://www.das-score.nl/nl-nl/</a>
    </em>
    <Footer/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Footer from '@/components/Footer.vue';

export default defineComponent({
    components: { Footer},
    data() {
    return {
      tenderJoins: 0,
      swollenJoins: 0,
      patientEvaluation: 0,
      medicEvaluation: 0,
      crpType: 'l',
      crpL: 0,
      crpDl: 0,
    };
  },
  methods: {
    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    },
    calcTotal() {
      if (this.crpType === 'l') {
        return (
          parseInt(this.tenderJoins) +
          parseInt(this.swollenJoins) +
          parseInt(this.patientEvaluation) +
          parseInt(this.medicEvaluation) +
          parseFloat(this.crpL) / 10
        );
      } else if (this.crpType === 'dl') {
        return (
          parseInt(this.tenderJoins) +
          parseInt(this.swollenJoins) +
          parseInt(this.patientEvaluation) +
          parseInt(this.medicEvaluation) +
          parseFloat(this.crpDl)
        );
      } else {
        return 0;
      }
    },
  },
});
</script>

<style scoped lang="scss">
@import 'src/sass/global.scss';

.Sdai {
  input:not([type="radio"]) {
    height: 30px;
    padding: 0 3px;
    background: #EDECF4 0% 0% no-repeat padding-box;
    border-radius: 5px;
    opacity: 1;
    margin: .75em;
    border: none;
    width: 60px;
  }

  form {
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 20px 0;

      label {
        width: 70%;
      }
    }
  }
}
</style>
