<template lang="html">
  <section class="Perfusion">
    <h2 class="title">Perfusion acide zolédronique</h2>
<span class="line"></span>
    <PNGViewer :src="'PerfusionActe.png'" :myID="'PerfusionActe.png'"/>
  </section>
</template>

<script lang="js">
import PNGViewer from "@/components/PNGViewer";
export default {
  name: 'Perfusion',
  components: { PNGViewer }
}
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .Perfusion {
      padding: 0 15px;

      p {
        text-align: left;
      }

      img {
        max-width: 100%;
        border: 1px solid black;
      }
    }
</style>
