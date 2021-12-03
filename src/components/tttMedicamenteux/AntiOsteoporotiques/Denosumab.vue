<template lang="html">
  <section class="Denosumab">
    <h2 class="title">DENOSUMAB</h2>
<span class="line"></span>

    <p>- DCI : DENOSUMAB</p>
    <p><span class="bold">- Nom commercial</span> Prolia®</p>

    <div>
      - Voie d’administration
      <ul>
        <li>SC:  60 mg</li>
      </ul>
    </div>

    <div>
      <span class="bold">- AMM</span>
      <ul>
        <li>Traitement de l’ostéoporose post-ménopausique dans un contexte de risque élevé de fracture</li>
        <li>Traitement de la perte osseuse associé à un traitement hormonal chez l’homme atteint d’un cancer de la prostate</li>
      </ul>
    </div>

    <div>
      <span class="bold">- Indications remboursement</span>
      <ul>
        <li>Traitement de l’ostéoporose post-ménopausique en 2ème intention en relai d’un traitement biphosphonate</li>
      </ul>
    </div>

    <div>
      <span class="bold">- Posologies</span>
      <ul>
        <li>Prise tous les 6 mois, une injection sous cutanée 60 mg.</li>
        <li>Durée maximale 3 à 5 ans</li>
      </ul>
    </div>

    <div>
      <span class="bold">- Contre-indications</span>
      <ul>
        <li>Hypocalcémie</li>
        <li>Hypersensibilité</li>
        <li>Grossesse, allaitement</li>
      </ul>
    </div>

    <div>
      <span class="bold">- Précautions d’emploi</span>
      <ul>
        <li>Insuffisance rénale</li>
        <li>Insuffisance hépatique</li>
        <li>Patient à risque d’hypocalcémie</li>
        <li>Patient à risque d’ostéonécrose de la mâchoire</li>
      </ul>
    </div>

    <div>
      <span class="bold">- Effets secondaires</span>
      <ul>
        <li>Infection urinaire, infections bronchiques et pulmonaires</li>
        <li>Cellulite cutanée, Diverculite</li>
        <li>Trouble du transit à type de constipation</li>
        <li>Douleurs ostéoarticulaires</li>
        <li>Toxidermie</li>
        <li>Hypocalcémie sévère</li>
        <li>Cataracte</li>
        <li>Ostéonécrose de la mâchoire</li>
        <li>Fracture Atypique du Fémur</li>
      </ul>
    </div>

    <div>
      <span class="bold">- Surveillance</span>
      <ul>
        <li>Contrôle de la calcémie 2 semaine après la première injection</li>
        <li>Densitométrie de contrôle à 3 ans</li>
        <li>Relai par biphosphonate avec éventuelle surveillance des CTX sériques</li>
      </ul>
    </div>

    <div>
      <span class="bold">Astuces de jeunes rhumatologues :</span>
      <ul>
        <li>Il existe un risque d’effet rebond à l’arrêt du Denosumab à surveiller par le dosage de CTX sérique et à prévenir par un relai par Biphosphonates pendant au moins un an.</li>
      </ul>
    </div>

    <div class="footer">
      <span class="underline">Sources :</span><br>
      <ul>
        <li>Vidal</li>
        <li>Base de données publiques médicaments. Gouv</li>
        <li>GRIO</li>
        <li>APOROSE</li>
        <li>Pilly</li>
        <li>Recommendation de la société francaise dans le traitement de la goutte</li>
        <li>Recommendation SFR arthrite septique</li>
      </ul>
      <br>
      <span class="underline">Références :</span><br>
      Actualisation 2018 des recommmandations françaises du traitement de l’ostéoporose post-ménopausique Karine Briot et al. Joint Bone Spine 2018 https://doi.org/doi:10.1016/j.rhum.2018.02.005
      <br><br>
      Recommandations de la Société française de rhumatologie pour la prise en charge de la goutte : le traitement hypo-uricémiant<br>
      Tristan Pascart et al. Joint Bone Spine 2020<br>
      al https://doi.org/10.1016/j.rhum.2020.07.009<br>
      <br>
      Recommandations françaises 2020 sur la prise en charge des arthrites septiques sur articulation native de l’adulte<br>
      Marion Coudrec et al. Joint Bone Spine 2020<br>
      https://doi.org/10.1016/j.rhum.2020.05.004<br>
    </div>
  </section>
</template>

<script lang="js">
    export default {
        name: 'Denosumab',


    }
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
    .Denosumab {
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
