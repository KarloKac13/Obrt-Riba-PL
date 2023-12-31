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
  },
};
