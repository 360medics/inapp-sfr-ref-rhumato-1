<template>
  <div class="List">
    <h1 class="ListPage__title">Accueil</h1>
    <SearchBar @onSearch="handleFindResult" @onClear="handleRemoveSearch"/>
      <div :class="displayResultSearch ? 'main__container__result' : ''">
    <ListSearchResult :resultItems="listResult" :notFound="resultNotFound" v-if="displayResultSearch"/>
      <ListPage v-else="displayResultSearch"/>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SearchBar from '@/components/search/SearchBar.vue';
import ListSearchResult from '@/components/ListSearchResult.vue';
import ListPage from '@/components/ListPage.vue';

export default defineComponent({
  name: 'List',
  data: () => ({
    displayResultSearch: false,
    listResult: [],
    resultNotFound: null,
    nodes0: []
  }),
  components: {
    SearchBar,
    ListSearchResult,
    ListPage
  },
  mounted(){
    this.$store.commit('addNavigation', {depth: 0, name: null})
  },
  methods: {
    handleFindResult(result, searching) {
      this.displayResultSearch = searching
      this.listResult = result

      if (this.listResult.length > 0 && searching) {
        this.resultNotFound = false
      }
      if (this.listResult.length === 0 && searching) {
        this.resultNotFound = true
      }
    },
    handleRemoveSearch(remove){
      this.displayResultSearch = remove
    }
  }
});
</script>
<style scoped lang="scss">
.main__container__result {
  padding: 0 0.75rem;
  margin: 0 0.5em;
}
.List {
  width: 100%;
}
.ListPage__title {
  padding: 0 .75em;
  color: #4c2b62;
}
</style>
