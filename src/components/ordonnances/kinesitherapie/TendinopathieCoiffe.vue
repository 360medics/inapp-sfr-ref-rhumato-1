<template lang="html">
    <section class="TendinopathieCoiffe">
      <h2 class="title">Tendinopathie coiffe rotateurs</h2>
<span class="line"></span>

      <p>
        Ces modèles d’ordonnances sont proposés à titre indicatif, beaucoup de kinésithérapeutes proposent une prise en charge personnalisée à la suite d’un bilan diagnostique, ainsi, il est possible de noter sur votre ordonnance de kinésithérapie :
        <br><br>
        « Merci de réaliser un bilan diagnostique pour … et de proposer un programme adapté »
      </p>
      <PNGViewer :src="'TendinopathieCoiffeKine.png'" :myID="'TendinopathieCoiffeKine.png'"/>
    </section>
</template>

<script lang="js">
import PNGViewer from "@/components/PNGViewer";
export default {
  name: 'TendinopathieCoiffe',
  components: { PNGViewer }
}
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .TendinopathieCoiffe {
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
