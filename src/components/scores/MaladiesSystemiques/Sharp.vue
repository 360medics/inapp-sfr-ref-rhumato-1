<template>
  <div class="Sharp">

    <h2 class="Sharp__title">Critères de sharp</h2>

    <div class="Sharp__container__subtitle">
      <h3 class="Sharp__subtitle">Critère majeurs</h3>
      <span class="Sharp__count">{{ countMajor }}</span>
    </div>

   <ul class="Sharp__list">
      <li>
        <input class="Sharp__list__item__input" type="checkbox" id="myosite" value="Myosite sévère" v-model="checkMajor">
        <label class="Sharp__list__item__label" for="myosite">Myosite sévère</label>
      </li>
      <li>
        <input class="Sharp__list__item__input" type="checkbox" id="pulmonaire" value="Atteinte pulmonaire" v-model="checkMajor">
        <label class="Sharp__list__item__label" for="pulmonaire">Atteinte pulmonaire :</label>
       <ul>
          <li class="Sharp__list__sublist">DLCO < 70%</li>
          <li class="Sharp__list__sublist">HTAP</li>
          <li class="Sharp__list__sublist">Lésion histologiques vasculaire</li>
        </ul>
      </li>
      <li>
        <input class="Sharp__list__item__input" type="checkbox" id="raynaud" value="raynaud" v-model="checkMajor">
        <label class="Sharp__list__item__label" for="raynaud">Phénomène de Raynaud et/ou hypomotilité oesophagienne</label>
      </li>
      <li>
        <input class="Sharp__list__item__input" type="checkbox" id="sclérodactylie" value="sclérodactylie" v-model="checkMajor">
        <label class="Sharp__list__item__label" for="sclérodactylie">Mains gonflées ou sclérodactylie</label>
      </li>
      <li>
        <input class="Sharp__list__item__input" type="checkbox" id="anti-U1-RNP" value="anti-U1-RNP" v-model="checkMajor">
        <label class="Sharp__list__item__label" for="anti-U1-RNP">Anticorps anti-ENA positif avec positivité des anti-U1-RNP et
          négativité des anti-Sm</label>
      </li>
    </ul>

    <div class="Sharp__container__subtitle">
      <h3 class="Sharp__subtitle">Critère mineurs</h3>
      <span class="Sharp__count">{{ countMinor }}</span>
    </div>

   <ul class="Sharp__list">
      <li>
        <input class="Sharp__list__item__input" type="checkbox" id="Alopécie" value="Alopécie" v-model="checkMinor">
        <label class="Sharp__list__item__label" for="Alopécie">Alopécie</label>
      </li>
      <li>
        <input class="Sharp__list__item__input" type="checkbox" id="Leucopénie" value="Leucopénie" v-model="checkMinor">
        <label class="Sharp__list__item__label" for="Leucopénie">Leucopénie</label>
      </li>
      <li>
        <input class="Sharp__list__item__input" type="checkbox" id="Anémie" value="Anémie" v-model="checkMinor">
        <label class="Sharp__list__item__label" for="Anémie">Anémie</label>
      </li>
      <li>
        <input class="Sharp__list__item__input" type="checkbox" id="Pleurésie" value="Pleurésie" v-model="checkMinor">
        <label class="Sharp__list__item__label" for="Pleurésie">Pleurésie</label>
      </li>
      <li>
        <input class="Sharp__list__item__input" type="checkbox" id="Péricardite" value="Péricardite" v-model="checkMinor">
        <label class="Sharp__list__item__label" for="Péricardite">Péricardite</label>
      </li>
      <li>
        <input class="Sharp__list__item__input" type="checkbox" id="Arthrite" value="Arthrite" v-model="checkMinor">
        <label class="Sharp__list__item__label" for="Arthrite">Arthrite</label>
      </li>
      <li>
        <input class="Sharp__list__item__input" type="checkbox" id="Trijumeau" value="Trijumeau" v-model="checkMinor">
        <label class="Sharp__list__item__label" for="Trijumeau">Névralagie du Trijumeau</label>
      </li>
      <li>
        <input class="Sharp__list__item__input" type="checkbox" id="rashMalaire" value="rashMalaire" v-model="checkMinor">
        <label class="Sharp__list__item__label" for="rashMalaire">Rash Malaire</label>
      </li>
      <li>
        <input class="Sharp__list__item__input" type="checkbox" id="Thrombopénie" value="Thrombopénie" v-model="checkMinor">
        <label class="Sharp__list__item__label" for="Thrombopénie">Thrombopénie</label>
      </li>
      <li>
        <input class="Sharp__list__item__input" type="checkbox" id="MyositeModérée" value="MyositeModérée" v-model="checkMinor">
        <label class="Sharp__list__item__label" for="MyositeModérée">Myosite modérée</label>
      </li>
      <li>
        <input class="Sharp__list__item__input" type="checkbox" id="ATCD" value="ATCD" v-model="checkMinor">
        <label class="Sharp__list__item__label" for="ATCD">ATCD de mains gonflées</label>
      </li>
    </ul>

    <p class="Sharp__description">
      Diagnostic si 4 critères majeurs sans anti-Sm
      Ou probable si 3 majeurs ou 2 majeurs et 1 mineurs sans anti-Sm
    </p>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Sharp',
  data:() => ({
      checkMajor: [],
      checkMinor: [],
}),
  computed: {
    countMajor() {
      return this.checkMajor.length
    },
    countMinor() {
      return this.checkMinor.length
    },
  }
});
</script>

<style scoped lang="scss">
@import 'src/sass/global.scss';

.Sharp {
  &__title {
    color: #4c2b62;
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 1.2;
    margin: 0 6% .5rem 6%;
  }
  &__subtitle {
    font-size: 1.2rem;
    font-weight: 700;
    color: #404040;
    margin: 0.25em 0;
  }
  &__count {
    padding: 1em;
  }
  &__list {
    cursor: pointer;
    list-style: none;
    margin: 0;
    padding: 0;
    &__sublist {
      color: #707070;
      font-size: 0.95rem;
      margin-left: 2em;
    }
    &__item {
      &__label {
        font-weight: 400;
        letter-spacing: .04em;
        line-height: 2;
        cursor: pointer;
      }
      &__input {
        margin-right: 2em;
        cursor: pointer;
      }
    }
  }
  &__container__subtitle {
    display: flex;
    align-items: center;
  }
  &__description {
    color: red;
    margin: 2em;
  }
}
</style>
