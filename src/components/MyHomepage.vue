<template>
  <div class="navBarContainer">
    <div class="navBar">
      <a @click="changeComp('about-me')">About me</a>
      <a @click="changeComp('my-projects')">Projects</a>
      <a @click="changeComp('contact-me')">Contact me</a>
    </div>
  </div>
  <div class="descriptionContent">
    <p class="type-me" id="type-me">
      <span class="cursor">|</span>
    </p>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export default {
    props: ["changeComp"],
  data() {
    return {
      switchComponent: "main-page",
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
        duration: 0.07,
        ease: "power1.inOut",
        onComplete:
          index === textArray.length - 1 ? this.onAnimationComplete : null,
      });
    });
  },
  methods: {
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
a {
  text-decoration: none;
  color: #001f3f;
  font-size: 25px;
  font-family: "Montserrat", sans-serif;
  opacity: 0;
}

a:hover {
  text-shadow: 3px 3px 3px dimgray;
}

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
}
</style>