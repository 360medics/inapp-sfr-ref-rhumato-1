<template>
  <div class="HipLequesnesQuestion">
    <div v-if="title">
      <h3 class="title">{{ title }}</h3>
    </div>
    <section>
        <h4 class="details">
        {{ question }}
        </h4>
          <div v-for="(item, i) in response" :key="item.value">
            <label class="btn" :class="{selected: oui === malusScore[i]}" :for="`radio` + index + i "> {{ item }}</label>
            <input
              type="radio"
              :value="malusScore[i]"
              :name="`radio` + index"
              :id="`radio` + index + i"
              v-model="oui"
              @click="radioChange($event)"
            />
          </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "HipLequesnesQuestion",
  props: ["index", "title", "question", "response", "malusScore", "scores"],
  data() {
    return {
      oui: ''
    };
  },
  methods: {
    radioChange(e: any) {
        this.$emit("upwardChange", {
            index: this.index,
            userScore: e.target.value,
        })
    },
  },

});
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
.HipLequesnesQuestion {
  div {
    margin-top: 12px;
  }

  [type="radio"] {
    display: none;
  }
}
</style>
