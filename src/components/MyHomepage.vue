<template>
  <base-card :navLinks="navLinks" @changeComp="changeComp" />
  <div style="display: flex; justify-content: evenly;">
  <div
    v-bind="$attrs"
    style="width: 100%"
    :class="{ descriptionContentReverse: this.backgroundMirror }"
    class="descriptionContent"
  >
    <p
      :class="['typeMe', 'p1', { color1: this.backgroundMirror }]"
      id="typeMe"
    ></p>
    <p
      :class="['typeMe2', 'p2', { color2: this.backgroundMirror }]"
      id="typeMe2"
    ></p>
     
  </div>
  <div
    style="
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 180%;
    "
  >
  <div class="spiral-container">
      <div class="spiral" id="spiral"></div>
    </div>
  </div></div> 
   <div style="display: flex; justify-content: center; width: 50%;">
      
      <div :class="['contactBox']">
      <form @submit.prevent="submitForm" id="form">
        <p>Pošaljite nam upit!</p>
        <input
          autocomplete="on"
          v-model="form.name"
          type="text"
          placeholder="Vaše ime"
          required
        />
        <input
          autocomplete="on"
          v-model="form.email"
          type="email"
          placeholder="Vaš E-mail"
          required
        />
        <textarea
          id="message"
          v-model="form.message"
          type="text"
          placeholder="Vaša poruka"
          rows="5"
          required
        >
        </textarea>
        <button :disabled="loading" type="submit">
          {{ loading ? "Slanje..." : "Pošalji nam poruku" }}
        </button>

        <p v-if="!success && errorMessage" class="success">
          {{ errorMessage }}
        </p>
      </form>
      </div>
    </div>
</template>

<script>
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { nextTick } from "vue";
import emailjs from "@emailjs/browser";
import { companies } from "../companies";

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
        { label: "Usluge", component: "my-projects" },
        { label: "Projekti", component: "contact-me" },
      ],

      form: {
        name: "",
        email: "",
        message: "",
      },

      loading: false,
      success: false,
      errorMessage: "",
    };
  },
  mounted() {
    const spiral = document.getElementById("spiral");

    const radius = 120;
    const spacing = 22;

    const totalHeight = companies.length * spacing;

    let rotation = 0;

    companies.forEach((company) => {
      const div = document.createElement("div");
      div.className = "company";
      const img = document.createElement("img");
img.src = company.logo;
img.alt = company.name;

div.appendChild(img);

      spiral.appendChild(div);
    });

    const items = document.querySelectorAll(".company");

    function animate() {
      rotation += 0.002;

      items.forEach((item, i) => {
        const angle = i * 0.4 + rotation;

        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;

        const y =
          ((i * spacing + rotation * 100) % totalHeight) - totalHeight / 2;

        /* ---------- DEPTH (consistent system) ---------- */
        const depth = (z + radius) / (radius * 2); // 0 back → 1 front

        /* ---------- VISUALS ---------- */
        const scale = 0.7 + depth * 0.5;
        const scaleBoost = 0.8 + depth * 0.4;

        const blur = (1 - depth) * 3;
        const brightness = 0.7 + depth * 0.6;

        /* ---------- OPACITY FADE ---------- */
        let opacity = scale;

        const fadeStart = 220;
        const fadeEnd = 320;

        if (Math.abs(y) > fadeStart) {
          opacity *= 1 - (Math.abs(y) - fadeStart) / (fadeEnd - fadeStart);
        }

        if (Math.abs(y) > fadeEnd) {
          opacity = 0;
        }

        /* ---------- APPLY ---------- */
        item.style.filter = `blur(${blur}px) brightness(${brightness})`;

        item.style.opacity = opacity;

        item.style.transform = `
  translate3d(${x}px, ${y}px, ${z}px)
  scale(${scale * scaleBoost})
`;
      });

      requestAnimationFrame(animate);
    }

    animate();

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
      },
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
        onComplete: this.onAnimationComplete,
      },
    );
  },
  methods: {
    async submitForm() {
      this.loading = true;
      this.success = false;
      this.errorMessage = "";

      try {
        await emailjs.send(
          "service_x1l90fn",
          "template_eidyj4g",
          {
            from_name: this.form.name,
            from_email: this.form.email,
            message: this.form.message,
          },
          "w6HVNSaRoqA-XXhZh",
        );

        this.success = true;

        this.form.name = "";
        this.form.email = "";
        this.form.message = "";
      } catch (error) {
        console.error("Email error:", error);
        this.errorMessage = "Failed to send message.";
      } finally {
        this.loading = false;
      }
    },

    changeComp(cmp) {
      console.log(`Changing component to: ${cmp}`);
      this.$emit("changeComp", cmp);
    },

    async onAnimationComplete() {
      await nextTick();

      const anchorEl = document.querySelectorAll("a");

      const timeline = gsap.timeline();

      if (this.backgroundMirror) {
        !this.backgroundMirror;
        anchorEl.forEach((anchor) => {
          timeline.fromTo(
            anchor,
            { y: -100, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              x: 1000,
            },
          );
        });
      } else {
        this.backgroundMirror;
        anchorEl.forEach((anchor) => {
          timeline.fromTo(
            anchor,
            { y: -100, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              x: 0,
            },
          );
        });
      }
    },
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
  text-shadow: 0 0 1px #fff, 0 0 2px #fff, 0 0 4px #fff, 0 0 6px #001,
    0 0 9px #001f, 0 0 14px #001f3f;
}

