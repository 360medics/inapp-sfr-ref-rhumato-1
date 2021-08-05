<template lang="html">
  <section class="preMethotrexate">
    <h2 class="title">Biologie pré-Methotrexate</h2>
<span class="line"></span>
    <PNGViewer :src="'pré-MethotrexateBiologie.png'" myID="'pré-MethotrexateBiologie.png'"/>
  </section>
</template>

<script lang="js">
import PNGViewer from "@/components/PNGViewer";
export default {
  name: 'preMethotrexate',
  components: { PNGViewer }
}
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .preMethotrexate {
      padding: 0 15px;



      img {
        max-width: 100%;
        border: 1px solid black;
      }
    }
</style>
