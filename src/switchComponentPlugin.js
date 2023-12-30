import { switchComponentMixin } from "../src/switchComponentsMixin";

const SwitchComponentPlugin = {
  install(Vue) {
    Vue.mixin(switchComponentMixin);
  },
};

export default SwitchComponentPlugin;
