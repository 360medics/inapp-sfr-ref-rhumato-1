<template>
  <div
    class="tree-menu"
    :class="{
      children: depth % 2 === 1,
      grandChildren: depth !== 0 && depth % 2 === 0,
    }"
  >
    <div v-if="this.type === 'list'">
      <div class="label-wrapper" @click="toggleChildren">
        {{ name }}
        <i v-if="!this.showChildren" class="fas fa-chevron-right"></i>
        <i v-else class="fas fa-chevron-down"></i>
      </div>
      <tree-menu
        v-if="showChildren"
        v-for="subChildren in children"
        :name="subChildren.name"
        :type="subChildren.type"
        :slug="subChildren.slug"
        :children="subChildren.children"
        :depth="depth + 1"
        :key="subChildren.name"
        :content="subChildren.content"
      >
      </tree-menu>
    </div>

    <div v-else-if="this.type === 'pdflist'">
      <div class="label-wrapper" @click="toggleChildren">
        {{ name }}
        <i v-if="!this.showChildren" class="fas fa-chevron-right"></i>
        <i v-else class="fas fa-chevron-down"></i>
      </div>
      <div
        v-for="(pdf, i) in children"
        :key="i"
        :class="showChildren ? 'pdf-viewer' : ''"
      >
        <iframe
          v-if="showChildren"
          :src="pdf.content"
          width="100%"
          height="100%"
          frameborder="0"
          scrolling="no"
          allowfullscreen="true"
        ></iframe>
      </div>
    </div>

    <div v-else-if="this.type === 'link'">
      <a
        :href="externLink(content)"
        class="label-wrapper"
        :target="isMobile() ? '_self' : '_blank'"
      >
        {{ name }}
      </a>
    </div>

    <router-link :to="'/score/' + this.slug" v-else>
      <div class="label-wrapper">
        {{ name }}
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  props: ['name', 'type', 'slug', 'children', 'depth', 'content'],
  data() {
    return {
      showChildren: false,
      childrenIsArray: Array.isArray(this.children),
    };
  },
  name: 'tree-menu',
  methods: {
    toggleChildren() {
      this.showChildren = !this.showChildren;
    },

    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    },

    externLink(link) {
      let finalLink = '';
      let target = '_blank';

      if (this.isMobile()) {
        finalLink = 'medics://viewer?m_source=';
        target = '_self';
      }
      finalLink += link;
      return finalLink;
    },
  },

};
</script>
<style scoped lang="scss">
@import 'src/sass/global.scss';
.tree-menu {
  color: #472e5a;
  font-weight: bold;
  background: #ecf1f5;
  border-radius: 5px;
  margin-top: 0.5rem;
  padding: 16px;
  transition: all 0.5s linear;
  border: 2px solid #f7f7f7;
  box-shadow: 0px 0px 10px 5px rgba(246,246,246,0.69);

  i {
    background: #80cc28;
    color: #ecf1f6;
    padding: 0.5em 0.75em;
    border-radius: 0.5rem;
    font-weight: lighter;
    display: flex;
  }

  .label-wrapper {
    display: flex;
    cursor: pointer;
    text-align: left;
    justify-content: space-between;
    align-items: center;
    outline: none;
    color: inherit;
  }

  a {
    all: unset;
  }

  &.children {
    i {
      background: #472e5a;
    }
    background-color: #4c2b62;
    color: #fff;
  }

  &.grandChildren {
    background-color: #fff;
    color: #4c2b62;
    box-shadow: none;
    border: none;
  }
}
.pdf-viewer {
  margin: 10px;
  height: 40vh;
}
</style>
