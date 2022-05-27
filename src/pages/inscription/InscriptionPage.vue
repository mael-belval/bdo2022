<template>
  <div>
    <CarouselComponent page="Inscription" :images="[Embarcation1, Embarcation2, Embarcation3]" />
    <main>
      <h1>Inscription</h1>
      <p class="center">Les inscriptions sont ouvertes du 29 mai au 31 août</p>
      <h2>ATTENTION</h2>
      <p class="center">Les inscriptions fermeront plus tôt si nous atteignons notre maximum de 15 équipes</p>
      <h2>En quoi cela consiste-t-il ?</h2>
      <p>En amont de l’événement, tu devras réunir ta plus fidèle équipe, et construire ensemble votre radeau autour d’une baignoire ! N’oubliez pas
        de trouver un thème pour votre embarcation, l’originalité aussi fait remporter des points !</p>
      <p>Le jour de l’événement, le dimanche 18 septembre 2022, vous devrez être disponible de 10h à 18h (approximativement) à Compiègne. En effet,
        il faudra tester la flottabilité de votre baignoire le matin, vous aurez ensuite un temps pour vous préparer et profiter du village
        associatif, puis faire la course en début d’après midi et enfin participer à la remise des prix vers 17h30.</p>
      <p>Ne vous inquiétez pas, même pour les moins sportifs, la course en elle-même fait 1km, et se rame approximativement en 30 minutes.</p>
      <p>Des prix seront remis pour les 3 équipes les plus rapides, mais il y aura aussi le prix d’originalité, le prix du jury et le prix du
        public (choisis par les gens présents au village).</p>
      <p>Pour toute question sur l’inscription, contacte nous à <a href="mailto:baignoirutc@assos.utc.fr">baignoirutc@assos.utc.fr</a>.</p>
      <h2>Les membres d’équipage</h2>
      <p>Chaque équipe doit être composée de 2 à 8 personnes de 15 ans minimum. Chaque équipe doit avoir un chef d’équipe majeur.</p>
      <p>La participation est gratuite pour les cotisants BDE-UTC, et de 1€ par personne pour les non-cotisants.</p>
      <h2>Documents à télécharger</h2>
      <p><a href="#">Règlement 2021</a></p>
      <p><a href="#">Cahier des charges</a></p>
      <h2>Inscrire son équipe</h2>
    </main>
    <iframe
        id="google_form"
        src="https://docs.google.com/forms/d/e/1FAIpQLSdTg6yoC2UYMgFt4S3HKEwv-YMfWhSxStxtkHPFNERYbS2BMQ/viewform?embedded=true"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
    >
      Chargement…
    </iframe>
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from "@/components/footer/FooterComponent";
import CarouselComponent from "@/components/carousel/CarouselComponent";

import Embarcation1 from "./embarcation1.jpg";
import Embarcation2 from "./embarcation2.jpg";
import Embarcation3 from "./embarcation3.jpg";

export default {
  name: "InscriptionPage",
  components: {
    CarouselComponent,
    FooterComponent
  },
  data() {
    return {
      Embarcation1,
      Embarcation2,
      Embarcation3
    };
  }
}
</script>

<style scoped>
.center {
  text-align: center;
}

main {
  margin-top: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
}

div {
  background-image: linear-gradient(to right bottom, #c0f8ff, #d4f8ff, #e8f9ff, #f7fbff, #ffffff);
  line-height: 1.5rem;
}

iframe {
  width: 100%;
  height: 100vh;
}
</style>
