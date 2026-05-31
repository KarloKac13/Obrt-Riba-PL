<template>
  <div class="navBarContainer">
    <div class="navBar">

      <!-- LEFT -->
      <div class="nav-left">
        <router-link
          v-for="link in leftLinks"
          :key="link.to"
          :to="link.to"
        >
          {{ link.label }}
        </router-link>
      </div>

      <!-- CENTER LOGO -->
      <div class="logo">
        <img src="/companyImages/Ribaprofitlablogo.png" />
      </div>

      <!-- RIGHT -->
      <div class="nav-right">
        <router-link
          v-for="link in rightLinks"
          :key="link.to"
          :to="link.to"
        >
          {{ link.label }}
        </router-link>
      </div>

    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  props: {
    navLinks: {
      type: Array,
      default: () => [],
    },
    onChangeComp: Function,
  },


  data() {
    return {
      links: [
        { to: "/", label: "Početna" },
        { to: "/o-nama", label: "O nama" },
        { to: "/usluge", label: "Usluge" },
        { to: "/projekti", label: "Projekti" },
        { to: "/oglasi", label: "Oglasi" },
        { to: "/kontakt", label: "Kontakt" },
      ],
    }
  },

  computed: {
    filteredLinks() {
    return this.links.filter(
      link => link.to !== this.$route.path
    );
  },

  leftLinks() {
    return this.filteredLinks.filter(
      link =>
        !["/oglasi", "/kontakt"].includes(link.to)
    );
  },

  rightLinks() {
    return this.filteredLinks.filter(
      link =>
        ["/oglasi", "/kontakt"].includes(link.to)
    );
  },

    cleanPage() {
    return this.currentPage?.replace("/", "");
    },
  },

   mounted() {
    this.animateLinks();
  },

  methods: {
    animateLinks() {
      const links = this.$el.querySelectorAll("a");

      gsap.fromTo(
        links,
        {
          opacity: 0,
          y: -10
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out"
        }
      );
    }
  }
};
</script>

<style>
a {
  text-decoration: none;
  color: #001f3f;
  font-size: 25px;
  font-family: "Montserrat", sans-serif;
  opacity: 0;
  transform: translate(0px, 0px);
}

a:hover {
  text-shadow: 3px 3px 3px dimgray;
  cursor: pointer;
}

img {
  max-width: 100%;
  height: auto;
}
</style>
