<template lang="html">
  <section class="AntiIL12_23">
    <h2 class="title">ANTI IL-12/23</h2>
    <span class="line"></span>

    <p class="bold">USTEKINUMAB</p>
    <div>
      DCI : USTEKINUMAB<br />
      NOM COMMERCIAL : STELARA<br />
      VOIE D’ADMINISTRATION : SC<br />
      DEMI-VIE : 3 semaines<br />
      <span class="underline">AMM :</span>
      <ul>
        <li>Psoriasis modéré à sévère</li>
        <li>Rpso</li>
        <li>Maladie de Crohn</li>
        <li>RCH</li>
      </ul>
      <span class="bold">/!\ Pas efficace sur SpA axiale.</span>
      <br />
      <span class="underline">POSOLOGIES :</span>
      <ul>
        <li>
          Psoriasis et Rpso : 45 mg SC à S0 et S4, puis toutes les 12 semaines
        </li>
        <li>
          Maladie de Crohn, et RCH : 1ère injection en IV puis injection SC à S8
          puis toutes les 8 à 12 semaines.
        </li>
      </ul>
    </div>

    <p class="bold">CONTRE-INDICATIONS</p>
    <ul>
      <li>
        Infection active et cliniquement importante (par exemple tuberculose).
      </li>
      <li>Hypersensibilité à la substance ou excipient.</li>
    </ul>

    <p class="bold">PRECAUTIONS</p>
    <ul>
      <li>Infection chronique ou antécédents d’infections récurrentes</li>
      <li>Dépistage tuberculose latente</li>
      <li>
        Tumeurs malignes solides (active ou rémission < 5 ans sauf carcinome
        basocellulaire ou carcinome épidermoïde)
      </li>
      <li>Hypersensibilité au latex</li>
    </ul>
  </section>
</template>

<script lang="js">
export default {
    name: 'AntiIL12_23',


}
</script>

<style scoped lang="scss">
@import 'src/sass/global.scss';
.AntiIL12_23 {
  padding: 0 15px;
  text-align: left;

  .bold {
    font-weight: bold;
  }

  .underline {
    text-decoration: underline;
  }

  .line {
    width: 80%;
    margin: auto;
    border: 1px solid black;
  }
}
</style>
