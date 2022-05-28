<script>
import MainLayout from "@/layouts/MainLayout";
export default {
  name: 'App',
  components: {
    MainLayout
  }
}
</script>

<template>
  <MainLayout>
    <router-view v-slot="{ Component, route }">
      <Transition :name="route.meta.transitionName">
        <component :is="Component" :key="route.path" class="container"/>
      </Transition>
    </router-view>
  </MainLayout>
</template>

<style>
:root {
  --header-color: #c0f8ff;
  --text-color: #00807b;
  font-family: Arial, Helvetica, sans-serif;
  text-align: justify;
  text-justify: auto;
  color: var(--text-color);
}

main {
  margin: 3rem 1rem;
  background-color: #fefefe;
  border-radius: 10px;
  padding: 1.5rem 1rem;
  border: solid 1px #000000;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
}

main:before {
  content: url('./mousse.png');
  position: relative;
  display: block;
  left:75%;
  top:-3.6rem;
  width:0;
  height:0;
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

.container {
  position: absolute;
  top: 3.5rem;
  background-image: linear-gradient(to right top, #39af8d, #38b994, #36c39b, #34cda2, #32d7a9, #38deb0, #3ee4b7, #44ebbe, #52f0c7, #5ff5d0, #6bfad9, #77ffe1);
  line-height: 1.5rem;
}

.center {
  text-align: center;
}

@media screen and (min-width: 800px) {
  main {
    margin-left: 25vw;
    margin-right: 25vw;
  }
}

.next-enter-from, .previous-enter-from, .next-leave-to, .previous-leave-to {
  transform: scaleX(0);
}

.next-enter-to, .previous-enter-to, .next-leave-from, .previous-leave-from {
  transform: scaleX(1);
}

.next-enter-active, .previous-leave-active {
  transform-origin: right center;
}

.previous-enter-active, .next-leave-active {
  transform-origin: left center;
}

.next-enter-active, .previous-enter-active, .next-leave-active, .previous-leave-active {
  transition: transform 0.5s;
}
</style>