.p2 {
  color: white;
  font-size: 55px;
  font-family: "Montserrat", sans-serif;
  line-height: 50px;
  text-shadow: 0 0 2.5px #001, 0 0 5px #001f, 0 0 10px #001f3f;
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
  height: 175px;
  justify-content: space-evenly;
}

.descriptionContent {
  display: flex;
  flex-flow: column;
  height: 100%;
  width: 100%;
  justify-content: flex-start;
}

.descriptionContentReverse {
  display: flex;
  flex-flow: column;
  height: 100%;
  width: 100%;
  justify-content: flex-start;
  margin-left: auto;
}

.typeMe {
  position: relative;
  text-align: center;
  font-display: swap;
  width: 80%;
}

.typeMe2 {
  position: relative;
  text-align: right;
  font-display: swap;
  width: 70%;
}

.specialHpClass {
  display: flex;
  flex-flow: column;
  height: 700px;
  width: 100%;
  justify-content: center;
}

.color1 {
  color: white !important;
  text-shadow: 0 0 2.5px #001, 0 0 5px #001f, 0 0 10px #001f3f;
}

.color2 {
  color: #001f3f !important;
  text-shadow: 0 0 1px #fff, 0 0 2px #fff, 0 0 4px #fff, 0 0 6px #001,
    0 0 9px #001f, 0 0 14px #001f3f;
}

.contactBox {
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;
  height: 350px;
  background-color: #eef3f8 !important;
  opacity: 0.65;
  border-radius: 20px;
  border: 1px solid rgba(0, 31, 63, 0.08) !important;
  box-shadow: 0 4px 12px rgba(0, 31, 63, 0.08), 0 2px 4px rgba(0, 31, 63, 0.04) !important;
  transition: 0.3s ease;
  width: 100%
}

.contactBox:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 40px rgba(0, 31, 63, 0.16);
}

::placeholder {
  color: #001f3f;
  font-family: "Montserrat", sans-serif !important;
  opacity: 0.7;
}

button {
  color: #001f3f;
  height: 30px;
}

input {
  width: 350px;
  height: 30px;
}

input:focus {
  outline: none;
  border-color: #001f3f;
  box-shadow: 0 0 5px rgba(0, 31, 63, 0.3);
}

input:hover,
input:focus {
  border-color: #001f3f;
}

textarea:focus {
  outline: none;
  border-color: #001f3f;
  box-shadow: 0 0 5px rgba(0, 31, 63, 0.3);
}

textarea:hover,
textarea:focus {
  border-color: #001f3f;
}

form {
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
}

.spiral-container {
  height: 105%;
  perspective: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  mask-image: linear-gradient(
    to bottom,
    transparent,
    black 15%,
    black 85%,
    transparent
  );
  width: 100%
}

.spiral {
  position: relative;
  transform-style: preserve-3d;

  width: 200px;
  height: 400px;
}

.company img {
  position: absolute;

  left: 50%;
  top: 50%;

  width: 100px;
  height: 100px;

  padding: 1rem;

  border-radius: 16px;

  color: #001f3f;

  text-align: center;
  font-weight: bold;

  transition: transform 0.1s linear;

   mix-blend-mode: multiply;
   
}

.company:hover img {
  filter: grayscale(0%);
  opacity: 1;
  transform: scale(1.05);
}
</style>
