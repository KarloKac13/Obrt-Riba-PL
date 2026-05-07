<template>
  <base-card :navLinks="navLinks" @changeComp="changeComp" />
  <div  v-bind="$attrs" style="width: 100%;" :class="{descriptionContentReverse: this.backgroundMirror}" class="descriptionContent">
    <p :class="['typeMe', 'p1', {color1: this.backgroundMirror}]" id="typeMe"></p>
    <p :class="['typeMe2', 'p2', {color2: this.backgroundMirror}]" id="typeMe2"></p>
  </div>
  <div :class="['typeMe', 'p1']">
  <p>Prozor</p>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { nextTick } from "vue";


gsap.registerPlugin(TextPlugin);

export default {
  inheritAttrs: false,

  props: {
    backgroundMirror: Boolean,
  },
  emits: ["changeComp"],
  data() {
    return {
      navLinks: [
        { label: "O nama", component: "about-me" },
        { label: "Projekti", component: "my-projects" },
        { label: "Kontaktiraj nas", component: "contact-me" },
      ],
    };
  },
  mounted() {

    const textElement = document.querySelector(".typeMe");
    const text2Element = document.querySelector(".typeMe2");

    textElement.innerHTML = "Where sales and";
    text2Element.innerHTML = "supply meet profit";

    const timeline = gsap.timeline();

    // TEXT 1 FROM LEFT
    timeline.fromTo(
      textElement,
      {
        opacity: 0,
      },
      {
        x: 0,
        opacity: 0.8,
        duration: 0.6,
      }
    );

    // TEXT 2 FROM RIGHT
    timeline.fromTo(
      text2Element,
      {
        opacity: 0,
      },
      {
        x: 0,
        opacity: 0.7,
        duration: 0.6,
        onComplete: this.onAnimationComplete
      }
    );
  },
  methods: {
    changeComp(cmp) {
      console.log(`Changing component to: ${cmp}`);
      this.$emit("changeComp", cmp);
    },

    async onAnimationComplete() {
  await nextTick();

  const anchorEl = document.querySelectorAll("a");

  const timeline = gsap.timeline();

      if (this.backgroundMirror) {
        !this.backgroundMirror
    anchorEl.forEach((anchor) => {
    timeline.fromTo(
      anchor,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        x: 1000,
      }
    );
  });
      } else {
        this.backgroundMirror
    anchorEl.forEach((anchor) => {
    timeline.fromTo(
      anchor,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        x: 0,
      }
    );
  });
  }
  
}

  },
};
</script>

<style>

p {
  color: #001f3f;
  font-size: 25px;
  font-family: "Montserrat", sans-serif;
  line-height: 50px;
  width: 100%;
}


.p1 {
  color: #001f3f;
  font-size: 55px;
  font-family: "Montserrat", sans-serif;
  line-height: 50px;
  text-shadow:
  0 0 1px #fff,
  0 0 2px #fff,
  0 0 4px #fff,
  0 0 6px #001,
  0 0 9px #001f,
  0 0 14px #001f3f;
}

.p2 {
  color: white;
  font-size: 55px;
  font-family: "Montserrat", sans-serif;
  line-height: 50px;
  text-shadow:
  0 0 2.5px #001,
  0 0 5px #001f,
  0 0 10px #001f3f;
}

.navBarContainer {
  display: flex;
  flex-flow: row;
  height: 33%;
  width: 65%;
  justify-content: start;
}

.navBar {
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
}

.descriptionContent {
  display: flex;
  flex-flow: column;
  height: 100%;
  width: 100%;
  justify-content:center;
}

.descriptionContentReverse {
  display: flex;
  flex-flow: column;
  height: 100%;
  width: 100%;
  justify-content:center;
  margin-left: auto;
}

.typeMe {
  position: relative;
  text-align: center;
  font-display: swap;
  width: 80%;
  height: 100%;
}

.typeMe2 {
  position: relative;
  text-align: right;
  font-display: swap;
  width: 70%;
  height: 100%;
}

.specialHpClass {
  display: flex;
  flex-flow: column;
  height: 700px;
  width: 100%;
  justify-content:center;
}

.color1 {
  color: white!important;
  text-shadow:
  0 0 2.5px #001,
  0 0 5px #001f,
  0 0 10px #001f3f;
}

.color2 {
  color: #001f3f!important;
  text-shadow:
  0 0 1px #fff,
  0 0 2px #fff,
  0 0 4px #fff,
  0 0 6px #001,
  0 0 9px #001f,
  0 0 14px #001f3f;
}
</style>
