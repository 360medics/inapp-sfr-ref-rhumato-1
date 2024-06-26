<template>
<div class="Amor">
  <!-- <h3>http://www.rhumato.info/fiches-pratiques2/166-spondylarthrite-ankylosante/1747-criteres-damor-des-spondylarthropathies</h3> -->
  <h2 class="title">Critères d’amor des spondylarthropathies</h2>
  <span class="line"></span>

  <h4>Sélectionner les critères :</h4>
  <div class="form">
    <div class="btn" :class="{ selected: toggle[1] === true }" @click="toggle[1] === false ? calcPlus(1, 1) : calcLess(1, 1)">
      Douleurs nocturnes ou raideur matinale de siège lombaire ou dorsal (1 points)
    </div>

    <div class="btn" :class="{ selected: toggle[2] === true }" @click="toggle[2] === false ? calcPlus(2, 2) : calcLess(2, 2)">
      Oligoarthrite asymétrique (2 points)
    </div>

    <div class="btn" :class="{ selected: toggle[3] === true }" @click="toggle[3] === false ? calcPlus(1, 3) : calcLess(1, 3 )">
      <label for="inp3">Douleurs fessières sans précision  (1 points)</label>
    </div>

    <div class="btn" :class="{ selected: toggle[4] === true }" @click="toggle[4] === false ? calcPlus(2, 4 ) : calcLess(2, 4)">
      <label for="inp4">Douleurs fessières à bascule  (2 points)</label>
    </div>

    <div class="btn" :class="{ selected: toggle[5] === true }" @click="toggle[5] === false ? calcPlus(2, 5 ) : calcLess(2, 5 )">
      <label for="inp5">Doigt ou orteil en saucisse  (2 points)</label>
    </div>

    <div class="btn" :class="{ selected: toggle[6] === true }" @click="toggle[6] === false ? calcPlus(2, 6) : calcLess(2, 6 )">
      <label for="inp6">Talalgies ou autre enthésopathie  (2 points)</label>
    </div>

    <div class="btn" :class="{ selected: toggle[7] === true }" @click="toggle[7] === false ? calcPlus(2, 7 ) : calcLess(2, 7 )">
      <label for="inp7">Iritis  (2 points)</label>
    </div>

    <div class="btn" :class="{ selected: toggle[8] === true }" @click="toggle[8] === false ? calcPlus(1, 8 ) : calcLess(1, 8 )">
      <label for="inp8">Urétrite non gonococcique ou cervicite (&lt; 1 mois avant arthrite)  (1 points)</label>
    </div>

    <div class="btn" :class="{ selected: toggle[9] === true }" @click="toggle[9] === false ? calcPlus(1, 9 ) : calcLess(1, 9)">
      <label for="inp9">Diarrhée moins d'un moins avant une arthrite  (1 points)</label>
    </div>

    <div class="btn" :class="{ selected: toggle[10] === true }" @click="toggle[10] === false ? calcPlus(2, 10 ) : calcLess(2, 10 )">
      <label for="inp10">Présence ou antécédents : psoriasis et/ou balanite et/ou entérocolopathie  (2 points)</label>
    </div>

    <div class="btn" :class="{ selected: toggle[11] === true }" @click="toggle[11] === false ? calcPlus(3, 11 ) : calcLess(3, 11)">
      <label for="inp11">Sacro-iliite radiologique unilatérale (stade 3) ou bilatérale (stade 2)  (3 points)</label>
    </div>

    <div class="btn" :class="{ selected: toggle[12] === true }" @click="toggle[12] === false ? calcPlus(2, 12 ) : calcLess(2, 12)">
      <label for="inp12">Présence de l'antigène HLA B27 et/ou antécédent familial : SPA Reiter psoriasis uvéite entérocolopathie  (2 points)</label>
    </div>

    <div class="btn" :class="{ selected: toggle[13] === true }" @click="toggle[13] === false ? calcPlus(2, 13 ) : calcLess(2, 13 )">
      <label for="inp13">Efficacité rapide (48 h) des AINS ou rechute rapide (48 h) après arrêt  (2 points)</label>
    </div>

  </div>

  <div class="result">
    <span>Spondylarthropathie si 6 points</span>
    <br>
    <span>Sensibilité : 92 % Spécificité : 98 %</span>
    <br>
    <span>Points total: {{ total }}</span>
  </div>

    <ReferencesMedical message2="Amor B  Dougados M Mujiyawa M. Critères diagnostiques des spondylarthropathies. Rev Rhum 1990; 57: 85-89" />
    <Footer/>
</div>


</template>

<script lang="ts">
import { defineComponent } from "vue";
import ReferencesMedical from "@/components/ReferencesMedical.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
    components: { ReferencesMedical, Footer },
    data() {
    return{
    toggle: {
      1:false,
      2:false,
      3:false,
      4:false,
      5:false,
      6:false,
      7:false,
      8:false,
      9:false,
      10:false,
      11:false,
      12:false,
      13:false,
    },
    total: 0,
  }
  },
  methods: {
    calcPlus(num, index){
      this.total+=num;
      this.toggle[index] = true;
    },
    calcLess(num, index){
      this.total-=num
      this.toggle[index] = false;
    }
  }
});
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
@import "src/sass/global";

.Amor {
  .form {
    padding: 5px;

    div {
      display: flex;
      justify-content: space-between;
      text-align: left;
      margin: 10px 0;
    }
  }
}
</style>
