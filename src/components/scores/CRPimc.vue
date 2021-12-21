<template>
<div class="crpimc">
    <h2 class="title">CRP selon IMC</h2>
    <span class="line" />


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

    <div class="result crp__result">
        <h3 class="result crp__result__leftSide">CRP {{ crp  <= total ? "normal" : "élevée" }} selon BMI :</h3>
        <p class="result crp__result__rightSide">{{ total.toFixed(2) }} {{ unit }}</p>
    </div>
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
            if (this.gender === 'Homme') {
                if (this.unit === 'mg/L') {
                    this.total = ( 1 + (this.imc-25) / 25 ) * 10
                } else {
                    this.total = 1 + (this.imc-25) / 25
                }
            } else {
                if (this.unit === 'mg/L') {
                    this.total = ( 1 + (this.imc-25) / 12.5 ) * 10
                } else {
                    this.total = 1 + (this.imc-25) / 12.5
                }
            }
        }
    },
})
</script>

<style lang="scss" scoped>
@import "src/sass/global.scss";

.crp {
  &__result {
    display: flex;
    align-items: center;
    justify-content: space-around;
    &__leftSide {
      flex-basis: 55%;
      font-size: clamp(.84rem, 1vw, 1.2rem);
    }
    &__rightSide {
      margin-left: .5em;
    }
  }
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
  width: 25%;
}
select {
  margin-left: 5px;
}
[type="radio"] {
  display: none;
}
.btn__container {
  width: 100%;
}


</style>
