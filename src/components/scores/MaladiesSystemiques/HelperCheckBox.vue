<template>
  <div class="HelperCheckBox">
    <section>
      <div class="question">
        <h2>{{ index + 1 }}</h2>
        <div style="display: flex; justify-content: space-between; width: 80%">
          <label class="text" :for="`checkbox` + index">{{ question }}</label>
          <label class="switch">
            <input
              :id="`checkbox` + index"
              type="checkbox"
              @click="checkboxChange($event)"
            />
            <span class="slider round"></span>
          </label>
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SelenaSledaiCheckBox',
  props: ['index', 'question', 'malusScore'],
  methods: {
    checkboxChange(e: any) {
      this.$emit('upwardChange', {
        index: this.index,
        userScore: e.target.checked ? this.malusScore : 0,
      });
    },
  },

});
</script>
<style scoped lang="scss">
@import 'src/sass/global.scss';
@import 'src/sass/global';

.HelperCheckBox {
  .switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 25px;

    input:checked + .slider {
      background-color: #472e5a;
    }

    input:focus + .slider {
      box-shadow: 0 0 1px #f37221;
    }

    input:checked + .slider:before {
      -webkit-transform: translateX(23px);
      -ms-transform: translateX(23px);
      transform: translateX(23px);
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      min-width: 50px;
    }

    .slider:before {
      position: absolute;
      content: '';
      height: 19px;
      width: 19px;
      left: 4px;
      bottom: 3px;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    .slider.round {
      border-radius: 25px;
    }

    .slider.round:before {
      border-radius: 50%;
    }
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .question {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
    align-content: center;
    text-align: left;

    h2 {
      display: flex;
      margin: 0;
      width: calc(15% - 15px);
      text-align: right;
    }

    label {
      display: flex;
      margin: auto 0;
    }

    .text {
      padding-left: 10px;
      padding-right: 15px;
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  }
}
</style>
