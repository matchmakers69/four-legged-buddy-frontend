import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./auth/slice";
import { IUser } from "./interface/user";
import serverReducer from "./server/serverSlice";

export interface State {
  auth: IUser;
}

export const rootReducer = combineReducers({
  server: serverReducer,
  auth: userSlice,
});
