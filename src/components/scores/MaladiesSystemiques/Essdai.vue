<template>
  <div class="Essdai">
    <h2 class="title">SCORE ESSDAI</h2>
    <span class="line"></span>

    <h4>1. SIGNES GENERAUX</h4>
    <span
      >Attention: coter "absence d'activité" les signes généraux non liés à la
      maladie (fièvre d'origine infectieuse, perte de poids volontaire).</span
    >
    <br />
    <p @click="choice1(0)" class="btn" :class="{ selected: score1 === 0 }">
      Absence de signes généraux
    </p>
    <p @click="choice1(3)" class="btn" :class="{ selected: score1 === 3 }">
      Fièvre (37.5° à 38.5°C) / sueurs nocturnes modérées ou intermittentes
      <br />
      Amaigrissement involontaire (5 à 10%)
    </p>
    <p @click="choice1(6)" class="btn" :class="{ selected: score1 === 6 }">
      Fièvre importante (>38.5°C) / sueurs nocturnes abondantes
      <br />
      Amaigrissement involontaire (> 10%)
    </p>

    <h4>2. LYMPHADENOPATHIES</h4>
    <span></span>
    <p @click="choice2(0)" class="btn" :class="{ selected: score2 === 0 }">
      Absence d'adénopathie ou de splénomégalie
    </p>
    <p @click="choice2(4)" class="btn" :class="{ selected: score2 === 4 }">
      Adénopathie >=1cm (ou >=2cm dans la région inguinale)
    </p>
    <p @click="choice2(8)" class="btn" :class="{ selected: score2 === 8 }">
      -Adénopathie >=2cm (ou >=3cm dans la région inguinale)
      <br />
      - Splénomégalie (cliniquement palpable ou à l'imaginerie)
    </p>
    <p @click="choice2(12)" class="btn" :class="{ selected: score2 === 12 }">
      Prolifération B maligne actuelle (lymphone, myélome, Waldenström)
    </p>

    <h4>3. ATTEINTE GLANDULAIRE</h4>
    <span
      >Attention : ne pas coter les manifestations glandulaires non liées à la
      maladie (ex: lithias, infection...)</span
    >
    <br />
    <p @click="choice3(0)" class="btn" :class="{ selected: score3 === 0 }">
      Absence d'hypertrophie glandulaire
    </p>
    <p @click="choice3(2)" class="btn" :class="{ selected: score3 === 2 }">
      Hypertrophie glandulaire modérée, avec:
      <br />
      - Parotidomégalie (<= 3cm)
      <br />
      - Ou hypertrophie modérée des glandes sous-mandibulaire et lacrymales
    </p>
    <p @click="choice3(4)" class="btn" :class="{ selected: score3 === 4 }">
      Hypertrophie glandulaire majeure, avec:
      <br />
      - Parotidomégalie (>3cm)
      <br />
      - Ou importante hypertrophie des glandes sous-mandibulaire et lacrymales
    </p>

    <h4>4. ATTEINTE ARTICULAIRE</h4>
    <span
      >Attention : ne pas coter les manifestations articulaire non liées à la
      maladie (ex: arthrose...)</span
    >
    <br />
    <p @click="choice4(0)" class="btn" :class="{ selected: score4 === 0 }">
      Absence d'atteinte articulaire active
    </p>
    <p @click="choice4(2)" class="btn" :class="{ selected: score4 === 2 }">
      Arthralgies des mains poignets chevilles ou pieds avec dérouillage matinal
      (>30min)
    </p>
    <p @click="choice4(4)" class="btn" :class="{ selected: score4 === 4 }">
      De 1 à 5 synovites sur 28
    </p>
    <p @click="choice4(6)" class="btn" :class="{ selected: score4 === 6 }">
      >= 6 synovites sur 28
    </p>

    <h4>5. ATTEINTE CUTANEE</h4>
    <span
      >Attention: coter "absence d'activité" les manifestations anciennes
      stables liées à des lésions séquallaires plutôt qu'à une activité de la
      maladie, ainsi que, les manifestations cutanées non liées à la
      maladie.</span
    >
    <br />
    <p @click="choice5(0)" class="btn" :class="{ selected: score5 === 0 }">
      Absence de manifestation cutanée active
    </p>
    <p @click="choice5(3)" class="btn" :class="{ selected: score5 === 3 }">
      Erythème polymorphe
    </p>
    <p @click="choice5(6)" class="btn" :class="{ selected: score5 === 6 }">
      Vascularite cutanée limitée(y compris les vascularites urticarennes) ou
      purpura limité aux pieds et chevilles ou lupus cutanée sub-aigu.
    </p>
    <p @click="choice5(9)" class="btn" :class="{ selected: score5 === 9 }">
      Vascularite cutanée diffuse(y compris les vascularites urticarennes) ou
      purpura diffuse ou ulcère lié à une vascularite.
    </p>

    <h4>6. ATTEINTE PULMONAIRE</h4>
    <span
      >Attention: coter "absence d'activité" les manifestions anciennes stables
      liées à des lésions séquellaires plutôt qu'à une activité de la maladie,
      ainsi que, les manifestations cutanées non liées à la maladie.</span
    >
    <br />
    <p @click="choice6(0)" class="btn" :class="{ selected: score6 === 0 }">
      Absence de manifestation pulmonaire active
    </p>
    <p @click="choice6(5)" class="btn" :class="{ selected: score6 === 5 }">
      Toux persistante ou, atteinte bronchique sans anomalie à la radiographie
      standard.
      <br />
      Ou atteinte interstitielle confirmée par l'imagerie:
      <br />
      - Sans dyspnée,
      <br />
      - Avec EFR normales
    </p>
    <p @click="choice6(10)" class="btn" :class="{ selected: score6 === 10 }">
      Atteinte pulmonaire modérément active: atteinte interstitielle confirmée
      au TDM (coupes fines) avec:
      <br />
      * Dyspnée d'effort (NHYA I, II)
      <br />
      * Ou anomalies EFR limitées à:
      <br />
      - 70% > DLCO >= 40%
      <br />
      - ou 80% > CVF >= 60%
    </p>
    <p @click="choice6(15)" class="btn" :class="{ selected: score6 === 15 }">
      Atteinte pulmonaire très active: atteinte interstitielle confirmée au TDM
      (coupes fines) avec:
      <br />
      * Dyspnée d'effort (NHYA III, IV)
      <br />
      * Ou anomalies EFR avec:
      <br />
      - DLCO < 40%
      <br />
      - Ou CVF < 60%
    </p>

    <h4>7. ATTEINTE rénale</h4>
    <span
      >Attention : coter "absence d'activité" les manifestations anciennes
      stables liées à des lésions séquellaires plutôt qu'à une activité de la
      maladie, ainsi que les manifestations néphrologiques non liées à la
      maladie (Si une biopsie rénale a été réalisée, ce sont les données
      histologiques qui doivent être prises en compte pour la cotation de
      l'activité)</span
    >
    <br />
    <p @click="choice7(0)" class="btn" :class="{ selected: score7 === 0 }">
      Absence d'atteinte rénale active:
      <br />
      - Protéinurie < 0.5g/j, pas d'hématurie, pas de leucocyturie, pas
      d'acidose.
      <br />
      - Ou protéinurie ou insuffisance rénale ancienne stable
    </p>
    <p @click="choice7(5)" class="btn" :class="{ selected: score7 === 5 }">
      Atteinte rénale spécifique limitée à:
      <br />
      * Acidose turbulaire sans insuffisance rénale
      <br />
      * Atteinte glomérulaire : - avec protéinurie (entre 0.5 et 1g/d)
      <br />
      - sans hématurie et sans insuffisance rénale (DFG>= 60ml/min)
    </p>
    <p @click="choice7(10)" class="btn" :class="{ selected: score7 === 10 }">
      Atteinte rénale modérément active :
      <br />
      * Acidose turbulaire avec insuffisance rénale (DFG < 60 ml/min)
      <br />
      * Atteinte glomérulaire :
      <br />
      - avec protéinurie (entre 0.5 et 1g/d)
      <br />
      - sans hématurie et sans insuffisance rénale (DFG>= 60ml/min) * Ou signes
      histologiques :
      <br />
      - glomérulonéphrite extra membraneuse
      <br />
      - infiltrat interstitiel important
    </p>
    <p @click="choice7(15)" class="btn" :class="{ selected: score7 === 15 }">
      Atteinte rénale très active :
      <br />
      * Atteinte glomérulaire :
      <br />
      - avec protéinurie > 1.5g/j
      <br />
      - ou hématurie et ou insuffisance rénale (GFR < 60ml/min) * Ou signes
      histologiques :
      <br />
      - glomérulonéphrite proliférative
      <br />
      - atteinte liée à une cryoglobulinémie
    </p>

    <h4>8. ATTEINTE MUSCULAIRE</h4>
    <span
      >Attention: ne pas coter les manifestations musculaires non liées à la
      maladie (ex: myopathie cortisonique</span
    >
    <br />
    <p @click="choice8(0)" class="btn" :class="{ selected: score8 === 0 }">
      Absence d'atteinte musculaire active
    </p>
    <p @click="choice8(6)" class="btn" :class="{ selected: score8 === 6 }">
      Myosite active avec preuve EMG ou histologie, et :
      <br />
      - absence de faiblesse musculaire
      <br />
      - ou élévation des CPK (N < CPK <= 2N)
    </p>
    <p @click="choice8(12)" class="btn" :class="{ selected: score8 === 12 }">
      Myosite modérément active avec preuve EMG ou histologie, et :
      <br />
      - faiblesse (déficit maximal: 4/5)
      <br />
      - ou élévation des CPK (2N < CPK <= 4N)
    </p>
    <p @click="choice8(18)" class="btn" :class="{ selected: score8 === 18 }">
      Myosite très active avec preuve EMG ou histologie, et :
      <br />
      - faiblesse (déficit <= 3/5)
      <br />
      - ou élévation des CPK (> 4N)
    </p>

    <h4>9. ATTEINTE NEUROLOGIQUE PERIPHERIQUE</h4>
    <span
      >Attention: coter "absence d'activité" les manifestations anciennes
      stables liées à des lésions séquallaires plutôt qu'à une activité de la
      maladie, ainsi que les manifestations neuroloques périphériques non liées
      à la maladie</span
    >
    <br />
    <p @click="choice9(0)" class="btn" :class="{ selected: score9 === 0 }">
      Absence d'atteinte neurologique périphérique active
    </p>
    <p @click="choice9(5)" class="btn" :class="{ selected: score9 === 5 }">
      Atteinte neurologique périphérique faiblement active:
      <br />
      - Neuropathie axonale sensitive pure (prouvée par l'ENMG)
      <br />
      - Névralgie du Trijumeau (V)
    </p>
    <p @click="choice9(10)" class="btn" :class="{ selected: score9 === 10 }">
      Atteinte neurologique périphérique modérément active prouvée par l'ENMG
      <br />
      - Neuropathie axonale sensitivo-motrice pure sans déficit moteur
      <br />
      - Neuropathie axonale sentitive pure associée à une cryoglobulinémie
      <br />
      - Ganglionopathie avec ataxie modérée
      <br />
      - Polyradiculonévrite (PIDC) avec retentissement fonctionnel modéré
      (déficite moteur maximal 4/5 ou ataxie modérée)
      <br />
      - Atteinte des nerfs crâniens d'origine périphérique (sauf trijumeau (V))
    </p>
    <p @click="choice9(15)" class="btn" :class="{ selected: score9 === 15 }">
      Atteinte neurologique périphérique très active prouvée par l'ENMG
      <br />
      - Neuropathie axonale sensitivo-motrice pure avec déficite moteur <= 3/5
      <br />
      - Atteinte neurologique périphérique liée à une vascularite (ex:
      mononévrite multiple...)
      <br />
      - Ganglionopathie avec ataxie sévère
      <br />
      - Polyradiculonécrite (PIDC) avec retentissement fonctionnel sévère
      (déficit moteur <= 3/5, ou ataxie sévère)
    </p>

    <h4>10. ATTEINTE NEUROLOGIQUE CENTRALE</h4>
    <span
      >Attention: coter "absence d'activité" les manifestations anciennes
      stables liées à des lésions séquellaires plutôt qu'à une activité de la
      maladie, ainsi que les manifestations neurologiques centrales non liées à
      la maladie</span
    >
    <br />
    <p @click="choice10(0)" class="btn" :class="{ selected: score10 === 0 }">
      Absence d'atteinte neurlogique centrale active
    </p>
    <p @click="choice10(10)" class="btn" :class="{ selected: score10 === 10 }">
      Atteinte neurologique centrale modérément active
      <br />
      - atteinte des nerfs crâniens d'origine centrale
      <br />
      - névrite optique
      <br />
      - lésions de la substance blanche mimant une SEP entraînant des troubles
      sensitifs ou troubles cognitifs avérés.
    </p>
    <p @click="choice10(15)" class="btn" :class="{ selected: score10 === 15 }">
      Atteinte neurologique centrale très active
      <br />
      - Vascularite cérébrale (par exemple AVC ou AIT)
      <br />
      - convulsions - myélite transverse.
      <br />
      - méningite lymphocytaire
      <br />
      - lésions de la substance blanche mimant une SEP avec déficit moteur
    </p>

    <h4>11. ATTEINTE HEMATOLOGIQUE</h4>
    <span
      >Attention:- pour les anémies, les neutropénies et les thrombopénies,
      seules les cytopénies auto-immunes sont à prendre à compte. Ne pas coter
      les cytopénies non liées à la maladie (ex :carentielle, ou cytopénies
      liées aux traintements comme par exempe les lymphopénies induites par le
      cyclophosphamide)</span
    >
    <br />
    <p @click="choice11(0)" class="btn" :class="{ selected: score11 === 0 }">
      Absence de cytopénie auto-immune
    </p>
    <p @click="choice11(2)" class="btn" :class="{ selected: score11 === 2 }">
      Crytopénie auto-immune avec:
      <br />
      - neuropénie (1000 < neutrophiles < 1500/mm3)
      <br />
      - ou anémie (10 < Hémoglobine < 12g/dl)
      <br />
      - ou thrombocytopénie (100.000 < Plaquettes < 150.000/mm3)
      <br />
      - ou lymphopénie (500 < lymphocytes < 1000/mm3)
    </p>
    <p @click="choice11(4)" class="btn" :class="{ selected: score11 === 4 }">
      Crytopénie auto-immune avec:
      <br />
      - neuropénie (500 <= neutrophiles <= 1000/mm3)
      <br />
      - ou anémie (8 <= Hémoglobine <= 10g/dl)
      <br />
      - ou thrombocytopénie (50.000 <= Plaquettes <= 100.000/mm3)
      <br />
      - ou lymphopénie (<= 500/mm3)
    </p>
    <p @click="choice11(6)" class="btn" :class="{ selected: score11 === 6 }">
      Crytopénie auto-immune avec:
      <br />
      - neuropénie (neutrophiles < 500/mm3)
      <br />
      - ou anémie Hémoglobine < 8g/dl)
      <br />
      - ou thrombocytopénie (Plaquettes < 50.000/mm3)
    </p>

    <h4>12. DOMAINE BIOLOGIQUE</h4>
    <span></span>
    <p @click="choice12(0)" class="btn" :class="{ selected: score12 === 0 }">
      Absence des signes biologiques( se trouvant aux niveaux d'activité faible
      et modérée)
    </p>
    <p @click="choice12(1)" class="btn" :class="{ selected: score12 === 1 }">
      - composant monoclonal
      <br />
      - ou hypocomplémentémie (C4 ou C3 ou CH50 bas)
      <br />
      - ou hypergammaglobulinémie ou taux d'IgG compris entre 16 et 20g/L
    </p>
    <p @click="choice12(2)" class="btn" :class="{ selected: score12 === 2 }">
      - présence d'une cryoglobulinémie
      <br />
      - ou hypergammaglobulinémie ou taux d'IgG > 20 g/L
      <br />
      - ou apparition d'une hypergammaglobulinémie (< 5 g/L)
    </p>

    <div class="result">
      <h4>Résultat: {{ result }}</h4>
      <h4>{{ activity }}</h4>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      score1: null,
      score2: null,
      score3: null,
      score4: null,
      score5: null,
      score6: null,
      score7: null,
      score8: null,
      score9: null,
      score10: null,
      score11: null,
      score12: null,
      result: 0,
      activity: '',
    };
  },
  methods: {
    calcul() {
      this.result =
        parseInt(this.score1) +
        parseInt(this.score2) +
        parseInt(this.score3) +
        parseInt(this.score4) +
        parseInt(this.score5) +
        parseInt(this.score6) +
        parseInt(this.score7) +
        parseInt(this.score8) +
        parseInt(this.score9) +
        parseInt(this.score10) +
        parseInt(this.score11) +
        parseInt(this.score12);

      if (this.result >= 0 && this.result < 4) {
        this.activity = "Absence d'activité";
      } else if (this.result >= 4 && this.result < 50) {
        this.activity = 'Activité faible';
      } else if (this.result >= 50 && this.result < 100) {
        this.activity = 'Activité modérée';
      } else if (this.result >= 100) {
        this.activity = 'Activité élevée';
      }
    },

    choice1(number) {
      this.score1 = number;
      this.calcul();
    },
    choice2(number) {
      this.score2 = number;
      this.calcul();
    },
    choice3(number) {
      this.score3 = number;
      this.calcul();
    },
    choice4(number) {
      this.score4 = number;
      this.calcul();
    },
    choice5(number) {
      this.score5 = number;
      this.calcul();
    },
    choice6(number) {
      this.score6 = number;
      this.calcul();
    },
    choice7(number) {
      this.score7 = number;
      this.calcul();
    },
    choice8(number) {
      this.score8 = number;
      this.calcul();
    },
    choice9(number) {
      this.score9 = number;
      this.calcul();
    },
    choice10(number) {
      this.score10 = number;
      this.calcul();
    },
    choice11(number) {
      this.score11 = number;
      this.calcul();
    },
    choice12(number) {
      this.score12 = number;
      this.calcul();
    },
  },

});
</script>

<style scoped lang="scss">
@import 'src/sass/global.scss';
.Essdai {
  ul {
    list-style: none;
    padding: 0;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
    background-color: #eceaf0;
    cursor: pointer;

    border: none;
    padding: 5px 5px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 0 0 1em;
    justify-content: center;
    align-content: space-around;
    align-items: flex-start;
    height: 100%;
    width: 80%;
    border-radius: 8px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1rem;
    color: rgb(49, 49, 49);
  }

  .btn.selected {
    background-color: #3abaea;
    color: white;
  }

  .title {
    color: rgb(143, 58, 177);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .result {
    width: 80%;
    margin: auto;
    border-radius: 10px;
    background-color: #4c2b62;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    justify-content: center;
    display: block !important;
    margin-top: 2rem;
    margin-bottom: 1rem;
    text-align: center;
    color: white;
  }

  .line {
    display: block;
    width: 100%;
    border-top: 2px solid #ccc;
  }
}
</style>
