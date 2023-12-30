// import { gsap } from "gsap";
// import { TextPlugin } from "gsap/TextPlugin";

// gsap.registerPlugin(TextPlugin);

export const switchComponentMixin = {
  data() {
    return {
      switchComponent: "main-page",
    };
  },
  methods: {
    changeComp(cmp) {
      this.switchComponent = cmp;
    },
    // onAnimationComplete() {
    //   const anchorEl = document.querySelectorAll("a");
    //   const timeline = gsap.timeline();
    //   anchorEl.forEach((anchor) => {
    //     timeline.fromTo(
    //       anchor,
    //       {
    //         duration: 0.5,
    //         y: -100,
    //       },
    //       {
    //         opacity: 1,
    //         duration: 0.5,
    //         y: 0,
    //       }
    //     );
    //   });
    // },
  },
};
