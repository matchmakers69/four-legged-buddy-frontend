import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { NEXT_URL } from "src/config";

interface ILogin {
  email: string;
  password: string;
}

export const login = createAsyncThunk("user/login", async (payload: ILogin, { rejectWithValue }) => {
  try {
    const { email: identifier, password } = payload;
    const res = await axios.post(`${NEXT_URL}/api/login`, { identifier, password });
    return res.data.user as ILogin;
  } catch (error) {
    return rejectWithValue(error?.response?.data);
  }
});

export const logout = createAsyncThunk("user/logout", async (_, { rejectWithValue }) => {
  try {
    // Could be const res = await axios.post(`${NEXT_URL}/api/logout`);
    // return res?.data
    await axios.post(`${NEXT_URL}/api/logout`);
    return null;
  } catch (error) {
    return rejectWithValue(error?.response?.data);
  }
});

export const isLoggedIn = createAsyncThunk("user/isLoggedIn", async (_, { rejectWithValue }) => {
  try {
    // const res = await fetch(`${NEXT_URL}/api/user`);
    const res = await fetch(`${NEXT_URL}/api/user`);
    const data = await res.json();
    console.log(data, "data");
    if (res.ok) {
      console.log("jest user");
    } else {
      console.log("brak user");
    }

    // const res = await axios.get(`${NEXT_URL}/api/user`);
  } catch (err) {
    return rejectWithValue(err?.response?.data);
  }
});
