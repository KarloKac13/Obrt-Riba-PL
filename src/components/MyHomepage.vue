<template>
  <base-card :navLinks="navLinks" @changeComp="changeComp" />
  <div style="display: flex; justify-content:space-evenly">
    <!-- <div
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
    </div> -->

    <div class="list ">
    <ul class="p">
      <li>Želite veći outreach? Pošaljite nam upit!</li>
      <li>Želite više klijenata? Pošaljite nam upit!</li>
      <li>Trebate ponudu? Pošaljite nam upit!</li>
      <li>Imate ideju koju želite realizirati? Pošaljite nam upit!</li>
      <li>Niste sigurni odakle krenuti? Pošaljite nam upit!</li>
      <li>Želite unaprijediti svoj brend ili poslovanje? Pošaljite nam upit!</li>
      <li>Trebate savjet, suradnju ili novu priliku? Pošaljite nam upit!</li>
    </ul>
    <p class="p1">
      Za sve što vam padne na pamet — slobodno nam se javite.
      Ne postoje kriva pitanja, postoje samo propuštene prilike!
    </p>
    </div>
    <!-- <div
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
  </div>-->
    <div style="display: flex; justify-content: center; width: 50%">
      <div :class="['contactBox']">
        <form @submit.prevent="submitForm" id="form">
          <p style="font-weight: bold; text-decoration: underline">
            Pošaljite nam upit!
          </p>
          <input
            id="name"
            autocomplete="on"
            v-model="form.name"
            type="text"
            placeholder="Vaše ime"
            required
          />
          <input
            id="email"
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
          <div class="consent-box">
  <input type="checkbox" id="consent" required />
  
  <label for="consent">
    Slažem se s obradom osobnih podataka u svrhu odgovora na upit.
  </label>
</div>
          <button id="send" :disabled="loading" type="submit">
            {{ loading ? "Slanje..." : "Pošalji nam poruku" }}
          </button>

          <p v-if="!success && errorMessage" class="success">
            {{ errorMessage }}
          </p>
        </form>
        <div style="display: flex; justify-content: center; width:100%; flex-wrap: wrap;">
  <p>Kontaktirajte nas direktno:</p>

<div style="display: flex; flex-flow: row; justify-content: flex-start; align-items: center; width: 100%; gap: 20px;">
 <div class="emails">

  <div class="email-grid">
  <div style="display: flex; flex-flow: column; align-items: center; width: 100%;">
    <div class="email-card" @click="openEmail('info@rpl.com')">
      <span class="icon">✉</span>
      <span class="label">info@rpl.com</span>
    </div>
    <button class="copy" @click.stop="copyEmail('info@rpl.com')">
        Kopiraj email
      </button>
      <div style="display: flex; flex-flow: row; justify-content: flex-end; align-items: center; width: 90%; flex-wrap: wrap;">
        <span class="icon">📞</span>
        <span href="tel:+385977947589" class="label phone-link" @click="callNumber('+385977947589')">+385 97 794 7589</span>
      </div>
      <button class="copy" @click.stop="copyPhone('+385977947589')">
    Kopiraj broj
  </button>

    <!-- <div class="email-card" @click="openEmail('davor@rpl.com')">
      <span class="icon">✉</span>
      <span class="label">davor@rpl.com</span>
      <button class="copy" @click.stop="copyEmail('davor@rpl.com')">
         Kopiraj
      </button>
    </div> -->
    </div>

  <!-- <div style="display: flex; flex-flow: column; align-items: center;">
    <div class="email-card" @click="openEmail('karlo@rpl.com')">
      <span class="icon">✉</span>
      <span class="label">karlo@rpl.com</span>
      <button class="copy" @click.stop="copyEmail('karlo@rpl.com')">
         Kopiraj
      </button>
    </div>

    <div class="email-card" @click="openEmail('ivan@rpl.com')">
      <span class="icon">✉</span>
      <span class="label">ivan@rpl.com</span>
      <button class="copy" @click.stop="copyEmail('ivan@rpl.com')">
         Kopiraj
      </button>
    </div>
    </div> -->
  </div>
</div></div>
      </div></div>
      
      <!-- MOVE COOKIE BAR HERE -->
<div v-if="showCookies" class="cookie-bar">
  <p>
    Ova stranica koristi osnovne kolačiće potrebne za rad stranice i obradu kontakt forme.
  </p>

  <button @click="acceptCookies">
    U redu
  </button>
