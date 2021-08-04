<template lang="html">
  <section class="CalculCalcemie">
    <h2>CALCUL DE LA CALCEMIE CORRIGEE</h2>
    <span class="line"></span>

    <div>
      <label for="calcemie">Calcémie (mmol/L):</label>
      <input type="number" id="calcemie" v-model="calcemie" @change="calcul" />
    </div>

    <div>
      <label for="albuminemie">Albuminémie (g/L):</label>
      <input
        type="number"
        id="albuminemie"
        v-model="albuminemie"
        @change="calcul"
      />
    </div>

    <div class="result">
      <h4>Résultat: {{ result }}</h4>
    </div>
    <p class="score_ref">
      Références:<br />
      Messaï E. "Guide des chiffres et formules utiles en pratique médicale" Ed.
      Arnette Blackwell (Paris) 1995. ISBN : 2-7184-0770-0 Manuel Merck
      troisième édition. Ed. d'Après (Paris) 1999. ISBN : 2-914313-00-4
    </p>
  </section>
</template>

<script lang="js">
export default {
    name: 'CalculCalcemie',


    data() {
        return {
          calcemie: 0,
          albuminemie: 0,
          result: 0,
        };
    },
    methods: {
      calcul() {
        this.result = parseInt(this.calcemie) - 0.025 * (parseInt(this.albuminemie) - 40)
      }
    },

}
</script>

<style scoped lang="scss">
@import 'src/sass/global.scss';

.CalculCalcemie {
  [type='number'] {
    width: 60px;
  }

  div {
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    padding: 15px;
    line-height: 40px;
  }

  input {
    height: 30px;
    padding: 0 3px;
    background: #EDECF4 0% 0% no-repeat padding-box;
    border-radius: 5px;
    opacity: 1;
    margin: .75em;
    border: none;
    width: 60px;
  }
}
</style>
