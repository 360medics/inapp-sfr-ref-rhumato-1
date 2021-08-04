<template>
  <div class="Cdai">
    <h2 class="title">polyarthrite rhumatoïde - CDAI</h2>
    <p class="description">
      Le CDAI ou Clinical Disease Activity Index est inspiré de la famille de
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
        <label for="swollenJoins">Nombre d'articulations enflées (sur 28)</label>
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

    <div class="result" v-if="calcTotal() <= 2.8"
      >Rémission : {{ calcTotal() }}
    </div>
    <div class="result" v-if="2.8 < calcTotal() && calcTotal() <= 10"
      >Activité faible : {{ calcTotal() }}
    </div>
    <div class="result" v-if="10 < calcTotal() && calcTotal() <= 22"
      >Activité modérée : {{ calcTotal() }}
    </div>
    <div class="result" v-if="22 < calcTotal()"
      >Activité forte : {{ calcTotal() }}
    </div>

    <div class="info">
      <em>
        L'interprétation de ce score compris entre 0 et 76 ne dépend pas de son
        évolution au cours du temps. Généralement, on considère qu'il y a
        rémission si le score est compris entre 0 et 2,8 inclus. Une activité
        faible est indiquée par un score > 2,8 jusqu'à 10 inclus. Une activité
        modérée est indiquée par un score compris entre > 10 et 22 inclus, tandis
        qu'une activité élevée est indiquée par un score strictement supérieur à
        22.
      </em>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({

  data() {
    return {
      tenderJoins: null,
      swollenJoins: null,
      patientEvaluation: null,
      medicEvaluation: null,
    };
  },
  methods: {
    calcTotal() {
      return (
        parseInt(this.tenderJoins) +
        parseInt(this.swollenJoins) +
        parseInt(this.patientEvaluation) +
        parseInt(this.medicEvaluation)
      );
    },
  },
});
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";

.Cdai {

  input {
    height: 30px;
    padding: 0 3px;
    background: #EDECF4 0% 0% no-repeat padding-box;
    border-radius: 5px;
    opacity: 1;
    margin: 0 10px;
    border: none;
    width: 60px;
  }

  form {
    div {
      display: flex;
      justify-content: space-between;
      margin: 20px 0;

      label {
        width: 70%;
      }
    }
  }
}
</style>
