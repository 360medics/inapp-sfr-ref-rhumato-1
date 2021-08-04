<template lang="html">
  <section class="RealisationPratique">
    <h2 class="title">Réalisation pratique</h2>
    <span class="line"></span>

    <p>
      Réalisation des ponctions-infiltrations en pratique
      <br />
      Comment réaliser ces gestes ?
    </p>

    <p class="underline red">Articulations périphériques</p>

    <ul>
      <li class="video" @click="video1 = !video1">
        <div class="video-title">
          Genou : (Pr Benoit Le Goff)<i class="far fa-play-circle"></i>
        </div>
        <iframe
          v-if="video1"
          src="http://www.lecofer.org/videos/K4d.mp4"
          allowfullscreen="true"
        ></iframe>
      </li>
      <li class="video" @click="video2 = !video2">
        <div class="video-title">
          Epaule : (Pr Benoit Le Goff)
          <i class="far fa-play-circle"></i>
        </div>
        <iframe
          v-if="video2"
          src="http://www.lecofer.org/videos/K5e.mp4"
          allowfullscreen="true"
        ></iframe>
      </li>
      <li class="video" @click="video3 = !video3">
        <div class="video-title">
          Poignet : (Dr Marine Clay - Pr Philippe Gaudin)
          <i class="far fa-play-circle"></i>
        </div>
        <iframe
          v-if="video3"
          src="http://www.lecofer.org/videos/K6f.mp4"
          allowfullscreen="true"
        ></iframe>
      </li>
      <li class="video" @click="video4 = !video4">
        <div class="video-title">
          Cheville : (Dr Marine Clay - Pr Philippe Gaudin)
          <i class="far fa-play-circle"></i>
        </div>
        <iframe
          v-if="video4"
          src="http://www.lecofer.org/videos/K7g.mp4"
          allowfullscreen="true"
        ></iframe>
      </li>
    </ul>
  </section>
</template>

<script lang="js">
export default {
    name: 'RealisationPratique',


    data() {
        return {
          video1: false,
          video2: false,
          video3: false,
          video4: false,
        };
    },


}
</script>

<style scoped lang="scss">
@import 'src/sass/global.scss';
.RealisationPratique {
  padding: 0 15px;
  text-align: left;

  .bold {
    font-weight: bold;
  }

  .underline {
    text-decoration: underline;
  }

  .red {
    color: red;
  }
}
.video {
  background-color: lightgray;
  border-radius: 5px;
  margin: 3px;
  padding: 8px;
  width: 95%;
}
.video-title {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}
ul {
  padding: 0;
}
li {
  list-style-type: none;
}
iframe {
  border: none;
  width: 100%;
  margin-top: 20px;
}
</style>
