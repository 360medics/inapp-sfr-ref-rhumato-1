<template>
  <header class="header">
    <div @click="goBack" class="header__icon header__icon--left" v-if="displayChevronCircle">
      <i class="far fa-chevron-circle-left" />
    </div>

    <router-link  to="/">
      <img class="header__logo" :src="require('@/assets/logo-sfr.png')" alt="Logo sfr" />
      <img class="header__logo" :src="require('@/assets/logo-ref.png')" alt="Logo ref" />
    </router-link>

    <div v-if="isMobile()" class="header__icon header__icon--right">
        <a href="cmd://webview-close" >
          <i class="far fa-times-circle" />
        </a>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import { goBack, isMobile } from '@/global';

export default Vue.extend({
  name: "Header",
  data: () => ({
    displayChevronCircle: false,
  }),
  methods: {
    goBack,
    isMobile,
  },
  watch: {
    $route: function() {
      if (this.$route.path === "/") {
        this.displayChevronCircle = false
      } else  {
        this.displayChevronCircle = true
      }
    }
  },
});
</script>

<style scoped lang="scss">
  .header {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      padding: 1rem 0.75rem;
      background-color: #F1F1F6;
      box-shadow: 0px 3px 6px #00000029;
      border-radius: 0 0 1.06em 1.06em;
      &__logo {
          height: 40px;
      }
      &__icon {
        font-size: 24px;
        position: absolute;
        &--left {
          left: 15px;
        }
        &--right {
          right: 15px;
        }
      }
  }
  .far {
    color: #38bbec;
  }
</style>
