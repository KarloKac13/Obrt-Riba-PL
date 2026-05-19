<template>
  <video :key="backgroundMirror" autoplay loop muted :class="{mirrored: backgroundMirror}">
    <source
      src="https://res.cloudinary.com/djb4cocmv/video/upload/v1701787664/Portfolio/Naslovna%20slika-video/vidback_furg7j.mp4"
      type="video/mp4"
      alt=""
    />
  </video>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      backgroundMirror: true,
      hasLeftHome: true,
    };
  },
   watch: {
    $route(to, from) {
      // FIRST TIME LEAVING HOME ONLY
      if (!this.hasLeftHome && from && from.path === "/") {
        this.hasLeftHome = true;
        this.backgroundMirror = true;
      }
    },
  },

  mounted() {
  window.addEventListener("route-changed", this.toggleMirror);
},

beforeUnmount() {
  window.removeEventListener("route-changed", this.toggleMirror);
},

methods: {
  toggleMirror() {
    this.backgroundMirror = !this.backgroundMirror;
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
   transition: transform 0.6s ease;
}

.mirrored {
  transform: scaleX(-1);
  transform-origin: center;
}
</style>
