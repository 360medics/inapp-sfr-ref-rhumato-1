<template>
  <form class="search" >
    <div class="search__wrapper">
        <input class="search__input" :value="searchText" placeholder="Rechercher..." @input="handleSearch($event.target.value)" />

        <button class="search__button search__button__find">
          <i class="fas fa-search"  />
        </button>

        <button v-if="searchText" class="search__button search__button__clear" @click="handleClear">
          <i class="fas fa-times"/>
        </button>
    </div>
  </form>
</template>

<script lang="ts">
import DataService from "@/service/DataService";
import Fuse from "fuse.js";


export default {
  name: 'SearchBar',
  data: () => ({
    searchText: "",
    list: [],
    options: {
      ignoreLocation : true,
      distance: 10,
      threshold: 0.3,
      keys: [
        "name"
      ]
    },
  }),
  async mounted() {
    await DataService.loadSearch().then((data: any) => {
      this.list = data
    })
  },
  methods: {
    handleClear() {
      this.searchText = ""
      this.$emit('onClear', false )
    },
    handleSearch (e) {
      const fuse = new Fuse(this.list, this.options)
      if (e === "") {
        this.handleClear()
      } else {
        this.searchText = e
        let fuseSearch = fuse.search(e)
        const mySearch = fuseSearch.filter((resultFuse: any) => {
          return !resultFuse.item.children
        })

        this.$emit('onSearch', mySearch, true )
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import 'src/sass/global.scss';
  .search {
    position: relative;
    padding: 0 0.75rem;
    margin: 1em .5em;
    &__wrapper{
      display: flex;
      align-items: center;
    }
    &__input {
      width: 100%;
      border: $searchBar_border;
      border-radius: $searchBar_borderRadius;
      outline: none;
      cursor: pointer;
      padding: .4em 2.5em;
    }
    &__button {
      position: absolute;
      border: none;
      border-radius: 50px;
      background-color: #fff;
      &__clear {
        right: 15px;
        color: $searchBar_iconColor;
        font-size: $searchBar_iconSize;
      }
      &__find {
        left: 15px;
        color: $searchBar_iconColor;
        font-size: $searchBar_iconSize;
      }
    }
  }
  input,
  input:active,
  input:focus,
  input:focus-within,
  input:hover,
  input:visited {
    font-size: 16px !important;
    color: $searchBar_placeholderColor;
  }
</style>
