<template>
  <main class="ListPage">
      <div class="ListPage__items" v-for="node0 in nodes0" :key="node0.name">
          <div v-if="node0.withIllustration">
              <div v-if="node0.type === 'list-illustrated-1'" class="ListPage__illustrated__container ListPage__illustrated__container-first">
                  <router-link :to="'/sublist/' + node0.slug" class="ListPage__illustrated__item">
                  <img :src="require('@/assets/menuItem/image_score.svg')" alt="calculator picto" class="ListPage__illustrated__item--bg">
                      <div class="ListPage__illustrated__item--content">
                          <span class="ListPage__illustrated__item--text">{{ node0.name }}</span>
                          <i class="fas fa-chevron-right ListPage__illustrated__item--icon ListPage__illustrated__item--icon-1" />
                      </div>
                  </router-link>
              </div>
              <div v-if="node0.type === 'list-illustrated-2'" class="ListPage__illustrated__container">
                  <router-link :to="'/sublist/' + node0.slug" class="ListPage__illustrated__item">
                      <img :src="require('@/assets/menuItem/image_recos.svg')" alt="recos picto" class="ListPage__illustrated__item--bg">
                      <div class="ListPage__illustrated__item--content">
                          <span class="ListPage__illustrated__item--text">{{ node0.name }}</span>
                          <i class="fas fa-chevron-right ListPage__illustrated__item--icon ListPage__illustrated__item--icon-2" />
                      </div>
                  </router-link>
              </div>
              <div v-if="node0.type === 'list-illustrated-3'" class="ListPage__illustrated__container">
                  <router-link :to="'/sublist/' + node0.slug" class="ListPage__illustrated__item">
                      <img :src="require('@/assets/menuItem/image_bilan_diagnos.svg')" alt="bilan picto" class="ListPage__illustrated__item--bg">
                      <div class="ListPage__illustrated__item--content">
                          <span class="ListPage__illustrated__item--text">{{ node0.name }}</span>
                          <i class="fas fa-chevron-right ListPage__illustrated__item--icon ListPage__illustrated__item--icon-3" />
                      </div>
                  </router-link>
              </div>
          </div>
          <div v-else>
              <router-link :to="'/sublist/' + node0.slug" class="ListPage__item"
              >{{ node0.name }}
                  <i class="fas fa-chevron-right ListPage__item__icon" />
              </router-link>
          </div>
      </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import DataService from '@/service/DataService';

export default Vue.extend({
  name: 'ListPage',
  data: () => ({
    nodes0: []
  }),

  mounted() {
    DataService.load()
      .then(() => {
        this.nodes0 = DataService.$data.tree;
      })
  },
});
</script>

<style scoped lang="scss">
@import 'src/sass/global.scss';

.ListPage {
  display: flex;
  flex-flow: column nowrap;
  padding: 0 0.75rem;
  &__illustrated {
    &__container {
      margin-bottom: $gutter_small;
      @extend %flexCenter;
      &-first {
        margin: $gutter_small 0;
      }
    }
    &__item {
      width: 100%;
      position: relative;
      &--bg {
        width: 100%;
      }
      &--content {
        position: absolute;
        bottom: 0;
        padding: $menuItem_illustrated-contentGutter;
        color: $menuItem_color;
        font-weight: 700;
        display: flex;
        justify-content: space-between;
        width: $menuItem_contentSize;
      }
      &--text {
        display: flex;
        align-items: center;
        font-size:clamp(.75rem, 5vw, 1rem);
      }
      &--icon {
        @extend %flexCenter;
        height: 100%;
        padding: $menuItem_iconGutter;
        border-radius: 7px;
        &-1 {
          color: $tertiaryColor;
          background-color: $tertiaryColor-light ;
        }
        &-2 {
          color: $primaryColor;
          background-color: $primaryColor-light ;
        }
        &-3 {
          color: $secondaryColor;
          background-color: $secondaryColor-light ;
        }
      }
    }
  }

  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: $menuItem_illustrated-contentGutter 0;
    border-bottom: solid 1px $borderColor;
    color: $menuItem_color;
    font-weight: 700;
    text-decoration: none;
    min-height: 2.6em;
    &__icon {
      @extend %flexCenter;
      height: 100%;
      padding: $menuItem_iconGutter;
      border-radius: 7px;
      color: $primaryColor;
      background-color: $primaryColor-light ;
      margin-left: .5em;
    }
  }
  &__items:nth-child(4) {
    border-top:  solid 1px $borderColor;
    margin-top: $gutter_small;
  }
}
</style>
