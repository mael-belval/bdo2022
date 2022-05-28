<template>
  <div>
    <CarouselComponent page="Village" :images="[Village1, Village2, Village3]" />
    <main>
      <h1>Village</h1>
      <p>Accès au public de 12h à 19h, situé sur le parking Vinci, cour Guynemer à Compiègne. En plus de pouvoir assister à la course dans les
        meilleures conditions, vous y trouverez un stand de restauration, une structure gonflable, des concerts, des spectacles et des jeux.</p>
      <p>L’accès au village et à toutes les activités seront gratuits. Le paiement pour le stand de restauration et de boissons se fera par l’achat
        de tickets en carte bleue, en liquide ou en Pay’UTC au stand “Ticket Conso”.</p>
      <p class="center">Le planning de la journée, ainsi que les ventes de la buvette seront révélés plus tard. Restez connectés !</p>
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from "@/components/footer/FooterComponent";
import CarouselComponent from "@/components/carousel/CarouselComponent";

import Village1 from "./village1.jpg";
import Village2 from "./village2.jpg";
import Village3 from "./village3.jpg";

export default {
  name: "ProgramPage",
  components: {
    CarouselComponent,
    FooterComponent
  },
  data() {
    return {
      Village1,
      Village2,
      Village3
    };
  }
}
</script>

<style scoped>

</style>
