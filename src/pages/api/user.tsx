import type { NextApiRequest, NextApiResponse } from "next";
import { parseCookies } from "nookies";
import { API_URL } from "src/config";

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  if (req.method === "GET") {
    // Check if cookie exist
    if (!req.headers.cookie) {
      res.status(403).json({ message: "User is not Authorized" });
      return;
    }

    // Else parse cookie here
    const parsedCookies = parseCookies({ req });
    const strapiRes = await fetch(`${API_URL}/users/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${parsedCookies?.token}`,
      },
    });

    const user = await strapiRes.json();
    if (strapiRes.ok) {
      res.status(200).json({
        user,
      });
    } else {
      res.status(403).json({
        message: "User forbidden",
      });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({
      message: `Method ${req.method} not allowed`,
    });
  }
};
