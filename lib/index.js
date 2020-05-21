import Fallback from './fallback';

export const Plugin = {
  install: function(Vue) {
    Vue.component('fallback', Fallback)
  }
}

export default {
  Fallback, Plugin
}
