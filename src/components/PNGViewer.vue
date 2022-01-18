<template>
  <div :class="myID">
    <img
      class="imageModal"
      @contextmenu.prevent="handler"
      @click="openModal()"
      :src="require(`@/assets/${src}`)"
      ref="imageModal"
      @load="getTrueSize()"
    />
    <transition name="fade">
      <div class="modal" v-if="show">
        <div class="modal__backdrop" @click="closeModal()" />

        <div class="modal__dialog">
          <div class="modal__body">
            <div class="image-container">
              <img
                :ref="zooming(zoomValue)"
                @contextmenu.prevent="handler"
                :src="require(`@/assets/${src}`)"
                @load="setSize"
              />
            </div>
          </div>

          <div class="modal__footer">
            <Slider
              v-on:zoom="childZoom"
              :value="50"
              :min="50"
              :max="100"
              :step="5"
            />
            <button type="button" class="modal__close" @click="closeModal()">
              Fermer
            </button>
          </div>
        </div>
      </div>
    </transition>
      <div class="zoom__icon__container">
          <i class="zoom__icon fa fa-expand" @click="openModal()"/>
      </div>
  </div>
</template>

<script>
import Slider from '@/components/ZoomSlider.vue';

export default {
  name: 'PNGViewer',
  components: {
    Slider,
  },
  props: {
    src: String,
    myID: String,
  },
  data() {
    return {
      show: false,
      zoomValue: 50,
      trueHeight: '',
      trueWidth: '',
    };
  },
  methods: {
    async setZoom() {
      const promise = new Promise((resolve) => {
        setTimeout(() => resolve('done!'), 10);
      });
      await promise;
      const target = this.$refs[`zoom${this.zoomValue}`];
      target.style.setProperty('width', `${(this.trueWidth / 10) * (this.zoomValue / 10)}px`);
    },
    closeModal() {
      this.show = false;
      document.querySelector('body').classList.remove('overflow-hidden');
    },
    openModal() {
      this.show = true;
      document.querySelector('body').classList.add('overflow-hidden');
    },
    zooming(value) {
      return `zoom${value}`;
    },
    childZoom(value) {
      this.zoomValue = value;
      this.setZoom();
    },
    getTrueSize() {
      this.trueHeight = this.$refs.imageModal.naturalHeight;
      this.trueWidth = this.$refs.imageModal.naturalWidth;
    },
    setSize(a) {
      a.target.style.setProperty('width', `${(this.trueWidth / 10) * 5}px`);
    },
  },
};
</script>

<style scoped lang="scss">
.imageModal {
  width: 100%;
}

.modal {
  overflow: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
}

.modal__backdrop {
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1
}

.modal__dialog {
  position: absolute;
  width: 100vw;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  z-index: 2;
}

.modal__close {
  background: #38bbec 0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 5px #060D2C29;
  border-radius: 8px;
  width: 50%;
  margin-left: 25%;
  height: 40px;
  font: normal normal bold 18px/23px Helvetica Neue;
  letter-spacing: 0.29px;
  color: white;
  opacity: 1;
  border: none;
  outline: none;
  margin-top: 15px;
}

.modal__body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 75vh;
}

.modal__footer {
  max-height: 10vh;
  padding-top: 10px;
  padding-right: 20px;
  padding-left: 20px;
}

.image-container {
  overflow: scroll;
  max-width: 100%;
  margin: auto;
}

.zoom__icon {
    width: 1.7em;
    height: 1.7em;
    border-radius: 6px;
    background-color: #fff;
    box-shadow: 0px 1px 3px 1px grey;
    display: flex;
    align-items: center;
    justify-content: center;
&__container{
     display: flex;
     justify-content: flex-end;
     margin-right: 1em;
     margin-top: -1.5em;
 }
}


</style>
