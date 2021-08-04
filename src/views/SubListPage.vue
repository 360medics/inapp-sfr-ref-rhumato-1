<template>
  <div>
    <SearchBar @onSearch="handleFindResult" @onClear="handleRemoveSearch" />
    <ListSearchResult :resultItems="listResult" :notFound="resultNotFound" v-if="displayResultSearch"/>
    <main class="subMenu" v-else="displayResultSearch">
      <h1 class="subMenu__title">
        {{ submenu.name }}
      </h1>
      <div class="sub-categories">
        <div v-for="(subChildren, index) in submenu.children" :key="submenu.name + index">
          <tree-menu
            :name="subChildren.name"
            :type="subChildren.type"
            :slug="subChildren.slug"
            :children="subChildren.children"
            :depth="0"
            :content="subChildren.content"
          ></tree-menu>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DataService from "@/service/DataService";
import TreeMenu from "@/components/TreeMenu.vue";
import SearchBar from "@/components/search/SearchBar.vue";
import ListSearchResult from '@/components/ListSearchResult.vue';

export default Vue.extend({
  name: "SubListPage",
  data: () => ({
    submenu: [],
    displayResultSearch: false,
    listResult: [],
    resultNotFound: null,
  }),
  components: {
    TreeMenu,
    SearchBar,
    ListSearchResult
  },
  mounted() {
    DataService.load()
      .then(() => {
        const slug = this.$route.params.slug;
        const dataTree = DataService.$data.tree;

        // Retrive component name from slug.
        for (let list of dataTree) {
          if (list.slug === slug) {
            this.submenu = list;
            break;
          }
        }
      })
  },
  methods: {
    handleFindResult(result, searching) {
      console.log(result)
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

.subMenu {
  padding: 0 .75rem;
  &__title {
    margin-top: 0;
    margin-bottom: .5rem;
    font-weight: 500;
    line-height: 1.2;
    text-align: left;
    font-size: calc(1.375rem + 1.5vw);
    color: #4c2b62;
  }
}

</style>
