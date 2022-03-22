<template>
  <form class="search" >
    <div class="search__wrapper">
        <button class="search__button search__button__find">
          <i class="fas fa-search"  />
        </button>
        <input class="search__input" :value="searchText" placeholder="Rechercher..." @input="handleSearch($event.target.value)" />

        <button v-if="searchText" class="search__button search__button__clear" @click="handleClear">
          <i class="fas fa-times"/>
        </button>
        <div class="search__button-hidden" v-else />
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
  mounted() {
    DataService.loadSearch().then((data: any) => {
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
      justify-content: space-between;
      border: 1px solid #F1F1F6;
      border-radius: 10px;
      padding: 0.4em 0;
      width: 100%;
    }
    &__input {
      outline: none;
      cursor: pointer;
      border: none;
      width: 100%;
    }
    &__button {
      border: none;
      border-radius: 50px;
      background-color: #fff;
      &-hidden {
        flex-basis: 15%;
      }
      &__clear {
        color: $searchBar_iconColor;
        font-size: $searchBar_iconSize;
        flex-basis: 15%;
      }
      &__find {
        color: $searchBar_iconColor;
        font-size: $searchBar_iconSize;
        flex-basis: 15%;
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
