<template>
  <base-card :navLinks="navLinks" @changeComp="changeComp" />
  <div class="descriptionContent">
    <p class="left">Some text left</p>
    <p class="right">Some text right</p>
    <p class="left">Some text left</p>
    <p class="right">Some text right</p>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export default {
  emits: ["changeComp"],
  data() {
    return {
      navLinks: [
        { label: "Homepage", component: "main-page" },
        { label: "About Me", component: "about-me" },
        { label: "Contact me", component: "contact-me" },
        // Add more links as needed
      ],
    };
  },
  mounted() {
    gsap.fromTo(
      ".left",
      { x: 500, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    );
    gsap.fromTo(
      ".right",
      { x: -500, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, onComplete: this.onAnimationComplete }
    );
  },
  methods: {
    close() {
      this.$emit("close");
    },
    changeComp(cmp) {
      console.log(`Changing component to: ${cmp}`);
      this.$emit("changeComp", cmp);
    },
    onAnimationComplete() {
      const anchorEl = document.querySelectorAll("a");
      const timeline = gsap.timeline();
      anchorEl.forEach((anchor) => {
        timeline.fromTo(
          anchor,
          {
            duration: 0.5,
            y: -100,
          },
          {
            opacity: 1,
            duration: 0.5,
            y: 0,
          }
        );
      });
    },
  },
};
</script>

<style>
.descriptionContent {
  display: flex;
  flex-flow: column;
}
</style>
