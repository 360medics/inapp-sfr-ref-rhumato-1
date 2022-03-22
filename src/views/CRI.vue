<template>
  <div class="content-page">
    <h1>Les fiches du CRI</h1>
    <div class="sub-categories">
      <div v-for="(subChildren, index) in listFiches" :key="index">
        <tree-menu
                :index="index"
                :name="subChildren.name"
          :type="subChildren.type"
          :slug="subChildren.slug"
          :children="subChildren.children"
          :depth="0"
          :content="subChildren.content"
        ></tree-menu>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DataService from '@/service/DataService';
import TreeMenu from '@/components/TreeMenu.vue';

export default defineComponent({
  name: 'FichesDuCRI',
  components: { TreeMenu },

  data() {
    return {
      listFiches: [],
    };
  },
  mounted() {
    DataService.loadCRI().then((response) => {
      this.listFiches = response;
    });
  },
});
</script>

<style>
.content-page {
  padding: 0 0.75em;
}
</style>
