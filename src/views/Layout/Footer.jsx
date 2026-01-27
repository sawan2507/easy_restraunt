import { useState } from "react";

function Footer() {
  return (
    <>
        <footer className="footer-section fix section-bg">
            <div className="burger-shape d-none">
                <img src="src/food-assets/img/shape/burger-shape-3.png" alt="burger-shape" />
            </div>
            <div className="fry-shape d-none">
                <img src="src/food-assets/img/shape/fry-shape-2.png" alt="burger-shape" />
            </div>
            <div className="container d-none">
                <div className="footer-widgets-wrapper">
                    <div className="row">
                        <div className="col-xl-3 col-sm-6 col-md-6 col-lg-3 wow fadeInUp" data-wow-delay=".2s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <a href="index-2.html">
                                    <img src="src/food-assets/img/logo/logo.svg" alt="logo-img" />
                                    </a>
                                </div>
                                <div className="footer-content">
                                    <p>
                                        We believe it has the power to do <br/>
                                        amazing things.
                                    </p>
                                    <span>Interested in working with us?</span> <br/>
                                    <a href="https://modinatheme.com/cdn-cgi/l/email-protection#b5dcdbd3daf5d0cdd4d8c5d9d09bd6dad8" className="link"><span className="__cf_email__" data-cfemail="a2cbccc4cde2c7dac3cfd2cec78cc1cdcf">[email&#160;protected]</span></a>
                                    <div className="social-icon d-flex align-items-center">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-vimeo-v"></i></a>
                                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{visibility:"hidden"}} className="col-xl-2 ps-lg-5 col-sm-6 col-md-3 col-lg-3">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h4>Quick Links</h4>
                                </div>
                                <ul className="list-items">
                                    <li>
                                        <a href="about.html"> 
                                        <span className="text-effect">
                                        <span className="effect-1">Services</span>
                                        <span className="effect-1">Services</span>
                                        </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="about.html">
                                        <span className="text-effect">
                                        <span className="effect-1">About company</span>
                                        <span className="effect-1">About company</span>
                                        </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="news-details.html">
                                        <span className="text-effect">
                                        <span className="effect-1">latest news</span>
                                        <span className="effect-1">latest news</span>
                                        </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="team.html">
                                        <span className="text-effect">
                                        <span className="effect-1">team member</span>
                                        <span className="effect-1">team member</span>
                                        </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="testimonial.html">
                                        <span className="text-effect">
                                        <span className="effect-1">testimonials</span>
                                        <span className="effect-1">testimonials</span>
                                        </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div style={{visibility:"hidden"}} className="col-xl-2 ps-lg-4 col-sm-6 col-md-3 col-lg-3">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h4>My account</h4>
                                </div>
                                <ul className="list-items">
                                    <li>
                                        <a href="shop-single.html">
                                        <span className="text-effect">
                                        <span className="effect-1">My Profile</span>
                                        <span className="effect-1">My Profile</span>
                                        </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-single.html">
                                        <span className="text-effect">
                                        <span className="effect-1">My Order History</span>
                                        <span className="effect-1">My Order History</span>
                                        </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-single.html">
                                        <span className="text-effect">
                                        <span className="effect-1">My Wish List</span>
                                        <span className="effect-1">My Wish List</span>
                                        </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-single.html">
                                        <span className="text-effect">
                                        <span className="effect-1">Order Tracking</span>
                                        <span className="effect-1">Order Tracking</span>
                                        </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-cart.html">
                                        <span className="text-effect">
                                        <span className="effect-1">Shopping Cart</span>
                                        <span className="effect-1">Shopping Cart</span>
                                        </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-sm-6 col-md-6 col-lg-3 wow fadeInUp" data-wow-delay=".8s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h4>Address:</h4>
                                </div>
                                <div className="footer-address-text">
                                    <h6>
                                        570 8th Ave, New York,NY <span>10018</span>
                                        United States
                                    </h6>
                                    <h5>Hours:</h5>
                                    <h6>
                                        9.30am – 6.30pm <br/>
                                        Monday to Friday
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div style={{visibility:"hidden"}} className="col-xl-3 ps-xl-5 col-sm-6 col-md-6 col-lg-4">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h4>Install app</h4>
                                </div>
                                <div className="footer-apps-items">
                                    <h5>From App Store or Google Play</h5>
                                    <div className="apps-image d-flex align-items-center">
                                        <a href="#"><img src="src/food-assets/img/app-store.png" alt="store-img"/></a>
                                        <a href="#"><img src="src/food-assets/img/google-play.png" alt="store-img"/></a>
                                    </div>
                                    <div className="support-text">
                                        <h5>24/7 Support center</h5>
                                        <h3><a href="tel:+1718-904-4450">+1718-904-4450</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-wrapper d-flex align-items-center justify-content-between">
                        <p className="wow fadeInLeft" data-wow-delay=".3s">
                            © Copyright <span className="theme-color-3">2026</span> <a href="#">Easy Restaurant </a>. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
        
        <div className="scroll-up">
            <svg className="scroll-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
            </svg>
        </div>
    </>
  );
}

export default Footer;
