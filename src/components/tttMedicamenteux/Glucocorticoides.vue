<template lang="html">
  <section class="Glucocorticoides">
    <h2 class="title">Glucocorticoides ou AIS</h2>
<span class="line"></span>

    <p class="bold">DCI et nom commercial</p>

    <PNGViewer :src="'gluco.png'" :myID="'glocu'"/>

<!--    <table>-->
<!--      <tr>-->
<!--        <th>DCI</th>-->
<!--        <th>Nom commercial</th>-->
<!--        <th>Effet minéralocorticoïde</th>-->
<!--        <th>Effet anti-inflammatoire</th>-->
<!--        <th>Doses équivalence</th>-->
<!--      </tr>-->
<!--      <tr class="courte">-->
<!--        <td>Cortisol</td>-->
<!--        <td>Hydrocortisone®</td>-->
<!--        <td>1</td>-->
<!--        <td>1</td>-->
<!--        <td>20</td>-->
<!--      </tr>-->
<!--      <tr class="courte">-->
<!--        <td>Cortisone</td>-->
<!--        <td>Cortisone®</td>-->
<!--        <td>0.8</td>-->
<!--        <td>0.8</td>-->
<!--        <td>25</td>-->
<!--      </tr>-->
<!--      <tr class="moyenne">-->
<!--        <td>Prednisone</td>-->
<!--        <td>Cortancyl®</td>-->
<!--        <td>0.8</td>-->
<!--        <td>4</td>-->
<!--        <td>5</td>-->
<!--      </tr>-->
<!--      <tr class="moyenne">-->
<!--        <td>Prednisolone</td>-->
<!--        <td>Solupred®</td>-->
<!--        <td>0.8</td>-->
<!--        <td>4</td>-->
<!--        <td>5</td>-->
<!--      </tr>-->
<!--      <tr class="moyenne">-->
<!--        <td>Méthylprednisolone</td>-->
<!--        <td>Solumédrol® Médrol®</td>-->
<!--        <td>0.5</td>-->
<!--        <td>5</td>-->
<!--        <td>4</td>-->
<!--      </tr>-->
<!--      <tr class="longue">-->
<!--        <td>Triamcinolone</td>-->
<!--        <td>Hexatrione® Kénacort®</td>-->
<!--        <td>0</td>-->
<!--        <td>5</td>-->
<!--        <td>4</td>-->
<!--      </tr>-->
<!--      <tr class="longue">-->
<!--        <td>Dexaméthasone</td>-->
<!--        <td>Dectancyl® 0.5 mg</td>-->
<!--        <td>0</td>-->
<!--        <td>25-30</td>-->
<!--        <td>0.75</td>-->
<!--      </tr>-->
<!--      <tr class="longue">-->
<!--        <td>Bétaméthasone</td>-->
<!--        <td>Betnesol® Célestène® Diprostène®</td>-->
<!--        <td>0</td>-->
<!--        <td>25-30</td>-->
<!--        <td>0.75</td>-->
<!--      </tr>-->
<!--      <tr class="longue">-->
<!--        <td>Fludrocortisone</td>-->
<!--        <td>Flucortac® 50 µg</td>-->
<!--        <td>250</td>-->
<!--        <td>10</td>-->
<!--        <td>2</td>-->
<!--      </tr>-->
<!--    </table>-->
    <p>Demi-vie <span class="courte">courte (8-12h)</span>, <span class="moyenne">moyenne (12-36h)</span>, <span class="longue">longue (36-54h)</span></p>

    <p class="bold">Mécanismes d’action des GC</p>
    <ul>
      <li>
        Mécanisme d’action <span class="bold">génomique</span> aboutissant à la transcription ou répression de gènes (dès 4-24 h)
        <ul>
          <li>Transactivation : effets thérapeutiques</li>
          <li>Trans répression : effets délétères</li>
        </ul>
      </li>
      <li>Mécanisme d’action <span class="bold">non génomique</span> également impliqué (posologies plus élevées, en quelques min)</li>
    </ul>

    <p class="bold">Pharmacodynamie des effets utiles en cliniques</p>
    <ul>
      <li>
        <span class="underline">Effets anti-inflammatoires</span>
        <ul>
          <li>Inhibition de la production de cytokines pro-inflammatoires (IL-1, IL-6, IL-8, TNFα) 🡪 diminution de l’afflux de macrophages sur le site inflammatoire 🡪 diminution synthèse PG, LT, TXA2</li>
          <li>Inhibition de la phospholipase A2 et de la cyclo-oxygénase de type 2</li>
        </ul>
      </li>
      <li>
        <span class="underline">Effets immunosuppresseurs</span>
        <ul>
          <li>Diminution de l’expression de CMHII 🡪 diminution de l’antigénicité des protéines</li>
          <li>Inhibition de la production d’IL-2 🡪 diminution de la prolifération lymphocytaire</li>
        </ul>
      </li>
      <li class="underline">Effets anti-allergiques, antalgiquesé</li>
    </ul>

    <p class="bold">Principales indications</p>
    <ul>
      <li>Pathologies inflammatoires (connectivites, vascularites, SEP, sarcoïdose, MICI, PTAI, pemphigus, PR…)</li>
      <li>Infections (méningites bactériennes excepté méningocoque, péricardite tuberculeuse)</li>
      <li>Allergie, œdème de Quincke, asthme</li>
      <li>Hémopathies et cancers solides, MICI, Syndrome néphrotique idiopathique…</li>
    </ul>

    <p class="bold">Contre-indications</p>
    <ul>
      <li>Tout état infectieux, mycosique ou viral en évolution</li>
      <li>Vaccination récente avec vaccins vivants</li>
      <li>Hypersensibilité</li>
      <li>UGD en cours</li>
      <li>Diabète déséquilibré</li>
      <li>Insuffisance cardiaque déséquilibrée</li>
      <li>HTA non contrôlée et HTA sévère</li>
      <li>Etats psychotiques non contrôlés</li>
    </ul>

    <p class="bold">Effets indésirables, complications et mesures associées</p>
    <ul>
      <li><span class="underline">Cushing</span> : obésité facio-tronculaire, bosse de bison, hypertrophie des boules de Bichat) 🡪 diminution de la polosogie</li>
      <li><span class="underline">Ostéo-musculaires</span> : ostéoporose, ostéonécrose aseptique, amyotrophie proximale, retard staturo-pondéral chez l’enfance 🡪 prévention ostéoporose cortico-induite</li>
      <li><span class="underline">Rétention hydrosodée</span> (HTA, OMI) par hyperaldostéronisme + hypokaliémie 🡪 restriction sodée < 6g +/- supplémentation en potassium</li>
      <li><span class="underline">Troubles psychiatriques</span> : irritabilité, insomnie, dépression, décompensation maniaque, troubles délirants 🡪 consultation psychiatrique</li>
      <li><span class="underline">Infectieux</span> : anguillulose, hyperleucocytose, lymphopénie, stimulation de l’érythropoïèse 🡪 recherche de foyers infectieux et vérifications des vaccins</li>
      <li><span class="underline">Cutanées</span> : hypercatabolisme (atrophie, cicatrisation lente, fragilité capillaire, vergeture pourpre), acné, hypertrichose, pupura vasculaire 🡪 diminution de la posologie si possible</li>
      <li><span class="underline">Ophtalmologiques</span> : cataracte sous capsulaire postérieure, glaucome chronique 🡪 consultation ophtalmologique</li>
      <li><span class="underline">Intolérance au glucose, diabète, dyslipidémie</span> 🡪 régime pauvre en sucres rapides et hyperprotidique</li>
      <li><span class="underline">Digestifs</span> : gastralgies, UGS, complications de diverticulose sigmoïdienne et pancréatite 🡪 IPP (âge > 65 ans) +/- consultation gastro-entérologie</li>
      <li><span class="underline">Endocrinologiques</span> : aménorrhée, hyperandrogénie, troubles de la libido 🡪 diminution de posologie</li>
      <li><span class="underline">Syndrome de sevrage et insuffisance surrénalienne aigue</span> 🡪 diminution progressive des doses par paliers successifs</li>
    </ul>

    <p class="bold">Complications des infiltrations cortisonnées :</p>
    <ul>
      <li>Flush, fréquent, touche presque la moitié des patients</li>
      <li>Décompensations psychiatriques</li>
      <li>Dysphonies avec œdème des cordes vocales</li>
      <li>Hyperglycémies</li>
      <li>Syndrome de Nicolau, vive douleur au site d’injection associée à une coloration violacée de la peau régressant rapidement. Correspond à l’injection intra-artérielle du produit qui engendre un spasme vasculaire</li>
      <li>Syndrome de Tachon (1 x / 8000 injections), malaise environ une minute après l’injection avec douleurs thoraciques ou lombaires intenses, associées à une dyspnée, une sensation de mort subite et qui régresse en 15 minutes dans 85 % des cas. Il pourrait être dû à un passage des cristaux dans la circulation sanguine</li>
    </ul>

    <p><span class="bold">Bilan minimal avant corticothérapie prolongée</span> : Poids, TA, NFS, CRP, BU+/- ECBU, ionogramme, GAJ, bilan lipidique, bilan rénal, radiographie de thorax + IDR tuberculine, ECG si bolus méthylprednisolone forte posologie, ivermectine 100mg/kg en une prise systématique si séjour tropical pour éviter aspergillose invasive, DMO</p>

    <p class="bold">Précautions d’emploi</p>
    <ul>
      <li>Rechercher les foyer infectieux potentiels en cas d’introduction pour durée prolongée</li>
      <li>Rechercher la dose efficace la plus faible</li>
      <li>Mettre en place des mesures hygiéno-diététiques : régime pauvre en sel, en sucres rapides et riche en protéines, activité physique, apport de calcium-vitamine D voire de Bisphosphonates dans certains cas, traitement protecteur gastrique</li>
      <li>Administrer le médicament en une prise quotidienne le matin (parfois une prise le soir pour éviter les réveils nocturnes lors des RIC en poussée)</li>
      <li>Arrêter le traitement de manière progressive pour permettre une relance étalée de la sécrétion physiologique de la corticosurrénale mise au repos</li>
      <li>Administrer fortes doses de méthylprednisolone IV toujours en milieu hospitalier en vue de surveiller les effets du traitement (poussé hypertensive en particulier)</li>
      <li>Recourir systématique à l’hydrocortisone en cas de traitement à visée substitutive</li>
    </ul>

    <p class="bold">Astuces pour jeunes rhumatologues</p>
    <ul>
      <li>Corticoïdes et infiltrations : l’Hexatrione® est réservé aux infiltrations intra-articulaires</li>
      <li>Dose >15mg >= 15j = pas de vaccin vivant</li>
      <li>
        Schémas classiques de décroissance posologique
        <ul>
          <li>Entre 60 et 40 mg/j : décroissance par palier de 10 mg</li>
          <li>Entre 20 et 40 mg : décroissance par palier de 5 mg</li>
          <li>Entre 10 et 20 mg : décroissance par palier de 2.5 mg</li>
          <li>Inférieur à 10 mg : décroissance par palier de 1 mg</li>
        </ul>
      </li>
    </ul>
    <PNGViewer :src="'glucocorticoide.png'" myID="'glucocorticoide.png'"/>

    <p>Sources : VIDAL, HAS, Pharmacomédicale.org, COFER</p>
  </section>
</template>

<script lang="js">
import PNGViewer from "@/components/PNGViewer";
export default {
  name: 'Glucocorticoides',
  components: { PNGViewer }
}
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .Glucocorticoides {
      padding: 0 15px;
      text-align: left;



      .bold {
        font-weight: bold;
      }

      .underline {
        text-decoration: underline;
      }

      table {
        border-collapse: collapse;
        width: 100%;
        margin-bottom: 15px;
        display: block;
        overflow-x: auto;
        white-space: nowrap;
      }

      td, th {
        border: 1px solid black;
        padding: 8px;

        &.sep {
          color: indianred;
          font-weight: bold;
          text-align: center;
        }
      }

      table tr.courte {
        background-color: #e2efd9;
      }

      span.courte {
        color: #70ad47;
      }

      table tr.moyenne {
        background-color: #fbe5d5;
      }

      span.moyenne {
        color: #ed7d31;
      }

      table tr.longue {
        background-color: #ffc9c9;
      }

      span.longue {
        color: #c00000;
      }

      table th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #d9d9d9;
        color: black;
      }

      img {
        max-width: 100%;
      }
    }
</style>
