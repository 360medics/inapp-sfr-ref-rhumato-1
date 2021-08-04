<template>
  <div class="ListPage">
    <h1 class="ListPage__title">Accueil</h1>
    <SearchBar @onSearch="handleFindResult" @onClear="handleRemoveSearch"/>
    <ListSearchResult :resultItems="listResult" :notFound="resultNotFound" v-if="displayResultSearch"/>
    <ListPage v-else="displayResultSearch"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SearchBar from '@/components/search/SearchBar.vue';
import ListSearchResult from '@/components/ListSearchResult.vue';
import ListPage from '@/components/ListPage.vue';

export default Vue.extend({
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
.ListPage__title {
  padding: 0 .75em;
  color: #4c2b62;
}
</style>
