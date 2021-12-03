<template lang="html">
  <section class="AINS">
    <h2 class="title">AINS</h2>
<span class="line"></span>

    <PNGViewer :src="'AINS_table.png'" :myID="'AINS_table.png'"/>

    <p class="bold">Propriétés et mécanismes d’action</p>
    <ul>
      <li>Analgésique et antipyrétique</li>
      <li>Antiagrégant plaquettaire (AAP) à faible posologie (75 à 300 mg/j)</li>
      <li>Antiinflammatoire à fortes doses (3 à 6 g chez l’adulte)</li>
    </ul>

    <p>Freinage de la synthèse des prostaglandines, TXA2 et prostacycline à partir de l’acide arachidonique</p>

    <p class="bold">Indications</p>
    <ul>
      <li>Courtes durées : pathologies douloureuses et inflammatoires</li>
      <li>Longues durées : RIC</li>
    </ul>

    <p class="bold">Contre-indications</p>
    <ul>
      <li>
        Absolues
        <ul>
          <li>Grossesse 3ème trimestre</li>
          <li>Allergies</li>
          <li>Insuffisance hépatique, insuffisance rénale, insuffisance cardiaque</li>
          <li>Maladie hémorragique constitutionnelle ou acquise</li>
          <li>ATCD d’ulcère gastro-duodénal évolutif ou compliqué</li>
          <li>Infection bactérienne évolutive</li>
        </ul>
      </li>
      <li>
        Relatives
        <ul>
          <li>Age > 65 ans</li>
          <li>ATCD d’insuffisance hépatique ou rénale modérée</li>
          <li>ATCD asthme</li>
          <li>ATCD RGO sévère</li>
          <li>Association AVK/AAP/CTC/aspirine</li>
          <li>Association fortes doses IEC/ARA2</li>
        </ul>
      </li>
    </ul>

    <p>- Précautions d’emplois :</p>
    <ul>
      <li>Attention à l’association aux glucocorticoïdes qui majore le risque d’ulcère gastro duodénal</li>
      <li>Prise ponctuelle à privilégier chez la femme enceinte avant le 6eme mois</li>
    </ul>

    <p>Certains AINS ont par ailleurs des contre-indications spécifiques en raison de leur profil de risque particulier :</p>

    <p>- Les coxibs et le diclofénac sont contre-indiqués en cas de :</p>
    <ul>
      <li>cardiopathie ischémique avérée,</li>
      <li>artériopathie périphérique,</li>
      <li>antécédent d’accident vasculaire cérébral (dont accident ischémique transitoire)</li>
    </ul>

    <p>L’étoricoxib est également contre-indiqué en cas d’hypertension artérielle non contrôlée.</p>

    <p class="bold">Effets secondaires</p>
    <ul>
      <li><span class="underline">Gynéco-obstétriques :</span> action tocolytique, augmentation durée travail gestationnel, fermeture prématurée canal artériel</li>
      <li><span class="underline">Allergiques :</span> prurit, érythème cutanéo-muqueux, bronchospasme, syndrome de Widal, toxidermie bulleuse</li>
      <li><span class="underline">Rénaux :</span> IRA fonctionnelle, HTA + hyperkaliémie (inhibition SRAA) et rétention hydrosodée, néphropathie interstitielle aigue immuno-allergique, néphropathie glomérulaire</li>
      <li><span class="underline">Hématologiques :</span> anémie ferriprive (toxicité médullaire), agranulocytose immuno-allergique</li>
      <li><span class="underline">Digestifs :</span> UGD (âge > 65 ans, ATCD UGD), favorise poussée de MICI</li>
    </ul>

    <p class="bold">Interactions médicamenteuses</p>
    <ul>
      <li>IEC/ARA2/DIU : augmentation du risque d’insuffisance rénale aigue puis chronique</li>
      <li>Sulfamide hypoglycémiant : augmentation du risque d’hypoglycémie</li>
      <li>Lithium, Valproate, Digoxine : risque de surdosage</li>
    </ul>

    <p class="bold">Astuces de jeunes rhumatologues</p>
    <ul>
      <li>
        COX-1 est exprimée constitutivement par la plupart des tissus alors que COX 2 n’est exprimée que dans certains tissus
        <ul>
          <li>
            <span class="underline">Effets attendus inhibition COX1</span> : antithrombotique (souhaitable), gastrotoxicité (EI)
          </li>
          <li>
            <span class="underline">Effets attendues inhibition COX2</span> : anti-inflammatoire et analgésique (souhaitable), augmentation TA, rétention hydrosodée (EI)
            <br>
          </li>
        </ul>
      </li>
    </ul>
    <PNGViewer :src="'AINS.png'" :myID="'AINS.png'"/>

    <p class="bold">Algorithme de prescription des AINS</p>
    <PNGViewer :src="'algo_AINS.png'" :myID:="'algo_AINS.png'"/>
  </section>
</template>

<script lang="js">

  import PNGViewer from "@/components/PNGViewer";
  export default {
    name: 'AINS',
    components: {PNGViewer}
  }
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .AINS {
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
        border: 1px solid #ddd;
        padding: 8px;

        &.sep {
          color: indianred;
          font-weight: bold;
          text-align: center;
        }
      }

      table tr:nth-child(even){background-color: #f2f2f2;}

      table th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #472e5a;
        color: white;
      }

      img {
        max-width: 100%;
      }
    }
</style>
