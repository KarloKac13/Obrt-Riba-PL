<template>
  <div class="navBarContainer">
    <div class="navBar">
      <a
        v-for="link in navLinks"
        :key="link.label"
        @click="handleLinkClick(link.component)"
      >
        {{ link.label }}
      </a>
      <img src="../components/Ribaprofitlablogo.png" />
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
  methods: {
    handleLinkClick(cmp) {
      this.$emit("changeComp", cmp); // Call the prop method
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
