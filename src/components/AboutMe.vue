<template>
    <base-card :navLinks="navLinks" @changeComp="changeComp" />
</template>

<script>
export default {
  emits: ['changeComp'],
  data() {
    return {
      navLinks: [
        { label: 'Homepage', component: 'TheHomepage' },
        { label: 'Projects', component: 'my-projects' },
        { label: 'Contact me', component: 'contact-me' },
        // Add more links as needed
      ],
    };
  },
    methods: {
    close () {
      this.$emit('close')
      },
    changeComp(cmp) {
      console.log(`Changing component to: ${cmp}`);
      this.$emit('changeComp', cmp);
    },
  }
}
</script>

<style>
a {
  opacity: 1;
}
</style>