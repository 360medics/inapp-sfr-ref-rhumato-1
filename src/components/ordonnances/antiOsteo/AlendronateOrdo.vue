<template lang="html">
  <section class="Methotrexate">
    <h2 class="title">Ordonnance bisphosphonates oraux (ex.Alendronate)</h2>
    <span class="line"></span>
    <PNGViewer :src="'alen.png'" :myID="'alen.png'"/>
  </section>
</template>

<script lang="js">
import PNGViewer from "@/components/PNGViewer";
export default {
  name: 'Alendronate',
  components: { PNGViewer }
}
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
.Methotrexate {
  padding: 0 15px;



  img {
    max-width: 100%;
    border: 1px solid black;
  }
}
</style>
