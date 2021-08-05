<template lang="html">
  <section class="Salazopyrine">
    <h2 class="title">Salazopyrine</h2>
<span class="line"></span>
    <PNGViewer :src="'SalazopyrineCSDMARDS.png'" myID="'SalazopyrineCSDMARDS.png'"/>
  </section>
</template>

<script lang="js">
import PNGViewer from "@/components/PNGViewer";
export default {
  name: 'Salazopyrine',
  components: { PNGViewer }
}
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .Salazopyrine {
      padding: 0 15px;



      img {
        max-width: 100%;
        border: 1px solid black;
      }
    }
</style>
