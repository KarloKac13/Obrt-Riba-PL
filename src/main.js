import { createApp } from "vue";
import App from './App.vue';
import MyHomepage from "./components/MyHomepage.vue";
import AboutMe from "./components/AboutMe.vue";
import ContactMe from "./components/ContactMe.vue";
import MyProjects from "./components/MyProjects.vue";

const app = createApp(App);
app
  .component("main-page", MyHomepage)
  .component("about-me", AboutMe)
  .component("contact-me", ContactMe)
  .component("my-projects", MyProjects);

app.mount("#app");
