<template>
  <div>
    <template v-for="(image, index) in images" :key="image">
      <Transition>
        <img :src="image" :alt="`${page}-${index + 1}`" :ref="`${page}-${index + 1}`" v-show="currentId === index" @load="onLoad">
      </Transition>
    </template>
  </div>
</template>

<script>
export default {
  name: "CarouselComponent",
  props: ['images', 'page'],
  data() {
    return {
      currentId: 0,
      timer: null,
      height: 0,
    }
  },
  methods: {
    onLoad() {
      if (this.height === 0 || this.height === '0px') {
        this.resize()
      }
    },
    resize() {
      let max = 0;
      this.images.forEach((image, index) => {
        max = Math.max(max, this.$refs[`${this.page}-${index + 1}`][0].offsetHeight);
      })
      this.height = `${max}px`;
    },
  },
  mounted() {
    this.timer = setInterval(() => {
      this.currentId = (this.currentId + 1) % this.images.length
    }, 3000)

    window.addEventListener('resize', this.resize);
    this.onLoad()
  },
  beforeUnmount() {
    clearInterval(this.timer)
    window.removeEventListener('resize', this.resize);
  }
}
</script>

<style scoped>
img {
  width: 100%;
  position: absolute;
}

div {
  width: 100vw;
  height: v-bind(height);
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

@media screen and (min-width: 800px) {
  div {
    width: 60vw;
    margin-left: 20vw
  }

  img {
    width: 60vw;
  }
}
</style>
