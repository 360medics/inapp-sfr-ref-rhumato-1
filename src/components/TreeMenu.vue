<template>
    <div class="tree-menu" :class="{ children: depth === 1,
    grandChildren: depth === 2,
    grandGrandChildren: depth === 3}">

        <div v-if="this.type === 'list'"
        >
            <div class="label-wrapper dropdown" @click="toggleChildren">
                <p class="dropdown__item">{{ name }}</p>
                <i v-if="!this.showChildren" class="fas fa-chevron-down menu__icon menu__icon-down" />
                <i v-else class="fas fa-chevron-up menu__icon menu__icon-up" />
            </div>

            <collapse-transition :duration="150">
                <div v-show="showChildren">
                    <div v-for="(subChildren , index) in children" :key="index">
                       <tree-menu :index="index" :name="subChildren.name" :type="subChildren.type" :slug="subChildren.slug" :children="subChildren.children" :depth="depth + 1" :content="subChildren.content"/>
                    </div>
                </div>
            </collapse-transition>


        </div>

        <div v-else-if="this.type === 'pdflist'">
            <div class="label-wrapper menuDarkImportant" @click="toggleChildren">
                <p class="dropdown__item">{{ name }}</p>
                <i v-if="!this.showChildren" class="fas fa-chevron-right menu__icon menu__icon-right" />
                <i v-else class="fas fa-chevron-down menu__icon menu__icon-down" />
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
                    class="label-wrapper menuDarkImportant"
                    :target="isMobile() ? '_self' : '_blank'"
                    rel="noopener noreferrer"
            >
                <p class="dropdown__item">{{ name }}</p>
                <i v-if="!this.showChildren" class="fas fa-link menu__icon menu__icon-link" />
            </a>
        </div>
        <div v-else-if="this.type === 'mailto'">
            <a @click="closeOtherMenu()" :href="content" class="label-wrapper menuDarkImportant">
                <p class="dropdown__item">{{ name }}</p>
                <i v-if="!this.showChildren" class="far fa-paper-plane menu__icon menu__icon-plane" />
            </a>
        </div>

        <div v-else-if="this.type === 'pdf'">
            <a @click="closeOtherMenu()"
                    :href="externLink(content)"
                    class="label-wrapper menuDarkImportant"
                    :target="isMobile() ? '_self' : '_blank'"
                    rel="noopener noreferrer"
            >
                <p class="dropdown__item"> {{ name }} </p>
            </a>
        </div>

        <router-link :to="'/score/' + this.slug" v-else>
            <div class="label-wrapper menuDarkImportant" @click="closeOtherMenu()">
                <p class="dropdown__item"> {{ name }}</p>
                <i v-if="!this.showChildren" class="fas fa-chevron-right menu__icon menu__icon-right" />
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
.dropdown__item {
  padding-left: $gutter_small;
}
.menuDarkImportant {
  color: $darkColor !important;
}
.label-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  &.dropdown  {
    width: 100%;
    & > div, div {
      padding: 1em;
    }
    & + div {
      background-color: #F4F4F8;
      border-radius: 7px;
      color: #4C2B63;
      & > div {
        border-top: 1px solid #EBEBF2;
      }
      & > :first-child {
        border: none;
      }
    }
    & + div > :first-child > div{
      border-top-right-radius: 7px;
      border-top-left-radius: 7px;
    }
    & + div > :last-child > div{
      border-bottom-right-radius: 7px;
      border-bottom-left-radius: 7px;
    }
  }
}
.tree-menu {
  & .menu__icon {
    color: $primaryColor;
    background-color: $primaryColor-light;
    border-radius: $menuItem_corner;
    &-right {
      padding: $menuItem_iconGutter;
    }
    &-up {
      padding: $menuItem_iconGutter-inverted;
    }
    &-down, &-link , &-plane{
      padding: $menuItem_iconGutter-inverted;
    }
  }
  &.children {
    background-color: #F4F4F8;
    color: $darkColor;
    font-size: $fontSize_small;
    & + div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    & i {
      color: $darkColor;
      background-color: transparent;
    }
  }
  &.grandChildren {
    background-color: #EBEBF2;
    color: #4C2B63;
    & > div {
      border-bottom: 1px solid #DFDFEB;
      & div ~ .label-wrapper .dropdown, div {
        margin: -1px 0;
      }
    }
    & i {
      color: $secondaryColor;
    }
  }
  &.grandGrandChildren {
    background-color: #DFDFEB;
    color: #4C2B63;
    font-weight: 400;
    padding: $menuItemGrandChildren_gutter;
    & > div + div ~ .dropdown, div {
      border-bottom: 1px solid #C0ADCC;
    }
    & i {
      display: none;
    }
  }
}
</style>
