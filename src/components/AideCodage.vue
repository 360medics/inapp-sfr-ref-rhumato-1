<template lang="html">
  <section class="AideCodage">
    <table class="AideCodage__table">
      <tr>
        <th>Code</th>
        <th>Intitulé CCAM</th>
        <th>Remarques / Conditions</th>
      </tr>

      <tr>
        <td>APC</td>
        <td>
          Avis ponctuel de consultant du médecin sur adressage du médecin
          traitant
        </td>
        <td>
          <p>Conditions :</p>
          <ul>
            <li>
              Pas de consultation ou acte pour le même motif dans les 4 mois
              précédents.
            </li>
            <li>
              Possibilité d’un acte technique diagnostic ou d’une consultation
              de synthèse lors d’une autre séance
            </li>
            <li>
              Exclut les patients suivis dans le cadre d’un protocole de soin
              ALD pour la pathologie motivant l’avis
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>CS+MCS+MCU</td>
        <td>Cs urgente demande du méd traitant délai</td>
        <td>délai 48 heures ouvrables</td>
      </tr>
      <tr>
        <td>CS+MCS+PPR</td>
        <td>Cs PR épisode aigu ou aggravation</td>
        <td>secteur 1, optam et salarié en centre de santé</td>
      </tr>
      <tr>
        <td>CS+MCS+MAV</td>
        <td>Cs initiale complexe RI</td>
        <td>secteur 1, optam et salarié en centre de santé</td>
      </tr>
      <tr>
        <td>CS+MCS+MBP</td>
        <td>Cs instauration biothérapie</td>
        <td>secteur 1, optam et salarié en centre de santé</td>
      </tr>
      <tr>
        <td>NZLB001</td>
        <td>Injection artic ou bourse MI sans guidage</td>
        <td>
          <u>Remarques :</u>
          <ul>
            <li>Compte-rendu attendu si acte CCAM facturé</li>
            <li>Si acide hyaluroniuqe : acte hors nomenclature</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>
          MZJB001 + <br />
          MZLB001
        </td>
        <td>
          Evacuation artic MS à visée thérapeutique sans guidage puis
          infiltration artic MS sans guidage
        </td>
        <td><u>Remarque :</u> le 2ème acte est facturé à 50%</td>
      </tr>
      <tr>
        <td>
          NZHB002 <br />
          MZHB002
        </td>
        <td>
          Ponction artic MI sans guidage<br />Ponction artic MS sans guidage
        </td>
        <td>à visée diagnostique <b>(examen ou analyse)</b></td>
      </tr>
      <tr>
        <td>AHLB003</td>
        <td>Infiltration Arnold</td>
        <td>
          <u>Remarque :</u> si examen clinique réalisé, possibilité de rajouter
          K5/2 ou k8/2 avec nécessité de compte rendu
        </td>
      </tr>
      <tr>
        <td>AHLB006</td>
        <td>Infiltration canal carpien</td>
        <td>
          <u>Remarque :</u> possibilité d'associer un EMG, qui sera facturé à
          taux plein (code 5 CCAM)
        </td>
      </tr>
      <tr>
        <td>LHLB001</td>
        <td>Infiltration articulaire postérieure sans guidage</td>
        <td><u>Remarque :</u> même code quelque soit le nombre</td>
      </tr>
      <tr>
        <td>PBQM003</td>
        <td>
          Échographie unilatérale ou bilatérale d'une articulation et de son
          appareil capsuloligamentaire
        </td>
        <td>
          <u>Remarque :</u> échographie diagnostique, compte rendu adapté
          attendu
        </td>
      </tr>
      <tr>
        <td>PBQM004</td>
        <td>
          Échographie unilatérale ou bilatérale d'une articulation et de son
          appareil capsuloligamentaire
        </td>
        <td>
          <u>Remarque :</u> échographie diagnostique, compte rendu adapté
          attendu
        </td>
      </tr>
      <tr>
        <td>YYYY028 +<br />ZZLJ002</td>
        <td>Infiltration articulaire écho-guidée ou d'un organe superficiel</td>
        <td><u>Remarque :</u> le 2ème acte est facturé à 50%</td>
      </tr>
      <tr>
        <td>PBQM003 +<br />NZLB001</td>
        <td>
          Échographie diagnostique (avec rédaction d'un compte rendu) puis
          infiltration MI sans guidage
        </td>
        <td><u>Remarque :</u> le 2ème acte est facturé à 50%</td>
      </tr>
      <tr>
        <td>MDQK002 + Y</td>
        <td>
          Radiographies bilatérales de main et/ou poignet de face (1 incidence)
        </td>
        <td>
          <u>Remarque :</u> Y = valorisation de la radio par un rhumatologue,
          indispensable
        </td>
      </tr>
      <tr>
        <td>MAQK001 +<br />MAQK001 + Y</td>
        <td>Radiographies bilatérales d'épaules (3 ou 4 incidences)</td>
        <td><u>Remarque :</u> le 2ème acte est facturé à 50%</td>
      </tr>
      <tr>
        <td>LEQK002 +<br />NAQK015 + Y</td>
        <td>
          Radiographies du rachis dorso-lombaire et du bassin respectivement
        </td>
        <td><u>Remarque :</u> le 2ème acte est facturé à 50%</td>
      </tr>
      <tr>
        <td>NFQK003 + Y + <br />PBQM003</td>
        <td>Radiographie du genou (3 ou 4 incidences) + échographie</td>
        <td>
          <u>Remarque :</u> le 2ème acte est facturé à 100% car n'utilisant pas
          de radiation ionisante
        </td>
      </tr>
      <tr>
        <td>YYYY033 + Y +<br />AFLH001</td>
        <td>Infiltration épidurale sous contrôle radio</td>
        <td>
          <u>Remarque :</u> le 2ème acte est facturé à 100% car l'injection
          radioguidée n'entraîne pas de radio supplémentaire sur le même site
        </td>
      </tr>
      <tr>
        <td>YYYY033 + Y +<br />MZLH002</td>
        <td>Infiltration MS ou MI avec guidage radio</td>
        <td>
          <u>Remarque :</u> le 2ème acte est facturé à 100% car l'injection
          radioguidée n'entraîne pas de radio supplémentaire sur le même site
        </td>
      </tr>
      <tr>
        <td>PAQK007</td>
        <td>DMO (DXA) sur 2 sites</td>
        <td>
          <u>Remarque :</u> association possible avec cotation cs+MCS ou APC
          selon adressage
        </td>
      </tr>
    </table>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AideCodage",
});
</script>

<style scoped lang="scss">
@import "src/sass/global.scss";
.AideCodage {
  display: flex;
  justify-content: center;

  h2 {
    text-align: center;
  }

  .bold {
    font-weight: bold;
  }

  table {
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 15px;
    margin-top: $gutter_medium;
  }

  td,
  th {
    border: 1px solid #ddd;
    padding: 8px;

    &.sep {
      color: indianred;
      font-weight: bold;
      text-align: center;
    }
  }

  table tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #472e5a;
    color: white;
  }
}
</style>
