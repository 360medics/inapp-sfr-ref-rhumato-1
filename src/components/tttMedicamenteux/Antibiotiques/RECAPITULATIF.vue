<template>
<div class="recapitulatif">
    <h2 class="title">Récapitulatif</h2>
    <span class="line" />

    <PNGViewer :src="'recap_antibiotique.png'" :myID="'recap_antibiotique'"/>

</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PNGViewer from '@/components/PNGViewer.vue'

export default defineComponent({
    name: "RECAPITULATIF",
    components: {PNGViewer}
})
</script>

<style scoped>

</style>
