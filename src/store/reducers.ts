import { combineReducers } from "redux";
import { configReducer as config } from "./Config/reducer";
import { recordReducer as record } from "./Record/reducer";
import { tableReducer as table } from "./Table/reducer";
import { userReducer as user } from "./User/reducer";

export const reducers = combineReducers({
  config,
  record,
  table,
  user,
});

export type RootState = ReturnType<typeof reducers>;
