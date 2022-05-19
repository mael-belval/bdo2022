<template>
  <div>
    <div class="page">
      <img src="../assets/photo_accueil.jpg" alt="background" class="background" ref="background">
      <img src="../assets/logo.png" alt="Logo Baignoire dans l'Oise" class="logo">
    </div>
    <div class="page">
      <main>
        <h1>Édition 2022</h1>
        <h2>Dimanche 18 septembre</h2>
        <p>La course des Baignoires dans l’Oise revient pour sa 4ème édition à Compiègne, organisée par les étudiants de l’UTC !</p>
        <p>Venez profiter en famille ou entre amis du village associatif, situé sur le <b>parking Vinci, cours Guynemer</b>, où vous pourrez assister
          à la course, mais aussi profiter des différentes animations tout au long de la journée, des concerts, des spectacles, des jeux,
          ainsi que d’un repas et un large choix de boissons. Plus d’informations sur le planning de la journée au village sera disponible
          <a href="#/village">ici</a>.</p>
        <p>Entreprise compiégnoise ou association, vous souhaitez tenir un stand au village ? Contactez nous à
          <a href="mailto:baignoirutc@assos.utc.fr">baignoirutc@assos.utc.fr</a>.</p>
        <p>Pour les plus téméraires, participez directement à la course ! Une baignoire, un thème, un peu de motivation, c’est tout ce qu’il vous faut
          pour passer une journée des plus folles ! En famille ou entre amis, n’hésitez plus, vous trouverez toutes les informations
          <a href="#/inscription">ici</a> !</p>
      </main>
    </div>
  </div>
</template>

<script>
import { getScrollPercent } from "@/utils";

export default {
  name: "AccueilPage",
  data() {
    return {
      blur: 0,
      scale: 1
    };
  },
  methods: {
    onScroll() {
      this.blur = `blur(${getScrollPercent() / 100.0}rem)`;
      this.scale = `scale(${1 + getScrollPercent() / 1000.0})`;
    },
    placeBackground() {
      this.$refs.background.style.left = this.$refs.background.width / -2 + "px";
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    window.addEventListener("resize", this.placeBackground);

    this.placeBackground();
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
    window.removeEventListener("resize", this.placeBackground);
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
  color: #009691;
  line-height: 1.5rem;
}

.page:first-child {
  margin-top: 3.5rem;
}

.background {
  position: fixed;
  left: -50%;
  height: 100%;
  z-index: -1;
  filter: v-bind(blur);
  transform: v-bind(scale);
  transform-origin: center center;
  transition: all 0.3s ease-in-out;
}

.logo {
  width: 100%;
  max-width: 80vw;
  z-index: 1;
}

main {
  margin: 0 1rem;
  background-color: #C0F8FFCC;
  border-radius: 5px;
  padding: 1.5rem 1rem;
}

h1 {
  font-size: 2.5rem;
}

h2 {
  font-size: 1.5rem;
}

h1, h2 {
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
}

p {
  margin-bottom: 0.5rem;
}

p:last-child {
  margin-bottom: 0;
}
</style>
