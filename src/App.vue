<script>
import MainLayout from "@/layouts/MainLayout";
export default {
  name: 'App',
  components: {MainLayout},
  data () {
    return {
      transitionName: 'next'
    }
  }
}
</script>

<template>
  <MainLayout>
    <router-view v-slot:="{ Component }">
      <transition name="next">
        <component :is="Component"/>
      </transition>
    </router-view>
  </MainLayout>
</template>

<style>
:root {
  --header-color: #c0f8ff;
  --text-color: #009691;
  font-family: Arial, Helvetica, sans-serif;
}


</style>
