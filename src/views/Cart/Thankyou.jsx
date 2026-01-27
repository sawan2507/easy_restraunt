import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

import BannerBackground from "../../food-assets/img/hero/hero-bg.jpg";
import BannerBackground5 from "../../food-assets/img/banner/main-cta-bg-2.jpg";

function Thankyou() {
  

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
            <h1>Thank You</h1>
            <ul className="breadcrumb-items">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <i className="far fa-chevron-right"></i>
              </li>
              <li>Thank You</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="cart-section section-padding fix">
        <div className="container">
          <div className="main-cart-wrapper">
            
              <>
                <div className="row">
                  <div className="col-lg-12">
                    <h3>Thankyou</h3>
                    <p>Your Order Placed Successfully</p>
                    <a href="/">Go To Home</a>
                  </div>
                </div>
              </>
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

export default Thankyou;
