import { client } from "../utils/http";

// Create order
export const getProducts = async () => {
  const data = await client.get("/products");
  return data.data;
};
