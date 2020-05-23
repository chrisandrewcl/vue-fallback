import component from './fallback';

export const plugin = {
  install: function (Vue) {
    Vue.component('fallback', component);
  },
};

export { component as fallback };

export default { 
  component, 
  plugin,
};
