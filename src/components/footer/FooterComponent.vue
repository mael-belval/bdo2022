<template>
  <footer>
    <img src="./PVDC.jpg " alt="PVDC" />
    <img src="./ssp.jpg" alt="SSP" />
    <img src="./oise.jpg" alt="Oise" />
    <img src="./picsart.jpg" alt="Piscart" />
    <img src="./compiègne.jpg" alt="Compiègne" />
    <img src="./aviron.jpg" alt="Aviron" />
    <img src="./dbs.jpg" alt="Dbs" />
    <img src="./snc.png" alt="SNC" />
    <img src="./bde.jpg" alt="BDE" />
    <img src="./utc.jpg" alt="UTC" />
  </footer>
</template>

<script>
export default {
  name: "FooterComponent"
}
</script>

<style scoped>
footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #fff;
}

footer img {
  height: 2.5rem;
  margin: 0.3rem;
}
</style>
