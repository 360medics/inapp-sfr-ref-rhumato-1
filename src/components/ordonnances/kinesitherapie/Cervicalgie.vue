<template lang="html">
  <section class="Cervicalgie">
    <h2 class="title">Cervicalgie</h2>
    <span class="line"></span>
    <p>
      Ces modèles d’ordonnances sont proposés à titre indicatif, beaucoup de kinésithérapeutes proposent une prise en charge personnalisée à la suite d’un bilan diagnostique, ainsi, il est possible de noter sur votre ordonnance de kinésithérapie :
      <br><br>
      « Merci de réaliser un bilan diagnostique pour … et de proposer un programme adapté »
    </p>
    <PNGViewer :src="'CervicalgieKine.png'" :myId="'CervicalgieKine.png'"/>
  </section>
</template>

<script lang="js">
import PNGViewer from "@/components/PNGViewer";
export default {
  name: 'Cervicalgie',
  components: { PNGViewer }
}
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .Cervicalgie {
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
