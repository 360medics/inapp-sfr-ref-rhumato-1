<template>
  <main class="ListPage">
      <div class="ListPage__items" v-for="node0 in nodes0" :key="node0.name">
        <router-link :to="'/sublist/' + node0.slug" class="ListPage__item"
          >{{ node0.name }}
          <i class="fas fa-chevron-down ListPage__item__icon" />
        </router-link>
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
.ListPage {
  display: flex;
  flex-flow: column nowrap;
  padding: 0 0.75rem;
  &__item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 0.5rem;
      padding: 1em;
      color: #472e5a;
      background: #ecf1f5;
      border-radius: 5px;
      font-weight: 700;
      text-decoration: none;
    &__icon{
      background: #80cc28;
      color: #ecf1f6;
      border-radius: 0.5rem;
      padding: 0.5em;
      margin-left: 1em;
    }
  }
}
</style>
