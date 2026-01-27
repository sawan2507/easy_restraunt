import { useEffect, useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Home.css";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import MEDIA_URL from "../../media";

import {
  getProductList,
  getRestaurantProfile,
} from "../../controller/ProductController";
import {
  isInCart,
  manageCart,
  getCartQuantity,
  fetchCart,
  addRestaurant,
  clearCart,
} from "../../controller/CartController";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { placeOrder } from "../../controller/OrderController";

function Home() {
  let params = useParams();

  if (params.scanner_slug != "" && params.scanner_slug != undefined) {
    localStorage.setItem("scanner_slug", params.scanner_slug);
  }
  if (params.restaurant_slug != "" && params.restaurant_slug != undefined) {
    localStorage.setItem("restaurant_slug", params.restaurant_slug);
  }

  // const navigate = useNavigate();
  const [carts, setCart] = useState([]);
  const [orderPreview, setOrderPreview] = useState(false);
  const [restaurantId, setRestaurantId] = useState("");

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  const [cartItems, setCartItems] = useState([]);
  const [products, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cartState, setCartState] = useState({});
  const [totalAmount, setTotalAmount] = useState(0);

  const handleAddToCart = (product, quantity, type) => {
    manageCart({ product, quantity, type });
    setCart(fetchCart());
  };

  const setMainCategory = (category_id = "") => {
    getProductList(category_id, restaurantId).then((res) => {
      setProduct(res.data);
    });
  };

  const handlePlaceOrder = async () => {
    let fcmToken = localStorage.getItem("fcm_token");
    let ip_address = localStorage.getItem("ip_address");
    let scanner = JSON.parse(localStorage.getItem("_scanner")) ?? {};
    let restaurant = JSON.parse(localStorage.getItem("_restaurant")) ?? {};

    if (name.length == 0) {
      Swal.fire("", "Please enter name", "error");
      return false;
    }

    if (mobile.length == 0) {
      Swal.fire("", "Please enter mobile", "error");
      return false;
    }

    if (mobile.length < 10) {
      Swal.fire("", "Please enter valid mobile number", "error");
      return false;
    }

    if (isNaN(parseInt(mobile))) {
      Swal.fire("", "Please enter valid mobile number", "error");
      return false;
    }

    let cartDetail = {
      scanner_id: scanner.id,
      restaurant_id: restaurant.id,
      mobile: mobile,
      name: name,
      ip_address: ip_address,
      fcm_token: fcmToken,
      status: "received",
      subtotal: totalAmount,
      tax: "0.00",
      total: totalAmount,
      products: carts,
    };

    await placeOrder(cartDetail).then((res) => {
      Swal.fire("Success", res.message, "success").then(async () => {
        await clearCart().then(() => {
          window.location.reload();
        });
      });
      console.log("res -------- ", res);
    });
    // console.log('res --------', res)
    // console.log("carts ------", cartDetail);

    // await clearCart().then(() => {
    //   navigate('/thank-you');
    // });
  };

  useEffect(() => {
    getRestaurantProfile()
      .then((res) => {
        console.log(" res -------------- ", res.data);
        setProduct(res.data.products);
        setCategories(res.data.categories);
        setRestaurantId(res.data.restaurants.id);
        addRestaurant(res.data.restaurants, res.data.scanner);
      })
      .catch((err) => {});

    // fetchProductList();
    setCart(fetchCart());
  }, []);

  useEffect(() => {
    let total = 0;
    carts.map((cart) => {
      total += cart.special_price * cart.quantity;
    });
    setTotalAmount(total);

    // On load, map cart status for each product
    const state = {};
    products.forEach((p) => {
      state[p.id] = {
        inCart: isInCart(p.id),
        quantity: getCartQuantity(p.id),
      };
    });
    setCartState(state);
  }, [products, carts]);

  useEffect(() => {
    if (orderPreview == true) {
      $("#modal-pop-up").modal("show");
    } else {
      $("#modal-pop-up").modal("hide");
    }
  }, [orderPreview]);

  return (
    <>
      <Header />

      <section className="food-category-section fix section-bg">
        <div className="container">
          <div className="d-none section-title text-center">
            <span className="wow fadeInUp">crispy, every bite taste</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Food Categories
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="categories">
                <div
                  key={`category_all`}
                  className="category"
                  onClick={() => setMainCategory("")}
                >
                  <img
                    src={`https://img.icons8.com/color/96/000000/hamburger.png`}
                    alt={`All`}
                  />
                  <p>All</p>
                </div>
                {categories.length > 0 ? (
                  categories.map((category, c_ind) => (
                    <div
                      key={`category_${c_ind}`}
                      className="category"
                      onClick={() => setMainCategory(category.id)}
                    >
                      <img
                        src={`${MEDIA_URL}${category.image}`}
                        alt={`${category.name}`}
                      />
                      <p>{category.name}</p>
                    </div>
                  ))
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="col-lg-12">
              <div className="row">
                {
                  products.length > 0 ? (
                      products.map((product, ind) => (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={ind}>
                          <div className="food-item mb-2">
                            <img
                              src={`${MEDIA_URL}${product.image}`}
                              alt={`${product.name}`}
                            />
                            <div className="food-info">
                              <h4>{product.title}</h4>
                              <small className="text-success">
                                {(
                                  ((product.price - product.special_price) * 100) /
                                  product.price
                                ).toFixed(2)}
                                % Off
                              </small>
                              <div className="food-price-cross"></div>
                              <div className="food-price">
                                <strike className="text-danger">
                                  ₹ {product.price}
                                </strike>{" "}
                                ₹ {product.special_price}
                              </div>
                            </div>
                            <div></div>
                            {cartState[product.id]?.inCart ? (
                              <div className="quantity">
                                <button
                                  type="button"
                                  className=""
                                  onClick={() => handleAddToCart(product, -1, "add")}
                                >
                                  -
                                </button>
                                <span>{cartState[product.id]?.quantity}</span>
                                <button
                                  type="button"
                                  className=""
                                  onClick={() => handleAddToCart(product, 1, "add")}
                                >
                                  +
                                </button>
                              </div>
                            ) : (
                              <button
                                type="button"
                                className=""
                                onClick={() => handleAddToCart(product, 1, "add")}
                              >
                                <i className="far fa-shopping-basket"></i> Add
                              </button>
                            )}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="col-xl-12 col-lg-12">
                        <div className="food-item mb-2">
                          No Food Available
                        </div>
                      </div>
                    )
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {carts.length > 0 ? (
        <div className="cart-footer">
          <div className="cart-details">
            <span>{carts.length} items</span>
            <span>Total: ₹{totalAmount.toFixed(2)}</span>
          </div>
          <button
            type="button"
            onClick={() => {
              setOrderPreview(true);
            }}
            className="theme-btn-2 checkout-btn"
          >
            Checkout
          </button>
        </div>
      ) : (
        <></>
      )}

      <div className="modal fade" id="modal-pop-up" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Order Preview</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Food</th>
                    <th>Qty</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {carts.map((cart) => (
                    <tr key={cart.id}>
                      <td>{cart.title}</td>
                      <td>{cart.quantity}</td>
                      <td>{cart.quantity * cart.special_price}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td>
                      <span>{carts.length} items</span>
                    </td>
                    <td></td>
                    <td>
                      <span>Total: ₹{totalAmount.toFixed(2)}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>Mobile</span>
                    </td>
                    <td colSpan={2}>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Mobile Number"
                        onChange={(e) => setMobile(e.target.value)}
                      />
                    </td>
                  </tr>

                  <tr>
                    <td colSpan={3}>
                      <textarea
                        className="form-control"
                        name="note"
                        id=""
                        placeholder="Enter Order Note"
                        onChange={(e) => setName(e.target.value)}
                      ></textarea>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handlePlaceOrder()}
              >
                Place Order
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={() => setOrderPreview(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
