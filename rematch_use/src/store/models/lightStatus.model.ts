import { createModel } from "@rematch/core";
import { RootModel } from ".";

interface LightStatusState {
  turnedOn: boolean;
}

const lightStatusModel = createModel<RootModel>()({
  state: {
    turnedOn: false,
  },
  reducers: {
    TURN_ON(state: LightStatusState) {
      return {
        turnedOn: true,
      };
    },
    TURN_OFF(state: LightStatusState) {
      return {
        turnedOn: false,
      };
    },
  },
});

export default lightStatusModel;
