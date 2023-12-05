<template>
  <video autoplay loop muted>
    <source
      src="https://res.cloudinary.com/djb4cocmv/video/upload/v1701787664/Portfolio/Naslovna%20slika-video/vidback_furg7j.mp4"
      type="video/mp4"
    />
  </video>
  <div class="navBarContainer">
    <div class="navBar">
      <a href="#">About me</a>
      <a href="#">Projects</a>
      <a href="#">Contact me</a>
    </div>
  </div>
  <div class="descriptionContent">
    <p class="type-me">Hi, my name is Karlo Manojlović and welcome to my portfolio</p>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(TextPlugin);

export default {
  mounted() {
    const textElement = document.querySelector(".type-me");
    const text = textElement.textContent.trim();
    const textArray = text.split("");

    textElement.textContent = ""; // Clear the original text

    const timeline = gsap.timeline();

    textArray.forEach((letter, index) => {
      timeline.to(textElement, {
        textContent: textArray.slice(0, index + 1).join(""),
        duration: 0.1, // Adjust the duration to control the typing speed
        ease: "power1.inOut",
        onComplete: index === textArray.length - 1 ? this.onAnimationComplete : null,
      });
    });
  },
  methods: {
    onAnimationComplete() {
      // Any additional actions you want to perform when the typing animation is complete
    },
  },
};
</script>

<style>

video {
  position: fixed;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

a {
  text-decoration: none;
  color: #001f3f;
  font-size: 25px;
  font-family: "Montserrat", sans-serif;
}

a:hover {
  text-shadow: 3px 3px 3px dimgray;
}

p{
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
  height: 75px;
  justify-content: end;
}

.navBar {
  display: flex;
  flex-flow: row;
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
