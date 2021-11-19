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

// export const getUser =
//   ({ email: identifier, password }) =>
//   async (dispatch) => {
//     dispatch(startLoading());

//     const res = await fetch(`${NEXT_URL}/api/login`, {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         identifier,
//         password,
//       }),
//     });
//     const data = await res.json();
//     if (res.ok) {
//       dispatch(usersSuccess(data.user));
//     } else {
//       dispatch(hasError(data.message));
//     }
//   };

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
