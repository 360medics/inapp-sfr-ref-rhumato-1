<template>
    <div class="sublistPage">
        <main class="subMenu">
            <h1 class="subMenu__title">
                {{ submenu.name }}
            </h1>
            <h1 v-if="displayAideCodage" class="subMenu__title">Aide au codage</h1>
            <SearchBar @onSearch="handleFindResult" @onClear="handleRemoveSearch" class="sublist__searchbar"/>
            <ListSearchResult :resultItems="listResult" :notFound="resultNotFound" v-if="displayResultSearch"/>
            <component v-if="displayAideCodage" v-bind:is="AideCodage" />
            <div class="sub-categories" v-if="!displayResultSearch">
                <div v-for="(subChildren, index) in submenu.children" :key="submenu.name + index" class="subMenu__item">
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
import { defineComponent } from "vue";
import DataService from "@/service/DataService";
import TreeMenu from "@/components/TreeMenu.vue";
import SearchBar from "@/components/search/SearchBar.vue";
import ListSearchResult from '@/components/ListSearchResult.vue';
import AideCodage from '@/components/AideCodage.vue';

export default defineComponent({
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
      AideCodage,
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
@import 'src/sass/global.scss';
.sublistPage {
  width: 100%;
}
.sublist__searchbar {
  margin: 0;
  padding: 0;
}
.sub-categories {
  margin-top: $gutter_small;
}
.subMenu {
  padding: 0 .75rem;

  &__title {
    margin: $gutter_medium 0;
    font-weight: 500;
    line-height: 1.2;
    text-align: left;
    font-size: calc(1.15rem + 1.5vw);
    color: #4c2b62;
  }
  &__item {
    font-weight: 700;
    border-bottom: 1px solid $borderColor;
    color: $darkColor;
    display: flex;
    align-items: center;
  }
}

</style>
