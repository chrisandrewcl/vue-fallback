# vue-fallback

Vue Fallback is an alternative for the lack of the *Suspense* component in Vue.js 2.

## Usage

Add the plugin to your project dependencies

```shell
$ npm install vue-fallback
```

Then

```javascript
import Vue from 'vue';
import Fallback from '.vue-fallback';

Vue.use(Fallback.Plugin);

new Vue({
  el: '#app',
  template: `
    <fallback :promise="asyncResult">
      <template #resolved>{{ doneMessage }}</template>
      <template #pending>{{ fallbackMsg }}</template>
      <template #rejected>{{ rejectedMessage }}</template>
    </fallback>
  `,
  data() {
    return {
      doneMessage: 'All done!',
      pendingMsg: 'Loading...',
      rejectedMessage: 'Oops! Something went wrong.',
    };
  },
  beforeCreate() {
    this.asyncResult = new Promise(resolve => {
      setTimeout(() => { resolve(true); }, 5000);
    });
  }
});
```

## How it works

The Fallback component accepts only has one prop, the `promise`, which is required and also happens to be a Promise and is also.

While the promise is not finished, the content from `#pending` slot will be displayed.

If the promise is successfully resolved, the `#resolved` content will then be shown.

At last, if the promise got rejected, the `#rejected` slot will be shown instead.

## Knonwn issues

When no `#pending` slot is given, the component does nothing. This probably happens because it works like a fragment, so since there is no root element it is not possible to make further updates in the DOM.

## TODO

- [ ] Add tests
- [ ] Get usage feedback
- [ ] Publish
