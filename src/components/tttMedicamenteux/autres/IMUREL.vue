<template lang="html">
  <section class="IMUREL">
    <h2 class="title">IMUREL®</h2>
<span class="line"></span>

    <p><span class="bold">Nom commercial</span> : IMUREL®</p>
    <p><span class="bold">DCI</span> : Azathioprine</p>
    <p><span class="bold">Présentation</span> : 25 mg cp, 50 mg cp, 50 mg poudre pour perfusion</p>
    <p><span class="bold">Liste I</span> : remboursement 100 % ; SMR important</p>
    <p><span class="bold">Classification ATC</span> : immunosuppresseurs sélectifs</p>
    <p><span class="bold">Mécanisme d’action</span> : L’azathioprine (AZA) est transformée en 6-mercaptopurine et ensuite métabolisée par plusieurs systèmes enzymatiques qui génèrent les métabolites actifs, inhibiteur de la synthèse des bases puriques (inhibition du 3ème signal) 🡪 inhibe la synthèse d’ADN et la prolifération des LT et LB</p>
    <div>
      <span class="bold">Principales indications</span> :
      <ul>
        <li>prévention des <span class="underline">rejets aigus d’allogreffe d’organe solide en association avec ciclosporine et corticothérapie</span></li>
        <li><span class="underline">pathologies dysimmunitaires</span> telles que les MICI, la polyarthrite rhumatoïde, la spondylarthrite ankylosante, ou les vascularites systémiques, généralement en <span class="blue bold">traitement d'entretien (maintien de la rémission)</span> pour limiter l'usage des glucocorticoïdes</li>
      </ul>
    </div>
    <p><span class="bold">Posologies</span> : 1 à 3 mg/kg/jour (sans dépasser 150 mg/j) ; adapter la dose en cas d’IRC en fonction NFS ; diminuer la posologie en cas d’insuffisance hépatique. Laisser 15 jours entre chaque majoration posologique.</p>
    <div>
      <span class="bold">Contre-indications</span>
      <ul>
        <li>hypersensibilité à l’Azathioprine ou à l'un des excipients</li>
        <li>association aux inhibiteurs de la xanthine oxydase (Allopurinol, Febuxostat)</li>
        <li>allaitement</li>
      </ul>
    </div>

    <div>
      <span class="bold">Effets indésirables</span> : en relation avec une <span class="blue bold">inhibition de la prolifération de types cellulaires à renouvellement rapide</span> (muqueuse digestive, moelle osseuse)
      <ul>
        <li>nausées, leucopénie, thrombopénie, infections généralisées ou opportunistes</li>
        <li>Risque accru de lymphome et d’autres tumeurs malignes, notamment cutanées</li>
      </ul>
    </div>

    <div>
      <span class="bold">Interactions médicamenteuses</span>
      <ul>
        <li><span class="underline">Risque d’augmentation concentration plasmatique de l’IMUREL</span> : Ribavirine, dérivés de l’acide aminosalicylique dont la Sulfasalazine</li>
        <li><span class="underline">Phénytoïne, Fosphénytoïne</span> : diminution absorption digestive par Azathioprine</li>
        <li><span class="underline">AVK</span> : adapter la posologie en raison augmentation métabolisme hépatique par Azathioprine</li>
      </ul>
    </div>

    <div>
      <span class="bold">Précautions d’emploi</span>
      <ul>
        <li>Patients recevant un traitement immunosuppresseur comportant plusieurs médicaments en association : risque accru de lymphomes et autres tumeurs malignes</li>
        <li>Surveiller l’apparition d’une neutropénie</li>
        <li>Précautions d’exposition au soleil</li>
        <li>Ne pas administrer l’Azathioprine en même temps que Cellcept®</li>
      </ul>
    </div>

    <div>
      <span class="bold">Surveillance :</span>
      <ul>
        <li>Surveillance hebdomadaire de l'hémogramme au cours des huit premières semaines de traitement, notamment en cas de forte posologie et chez les patients insuffisants rénaux ou hépatiques puis à intervalles réguliers, au moins tous les 3 mois</li>
      </ul>
    </div>

    <p><span class="bold">Prescription et délivrance</span> : prescription initiale hospitalière</p>

    <div>
      <span class="bold">Astuce de jeunes rhumatologues :</span>
      <ul>
        <li>L’Azathioprine est l’immunosuppresseur peut être utilisé chez la femme enceinte</li>
        <li class="red bold">Contre-indication absolue avec les inhibiteurs de la xanthine oxydase (Allopurinol, Fébuxostat)</li>
        <li>
          Le <span class="blue bold">génotypage TPMT</span> est nécessaire avant l’introduction de l’Azathioprine pour éviter la survenue d’une agranulocytose sous traitement  chez les patients
          <ul>
            <li>Si déficit partiel : diminuer la posologie de 30 à 70 % soit 1-1.5mg/kg/j</li>
            <li>Si déficit complet : contre-indiquer le traitement par Azathioprine</li>
          </ul>
        </li>
      </ul>
    </div>

    <p><span class="bold">Sources</span> : VIDAL, HAS , Pharmacomédicale.org (site des enseignants de Pharmacologie médicale)</p>
  </section>
</template>

<script lang="js">
    export default {
        name: 'IMUREL',


    }
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .IMUREL {
      padding: 0 15px;
      text-align: left;



      .bold {
        font-weight: bold;
      }

      .underline {
        text-decoration: underline;
      }

      .blue {
        color: #4472c4;
      }

      .red {
        color: #c00000;
      }
    }
</style>
