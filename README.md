# vue-fallback

Vue Fallback is an alternative for the lack of the *Suspense* component in Vue.js 2.

<p align="center">
  <img src="fallback.gif">
</p>

## Usage

Add the plugin to your project dependencies

```shell
$ npm install vue-fallback
```

Then

```javascript
import Vue from 'vue';
import Fallback from 'vue-fallback';

Vue.use(Fallback.Plugin);

new Vue({
  el: '#app',
  template: `
    <fallback :promise="asyncResult">
      <template #resolved>{{ resolvedMessage }}</template>
      <template #pending>{{ pendingMsg }}</template>
      <template #rejected>{{ rejectedMessage }}</template>
    </fallback>
  `,
  data() {
    return {
      resolvedMessage: 'All done!',
      pendingMsg: 'Loading...',
      rejectedMessage: 'Oops! Something went wrong.',
    };
  },
  created() {
    this.asyncResult = new Promise(resolve => {
      setTimeout(() => { resolve(true); }, 2000);
    });
  }
});
```

## How it works

The Fallback component has only one prop, the `promise`, which is required and also happens to be a Promise.

While the promise is not finished, the content from `#pending` slot will be displayed.

If the promise is successfully resolved, the `#resolved` content will then be shown.

At last, if the promise got rejected, the `#rejected` slot will be shown instead.

## Known issues

When no `#pending` slot is given, the component does nothing. This probably happens because it works like a fragment, so since there is no root element it is not possible to make further updates to the DOM.

## TODO

- [ ] Add tests
- [ ] Improve docs
- [ ] Get usage feedback
- [ ] Publish
