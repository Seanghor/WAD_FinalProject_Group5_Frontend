import { client } from "../utils/http";
export const getUserProfile = async () => {
    const res = await client.get("/profile");
    return res.data;
  };
  