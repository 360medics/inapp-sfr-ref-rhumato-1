<template>
  <div class="Sharp">
    <h2>Critères de sharp</h2>
    <h3>Critère majeurs</h3>
    <span>{{ criteriaMajor }}</span>
    <ul>
      <li>
        <input type="checkbox" id="myosite" value="Myosite sévère" v-model="criteriaMajor">
        <label for="myosite">Myosite sévère</label>
      </li>
      <li>
        <input type="checkbox" id="pulmonaire" value="Atteinte pulmonaire" v-model="criteriaMajor">
        <label for="pulmonaire">Atteinte pulmonaire :</label>
        <ul>
          <li>DLCO < 70%</li>
          <li>HTAP</li>
          <li>Lésion histologiques vasculaire</li>
        </ul>
      </li>
      <li>
        <input type="checkbox" id="raynaud" value="raynaud" v-model="criteriaMajor">
        <label for="raynaud">Phénomène de Raynaud et/ou hypomotilité oesophagienne</label>
      </li>
      <li>
        <input type="checkbox" id="sclérodactylie" value="sclérodactylie" v-model="criteriaMajor">
        <label for="sclérodactylie">Mains gonflées ou sclérodactylie</label>
      </li>
      <li>
        <input type="checkbox" id="anti-U1-RNP" value="anti-U1-RNP" v-model="criteriaMajor">
        <label for="anti-U1-RNP">Anticorps anti-ENA positif avec positivité des anti-U1-RNP et
          négativité des anti-Sm</label>
      </li>
    </ul>
    <h3>Critère mineurs</h3>
    <span>{{ criteriaMinor }}</span>
    <ul>
      <li>
        <input type="checkbox" id="Alopécie" value="Alopécie" v-model="criteriaMinor">
        <label for="Alopécie">Alopécie</label>
      </li>
      <li>
        <input type="checkbox" id="Leucopénie" value="Leucopénie" v-model="criteriaMinor">
        <label for="Leucopénie">Leucopénie</label>
      </li>
      <li>
        <input type="checkbox" id="Anémie" value="Anémie" v-model="criteriaMinor">
        <label for="Anémie">Anémie</label>
      </li>
      <li>
        <input type="checkbox" id="Pleurésie" value="Pleurésie" v-model="criteriaMinor">
        <label for="Pleurésie">Pleurésie</label>
      </li>
      <li>
        <input type="checkbox" id="Péricardite" value="Péricardite" v-model="criteriaMinor">
        <label for="Péricardite">Péricardite</label>
      </li>
      <li>
        <input type="checkbox" id="Arthrite" value="Arthrite" v-model="criteriaMinor">
        <label for="Arthrite">Arthrite</label>
      </li>
      <li>
        <input type="checkbox" id="Trijumeau" value="Trijumeau" v-model="criteriaMinor">
        <label for="Trijumeau">Névralagie du Trijumeau</label>
      </li>
      <li>
        <input type="checkbox" id="rashMalaire" value="rashMalaire" v-model="criteriaMinor">
        <label for="rashMalaire">Rash Malaire</label>
      </li>
      <li>
        <input type="checkbox" id="Thrombopénie" value="Thrombopénie" v-model="criteriaMinor">
        <label for="Thrombopénie">Thrombopénie</label>
      </li>
      <li>
        <input type="checkbox" id="MyositeModérée" value="MyositeModérée" v-model="criteriaMinor">
        <label for="MyositeModérée">Myosite modérée</label>
      </li>
      <li>
        <input type="checkbox" id="ATCD" value="ATCD" v-model="criteriaMinor">
        <label for="ATCD">ATCD de mains gonflées</label>
      </li>
    </ul>

    <p>
      Diagnostic si 4 critères majeurs sans anti-Sm
      Ou probable si 3 majeurs ou 2 majeurs et 1 mineurs sans anti-Sm
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Sharp',
  data: {
    criteriaMajor: [],
    criteriaMinor: 0
  }
});
</script>

<style scoped lang="scss">
@import 'src/sass/global.scss';

.Sharp {
}
</style>
