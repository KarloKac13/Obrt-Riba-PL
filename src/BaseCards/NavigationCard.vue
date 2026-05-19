<template>
  <div class="navBarContainer">
    <div class="navBar">
      <router-link
        v-for="link in filteredLinks"
        :key="link.to"
        :to="link.to"
      >
        {{ link.label }}
      </router-link>
      <img src="/companyImages/Ribaprofitlablogo.png" />
    </div>
  </div>
</template>

<script>
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
      ],
    }
  },
  computed: {
    filteredLinks() {
      return this.links.filter(link => link.to !== this.$route.path);
    },
  },
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
  height: 250px;
  width: 375px;
}
</style>
