<template>
  <form class="search" @input="handleSearch" >
    <div class="search__wrapper">
        <input class="search__input" v-model="searchText"  :placeholder="searchText" />

        <button class="search__button search__button__find">
          <i class="fas fa-search"  />
        </button>

        <button class="search__button search__button__clear" @click="handleClear">
          <i class="fas fa-times" v-if="isSearching"/>
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
    isSearching: false,
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
        this.searchText = "";
        this.isSearching = false
        this.$emit('onClear', this.isSearching )
    },
    handleSearch (event) {
      const fuse = new Fuse(this.list, this.options)
      const inputValue = event.target.value
      if (inputValue === "") {
        this.handleClear()
      }else{
        let fuseSearch = fuse.search(this.searchText)
        this.searchText = inputValue
        this.isSearching = true

        const mySearch = fuseSearch.filter((resultFuse: any) => {
          return !resultFuse.item.children
        })

        this.$emit('onSearch', mySearch, this.isSearching )
      }
    },
  },
};
</script>

<style scoped lang="scss">
  .search {
    position: relative;
    padding: 0 0.75rem;
    margin: 1em 0;

    &__wrapper{
      display: flex;
      align-items: center;
    }
    &__input {
      width: 100%;
      border: 1px solid #F1F1F6;
      border-radius: 1em;
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
      }
      &__find {
        left: 15px;
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
  }
</style>
