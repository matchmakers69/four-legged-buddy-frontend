import axios, { AxiosResponse } from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { setCookie } from "nookies";
import { API_URL } from "src/config";

type RegisterResponse = {
  jwt: string;
};

interface IRegisterInput {
  username: string;
  password: string;
  email: string;
}

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { username, password, email } = req.body;
  try {
    const response = await axios.post<IRegisterInput, AxiosResponse<RegisterResponse>>(
      `${API_URL}/auth/local/register`,
      {
        username,
        password,
        email,
      }
    );
    setCookie({ res }, "jwt", response.data.jwt, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });

    res.status(200).end();
  } catch (e) {
    console.log(e, "e");
    // res.status(400).send(e.response.data.message[0].messages[0]);
  }
};
