<template>
  <video autoplay loop muted>
    <source
      src="https://res.cloudinary.com/djb4cocmv/video/upload/v1701787664/Portfolio/Naslovna%20slika-video/vidback_furg7j.mp4"
      type="video/mp4"
    />
  </video>
  <component :is="switchComponent" :changeComp="changeComp"/>
</template>

<script>
import HomePage from "./components/MyHomepage.vue";
export default {
  components: {
    HomePage,
    // Import other components here
  },
  data() {
    return {
      switchComponent: "HomePage",
    };
  },
  methods: {
    changeComp(cmp) {
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
