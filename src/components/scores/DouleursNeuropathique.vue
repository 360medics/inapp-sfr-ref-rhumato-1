<template>
    <div>
        <h2 class="title">Confirmation du diagnostic de douleur neuropathique par le questionnaire DN4</h2>
        <p class="description">Ce questionnaire a été élaboré et validé chez l’adulte. Pour estimer la probabilité d’une composante neuropathique à la douleur, le patient doit répondre à chaque item des 4 questions ci-dessous par « oui » ou « non ».
            Par extension, ce questionnaire est utilisé chez l’enfant dès qu’il est capable de comprendre et identifier les différentes sensations (entre 8 et 10 ans). Comme souvent l’enfant ne peut remplir le questionnaire lui-même, le médecin ou l’infirmière pose les questions et coche. Un DN4 pédiatrique comportant des illustrations a fait l’objet d’une étude multicentrique de validation (publication en attente),et sera prochainement disponible.</p>
        <span class="line" />

        <div v-for="option in options" :key="option.id">
            <h4 class="subtitle" v-if="option.question">{{option.question}}</h4>
            <div v-else>
                <p class="description">{{ option.describe }}</p>
                <div class="btn__container">
                    <input type="radio" v-model="option.selected" :value="0" :name="option.name" :id="`No-${option.id}`" @change="calculate('decrement', option.value)">
                    <label class="btn btn__halfsize" :class="{selected:  option.selected === 0}" :for="`No-${option.id}`">NON</label>

                    <input type="radio" v-model="option.selected" :value="option.value" :name="option.name" :id="`Yes-${option.id}`" @change="calculate('increment', option.value)">
                    <label class="btn btn__halfsize"  :class="{selected: option.selected === option.value}" :for="`Yes-${option.id}`">OUI</label>
                </div>
            </div>
        </div>

        <div class="description">
            <ul class="description__list">
                Lorsque le praticien suspecte une douleur neuropathique, le questionnaire DN4 est utile comme outil de confirmation du diagnostic. Attention, ce score n’a pas été élaboré pour mesurer l’intensité de la douleur neuropathique, ni pour en faire le suivi sous traitement, il sert à confirmer une probable composante neuropathique à la douleur.
                Ce questionnaire se répartit en 4 questions représentant 10 items à cocher :
                <li class="description__list__item">Le praticien interroge le patient et remplit le questionnaire</li>
                <li class="description__list__item">À chaque item, le patient doit apporter une réponse « oui » ou « non »</li>
                <li class="description__list__item">À la fin du questionnaire, le praticien comptabilise les réponses, 1 pour chaque « oui » et 0 pour chaque « non ».</li>
                <li class="description__list__item">La somme obtenue donne le Score du patient, noté sur 10.</li>
            </ul>
        </div>

        <div class="result">
            <p>{{ total }} Points</p>
            <h3>Douleur neuropathique est :<br> {{ total >= 4 ? "probable" : "improbable" }}</h3>

            <p>Si le score est égal ou supérieur à 4/10, la douleur neuropathique est probable (sensibilité à 82,9% et spécificité 89,9%)</p>
        </div>

        <ReferencesMedical sourceLink="https://pediadol.org/questionnaire-dn4-douleur-neuropathique/" />
        <Footer/>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import ReferencesMedical from "@/components/ReferencesMedical.vue";
import Footer from "@/components/Footer.vue";

export default Vue.extend({
    name: "DouleursNeuropathique",
    components: {Footer, ReferencesMedical},
    data(){
        return{
            total:0,
            options: [
                { question: 'QUESTION 1 : la douleur présente-t-elle une ou plusieurs des caractéristiques suivantes ?'},
                { id: 1,describe: 'Brûlure',value: 1 , name: 'btnradio1', selected: 0 },
                { id: 2,describe: 'Sensation de froid douloureux',value: 1 , name: 'btnradio2', selected: 0 },
                { id: 3,describe: 'Décharges électriques',value: 1 , name: 'btnradio3', selected: 0 },
                { question: 'QUESTION 2 : la douleur est-elle associée dans la même région à un ou plusieurs des symptômes suivants ?'},
                { id: 4,describe: 'Fourmillements',value: 1 , name: 'btnradio4', selected: 0 },
                { id: 5,describe: 'Picotements',value: 1 , name: 'btnradio5', selected: 0 },
                { id: 6,describe: 'Engourdissements',value: 1 , name: 'btnradio6', selected: 0 },
                { id: 7,describe: 'Démangeaisons',value: 1 , name: 'btnradio7', selected: 0 },
                { question: 'QUESTION 3 : la douleur est-elle localisée dans un territoire où l’examen met en évidence :'},
                { id: 8,describe: 'Hypoesthésie au tact',value: 1 , name: 'btnradio8', selected: 0 },
                { id: 9,describe: 'Hypoesthésie à la piqûre',value: 1 , name: 'btnradio9', selected: 0 },
                { question: 'QUESTION 4 : la douleur est-elle provoquée ou augmentée par :'},
                { id: 10,describe: 'Le frottement',value: 1 , name: 'btnradio10', selected: 0 },
            ]
        }
    },
    methods:{
        calculate : function (action,amount) {
            if (action === 'decrement') {
                this.total -= amount
            }
            if (action === 'increment') {
                this.total += amount
            }
        }
    },
});
</script>

<style lang="scss" scoped>
@import "src/sass/global.scss";

.description {
  &__list {
    padding: 0;
    &__item {
      margin-left: 1em;
    }
  }
}
[type="radio"] {
  display: none;
}
</style>
