import { createSlice } from "@reduxjs/toolkit";
import LocalStorage, { LOCAL_STORAGE_KEYS } from "src/utils/localStorage";
import { IUser } from "../interface/user";
import { logout, login } from "./actions";

const initialState: IUser = {
  user: null,
  userLoading: false,
  userError: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUserToStore: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
      state.userLoading = false;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(login.pending, (state) => {
        state.userLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        LocalStorage.saveItem(LOCAL_STORAGE_KEYS.auth, action.payload);
        state.user = action.payload;
        state.userError = null;
        state.userLoading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.userLoading = false;
        state.userError = action.payload;
      })

      .addCase(logout.pending, (state) => {
        state.userLoading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        LocalStorage.saveItem(LOCAL_STORAGE_KEYS.auth, null);
        state.user = null;
        state.userLoading = false;
      })
      .addCase(logout.rejected, (state) => {
        state.userLoading = false;
      }),
});
export const { clearUser, loginUserToStore } = userSlice.actions;
export default userSlice.reducer;
