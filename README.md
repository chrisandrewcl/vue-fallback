# vue-fallback

Vue Fallback is an alternative for the lack of the *Suspense* component in Vue.js 2.

<p align="center">
  <img src="fallback.gif">
</p>

## Disclaimer

This is an experiment in a very early stage of development and is not suitable for production. See more details in [known issues](#known-issues).

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

Current implementation tries to circumvent Vue single-root rule by unwrapping the component content but this results in Vue not being able to make further changes to the DOM, which is a deal-breaker.

The [functional branch](https://github.com/chrisandrewcl/vue-fallback/tree/functional) has another implementation that uses a functional component to work around this issue.

## TODO

- [ ] Add tests
- [ ] Improve docs
- [ ] Get usage feedback