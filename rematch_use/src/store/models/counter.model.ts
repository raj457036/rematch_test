import { createModel } from "@rematch/core";
import { RootModel } from ".";

type CounterAction = "increment" | "decrement";

interface CounterState {
  value: number;
  lastAction?: CounterAction;
}

const counterModel = createModel<RootModel>()({
  state: {
    value: 0,
  } as CounterState,
  selectors: (slice) => ({
    totalCount() {
      return slice((counter: CounterState) =>
        counter.value > 0
          ? [...Array<number>(counter.value + 1).keys()].reduce(
              (a, b) => a + b,
              0
            )
          : 0
      );
    },
  }),
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