</div>
    </div>
  </div>
  <div style="display: flex; justify-content: center; width: 100% ">
    <p :class="{ opacityVisible: pageLoaded }" class="opacity">Klikom na logotipe naših klijenata, saznajte što oni mogu učiniti za Vas!</p>
  </div>
  <div class="carousel-wrapper">
    <div class="carousel">
      <div
  v-for="(company, i) in companies"
  :key="i"
  class="carousel-item"
   @click="handleCompanyClick(i, company)"
>
  <img
    :src="company.logo"
    :alt="company.name"
  />
</div>
    </div>
  </div>
  <!-- <div style="display: flex; justify-content: center; width: 50%;">
      
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
    </div> -->
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

      currentIndex: 0,
      autoPlay: null,

      companies,

      showCookies: true,

      pageLoaded: false,
    };
  },

  beforeUnmount() {
    clearInterval(this.autoPlay);

    window.removeEventListener("resize", this.animateCarousel);
  },

  mounted() {
     window.addEventListener("load", () => {
    this.pageLoaded = true;
     });

     window.addEventListener("resize", this.animateCarousel);

    if (localStorage.getItem("cookiesAccepted")) {
  this.showCookies = false;
}
    //     const spiral = document.getElementById("spiral");

    //     const radius = 120;
    //     const spacing = 22;

    //     const totalHeight = companies.length * spacing;

    //     let rotation = 0;

    //     companies.forEach((company) => {
    //       const div = document.createElement("div");
    //       div.className = "company";
    //       const img = document.createElement("img");
    // img.src = company.logo;
    // img.alt = company.name;

    // div.appendChild(img);

    //       spiral.appendChild(div);
    //     });

    //     const items = document.querySelectorAll(".company");

    //     function animate() {
    //       rotation += 0.002;

    //       items.forEach((item, i) => {
    //         const angle = i * 0.4 + rotation;

    //         const x = Math.cos(angle) * radius;
    //         const z = Math.sin(angle) * radius;

    //         const y =
    //           ((i * spacing + rotation * 100) % totalHeight) - totalHeight / 2;

    //         /* ---------- DEPTH (consistent system) ---------- */
    //         const depth = (z + radius) / (radius * 2); // 0 back → 1 front

    //         /* ---------- VISUALS ---------- */
    //         const scale = 0.7 + depth * 0.5;
    //         const scaleBoost = 0.8 + depth * 0.4;

    //         const blur = (1 - depth) * 3;
    //         const brightness = 0.7 + depth * 0.6;

    //         /* ---------- OPACITY FADE ---------- */
    //         let opacity = scale;

    //         const fadeStart = 220;
    //         const fadeEnd = 320;

    //         if (Math.abs(y) > fadeStart) {
    //           opacity *= 1 - (Math.abs(y) - fadeStart) / (fadeEnd - fadeStart);
    //         }

    //         if (Math.abs(y) > fadeEnd) {
    //           opacity = 0;
    //         }

    //         /* ---------- APPLY ---------- */
    //         item.style.filter = `blur(${blur}px) brightness(${brightness})`;

    //         item.style.opacity = opacity;

    //         item.style.transform = `
    //   translate3d(${x}px, ${y}px, ${z}px)
    //   scale(${scale * scaleBoost})
    // `;
    //       });

    //       requestAnimationFrame(animate);
    //     }

    //     animate();

    this.$nextTick(() => {
  this.animateCarousel();

  this.autoPlay = setInterval(() => {
    this.nextSlide();
  }, 3000);
});


    // const textElement = document.querySelector(".typeMe");
    // const text2Element = document.querySelector(".typeMe2");

    // textElement.innerHTML = "Where sales and";
    // text2Element.innerHTML = "supply meet profit";

    // const timeline = gsap.timeline();

    // // TEXT 1 FROM LEFT
    // timeline.fromTo(
    //   textElement,
    //   {
    //     opacity: 0,
    //   },
    //   {
    //     x: 0,
    //     opacity: 0.8,
    //     duration: 0.6,
    //   },
    // );

    // // TEXT 2 FROM RIGHT
    // timeline.fromTo(
    //   text2Element,
    //   {
    //     opacity: 0,
    //   },
    //   {
    //     x: 0,
    //     opacity: 0.7,
    //     duration: 0.6,
    //     onComplete: this.onAnimationComplete,
    //   },
    // );
  },
  methods: {

   callNumber(number) {
  window.location.href = `tel:${number}`;
},

  async copyPhone(number) {
  try {
    await navigator.clipboard.writeText(number);
    this.errorMessage = "Broj kopiran!";
    setTimeout(() => (this.errorMessage = ""), 1500);
  } catch (e) {
    console.error("Copy failed", e);
  }
},

    openEmail(email) {
    window.location.href = `mailto:${email}`;
  },

  async copyEmail(email) {
    try {
      await navigator.clipboard.writeText(email);
      this.errorMessage = "Email copied to clipboard!";
      setTimeout(() => (this.errorMessage = ""), 1500);
    } catch (e) {
      console.error("Copy failed", e);
    }
    },
  
    acceptCookies() {
  localStorage.setItem("cookiesAccepted", "true");
  this.showCookies = false;
    },

   animateCarousel() {
  const items = document.querySelectorAll(".carousel-item");
     const total = this.companies.length;
  

  const spacing = Math.max(60, window.innerWidth * 0.22);

  items.forEach((item, i) => {
    // IMPORTANT: ensure proper centering anchor once
    gsap.set(item, {
      xPercent: -50,
      yPercent: -50
    });

    let offset = i - this.currentIndex;

    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    gsap.to(item, {
      x: offset * spacing,
      scale: offset === 0 ? 0.85 : 0.85,
      opacity: Math.abs(offset) > 2 ? 0 : 1,
      zIndex: 1000 - Math.abs(offset),
      duration: 0.6,
      ease: "power2.out",
      overwrite: true
    });
  });
},

    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.companies.length;

  this.animateCarousel();
},

