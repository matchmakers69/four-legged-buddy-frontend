import axios from "axios";
import { API_URL } from "src/config";

export const removeMemberById = async (id: string) => {
  const res = await axios.delete(`${API_URL}/members/${id}`);
  return res.data;
};
