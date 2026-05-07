<template>
  <base-card :navLinks="filteredLinks" @changeComp="changeComp" />
  <div class="descriptionContent2">
    <div class="descriptionContent">
      <p class="top paragraphCenter">Some text top</p>
      <p class="bottom paragraphCenter">Some text bottom</p>
      <p class="top2 paragraphCenter">Some text top2</p>
      <p class="bottom2 paragraphCenter">Some text bottom2</p>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export default {
  props: {
    backgroundMirror: Boolean,
    currentPage: String,
  },
  emits: ["changeComp"],
  data() {
    return {
      navLinks: [
        { label: "Početna", component: "main-page" },
        { label: "O nama", component: "about-me" },
        { label: "Projekti", component: "my-projects" },
        { label: "Kontaktiraj nas", component: "contact-me" },
        // Add more links as needed
      ],
    };
  },
    computed: {
      filteredLinks() {
    return this.navLinks.filter(
      link => link.component !== this.currentPage
    );
  }
},
  beforeMount() {
      this.backgroundMirror
      console.log(this.navLinks[1].component === "about-me")
        // if (this.navLinks[1] && this.navLinks[1].component === "about-me") {
        //     this.navLinks.splice(1,1)
        // }
        // else if (this.navLinks[2] && this.navLinks[2].component === "my-projects") {
        //     this.navLinks.splice(2,1)
        // }
        // else (this.navLinks[3] && this.navLinks[3].component === "contact-me")
        //     this.navLinks.splice(3,1)
  },
  mounted() {
    if (this.backgroundMirror) {
      !this.backgroundMirror;
      gsap.fromTo(
        ".top",
        { y: -500, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, onComplete: this.topComplete }
      );
      
    } else {
      this.backgroundMirror;
      gsap.fromTo(
      ".top",
      { y: -500, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, onComplete: this.topComplete }
      );
    }
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
      if (this.backgroundMirror) {
        !this.backgroundMirror
      gsap.fromTo(
        ".bottom",
        { y: 250, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, onComplete: this.top2 }
      );
      } else {
      this.backgroundMirror
      gsap.fromTo(
        ".bottom",
        { y: 250, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, onComplete: this.top2 }
      );
    }
      
    },
    top2() {
      if (this.backgroundMirror) {
      !this.backgroundMirror
      gsap.fromTo(
        ".top2",
        { y: -250, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, onComplete: this.bottom2 }
      );
      } else {
      this.backgroundMirror
      gsap.fromTo(
        ".top2",
        { y: -250, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, onComplete: this.bottom2 }
      );
    }
  
    },
    bottom2() {
      if (this.backgroundMirror) {
        !this.backgroundMirror
      gsap.fromTo(
        ".bottom2",
        {
          y: 250,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          onComplete: this.onAnimationComplete,
        }
      );
      } else {
      this.backgroundMirror
      gsap.fromTo(
        ".bottom2",
        {
          y: 250,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          onComplete: this.onAnimationComplete,
        }
      );
    }
      
    },
    onAnimationComplete() {
      const anchorEl = document.querySelectorAll("a");
      if (this.backgroundMirror) {
        !this.backgroundMirror;
        const timeline = gsap.timeline();
        anchorEl.forEach((anchor) => {
        timeline.fromTo(
          anchor,
          {
            duration: 0.5,
            y: -100,
            x: 1000
          },
          {
            opacity: 1,
            duration: 0.5,
            y: 0,
          }
          );
      });
      } else {
        this.backgroundMirror;
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
            x: 0
          }
          );
      });
      }
      
    },
  },
};
</script>

<style>
.descriptionContent {
  display: flex;
  flex-flow: column;
}

.paragraphCenter {
  display: flex;
  flex-flow: row;
  justify-content: center;
}

p:not(:first-child) {
  opacity: 0;
}

.descriptionContent2 {
  display: flex;
  flex-flow: column;
  width: 100%;
  justify-content: center;
  align-items: center;
}
</style>