prevSlide() { this.currentIndex =
    (this.currentIndex - 1 + this.companies.length) %
    this.companies.length;

  this.animateCarousel();
},

goToSlide(index) {
  this.currentIndex = index;
  this.animateCarousel();
},


   handleCompanyClick(i, company) {
  this.currentIndex = i;
  this.animateCarousel();

  if (company.url) {
    setTimeout(() => {
      window.open(company.url, "_blank");
    }, 300);
  }
},

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

       this.pageLoaded = true;

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
  font-size: 20px!important;
  font-family: "Montserrat", sans-serif;
  /* line-height: 50px!important; */
  width: 70%!important;
  text-align: center!important;
  opacity: 1!important;
}

.p1 {
  color: #001f3f;
  font-size: 55px!important;
  font-family: "Montserrat", sans-serif;
  line-height: 50px!important;
  text-shadow: 0 0 1px #fff, 0 0 2px #fff, 0 0 4px #fff, 0 0 6px #001,
    0 0 9px #001f, 0 0 14px #001f3f;
}

.p2 {
  color: white;
  font-size: 55px!important;
  font-family: "Montserrat", sans-serif;
  line-height: 50px;
  text-shadow: 0 0 2.5px #001, 0 0 5px #001f, 0 0 10px #001f3f;
}

.navBarContainer {
  display: flex!important;
  flex-flow: row!important;
  width: 65%;
  justify-content: start!important;
  height: 15%;
}

.navBar {
  display: flex!important;
  flex-flow: row!important;
  flex-wrap: wrap!important;
  align-items: center!important;
  width: 100%!important;
  height: 175px;
  justify-content: space-evenly!important;
}

.descriptionContent {
  display: flex!important;
  flex-flow: column!important;
  height: 100%!important;
  width: 100%!important;
  justify-content: space-evenly!important;
}

.descriptionContentReverse {
  display: flex!important;
  flex-flow: column!important;
  height: 100%!important;
  width: 100%!important;
  justify-content: flex-start!important;
  margin-left: auto!important;
}

.typeMe {
  position: relative;
  text-align: center;
  font-display: swap;
  width: 80%!important;
}

.typeMe2 {
  position: relative;
  text-align: right;
  font-display: swap;
  width: 70%!important;
}

.specialHpClass {
display: flex!important;
  flex-flow: column!important;
  height: 700px!important;
  width: 100%!important;
  justify-content: center!important;
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
  display: flex!important;
  flex-flow: column!important;
  justify-content: space-evenly!important;
  height: 100%!important;
  opacity: 0.8!important;
  border-radius: 20px!important;
  width: 100%!important;
  position: relative;
}

/* background-color: #eef3f8 !important;
border: 1px solid rgba(0, 31, 63, 0.08) !important;
  box-shadow: 0 4px 12px rgba(0, 31, 63, 0.08), 0 2px 4px rgba(0, 31, 63, 0.04) !important;
  transition: 0.3s ease; */

/* .contactBox:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 40px rgba(0, 31, 63, 0.16);
} */

::placeholder {
  color: #001f3f;
  font-family: "Montserrat", sans-serif !important;
  opacity: 0.7;
}

ul.p {
  display: flex;
  flex-flow: column;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 70%;
  text-align: center;
  height: 70%;
  justify-content: center;
}

