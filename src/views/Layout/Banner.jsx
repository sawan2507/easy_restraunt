import { useState } from "react";

function Banner() {
  return (
    <>
        <div id="preloader" className="preloader">
            <div className="animation-preloader">
                <div className="spinner">                
                </div>
                <div className="txt-loading">
                    <span data-text-preloader="F" className="letters-loading">
                    F
                    </span>
                    <span data-text-preloader="O" className="letters-loading">
                    O
                    </span>
                    <span data-text-preloader="0" className="letters-loading">
                    O
                    </span>
                    <span data-text-preloader="D" className="letters-loading">
                    D
                    </span>
                    <span data-text-preloader="K" className="letters-loading">
                    K
                    </span>
                    <span data-text-preloader="I" className="letters-loading">
                    I
                    </span>
                    <span data-text-preloader="N" className="letters-loading">
                    N
                    </span>
                    <span data-text-preloader="G" className="letters-loading">
                    G
                    </span>
                </div>
                <p className="text-center">Loading</p>
            </div>
            <div className="loader">
                <div className="row">
                    <div className="col-3 loader-section section-left">
                        <div className="bg"></div>
                    </div>
                    <div className="col-3 loader-section section-left">
                        <div className="bg"></div>
                    </div>
                    <div className="col-3 loader-section section-right">
                        <div className="bg"></div>
                    </div>
                    <div className="col-3 loader-section section-right">
                        <div className="bg"></div>
                    </div>
                </div>
            </div>
        </div>

        <div className="fix-area">
            <div className="offcanvas__info">
                <div className="offcanvas__wrapper">
                    <div className="offcanvas__content">
                        <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                            <div className="offcanvas__logo">
                                <a href="index-2.html">
                                <img src="src/food-assets/img/logo/logo.svg" alt="logo-img" />
                                </a>
                            </div>
                            <div className="offcanvas__close">
                                <button>
                                <i className="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <p className="text d-none d-lg-block">
                            This involves interactions between a business and its customers. It's about meeting customers' needs and resolving their problems. Effective customer service is crucial.
                        </p>
                        <div className="offcanvas-gallery-area d-none d-lg-block">
                            <div className="offcanvas-gallery-items">
                                <a href="src/food-assets/img/header/01.jpg" className="offcanvas-image img-popup">
                                <img src="src/food-assets/img/header/01.jpg" alt="gallery-img"/>
                                </a>
                                <a href="src/food-assets/img/header/02.jpg" className="offcanvas-image img-popup">
                                <img src="src/food-assets/img/header/02.jpg" alt="gallery-img"/>
                                </a>
                                <a href="src/food-assets/img/header/03.jpg" className="offcanvas-image img-popup">
                                <img src="src/food-assets/img/header/03.jpg" alt="gallery-img"/>
                                </a>
                            </div>
                            <div className="offcanvas-gallery-items">
                                <a href="src/food-assets/img/header/04.jpg" className="offcanvas-image img-popup">
                                <img src="src/food-assets/img/header/04.jpg" alt="gallery-img"/>
                                </a>
                                <a href="src/food-assets/img/header/05.jpg" className="offcanvas-image img-popup">
                                <img src="src/food-assets/img/header/05.jpg" alt="gallery-img"/>
                                </a>
                                <a href="src/food-assets/img/header/06.jpg" className="offcanvas-image img-popup">
                                <img src="src/food-assets/img/header/06.jpg" alt="gallery-img"/>
                                </a>
                            </div>
                        </div>
                        <div className="mobile-menu fix mb-3"></div>
                        <div className="offcanvas__contact">
                            <h4>Contact Info</h4>
                            <ul>
                                <li className="d-flex align-items-center">
                                    <div className="offcanvas__contact-icon">
                                        <i className="fal fa-map-marker-alt"></i>
                                    </div>
                                    <div className="offcanvas__contact-text">
                                        <a target="_blank" href="#">Main Street, Melbourne, Australia</a>
                                    </div>
                                </li>
                                <li className="d-flex align-items-center">
                                    <div className="offcanvas__contact-icon mr-15">
                                        <i className="fal fa-envelope"></i>
                                    </div>
                                    <div className="offcanvas__contact-text">
                                        <a href="tel:+013-003-003-9993"><span className="mailto:info@enofik.com"><span className="__cf_email__" data-cfemail="1871767e77587e77777c7371767f367b7775">[email&#160;protected]</span></span></a>
                                    </div>
                                </li>
                                <li className="d-flex align-items-center">
                                    <div className="offcanvas__contact-icon mr-15">
                                        <i className="fal fa-clock"></i>
                                    </div>
                                    <div className="offcanvas__contact-text">
                                        <a target="_blank" href="#">Mod-friday, 09am -05pm</a>
                                    </div>
                                </li>
                                <li className="d-flex align-items-center">
                                    <div className="offcanvas__contact-icon mr-15">
                                        <i className="far fa-phone"></i>
                                    </div>
                                    <div className="offcanvas__contact-text">
                                        <a href="tel:+11002345909">+11002345909</a>
                                    </div>
                                </li>
                            </ul>
                            <div className="header-button mt-4">
                                <a href="shop-single.html" className="theme-btn">
                                <span className="button-content-wrapper d-flex align-items-center justify-content-center">
                                <span className="button-icon"><i className="flaticon-delivery"></i></span>
                                <span className="button-text">order now</span>
                                </span>
                                </a>
                            </div>
                            <div className="social-icon d-flex align-items-center">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-youtube"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="offcanvas__overlay"></div>
        
        <header className="section-bg">
            <div className="header-top">
                <div className="container">
                    <div className="header-top-wrapper">
                        <ul className="">
                            {/* <li><span>100%</span> Secure</li> */}
                            <li><i className="fas fa-pizza"></i>Wait minimum enjoy maximum</li>
                        </ul>
                        <div className="top-right">
                            <div className="search-wrp">
                                <button><i className="far fa-search"></i></button>
                                <input placeholder="Search" aria-label="Search" />
                            </div>
                            <div className="social-icon d-flex align-items-center">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-vimeo-v"></i></a>
                                <a href="#"><i className="fab fa-pinterest-p"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="header-sticky" className="header-1">
                <div className="container">
                    <div className="mega-menu-wrapper">
                        <div className="header-main">
                            <div className="logo">
                                <a href="index-2.html" className="header-logo">
                                <img src="src/food-assets/img/logo/logo.svg" alt="logo-img"/>
                                </a>
                            </div>
                            <div className="header-left">
                            </div>
                            <div className="header-right d-flex justify-content-end align-items-center">
                                <div className="menu-cart">
                                    <div className="cart-box">
                                        <ul>
                                            <li>
                                                <img src="src/food-assets/img/shop-food/s2.png" alt="image" />
                                                <div className="cart-product">
                                                    <a href="#0">grilled chiken</a>
                                                    <span>168$</span>
                                                </div>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li className="border-none">
                                                <img src="src/food-assets/img/shop-food/s3.png" alt="image" />
                                                <div className="cart-product">
                                                    <a href="#0">grilled chiken</a>
                                                    <span>168$</span>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="shopping-items d-flex align-items-center justify-content-between">
                                            <span>Shopping : $20.00</span>
                                            <span>Total : $168.00</span>
                                        </div>
                                        <div className="cart-button d-flex justify-content-between mb-4">
                                            <a href="#" className="theme-btn">
                                            View Cart
                                            </a>
                                            <a href="#" className="theme-btn bg-red-2">
                                            Checkout
                                            </a>
                                        </div>
                                    </div>
                                    <a href="shop-cart.html" className="cart-icon">
                                    <i className="far fa-shopping-basket"></i>
                                    </a>
                                </div>
                                <div className="header-button d-none">
                                    <a href="#" className="theme-btn bg-red-2">contact us</a>
                                </div>
                                <div className="header__hamburger d-xl-block my-auto">
                                    <div className="sidebar__toggle">
                                        <div className="header-bar">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
  );
}

export default Banner;
