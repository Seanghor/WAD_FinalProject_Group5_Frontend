import { client } from "../utils/http";

// get category by Id
export const getCategory = async (id) => {
  try {
    const res = await client.get(`/productCategory/${+id}`);
    if (res.status !== 200) {
      throw new Error("Cant get this category");
    }
    return res.data;
  } catch (error) {
    throw error;
  }
};

// Update Category by Id
export const updateCategory = async (id, { name, description }) => {
  const res = await client.put(`/productCategory/${id}`, { name, description });
  if (res.status !== 200) throw new Error("Failed to update this Category");
  return res.data;
};

// Get all Category include products:
export const getAllCategory = async () => {
  const res = await client.get("/productCategories");
  if (res.status !== 200) {
    throw new Error("Cant get all Category");
  }
  return res.data;
};

// Create Category
export const createCategory = async ({ name, description }) => {
  const res = await client.post(`/productCategory`);
  if (res.status !== 200) {
    throw new Error("Error cant create Category")
  }
  return res.data
};


// Delete Category
export const deleteCategory = async(id)=> {
  const res = await client.delete(`/productCategory/${id}`)
  if (res.status !== 200) {
    throw new Error("Cant not delete this Category")
  }
  return res.data
}
