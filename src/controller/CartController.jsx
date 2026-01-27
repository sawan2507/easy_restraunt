import api from "../api";

// Get all posts
export const manageCart = ({ product, quantity = 1, type = "add" }) => {
  try {
    // get cart from localStorage or initialize as []
    let cart = JSON.parse(localStorage.getItem("_cart")) || [];

    // check if product already exists
    const index = cart.findIndex((item) => item.id === product.id);

    switch (type) {
      case "add":
        if (index >= 0) {
          // update quantity if already in cart
          cart[index].quantity += quantity;
          if (cart[index].quantity <= 0) {
            cart.splice(index, 1); // remove if quantity becomes 0
          }
        } else {
          cart.push({ ...product, quantity });
        }
        break;

      case "update":
        if (index >= 0) {
          cart[index].quantity = quantity;
          if (quantity <= 0) {
            cart.splice(index, 1); // remove if quantity becomes 0
          }
        }
        break;

      case "delete":
        if (index >= 0) {
          cart.splice(index, 1);
        }
        break;

      default:
        console.warn("Unknown cart action:", type);
    }

    // save back to localStorage
    localStorage.setItem("_cart", JSON.stringify(cart));

    return cart;
  } catch (error) {
    console.error("Error managing cart:", error);
    throw error;
  }
};

export const isInCart = (productId) => {
  try {
    const cart = JSON.parse(localStorage.getItem("_cart")) || [];
    return cart.some((item) => item.id === productId);
  } catch (error) {
    console.error("Error checking cart:", error);
    return false;
  }
};

// Get quantity of product in cart (or 0 if not in cart)
export const getCartQuantity = (productId) => {
  try {
    const cart = JSON.parse(localStorage.getItem("_cart")) || [];
    const item = cart.find((item) => item.id === productId);
    return item ? item.quantity : 0;
  } catch (error) {
    console.error("Error getting quantity:", error);
    return 0;
  }
};

export const fetchCart = () => {
  try {
    const cart = JSON.parse(localStorage.getItem("_cart")) || [];
    return cart;
  } catch (error) {
    console.error("Error fetching cart:", error);
    throw error;
  }
};

export const clearCart = async () => {
  try {
    localStorage.setItem('_cart', "[]")
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

export const addRestaurant = (restaurant, scanner) => {
  localStorage.setItem("_restaurant", JSON.stringify(restaurant))
  localStorage.setItem("_scanner", JSON.stringify(scanner))
}
