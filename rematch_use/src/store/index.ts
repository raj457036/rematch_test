import { init, RematchDispatch, RematchRootState } from "@rematch/core";
import selectPlugin from "@rematch/select";
import { RootModel, models } from "./models";

const store = init({
  models,
  plugins: [selectPlugin<RootModel>()],
});

export const { select } = store;

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;

export default store;
