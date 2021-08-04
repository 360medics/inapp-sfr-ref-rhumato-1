<template lang="html">
  <section class="AntiIL17">
    <h2 class="title">ANTI IL-17A</h2>
    <span class="line"></span>

    <p class="bold">IXEKIZUMAB</p>
    <div>
      DCI : IXEKIZUMAB<br />
      NOM COMMERCIAL : TALTZ<br />
      VOIE D’ADMINISTRATION : SC<br />
      DEMI-VIE : 13 jours<br />
      <span class="underline">AMM :</span>
      <ul>
        <li>Psoriasis modéré à sévère</li>
        <li>Rpso seul ou en association au MTX</li>
        <li>SpA axiale radiographique et non radiographique</li>
      </ul>
      <span class="underline">POSOLOGIES :</span>
      <ul>
        <li>
          Psoriasis : 160 mg à S0 puis 80 mg à S2, S4, S6, S8, S10 et S12 puis
          80 mg toutes les 4 semaines
        </li>
        <li>Rpso et SpA: 160 mg à S0 puis 80 mg toutes les 4 semaines</li>
      </ul>
    </div>
    <div class="line"></div>
    <p class="bold">SECUKINUMAB</p>
    <div>
      DCI : SECUKINUMAB<br />
      NOM COMMERCIAL : COSENTYX<br />
      VOIE D’ADMINISTRATION : SC<br />
      DEMI-VIE : 27 jours<br />
      <span class="underline">AMM :</span>
      <ul>
        <li>Psoriasis modéré à sévère</li>
        <li>Rpso seul ou en association au MTX</li>
        <li>SpA axiale radiographique et non radiographique</li>
      </ul>
      <span class="underline">POSOLOGIES :</span>
      <ul>
        <li>Psoriasis : 300 mg à S0, S1, S2, S3, S4 puis tous les mois.</li>
        <li>Rpso et SpA : 150 mg à S0 S1 S2 S3 S4 puis tous les mois</li>
      </ul>
      Sauf si Rpso avec échec aux anti TNF : 300 mg à S0 S1 S2 S3 S4 puis tous
      les mois
    </div>
    <br />
    <div class="line"></div>
    <p class="bold">BRODALUMAB</p>
    <div>
      DCI : BRODALUMAB<br />
      NOM COMMERCIAL : KYNTHEUM<br />
      VOIE D’ADMINISTRATION : SC<br />
      DEMI-VIE : 11 jours<br />
      <span class="underline">AMM :</span>
      <ul>
        <li>Psoriasis en plaques modéré à sévère</li>
      </ul>
      <span class="underline">POSOLOGIES :</span>
      <ul>
        <li>210 mg SC à S0, S1, S2 puis toutes les 2 semaines</li>
      </ul>
    </div>

    <p class="bold">CONTRE-INDICATIONS</p>
    <div>
      Infection active et cliniquement importante (par exemple tuberculose).<br />
      Hypersensibilité à la substance ou excipient.<br />
    </div>

    <p class="bold">PRECAUTIONS</p>
    <div>
      Infection chronique ou antécédents d’infections récurrentes<br />
      Dépistage tuberculose latente<br />
      Tumeurs malignes solides (active ou rémission < 5 ans sauf carcinome
      basocellulaire ou carcinome épidermoïde)<br />
      Maladie inflammatoire chronique de l’intestin<br />
    </div>
  </section>
</template>

<script lang="js">
export default {
    name: 'AntiIL17',


}
</script>

<style scoped lang="scss">
@import 'src/sass/global.scss';
.AntiIL17 {
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
