<template>
  <div class="Sharp">

    <h2 class="Sharp__title">Critères de sharp</h2>

    <div class="Sharp__container__subtitle">
      <h3 class="Sharp__subtitle">Critère majeurs :</h3>
      <span class="Sharp__count">{{ countMajor }}</span>
    </div>

    <div class="Sharp__list__item">
        <input class="Sharp__list__item__input" type="checkbox" id="myosite" value="Myosite sévère" v-model="checkMajor">
        <label class="Sharp__list__item__label" for="myosite">Myosite sévère</label>
    </div>

    <div class="Sharp__list__item">
        <input class="Sharp__list__item__input" type="checkbox" id="pulmonaire" value="Atteinte pulmonaire" v-model="checkMajor">
        <label class="Sharp__list__item__label" for="pulmonaire">Atteinte pulmonaire :</label>
    </div>
    <p class="Sharp__list__sublist">- DLCO < 70%</p>
    <p class="Sharp__list__sublist">- HTAP</p>
    <p class="Sharp__list__sublist">- Lésion histologiques vasculaire</p>
    <div class="Sharp__list__item">
        <input class="Sharp__list__item__input" type="checkbox" id="raynaud" value="raynaud" v-model="checkMajor">
        <label class="Sharp__list__item__label" for="raynaud">Phénomène de Raynaud et/ou hypomotilité oesophagienne</label>
    </div>
    <div class="Sharp__list__item">
        <input class="Sharp__list__item__input" type="checkbox" id="sclérodactylie" value="sclérodactylie" v-model="checkMajor">
        <label class="Sharp__list__item__label" for="sclérodactylie">Mains gonflées ou sclérodactylie</label>
    </div>
    <div class="Sharp__list__item">
        <input class="Sharp__list__item__input" type="checkbox" id="anti-U1-RNP" value="anti-U1-RNP" v-model="checkMajor">
        <label class="Sharp__list__item__label" for="anti-U1-RNP">Anticorps anti-ENA positif avec positivité des anti-U1-RNP et
          négativité des anti-Sm
        </label>
    </div>

    <div class="Sharp__container__subtitle">
      <h3 class="Sharp__subtitle">Critère mineurs :</h3>
      <span class="Sharp__count">{{ countMinor }}</span>
    </div>
    <div class="Sharp__list__item">
      <input class="Sharp__list__item__input" type="checkbox" id="Alopécie" value="Alopécie" v-model="checkMinor">
      <label class="Sharp__list__item__label" for="Alopécie">Alopécie</label>
    </div>
    <div class="Sharp__list__item">
      <input class="Sharp__list__item__input" type="checkbox" id="Leucopénie" value="Leucopénie" v-model="checkMinor">
      <label class="Sharp__list__item__label" for="Leucopénie">Leucopénie</label>
    </div>
    <div class="Sharp__list__item">
      <input class="Sharp__list__item__input" type="checkbox" id="Anémie" value="Anémie" v-model="checkMinor">
      <label class="Sharp__list__item__label" for="Anémie">Anémie</label>
    </div>
    <div class="Sharp__list__item">
      <input class="Sharp__list__item__input" type="checkbox" id="Pleurésie" value="Pleurésie" v-model="checkMinor">
      <label class="Sharp__list__item__label" for="Pleurésie">Pleurésie</label>
    </div>
    <div class="Sharp__list__item">
      <input class="Sharp__list__item__input" type="checkbox" id="Péricardite" value="Péricardite" v-model="checkMinor">
      <label class="Sharp__list__item__label" for="Péricardite">Péricardite</label>
    </div>
    <div class="Sharp__list__item">
      <input class="Sharp__list__item__input" type="checkbox" id="Arthrite" value="Arthrite" v-model="checkMinor">
      <label class="Sharp__list__item__label" for="Arthrite">Arthrite</label>
    </div>
    <div class="Sharp__list__item">
      <input class="Sharp__list__item__input" type="checkbox" id="Trijumeau" value="Trijumeau" v-model="checkMinor">
      <label class="Sharp__list__item__label" for="Trijumeau">Névralagie du Trijumeau</label>
    </div>
    <div class="Sharp__list__item">
      <input class="Sharp__list__item__input" type="checkbox" id="rashMalaire" value="rashMalaire" v-model="checkMinor">
      <label class="Sharp__list__item__label" for="rashMalaire">Rash Malaire</label>
    </div>
    <div class="Sharp__list__item">
      <input class="Sharp__list__item__input" type="checkbox" id="Thrombopénie" value="Thrombopénie" v-model="checkMinor">
      <label class="Sharp__list__item__label" for="Thrombopénie">Thrombopénie</label>
    </div>
    <div class="Sharp__list__item">
      <input class="Sharp__list__item__input" type="checkbox" id="MyositeModérée" value="MyositeModérée" v-model="checkMinor">
      <label class="Sharp__list__item__label" for="MyositeModérée">Myosite modérée</label>
    </div>
    <div class="Sharp__list__item">
      <input class="Sharp__list__item__input" type="checkbox" id="ATCD" value="ATCD" v-model="checkMinor">
      <label class="Sharp__list__item__label" for="ATCD">ATCD de mains gonflées</label>
    </div>

    <div class="Sharp__description">
      <p class="Sharp__description__text">Diagnostic :</p>
      <p class="Sharp__description__text">Si 4 critères majeurs sans anti-Sm.</p>
      <p class="Sharp__description__text">Ou probable si 3 majeurs.</p>
      <p class="Sharp__description__text">Ou 2 majeurs et 1 mineurs sans anti-Sm.</p>
    </div>
      <Footer/>
  </div>

</template>

<script lang="ts">
import Vue from 'vue';
import Footer from "@/components/Footer.vue";

export default Vue.extend({
  name: 'Sharp',
    components: {Footer},
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
    user-select: none;
    list-style: none;
    margin: 0;
    padding: 0;
    &__sublist {
      color: #707070;
      font-size: 0.95rem;
      margin-left: 3.5em;
    }
    &__item {
      display: flex;
      align-items: center;
      &__label {
        font-weight: 400;
        letter-spacing: .04em;
        line-height: 2;
        cursor: pointer;
        flex: 10;
      }
      &__input {
        margin-right: 2em;
        cursor: pointer;
        flex: 1;
      }
    }
  }
  &__container__subtitle {
    display: flex;
    align-items: center;
  }
  &__description {
    color: #b50707;
    margin: 2em;
    &__text {
      margin: 0;
      line-height: 1.3;
    }
  }
}
</style>
