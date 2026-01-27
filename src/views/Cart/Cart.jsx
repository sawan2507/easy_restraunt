import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

import BannerBackground from "../../food-assets/img/hero/hero-bg.jpg";
import BannerBackground1 from "../../food-assets/img/shop-food/food-1.png";
import BannerBackground2 from "../../food-assets/img/shop-food/food-2.png";
import BannerBackground3 from "../../food-assets/img/shop-food/food-3.png";
import BannerBackground4 from "../../food-assets/img/shop-food/food-4.png";
import BannerBackground5 from "../../food-assets/img/banner/main-cta-bg-2.jpg";
import MEDIA_URL from "../../media";
import { clearCart, fetchCart, manageCart } from "../../controller/CartController";
import { placeOrder } from "../../controller/OrderController";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [carts, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate()
  useEffect(() => {
    setCart(fetchCart());
  }, []);
  useEffect(() => {
    let total = 0;
    carts.map((cart) => {
      total += cart.special_price * cart.quantity;
    });
    setTotalAmount(total);
  }, [carts]);

  const handleAddToCart = (product, quantity, type) => {
    manageCart({ product, quantity, type });
    setCart(fetchCart());
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
      products: carts
    };

    await placeOrder(cartDetail).then((res) => {
      Swal.fire('Success', res.message, 'success').then(async () => {
        await clearCart().then(() => {
          navigate('/thank-you');
        })
      })
      console.log('res -------- ', res)
    })
    // console.log('res --------', res)
    // console.log("carts ------", cartDetail);

    // await clearCart().then(() => {
    //   navigate('/thank-you');
    // });


  };

  return (
    <>
      <Header />
      {/* ---------------------------------- */}
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: `url(${BannerBackground})` }}
      >
        <div className="container">
          <div className="page-heading center">
            <h1>shop Cart</h1>
            <ul className="breadcrumb-items">
              <li>
                <a href="index-2.html">Home Page</a>
              </li>
              <li>
                <i className="far fa-chevron-right"></i>
              </li>
              <li>shop Cart</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="cart-section mt-2 fix">
        <div className="container">
          <div className="main-cart-wrapper">
            {carts.length > 0 ? (
              <>
                <div className="row">
                  <div className="col-12 mb-2">
                    <h3>Cart Items</h3>
                  </div>
                  <div className="col-12">
                    <div className="food-list">
                      {carts.length ? (
                        carts.map((cart, ikey) => (
                          <div key={ikey} className="food-item">
                            <img src={`${MEDIA_URL}${cart.image}`} alt={`${cart.name}`} />
                            <div className="food-info">
                              <h4>{cart.title}</h4>
                              <small>{(
                                    ((cart.price - cart.special_price) *
                                      100) /
                                    cart.price
                                  ).toFixed(2)}
                                  %</small>
                              <div className="food-price"> {cart.special_price}</div>
                            </div>
                            <div></div>
                            <div className="quantity">
                                <button
                                    type="button"
                                    className=""
                                    onClick={() =>
                                    handleAddToCart(cart, -1, "add")
                                    }
                                >-</button>
                                <span>{cart.quantity}</span>
                                <button
                                type="button"
                                    className=""
                                    onClick={() =>
                                    handleAddToCart(cart, 1, "add")
                                    }
                                >+</button>
                            </div>
                          </div>
                        ))
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6"></div>
                  <div className="col-xl-6">
                    <div className="cart-pragh-box">
                      <div className="cart-graph">
                        <h4>Cart Total</h4>
                        <ul>
                          <li>
                            <span>Name</span>
                            <span>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                              />
                            </span>
                          </li>
                          <li>
                            <span>Mobile</span>
                            <span>
                              <input
                                type="text"
                                minLength={10}
                                maxLength={10}
                                className="form-control"
                                placeholder="Enter Mobile"
                                name="mobile"
                                value={mobile}
                                onChange={(evt) => {
                                  setMobile(evt.target.value);
                                }}
                              />
                            </span>
                          </li>

                          <li>
                            <span>Subtotal</span>
                            <span>₹ {totalAmount.toFixed(2)}</span>
                          </li>
                          <li>
                            <span>Tax</span>
                            <span> ₹ 0.00</span>
                          </li>
                          <li>
                            <span>Total</span>
                            <span>₹ {totalAmount.toFixed(2)}</span>
                          </li>
                        </ul>
                        <div className="chck">
                          <button
                            className="theme-btn border-radius-none"
                            onClick={() => handlePlaceOrder()}
                          >
                            Place Order
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="row">
                  <div className="col-lg-12">
                    <h3>Empty Cart</h3>
                    <a href="/">Go To Home</a>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <section
        className="main-cta-banner-2 section-padding bg-cover"
        style={{ backgroundImage: `url(${BannerBackground5})` }}
      >
        <div className="tomato-shape-left float-bob-y">
          <img src="src/food-assets/img/tomato.png" alt="shape-img" />
        </div>
        <div className="chili-shape-right float-bob-y">
          <img src="src/food-assets/img/chilli.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="main-cta-banner-wrapper-2 d-flex align-items-center justify-content-between">
            <div className="section-title mb-0">
              <span className="theme-color-3 wow fadeInUp">
                crispy, every bite taste
              </span>
              <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                30 minutes fast <br />
                <span className="theme-color-3">delivery</span> challage
              </h2>
            </div>
            <a
              href="shop-single.html"
              className="theme-btn bg-white wow fadeInUp"
              data-wow-delay=".5s"
            >
              <span className="button-content-wrapper d-flex align-items-center">
                <span className="button-icon">
                  <i className="flaticon-delivery"></i>
                </span>
                <span className="button-text">order now</span>
              </span>
            </a>
            <div className="delivery-man">
              <img src="src/food-assets/img/delivery-man-2.png" alt="img" />
            </div>
          </div>
        </div>
      </section>
      {/* ---------------------------------- */}
      <Footer />
    </>
  );
}

export default Cart;
