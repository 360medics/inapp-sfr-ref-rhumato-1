<template>
<div class="Gsla">

<h2 class="title">Calculateur de risque du GSLA</h2>
<p class="description">En utilisant le calculateur de risque du GSLA, vous confirmez que vous avez lu et accepté les Conditions d’utilisation.</p>

<p class="description">Données d’ordre général</p>

    <label for="basic-url" class="form-label">Age (en années) (20-75 ans)</label>
    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
    <span class="input-group-text" id="basic-addon1">ans</span>

    <label for="basic-url" class="form-label">PA systolique en mmHg ( 100–225 mmHg )</label>
    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
    <span class="input-group-text" id="basic-addon2">mmHg</span>

    <p>Sexe</p>
  <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
  <label class="btn btn-outline-primary" for="btnradio1">Homme</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnradio2">Femme</label>

<p class="description">Lipides sanguins</p>
    <label for="basic-url" class="form-label">LDL (1.94–6.47 mmol/l)</label>
    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
    <span class="input-group-text" id="basic-addon1">mmol/l</span>

    <label for="basic-url" class="form-label">HDL (0.65–1.94 mmol/l)</label>
    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
    <span class="input-group-text" id="basic-addon2">mmol/l</span>

    <label for="basic-url" class="form-label">TG (0.57–4.52 mmol/l)</label>
    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
    <span class="input-group-text" id="basic-addon1">mmol/l</span>

<p class="description">Autres données</p>

    <p class="description">Fumeur</p>
  <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
  <label class="btn btn-outline-primary" for="btnradio1">OUI</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnradio2">NON</label>

<p class="description">Diabète</p>
  <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
  <label class="btn btn-outline-primary" for="btnradio1">OUI</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnradio2">NON</label>

<p class="description">Infarctus du myocarde chez parents, grands-parents ou frères et sœurs avant 60 ans</p>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
  <label class="btn btn-outline-primary" for="btnradio1">OUI</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnradio2">NON</label>


  <input class="btn btn-primary" type="submit" value="Calculer">
  <input class="btn btn-primary" type="reset" value="Effacer les données">

<p class="description">Explications sur le calculateur de risque du GSLA</p>
<p class="description">Pour les personnes qui n’entrent pas d’office dans la catégorie « Risque très élevé » ou « Risque élevé »
    (voir ci-dessous),le calculateur permet de calculer le risque absolu (en %) de survenue d’un événement
    coronarien mortel ou un infarctus du myocarde non mortel sur 10 ans. Pour pouvoir calculer le risque,
    toutes les informations sont exigées. Veuillez donc remplir tous les champs.
    Les taux de LDL, HDL et triglycérides doivent être exprimés en mmol/l. Notez que les valeurs chiffrées saisies ne sont acceptées que
    dans la mesure où elles se situent dans les fourchettes indiquées ; les valeurs chiffrées trop élevées ou trop faibles
    seront automatiquement assimilées à la valeur maximale ou minimale du paramètre en question.</p>

    <p class="description">CATÉGORIE « RISQUE TRÈS ÉLEVÉ »</p>

    <p class="description">Maladie coronarienne/athérosclérose connues1</p>
    <p class="description">Diabète de type 2 ; diabète de type 1 avec atteinte des organes cibles telle que microalbuminurie</p>
    <p class="description">DFG  30 ml/min/1.73 m2</p>

    <p class="description">CATÉGORIE « RISQUE ÉLEVÉ »</p>

    <p class="description">Forte augmentation de certains facteurs de risque :
        LDL-C > 4.9 mmol/l
        PA > 180/110 mmHg</p>

    <p class="description">DFG 30-59 ml/min/1.73 m2</p>

    <p class="description">1IM dans l’anamnèse, SCA, revascularisation coronarienne/artérielle, AVC ischémique, artériopathie périphérique ou prouvé par des tests invasifs ou non-invasifs.</p>

    <p class="description">2Risque absolu (en %) de survenue d’un événement coronarien mortel ou un infarctus du myocarde non mortel sur 10 ans.</p>

    <p class="description">Les patients présentant les maladies/facteurs de risque susmentionnés entrent d’office dans les catégories « risque très élevé » ou « risque élevé » ; le recours au calculateur de risque est superflu pour ces patients.</p>
    <Footer/>
</div>

</template>

<script lang="ts">
import { defineComponent } from "vue"
import Footer from "@/components/Footer.vue";

export default defineComponent({
name:"Gsla",
    components: {Footer},
    mounted()
    {}
})
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
.Gsla {}
</style>
