<template>
  <base-card :navLinks="navLinks" @changeComp="changeComp" />
  <div class="descriptionContent">
    <p class="top">Some text top</p>
    <p class="bottom">Some text bottom</p>
    <p class="top2">Some text top2</p>
    <p class="bottom2">Some text bottom2</p>
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
        { label: "About me", component: "about-me" },
        { label: "Projects", component: "my-projects" },
        // Add more links as needed
      ],
    };
  },
  mounted() {
    gsap.fromTo(
      ".top",
      { y: -500, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, onComplete: this.topComplete }
    );
  },
  beforeUnmount() {
    gsap.set(".top, .bottom, .top2, .bottom2", { opacity: 0 });
  },
  methods: {
    close() {
      this.$emit("close");
    },
    changeComp(cmp) {
      console.log(`Changing component to: ${cmp}`);
      this.$emit("changeComp", cmp);
    },
    topComplete() {
      gsap.fromTo(
        ".bottom",
        { y: 500, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, onComplete: this.top2 }
      );
    },
    top2() {
      gsap.fromTo(
        ".top2",
        { y: -250, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, onComplete: this.bottom2 }
      );
    },
    bottom2() {
      gsap.fromTo(
        ".bottom2",
        {
          y: 500,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          onComplete: this.onAnimationComplete,
        }
      );
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

p:not(:first-child) {
  opacity: 0;
}
</style>
