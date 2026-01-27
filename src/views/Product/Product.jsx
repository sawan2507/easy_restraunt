import { useEffect, useState } from "react";

import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

import BannerBackground from "../../food-assets/img/hero/hero-bg.jpg"
import BannerBackground1 from "../../food-assets/img/shop-food/food-1.png"
import BannerBackground2 from "../../food-assets/img/shop-food/food-2.png"
import BannerBackground3 from "../../food-assets/img/shop-food/food-3.png"
import BannerBackground4 from "../../food-assets/img/shop-food/food-4.png"
import BannerBackground5 from "../../food-assets/img/banner/main-cta-bg-2.jpg"
import { getCategoryList } from "../../controller/ProductController";

function Product() {
    const [categories, setCategories] = useState([])
    useEffect(() => {
      getCategoryList().then((res) => {
          setCategories(res.data)
      })
    }, [])
    
 
  return (
    <>
      <Header />
      {/* ---------------------------------- */}
        
        <div className="breadcrumb-wrapper bg-cover" style={{backgroundImage: `url(${BannerBackground})`}}>
            <div className="container">
                <div className="page-heading center">
                    <h1>Product</h1>
                    <ul className="breadcrumb-items">
                        <li>
                            <a href="/">
                            Home
                            </a>
                        </li>
                        <li>
                            <i className="far fa-chevron-right"></i>
                        </li>
                        <li>
                            Product
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <section className="food-category-section fix section-padding">
            <div className="container">
                <div className="row g-4">
                    <div className="col-xl-3 col-lg-4 order-2 order-md-1 mt-5">
                        <div className="main-sidebar">
                            <div className="single-sidebar-widget">
                                <div className="wid-title">
                                    <h4>catagories</h4>
                                </div>
                                <div className="widget-categories">
                                    <ul>
                                        {categories.length > 0 ?
                                            categories.map((category, c_key) => (
                                                <li key={c_key}><a href="#"><i className="flaticon-burger"></i>{category.name}</a></li>
                                            ))
                                        : <></>}
                                    </ul>
                                </div>
                            </div>
                            <div className="single-sidebar-widget">
                                <div className="wid-title">
                                    <h4>price filter</h4>
                                </div>
                                <div className="range__barcustom">
                                    <div className="slider">
                                        <div className="progress" style={{left:"25%",right:'25%'}}></div>
                                    </div>
                                    <div className="range-input">
                                        <input type="range" className="range-min" min="0" max="10000" value="2500"/>
                                        <input type="range" className="range-max" min="100" max="10000" value="7500"/>
                                    </div>
                                    <div className="range-items">
                                        <div className="price-input d-flex">
                                            <div className="field">
                                                <span>Price:</span>
                                            </div>
                                            <div className="field">
                                                <span>$</span>
                                                <input type="number" className="input-min" value="100"/>
                                            </div>
                                            <div className="separators">-</div>
                                            <div className="field">
                                                <span>$</span>
                                                <input type="number" className="input-max" value="1000"/>
                                            </div>
                                            <a href="shop-left-sidebar.html" className="theme-btn border-radius-none">Filter</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="single-sidebar-widget">
                                <div className="wid-title">
                                    <h4>filter by size</h4>
                                </div>
                                <div className="filter-size">
                                    <div className="input-save d-flex align-items-center">
                                        <input type="checkbox" className="form-check-input" name="save-for-next" id="saveForNext" />
                                        <label htmlFor="saveForNext">Small</label>
                                    </div>
                                    <div className="input-save d-flex align-items-center">
                                        <input type="checkbox" className="form-check-input" name="save-for-next" id="saveForNext2" />
                                        <label htmlFor="saveForNext">Medium</label>
                                    </div>
                                    <div className="input-save d-flex align-items-center">
                                        <input type="checkbox" className="form-check-input" name="save-for-next" id="saveForNext3" />
                                        <label htmlFor="saveForNext">Big</label>
                                    </div>
                                    <div className="input-save d-flex align-items-center">
                                        <input type="checkbox" className="form-check-input" name="save-for-next" id="saveForNext4" />
                                        <label htmlFor="saveForNext">Mixing</label>
                                    </div>
                                </div>
                            </div>
                            <div className="single-sidebar-widget">
                                <div className="wid-title">
                                    <h4>new arrival</h4>
                                </div>
                                <div className="popular-food-posts">
                                    <div className="single-post-item">
                                        <div className="thumb bg-cover" style={{backgroundImage: `url(${BannerBackground1})`}}></div>
                                        <div className="post-content">
                                            <div className="star">
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star color-bg"></span>
                                            </div>
                                            <h4><a href="shop-single.html">ruti with chiken</a></h4>
                                            <div className="post-price">
                                                <span className="theme-color-2">$30.52</span>
                                                <span>$28.52</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-post-item">
                                        <div className="thumb bg-cover" style={{backgroundImage: `url(${BannerBackground2})`}}></div>
                                        <div className="post-content">
                                            <div className="star">
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star color-bg"></span>
                                            </div>
                                            <h4><a href="shop-single.html">ruti with chiken</a></h4>
                                            <div className="post-price">
                                                <span className="theme-color-2">$30.52</span>
                                                <span>$28.52</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-post-item">
                                        <div className="thumb bg-cover" style={{backgroundImage: `url(${BannerBackground3})`}}></div>
                                        <div className="post-content">
                                            <div className="star">
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star color-bg"></span>
                                            </div>
                                            <h4><a href="shop-single.html">ruti with chiken</a></h4>
                                            <div className="post-price">
                                                <span className="theme-color-2">$30.52</span>
                                                <span>$28.52</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-post-item">
                                        <div className="thumb bg-cover" style={{backgroundImage: `url(${BannerBackground4})`}}></div>
                                        <div className="post-content">
                                            <div className="star">
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star color-bg"></span>
                                            </div>
                                            <h4><a href="shop-single.html">ruti with chiken</a></h4>
                                            <div className="post-price">
                                                <span className="theme-color-2">$30.52</span>
                                                <span>$28.52</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-8 order-1 order-md-2">
                        <div className="woocommerce-notices-wrapper">
                            <div className="product-showing">
                                <h5><a href="/shop"><span><img src="src/food-assets/img/filter.png" alt="img"/></span> Filtering</a></h5>
                                <h5>Showing <span>1–12</span> of 27 results</h5>
                            </div>
                            <div className="form-clt">
                                <h6>Sort by: <a href="shop.html"><i className="fal fa-sort-alt"></i></a></h6>
                                <div className="nice-select" tabIndex="0">
                                    <span className="current">
                                    Price
                                    </span>
                                    <ul className="list">
                                        <li data-value="1" className="option selected">
                                            100$
                                        </li>
                                        <li data-value="1" className="option">
                                            120$
                                        </li>
                                        <li data-value="1" className="option">
                                            150$
                                        </li>
                                        <li data-value="1" className="option">
                                            200$
                                        </li>
                                    </ul>
                                </div>
                                <div className="icon">
                                    <a href="shop-left-sidebar.html"><i className="fas fa-th"></i></a>
                                </div>
                                <div className="icon-2">
                                    <a href="shop-list.html"><i className="fas fa-list"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="catagory-product-card-2 shadow-style text-center">
                                    <div className="icon">
                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                    </div>
                                    <div className="catagory-product-image">
                                        <img src="src/food-assets/img/food/pasta-2.png" alt="product-img"/>
                                    </div>
                                    <div className="catagory-product-content">
                                        <div className="catagory-button">
                                            <a href="shop-cart.html" className="theme-btn-2"><i className="far fa-shopping-basket"></i>Add To Cart</a>
                                        </div>
                                        <div className="info-price d-flex align-items-center justify-content-center">
                                            <p>-5%</p>
                                            <h6>$30.52</h6>
                                            <span>$28.52</span>
                                        </div>
                                        <h4>
                                            <a href="shop-single.html">Chiness pasta</a>
                                        </h4>
                                        <div className="star">
                                            <span className="fas fa-star"></span>
                                            <span className="fas fa-star"></span>
                                            <span className="fas fa-star"></span>
                                            <span className="fas fa-star"></span>
                                            <span className="fas fa-star color-bg"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="catagory-product-card-2 shadow-style active text-center">
                                    <div className="icon">
                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                    </div>
                                    <div className="catagory-product-image">
                                        <img src="src/food-assets/img/food/burger-2.png" alt="product-img"/>
                                    </div>
                                    <div className="catagory-product-content">
                                        <div className="catagory-button">
                                            <a href="shop-cart.html" className="theme-btn-2"><i className="far fa-shopping-basket"></i>Add To Cart</a>
                                        </div>
                                        <div className="info-price d-flex align-items-center justify-content-center">
                                            <p>-5%</p>
                                            <h6>$30.52</h6>
                                            <span>$28.52</span>
                                        </div>
                                        <h4>
                                            <a href="shop-single.html">Whopper Burger King</a>
                                        </h4>
                                        <div className="star">
                                            <span className="fas fa-star"></span>
                                            <span className="fas fa-star"></span>
                                            <span className="fas fa-star"></span>
                                            <span className="fas fa-star"></span>
                                            <span className="fas fa-star color-bg"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="catagory-product-card-2 shadow-style text-center">
                                    <div className="icon">
                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                    </div>
                                    <div className="catagory-product-image">
                                        <img src="src/food-assets/img/food/pizza-3.png" alt="product-img"/>
                                    </div>
                                    <div className="catagory-product-content">
                                        <div className="catagory-button">
                                            <a href="shop-cart.html" className="theme-btn-2"><i className="far fa-shopping-basket"></i>Add To Cart</a>
                                        </div>
                                        <div className="info-price d-flex align-items-center justify-content-center">
                                            <p>-5%</p>
                                            <h6>$30.52</h6>
                                            <span>$28.52</span>
                                        </div>
                                        <h4>
                                            <a href="shop-single.html">delicious burger</a>
                                        </h4>
                                        <div className="star">
                                            <span className="fas fa-star"></span>
                                            <span className="fas fa-star"></span>
                                            <span className="fas fa-star"></span>
                                            <span className="fas fa-star"></span>
                                            <span className="fas fa-star color-bg"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="catagory-product-card-2 shadow-style text-center">
                                    <div className="icon">
                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                    </div>
                                    <div className="catagory-product-image">
                                        <img src="src/food-assets/img/food/ruti.png" alt="product-img"/>
                                    </div>
                                    <div className="catagory-product-content">
                                        <div className="catagory-button">
                                            <a href="shop-cart.html" className="theme-btn-2"><i className="far fa-shopping-basket"></i>Add To Cart</a>
                                        </div>
                                        <div className="info-price d-flex align-items-center justify-content-center">
                                            <p>-5%</p>
                                            <h6>$30.52</h6>
                                            <span>$28.52</span>
                                        </div>
                                        <h4>
                                            <a href="shop-single.html">ruti with chiken</a>
                                        </h4>
                                        <div className="star">
                                            <span className="fas fa-star"></span>
                                            <span className="fas fa-star"></span>
                                            <span className="fas fa-star"></span>
                                            <span className="fas fa-star"></span>
                                            <span className="fas fa-star color-bg"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="catagory-product-card-2 shadow-style text-center">
                                    <div className="icon">
                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                    </div>
                                    <div className="catagory-product-image">
                                        <img src="src/food-assets/img/food/grilled-2.png" alt="product-img"/>
                                    </div>
                                    <div className="catagory-product-content">
                                        <div className="catagory-button">
                                            <a href="shop-cart.html" className="theme-btn-2"><i className="far fa-shopping-basket"></i>Add To Cart</a>
                                        </div>
                                        <div className="info-price d-flex align-items-center justify-content-center">
                                            <p>-5%</p>
                                            <h6>$30.52</h6>
                                            <span>$28.52</span>
                                        </div>
                                        <h4>
                                            <a href="shop-single.html">grilled chiken</a>
                                        </h4>
                                        <div className="star">
                                            <span className="fas fa-star"></span>
                                            <span className="fas fa-star"></span>
                                            <span className="fas fa-star"></span>
                                            <span className="fas fa-star"></span>
                                            <span className="fas fa-star color-bg"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="catagory-product-card-2 shadow-style text-center">
                                    <div className="icon">
                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                    </div>
                                    <div className="catagory-product-image">
                                        <img src="src/food-assets/img/food/main-food-3.png" alt="product-img"/>
                                    </div>
                                    <div className="catagory-product-content">
                                        <div className="catagory-button">
                                            <a href="shop-cart.html" className="theme-btn-2"><i className="far fa-shopping-basket"></i>Add To Cart</a>
                                        </div>
                                        <div className="info-price d-flex align-items-center justify-content-center">
                                            <p>-5%</p>
                                            <h6>$30.52</h6>
                                            <span>$28.52</span>
                                        </div>
                                        <h4>
                                            <a href="shop-single.html">delicious burger</a>
                                        </h4>
                                        <div className="star">
                                            <span className="fas fa-star"></span>
                                            <span className="fas fa-star"></span>
                                            <span className="fas fa-star"></span>
                                            <span className="fas fa-star"></span>
                                            <span className="fas fa-star color-bg"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="catagory-product-card-2 shadow-style text-center">
                                    <div className="icon">
                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                    </div>
                                    <div className="catagory-product-image">
                                        <img src="src/food-assets/img/food/french-fry-3.png" alt="product-img"/>
                                    </div>
                                    <div className="catagory-product-content">
                                        <div className="catagory-button">
                                            <a href="shop-cart.html" className="theme-btn-2"><i className="far fa-shopping-basket"></i>Add To Cart</a>
                                        </div>
                                        <div className="info-price d-flex align-items-center justify-content-center">
                                            <p>-5%</p>
                                            <h6>$30.52</h6>
                                            <span>$28.52</span>
                                        </div>
                                        <h4>
                                            <a href="shop-single.html">ruti with chiken</a>
                                        </h4>
                                        <div className="star">
                                            <span className="fas fa-star"></span>
                                            <span className="fas fa-star"></span>
                                            <span className="fas fa-star"></span>
                                            <span className="fas fa-star"></span>
                                            <span className="fas fa-star color-bg"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="catagory-product-card-2 shadow-style text-center">
                                    <div className="icon">
                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                    </div>
                                    <div className="catagory-product-image">
                                        <img src="src/food-assets/img/food/fried-chicken-2.png" alt="product-img"/>
                                    </div>
                                    <div className="catagory-product-content">
                                        <div className="catagory-button">
                                            <a href="shop-cart.html" className="theme-btn-2"><i className="far fa-shopping-basket"></i>Add To Cart</a>
                                        </div>
                                        <div className="info-price d-flex align-items-center justify-content-center">
                                            <p>-5%</p>
                                            <h6>$30.52</h6>
                                            <span>$28.52</span>
                                        </div>
                                        <h4>
                                            <a href="shop-single.html">grilled chiken</a>
                                        </h4>
                                        <div className="star">
                                            <span className="fas fa-star"></span>
                                            <span className="fas fa-star"></span>
                                            <span className="fas fa-star"></span>
                                            <span className="fas fa-star"></span>
                                            <span className="fas fa-star color-bg"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="catagory-product-card-2 shadow-style text-center">
                                    <div className="icon">
                                        <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                    </div>
                                    <div className="catagory-product-image">
                                        <img src="src/food-assets/img/food/french-fry-4.png" alt="product-img"/>
                                    </div>
                                    <div className="catagory-product-content">
                                        <div className="catagory-button">
                                            <a href="shop-cart.html" className="theme-btn-2"><i className="far fa-shopping-basket"></i>Add To Cart</a>
                                        </div>
                                        <div className="info-price d-flex align-items-center justify-content-center">
                                            <p>-5%</p>
                                            <h6>$30.52</h6>
                                            <span>$28.52</span>
                                        </div>
                                        <h4>
                                            <a href="shop-single.html">delicious burger</a>
                                        </h4>
                                        <div className="star">
                                            <span className="fas fa-star"></span>
                                            <span className="fas fa-star"></span>
                                            <span className="fas fa-star"></span>
                                            <span className="fas fa-star"></span>
                                            <span className="fas fa-star color-bg"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="page-nav-wrap mt-5 text-center">
                            <ul>
                                <li><a className="page-numbers" href="#"><i className="fal fa-long-arrow-left"></i></a></li>
                                <li><a className="page-numbers" href="#">1</a></li>
                                <li><a className="page-numbers" href="#">2</a></li>
                                <li><a className="page-numbers" href="#">3</a></li>
                                <li><a className="page-numbers" href="#">4</a></li>
                                <li><a className="page-numbers" href="#"><i className="fal fa-long-arrow-right"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="main-cta-banner-2 section-padding bg-cover" style={{backgroundImage:`url(${BannerBackground5})`}}>
            <div className="tomato-shape-left float-bob-y">
                <img src="src/food-assets/img/tomato.png" alt="shape-img"/>
            </div>
            <div className="chili-shape-right float-bob-y">
                <img src="src/food-assets/img/chilli.png" alt="shape-img"/>
            </div>
            <div className="container">
                <div className="main-cta-banner-wrapper-2 d-flex align-items-center justify-content-between">
                    <div className="section-title mb-0">
                        <span className="theme-color-3 wow fadeInUp">crispy, every bite taste</span>
                        <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                            30 minutes fast <br/>
                            <span className="theme-color-3">delivery</span> challage
                        </h2>
                    </div>
                    <a href="shop-single.html" className="theme-btn bg-white wow fadeInUp" data-wow-delay=".5s">
                    <span className="button-content-wrapper d-flex align-items-center">
                    <span className="button-icon"><i className="flaticon-delivery"></i></span>
                    <span className="button-text">order now</span>
                    </span>
                    </a>
                    <div className="delivery-man">
                        <img src="src/food-assets/img/delivery-man-2.png" alt="img"/>
                    </div>
                </div>
            </div>
        </section>
        

      {/* ---------------------------------- */}
      <Footer />
    </>
  );
}

export default Product;
