import { createApp } from "vue";
import App from "./App.vue";
import MyHomepage from "./components/MyHomepage.vue";
import AboutMe from "./components/AboutMe.vue";
import ContactMe from "./components/ContactMe.vue";
import MyProjects from "./components/MyProjects.vue";
import SwitchComponentPlugin from "../src/switchComponentPlugin";
import BaseCard from "./BaseCards/NavigationCard.vue";

const app = createApp(App);

app.use(SwitchComponentPlugin);

app
  .component("main-page", MyHomepage)
  .component("about-me", AboutMe)
  .component("contact-me", ContactMe)
  .component("my-projects", MyProjects)
  .component("base-card", BaseCard);

app.mount("#app");
