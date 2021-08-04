<template>
  <div class="Bvas">
    <h2 class="title">Vascularite - BVAS</h2>
    <p class="line"></p>

    <form class="form">
      <p class ="details">Ne cocher que les manifestations témoignant d’une maladie active (les séquelles présentes depuis plus de 3 mois sont appréciées par le VDI). Si toutes les manifestations représentent une maladie chronique active, mais faiblement (smoldering/grumbling disease) et qu’il n’y aucune manifestation nouvelle récente ou d’aggravation franche, ne cocher pas de cases. Le score indiqué est celui pour une maladie active récemment.</p>

      <div>
        <h3 class="title">Signes généraux</h3>

        <div >
          <input type="checkbox" name="general0" id="general0" v-model="general.checked[0]" @change="updateScore(general)">
          <label class="btn" :class="{selected: general.checked[0]}" for="general0">Myalgies</label>
        </div>

        <div>
          <input type="checkbox" name="general1" id="general1" v-model="general.checked[1]" @change="updateScore(general)">
          <label class="btn" :class="{selected: general.checked[1]}" for="general1">Arthralgies ou arthrites</label>
        </div>

        <div>
          <input type="checkbox" name="general2" id="general2" v-model="general.checked[2]" @change="updateScore(general)">
          <label class="btn" :class="{selected: general.checked[2]}" for="general2">Fièvre  ≥ 38°C</label>
        </div>

        <div>
          <input type="checkbox" name="general3" id="general3" v-model="general.checked[3]" @change="updateScore(general)">
          <label class="btn" :class="{selected: general.checked[3]}" for="general3">Amaigrissement  ≥ 2kg</label>
        </div>

        <p v-if="stable">Sous total {{ general.subTotal }} (max : {{ general.stableMax }})</p>
        <p v-if="!stable">Sous total {{ general.subTotal }} (max : {{ general.unstableMax }})</p>
      </div>

      <div>
        <h3 class="title">Signes cutanés</h3>

        <div>
          <input type="checkbox" name="skin0" id="skin0" v-model="skin.checked[0]" @change="updateScore(skin)">
          <label class="btn" :class="{selected: skin.checked[0]}" for="skin0">Nécrose</label>
        </div>

        <div>
          <input type="checkbox" name="skin1" id="skin1" v-model="skin.checked[1]"  @change="updateScore(skin)">
          <label class="btn" :class="{selected: skin.checked[1]}" for="skin1">Purpura</label>
        </div>

        <div>
          <input type="checkbox" name="skin2" id="skin2" v-model="skin.checked[2]" @change="updateScore(skin)">
          <label class="btn" :class="{selected: skin.checked[2]}" for="skin2">Ulcération(s)</label>
        </div>

        <div>
          <input type="checkbox" name="skin3" id="skin3" v-model="skin.checked[3]" @change="updateScore(skin)">
          <label class="btn" :class="{selected: skin.checked[3]}" for="skin3">Gangrène</label>
        </div>

        <div>
          <input type="checkbox" name="skin4" id="skin4" v-model="skin.checked[4]" @change="updateScore(skin)">
          <label class="btn" :class="{selected: skin.checked[4]}" for="skin4">Autre(s) lésion(s) liée(s) à la vasculatite</label>
        </div>

        <p v-if="stable">Sous total {{ skin.subTotal }} (max : {{ skin.stableMax }})</p>
        <p v-if="!stable">Sous total {{ skin.subTotal }} (max : {{ skin.unstableMax }})</p>
      </div>

      <div>
        <h3 class="title">Atteintes muqueuses et oculaires</h3>

        <div>
          <input type="checkbox" name="mucousAndEyes0" id="mucousAndEyes0" v-model="mucousAndEyes.checked[0]" @change="updateScore(mucousAndEyes)">
          <label class="btn" :class="{selected: mucousAndEyes.checked[0]}" for="mucousAndEyes0">Ulcération bucale / granulome</label>
        </div>

        <div>
          <input type="checkbox" name="mucousAndEyes1" id="mucousAndEyes1" v-model="mucousAndEyes.checked[1]" @change="updateScore(mucousAndEyes)">
          <label class="btn" :class="{selected: mucousAndEyes.checked[1]}" for="mucousAndEyes1">Ulcération génitale</label>
        </div>

        <div>
          <input type="checkbox" name="mucousAndEyes2" id="mucousAndEyes2" v-model="mucousAndEyes.checked[2]" @change="updateScore(mucousAndEyes)">
          <label class="btn" :class="{selected: mucousAndEyes.checked[2]}" for="mucousAndEyes2">Inflammation lacrimale ou salivaire</label>
        </div>

        <div>
          <input type="checkbox" name="mucousAndEyes3" id="mucousAndEyes3" v-model="mucousAndEyes.checked[3]" @change="updateScore(mucousAndEyes)">
          <label class="btn" :class="{selected: mucousAndEyes.checked[3]}" for="mucousAndEyes3">Exophtalmie</label>
        </div>

        <div>
          <input type="checkbox" name="mucousAndEyes4" id="mucousAndEyes4" v-model="mucousAndEyes.checked[4]" @change="updateScore(mucousAndEyes)">
          <label class="btn" :class="{selected: mucousAndEyes.checked[4]}" for="mucousAndEyes4">Episclérite</label>
        </div>

        <div>
          <input type="checkbox" name="mucousAndEyes5" id="mucousAndEyes5" v-model="mucousAndEyes.checked[5]" @change="updateScore(mucousAndEyes)">
          <label class="btn" :class="{selected: mucousAndEyes.checked[5]}" for="mucousAndEyes5">Conjonctivite / blépharite / kératite</label>
        </div>

        <div>
          <input type="checkbox" name="mucousAndEyes6" id="mucousAndEyes6" v-model="mucousAndEyes.checked[6]" @change="updateScore(mucousAndEyes)">
          <label class="btn" :class="{selected: mucousAndEyes.checked[6]}" for="mucousAndEyes6">Baisse progressive d'acuité visuelle / vue trouble</label>
        </div>

        <div>
          <input type="checkbox" name="mucousAndEyes7" id="mucousAndEyes7" v-model="mucousAndEyes.checked[7]" @change="updateScore(mucousAndEyes)">
          <label class="btn" :class="{selected: mucousAndEyes.checked[7]}" for="mucousAndEyes7">Baisse brutale d'acuité visuelle / cécité</label>
        </div>

        <div>
          <input type="checkbox" name="mucousAndEyes8" id="mucousAndEyes8" v-model="mucousAndEyes.checked[8]" @change="updateScore(mucousAndEyes)">
          <label class="btn" :class="{selected: mucousAndEyes.checked[8]}" for="mucousAndEyes8">Uvéite</label>
        </div>

        <div>
          <input type="checkbox" name="mucousAndEyes9" id="mucousAndEyes9" v-model="mucousAndEyes.checked[9]" @change="updateScore(mucousAndEyes)">
          <label class="btn" :class="{selected: mucousAndEyes.checked[9]}" for="mucousAndEyes9">Vascularite rétinienne /  thrombose / hemorragie / exsudats rétiniens</label>
        </div>

        <p v-if="stable">Sous total {{ mucousAndEyes.subTotal }} (max : {{ mucousAndEyes.stableMax }})</p>
        <p v-if="!stable">Sous total {{ mucousAndEyes.subTotal }} (max : {{ mucousAndEyes.unstableMax }})</p>
      </div>

      <div>
        <h3 class="title">Signes ORL</h3>

        <div>
          <input type="checkbox" name="orl0" id="orl0" v-model="orl.checked[0]" @change="updateScore(orl, 0)">
          <label class="btn" :class="{selected: orl.checked[0]}" for="orl0">Epistaxis / croûtes nasales / ulcération ou granulome nasal</label>
        </div>

        <div>
          <input type="checkbox" name="orl1" id="orl1" v-model="orl.checked[1]" @change="updateScore(orl)">
          <label class="btn" :class="{selected: orl.checked[1]}" for="orl1">Sinusite</label>
        </div>

        <div>
          <input type="checkbox" name="orl2" id="orl2" v-model="orl.checked[2]" @change="updateScore(orl)">
          <label class="btn" :class="{selected: orl.checked[2]}" for="orl2">Sténose sous-glottique</label>
        </div>

        <div>
          <input type="checkbox" name="orl3" id="orl3" v-model="orl.checked[3]" @change="updateScore(orl)">
          <label class="btn" :class="{selected: orl.checked[3]}" for="orl3">Baisse d'audition de transmission (conduction)</label>
        </div>

        <div>
          <input type="checkbox" name="orl4" id="orl4" v-model="orl.checked[4]" @change="updateScore(orl)">
          <label class="btn" :class="{selected: orl.checked[4]}" for="orl4">Baisse d'audition de perception (sensorielle)</label>
        </div>

        <p v-if="stable">Sous total {{ orl.subTotal }} (max : {{ orl.stableMax }})</p>
        <p v-if="!stable">Sous total {{ orl.subTotal }} (max : {{ orl.unstableMax }})</p>
      </div>

      <div>
        <h3 class="title">Signes pulmonaires</h3>
        &lt;!&ndash; 7 &ndash;&gt;

        <div>
          <input type="checkbox" name="pulmonary0" id="pulmonary0" v-model="pulmonary.checked[0]" @change="updateScore(pulmonary)">
          <label class="btn" :class="{selected: pulmonary.checked[0]}" for="pulmonary0">Wheezing / sibilants</label>
        </div>

        <div>
          <input type="checkbox" name="pulmonary1" id="pulmonary1" v-model="pulmonary.checked[1]" @change="updateScore(pulmonary)">
          <label class="btn" :class="{selected: pulmonary.checked[1]}" for="pulmonary1">Nodule(s) / nodule(s) excavé(s)</label>
        </div>

        <div>
          <input type="checkbox" name="pulmonary2" id="pulmonary2" v-model="pulmonary.checked[2]" @change="updateScore(pulmonary)">
          <label class="btn" :class="{selected: pulmonary.checked[2]}" for="pulmonary2">Épanchement pleural</label>
        </div>

        <div>
          <input type="checkbox" name="pulmonary3" id="pulmonary3" v-model="pulmonary.checked[3]" @change="updateScore(pulmonary)">
          <label class="btn" :class="{selected: pulmonary.checked[3]}" for="pulmonary3">Infiltrat pulmonaire radiologique</label>
        </div>

        <div>
          <input type="checkbox" name="pulmonary4" id="pulmonary4" v-model="pulmonary.checked[4]" @change="updateScore(pulmonary)">
          <label class="btn" :class="{selected: pulmonary.checked[4]}" for="pulmonary4">Sténose endobronchique</label>
        </div>

        <div>
          <input type="checkbox" name="pulmonary5" id="pulmonary5" v-model="pulmonary.checked[5]" @change="updateScore(pulmonary)">
          <label class="btn" :class="{selected: pulmonary.checked[5]}" for="pulmonary5">Hémoragie intra-alvéolaire</label>
        </div>

        <div>
          <input type="checkbox" name="pulmonary6" id="pulmonary6" v-model="pulmonary.checked[6]" @change="updateScore(pulmonary)">
          <label class="btn" :class="{selected: pulmonary.checked[6]}" for="pulmonary6">Détresse respiratoire</label>
        </div>

        <p v-if="stable">Sous total {{ pulmonary.subTotal }} (max : {{ pulmonary.stableMax }})</p>
        <p v-if="!stable">Sous total {{ pulmonary.subTotal }} (max : {{ pulmonary.unstableMax }})</p>
      </div>

      <div>
        <h3 class="title">Signes cardiaques</h3>
        &lt;!&ndash; 6 &ndash;&gt;

        <div>
          <input type="checkbox" name="cardiac0" id="cardiac0" v-model="cardiac.checked[0]" @change="updateScore(cardiac)">
          <label class="btn" :class="{selected: cardiac.checked[0]}" for="cardiac0">Disparition d'un pouls</label>
        </div>

        <div>
          <input type="checkbox" name="cardiac1" id="cardiac1" v-model="cardiac.checked[1]" @change="updateScore(cardiac)">
          <label class="btn" :class="{selected: cardiac.checked[1]}" for="cardiac1">Atteinte valvulaire</label>
        </div>

        <div>
          <input type="checkbox" name="cardiac2" id="cardiac2" v-model="cardiac.checked[2]" @change="updateScore(cardiac)">
          <label class="btn" :class="{selected: cardiac.checked[2]}" for="cardiac2">Péricardite</label>
        </div>

        <div>
          <input type="checkbox" name="cardiac3" id="cardiac3" v-model="cardiac.checked[3]"  @change="updateScore(cardiac)">
          <label class="btn" :class="{selected: cardiac.checked[3]}" for="cardiac3">Angor</label>
        </div>

        <div>
          <input type="checkbox" name="cardiac4" id="cardiac4" v-model="cardiac.checked[4]"  @change="updateScore(cardiac)">
          <label class="btn" :class="{selected: cardiac.checked[4]}" for="cardiac4">Cardiomyopathie</label>
        </div>

        <div>
          <input type="checkbox" name="cardiac5" id="cardiac5" v-model="cardiac.checked[5]"  @change="updateScore(cardiac)">
          <label class="btn" :class="{selected: cardiac.checked[5]}" for="cardiac5">Insufisance cardiaque congestive</label>
        </div>

        <p v-if="stable">Sous total {{ cardiac.subTotal }} (max : {{ cardiac.stableMax }})</p>
        <p v-if="!stable">Sous total {{ cardiac.subTotal }} (max : {{ cardiac.unstableMax }})</p>
      </div>

      <div>
        <h3 class="title">Manifestations digestives</h3>
        &lt;!&ndash; 3 &ndash;&gt;

        <div>
          <input type="checkbox" name="digestive0" id="digestive0" v-model="digestive.checked[0]"  @change="updateScore(digestive)">
          <label class="btn" :class="{selected: digestive.checked[0]}" for="digestive0">Péritonite</label>
        </div>

        <div>
          <input type="checkbox" name="digestive1" id="digestive1" v-model="digestive.checked[1]"  @change="updateScore(digestive)">
          <label class="btn" :class="{selected: digestive.checked[1]}" for="digestive1">Diarrhée sanglante</label>
        </div>

        <div>
          <input type="checkbox" name="digestive2" id="digestive2" v-model="digestive.checked[2]"  @change="updateScore(digestive)">
          <label class="btn" :class="{selected: digestive.checked[2]}" for="digestive2">Douleur abdominale (angor digestif)</label>
        </div>

        <p v-if="stable">Sous total {{ digestive.subTotal }} (max : {{ digestive.stableMax }})</p>
        <p v-if="!stable">Sous total {{ digestive.subTotal }} (max : {{ digestive.unstableMax }})</p>
      </div>

      <div>
        <h3 class="title">Signes rénaux</h3>
        &lt;!&ndash; 7 &ndash;&gt;

        <div>
          <input type="checkbox" name="renal0" id="renal0" v-model="renal.checked[0]"  @change="updateScore(renal)">
          <label class="btn" :class="{selected: renal.checked[0]}" for="renal0">HTA</label>
        </div>

        <div>
          <input type="checkbox" name="renal1" id="renal1" v-model="renal.checked[1]"  @change="updateScore(renal)">
          <label class="btn" :class="{selected: renal.checked[1]}" for="renal1">Protéinurie > 1+</label>
        </div>

        <div>
          <input type="checkbox" name="renal2" id="renal2" v-model="renal.checked[2]"  @change="updateScore(renal)">
          <label class="btn" :class="{selected: renal.checked[2]}" for="renal2">Hématurie > 10 GR / champ</label>
        </div>

        <div>
          <input type="checkbox" name="renal3" id="renal3" v-model="renal.checked[3]"  @change="updateScore(renal)">
          <label class="btn" :class="{selected: renal.checked[3]}" for="renal3">Créatininémie 125-249 μmol/L</label>
        </div>

        <div>
          <input type="checkbox" name="renal4" id="renal4" v-model="renal.checked[4]"  @change="updateScore(renal)">
          <label class="btn" :class="{selected: renal.checked[4]}" for="renal4">Créatininémie 250-499 μmol/L</label>
        </div>

        <div>
          <input type="checkbox" name="renal5" id="renal5" v-model="renal.checked[5]"  @change="updateScore(renal)">
          <label class="btn" :class="{selected: renal.checked[5]}" for="renal5">Créatininémie > 500 μmol/L</label>
        </div>

        <div>
          <input type="checkbox" name="renal6" id="renal6" v-model="renal.checked[6]"  @change="updateScore(renal)">
          <label class="btn" :class="{selected: renal.checked[6]}" for="renal6">Augmentation de la créatininémie > 30% ou diminution de la clairance de la créatine > 25%</label>
        </div>

        <p v-if="stable">Sous total {{ renal.subTotal }} (max : {{ renal.stableMax }})</p>
        <p v-if="!stable">Sous total {{ renal.subTotal }} (max : {{ renal.unstableMax }})</p>
      </div>

      <div>
        <h3 class="title">Signes neurologiques</h3>
         9 &ndash;&gt;

        <div>
          <input type="checkbox" name="neurologic0" id="neurologic0" v-model="neurologic.checked[0]"  @change="updateScore(neurologic)">
          <label class="btn" :class="{selected: neurologic.checked[0]}" for="neurologic0">Céphalées</label>
        </div>

        <div>
          <input type="checkbox" name="neurologic1" id="neurologic1" v-model="neurologic.checked[1]"  @change="updateScore(neurologic)">
          <label class="btn" :class="{selected: neurologic.checked[1]}" for="neurologic1">Méningite</label>
        </div>

        <div>
          <input type="checkbox" name="neurologic2" id="neurologic2" v-model="neurologic.checked[2]"  @change="updateScore(neurologic)">
          <label class="btn" :class="{selected: neurologic.checked[2]}" for="neurologic2">Confusion, trouble de la conscience</label>
        </div>

        <div>
          <input type="checkbox" name="neurologic3" id="neurologic3" v-model="neurologic.checked[3]"  @change="updateScore(neurologic)">
          <label class="btn" :class="{selected: neurologic.checked[3]}" for="neurologic3">Convulsions (non liées à l'HTA)</label>
        </div>

        <div>
          <input type="checkbox" name="neurologic4" id="neurologic4" v-model="neurologic.checked[4]"  @change="updateScore(neurologic)">
          <label class="btn" :class="{selected: neurologic.checked[4]}" for="neurologic4">Atteinte médullaire (myélite)</label>
        </div>

        <div>
          <input type="checkbox" name="neurologic5" id="neurologic5" v-model="neurologic.checked[5]"  @change="updateScore(neurologic)">
          <label class="btn" :class="{selected: neurologic.checked[5]}" for="neurologic5">Accident vasculaire cérébral</label>
        </div>

        <div>
          <input type="checkbox" name="neurologic6" id="neurologic6" v-model="neurologic.checked[6]"  @change="updateScore(neurologic)">
          <label class="btn" :class="{selected: neurologic.checked[6]}" for="neurologic6">Atteinte de(s) paire(s) crânienne(s)</label>
        </div>

        <div>
          <input type="checkbox" name="neurologic7" id="neurologic7" v-model="neurologic.checked[7]"  @change="updateScore(neurologic)">
          <label class="btn" :class="{selected: neurologic.checked[7]}" for="neurologic7">Aneuropathie périphérique sensitive</label>
        </div>

        <div>
          <input type="checkbox" name="neurologic8" id="neurologic8" v-model="neurologic.checked[8]"  @change="updateScore(neurologic)">
          <label class="btn" :class="{selected: neurologic.checked[8]}" for="neurologic8">Neuropathie périphérique motrice</label>
        </div>

        <p v-if="stable">Sous total {{ neurologic.subTotal }} (max : {{ neurologic.stableMax }})</p>
        <p v-if="!stable">Sous total {{ neurologic.subTotal }} (max : {{ neurologic.unstableMax }})</p>
&lt;!&ndash;      </div>


      <div>
        <input type="checkbox" name="stable" id="stable" @change="toggleStable">
        <label class="btn" :class="{selected: stable}" for="stable">Toutes les atteintes notées sont anciennes et persistantes</label>
      </div>
    </form>

    <p class="result">Total {{ total }} </p>

    <div class="info">
      <span>Interprétation: The Birmingham Vasculitis Activity Score (BVAS) is a method for assessing the activity of vasculitis. Note that scoring ranges are higher when any of the features are new or worse. Creatinine levels can be scored at patient’s first assessment only.</span>
    </div>

    <ReferenceScore  :scoreResult="total"/>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ReferenceScore from "@/components/ReferenceScore.vue";

export default Vue.extend({
  name: "Bvas",
  components: {
    ReferenceScore
  },
/*  mounted() {
    this.calcTotal();
  },*/
  data() {
    return {
      general: {
        checked:    [false, false, false, false], //4
        stable:     [1,1,2,2],
        unstable:   [1,1,2,2],
        stableMax:  2,
        unstableMax: 3,
        subTotal:0,
      },

      skin: {
        checked:    [false, false, false, false, false], //5
        stable:     [1,1,1,2,1],
        unstable:   [2,2,4,6,2],
        stableMax:  3,
        unstableMax: 6,
        subTotal:0,
      },

      mucousAndEyes: {
        checked:    [false, false, false, false, false, false, false, false, false, false], //10
        stable:     [1,1,2,2,1,1,2,0,2,2],
        unstable:   [2,1,4,4,2,1,3,6,6,6],
        stableMax:  3,
        unstableMax: 6,
        subTotal:0,
      },

      orl: {
        checked:    [false, false, false, false, false], //5
        stable:     [3,1,3,1,2],
        unstable:   [6,2,6,3,6],
        stableMax:  3,
        unstableMax: 6,
        subTotal:0,
      },

      pulmonary: {
        checked:    [false, false, false, false, false, false, false], //7
        stable:     [1,0,2,2,2,3,3],
        unstable:   [2,3,4,4,4,6,6],
        stableMax:  3,
        unstableMax: 6,
        subTotal:0,
      },

      cardiac: {
        checked:    [false, false, false, false, false, false, false], //6
        stable:     [1,2,1,2,3,3],
        unstable:   [4,4,3,4,6,6],
        stableMax:  3,
        unstableMax: 6,
        subTotal:0,
      },

      digestive: {
        checked:    [false, false, false], //3
        stable:     [3,3,2],
        unstable:   [9,9,2],
        stableMax:  6,
        unstableMax: 9,
        subTotal:0,
      },

      renal: {
        checked:    [false, false, false, false, false, false, false], //7
        stable:     [1,2,3,2,3,4,0],
        unstable:   [4,4,6,4,6,8,6],
        stableMax:  6,
        unstableMax: 12,
        subTotal:0,
      },

      neurologic: {
        checked:    [false, false, false, false, false, false, false, false], //9
        stable:     [1,1,1,3,3,3,3,3,3],
        unstable:   [1,3,3,9,9,9,6,6,9],
        stableMax:  6,
        unstableMax: 9,
        subTotal:0,
      },

      stable: false,
      total: 0,
    };
  },
  methods: {
    updateScore(category){
      this.subTotal(category);
      this.calcTotal();
    },

    toggleStable(){
      this.stable = !this.stable;
      this.updateAll();
    },

    subTotal(category){
      let values = [];
      let max = 0;
      let count = 0;

      if (this.stable) {
        values = category.stable;
        max = category.stableMax;
      } else {
        values = category.unstable;
        max = category.unstableMax;
      }

      for(let i = 0; i < category.checked.length; i++){
        if (category.checked[i]){
          count += values[i];
        }
      }

      if (count < max){
        category.subTotal = count;
      } else {
        category.subTotal = max;
      }
    },
    updateAll(){
      this.subTotal(this.general);
      this.subTotal(this.skin);
      this.subTotal(this.mucousAndEyes);
      this.subTotal(this.orl);
      this.subTotal(this.pulmonary);
      this.subTotal(this.cardiac);
      this.subTotal(this.digestive);
      this.subTotal(this.renal);
      this.subTotal(this.neurologic);

      this.calcTotal();
    },

    calcTotal(){
      this.total =
        this.general.subTotal +
        this.skin.subTotal +
        this.mucousAndEyes.subTotal +
        this.orl.subTotal +
        this.pulmonary.subTotal +
        this.cardiac.subTotal +
        this.digestive.subTotal +
        this.renal.subTotal +
        this.neurologic.subTotal;
    },
  },

});
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";

.Bvas {
  [type="checkbox"] {
   display: none;
  }
}

</style>
