<template lang="html">
  <section class="Methotrexate">
    <h2 class="title">Injection Tériparatide</h2>
    <span class="line"></span>
    <PNGViewer :src="'teri.png'" :myID="'teri.png'"/>
  </section>
</template>

<script lang="js">
import PNGViewer from "@/components/PNGViewer";
export default {
  name: 'TeriparatideOrdonnance',
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
