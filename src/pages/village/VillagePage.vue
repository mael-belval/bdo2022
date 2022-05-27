<template>
  <div class="container">
    <CarouselComponent page="Village" :images="[Village1, Village2, Village3]" />
    <h1>Village</h1>
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
.container {
  margin-top: 3.5rem;
}
</style>
