import { combineReducers, AnyAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import userSlice from "./auth/slice";
import { IUser } from "./interface/user";

export interface State {
  auth: IUser;
}

/**
 *
 * @combineReducers - insert your reducers inside
 */

export const rootReducer = (state: State | undefined, action: AnyAction): State => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    default: {
      const combineReducer = combineReducers({
        auth: userSlice,
        // auth: combineReducers({
        //   userSlice,
        //   memberSlice,
        // })
      });
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;
