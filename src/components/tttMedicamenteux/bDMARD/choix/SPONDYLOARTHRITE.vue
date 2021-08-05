<template lang="html">
  <section class="SPONDYLOARTHRITE">
    <h2 class="title">Spondyloarthrite</h2>
<span class="line"></span>
    <PNGViewer :src="'SPONDYLOARTHRITE.png'" myID="'SPONDYLOARTHRITE.png'" class="image"/>
  </section>
</template>

<script lang="js">
import PNGViewer from "@/components/PNGViewer";
export default {
  name: 'SPONDYLOARTHRITE',
  components: { PNGViewer }
}
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .SPONDYLOARTHRITE {
      padding: 0 15px;
      text-align: left;
    }

.image {
  margin-top: 50px;
}
</style>
