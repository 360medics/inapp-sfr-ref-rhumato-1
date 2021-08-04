<template>
  <div class="Caspar">
    <h2 class="title">
      Critères de classification de CASPAR pour le rhumatisme psoriasique
    </h2>
    <form>
      <section>
        <p>
          1. Atteinte rhumatologique inflammatoire (périphérique, axiale ou
          enthésitique)
        </p>
        <div
          class="btn"
          :class="{ selected: isFirstCriteriaChecked === true }"
          @click="isFirstCriteriaChecked = !isFirstCriteriaChecked"
        >
          Oui
        </div>
      </section>

      <section>
        <p>
          2. Présence explicite de psoriasis à l’examen ou dans les antécédents
          :
        </p>
        <div>
          <div class="btn" :class="{ selected: check[1] }" @click="update(1)">
            lésion psoriasique cutanée ou du scalp diagnostiquée par un médecin
            à l’examen physique
          </div>
        </div>
        <div>
          <div class="btn" :class="{ selected: check[2] }" @click="update(2)">
            Notion de psoriasis selon le patient ou un médecin
          </div>
        </div>
        <div>
          <div class="btn" :class="{ selected: check[3] }" @click="update(3)">
            Antécédent familial de psoriasis au 1er ou 2nd degré
          </div>
        </div>
      </section>

      <section>
        <p>3. Atteinte unguéale</p>
        <div>
          <div class="btn" :class="{ selected: check[4] }" @click="update(4)">
            Dystrophie unguéale psoriasique à l’examen clinique : onycholyse,
            ongles ponctués ou hyperkératose
          </div>
        </div>
      </section>

      <section>
        <p>4. Négativité du facteur rhumatoïde</p>
        <div>
          <div class="btn" :class="{ selected: check[5] }" @click="update(5)">
            Absence de FR sérique (ELISA ou néphélométrie)
          </div>
        </div>
      </section>

      <section>
        <p>5. Présence ou antécédent de dactylite</p>
        <div>
          <div class="btn" :class="{ selected: check[6] }" @click="update(6)">
            Dactylite actuelle diagnostiquée par un médecin
          </div>
        </div>
        <div>
          <div class="btn" :class="{ selected: check[7] }" @click="update(7)">
            Antécédent de dactylite constatée par un médecin
          </div>
        </div>
      </section>

      <section>
        <p>6.Aspect radiologique de construction osseuse</p>
        <div>
          <div class="btn" :class="{ selected: check[8] }" @click="update(8)">
            Présence de signes radiographiques de construction osseuse
            juxta-articulaire (radiographies des mains et des pieds)
          </div>
        </div>
      </section>
      <button type="button" class="btn validate" v-on:click="calcScore">
        calculer
      </button>
    </form>
    <p>
      Pour retenir le diagnostic: Il faut le critère 1 + au moins 3 points
      (Se:91.4%, Sp: 98.7%).
    </p>
    <div class="result">
      <p>{{ score }}</p>
      <p>{{ interpretation }}</p>
    </div>
    <p class="score_ref">
      Références:<br />
      Lukas C, Landewe R, Sieper J, Dougados M, Davis J, Braun J, et al. Taylor
      W, Gladman D, Helliwel P et al. Arthr & Rheum 2006; 54: 2665-73
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Caspar',

  data() {
    return {
      isFirstCriteriaChecked: false,
      check: {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
      },
      values: [0, 2, 1, 1, 1, 1, 1, 1, 1],
      interpretation: '',
      score: 0,
    };
  },
  methods: {
    update(key) {
      this.check[key] = !this.check[key];
    },
    calcScore() {
      let count = 0;
      for (let index = 0; index < this.values.length; index++) {
        if (this.check[index]) {
          count += this.values[index];
        }
      }
      this.score = count;
      this.getInterpretation();
    },
    getInterpretation() {
      if (this.isFirstCriteriaChecked == true && this.score >= 3) {
        this.interpretation =
          'rhumatisme psoriasique POSITIF (Se:91.4%, Sp: 98.7%)';
      } else {
        this.interpretation = 'rhumatisme psoriasique NEGATIF';
      }
    },
  },
});
</script>

<style scoped lang="scss">
@import 'src/sass/global.scss';
@import 'src/sass/global';

.Caspar {
  .btn {
    height: unset;
  }
}
</style>
