<template>
  <video autoplay loop muted>
    <source
      src="https://res.cloudinary.com/djb4cocmv/video/upload/v1701787664/Portfolio/Naslovna%20slika-video/vidback_furg7j.mp4"
      type="video/mp4"
      alt=""
    />
  </video>
  <component :is="switchComponent" @changeComp="handleComponentChange"/>
</template>

<script>
import HomePage from "./components/MyHomepage.vue";
export default {
  components: {
    HomePage,
  },
  data() {
    return {
      switchComponent: "HomePage",
    };
  },
  methods: {
    handleComponentChange(cmp) {
      this.switchComponent = cmp;
    },
  },
};
</script>

<style>
video {
  position: fixed;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}
</style>
