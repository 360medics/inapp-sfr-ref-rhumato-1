<template>
  <div class="GoutteAcrEular">
    <h2 class="title">Score diagnostique pour la goutte ACR et EULAR</h2>

    <span class="line"></span>
    <form class="form">
      <div>
        <h4 class="subtitle">CONDITION NECESSAIRE</h4>
        <label for="necessary_condition_id" class="btn" :class="{selected: necessary_condition}"
          >Au moins 1 épisode de douleur articulaire périphérique</label
        >
        <input
          v-model="necessary_condition"
          name="necessary_condition_check"
          type="checkbox"
          id="necessary_condition_id"
          style="display: none"
        />
      </div>

      <div v-if="necessary_condition">
        <div>
          <h4 class="subtitle">
            CONDITION SUFFISANTE POUR LE DIAGNOSTIC DE GOUTTE
          </h4>
          <label for="necessary_condition2_id" class="btn" :class="{selected: necessary_condition2}"
            >Présence de cristaux d'urate dans une articulation symptomatique ou
            bourse ou tophus</label
          >
          <input
            v-model="necessary_condition2"
            name="necessary_condition2"
            type="checkbox"
            id="necessary_condition2_id"
            style="display: none"
          />
        </div>

        <div v-if="!necessary_condition2">
          <div>
            <h4 class="subtitle">SCORE</h4>
            <div>
              <h5 class="categorie">Expression clinique</h5>
              <label for="clinical_expression_id"  class="btn" :class="{selected: clinical_expression === '0'}"
                >Articulation ou bursite autre que cheville, pied ou 1er MTP
              </label>
              <input
                v-model="clinical_expression"
                type="radio"
                id="clinical_expression_id"
                name="clinical_expression"
                value="0"
                style="display: none"
              />
            </div>
            <div>
              <label for="clinical_expression_id1" class="btn" :class="{selected: clinical_expression === '1'}"
                >Articulation ou bursite autre que cheville, pied ou 1er MTP
              </label>
              <input
                v-model="clinical_expression"
                type="radio"
                id="clinical_expression_id1"
                name="clinical_expression"
                value="1"
                style="display: none"
              />
            </div>
            <div>
              <label for="clinical_expression_id2" class="btn" :class="{selected: clinical_expression === '2'}">
                Atteinte cheville ou partie médiane du pied
              </label>
              <input
                v-model="clinical_expression"
                type="radio"
                id="clinical_expression_id2"
                name="clinical_expression"
                value="2"
                style="display: none"
              />
            </div>
          </div>


          <div>
            <ul class="categorie">
              <div style="display: flex">
                <h5>Nombres de symptômes parmis les suivants: </h5>
                <select v-model="result_select_symptom" id="result_select_id" style="height: 36px; align-self: center">
                  <option value="0">Zéro</option>
                  <option value="1">Un</option>
                  <option value="2">Deux</option>
                  <option value="3">Trois</option>
                </select>
              </div>
              <li>1) Erythème sur la région affectée</li>
              <li>2) Ne supporte pas la pression sur la zone affectée</li>
              <li>3) Marche ou mobilisation articulaire très difficile</li>
            </ul>
          </div>


          <div>
            <ul class="categorie">
              <h5 class="categorie">
                Caractéristiques temporelles de l'épisode Présence de >= 2 éléments
                (avec ou sans ttt)
              </h5>
              <li>Temps requis pour douleur maximale &lsaquo; 24 h</li>
              <li>Résolution des symptômes dans les 14 jours</li>
              <li>Résolution complète des symptômes entre les épisode</li>
            </ul>
            <div style="display: flex; justify-content: space-between">
              <label for="temporal_characteristic_id">Nombre d'épisodes</label>
              <select
                v-model="temporal_characteristic"
                name="temporal_characteristic"
                id="temporal_characteristic_id"
              >
                <option value="0">0 épisode</option>
                <option value="1">1 épisode</option>
                <option value="2">plus d'un épisode</option>
              </select>
            </div>
          </div>
          <div style="margin: 15px 0">
            <label for="presence_tophi_id"  class="btn" :class="{selected: presence_tophi !== 0}">Présence de tophus</label>
            <input
              v-model="presence_tophi"
              type="checkbox"
              id="presence_tophi_id"
              name="presence_tophi"
              style="display: none"
            />
          </div>
          <div style="display: flex; justify-content: space-between">
            <label for="uricemia_id">Uricémie mmol/l</label>
            <select v-model="uricemia" id="uricemia_id">
              <option value="-4">moins de 0,24</option>
              <option value="0">0,24 à 0,36</option>
              <option value="2">0,36 à 0,48</option>
              <option value="3">0,48 à 0,60</option>
              <option value="4">0,60 et plus</option>
            </select>
          </div>
          <div>
            <label for="synovial_id" class="btn" :class="{selected: synovial !== 0}"
              >Analyse du liquide synovial (si exécuté) et négatif
            </label>
            <input v-model="synovial" type="checkbox" id="synovial_id" style="display: none"/>
          </div>
          <div>
            <label for="urate_id"  class="btn" :class="{selected: urate !== 0}"
              >Evidence d'urate (écho ou DECT): positif vs négatif ou non fait
            </label>
            <input v-model="urate" type="checkbox" id="urate_id" style="display: none"/>
          </div>
          <div>
            <label for="lesion_radiologique_id"  class="btn" :class="{selected: lesion_radiologique !== 0}"
              >Lésion radiologique liée à la goutte (>=1 érosion)
            </label>
            <input
              v-model="lesion_radiologique"
              type="checkbox"
              id="lesion_radiologique_id"
              style="display: none"
            />
          </div>
        </div>
      </div>
    </form>
      <div v-if="finished" class="result" style="margin-top: 15px">
        <div v-if="!necessary_condition2">
          <p :v-model="this.score">TOTAL : {{ this.score }}</p>
          <div class="flex">
            <p v-if="this.score > 7">Diagnostic de goutte : Positif</p>
            <p v-else>Diagnostic de goutte : Négatif</p>
          </div>
        </div>
        <div v-else>
          <p>Diagnostic de goutte : positif</p>
        </div>
        <div>

        </div>
      </div>
    <span class="line"></span>
    <span>
      Score mis au point par des experts, selon la méthode Dephi, Dans un
      collectif de 330 sujets, SE et SP = 92 et 89% respectivement.
    </span>
    <span>
      Neogi T et al. 2015 gout clasification: an American College of
      Rheumatology/ European League Against Rheumatism collaborative initiative.
      Ann Rheum Dis 2015; 74: 1789.
    </span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({

  data() {
    return {
      necessary_condition: false,
      necessary_condition2: false,
      result_select_symptom: null,
      temporal_characteristic: null,
      clinical_expression: null,
      presence_tophi: 0,
      score: 0,
      synovial: 0,
      urate: 0,
      uricemia: null,
      result: false,
      necessary_condition2_result: "exécuter le score",
      lesion_radiologique: 0,
      finished: false
    };
  },
  methods: {
    getScore() {
      this.score =
        (this.clinical_expression ? parseInt(this.clinical_expression) : 0) +
        (this.result_select_symptom ? parseInt(this.result_select_symptom) : 0) +
        (this.temporal_characteristic ? parseInt(this.temporal_characteristic) : 0) +
        (parseInt(this.presence_tophi)) +
        (this.uricemia ? parseInt(this.uricemia) : 0) +
        this.synovial +
        this.urate +
        this.lesion_radiologique;
      this.finished = true
    },
  },
  watch: {
    necessary_condition2: function () {
      let checkbox2 = document.querySelector("#necessary_condition2_id");
      if (checkbox2["checked"] == true) {
        this.necessary_condition2_result = "GOUTTE STOP";
        this.finished = true
      } else if (checkbox2["checked"] == false) {
        this.necessary_condition2_result = "exécuter le score";
        this.finished = false
      }
    },
    clinical_expression: {
      handler: function () {
        this.getScore();
      },
    },
    result_select_symptom: {
      handler: function () {
        this.getScore();
      },
    },
    temporal_characteristic: {
      handler: function () {
        this.getScore();
      },
    },
    presence_tophi: {
      handler: function () {
        let checkbox = document.querySelector("#presence_tophi_id");
        if (checkbox["checked"] == true) this.presence_tophi = 4;
        else this.presence_tophi = 0;
        this.getScore();
      },
    },
    uricemia: {
      handler: function () {
        this.getScore();
      },
    },
    synovial: {
      handler: function () {
        let checkbox = document.querySelector("#synovial_id");
        if (checkbox["checked"] == true) this.synovial = -2;
        else this.synovial = 0;
        this.getScore();
      },
    },
    urate: {
      handler: function () {
        let checkbox = document.querySelector("#urate_id");
        if (checkbox["checked"] == true) this.urate = 4;
        else this.urate = 0;
        this.getScore();
      },
    },
    lesion_radiologique: {
      handler: function () {
        let checkbox = document.querySelector("#lesion_radiologique_id");
        if (checkbox["checked"] == true) this.lesion_radiologique = 4;
        else this.lesion_radiologique = 0;
        this.getScore();
      },
    },
  },
});
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
.GoutteAcrEular {}

.flex {
  display: flex;
}

input, select {
  height: 30px;
  padding: 0 3px;
  background: #EDECF4 0% 0% no-repeat padding-box;
  border-radius: 5px;
  opacity: 1;
  margin: 0 10px;
  border: none;
}
ul {
  padding: 0;
}
</style>
