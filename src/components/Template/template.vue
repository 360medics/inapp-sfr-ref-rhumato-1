<template>
<div>

<h2 class="title">Polyarthrite rhumatoïde,
critères ACR/EULAR</h2>
<p class="description">Critères diagnostics devant une polyarthrite débutante avec des radiographies normales et en l'absence d'un diagnostic d'une autre maladie.</p>
<span class="line">------</span>
<br>
<div class="introduction">test</div>
<form class="form">
<h4 class="subtitle">Atteintes articulaires</h4>
<p class="details">On différencie les grosses et petites articulations :- Grosses articulations : épaule, coude, hanche, genou, cheville. - Petites articulations : toutes autres articulations des membres</p>
<button type="button" class="btn">0 - 1 grosse articulation.</button>
<button type="button" class="btn validate"> 2 à 10 grosses articulations.</button>
<button type="button" class="btn cancel">Primary</button>
<button type="button" class="btn exit">Primary</button>


<h5 class="categorie">Sérologie</h5>
<p class="details">Notes :
 - FR = Facteur rhumatoïde.
 - ACPA = Anticorps anti-peptides/protéines citrulliné(e)s.</p>
<button type="button" class="btn">FR et ACPA négatifs.</button>
<button type="button" class="btn validate"> FR ou ACPA faiblement positif</button>
<button type="button" class="btn cancel"> FR ou ACPA fortement positif</button>
<button type="button" class="btn exit">Primary</button>

<h6 class="categorie">Durée de la synovite</h6>

<button type="button" class="btn">Durée < 6 semaines.</button>
<button type="button" class="btn validate"> Durée ≥ 6 semaines.</button>

<h7 class="categorie">Marqueurs de l'inflammation</h7>

<button type="button" class="btn">VS et CRP normales.</button>
<button type="button" class="btn validate"> VS et CRP anormales.</button>
<br>
<button type="button" class="btn validate"> calcul</button>
<button type="button" class="btn validate"> annule</button>
</form>
<div class="result">score
</div>
<span class="line"></span>

</div>

      <h5 class="categorie">Sérologie</h5>
      <p class="details">
        Notes : - FR = Facteur rhumatoïde. - ACPA = Anticorps
        anti-peptides/protéines citrulliné(e)s.
      </p>
      <button type="button" class="btn">FR et ACPA négatifs.</button>
      <button type="button" class="btn validate">
        FR ou ACPA faiblement positif
      </button>
      <button type="button" class="btn cancel">
        FR ou ACPA fortement positif
      </button>
      <button type="button" class="btn exit">Primary</button>

      <h6 class="categorie">Durée de la synovite</h6>

      <button type="button" class="btn">Durée < 6 semaines.</button>
      <button type="button" class="btn validate">Durée ≥ 6 semaines.</button>

      <h7 class="categorie">Marqueurs de l'inflammation</h7>

      <button type="button" class="btn">VS et CRP normales.</button>
      <button type="button" class="btn validate">VS et CRP anormales.</button>
      <br />
      <button type="button" class="btn validate">calcul</button>
      <button type="button" class="btn validate">annule</button>
      <br /><div class="result">score </div>
    </form>
    <span class="line"></span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({

});
</script>

<style scoped lang="scss"></style>
