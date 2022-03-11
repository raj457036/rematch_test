import { createModel } from "@rematch/core";
import { RootModel } from ".";

type CounterAction = "increment" | "decrement";

interface CounterState {
  value: number;
  lastAction?: CounterAction;
}

const counterModel = createModel<RootModel>()({
  name: "counter",
  state: {
    value: 0,
  } as CounterState,
  reducers: {
    INCREMENT(state: CounterState) {
      return {
        value: state.value + 1,
        lastAction: "increment",
      };
    },
    DECREMENT(state: CounterState) {
      return {
        value: state.value - 1,
        lastAction: "decrement",
      };
    },
  },
  effects: (dispatch) => ({
    increment() {
      dispatch({ type: "counter/INCREMENT" });
    },
    decrement() {
      dispatch.counter.DECREMENT();
    },
  }),
});

export default counterModel;
