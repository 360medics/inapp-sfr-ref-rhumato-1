<template lang="html">
  <section class="Polyarthrite">
    <h2 class="title">Fiche REF Bilan diagnostique polyarthrite</h2>
    <span class="line"></span>

    <h4>Sources: </h4>
    <p>Recommandations 2014 de la Société française de rhumatologie pour la prise en charge de la polyarthrite rhumatoïde</p>
    <ul>
      <li>
        Si polyarthrite évoluant depuis quelques jours, évoquer en priorité
        <ul>
          <li>Infectieux : viral ++</li>
          <li>Microcristallin</li>
        </ul>
      </li>
      <li>
        Si polyarthrite évoluant depuis plusieurs semaines, évoquer en priorité
        <ul>
          <li>Inflammatoire : polyarthrite rhumatoïde, spondyloarthrite, rhumatisme psoriasique, connectivite</li>
          <li>Microcristallin</li>
        </ul>
      </li>
    </ul>

    <h4>Interrogatoire</h4>
    <ul>
      <li>Début des symptômes</li>
      <li>Premier épisode ?</li>
      <li>Autres manifestations avant cet épisode : dactylite, enthésite, rachialgie</li>
      <li>Altération de l’état général : perte de poids, asthénie ?</li>
      <li>Atcd notamment immunodépression</li>
      <li>Consommation alcool, tabagisme, toxiques</li>
      <li>Médicaments</li>
      <li>Voyage récent ? Randonnée en forêt ?</li>
      <li>Morsure/ piqûre par un animal</li>
      <li>Antécédents familiaux de rhumatisme inflammatoire chronique, MICI, psoriasis</li>
    </ul>

    <h4>Examen clinique</h4>
    <ul>
      <li>Patron de la polyarthrite : symétrique/asymétrique</li>
      <li>Autres signes rhumatologiques : enthésite, dactylite, manœuvres de cisaillement des sacro-iliaques positives</li>
      <li>
        Recherche de signes extra-articulaires
        <ul>
          <li>
            Dermatologiques :
            <ul>
              <li>Polyarthrite rhumatoïde : nodules rhumatoïdes</li>
              <li>Goutte : tophus</li>
              <li>Psoriasis cutané, psoriasis unguéal</li>
              <li>Vascularite : nécrose, aphtes buccaux et génitaux, nodules, hémorragies unguéales en flammèche, purpura</li>
              <li>Connectivite : phénomène de Raynaud, photosensibilité, rash</li>
              <li>Erythème noueux</li>
            </ul>
          </li>
          <li> Pulmonaire : dyspnée, signes à l’auscultation pulmonaire</li>
          <li>Cardiovasculaire : asymétrie des pouls, palpation des pouls temporaux, souffle à l’auscultation</li>
          <li>ORL : rhinite croûteuse, otite, chondrite nez et oreille, syndrome sec</li>
          <li>Ophtalmo : œil sec, uvéite antérieure aiguë</li>
          <li>Digestif : diarrhée glairanglante</li>
          <li>Neuro : déficit sensitivomoteur, paresthésies, abolition des réflexes, atteinte des paires crâniennes</li>
          <li>Uro : urétrite, douleurs testiculaires</li>
          <li>ADP</li>
        </ul>
      </li>
      <li>
        Biologie
        <ul>
          <li>NFS, Plaquettes</li>
          <li>CRP</li>
          <li>Créatininémie, bandelette urinaire</li>
          <li>Bilan hépatique</li>
          <li>Anticorps anti-nucléaires, anticorps anti-CCP, facteurs rhumatoïdes</li>
          <li>Electrophorèse des protéines sériques</li>
          <li>Sérologies VIH, VHB, VHC, CMV, EBV, parvovirus B19</li>
          <li>
            Si arguments pour une connectivite
            <ul>
              <li>CH50, C3, C4</li>
              <li>Anticorps anti-ADN natifs</li>
              <li>Anticorps anticoagulant lupique, anticorps anti-cardiolipine, anti-bêtamicroglobuline</li>
            </ul>
          </li>
          <li>
            Si arguments pour une vascularite
            <ul>
              <li>ANCA</li>
              <li>Cryoglobulinémie</li>
            </ul>
          </li>
          <li>Si argument pour goutte : uricémie</li>
          <li>Si argument pour une spondyloarthrite : HLA B27</li>
        </ul>
      </li>
      <li>
        Imagerie
        <ul>
          <li>Radiographies des articulations mains-poignets, pied + articulations douloureuses et/ou gonflées</li>
          <li>Si arguments connectivite ou PR : radiographie de thorax voire scan thoracique</li>
          <li>Si altération de l’état général chez un patient >50 ans : scanner TAP ou TEP scanner dans l’hypothèse d’un syndrome paranéoplasique</li>
        </ul>
      </li>
    </ul>

  </section>
</template>

<script lang="js">
    export default {
        name: 'Polyarthrite',


    }
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
.Polyarthrite {
  padding: 0 15px;
  text-align: left;

}
</style>
