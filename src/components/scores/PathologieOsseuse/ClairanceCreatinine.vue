<template>
  <div class="PathologieOsseuse">
    <h2 class="title">Calcul de la clairance de la créatinine selon Cockroft & Gault et MDRD</h2>
    <span class="line"></span>

    <div class="flex-creatinine">
      <span class="input-group-text before">Année de naissance: </span>
      <div>
        <input type="number" class="form-control" v-model="birth">
      </div>
    </div>

    <div class="flex-creatinine">
      <span class="input-group-text before">Age: </span>
      <div>
        <input type="number" class="form-control" v-model="year">
        <span class="input-group-text">ans</span>
      </div>
    </div>

    <div class="flex-creatinine">
      <span class="input-group-text before">Poids: </span>
      <div>
        <input type="number" class="form-control" v-model="poids">
        <span class="input-group-text">kg</span>
      </div>
    </div>

    <div class="flex-creatinine">
      <span class="input-group-text before">Taille: </span>
      <div>
        <input type="number" class="form-control" v-model="taille">
        <span class="input-group-text">cm</span>
      </div>
    </div>

    <div class="flex-creatinine">
      <span class="input-group-text before">Taux de Créatine: </span>
      <div>
        <input type="number" class="form-control" v-model="taux">
        <span class="input-group-text"> µmol/L</span>
      </div>
    </div>

    <div class="flex-creatinine">
      <span class="input-group-text before">Sexe: </span>
      <div class="flex-creatinine">
        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked value="f" v-model="sexe">
        <label class="btn" :class="{selected: sexe === 'f'}" for="btnradio1">Femme</label>
        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" value="h" v-model="sexe">
        <label class="btn" :class="{selected: sexe === 'h'}" for="btnradio2">Homme</label>
      </div>
    </div>

    <div class="flex-creatinine">
      <span class="input-group-text before">Origine afro-américaine:</span>
      <div class="flex-creatinine">
        <input type="radio" class="btn-check" name="btnradio1" id="btnradio3" autocomplete="off" checked value="0" v-model="origine">
        <label class="btn" :class="{selected: origine === '0'}" for="btnradio3">Non</label>
        <input type="radio" class="btn-check" name="btnradio1" id="btnradio4" autocomplete="off" value="1" v-model="origine">
        <label class="btn" :class="{selected: origine === '1'}" for="btnradio4">Oui</label>
      </div>
    </div>

    <br>

    <button class="btn btn__submit" @click="calcul"> Calculer </button>

    <div class="result" v-if="showResult">
      <p>IMC: {{ imc }} : {{ imcInterpretation }}</p>
      <p>Cockroft & Gault: {{ resultCG }} ml/min/1.72m2</p>
      <p>MDRD: {{ resultMDRD }} ml/min/1.72m2</p>
    </div>

    <h4 v-if="errorCalculate" class="message--error">Vérifier les informations saisies</h4>

    <h3>Interprétation :</h3>
    <p>80 à 120 ml/min : Valeurs normales</p>
    <p>60 et 80 ml/min : Insuffisance rénale légère</p>
    <p>30 et 60 ml/min : Insuffisance rénale modérée</p>
    <p>< 30 ml/min : Insuffisance rénale sévère</p>

      <h3>Interprétation IMC</h3>

      <p>- de 16.5 : Sous poids</p>
      <p>- 16.5 à 18.5 : Maigreur</p>
      <p>- 18.5 à 25 : Corpulence normale</p>
      <p>- 25 à 30 : Surpoids</p>
      <p>- 30 à 35 : Obésité modérée</p>
      <p>- 35 à 40 : Obésité sévère</p>
      <p>+ de 40 : Obésité morbide</p>

    <h3>Source</h3>
    <a v-if="!isMobile()" href="https://360medics.com/fr/calculators/tools/clairance-de-la-creatinine" target="_blank">Voir le lien</a>
    <a v-if="isMobile()" href="medics://viewer?m_source=https://360medics.com/fr/calculators/tools/clairance-de-la-creatinine">Voir le lien</a>
    <p>La fiabilité de cette formule est suffisante pour peu qu'on l'utilise sur des sujets adultes (de 20 à 100 ans) pour un poids compris entre 50 et 75 Kg. Les résultats sont normalisés pour une surface corporelle moyenne d'un adulte (1,73 m2).</p>
    <h3>Références Cockroft & Gault</h3>
    <p>Nephron. 1976;16(1):31-41. Prediction of creatinine clearance from serum creatinine. Cockcroft DW, Gault MH.</p>
    <h3>Références MDRD</h3>
    <p>Ann Intern Med. 2006 Aug 15;145(4):247-54. Using standardized serum creatinine values in the modification of diet in renal disease study equation for estimating glomerular filtration rate. Levey AS, Coresh J, Greene T, Stevens LA, Zhang YL, Hendriksen S, Kusek JW, Van Lente F; Chronic Kidney Disease Epidemiology Collaboration. Tufts-New England Medical Center, Boston, Massachusetts 02111, USA. Ann Intern Med. 2008 Oct 7;149(7):519.</p>


      <h3>Références IMC</h3>
      <p>World Health Organ Tech Rep Ser. 1995;854:1-452. Physical status: the use and interpretation of anthropometry. Report of a WHO Expert Committee.</p>
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
      taille: null,
      taux: null,
      sexe: "",
      origine: "",
      resultCG: 0,
      resultMDRD: 0,
      imc: 0,
      imcInterpretation: '',
      showResult: false,
      errorCalculate: false
    }
  },
  methods: {
    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    },
    calcul() {

      if (this.sexe === "h") {
        this.resultCG = Math.round(1.23 * parseInt(this.poids) * (140 - parseInt(this.year)) / parseInt(this.taux)*100)/100
      } else {
        this.resultCG = Math.round(1.04 * parseInt(this.poids) * (140 - parseInt(this.year)) / parseInt(this.taux)*100)/100
      }

      this.resultMDRD = Math.round(186 * Math.pow(this.taux * 0.0113, -1.154)  * Math.pow(this.year, -0.203)*100)/100

      if (this.origine === "1") {
        this.resultMDRD = Math.round(this.resultMDRD * 1.21*100)/100;
      }
      if (this.sexe === "f") {
        this.resultMDRD = Math.round(this.resultMDRD * 0.742*100)/100;
      }

      this.imc = Math.round(this.poids/((this.taille/100)*(this.taille/100))*10)/10

      if (this.imc < 16.5) {
        this.imcInterpretation = 'Sous-poids'
      } else if (16.5 <= this.imc && this.imc < 18.5) {
        this.imcInterpretation = 'Maigreur'
      } else if (18.5 <= this.imc && this.imc < 25) {
        this.imcInterpretation = 'Corpulence normale'
      } else if (23 <= this.imc && this.imc < 30) {
        this.imcInterpretation = 'Surpoids'
      } else if (30<= this.imc && this.imc < 35) {
        this.imcInterpretation = 'Obésité modérée'
      } else if (35<= this.imc && this.imc < 40) {
        this.imcInterpretation = 'Obésité sévère'
      } else {
        this.imcInterpretation = 'Obésité morbide'
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

.flex-creatinine {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.flex-creatinine>span, .flex-creatinine>div {
  width: 50%;
}
</style>
