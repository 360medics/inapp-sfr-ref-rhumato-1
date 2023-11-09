<template>
  <div class="Rodnan">
    <h2 class="title">Calcul du score de RODNAN</h2>
    <span class="line"></span>

    <form>
      <h4 class="subtitle">Corps</h4>

      <section>
        <p class="description">Visage</p>

        <input type="radio" v-on:change="calcScore" id="input1" v-model="face" value="0">
        <label class="btn" :class="{selected: face.includes('0')}" for="input1"> Absence de sclérose</label>

        <input type="radio" v-on:change="calcScore" id="input2" v-model="face" value="1">
        <label class="btn" :class="{selected: face.includes('1')}" for="input2">Sclérose superficielle</label>

        <input type="radio" v-on:change="calcScore" id="input3" v-model="face" value="2">
        <label class="btn" :class="{selected: face.includes('2')}" for="input3">Sclérose intermédiaire</label>

        <input type="radio" v-on:change="calcScore" id="input4" v-model="face" value="3">
        <label class="btn" :class="{selected: face.includes('3')}" for="input4"> Sclérose adhérente au plan profond</label>
      </section>

      <section>
        <p class="description">Thorax</p>

        <input type="radio" v-on:change="calcScore" id="input5" v-model="thorax" value="0">
        <label class="btn" :class="{selected: thorax.includes('0')}" for="input5"> Absence de sclérose</label>

        <input type="radio" v-on:change="calcScore" id="input6" v-model="thorax" value="1">
        <label class="btn" :class="{selected: thorax.includes('1')}" for="input6">Sclérose superficielle</label>

        <input type="radio" v-on:change="calcScore" id="input7" v-model="thorax" value="2">
        <label class="btn" :class="{selected: thorax.includes('2')}" for="input7">Sclérose intermédiaire</label>

        <input type="radio" v-on:change="calcScore" id="input8" v-model="thorax" value="3">
        <label class="btn" :class="{selected: thorax.includes('3')}" for="input8"> Sclérose adhérente au plan profond</label>
      </section>

      <section>
        <p class="description">Abdomen</p>

        <input type="radio" v-on:change="calcScore" id="input9" v-model="abdomen" value="0">
        <label class="btn" :class="{selected: abdomen.includes('0')}" for="input9"> Absence de sclérose</label>

        <input type="radio" v-on:change="calcScore" id="input10" v-model="abdomen" value="1">
        <label class="btn" :class="{selected: abdomen.includes('1')}" for="input10">Sclérose superficielle</label>

        <input type="radio" v-on:change="calcScore" id="input11" v-model="abdomen" value="2">
        <label class="btn" :class="{selected: abdomen.includes('2')}" for="input11">Sclérose intermédiaire</label>

        <input type="radio" v-on:change="calcScore" id="input12" v-model="abdomen" value="3">
        <label class="btn" :class="{selected: abdomen.includes('3')}" for="input12"> Sclérose adhérente au plan profond</label>
      </section>

      <h4 class="subtitle">Haut gauche</h4>

      <section>
        <p class="description">Bras gauche</p>

        <input type="radio" v-on:change="calcScore" id="input13" v-model="armLeft" value="0">
        <label class="btn" :class="{selected: armLeft.includes('0')}" for="input13"> Absence de sclérose</label>

        <input type="radio" v-on:change="calcScore" id="input14" v-model="armLeft" value="1">
        <label class="btn" :class="{selected: armLeft.includes('1')}" for="input14">Sclérose superficielle</label>

        <input type="radio" v-on:change="calcScore" id="input15" v-model="armLeft" value="2">
        <label class="btn" :class="{selected: armLeft.includes('2')}" for="input15">Sclérose intermédiaire</label>

        <input type="radio" v-on:change="calcScore" id="input16" v-model="armLeft" value="3">
        <label class="btn" :class="{selected: armLeft.includes('3')}" for="input16"> Sclérose adhérente au plan profond</label>
      </section>

      <section>
        <p class="description">Av-Bras gauche</p>

        <input type="radio" v-on:change="calcScore" id="input17" v-model="foreArmLeft" value="0">
        <label class="btn" :class="{selected: foreArmLeft.includes('0')}" for="input17"> Absence de sclérose</label>

        <input type="radio" v-on:change="calcScore" id="input18" v-model="forArmLeft" value="1">
        <label class="btn" :class="{selected: foreArmLeft.includes('1')}" for="input18">Sclérose superficielle</label>

        <input type="radio" v-on:change="calcScore" id="input19" v-model="forArmLeft" value="2">
        <label class="btn" :class="{selected: foreArmLeft.includes('2')}" for="input19">Sclérose intermédiaire</label>

        <input type="radio" v-on:change="calcScore" id="input20" v-model="forArmLeft" value="3">
        <label class="btn" :class="{selected: foreArmLeft.includes('3')}" for="input20"> Sclérose adhérente au plan profond</label>
      </section>

      <section>
        <p class="description">Main gauche</p>

        <input type="radio" v-on:change="calcScore" id="input21" v-model="handLeft" value="0">
        <label class="btn" :class="{selected: handLeft.includes('0')}" for="input21"> Absence de sclérose</label>

        <input type="radio" v-on:change="calcScore" id="input22" v-model="handLeft" value="1">
        <label class="btn" :class="{selected: handLeft.includes('1')}" for="input22">Sclérose superficielle</label>

        <input type="radio" v-on:change="calcScore" id="input23" v-model="handLeft" value="2">
        <label class="btn" :class="{selected: handLeft.includes('2')}"  for="input23">Sclérose intermédiaire</label>

        <input type="radio" v-on:change="calcScore" id="input24" v-model="handLeft" value="3">
        <label class="btn" :class="{selected: handLeft.includes('3')}" for="input24"> Sclérose adhérente au plan profond</label>
      </section>

      <section>
        <p class="description">Doigts gauche</p>

        <input type="radio" v-on:change="calcScore" id="input25" v-model="fingerLeft" value="0">
        <label class="btn" :class="{selected: fingerLeft.includes('0')}" for="input25"> Absence de sclérose</label>

        <input type="radio" v-on:change="calcScore" id="input26" v-model="fingerLeft" value="1">
        <label class="btn" :class="{selected: fingerLeft.includes('1')}" for="input26">Sclérose superficielle</label>

        <input type="radio" v-on:change="calcScore" id="input27" v-model="fingerLeft" value="2">
        <label class="btn" :class="{selected: fingerLeft.includes('2')}" for="input27">Sclérose intermédiaire</label>

        <input type="radio" v-on:change="calcScore" id="input28" v-model="fingerLeft" value="3">
        <label class="btn" :class="{selected: fingerLeft.includes('3')}" for="input28"> Sclérose adhérente au plan profond</label>
      </section>

      <h4 class="subtitle">Haut droit</h4>

      <section>
        <p class="description">Bras droit</p>

        <input type="radio" v-on:change="calcScore" id="input29" v-model="armRight" value="0">
        <label class="btn" :class="{selected: armRight.includes('0')}" for="input29"> Absence de sclérose</label>

        <input type="radio" v-on:change="calcScore" id="input30" v-model="armRight" value="1">
        <label class="btn" :class="{selected: armRight.includes('1')}" for="input30">Sclérose superficielle</label>

        <input type="radio" v-on:change="calcScore" id="input31" v-model="armRight" value="2">
        <label class="btn" :class="{selected: armRight.includes('2')}" for="input31">Sclérose intermédiaire</label>

        <input type="radio" v-on:change="calcScore" id="input32" v-model="armRight" value="3">
        <label class="btn" :class="{selected: armRight.includes('3')}" for="input32"> Sclérose adhérente au plan profond</label>
      </section>

      <section>
        <p class="description">Av-bras droit </p>

        <input type="radio" v-on:change="calcScore" id="input33" v-model="forArmRight" value="0">
        <label class="btn" :class="{selected: forArmRight.includes('0')}" for="input33"> Absence de sclérose</label>

        <input type="radio" v-on:change="calcScore" id="input34" v-model="forArmRight" value="1">
        <label class="btn" :class="{selected: forArmRight.includes('1')}" for="input34">Sclérose superficielle</label>

        <input type="radio" v-on:change="calcScore" id="input35" v-model="forArmRight" value="2">
        <label class="btn" :class="{selected: forArmRight.includes('2')}" for="input35">Sclérose intermédiaire</label>

        <input type="radio" v-on:change="calcScore" id="input36" v-model="forArmRight" value="3">
        <label class="btn" :class="{selected: forArmRight.includes('3')}" for="input36"> Sclérose adhérente au plan profond</label>

      </section>

      <section>
        <p class="description">Main droite</p>

        <input type="radio" v-on:change="calcScore" id="input37" v-model="handRight" value="0">
        <label class="btn" :class="{selected: handRight.includes('0')}" for="input37"> Absence de sclérose</label>

        <input type="radio" v-on:change="calcScore" id="input38" v-model="handRight" value="1">
        <label class="btn" :class="{selected: handRight.includes('1')}" for="input38">Sclérose superficielle</label>

        <input type="radio" v-on:change="calcScore" id="input39" v-model="handRight" value="2">
        <label class="btn" :class="{selected: handRight.includes('2')}" for="input39">Sclérose intermédiaire</label>

        <input type="radio" v-on:change="calcScore" id="input40" v-model="handRight" value="3">
        <label class="btn" :class="{selected: handRight.includes('3')}" for="input40"> Sclérose adhérente au plan profond</label>
      </section>

      <section>
        <p class="description">Doigts droit</p>

        <input type="radio" v-on:change="calcScore" id="input41" v-model="fingerRight" value="0">
        <label class="btn" :class="{selected: fingerRight.includes('0')}" for="input41"> Absence de sclérose</label>

        <input type="radio" v-on:change="calcScore" id="input42" v-model="fingerRight" value="1">
        <label class="btn" :class="{selected: fingerRight.includes('1')}" for="input42">Sclérose superficielle</label>

        <input type="radio" v-on:change="calcScore" id="input43" v-model="fingerRight" value="2">
        <label class="btn" :class="{selected: fingerRight.includes('2')}" for="input43">Sclérose intermédiaire</label>

        <input type="radio" v-on:change="calcScore" id="input44" v-model="fingerRight" value="3">
        <label class="btn" :class="{selected: fingerRight.includes('3')}" for="input44"> Sclérose adhérente au plan profond</label>
      </section>

      <h4 class="subtitle">Bas gauche</h4>
      <section>
        <p class="description">Cuisse gauche</p>

        <input type="radio" v-on:change="calcScore" id="input45" v-model="thighLeft" value="0">
        <label class="btn" :class="{selected: thighLeft.includes('0')}" for="input45"> Absence de sclérose</label>

        <input type="radio" v-on:change="calcScore" id="input46" v-model="thighLeft" value="1">
        <label class="btn" :class="{selected: thighLeft.includes('1')}" for="input46">Sclérose superficielle</label>

        <input type="radio" v-on:change="calcScore" id="input47" v-model="thighLeft" value="2">
        <label class="btn" :class="{selected: thighLeft.includes('2')}" for="input47">Sclérose intermédiaire</label>

        <input type="radio" v-on:change="calcScore" id="input48" v-model="thighLeft" value="3">
        <label class="btn" :class="{selected: thighLeft.includes('3')}" for="input48"> Sclérose adhérente au plan profond</label>
      </section>

      <section>
        <p class="description">Jambe gauche</p>

        <input type="radio" v-on:change="calcScore" id="input49" v-model="legLeft" value="0">
        <label class="btn" :class="{selected: legLeft.includes('0')}" for="input49"> Absence de sclérose</label>

        <input type="radio" v-on:change="calcScore" id="input69" v-model="legLeft" value="1">
        <label class="btn" :class="{selected: legLeft.includes('1')}" for="input69">Sclérose superficielle</label>

        <input type="radio" v-on:change="calcScore" id="input50" v-model="legLeft" value="2">
        <label class="btn" :class="{selected: legLeft.includes('2')}" for="input50">Sclérose intermédiaire</label>

        <input type="radio" v-on:change="calcScore" id="input51" v-model="legLeft" value="3">
        <label class="btn" :class="{selected: legLeft.includes('3')}" for="input51"> Sclérose adhérente au plan profond</label>
      </section>

      <section>
        <p class="description">pied gauche</p>

        <input type="radio" v-on:change="calcScore" id="input52" v-model="feetLeft" value="0">
        <label class="btn" :class="{selected: feetLeft.includes('0')}" for="input52"> Absence de sclérose</label>

        <input type="radio" v-on:change="calcScore" id="input53" v-model="feetLeft" value="1">
        <label class="btn" :class="{selected: feetLeft.includes('1')}" for="input53">Sclérose superficielle</label>

        <input type="radio" v-on:change="calcScore" id="input54" v-model="feetLeft" value="2">
        <label class="btn" :class="{selected: feetLeft.includes('2')}" for="input54">Sclérose intermédiaire</label>

        <input type="radio" v-on:change="calcScore" id="input55" v-model="feetLeft" value="3">
        <label class="btn" :class="{selected: feetLeft.includes('3')}" for="input55">Sclérose adhérente au plan profond</label>
      </section>

      <h4 class="subtitle">Bas droit</h4>
      <section>
        <p class="description">Cuisse droite</p>

        <input type="radio" v-on:change="calcScore" id="input56" v-model="thigRight" value="0">
        <label class="btn" :class="{selected: thigRight.includes('0')}" for="input56"> Absence de sclérose</label>

        <input type="radio" v-on:change="calcScore" id="input57" v-model="thigRight" value="1">
        <label class="btn" :class="{selected: thigRight.includes('1')}" for="input57">Sclérose superficielle</label>

        <input type="radio" v-on:change="calcScore" id="input58" v-model="thigRight" value="2">
        <label class="btn" :class="{selected: thigRight.includes('2')}" for="input58">Sclérose intermédiaire</label>

        <input type="radio" v-on:change="calcScore" id="input59" v-model="thigRight" value="3">
        <label class="btn" :class="{selected: thigRight.includes('3')}" for="input59"> Sclérose adhérente au plan profond</label>
      </section>

      <section>
        <p class="description">Jambe droite</p>

        <input type="radio" v-on:change="calcScore" id="input60" v-model="legRight" value="0">
        <label class="btn" :class="{selected: legRight.includes('0')}" for="input60"> Absence de sclérose</label>

        <input type="radio" v-on:change="calcScore" id="input61" v-model="legRight" value="1">
        <label class="btn" :class="{selected: legRight.includes('1')}" for="input61">Sclérose superficielle</label>

        <input type="radio" v-on:change="calcScore" id="input62" v-model="legRight" value="2">
        <label class="btn" :class="{selected: legRight.includes('2')}" for="input62">Sclérose intermédiaire</label>

        <input type="radio" v-on:change="calcScore" id="input63" v-model="legRight" value="3">
        <label class="btn" :class="{selected: legRight.includes('3')}" for="input63"> Sclérose adhérente au plan profond</label>
      </section>

      <section>
        <p class="description">pied droit</p>

        <input type="radio" v-on:change="calcScore" id="input64" v-model="feetRight" value="0">
        <label class="btn" :class="{selected: feetRight.includes('0')}" for="input64"> Absence de sclérose</label>

        <input type="radio" v-on:change="calcScore" id="input65" v-model="feetRight" value="1">
        <label class="btn" :class="{selected: feetRight.includes('1')}" for="input65">Sclérose superficielle</label>

        <input type="radio" v-on:change="calcScore" id="input66" v-model="feetRight" value="2">
        <label class="btn" :class="{selected: feetRight.includes('2')}" for="input66">Sclérose intermédiaire</label>

        <input type="radio" v-on:change="calcScore" id="input67" v-model="feetRight" value="3">
        <label class="btn" :class="{selected: feetRight.includes('3')}" for="input67"> Sclérose adhérente au plan profond</label>

      </section>

      <div class="result">
        {{ result }}
      </div>
    </form>

      <div>
          <ReferencesMedical sourceLink="https://sclerodermie.net/2015/01/score-de-rodnan-calculateur/"/>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import ReferencesMedical from "@/components/ReferencesMedical.vue";

export default defineComponent({
  name:"Rodnan",
    components: { ReferencesMedical },
    mounted(){},
  data(){
    return {
      face:[],
      thorax:[],
      abdomen:[],
      armLeft:[],
      foreArmLeft:[],
      handLeft:[],
      fingerLeft:[],
      armRight:[],
      forArmRight:[],
      handRight:[],
      fingerRight:[],
      thighLeft:[],
      legLeft:[],
      feetLeft:[],
      thigRight:[],
      legRight:[],
      feetRight:[],
      result:0
    };
  },
  methods:{
    calcScore()
    {
      this.result = Number(this.face) + Number(this.thorax) + Number(this.abdomen) + Number(this.armLeft) + Number(this.foreArmLeft) + Number(this.handLeft) + Number(this.fingerLeft) + Number(this.armRight)
        + Number(this.forArmRight) + Number(this.handRight) + Number(this.fingerRight) + Number(this.thighLeft) + Number(this.legLeft) + Number(this.feetLeft) + Number(this.thigRight) + Number(this.legRight) + Number(this.feetRight);
    }
  }
})
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
.Rodnan {
  [type="radio"] {
    display: none;
  }
}
</style>
