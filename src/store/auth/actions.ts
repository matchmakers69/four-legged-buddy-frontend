import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { NEXT_URL } from "src/config";

export const logout = createAsyncThunk("user/logout", async () => {
  const res = await axios.post(`${NEXT_URL}/api/logout`);
  if (res.status === 200) {
    console.log("wylogowano");
  }
});
