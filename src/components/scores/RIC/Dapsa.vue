<template>
  <div class="Dapsa">
    <h2 class="title">
      DAPSA (Disease Activity in PSoriatic Arthritis) Score
    </h2>
    <span class="line"></span>

    <div class="form">
      <div>
        <label for="qst1">1. Tender Joints Count (0-68), TJ:</label>
        <input type="number" id="qst1" min="0" max="68" v-model="value1" @change="calcul">
      </div>

      <div>
        <label for="qst2">2. Swollen Joints Count (0-66), SJ:</label>
        <input type="number" id="qst2" min="0" max="66" v-model="value2" @change="calcul">
      </div>

      <div>
        <label for="qst3">3. CRP (mg/dl):</label>
        <input type="number" id="qst3" v-model="value3" @change="calcul">
      </div>

      <div style="display: block">
        <p>4. Patient’s assessment of disease activity and pain</p>
        <div>
          <label for="qst4">How active was your rheumatic disease on average during the last week? (0 - not active / 10 - very active)</label>
          <input type="number" id="qst4" min="0" max="10" v-model="value4" @change="calcul">
        </div>

        <div>
          <label for="qst5">How would you describe the overall level of joint pain during the last week? (0 - none / 10 - very severe)</label>
          <input type="number" id="qst5" min="0" max="10" v-model="value5" @change="calcul">
        </div>
      </div>
    </div>

    <div class="result">
      Score: {{ result }}
      <br>
      Disease Activity: {{ activity }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Dapsa",

  data() {
    return {
      value1: null,
      value2: null,
      value3: null,
      value4: null,
      value5: null,
      result: 0,
      activity: ""
    };
  },
  methods: {
    calcul() {
      this.result = parseInt(this.value1) + parseInt(this.value2) + parseInt(this.value3) + parseInt(this.value4) + parseInt(this.value5);

      if (this.result >= 0 && this.result <= 4) {
        this.activity = "Remission";
      }
      else if (this.result >= 5 && this.result <= 14) {
        this.activity = "low";
      }
      else if (this.result >= 15 && this.result <= 28) {
        this.activity = "moderate";
      }
      else if (this.result > 28) {
        this.activity = "high Disease Activity";
      }
    }
  },
});
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
@import "src/sass/global";

.Dapsa {
  [type="radio"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  [type="number"] {
    width: 60px;
  }
  input {
    height: 30px;
    padding: 0 3px;
    background: #EDECF4 0% 0% no-repeat padding-box;
    border-radius: 5px;
    opacity: 1;
    margin: 0 10px;
    border: none;
  }

  .form {
    padding: 5px;

    div {
      display: flex;
      justify-content: space-between;
      line-height: 30px;
      margin: 10px 0;
    }
  }
}
</style>


