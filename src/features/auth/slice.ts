import { createSlice } from "@reduxjs/toolkit";
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
        state.user = null;
        state.userLoading = false;
      })
      .addCase(logout.rejected, (state) => {
        state.userLoading = false;
      }),
});
export const { clearUser } = userSlice.actions;
export default userSlice.reducer;
