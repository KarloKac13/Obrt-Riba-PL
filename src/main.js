import { createApp } from "vue";
import App from "./App.vue";
import MyHomepage from "./components/MyHomepage.vue";
import AboutMe from "./components/AboutMe.vue";
import TheServices from "./components/TheServices.vue";
import MyProjects from "./components/MyProjects.vue";
import BaseCard from "./BaseCards/NavigationCard.vue";
import TheAnimations from "./BaseCards/TheAnimations.vue";
import TheMarketing from "./components/TheMarketing.vue";
import OurContact from "./components/OurContact.vue";
import VideoBackgroundReverse from "./BaseCards/VideoBackgroundReverse.vue";
import VideoBackground from "./BaseCards/VideoBackground.vue";
import router from "./router";


const app = createApp(App);

app.use(router);

app
  .component("main-page", MyHomepage)
  .component("about-me", AboutMe)
  .component("contact-me", TheServices)
  .component("my-projects", MyProjects)
  .component("base-card", BaseCard)
  .component("the-animations", TheAnimations)
  .component("video-backgroundreverse", VideoBackgroundReverse)
  .component("video-background", VideoBackground)
  .component("oglasi", TheMarketing)
  .component("our-contact", OurContact)
app.mount("#app");