ul.p li {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  font-size: 20px;
  font-family: "Montserrat", sans-serif;
  transition: 0.3s ease;
  border: 1px solid #001f3f;
  font-size: 16px!important;
  opacity: 0.9;
  height: 50px;
  margin-bottom: 10px;
}

/* ODD */
ul.p li:nth-child(odd) {
  background: #001f3f;
  color: white;
}

/* EVEN */
ul.p li:nth-child(even) {
  background: white;
  color: #001f3f;
}

/* Hover */
ul.p li:hover {
  transform: translateY(-3px);

  box-shadow:
    0 10px 25px #001f3f
    0 4px 10px #001f3f;
}

ul.p li:nth-child(even) {
  background: rgba(255,255,255,0.7);
  backdrop-filter: blur(8px);
}

button {
  color: #001f3f;
  height: 30px!important;
}

input {
  width: 100%;
  height: 50px;
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

textarea {
   border-radius: 5px;
}

textarea:focus {
  outline: none;
  border-color: #001f3f;
  box-shadow: 0 0 5px rgba(0, 31, 63, 0.3)!important;
}

textarea:hover,
textarea:focus {
  border-color: #001f3f;
}

#form {
  display: flex!important;
  flex-flow: column!important;
  justify-content: space-evenly!important;
  width: 500px!important;
  /* height: 550px!important; */
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
  width: 100%;
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

.carousel-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible;
}

.carousel {
  width: 100%;
  height: 0%;  
  position: relative;
  overflow: visible;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-item {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.consent-box {
  display: flex;
  align-items: flex-start;
  gap: 10px;

  margin-top: 10px;

  font-size: 13px;
  color: #001f3f;

  line-height: 1.5;
}

.consent-box input {
  width: 16px;
  height: 16px;

  margin-top: 2px;

  accent-color: #001f3f;
}

.consent-box label {
  opacity: 1;
  font-weight: 500;
}

.cookie-bar {
  position: fixed !important;
  bottom: 20px !important;
  left: 50% !important;
  transform: translateX(-50%) !important;

  width: min(720px, 92%) !important;
  padding: 14px 16px !important;

  background: rgba(255, 255, 255, 0.95) !important;
  border: 1px solid rgba(0, 31, 63, 0.15) !important;
  border-radius: 14px !important;

  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  gap: 12px !important;

  box-shadow: 0 10px 25px rgba(0,0,0,0.12) !important;
  z-index: 9999 !important;
}

.cookie-bar p {
  font-size: 13px !important;
  line-height: 1.4 !important;
  margin: 0 !important;
  color: #001f3f !important;
  text-align: left !important;
  flex: 1 !important;
}

.cookie-bar button {
  background: #001f3f !important;
  color: white !important;

  border: none !important;
  border-radius: 10px !important;

  padding: 10px 14px !important;
  font-size: 13px !important;
  font-weight: 600 !important;

  cursor: pointer !important;
  width: auto !important;
}

.opacityVisible {
  opacity: 1 !important;
  height: 20px;
}

.list {
  display: flex;
  flex-flow: column;
  height: 100%!important;
  width: 100%!important;
  justify-content: flex-end!important;
  align-items: center!important;
}

#info, #davor, #karlo, #ivan {
  opacity: 1!important;
  display: flex;
  flex-flow: row;
  color: #001f3f!important;
  text-decoration: none!important;
  font-size: 22px;
  width: 100%;
}

.emails {
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.emails a {
  position: relative;
  z-index: 10;
  pointer-events: auto;

  color: #001f3f;
  text-decoration: none;
  cursor: pointer;
}

.emails a span {
  text-decoration: underline;
}

.email-grid {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
}

.email-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  padding: 12px 14px;

  border: 1px solid rgba(0, 31, 63, 0.15);
  border-radius: 12px;

  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);

  cursor: pointer;

  transition: 0.25s ease;
  width: 100%!important;
}

.email-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 31, 63, 0.15);
}

.icon {
  font-size: 18px;
  margin-right: 10px;
  color: #001f3f;
  width: 20%;
}

.label {
  flex: 1;
  color: #001f3f;
  font-weight: 500;
}

.copy {
  top: 0px!important;
  position: relative!important;
  background: transparent!important;
  border: 1px solid #001f3f!important;
  color: #001f3f!important;

  padding: 4px 10px!important;
  border-radius: 8px!important;

  font-size: 12px!important;

  cursor: pointer!important;
  transition: 0.2s ease!important;
  left: 10px!important;
  width: 50%;
}

.copy:hover {
  background: #001f3f;
  color: white;
}

.phone-link {
  color: #001f3f;
  text-decoration: none;
  cursor: pointer;
}

.phone-link:hover {
  text-decoration: underline;
}
</style>