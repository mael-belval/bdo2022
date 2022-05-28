<script>
import InlineSvg from 'vue-inline-svg';

import BarsSolid from "./bars-solid.svg";
import { routes } from "@/utils";

export default {
  name: "MainLayout",
  components: {
    InlineSvg
  },
  data() {
    return {
      routes,
      menuOpen: false,
      BarsSolid
    }
  },
  methods: {
    onSwipe(event) {
      if (event === 'left') {
        if (this.$route.name === routes[routes.length - 1]?.name) {
          return
        }
        this.$router.push({ name: routes[routes.findIndex(route => route.name === this.$route.name) + 1].name })
      } else if (event === 'right') {
        if (this.$route.name === routes[0]?.name) {
          return
        }
        this.$router.push({ name: routes[routes.findIndex(route => route.name === this.$route.name) - 1].name })
      }
    }
  }
}
</script>

<template>
  <header>
    <nav :class="{ 'nav-header': true, 'nav-open': menuOpen }">
      <InlineSvg :src="BarsSolid" class="burger-menu" @click="() => this.menuOpen = !this.menuOpen"  />
      <template v-for="route in routes" :key="route.id">
        <router-link
            :to="{ name: route.name }"
            v-show="menuOpen || this.$route.name === route.name"
            @click="() => this.menuOpen = false">
          {{ route.title }}
        </router-link>
      </template>
    </nav>
  </header>

  <div v-touch:swipe="onSwipe">
    <slot>
      Something went wrong
    </slot>
  </div>
</template>

<style scoped>
.burger-menu {
  position: absolute;
  top: 0;
  left: 0;
  height: 1.5rem;
  cursor: pointer;
  margin: 1rem;
  fill: var(--text-color);
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
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
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
