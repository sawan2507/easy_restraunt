import api from "../api";

// Place Order
export const placeOrder = async (orderDetail) => {
  try {
    const response = await api.post("/orders/create", orderDetail);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};