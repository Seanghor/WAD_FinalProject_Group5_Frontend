import { client } from "../utils/http";

// Get All order of customer
export const getOrders = async () => {
  const data = await client.get("/orders");
  return data.data;
};

// get Order by Id
export const getOrderById = async (id) => {
  const res = await client.get(`/order/${id}`);
  if (res.status !== 200) {
    console.log("fail to getOrder...");
    throw new Error("Failled to delete this product");
  }
  return res.data;
};

// create order
export const createOrder = async ({ productId, quantity, customerId }) => {
  const res = await client.post("/order", {
    productId,
    quantity,
    customerId,
  });
  if (res.status !== 200) {
    console.log("Fail to createOrder ...");
    throw new Error("Failed to create ...");
  }
  console.log("Create order: suceessfull ...");
  return res.data;
};

// update order:
export const updateOrderById = async (id, { quantity }) => {
  const res = await client.delete(`/order/${id}`, { quantity });
  if (res.status !== 200) {
    console.log("Fail to update");
    throw new Error("Failled to delete this order");
  }
  return res.data;
};

// delete order
export const deleteOrder = async (id) => {
  const res = await client.delete(`/order/${id}`);
  if (res.status !== 200) {
    console.log("delte order: false");
    throw new Error("Failled to delete this order");
  }
  return res.data;
};

// delete all order:
export const deleteAllOrder = async () => {
  const res = await client.delete("/orders");
  if (res.status !== 200) {
    console.log("delte order: false");
    throw new Error("Failled to delete this order");
  }
  return res.data;
};
