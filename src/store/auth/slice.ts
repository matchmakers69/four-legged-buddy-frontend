/* eslint-disable @typescript-eslint/no-empty-function */
import { createSlice } from "@reduxjs/toolkit";
import { NEXT_URL } from "src/config";
import { IUser } from "../interface/user";
import { logout } from "./actions";

const initialState: IUser = {
  user: null,
  loading: false,
  error: null,
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    hasError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    usersSuccess: (state, action) => {
      state.user = action.payload;
      state.error = null;
      state.loading = false;
      state.isAuthenticated = true;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(logout.pending, (state) => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
        state.loading = false;
      })
      .addCase(logout.rejected, (state) => {
        state.loading = false;
      })

      .addDefaultCase(() => {}),
});

const { usersSuccess, startLoading, hasError } = userSlice.actions;

export const getUser =
  ({ email: identifier, password }) =>
  async (dispatch) => {
    dispatch(startLoading());

    const res = await fetch(`${NEXT_URL}/api/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    });
    const data = await res.json();
    if (res.ok) {
      dispatch(usersSuccess(data.user));
    } else {
      dispatch(hasError(data.message));
    }
  };

export default userSlice.reducer;
