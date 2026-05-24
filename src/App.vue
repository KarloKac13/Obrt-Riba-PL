<template>
  <video :key="backgroundMirror" autoplay loop muted :class="{mirrored: backgroundMirror}">
    <source
      src="/companyImages/vidback_furg7j.mp4"
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
  position: fixed!important;
  width: 100%!important;
  height: 100%!important;
  object-fit: cover!important;
  z-index: -1!important;
   transition: transform 0.6s ease!important;
}

.mirrored {
  transform: scaleX(-1)!important;
  transform-origin: center!important;
}
</style>
