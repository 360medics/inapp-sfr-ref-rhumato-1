<template>
  <div class="Asas">
    <h2 class="title">Spondylarthrite axiale, Critères ASAS</h2>
    <p class="description"></p>
    <span class="line"></span>
    <div class="information">
      Chez un patient présentant une rachialgie ≥ 3 mois dont l'âge du
      diagnostic est &lsaquo; 45 ans alors on peut classer sa maladie dans la
      forme spondylarthrite axiale
    </div>

    <form class="form">
      <h4 class="subtitle">Sacro-iliite à l'imagerie:</h4>
      <div class="btn" :class="{ selected: toggle1[1] === true }" @click="calcChecked(1, 0)">
        Inflammation fortement évocatrice de sacro-iliite à l'IRM.
      </div>
      <div class="btn" :class="{ selected: toggle1[2] === true }" @click="calcChecked(2, 0)">
        Sacro-iliite radiologique stade ≥ 2 si bilatéral OU ≥ 3 si unilatéral.
      </div>

      <h4 class="subtitle">Signes de spondylarthrite:</h4>
                  <div @click="calcChecked(0, 1)" class="btn" :class="{ selected: toggle2[1] === true }">          Rachialgie inflammatoire.
          </div>
                          <div @click="calcChecked(0, 2)" class="btn" :class="{ selected: toggle2[2] === true }">Arthrite.</div>
                          <div @click="calcChecked(0, 3)" class="btn" :class="{ selected: toggle2[3] === true }">Enthésite (talon).</div>

                          <div @click="calcChecked(0, 4)" class="btn" :class="{ selected: toggle2[4] === true }">Uvéite.</div>
                          <div @click="calcChecked(0, 5)" class="btn" :class="{ selected: toggle2[5] === true }">Dactylite.</div>
                          <div @click="calcChecked(0, 6)" class="btn" :class="{ selected: toggle2[6] === true }">Psoriasis.</div>
                          <div @click="calcChecked(0, 7)" class="btn" :class="{ selected: toggle2[7] === true }">Maladie
            de Crohn / Rectocolite Hémorragique.</div>
                          <div @click="calcChecked(0, 8)" class="btn" :class="{ selected: toggle2[8] === true }">Bonne
            réponse aux AINS.</div>
                          <div @click="calcChecked(0, 9)" class="btn" :class="{ selected: toggle2[9] === true }">Antécédent familial de Spondylarthrite.</div>
                          <div @click="HLA = !HLA; calcChecked(0, 0)" class="btn" :class="{ selected: HLA === true }">HLA-B27
          positif.</div>
                          <div @click="calcChecked(0, 10)" class="btn" :class="{ selected: toggle2[10] === true }">CRP
            augmentée.</div>

    </form>

    <div class="result">
      <p>{{ this.result }}</p>
    </div>


         <div class="info">
      <em>
        Interprétation : Les critères ASAS (Assessment of SpondyloArthritis
        international Society) de 2009 permettent de classer une spondylarthrite
        dans la forme axiale (sensibilité 82,9%, spécificité 84,4%).
      </em>
      <br><br>
      <em>
        Références : Rudwaleit M, Landewe R, van der Heijde D, Listing J, Brandt
        J, Braun J, et al. The development of Assessment of Spondyloarthritis
        international Society (ASAS) Classification Criteria for Axial
        Spondyloarthritis (Part I): classification of paper patients by expert
        opinion including uncertainty appraisal. Ann Rheum Dis. 2009;68:770–6.
        Rudwaleit M, van der Heijde D, Landewé R, Listing J, Akkoc N, Brandt J, et
        al. The development of Assessment of Spondyloarthritis International
        Society classification criteria for axial spondyloarthritis (Part II):
        validation and final selection. Ann Rheum Dis. 2009;68:777–83.
      </em>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({

  data() {
    return {
      result: "",
      toggle1: {
        0: false,
        1: false,
        2: false
      },
      toggle2: {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false
      },
      HLA: false,
    };
  },
  methods: {
    calcChecked(index1, index2) {
      this.toggle1[index1] = !this.toggle1[index1]
      this.toggle2[index2] = !this.toggle2[index2]
      let positif = document.querySelector("#HLA");


      let count_signe_spondylarthite = 0;
      this.toggle2[1] ? count_signe_spondylarthite++ : 0;
      this.toggle2[2] ? count_signe_spondylarthite++ : 0;
      this.toggle2[3] ? count_signe_spondylarthite++ : 0;
      this.toggle2[4] ? count_signe_spondylarthite++ : 0;
      this.toggle2[5] ? count_signe_spondylarthite++ : 0;
      this.toggle2[6] ? count_signe_spondylarthite++ : 0;
      this.toggle2[7] ? count_signe_spondylarthite++ : 0;
      this.toggle2[8] ? count_signe_spondylarthite++ : 0;
      this.toggle2[9] ? count_signe_spondylarthite++ : 0;
      this.toggle2[10] ? count_signe_spondylarthite++ : 0;



      let count_sacro_iliite = 0;
      this.toggle1[1] ? count_sacro_iliite++ : 0;
      this.toggle1[2] ? count_sacro_iliite++ : 0;

      if (
        (count_signe_spondylarthite > 0 && count_sacro_iliite > 0) ||
        (this.HLA && count_signe_spondylarthite > 1) ||
        (this.HLA && count_sacro_iliite > 0)
      ) {
        this.result = "forme spondylarthrite axiale POSITIVE";
      } else {
        this.result = "forme spondylarthrite axiale NEGATIVE";
      }
    },
  },
});
</script>



<style scoped lang="scss">
@import "src/sass/global.scss";

.Asas {

}
</style>
