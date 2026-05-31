<template>
  <div class="page-wrapper">

    <base-card
      :navLinks="filteredLinks"
      @changeComp="changeComp"
    />

    <div class="descriptionContent2">
      <div class="descriptionContent" v-if="cleanPage === 'o-nama'">

        <!-- O NAMA -->

        <div class="paragraphCenter ">
          <p class="top paragraphCenter">
            <span class="section-title">O nama</span>
            <span style="text-align: center;">Mi smo platforma za poslovno savjetovanje i povezivanje koja spaja potražnju i ponudu na učinkovit način. Naš cilj je povezati klijente koji traže određene proizvode s <span class="highlight">provjerenim dobavljačima</span> koji te proizvode nude.

Djelujemo u različitim industrijama – od kućanskih i kuhinjskih proizvoda do građevinskog materijala i industrijske opreme. Umjesto dugotrajnog pretraživanja tržišta, omogućujemo <span class="highlight">izravno povezivanje s pravim partnerom</span>.</span>
          </p>
        </div>

        <div class="paragraphCenter ">
          <p class="bottom paragraphCenter">
            <span class="section-title">Što radimo</span>
            <span style="text-align: center;">Primamo upite klijenata i poduzeća  
Povezujemo ih s odgovarajućim dobavljačima  
Omogućujemo brzu i učinkovitu komunikaciju između strana  
Pružamo dodatnu vidljivost partnerskim tvrtkama kroz našu platformu</span>
          </p>
        </div>

        <div class="paragraphCenter ">
          <p class="top2 paragraphCenter">
            <span class="section-title">Naše usluge</span>
            <span class="highlight"> Savjetovanje i povezivanje</span> <span id="checkmark1"> analiziramo potrebe i povezujemo klijente s odgovarajućim dobavljačima.</span>

<span class="highlight"> B2B povezivanje</span> <span id="checkmark2"> pomažemo tvrtkama u širenju tržišta i pronalasku novih klijenata.</span>

<span class="highlight"> Oglašavanje i promocija</span> <span id="checkmark3"> omogućujemo tvrtkama veću vidljivost i potvrdu suradnje kroz našu platformu.</span>
          </p>
        </div>

        <div class="paragraphCenter ">
          <p class="bottom2 paragraphCenter">
            <span class="section-title">Kako radimo</span>
            Naš poslovni model temelji se na dva glavna principa:

<span id="checkmark4" class="highlight"> Povezivanje ponude i potražnje kroz direktne poslovne kontakte</span>  
<span id="checkmark5" class="highlight"> Oglašavanje i promocija partnerskih tvrtki unutar naše mreže</span>  

Naš cilj je postati pouzdan posrednik u poslovnim lancima koji omogućuje brže, jednostavnije i učinkovitije nabavne procese.

Gradimo mrežu u kojoj pronalazak pravog proizvoda ili partnera više nije problem, već jednostavan proces.
          </p>
        </div>

      </div>

      <!-- USLUGE -->
      <div class="descriptionContent" v-else-if="cleanPage === 'usluge'">

        <div class="paragraphCenter ">
          <p class="bottom paragraphCenter">
            <span class="section-title">Nabava i širenje prodajne mreže</span>
Kroz profesionalan pristup nabavi i razvoju prodajne mreže pomažemo tvrtkama u pronalasku novih poslovnih prilika, partnerstava i distribucijskih kanala s ciljem dugoročnog rasta i jačanja prisutnosti na tržištu.

          </p>
        </div>

        <div class="paragraphCenter ">
          <p class="top2 paragraphCenter">
            <span class="section-title">Oglašavanje na našem webu</span>
Omogućujemo moderno i učinkovito oglašavanje na našem webu kako bismo vašem brendu, proizvodima ili uslugama osigurali veću vidljivost, prepoznatljivost i kvalitetniji doseg prema ciljanoj publici.
          </p>
        </div>

      </div>

        <!-- OGLASI -->
      <div v-else-if="cleanPage === 'oglasi'">

        <div class="paragraphCenter ">
          <p class="top paragraphCenter">
            <span class="section-title">Oglasi</span>
            ...
          </p>
        </div>
      </div>  

      <!-- OGLASI -->
      <div v-else-if="cleanPage === 'kontakt'">

        <div class="paragraphCenter ">
          <p class="top paragraphCenter">
            <span class="section-title">Kontakt</span>
            ...
          </p>
        </div>
      </div>  

      <!-- PROJEKTI -->
      <div v-else-if="cleanPage === 'projekti'">

        <div class="paragraphCenter ">
          <p class="top paragraphCenter">
            <span class="section-title">Projekti</span>
            ...
          </p>
        </div>
      </div>
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
  },

  emits: ["changeComp"],

  data() {
    return {
      navLinks: [
        { label: "O nama", path: "o-nama" },
        { label: "Usluge", path: "usluge" },
        { label: "Projekti", path: "projekti" },
        { label: "Oglasi", path: "oglasi" },
      ],
    };
  },

  computed: {
    filteredLinks() {
      return this.navLinks.filter(
        link => link.path !== this.currentPage
      );
    },

    cleanPage() {
    return this.currentPage?.replace("/", "");
    },

    currentPage() {
    return this.$route.path.replace("/", "");
  }
  },

  watch: {
    currentPage() {
      this.$nextTick(() => {
        requestAnimationFrame(() => {
          this.runAnimation();
        });
      });
    }
  },

  mounted() {
    this.$nextTick(() => {
      requestAnimationFrame(() => {
        this.runAnimation();
      });
    });
  },

  methods: {
    runAnimation() {
      const el = document.querySelector(".page-wrapper");
      if (!el) return;

      const items = el.querySelectorAll(".top, .bottom, .top2, .bottom2");
      if (!top) return;

      gsap.fromTo(
  items,
  { y: -80, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 0.6,
    stagger: 0.15,
    ease: "power2.out"
  }
);
    },

    changeComp(cmp) {
      this.$emit("changeComp", cmp);
    }
  }
};
</script>

<style>
/* unchanged */
</style>

<style scoped>

.top, .bottom, .top2, .bottom2 {
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

.top:hover, .bottom:hover, .top2:hover, .bottom2:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 35px rgba(0, 0, 0, 0.10);
  background: rgba(0, 31, 63, 0.06);
}

.descriptionContent {
  display: flex;
  flex-flow: column;
  align-items: center;
}

.paragraphCenter {
  display: flex;
  flex-flow: column;
  justify-content: center;
  width: 70%!important;
}

/* AFTER — scoped to cards only */
.top p:not(:first-child),
.bottom p:not(:first-child),
.top2 p:not(:first-child),
.bottom2 p:not(:first-child) {
  opacity: 0;
}

.descriptionContent2 {
  display: flex;
  flex-flow: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 100%;
}


.section-title {
  display: block;
  font-size: 22px;
  font-weight: 700;
  color: #001f3f;
  text-align: left;
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




