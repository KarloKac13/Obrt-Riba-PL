import { createRouter, createWebHashHistory } from "vue-router";

import HomePage from "../components/MyHomepage.vue";
import AboutMe from "../components/AboutMe.vue";
import Projects from "../components/MyProjects.vue";
import Usluge from "../components/TheServices.vue";
import TheMarketing from "../components/TheMarketing.vue";
import OurContact from "../components/OurContact.vue";
import "/public/mediaqueries.css";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
    meta: { mirror: false },
  },
  {
    path: "/o-nama",
    name: "o-nama",
    component: AboutMe,
    meta: { mirror: false },
  },
  {
    path: "/usluge",
    name: "usluge",
    component: Usluge,
    meta: { mirror: false },
  },
  {
    path: "/oglasi",
    name: "oglasi",
    component: TheMarketing,
    meta: { mirror: false },
  },
  {
    path: "/projekti",
    name: "projekti",
    component: Projects,
    meta: { mirror: false },
  },
  {
    path: "/kontakt",
    name: "kontakt",
    component: OurContact,
    meta: { mirror: false },
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.afterEach(() => {
  window.dispatchEvent(new Event("route-changed"));
});

export default router;
