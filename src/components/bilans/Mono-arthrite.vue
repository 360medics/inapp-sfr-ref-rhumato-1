<template lang="html">
  <section class="Mono-arthrite">
    <h2 class="title">Fiche REF Bilan diagnostique monoarthrite</h2>
    <span class="line"></span>

    <h4>Sources :</h4>
    <p>
      Ma L, Cranney A, Holroyd-Leduc J M. Acute monoarthritis: What is the cause of my patient’s
      <br><br>
      painful swollen joint? CMAJ. 2009 ;180(1):59-65.
      <br><br>
      Byng-Maddick R, Jeyalingam L, Keat A. Management of persistent inflammatory large joint monoarthritis. Clin Rheumatol. 2012;31(12):1657-62.
      <br><br>
      3 principaux étiologies à évoquer:
    </p>
    <ul>
      <li>Infectieux</li>
      <li>Inflammatoire: polyarthrite rhumatoïde, spondyloarthrite, rhumatisme psoriasique</li>
      <li>Microcristallin : goutte, rhumatisme à pyrophosphate de calcium</li>
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
      <li>Autres signes rhumatologiques : enthésite, dactylite, manœuvres de cisaillement des sacro-iliaques positives</li>
      <li>
        Recherche de signes extra-articulaires
        <ul>
          <li>
            Dermatologiques :
            <ul>
              <li>olyarthrite rhumatoïde : nodules rhumatoïdes</li>
              <li>Goutte : tophus</li>
              <li>Psoriasis cutané, psoriasis unguéal</li>
              <li>Vascularite : nécrose, aphtes buccaux et génitaux, nodules, hémorragies unguéales en flammèche, purpura</li>
              <li>Connectivite : phénomène de Raynaud, photosensibilité, rash</li>
              <li>Erythème noueux</li>
            </ul>
          </li>
          <li>Pulmonaire : dyspnée, signes à l’auscultation pulmonaire</li>
          <li>Cardiovasculaire : asymétrie des pouls, palpation des pouls temporaux, souffle à l’auscultation</li>
          <li>ORL : rhinite croûteuse, otite, chondrite nez et oreille, syndrome sec</li>
          <li>Ophtalmo : œil sec, uvéite antérieure aiguë</li>
          <li>Digestif : diarrhée glairanglante</li>
          <li>Neuro : déficit sensitivomoteur, paresthésies, abolition des réflexes, atteinte des paires crâniennes</li>
          <li>Uro : urétrite, douleurs testiculaires</li>
          <li>ADP</li>
        </ul>
      </li>
      <li class="bold">
        Ponction articulation : cytologie, recherche de microcristaux, culture
        <ul>
          <li>Oriente le diagnostic vers les causes mécaniques ou inflammatoires selon la cellularité</li>
          <li>Permet de porter le diagnostic d’hémarthrose et de faire le bilan qui en découle</li>
        </ul>
      </li>
      <li>
        Biologie
        <ul>
          <li>NFS, Plaquettes</li>
          <li>CRP</li>
          <li>Uricémie</li>
          <li>Si suspicion arthrite septique, hémoculture</li>
          <li>Electrophorèse des protéines sériques</li>
          <li>Si liquide inflammatoire et argument une étiologie inflammatoire : anticorps anti-nucléaires, facteur rhumatoïde, anticorps anti-CCP, HLA B27</li>
          <li>Si suspicion arthrite réactionnelle : PCR urinaire Chlamydia trachomatis</li>
          <li>Si suspicion maladie de Lyme : sérologie Lyme</li>
          <li>Si hémarthrose sans notion de traumatisme ou d’anti-coagulant: TP, TCA</li>
        </ul>
      </li>
      <li>Radiographies de l’articulation</li>
    </ul>
    <p>Si premier bilan négatif, IRM de l’articulation pour rechercher une cause locale</p>

    <h4>Orientation diagnostique avec des tableaux cliniques</h4>
    <ul>
      <li><span class="bold">Homme avec profil métabolique :</span> goutte</li>
      <li><span class="bold">Sujet âgé :</span> rhumatisme à pyrophosphate de calcium</li>
      <li><span class="bold">Sujet jeune :</span> arthrite réactionnelle, spondyloarthrite,</li>
      <li><span class="bold">Monoarthrite subaiguë/chronique très fluxionnaire non fébrile stérile sans microcristaux:</span> maladie de Lyme</li>
    </ul>
  </section>
</template>

<script lang="js">
    export default {
        name: 'Mono-arthrite',


    }
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
.Mono-arthrite {
  padding: 0 15px;
  text-align: left;


  .bold {
    font-weight: bold;
  }
}

</style>
