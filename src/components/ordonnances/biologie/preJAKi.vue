<template lang="html">
  <section class="preJAKi">
    <h2 class="title">Biologie pré-JAKi</h2>
<span class="line"></span>
    <PNGViewer :src="'pré-JAKiBiologie.png'" :myID="'pré-JAKiBiologie.png'"/>
  </section>
</template>

<script lang="js">
import PNGViewer from "@/components/PNGViewer";
export default {
  name: 'preJAKi',
  components: { PNGViewer }
}
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .preJAKi {
      padding: 0 15px;



      img {
        max-width: 100%;
        border: 1px solid black;
      }
    }
</style>
