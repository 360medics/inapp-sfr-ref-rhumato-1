<template>
    <div class="ReferencesMedical">
        <div v-if="message1">
            <em>Interprétation:</em><br>
          <p>{{message1}}</p>
        </div>
        <div v-if="message2">
            <em>Réference(s):</em><br>
          <p v-html="message2"></p>
        </div>
        <p v-if="sourceText">source : {{sourceText}}</p>
        <div v-if="sourceLink">
            <a class="ReferencesMedical__link" v-if="!isMobile()" :href="sourceLink" target="_blank">Voir la source</a>
            <a class="ReferencesMedical__link" v-else :href="'medics://viewer?m_source=' + sourceLink">Voir la source</a>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {isMobile} from "@/global";

export default Vue.extend({
    name: "ReferencesMedical",
    props: {
        message1: String,
        message2: String,
        sourceText: String,
        sourceLink: String,
    },
    methods: {
        isMobile
    }
});
</script>
<style lang="scss" scoped>
.ReferencesMedical {
    color: #707070;
    font-weight: 500;
    font-size: 1rem;
    &__link {
        user-select: none;
        text-decoration: none;
        color: #38bbec;
        &:active {
            color: #38bbec;
        }
        &:focus {
            color:#38bbec;
            outline: none;
        }

    }
}
</style>
