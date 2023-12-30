<template>
  <div class="navBarContainer">
    <div class="navBar">
      <a v-for="link in navLinks" :key="link.label" @click="handleLinkClick(link.component)">
        {{ link.label }}
      </a>
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
            this.$emit('changeComp', cmp) // Call the prop method
        },
    },
};
</script>