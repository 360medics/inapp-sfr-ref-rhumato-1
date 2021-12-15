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
      &-first {
        margin: $gutter_small 0;
      }
    }
    &__item {
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
      }
      &--icon {
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
    transition: all 0.5s linear;
    border: 1px solid #f7f7f7;
    box-shadow: 0 0 10px 5px rgba(246,246,246,0.69);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.5rem;
    padding: 1em 0;
    color: $menuItem_color;
    background: #ecf1f5;
    border-radius: 5px;
    font-weight: 700;
    text-decoration: none;

    &__icon{
      background: #80cc28;
      color: #ecf1f6;
      border-radius: 0.5rem;
      padding: 0.5em 0.75em;
      margin-left: 1em;
    }
  }
}
</style>
