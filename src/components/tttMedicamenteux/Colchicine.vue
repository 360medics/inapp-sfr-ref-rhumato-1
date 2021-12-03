<template lang="html">
  <section class="Colchicine">
    <h2 class="title">COLCHICINE</h2>
    <span class="line"></span>

    <ul>
      <li>DCI : COLCHINE</li>
      <li>Voie d’administration</li>
      <li>Per-Os : 1 mg</li>
      <li>
        <span class="bold">AMM</span>
        <ul>
          <li>Traitement de la crise de goutte et prévention des récidives</li>
          <li>Traitement de la chondrocalcinose</li>
        </ul>
      </li>
      <li><span class="bold">Posologies</span></li>
      <li>
        Traitement de la crise de goutte
        <ul>
          <li>
            Prise de 1 mg au moment de la crise, puis 0.5 mg une heure plus tard
            puis 0.5 mg 2 à 3 fois par jour pendant 3 à 5 jours selon
            l’évolution
          </li>
        </ul>
      </li>
      <li>
        Prévention de la crise de goutte
        <ul>
          <li>Prise quotidienne per-os 0.5 à 1 mg/jour pendant 6 mois</li>
        </ul>
      </li>
      <li>
        Traitement de la chondrocalcinose
        <ul>
          <li>
            Prise quotidienne per-os 1 mg/jour (0.5 mg si patient < 70 kg)
          </li>
        </ul>
      </li>
    </ul>
    <p>
      Ne jamais dépasser la dose de 1 mg de colchicine par prise et de 3 prises
      par jour.
    </p>

    <ul>
      <li>
        Contre-indications
        <ul>
          <li>Insuffisance rénale sévère (DFG < 30 mL/min)</li>
          <li>Insuffisance hépatique sévère</li>
          <li>
            Association avec des antibiotiques de la famille des macrolides
            (azithromycine, clarithromycine, érythromycine, josamycine,
            midécamycine, roxithromycine, télithromycine)
          </li>
          <li>Association avec de la prystinmycine</li>
          <li>Hypersensibilité</li>
        </ul>
      </li>

      <li>
        Précautions d’emploi
        <ul>
          <li>
            Association avec antifongiques (itraconazole, kétoconazole,
            voriconazole, posaconazole)
          </li>
          <li>
            Association avec ciclosporine, du télaprévir ou du vérapamil.
            pristinamycine
          </li>
          <li>Antécédent thromboembolique</li>
          <li>Prise de traitement anticoagulant</li>
          <li>
            Inhibiteurs de l'HMGCoA réductase (atorvastatine, fluvastatine,
            pitavastatine, pravastatine, rosuvastatine, simvastatine)
          </li>
          <li>Antécédent d’accident vasculaire cérébral</li>
          <li>Hypertriglycéridémie</li>
          <li>Traitement par oestrogènes, anti-vitamine K, cholestyramine</li>
        </ul>
      </li>

      <li>
        Effets secondaires
        <ul>
          <li>Troubles digestifs, diarrhées (signe de surdosage)</li>
          <li>Toxidermie</li>
          <li>Anomalie. De la numération formule sanguine</li>
          <li>Évènement thromboembolique</li>
          <li>Accident vasculaire cérébral</li>
          <li>Toxidermie</li>
        </ul>
      </li>
    </ul>

    <p class="bold">Surveillance</p>
    <ul>
      <li>Surveillance digestive</li>
      <li>
        éNFS, bilan hépatique et créatinine dans les cas de traitement au long
        cours
      </li>
    </ul>

    <p class="bold">Astuces de jeunes rhumatologues :</p>
    <ul>
      <li>
        Ne pas prescrire d’anti-diarrhéique en association avec la colchicine
        (risque de masquer un potentiel signe de surdosage)
      </li>
      <li>
        Utilisation hors AMM envisageable si clairance < 30mL/min, à faible dose
        (0.5mg/j voire /48h) avec surveillance quotidienne des signe de
        surdosage.
      </li>
    </ul>
  </section>
</template>

<script lang="js">
export default {
    name: 'Colchicine',


}
</script>

<style scoped lang="scss">
@import 'src/sass/global.scss';
.Colchicine {
  padding: 0 15px;
  text-align: left;

  .bold {
    font-weight: bold;
  }

  .underline {
    text-decoration: underline;
  }
}
</style>
