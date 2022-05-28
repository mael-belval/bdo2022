<template>
  <div>
    <div class="page">
      <img src="./photo_accueil.jpg" alt="background" class="background" ref="background">
      <img src="./logo.png" alt="Logo Baignoire dans l'Oise" class="logo">
      <InlineSvg :src="ChevronDown" class="scroll-down" @click="doScroll" v-show="scrollDownOpacity > 0" />
    </div>
    <div class="page">
      <main>
        <h1>Édition 2022</h1>
        <h2>Dimanche 18 septembre</h2>
        <p>La course des Baignoires dans l’Oise revient pour sa 4ème édition à Compiègne, organisée par les étudiants de l’UTC !</p>
        <p>Venez profiter en famille ou entre amis du village associatif, situé sur le <b>parking Vinci, cours Guynemer</b>, où vous pourrez assister
          à la course, mais aussi profiter des différentes animations tout au long de la journée, des concerts, des spectacles, des jeux,
          ainsi que d’un repas et un large choix de boissons. Plus d’informations sur le planning de la journée au village sera disponible
          <router-link :to="{ name: 'village' }">ici</router-link>.</p>
        <p>Entreprise compiégnoise ou association, vous souhaitez tenir un stand au village ? Contactez nous à
          <a href="mailto:baignoirutc@assos.utc.fr">baignoirutc@assos.utc.fr</a>.</p>
        <p>Pour les plus téméraires, participez directement à la course ! Une baignoire, un thème, un peu de motivation, c’est tout ce qu’il vous faut
          pour passer une journée des plus folles ! En famille ou entre amis, n’hésitez plus, vous trouverez toutes les informations
          <router-link :to="{ name: 'inscription' }">ici</router-link> !</p>
        <div class="medias">
          <a href="https://www.facebook.com/baignoiresdansloise/" target="_blank">
            <img src="./f_logo_RGB-Blue_100.png" alt="Facebook">
          </a>
          <a href="https://www.instagram.com/baignoires_oise/" target="_blank">
            <img src="./instagram.png" alt="Instagram">
          </a>
        </div>
      </main>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import InlineSvg from "vue-inline-svg";

import { getScrollPercent } from "@/utils";

import ChevronDown from "./chevron-down-solid.svg";
import FooterComponent from "@/components/footer/FooterComponent";

export default {
  name: "AccueilPage",
  data() {
    return {
      blur: 0,
      scale: 1,
      ChevronDown,
      scrollDownOpacity: 1
    };
  },
  components: {
    FooterComponent,
    InlineSvg
  },
  methods: {
    onScroll() {
      this.blur = `blur(${getScrollPercent() / 100.0}rem)`;
      this.scale = `scale(${1 + getScrollPercent() / 1000.0})`;
      this.scrollDownOpacity = 1 - (window.scrollY * 4 / window.innerHeight);
    },
    doScroll() {
      window.scrollTo({
        top: window.innerHeight - (3.5 * parseFloat(getComputedStyle(document.documentElement).fontSize)),
        behavior: "smooth"
      });
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }
}
</script>

<style scoped>
.page {
  height: calc(100vh - 3.5rem);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.5rem;
}

.background {
  position: fixed;
  height: 100%;
  z-index: -1;
  filter: v-bind(blur);
  transform: v-bind(scale);
  transform-origin: center center;
  transition: all 0.3s ease-in-out;
}

.logo {
  width: min(70vw, 50vh);
  max-width: 480px;
  z-index: 1;
}

.medias {
  display: flex;
  justify-content: space-evenly;
}

.medias img {
  width: 4rem;
}

.scroll-down {
  position: absolute;
  bottom: 2rem;
  fill: #c0f8ff;
  height: clamp(1rem, 4rem, 10vh);
  filter: drop-shadow(0 0 5px #777);
  cursor: pointer;
  opacity: v-bind(scrollDownOpacity);
  animation: 1s ease-in-out infinite bounce;
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
