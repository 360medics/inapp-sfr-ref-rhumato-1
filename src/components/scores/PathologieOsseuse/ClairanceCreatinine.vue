<template>
  <div class="PathologieOsseuse">
    <h2 class="title">Calcul de la clairance de la créatinine selon Cockroft & Gault et MDRD</h2>
    <span class="line"></span>

    <div>
      <span class="input-group-text">Année de naissance: </span>
      <input type="number" class="form-control" v-model="birth">
    </div>

    <div>
      <span class="input-group-text">Age: </span>
      <input type="number" class="form-control" v-model="year">
      <span class="input-group-text"> ans</span>
    </div>

    <div>
      <span class="input-group-text">Poids: </span>
      <input type="number" class="form-control" v-model="poids">
      <span class="input-group-text"> Kg</span>
    </div>

    <div>
      <span class="input-group-text">Taux de Créatine: </span>
      <input type="number" class="form-control" v-model="taux">
      <span class="input-group-text"> µmol/L</span>
    </div>


    <p class="description">Sexe</p>

    <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked value="f" v-model="sexe">
    <label class="btn" :class="{selected: sexe === 'f'}" for="btnradio1">Femme</label>

    <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" value="h" v-model="sexe">
    <label class="btn" :class="{selected: sexe === 'h'}" for="btnradio2">Homme</label>

    <p class="description">Origine afro-américaine</p>

    <input type="radio" class="btn-check" name="btnradio1" id="btnradio3" autocomplete="off" checked value="0" v-model="origine">
    <label class="btn" :class="{selected: origine === '0'}" for="btnradio3">Non</label>

    <input type="radio" class="btn-check" name="btnradio1" id="btnradio4" autocomplete="off" value="1" v-model="origine">
    <label class="btn" :class="{selected: origine === '1'}" for="btnradio4">Oui</label>

    <br>

    <button class="btn btn__submit" @click="calcul"> Calculer </button>

    <div class="result" v-if="showResult">
      <h4>Formule de Cockroft & Gault: {{ resultCG }} ml/min/1.72m2</h4>
      <h4>Formule MDRD: {{ resultMDRD }} ml/min/1.72m2</h4>
    </div>

    <h4 v-if="errorCalculate" class="message--error">Vérifier les informations saisies</h4>

    <p class="description"> La clairance est indispensable avant toute injection de produit de contraste au scanner et en IRM.</p>

    <p class="description">Le calcul de la clairance de la créatinine permet d'éviter une éventuelle insuffisance rénale induite par ces produits de contraste.</p>

    <p class="description">* Le résultat du calcul de la clairance est donné à titre indicatif. Le site clairance-creatinine.fr ne peut être tenue pour responsable en cas de conséquences indésirables.</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name:"ClairanceCreatinine",
  data() {
    return {
      birth: null,
      year: null,
      poids: null,
      taux: null,
      sexe: null,
      origine: null,
      resultCG: 0,
      resultMDRD: 0,
      showResult: false,
      errorCalculate: false
    }
  },
  methods: {
    calcul() {

      if (this.sexe === "h") {
        this.resultCG = 1.23 * parseInt(this.poids) * (140 - parseInt(this.year)) / parseInt(this.taux)
      } else {
        this.resultCG = 1.04 * parseInt(this.poids) * (140 - parseInt(this.year)) / parseInt(this.taux)
      }

      this.resultMDRD = (186 * (parseInt(this.taux) * 0.0113)) - (1.154 * parseInt(this.year)) - 0.203

      if (this.origine === "1") {
        this.resultMDRD *= 1.21;
      }
      if (this.sexe === "f") {
        this.resultMDRD *= 0.742;
      }

      if (isNaN(this.resultMDRD) || isNaN(this.resultCG)) {
        this.showResult = false
        this.errorCalculate = true
      } else {
        this.showResult = true
        this.errorCalculate = false
      }

    }
  }
})
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";

.PathologieOsseuse {
  input {
    height: 30px;
    padding: 0 3px;
    background: #EDECF4 0% 0% no-repeat padding-box;
    border-radius: 5px;
    opacity: 1;
    margin: 0 10px;
    border: none;
  }

  [type="number"] {
    width: 60px;
  }

  [type="radio"] {
    display: none;
  }

  div {
    margin: 10px 0;
  }
}
.message--error {
  color: #ff0000;
  text-align: center;
}
.btn__submit {
  background-color: #80cd29 !important;
  color: #fff !important;
  border: solid 2px #74bd21 !important;
  font-size: 1em;
  font-weight: 700;
  border: none;
}
</style>
