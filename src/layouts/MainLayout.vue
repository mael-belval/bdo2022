<script>
import InlineSvg from 'vue-inline-svg';

import InscriptionPage from "@/pages/InscriptionPage";
import AccueilPage from "@/pages/AccueilPage";
import PreviousEditionsPage from "@/pages/PreviousEditionsPage";
import VillagePage from "@/pages/VillagePage";

import BarsSolid from "@/assets/bars-solid.svg";

const routes = [
  {
    path: '#/', component: AccueilPage, title: 'Accueil', id: 0
  },
  {
    path: '#/village', component: VillagePage, title: 'Village', id: 1
  },
  {
    path: '#/inscription', component: InscriptionPage, title: 'Inscription', id: 2
  },
  {
    path: '#/previous-editions', component: PreviousEditionsPage, title: 'Éditions précédentes', id: 3
  }
]

export default {
  name: "MainLayout",
  components: {
    InscriptionPage,
    AccueilPage,
    PreviousEditionsPage,
    VillagePage,
    InlineSvg
  },
  data() {
    return {
      currentRoute: window.location.hash,
      routes,
      menuOpen: false,
      BarsSolid
    }
  },
  computed: {
    currentPage() {
      return routes.filter(route => route.path === this.currentRoute)[0]?.component || AccueilPage
    },
    currentPath() {
      return routes.filter(route => route.path === this.currentRoute)[0]?.path || '#/'
    },
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentRoute = window.location.hash
    })
  }
}
</script>

<template>
  <InlineSvg :src="BarsSolid" class="burger-menu" @click="() => this.menuOpen = !this.menuOpen"  />
  <nav :class="{ 'nav-header': true, 'nav-open': menuOpen }">
    <template v-for="route in routes" :key="route.id">
      <a :href="route.path" v-show="menuOpen || this.currentPath === route.path" @click="() => this.menuOpen = false">{{ route.title }}</a>
    </template>
  </nav>
  <component :is="currentPage" />
</template>

<style scoped>
* {
  --header-color: #c0f8ff;
  --text-color: #009691;
  font-family: Arial, Helvetica, sans-serif;
}

.burger-menu {
  position: fixed;
  top: 0;
  left: 0;
  height: 1.5rem;
  z-index: 11;
  cursor: pointer;
  margin: 1rem;
  fill: var(--text-color);
  display: inline-block;
}

.nav-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  max-height: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5rem;
  background-color: var(--header-color);
  font-size: 1.5rem;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  z-index: 10;
}

.nav-open {
  max-height: 100vh;
  transition: all 0.3s ease-in-out;
}

a, img {
  text-decoration: none;
  color: var(--text-color);
  margin: 0.5rem 0;
}

a:hover {
  text-decoration: underline;
}
</style>
