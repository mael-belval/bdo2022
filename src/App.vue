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
  margin: 0 1rem 1rem 1rem;
  background-color: #C0F8FFBB;
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

.container {
  position: absolute;
  top: 3.5rem;
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
