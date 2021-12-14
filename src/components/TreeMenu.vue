<template>
    <div class="tree-menu" :class="{ children: depth === 1,
    grandChildren: depth === 2,
    grandGrandChildren: depth === 3}">

        <div v-if="this.type === 'list'"
        >
            <div class="label-wrapper" @click="toggleChildren">
                {{ name }}
                <i v-if="!this.showChildren" class="fas fa-chevron-right" />
                <i v-else class="fas fa-chevron-down" />
            </div>

            <collapse-transition>
                <div v-show="showChildren">
                    <div v-for="(subChildren , index) in children" :key="index">
                       <tree-menu :index="index" :name="subChildren.name" :type="subChildren.type" :slug="subChildren.slug" :children="subChildren.children" :depth="depth + 1" :content="subChildren.content"/>
                    </div>
                </div>
            </collapse-transition>


        </div>

        <div v-else-if="this.type === 'pdflist'">
            <div class="label-wrapper" @click="toggleChildren">
                {{ name }}
                <i v-if="!this.showChildren" class="fas fa-chevron-right"></i>
                <i v-else class="fas fa-chevron-down"></i>
            </div>
            <div
                    v-if="showChildren"
                    v-for="(pdf, i) in children"
                    :key="i"
                    :class="{
          'tree-menu': showChildren,
          grandChildren: depth % 2 === 1,
          children: depth !== 0 && depth % 2 === 0,
    }"
            >
                <a
                        :href="externLink(pdf.content)"
                        class="label-wrapper"
                        :target="isMobile() ? '_self' : '_blank'"
                        rel="noopener noreferrer"
                >
                    {{ pdf.name }}
                </a>
            </div>
        </div>

        <div v-else-if="this.type === 'link'" >
            <a @click="closeOtherMenu()"
                    :href="externLink(content)"
                    class="label-wrapper"
                    :target="isMobile() ? '_self' : '_blank'"
                    rel="noopener noreferrer"
            >
                {{ name }}
                <i v-if="!this.showChildren" class="fas fa-link"></i>
            </a>
        </div>
        <div v-else-if="this.type === 'mailto'">
            <a @click="closeOtherMenu()" :href="content" class="label-wrapper">
                {{ name }}
                <i v-if="!this.showChildren" class="far fa-paper-plane"></i>
            </a>
        </div>

        <div v-else-if="this.type === 'pdf'">
            <a @click="closeOtherMenu()"
                    :href="externLink(content)"
                    class="label-wrapper"
                    :target="isMobile() ? '_self' : '_blank'"
                    rel="noopener noreferrer"
            >
                {{ name }}
            </a>
        </div>

        <router-link :to="'/score/' + this.slug" v-else>
            <div class="label-wrapper" @click="closeOtherMenu()">
                {{ name }}
                <i v-if="!this.showChildren" class="fas fa-chevron-right" />
            </div>
        </router-link>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { CollapseTransition } from "@ivanv/vue-collapse-transition"

export default Vue.extend({

    props: ['name', 'type', 'slug', 'children', 'depth', 'content', 'index'],
    data() {
        return {
            showChildren: false,
            childrenIsArray: Array.isArray(this.children),
            navigation: this.$root.$data.state.navigation
        };
    },
    name: 'tree-menu',
    components: {
        CollapseTransition
    },
    mounted() {
        console.log('mounted')
        this.showChildren = this.navigation[this.depth] === this.name;
    },
    watch: {
        navigation: function (newNav, oldNav) {
            this.showChildren = this.navigation[this.depth] === this.name;
        },
    },
    methods: {
        closeOtherMenu() {
            if (this.depth === 0 )
                this.$root.$data.state.addNavigation(0, null)
        },
        toggleChildren() {
            this.showChildren = !this.showChildren;
            this.$root.$data.state.addNavigation(this.depth, this.name)
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
});
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
  border: 1px solid #f7f7f7;
  box-shadow: 0 0 10px 5px rgba(246,246,246,0.69);

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
  &.grandGrandChildren {
   // background-color: red;
  }
}
.pdf-viewer {
  margin: 10px;
}
</style>
