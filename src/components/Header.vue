<template>
  <header class="header">
      <div v-if="displayChevronCircle" class="fas fa-chevron-left header__icon header__icon--left" @click="goBack" />
      <div v-else class="fas fa-chevron-left header__icon header__icon--left-disabled" />

    <router-link  to="/">
      <img class="header__logo" :src="require('@/assets/logo-sfr.png')" alt="Logo sfr" />
      <img class="header__logo" :src="require('@/assets/logo-ref.png')" alt="Logo ref" />
    </router-link>

      <div v-if="isMobile()">
          <a href="cmd://webview-close" class="header__icon header__icon--right">
              <i class="far fa-times-circle" />
          </a>
      </div>

      <div v-else />
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { goBack, isMobile } from '@/global';

export default defineComponent({
  name: "Header",
  data: () => ({
    displayChevronCircle: false,
  }),
  methods: {
    goBack,
    isMobile,
  },
  mounted() {
    this.displayChevronCircle = this.$route.path !== "/";
  },
  watch: {
    $route: function() {
      this.displayChevronCircle = this.$route.path !== "/";
    }
  },
});
</script>

<style scoped lang="scss">
@import 'src/sass/global.scss';

.header {
  width: $header_width;
  padding: $header_gutter 0;
  background-color: $header_BackgroundColor;
  box-shadow: $header_shadow;
  border-radius: 0 0 $header_radius $header_radius;
  @include positionFixed(0, 0, null, 0);
  @extend %flexAlignCenter;
  justify-content: space-between;
  z-index: 10;
  &__logo {
    max-width: $headerLogo_width;
    height: $headerLogo_height;
    text-decoration: none;
  }
  &__icon {
    width: $headerIcon_size;
    height: $headerIcon_size;
    &--left {
      @include circleIcon($headerArrowIcon_color);
    }
    &--right {
      margin-right: $headerIcon_gutter;
      font-size: $headerIcon_size * 1.4;
      color: $headerCrossIcon_color;
    }
  }
}
</style>
