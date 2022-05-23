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
        <component :is="Component" :key="route.path"/>
      </Transition>
    </router-view>
  </MainLayout>
</template>

<style>
:root {
  --header-color: #c0f8ff;
  --text-color: #009691;
  font-family: Arial, Helvetica, sans-serif;
}

.next-enter-from, .previous-enter-from, .next-leave-to, .previous-leave-to {
  transform: scaleX(1);
}

.next-enter-to, .previous-enter-to, .next-leave-from, .previous-leave-from {
  transform: scaleX(0);
}

.next-enter-active, .previous-leave-active {
  transform-origin: left center;
}

.previous-enter-active, .next-leave-active {
  transform-origin: right center;
}
</style>
