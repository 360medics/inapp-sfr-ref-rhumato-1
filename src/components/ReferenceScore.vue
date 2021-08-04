<template>
  <div class="haq-result" :class="{green : scoreResult < 2, orange : (scoreResult >= 2 && scoreResult < 3), red: scoreResult == 3}">
    Résultat: {{ scoreResult }}
  </div>
</template>

<script lang="ts">
export default {
  name: "ReferenceScore",
  props: {
    scoreResult: Number,
    lowValue: Number,
    midlValue: Number,
    highValue: Number,
  }
}
</script>

<style scoped lang="scss">

.haq-result {
  position: fixed;
  bottom: 0;
  color: white;
  border-radius: .5em;
  padding: 1rem !important;
  margin-bottom: .5rem !important;
  font-weight: bold;
}

.haq-result.green {
  background-color: green;
}

.haq-result.orange {
  background-color: orange;
}

.haq-result.red {
  background-color: red;
}

</style>