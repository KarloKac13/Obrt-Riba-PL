<template>
  <base-card :navLinks="filteredLinks" @changeComp="changeComp" />
  <div class="descriptionContent2">
    <div class="descriptionContent">
    <div class="paragraphCenter service-item">
    
    <p id="top" class="top paragraphCenter"> <span class="section-title">O nama</span>

<span style="text-align: center;">Mi smo platforma za poslovno savjetovanje i povezivanje koja spaja potražnju i ponudu na učinkovit način. Naš cilj je povezati klijente koji traže određene proizvode s <span class="highlight">provjerenim dobavljačima</span> koji te proizvode nude.

Djelujemo u različitim industrijama – od kućanskih i kuhinjskih proizvoda do građevinskog materijala i industrijske opreme. Umjesto dugotrajnog pretraživanja tržišta, omogućujemo <span class="highlight">izravno povezivanje s pravim partnerom</span>.</span></p></div>
    <div class="paragraphCenter service-item"><p id="bottom" class="bottom paragraphCenter"> <span class="section-title">Što radimo</span>

<span style="text-align: center;">Primamo upite klijenata i poduzeća  
Povezujemo ih s odgovarajućim dobavljačima  
Omogućujemo brzu i učinkovitu komunikaciju između strana  
Pružamo dodatnu vidljivost partnerskim tvrtkama kroz našu platformu</span></p></div>
    <div class="paragraphCenter service-item"><p id="top2" class="top2 paragraphCenter"> <span class="section-title">Naše usluge</span>

<span class="highlight"> Savjetovanje i povezivanje</span> <span id="checkmark1"> analiziramo potrebe i povezujemo klijente s odgovarajućim dobavljačima.</span>

<span class="highlight"> B2B povezivanje</span> <span id="checkmark2"> pomažemo tvrtkama u širenju tržišta i pronalasku novih klijenata.</span>

<span class="highlight"> Oglašavanje i promocija</span> <span id="checkmark3"> omogućujemo tvrtkama veću vidljivost i potvrdu suradnje kroz našu platformu.</span></p></div>
    <div class="paragraphCenter service-item"><p id="bottom2" class="bottom2 paragraphCenter"> <span class="section-title">Kako radimo</span>

Naš poslovni model temelji se na dva glavna principa:

<span id="checkmark4" class="highlight"> Povezivanje ponude i potražnje kroz direktne poslovne kontakte</span>  
<span id="checkmark5" class="highlight"> Oglašavanje i promocija partnerskih tvrtki unutar naše mreže</span>  

Naš cilj je postati pouzdan posrednik u poslovnim lancima koji omogućuje brže, jednostavnije i učinkovitije nabavne procese.

Gradimo mrežu u kojoj pronalazak pravog proizvoda ili partnera više nije problem, već jednostavan proces.</p></div>
      
      
      
      
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
        { label: "Usluge", component: "my-projects" },
        { label: "Projekti", component: "contact-me" },
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

#top, #bottom, #top2, #bottom2 {
  display: flex;
  flex-flow: column;
  color: #001a33;
  font-size: 18px;
  font-family: "Montserrat", sans-serif;
  line-height: 1.75;

  width: 750px;
  max-width: 92%;

  text-align: left;

  background: #ffffff;

  border: 1px solid rgba(0, 31, 63, 0.12);

  border-radius: 18px;

  padding: 30px 34px;
  margin: 22px auto;

box-shadow: 
    0 6px 18px rgba(0, 0, 0, 0.10),
    0 18px 45px rgba(0, 31, 63, 0.12);

  transition: all 0.25s ease;
}

#top:hover, #bottom:hover, #top2:hover, #bottom2:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 35px rgba(0, 0, 0, 0.10);
  background: rgba(0, 31, 63, 0.06);
}

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


.section-title {
  display: block;
  font-size: 22px;
  font-weight: 700;
  color: #001f3f;

  margin-bottom: 14px;
  letter-spacing: 0.5px;

  position: relative;
}

/* optional modern underline effect */
.section-title::after {
  content: "";
  display: block;
  width: 60px;
  height: 3px;
  background: #001f3f;
  margin-top: 8px;
  border-radius: 2px;
  opacity: 0.6;
}

.service-item {
  margin-bottom: 18px;
}

.service-item strong {
  display: block;
  margin-bottom: 6px;
  color: #001f3f;
}

.highlight {
  background: rgba(0, 31, 63, 0.10);
  color: #001f3f;

  padding: 2px 8px;
  border-radius: 6px;

  font-weight: 600;
}

.highlight-strong {
  background: #001f3f;
  color: white;

  padding: 3px 10px;
  border-radius: 6px;

  font-weight: 700;
}

#checkmark1::before, #checkmark2::before, #checkmark3::before, #checkmark4::before, #checkmark5::before {
  content: "✓ "; /* Inserts a checkmark character */
  color: #4CAF50; /* Green checkmark */
  font-size: 1.2rem;
  margin-right: 8px; /* Adds spacing between the checkmark and text */
}


</style>