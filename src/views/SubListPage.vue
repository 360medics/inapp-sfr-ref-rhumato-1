<template>
  <div>
    <SearchBar @onSearch="handleFindResult" @onClear="handleRemoveSearch" />
    <ListSearchResult :resultItems="listResult" :notFound="resultNotFound" v-if="displayResultSearch"/>
      <component v-if="displayAideCodage" v-bind:is="AideCodage" />

<!--      // TODO v-scrool-to à placer au bon endroit  v-scroll-to="'#menu-id'"-->
      <main class="subMenu" v-if="!displayResultSearch">
      <h1 class="subMenu__title">
        {{ submenu.name }}
      </h1>
      <div class="sub-categories">
        <div v-for="(subChildren, index) in submenu.children" :key="submenu.name + index">
          <tree-menu
                  :index="index"
                  :name="subChildren.name"
                  :type="subChildren.type"
                  :slug="subChildren.slug"
                  :children="subChildren.children"
                  :depth="0"
                  :content="subChildren.content"
          />
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
import AideCodage from '@/components/AideCodage.vue';

export default Vue.extend({
  name: "SubListPage",
  data: () => ({
    submenu: [],
    displayResultSearch: false,
    listResult: [],
    resultNotFound: null,
      displayAideCodage: false,
      AideCodage,
  }),
  components: {
    TreeMenu,
    SearchBar,
    ListSearchResult,
      AideCodage
  },
  mounted() {
    DataService.load()
      .then(() => {
        const slug = this.$route.params.slug;
        const dataTree = DataService.$data.tree;
        // Retrive component name from slug.
        for (let list of dataTree) {
          if (list.slug === slug) {
              if (slug === 'aide-codage') {
                 this.displayAideCodage = true
              } else {
                  this.displayAideCodage = false
                  this.submenu = list;
              }
            break;
          }
        }
      })
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

.subMenu {
  padding: 0 .75rem;
  &__title {
    margin: .5rem 0;
    font-weight: 500;
    line-height: 1.2;
    text-align: left;
    font-size: calc(1.375rem + 1.5vw);
    color: #4c2b62;
  }
}

</style>
