<template>
<div class="crpimc">
    <h2 class="title">CRP selon IMC</h2>



    <div class="crp__container">
        <div class="crp__content--left">
        <label for="crp-ratio">CRP</label>
        </div>

        <div class="crp__content--right">
            <input type="number" v-model="crp" value="crp" name="groupRadioGender" id="crp-ratio" @input="setTotal()">
            <select v-model="unit" id="crp-select-id" @change="setTotal()">
                <option value="mg/L">mg/L</option>
                <option value="mg/dL">mg/dL</option>
            </select>
        </div>
    </div>


    <div class="crp__container">
        <div class="crp__content--left">
            <p>SEXE</p>
        </div>
        <div class="crp__content--right">
        <div class="btn__container">
            <input type="radio" v-model="gender" value="Femme" name="groupRadioGender" id="crpF" @change="setTotal()">
            <label class="btn btn__halfsize" :class="{selected:  gender === 'Femme'}" for="crpF">Femme</label>

            <input type="radio" v-model="gender" value="Homme" name="groupRadioGender" id="crpH" @change="setTotal()">
            <label class="btn btn__halfsize"  :class="{selected:  gender === 'Homme'}" for="crpH">Homme</label>
        </div>
        </div>
    </div>

    <div class="crp__container">
        <div class="crp__content--left">
            <label for="imc-score">IMC</label>
        </div>
        <div class="crp__content--right">
            <input type="number" v-model="imc" value="imc" name="groupRadioGender" id="imc-score" @input="setTotal()">
        </div>
    </div>

    <div class="result">
        <h3>CRP {{ total >= 4 ? "normal" : "élevée" }} selon BMI :</h3>
        <p>{{ total.toFixed(2) }} {{ unit }}</p>
    </div>
    <p>/!\/!\/!\/!\<br> Remarque il manque des informations pour réaliser la formule, que faire du ratio CRP ?
        ! On dit du CRP qu'il est Elevée ou Normal à partir de quels taux pour mg/L et mg/dL ?<br>/!\/!\/!\/!\</p>
</div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
    name: "CRPimc",
    data() {
        return {
            total: 0,
            unit: 'mg/L',
            gender: 'Femme',
            imc: null,
            crp: null,
        }
    },
    methods:{
        setTotal : function () {
/* TODO les info pour le calcul ==> CRP selon IMC : (1 + (IMC-25)/25 pour les hommes et 1 + (IMC-25)/12,5 pour les femmes)
! Remarque il manque des informations pour réaliser la formule, que faire du ratio CRP ?
 ! Elevée ou normal à partir de quels taux pour mg/L et mg/dL ?
 */

            if (this.gender === 'Homme') {
                this.total = 1 + (this.imc-25) / 25

            } else {
                this.total = 1 + (this.imc-25) / 12.5
            }
        }
    },
})
</script>

<style lang="scss" scoped>
@import "src/sass/global.scss";

.crp {
  &__container {
    display: flex;
    align-items: center;
    margin: 1em 0;
  }
  &__content--left {
    width: 20%;
  }
  &__content--right {
    width: 80%;
    justify-content: space-between;
    display: flex;
  }
}
input, select {
  height: 30px;
  padding: 0 3px;
  background: #EDECF4 0% 0% no-repeat padding-box;
  border-radius: 5px;
  border: none;
}
input {
  width: 100%;
}
select {
  margin-left: 10px;

}
[type="radio"] {
  display: none;
}
.btn__container {
  width: 100%;
}

</style>
