<template lang="html">
  <section class="Injection">
    <h2 class="title">Injection Teriparatide</h2>
<span class="line"></span>
    <PNGViewer :src="'InjectionActe.png'" :myID="'InjectionActe.png'"/>
  </section>
</template>

<script lang="js">
import PNGViewer from "@/components/PNGViewer";
export default {
  name: 'Injection',
  components: { PNGViewer }
}
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .Injection {
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
