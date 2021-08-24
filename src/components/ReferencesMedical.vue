<template>
    <div class="ReferencesMedical">
        <p v-if="sourceText">source : {{sourceText}}</p>
        <div v-if="sourceLink">
            <a class="ReferencesMedical__link" v-if="!isMobile()" :href="sourceLink" target="_blank">Voir la source</a>
            <a class="ReferencesMedical__link" v-else :href="'medics://viewer?m_source=' + sourceLink">Voir la source</a>
        </div>
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
    margin: 0 6%;
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
