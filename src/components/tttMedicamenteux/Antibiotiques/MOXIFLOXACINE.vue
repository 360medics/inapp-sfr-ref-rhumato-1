<template lang="html">
  <section class="MOXIFLOXACINE">
    <h2 class="title">MOXIFLOXACINE</h2>
    <span class="line"></span>

    <p>- DCI : MOXIFLOXACINE</p>
    <p><span class="bold">- Nom commercial</span> Tavanic®</p>

    <div>
      - Voie d’administration
      <ul>
        <li>Per os 400 mg</li>
      </ul>
    </div>

    <p class="bold">- Posologies</p>

    <p>- Arthrite septique documentée à Staphylococcus Aureus en bithérapie</p>
    <p>- Arthrite septique documentée à streptocoque en bithérapie</p>
    <p>
      - Arthrite septique documentée à Entérobactérie du groupe 1-2 sensible à
      l’acide nalidixique
    </p>
    <ul>
      <li><span class="bold">Per os :</span> 400 mg une fois par jour</li>
    </ul>

    <div>
      <span class="bold">- Contre-indications</span>
      <ul>
        <li>Hypersensibilité aux fluroquinolones</li>
        <li>Grossesse et allaitement</li>
        <li>Trouble convulsif</li>
        <li>Antécédent de tendinopathie liées aux fluoquinolones</li>
        <li>Allongement du QT</li>
        <li>
          Prise concomitante d’un médicament favorisant les torsades de pointes
          (antiarythmiques, antidepresseurs imipraminique, neuroleptique)
        </li>
        <li>Hypokaliémie</li>
        <li>Insuffisance hépatique grave</li>
      </ul>
    </div>

    <div>
      <span class="bold">- Précautions d’emploi</span>
      <ul>
        <li>
          Prise concomitante d’un médicament prédisposant aux convulsions
          (téophylline, AINS)
        </li>
        <li>Prise concomitatnte d’antivitamine K Insuffisance rénale</li>
      </ul>
    </div>

    <div>
      <span class="bold">- Effets indésirables</span>
      <ul>
        <li>Toxidermie</li>
        <li>Photosensibilisation</li>
        <li>Neutropénie (en association avec la rifampicine)</li>
        <li>Risque d’allongement du QT et torsade de pointe</li>
        <li>Troubles digestifs</li>
        <li>Tendinopathies</li>
      </ul>
    </div>

    <div>
      <span class="bold">- Surveillance</span>
      <ul>
        <li>
          Surveillance de la fonction hépatique et rénale ECG initial et
          surveillance ECG
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="js">
export default {
    name: 'MOXIFLOXACINE',


}
</script>

<style scoped lang="scss">
@import 'src/sass/global.scss';
.MOXIFLOXACINE {
  padding: 0 15px;
  text-align: left;

  .bold {
    font-weight: bold;
  }

  .underline {
    text-decoration: underline;
  }

  .footer {
    font-size: x-small;
    color: gray;
  }
}
</style>
