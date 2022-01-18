<template>
  <main>
    <p v-if="notFound">Aucun résultat</p>
    <ul class="list">
      <li v-for="(result, i) in resultItems" :key="i"  class="list__item">
        <div v-if="result.item.type === 'html'" class="list__item__container">
          <router-link :to="'/score/' + result.item.slug" >
            {{ result.item.name }}
        </router-link>
        </div>

        <div v-if="result.item.type === 'link'" class="list__item__container">
          <a v-if="!isMobile()" :href="result.item.content" target="_blank" rel="noreferrer noopener">{{ result.item.name }}</a>
          <a v-else :href="'medics://viewer?m_source=' + result.item.content">{{ result.item.name }}</a>
        </div>
      </li>
    </ul>
  </main>
</template>

<script lang="ts">
import { isMobile } from '@/global';
export default {
    name: 'ListSearchResult',
    props: {
        resultItems: Array,
        notFound: Boolean,
        aideCodage: Boolean
    },
    methods: {
        isMobile
    }
};
</script>

<style scoped lang="scss">
@import 'src/sass/global.scss';
main {
  margin: 0 !important;
}
.list {
  padding: 0;
  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    &__container{
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
  a {
    display: flex;
    justify-content: space-between;
    flex-basis: 100%;
    padding: $menuItem_illustrated-contentGutter 0;
    border-bottom: solid 1px $borderColor;
    color: $menuItem_color;
    font-weight: 700;
    text-decoration: none;
  }
}
</style>
