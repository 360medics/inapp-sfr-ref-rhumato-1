<template>
  <div>
    <div v-if="colorCount > 3" class="haq__result" :class="{
             haq__result__green : scoreResult < lowValue,
             haq__result__orangeLight: (scoreResult >= lowValue && scoreResult < midValue),
             haq__result__orange : (scoreResult >= midValue && scoreResult < highValue),
             haq__result__red: scoreResult >= highValue
           }"
    >
      Résultat: {{ scoreResult }}
    </div>

    <div v-if="colorCount === 3" class="haq__result" :class="{
          haq__result__green : scoreResult < lowValue,
          haq__result__orange : (scoreResult >= lowValue && scoreResult < highValue),
          haq__result__red: scoreResult == highValue
        }"
    >
      Résultat: {{ scoreResult }}
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "ReferenceScore",
  props: {
    scoreResult: Number,
    lowValue: Number,
    midValue: Number,
    highValue: Number,
    colorCount: Number
  }
}
</script>

<style scoped lang="scss">

.haq__result {
  position: fixed;
  bottom: 0;
  color: white;
  border-radius: .5em;
  padding: 1rem !important;
  margin-bottom: .5rem !important;
  font-weight: bold;
  &__green {
    background-color: #a5c90f;
  }
  &__orangeLight{
    background-color: #ffb366;
  }
  &__orange{
    background-color: #ff8829;
  }
  &__red{
    background-color: #cc0000;
  }

}

</style>
