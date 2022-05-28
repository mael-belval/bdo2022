<template>
  <div>
    <main>
      <h2>Édition 2021</h2>
      <img src="./edition2021.jpg" alt="Édition 2021" />
      <p class="center"><a href="https://www.youtube.com/watch?v=FnZMfNCcDlA">Aftermovie de l'édition</a></p>

      <h2>Édition 2020</h2>
      <p><i>Annulée pour cause de COVID-19.</i></p>

      <h2>Édition 2019</h2>
      <img src="./edition2019.jpg" alt="Édition 2019" />
      <p class="center"><a href="https://www.youtube.com/watch?v=Qq0liCoNzv4">Aftermovie de l'édition</a></p>
      <p>On a parlé de nous dans <a
          href="https://www.leparisien.fr/oise-60/la-course-des-baignoires-jette-l-ancre-a-compiegne-27-09-2019-8161005.php">
        Le Parisien</a></p>

      <h2>Édition 2018</h2>
      <img src="./edition2018.jpg" alt="Édition 2018" />
      <p class="center"><a href="https://www.youtube.com/watch?v=mDHoNoOKnFg">Aftermovie de l'édition</a></p>
      <p>On a parlé de nous sur
        <a href="https://france3-regions.francetvinfo.fr/hauts-de-france/oise/compiegne/video-etudiants-utc-compiegne-organisent-course-baignoires-1550176.html">
          France 3 HDF</a>, dans
        <a href="https://www.courrier-picard.fr/art/99936/article/2018-03-28/les-baignoires-de-retour-dans-loise-compiegne">Le Courrier Picard</a>
        et dans <a href="http://oise-media.fr/course-des-baignoires-2018-a-compiegne-les-etudiants-de-lutc-vous-attendent/">Oise Média</a>
      </p>
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from "@/components/footer/FooterComponent";
export default {
  name: "PreviousEditionsPage",
  components: {
    FooterComponent
  }
}
</script>

<style scoped>
.center {
  text-align: center;
}

div {
  background-image: linear-gradient(to right top, #39af8d, #38b994, #36c39b, #34cda2, #32d7a9, #38deb0, #3ee4b7, #44ebbe, #52f0c7, #5ff5d0, #6bfad9, #77ffe1);
  line-height: 1.5rem;
}

img {
  max-width: 100%;
}

main {
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
}

h2 {
  margin-top: 3rem;
}

h2:first-child {
  margin-top: 0;
}

i {
  font-style: italic;
}
</style>
