<template>
  <div class="">
    <div v-if="title">
      <h3 class="title">{{ title }}</h3>
    </div>
    <section>
      <p class="details">
        Êtes-vous capable de : {{ question }}
      </p>
      <div class="btn" :class="{ selected: score === 0 }" @click="choice(0)">
          Sans aucune difficulté
      </div>
      <div class="btn"  :class="{ selected: score === 1 }" @click="choice(1)">
          Avec quelques difficultés
      </div>
      <div class="btn"  :class="{ selected: score === 2 }" @click="choice(2)">
          Avec beaucoup de difficultés
      </div>
      <div class="btn" :class="{ selected: score === 3 }" @click="choice(3)">
          Incapable de le faire
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HaqQuestion",
  props: ["index", "title", "question", "malusScore"],
  data() {
    return {
      score: null
    };
  },
  methods: {
    choice(number) {
      this.score = number;
      this.$emit("upwardChange", {
        index: this.index,
        userScore: this.malusScore[number],
      });
    },
  },

});
</script>
<style scoped lang="scss">
@import "src/sass/global.scss";
.HaqQuestion {
  .btn {
    border-color: #8f3ab138;
    border-width: 3px;
    border-style: solid;
    border-radius: 5px;
    max-width: 250px;
    margin: auto;
    margin-top: 6px;
    margin-bottom: 6px;
    cursor: pointer;

    label {
      width: 100%;
      background-color: #e0b5f10a;
      display: block;
      cursor: pointer;
      padding-top: 10px;
      padding-bottom: 10px;

      input:checked + :parent {
        background-color: red !important;
      }


    }

  }
}
</style>
