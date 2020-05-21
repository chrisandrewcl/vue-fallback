export default {
  name: 'Fallback',

  props: {
    promise: {
      type: Promise,
      required: true
    }
  },

  template: `
    <div>
      <slot name="resolved" v-if="resolved"></slot>
      <slot name="pending" v-else-if="!rejected"></slot>
      <slot name="rejected" v-else></slot>
    </div>
  `,

  data() {
    return {
      resolved: false,
      rejected: false,
    };
  },

  created() {
    this.promise
      .then(() => {
        this.resolved = true;
      })
      .catch(() => {
        if (!this.$slots.rejected) {
          this.resolved = true;
        } else {
          this.rejected = true;
        }
      });
  },

  mounted() {
    const el = this.$el;
    const parent = el.parentNode;

    while (el.firstChild) {
      parent.insertBefore(el.firstChild, el);
    }
    
    parent.removeChild(el);
  },
};
