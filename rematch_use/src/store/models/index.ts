import { Models } from "@rematch/core";
import counter from "./counter.model";
import lightStatus from "./lightStatus.model";

export interface RootModel extends Models<RootModel> {
  counter: typeof counter;
  lightStatus: typeof lightStatus;
}

export const models: RootModel = { counter, lightStatus };
