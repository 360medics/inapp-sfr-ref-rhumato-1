<template lang="html">
  <section class="FRAX">
    <h2>FRAX (Fracture Risk Assessment Tool)</h2>
    <span class="line"></span>

    <p>
      L'outil FRAX® a été développé pour évaluer le risque de fracture des
      patients. Il repose sur des modèles de patients individuels qui intègrent
      les risques associés aux facteurs de risque cliniques ainsi qu'à la
      densité minérale osseuse (DMO) au niveau du col du fémur. Les modèles
      FRAX® ont été développés à partir d'études de cohortes basées sur la
      population d'Europe, d'Amérique du Nord, d'Asie et d'Australie. Les
      algorithmes FRAX® donnent la probabilité de fracture de 10 ans. Le
      résultat est une probabilité de 10 ans de fracture de la hanche et la
      probabilité de 10 ans d'une fracture ostéoporotique majeure (épineuse
      clinique, avant-bras, fracture de la hanche ou de l'épaule).
    </p>

    <a
      :href="
        externLink('https://www.sheffield.ac.uk/FRAX/tool.aspx?country=12')
      "
      class="label-wrapper"
      :target="isMobile() ? '_self' : '_blank'"
    >
      Calculer en ligne
    </a>
  </section>
</template>

<script lang="js">
import SubListPage from "@/views/SubListPage";

export default {
  name: 'FRAX',
  components: {SubListPage},

  mounted() {
  },
  data() {
    return {

    };
  },
  methods: {
    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    },
    externLink(link) {
      let finalLink = '';
      let target = '_blank';

      if (this.isMobile()) {
        finalLink = 'medics://viewer?m_source=';
        target = '_self';
      }
      finalLink += link;
      return finalLink;
    },
  },

}
</script>

<style scoped lang="scss">
@import 'src/sass/global.scss';
@import 'src/sass/global';

.FRAX {
  [type='number'] {
    width: 60px;
  }

  div {
    margin: 10px 0;
  }
}
</style>
