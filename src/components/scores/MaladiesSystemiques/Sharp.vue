<template>
  <div class="Sharp">
    <h2 class="title">Critères de sharp</h2>
    <h4 class="subtitle">Critère majeurs</h4>

    <input
      type="checkbox"
      class="btn-check"
      id="majeurBtncheck1"
      autocomplete="off"
    />
    <label class="btn btn-outline-primary" for="majeurBtncheck1"
      >1. Myosite sévère</label
    >

    <h5>2. Atteinte pulmonaire :</h5>

    <input
      type="checkbox"
      class="btn-check"
      id="majeurBtncheck2"
      autocomplete="off"
    />
    <label class="btn btn-outline-primary" for="majeurBtncheck2">
      DLCO < 70%
    </label>

    <input
      type="checkbox"
      class="btn-check"
      id="majeurBtncheck3"
      autocomplete="off"
    />
    <label class="btn btn-outline-primary" for="majeurBtncheck3">HTAP</label>

    <input
      type="checkbox"
      class="btn-check"
      id="majeurBtncheck4"
      autocomplete="off"
    />
    <label class="btn btn-outline-primary" for="majeurBtncheck4"
      >Lésion histologiques vasculaire</label
    >

    <input
      type="checkbox"
      class="btn-check"
      id="majeurBtncheck5"
      autocomplete="off"
    />
    <label class="btn btn-outline-primary" for="majeurBtncheck5"
      >3. Phénomène de Raynaud et/ou hypomotilité oesophagienne</label
    >

    <input
      type="checkbox"
      class="btn-check"
      id="majeurBtncheck6"
      autocomplete="off"
    />
    <label class="btn btn-outline-primary" for="majeurBtncheck6"
      >4. Mains gonflées ou sclérodactylie</label
    >

    <input
      type="checkbox"
      class="btn-check"
      id="majeurBtncheck7"
      autocomplete="off"
    />
    <label class="btn btn-outline-primary" for="majeurBtncheck7"
      >5. Anticorps anti-ENA positif avec positivité des anti-U1-RNP et
      négativité des anti-Sm</label
    >

    <h4 class="subtitle">Critère mineurs</h4>

    <input
      type="checkbox"
      class="btn-check"
      id="mineurBtncheck1"
      autocomplete="off"
    />
    <label class="btn btn-outline-primary" for="mineurBtncheck1"
      >1. Alopécie</label
    >

    <input
      type="checkbox"
      class="btn-check"
      id="mineurBtncheck2"
      autocomplete="off"
    />
    <label class="btn btn-outline-primary" for="mineurBtncheck2"
      >2. Leucopénie</label
    >

    <input
      type="checkbox"
      class="btn-check"
      id="mineurBtncheck3"
      autocomplete="off"
    />
    <label class="btn btn-outline-primary" for="mineurBtncheck3"
      >3. Anémie</label
    >

    <input
      type="checkbox"
      class="btn-check"
      id="mineurBtncheck4"
      autocomplete="off"
    />
    <label class="btn btn-outline-primary" for="mineurBtncheck4"
      >4. Pleurésie</label
    >

    <input
      type="checkbox"
      class="btn-check"
      id="mineurBtncheck5"
      autocomplete="off"
    />
    <label class="btn btn-outline-primary" for="mineurBtncheck5"
      >5. Péricardite</label
    >

    <input
      type="checkbox"
      class="btn-check"
      id="mineurBtncheck6"
      autocomplete="off"
    />
    <label class="btn btn-outline-primary" for="mineurBtncheck6"
      >6. Arthrite</label
    >

    <input
      type="checkbox"
      class="btn-check"
      id="mineurBtncheck7"
      autocomplete="off"
    />
    <label class="btn btn-outline-primary" for="mineurBtncheck7"
      >7. Névralagie du Trijumeau</label
    >

    <input
      type="checkbox"
      class="btn-check"
      id="mineurBtncheck8"
      autocomplete="off"
    />
    <label class="btn btn-outline-primary" for="mineurBtncheck8"
      >8. Rash Malaire</label
    >

    <input
      type="checkbox"
      class="btn-check"
      id="mineurBtncheck9"
      autocomplete="off"
    />
    <label class="btn btn-outline-primary" for="mineurBtncheck9"
      >9. Thrombopénie</label
    >

    <input
      type="checkbox"
      class="btn-check"
      id="mineurBtncheck10"
      autocomplete="off"
    />
    <label class="btn btn-outline-primary" for="mineurBtncheck10"
      >10. Myosite modérée</label
    >

    <input
      type="checkbox"
      class="btn-check"
      id="mineurBtncheck11"
      autocomplete="off"
    />
    <label class="btn btn-outline-primary" for="mineurBtncheck11"
      >11. ATCD de mains gonflées</label
    >

    <p>Diagnostic si 4 critères majeurs sans anti-Sm</p>
    <p>Ou probable si 3 majeurs ou 2 majeurs et 1 mineurs sans anti-Sm</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Sharp',
});
</script>

<style scoped lang="scss">
@import 'src/sass/global.scss';
@import 'src/sass/global';

.Sharp {
  [type='checkbox'] {
    appearance: none;
  }

  .btn {
    height: unset;
  }
}
</style>
