export default {
  functional: true,

  name: "Fallback",

  props: {
    state: {
      type: String,
      enum: ["pending", "done", "error"],
      required: true,
    },
  },

  render(_, context) {
    if (context.props.state === "pending") {
      return context.slots().pending;
    } else if (context.props.state === "error" && context.slots().error) {
      return context.slots().error;
    } else {
      return context.slots().done;
    }
  },
};
