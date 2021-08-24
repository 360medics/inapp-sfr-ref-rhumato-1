<template>
    <div class="ReferencesMedical">
        <p v-if="source">source : {{source}}</p>
        <em v-if="message1">
            Interprétation:<br>
            {{message1}}
        </em>
        <br><br>
        <em v-if="message2">
            Réference:<br>
            {{message2}}
        </em>

    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: "ReferencesMedical",
    props: {
        message1: String,
        message2: String,
        source: String
    },
});
</script>
<style scoped>
.ReferencesMedical {
    color: #707070;
    font-weight: 500;
    font-size: 1rem;
    margin: 0 6%;
}
</style>
