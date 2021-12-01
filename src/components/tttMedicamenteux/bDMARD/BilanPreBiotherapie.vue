<template lang="html">
  <section class="BilanPreBiotherapie">
      <h2 class="title">Bilan Pré-biothérapie</h2>
      <span class="line" />
      <PNGViewer :src="'bilan_pre_biotherapie.png'" myID="'bilan_pre_biotherapie.png'" class="image"/>
  </section>
</template>

<script lang="js">
    import PNGViewer from "@/components/PNGViewer";
    export default {
        name: 'BilanPreBiotherapie',
        components: {PNGViewer},
    }
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .BilanPreBiotherapie {
      padding: 0 15px;
      text-align: left;



      .bold {
        font-weight: bold;
      }

      .underline {
        text-decoration: underline;
      }

      table {
        border-collapse: collapse;
        width: 100%;
        margin-bottom: 15px;
      }

      td, th {
        border: 1px solid black;
        padding: 8px;
        vertical-align: baseline;

        &.sep {
          color: indianred;
          font-weight: bold;
          text-align: center;
        }
      }

      table tr:nth-child(even){background-color: #dbbef8;}
      table tr:nth-child(odd){background-color: #d9d9d9;}

      table th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #a683b1;
        color: black;
      }
    }
</style>
