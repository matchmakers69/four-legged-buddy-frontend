import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isVisible: false,
};

const uiSlice = createSlice({
  name: "dropdown",
  initialState,
  reducers: {
    toggleIsVisible: (state) => {
      state.isVisible = !state.isVisible;
    },
  },
});
export const uiReducer = uiSlice.reducer;
export const { toggleIsVisible } = uiSlice.actions;
