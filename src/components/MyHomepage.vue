<template>
  <base-card :navLinks="navLinks" @changeComp="changeComp" />
  <div class="descriptionContent">
    <p class="type-me" id="type-me"></p>
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
        { label: "About me", component: "about-me" },
        { label: "Projects", component: "my-projects" },
        { label: "Contact me", component: "contact-me" },
      ],
    };
  },
  mounted() {
    const textElement = document.querySelector(".type-me");
    const text =
      "Hello, my name is Karlo Manojlović, I'm a frontend developer and welcome to my portfolio";
    const textArray = text.split("");
    textElement.innerHTML = ""; // Clear the original text
    const timeline = gsap.timeline();
    textArray.forEach((letter, index) => {
      // Typing animation
      timeline.to(textElement, {
        textContent: textArray.slice(0, index + 1).join(""),
        duration: 0.03,
        ease: "power1.inOut",
        onComplete:
          index === textArray.length - 1 ? this.onAnimationComplete : null,
      });
    });
  },
  methods: {
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
p {
  display: flex;
  flex-flow: column;
  justify-content: center;
  width: 85%;
  color: #001f3f;
  font-size: 35px;
  font-family: "Montserrat", sans-serif;
  text-align: center;
  line-height: 50px;
}

.navBarContainer {
  display: flex;
  flex-flow: column;
  height: 10%;
  justify-content: center;
}

.navBar {
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  align-items: center;
  width: 50%;
  justify-content: space-evenly;
}

.descriptionContent {
  display: flex;
  flex-flow: row;
  height: 700px;
  width: 50%;
  justify-content: center;
}

.type-me {
  width: 85%;
  font-display: swap;
}
</style>
