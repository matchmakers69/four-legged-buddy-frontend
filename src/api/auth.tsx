import { NEXT_URL } from "src/config";

// login user
export const login = async ({ email: identifier, password }): Promise<void> => {
  const res = await fetch(`${NEXT_URL}/api/login`, {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      identifier,
      password,
    }),
  });
  const data = await res.json();
  console.log(data);
  if (res.ok) {
    console.log("hello ok");
  } else {
    console.log("no ok");
  }
};
