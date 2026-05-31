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

/* App.vue <style> */

.navBar a,
.navBarContainer a,
nav a {                          /* add this as a fallback */
  display: flex;
  align-items: center;
  justify-content: center;
  color: #001f3f !important;
  font-family: "Montserrat", sans-serif;
  padding: 8px 20px;
  border: 1.5px solid rgba(0, 31, 63, 0.25);
  border-radius: 10px;
  backdrop-filter: blur(8px);
  transition: all 0.25s ease;
  opacity: 1 !important;
   font-size: 20px!important;             /* fights the p:not(:first-child) bleed */
}

.navBar a:hover,
.navBarContainer a:hover,
nav a:hover {
  background: #001f3f !important;
  color: white !important;
  border-color: #001f3f;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 31, 63, 0.18);
}

.navBar a.router-link-active,
.navBarContainer a.router-link-active,
nav a.router-link-active {
  background: #001f3f !important;
  color: white !important;
  border-color: #001f3f;
}
</style>
