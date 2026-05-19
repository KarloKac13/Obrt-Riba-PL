import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../components/MyHomepage.vue";
import AboutMe from "../components/AboutMe.vue";
import Projects from "../components/MyProjects.vue";
import Usluge from "../components/ContactMe.vue";
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
    path: "/projekti",
    name: "projekti",
    component: Projects,
    meta: { mirror: false },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach(() => {
  window.dispatchEvent(new Event("route-changed"));
});

export default router;
