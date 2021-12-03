<template lang="html">
  <section class="Methotrexate">
    <h2 class="title">Recharge 25-OH Vitamine D</h2>
    <span class="line"></span>
    <PNGViewer :src="'vitd.png'" :myID="'vitd.png'"/>
  </section>
</template>

<script lang="js">
import PNGViewer from "@/components/PNGViewer";
export default {
  name: 'Vitamined',
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
