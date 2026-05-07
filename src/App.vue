<template>
  <video autoplay loop muted :class="{mirrored: backgroundMirror}">
    <source
      src="https://res.cloudinary.com/djb4cocmv/video/upload/v1701787664/Portfolio/Naslovna%20slika-video/vidback_furg7j.mp4"
      type="video/mp4"
      alt=""
    />
  </video>
  <component :is="switchComponent" :currentPage="switchComponent" :backgroundMirror="backgroundMirror" @changeComp="handleComponentChange"/>
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
      backgroundMirror: false,
    };
  },
  methods: {
    handleComponentChange(cmp) {
      this.switchComponent = cmp;

      if (this.backgroundMirror) {
        this.backgroundMirror = false;
      } else {
        this.backgroundMirror = true;
      }
      
      
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

.mirrored {
  transform: scaleX(-1);
  transform-origin: center;
}
</style>
