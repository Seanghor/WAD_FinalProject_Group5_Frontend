import { client } from "../utils/http";

// Get all product
export const getProducts = async () => {
  const data = await client.get("/products");
  return data.data;
};

// Get product by id
export const getSingleProduct = async (id) => {
  const res = await client.get(`/product/${id}`);
  if (res.status !== 200) {
    throw new Error("Failed to get product ...");
  }
  console.log("Get success ...");
  return res.data;
};

// Create Product
export const createProduct = async ({
  name,
  description,
  profile,
  images,
  rating,
  category_id,
  discount_id,
  discount_active,
  price,
  quantity,
}) => {
  const res = await client.post("/product", {
    name,
    description,
    profile,
    images,
    rating,
    category_id,
    discount_id,
    discount_active,
    price,
    quantity,
  });
  if (res.status !== 200) {
    throw new Error("Failed to create ...");
  }
  console.log("Create suceessfull ...");
  return res.data;
};

// Update product:
export const updateProduct = async (
  id,
  {
    name,
    description,
    category_id,
    discount_id,
    discount_active,
    price,
    quantity,
  }
) => {
  const res = await client.put(`/product/${id}`, {
    name,
    description,
    category_id,
    discount_id,
    discount_active,
    price,
    quantity,
  });
  if (res.status !== 200) throw new Error("Failed to update this product");
  return res.data;
};

// delete product:
export const deleteProduct = async (id) => {
  const res = await client.delete(`/product/${id}`);
  if (res.status !== 200) throw new Error("Failled to delete this product");
  return res.data;
};
