import api from "../api";

// Get all posts
export const getProductList = async (category_id='', restaurant_id = '') => {
  try {
    const response = await api.get(`/products/list?category_id=${category_id}&restaurant_id=${restaurant_id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};
export const getCategoryList = async () => {
  try {
    const response = await api.get("/categories/list");
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};
export const getRestaurantProfile = async () => {
  try {

    const restaurant_slug = localStorage.getItem("restaurant_slug")
    const scanner_slug = localStorage.getItem("scanner_slug")

    const response = await api.get("/user/fetch-restaurant-profile/" + restaurant_slug + '?scanner_slug=' + scanner_slug);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};
