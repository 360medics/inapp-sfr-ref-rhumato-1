<template>
  <div>
    <div class='slider-component'>
      <div class='slidecontainer'>
        <input
          ref='input'
          v-model='currentValue'
          type='range'
          :min='min'
          :max='max'
          class='slider'
          @input='onInput'
          :step='step'
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      required: true,
    },
    min: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
    step: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      currentValue: parseInt(this.value, 10),
    };
  },
  computed: {
    zoomDisplay() {
      const zoom = parseInt(this.currentValue, 10);
      return `${zoom / 10}x`;
    },
  },
  methods: {
    onInput() {
      // this.currentValue is a string because HTML is weird
      this.currentValue = parseInt(this.currentValue, 10);
      this.$emit('zoom', this.currentValue);
    },
    increment() {
      // if true parse current then increment
      // eslint-disable-next-line
      (this.currentValue) < 50 && (this.currentValue += this.step);
      this.onInput();
    },
    decrement() {
      // eslint-disable-next-line
      this.currentValue > 10 && (this.currentValue -= this.step);
      this.onInput();
    },
  },
};
</script>

<style scoped>
.slider-component .slidecontainer {
  width: 100%;
}
.slider-component {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: baseline;
}

.slider-component .slidecontainer .slider {
  -webkit-appearance: none;
  appearance: none;
  height: 11px;
  border-radius: 5px;
  background: #fefefe;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}

.slider-component .slidecontainer .slider:hover {
  opacity: 1;
}
.slider {
  width: 95%;
}

.slider-component .slidecontainer .slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 24px;
  height: 24px;
  background: #38bbec;
  box-shadow: 0px 1px 2px #00000029;
  cursor: pointer;
  border-radius: 50%;
}

.slider-component .slidecontainer .slider::-moz-range-thumb {
  width: 18px;
  height: 18px;
  background: #d8a22e;
  cursor: pointer;
  border-radius: 50%;
}
.zoom-display {
  background-color: #38bbec;
  border-radius: 8px;
  box-shadow: 0px 3px 5px #00000029;
  width: 50px;
  height: 25px;
  font: normal normal bold 18px/23px Helvetica Neue;
  letter-spacing: 0.29px;
  color: #fefefe;
  text-shadow: 0px 1px 2px #0000004d;
  opacity: 1;
  margin-left: 2px;
}
.plusminus {
  max-width: 25px;
}
</style>
