import React from 'react'
import { Link } from 'react-router-dom'

const Abouttest = () => {
  return (
    <div>
    {/*[if lte IE 9]*/}
        <p className="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
    {/*[endif]*/}

    {/* Add your site or application content here */}

{/* Body main wrapper start */}
<div className="body-wrapper">

    {/* HEADER AREA START (header-4) */}
    <header className="ltn__header-area ltn__header-4 ltn__header-transparent gradient-color-2">
        {/* ltn__header-middle-area start */}
        <div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-black ltn__logo-right-menu-option">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="site-logo-wrap">
                            <div className="site-logo">
                                <a href="index.html"><img src="img/logo-2.png" alt="Logo" /></a>
                            </div>
                            <div className="get-support clearfix get-support-color-white">
                                <div className="get-support-icon">
                                    <i className="icon-call"></i>
                                </div>
                                <div className="get-support-info">
                                    <h6>Get Support</h6>
                                    <h4><a href="tel:+123456789">123-456-789-10</a></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col header-menu-column menu-color-white">
                        <div className="header-menu d-none d-xl-block">
                            <nav>
                                <div className="ltn__main-menu">
                                    <ul>
                                        <li className="menu-icon"><Link to="/test">Home</Link>
                                            <ul className="sub-menu ltn__sub-menu-col-2">
                                                <li><a href="#">Home Pages</a>
                                                    <ul className="sub-menu-child">
                                                        <li>
                                                            <a href="index.html">Home Style - 01</a>
                                                            <img src="img/home-demos/home-1.jpg" alt="#" />
                                                        </li>
                                                        <li>
                                                            <a href="index-2.html">Home Style - 02</a>
                                                            <img src="img/home-demos/home-2.jpg" alt="#" />
                                                        </li>
                                                        <li>
                                                            <a href="index-3.html">Home Style - 03</a>
                                                            <img src="img/home-demos/home-3.jpg" alt="#" />
                                                        </li>
                                                        <li>
                                                            <a href="index-4.html">Home Style - 04</a>
                                                            <img src="img/home-demos/home-4.jpg" alt="#" />
                                                        </li>
                                                        <li>
                                                            <a href="index-5.html">Home Style - 05 <span className="menu-item-badge">video</span></a>
                                                            <img src="img/home-demos/home-5.jpg" alt="#" />
                                                        </li>
                                                        <li>
                                                            <a href="index-6.html">Home Style - 06</a>
                                                            <img src="img/home-demos/home-6.jpg" alt="#" />
                                                        </li>
                                                        <li>
                                                            <a href="index-7.html">Home Style - 07</a>
                                                            <img src="img/home-demos/home-7.jpg" alt="#" />
                                                        </li>
                                                        <li>
                                                            <a href="index-8.html">Home Style - 08 <span className="menu-item-badge">Map</span></a>
                                                            <img src="img/home-demos/home-8.jpg" alt="#" />
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Home Pages</a>
                                                    <ul className="sub-menu-child">
                                                        <li>
                                                            <a href="index-9.html">Home Style - 09</a>
                                                            <img src="img/home-demos/home-9.jpg" alt="#" />
                                                        </li>
                                                        <li>
                                                            <a href="index-10.html">Home Style - 10</a>
                                                            <img src="img/home-demos/home-10.jpg" alt="#" />
                                                        </li>
                                                        <li>
                                                            <a href="index-11.html">Home Style - 11</a>
                                                            <img src="img/home-demos/home-11.jpg" alt="#" />
                                                        </li>
                                                        <li>
                                                            <a href="index-12.html">Home Style - 12</a>
                                                            <img src="img/home-demos/home-12.jpg" alt="#" />
                                                        </li>
                                                        <li>
                                                            <a href="index-13.html">Home Style - 13</a>
                                                            <img src="img/home-demos/home-13.jpg" alt="#" />
                                                        </li>
                                                        <li>
                                                            <a href="index-14.html">Home Style - 14</a>
                                                            <img src="img/home-demos/home-14.jpg" alt="#" />
                                                        </li>
                                                        <li>
                                                            <a href="index-15.html">Home Style - 15</a>
                                                            <img src="img/home-demos/home-15.jpg" alt="#" />
                                                        </li>
                                                        <li>
                                                            <a href="index-16.html">Home Style - 16</a>
                                                            <img src="img/home-demos/home-16.jpg" alt="#" />
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-icon"><a href="#">About</a>
                                            <ul>
                                                <li><a href="about.html">About</a></li>
                                                <li><a href="service.html">Services</a></li>
                                                <li><a href="service-details.html">Service Details</a></li>
                                                <li><a href="portfolio.html">Portfolio</a></li>
                                                <li><a href="portfolio-2.html">Portfolio - 02</a></li>
                                                <li><a href="portfolio-details.html">Portfolio Details</a></li>
                                                <li><a href="team.html">Team</a></li>
                                                <li><a href="team-details.html">Team Details</a></li>
                                                <li><a href="faq.html">FAQ</a></li>
                                                <li><a href="locations.html">Google Map Locations</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-icon"><a href="#">Shop</a>
                                            <ul>
                                                <li><a href="shop.html">Shop</a></li>
                                                <li><a href="shop-grid.html">Shop Grid</a></li>
                                                <li><a href="shop-left-sidebar.html">Shop Left sidebar</a></li>
                                                <li><a href="shop-right-sidebar.html">Shop right sidebar</a></li>
                                                <li><a href="product-details.html">Shop details </a></li>
                                                <li><a href="product-details-2.html">Shop details 02</a></li>
                                                <li><a href="#">Other Pages <span className="float-end"></span></a>
                                                    <ul>
                                                        <li><a href="cart.html">Cart</a></li>
                                                        <li><a href="wishlist.html">Wishlist</a></li>
                                                        <li><a href="checkout.html">Checkout</a></li>
                                                        <li><a href="order-tracking.html">Order Tracking</a></li>
                                                        <li><a href="account.html">My Account</a></li>
                                                        <li><a href="login.html">Sign in</a></li>
                                                        <li><a href="register.html">Register</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="shop-car-grid.html">Shop Car Grid</a></li>
                                                <li><a href="shop-car-left-sidebar.html">Shop Car Left sidebar</a></li>
                                                <li><a href="shop-car-right-sidebar.html">Shop Car right sidebar</a></li>
                                                <li><a href="product-details-3.html">Shop Car details </a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-icon"><a href="#">News</a>
                                            <ul>
                                                <li><a href="blog.html">News</a></li>
                                                <li><a href="blog-grid.html">News Grid</a></li>
                                                <li><a href="blog-left-sidebar.html">News Left sidebar</a></li>
                                                <li><a href="blog-right-sidebar.html">News Right sidebar</a></li>
                                                <li><a href="blog-details.html">News details</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-icon"><a href="#">Pages</a>
                                            <ul className="mega-menu">
                                                <li><a href="#">Inner Pages</a>
                                                    <ul>
                                                        <li><a href="portfolio.html">Portfolio</a></li>
                                                        <li><a href="portfolio-2.html">Portfolio - 02</a></li>
                                                        <li><a href="portfolio-details.html">Portfolio Details</a></li>
                                                        <li><a href="team.html">Team</a></li>
                                                        <li><a href="team-details.html">Team Details</a></li>
                                                        <li><a href="faq.html">FAQ</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Inner Pages</a>
                                                    <ul>
                                                        <li><a href="history.html">History</a></li>
                                                        <li><a href="appointment.html">Appointment</a></li>
                                                        <li><a href="locations.html">Google Map Locations</a></li>
                                                        <li><a href="404.html">404</a></li>
                                                        <li><a href="contact.html">Contact</a></li>
                                                        <li><a href="coming-soon.html">Coming Soon</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Shop Pages</a>
                                                    <ul>
                                                        <li><a href="shop.html">Shop</a></li>
                                                        <li><a href="shop-left-sidebar.html">Shop Left sidebar</a></li>
                                                        <li><a href="shop-right-sidebar.html">Shop right sidebar</a></li>
                                                        <li><a href="shop-grid.html">Shop Grid</a></li>
                                                        <li><a href="product-details.html">Shop details </a></li>
                                                        <li><a href="cart.html">Cart</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="shop.html"><img src="img/banner/menu-banner-1.jpg" alt="#" /></a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="contact.html">Contact</a></li>
                                        <li className="special-link"><a href="appointment.html">GET APPOINTMENT</a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                    {/* Mobile Menu Button */}
                    <div className="mobile-menu-toggle menu-btn-white menu-btn-border--- d-xl-none">
                        <a href="#ltn__utilize-mobile-menu" className="ltn__utilize-toggle">
                            <svg viewBox="0 0 800 600">
                                <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top"></path>
                                <path d="M300,320 L540,320" id="middle"></path>
                                <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        {/* ltn__header-middle-area end */}
    </header>
    {/* HEADER AREA END */}
    
    {/* Utilize Cart Menu Start */}
    <div id="ltn__utilize-cart-menu" className="ltn__utilize ltn__utilize-cart-menu">
        <div className="ltn__utilize-menu-inner ltn__scrollbar">
            <div className="ltn__utilize-menu-head">
                <span className="ltn__utilize-menu-title">Cart</span>
                <button className="ltn__utilize-close">×</button>
            </div>
            <div className="mini-cart-product-area ltn__scrollbar">
                <div className="mini-cart-item clearfix">
                    <div className="mini-cart-img">
                        <a href="#"><img src="img/product/1.png" alt="Image" /></a>
                        <span className="mini-cart-item-delete"><i className="icon-cancel"></i></span>
                    </div>
                    <div className="mini-cart-info">
                        <h6><a href="#">Wheel Bearing Retainer</a></h6>
                        <span className="mini-cart-quantity">1 x $65.00</span>
                    </div>
                </div>
                <div className="mini-cart-item clearfix">
                    <div className="mini-cart-img">
                        <a href="#"><img src="img/product/2.png" alt="Image" /></a>
                        <span className="mini-cart-item-delete"><i className="icon-cancel"></i></span>
                    </div>
                    <div className="mini-cart-info">
                        <h6><a href="#">Brake Conversion Kit</a></h6>
                        <span className="mini-cart-quantity">1 x $85.00</span>
                    </div>
                </div>
                <div className="mini-cart-item clearfix">
                    <div className="mini-cart-img">
                        <a href="#"><img src="img/product/3.png" alt="Image" /></a>
                        <span className="mini-cart-item-delete"><i className="icon-cancel"></i></span>
                    </div>
                    <div className="mini-cart-info">
                        <h6><a href="#">OE Replica Wheels</a></h6>
                        <span className="mini-cart-quantity">1 x $92.00</span>
                    </div>
                </div>
                <div className="mini-cart-item clearfix">
                    <div className="mini-cart-img">
                        <a href="#"><img src="img/product/4.png" alt="Image" /></a>
                        <span className="mini-cart-item-delete"><i className="icon-cancel"></i></span>
                    </div>
                    <div className="mini-cart-info">
                        <h6><a href="#">Shock Mount Insulator</a></h6>
                        <span className="mini-cart-quantity">1 x $68.00</span>
                    </div>
                </div>
            </div>
            <div className="mini-cart-footer">
                <div className="mini-cart-sub-total">
                    <h5>Subtotal: <span>$310.00</span></h5>
                </div>
                <div className="btn-wrapper">
                    <a href="cart.html" className="theme-btn-1 btn btn-effect-1">View Cart</a>
                    <a href="cart.html" className="theme-btn-2 btn btn-effect-2">Checkout</a>
                </div>
                <p>Free Shipping on All Orders Over $100!</p>
            </div>

        </div>
    </div>
    {/* Utilize Cart Menu End */}

    {/* Utilize Mobile Menu Start */}
    <div id="ltn__utilize-mobile-menu" className="ltn__utilize ltn__utilize-mobile-menu">
        <div className="ltn__utilize-menu-inner ltn__scrollbar">
            <div className="ltn__utilize-menu-head">
                <div className="site-logo">
                    <a href="index.html"><img src="img/logo.png" alt="Logo" /></a>
                </div>
                <button className="ltn__utilize-close">×</button>
            </div>
            <div className="ltn__utilize-menu-search-form">
                <form action="#">
                    <input type="text" placeholder="Search..." />
                    <button><i className="fas fa-search"></i></button>
                </form>
            </div>
            <div className="ltn__utilize-menu">
                <ul>
                    <li><a href="#">Home</a>
                        <ul className="sub-menu">
                            <li><a href="index.html">Home Style - 01</a></li>
                            <li><a href="index-2.html">Home Style - 02</a></li>
                            <li><a href="index-3.html">Home Style - 03</a></li>
                            <li><a href="index-4.html">Home Style - 04</a></li>
                            <li><a href="index-5.html">Home Style - 05 <span className="menu-item-badge">video</span></a></li>
                            <li><a href="index-6.html">Home Style - 06</a></li>
                            <li><a href="index-7.html">Home Style - 07</a></li>
                            <li><a href="index-8.html">Home Style - 08 <span className="menu-item-badge">Map</span></a></li>
                            <li><a href="index-9.html">Home Style - 09</a></li>
                            <li><a href="index-10.html">Home Style - 10</a></li>
                            <li><a href="index-11.html">Home Style - 11</a></li>
                            <li><a href="index-12.html">Home Style - 12</a></li>
                            <li><a href="index-13.html">Home Style - 13</a></li>
                            <li><a href="index-14.html">Home Style - 14</a></li>
                            <li><a href="index-15.html">Home Style - 15</a></li>
                            <li><a href="index-16.html">Home Style - 16</a></li>
                        </ul>
                    </li>
                    <li><a href="#">About</a>
                        <ul className="sub-menu">
                            <li><a href="about.html">About</a></li>
                            <li><a href="service.html">Services</a></li>
                            <li><a href="service-details.html">Service Details</a></li>
                            <li><a href="portfolio.html">Portfolio</a></li>
                            <li><a href="portfolio-2.html">Portfolio - 02</a></li>
                            <li><a href="portfolio-details.html">Portfolio Details</a></li>
                            <li><a href="team.html">Team</a></li>
                            <li><a href="team-details.html">Team Details</a></li>
                            <li><a href="faq.html">FAQ</a></li>
                            <li><a href="locations.html">Google Map Locations</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Shop</a>
                        <ul className="sub-menu">
                            <li><a href="shop.html">Shop</a></li>
                            <li><a href="shop-grid.html">Shop Grid</a></li>
                            <li><a href="shop-left-sidebar.html">Shop Left sidebar</a></li>
                            <li><a href="shop-right-sidebar.html">Shop right sidebar</a></li>
                            <li><a href="product-details.html">Shop details </a></li>
                            <li><a href="product-details-2.html">Shop details 02</a></li>
                            <li><a href="shop-car-grid.html">Shop Car Grid</a></li>
                            <li><a href="shop-car-left-sidebar.html">Shop Car Left sidebar</a></li>
                            <li><a href="shop-car-right-sidebar.html">Shop Car right sidebar</a></li>
                            <li><a href="product-details-3.html">Shop Car details </a></li>
                            <li><a href="cart.html">Cart</a></li>
                            <li><a href="wishlist.html">Wishlist</a></li>
                            <li><a href="checkout.html">Checkout</a></li>
                            <li><a href="order-tracking.html">Order Tracking</a></li>
                            <li><a href="account.html">My Account</a></li>
                            <li><a href="login.html">Sign in</a></li>
                            <li><a href="register.html">Register</a></li>
                        </ul>
                    </li>
                    <li><a href="#">News</a>
                        <ul className="sub-menu">
                            <li><a href="blog.html">News</a></li>
                            <li><a href="blog-grid.html">News Grid</a></li>
                            <li><a href="blog-left-sidebar.html">News Left sidebar</a></li>
                            <li><a href="blog-right-sidebar.html">News Right sidebar</a></li>
                            <li><a href="blog-details.html">News details</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Pages</a>
                        <ul className="sub-menu">
                            <li><a href="about.html">About</a></li>
                            <li><a href="service.html">Services</a></li>
                            <li><a href="service-details.html">Service Details</a></li>
                            <li><a href="portfolio.html">Portfolio</a></li>
                            <li><a href="portfolio-2.html">Portfolio - 02</a></li>
                            <li><a href="portfolio-details.html">Portfolio Details</a></li>
                            <li><a href="team.html">Team</a></li>
                            <li><a href="team-details.html">Team Details</a></li>
                            <li><a href="faq.html">FAQ</a></li>
                            <li><a href="history.html">History</a></li>
                            <li><a href="appointment.html">Appointment</a></li>
                            <li><a href="locations.html">Google Map Locations</a></li>
                            <li><a href="404.html">404</a></li>
                            <li><a href="contact.html">Contact</a></li>
                            <li><a href="coming-soon.html">Coming Soon</a></li>
                        </ul>
                    </li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </div>
            <div className="ltn__utilize-buttons ltn__utilize-buttons-2">
                <ul>
                    <li>
                        <a href="account.html" title="My Account">
                            <span className="utilize-btn-icon">
                                <i className="far fa-user"></i>
                            </span>
                            My Account
                        </a>
                    </li>
                    <li>
                        <a href="wishlist.html" title="Wishlist">
                            <span className="utilize-btn-icon">
                                <i className="far fa-heart"></i>
                                <sup>3</sup>
                            </span>
                            Wishlist
                        </a>
                    </li>
                    <li>
                        <a href="cart.html" title="Shoping Cart">
                            <span className="utilize-btn-icon">
                                <i className="fas fa-shopping-cart"></i>
                                <sup>5</sup>
                            </span>
                            Shoping Cart
                        </a>
                    </li>
                </ul>
            </div>
            <div className="ltn__social-media-2">
                <ul>
                    <li><a href="#" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#" title="Twitter"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#" title="Linkedin"><i className="fab fa-linkedin"></i></a></li>
                    <li><a href="#" title="Instagram"><i className="fab fa-instagram"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
    {/* Utilize Mobile Menu End */}

    <div className="ltn__utilize-overlay"></div>

    {/* BREADCRUMB AREA START */}
    <div className="ltn__breadcrumb-area ltn__breadcrumb-area-2 ltn__breadcrumb-color-white bg-overlay-theme-black-90 bg-image" data-bs-bg="img/bg/9.jpg">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="ltn__breadcrumb-inner ltn__breadcrumb-inner-2 justify-content-between">
                        <div className="section-title-area ltn__section-title-2">
                            <h6 className="section-subtitle ltn__secondary-color">//  Welcome to our company</h6>
                            <h1 className="section-title white-color">About Us</h1>
                        </div>
                        <div className="ltn__breadcrumb-list">
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li>About Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* BREADCRUMB AREA END */}

    {/* ABOUT US AREA START */}
    <div className="ltn__about-us-area pt-120-- pb-120">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 align-self-center">
                    <div className="about-us-img-wrap about-img-left">
                        <img src="img/team/4.jpg" alt="About Us Image" />
                        <div className="about-us-img-info about-us-img-info-2">
                            <div className="about-us-img-info-inner">
                                <h1>25<span>+</span></h1>
                                <h6>Years Experience</h6>
                                {/* <span className="dots-bottom"></span> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 align-self-center">
                    <div className="about-us-info-wrap">
                        <div className="section-title-area ltn__section-title-2">
                            <h6 className="section-subtitle ltn__secondary-color">// About Us</h6>
                            <h1 className="section-title">Safety Is Our First
                                & Main Priority<span>.</span></h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                        </div>

                        <p>Lorem ipsum dolor sit amet, consectetur adipis icing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min im veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequ at. </p>
                        <div className="btn-wrapper">
                            <a href="service.html" className="theme-btn-3 btn btn-effect-4">OUR SERVICES</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* ABOUT US AREA END */}

    {/* FEATURE AREA START ( Feature - 6) */}
    <div className="ltn__feature-area section-bg-1 pt-115 pb-90">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title-area ltn__section-title-2 text-center">
                        <h6 className="section-subtitle ltn__secondary-color">//  features  //</h6>
                        <h1 className="section-title">Why Choose Us<span>.</span></h1>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-4 col-sm-6 col-12">
                    <div className="ltn__feature-item ltn__feature-item-7">
                        <div className="ltn__feature-icon-title">
                            <div className="ltn__feature-icon">
                                <span><i className="icon-car-parts-3"></i></span>
                            </div>
                            <h3><a href="service-details.html">All Kind Brand</a></h3>
                        </div>
                        <div className="ltn__feature-info">
                            <p>Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-12">
                    <div className="ltn__feature-item ltn__feature-item-7">
                        <div className="ltn__feature-icon-title">
                            <div className="ltn__feature-icon">
                                <span><i className="icon-mechanic"></i></span>
                            </div>
                            <h3><a href="service-details.html">Brake Fluid Exchange</a></h3>
                        </div>
                        <div className="ltn__feature-info">
                            <p>Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-12">
                    <div className="ltn__feature-item ltn__feature-item-7">
                        <div className="ltn__feature-icon-title">
                            <div className="ltn__feature-icon">
                                <span><i className="icon-repair"></i></span>
                            </div>
                            <h3><a href="service-details.html">Maintenance Package</a></h3>
                        </div>
                        <div className="ltn__feature-info">
                            <p>Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* FEATURE AREA END */}

    {/* CALL TO ACTION START (call-to-action-5) */}
    <div className="call-to-action-area call-to-action-5 bg-image bg-overlay-theme-90 pt-40 pb-25" data-bs-bg="img/bg/13.jpg">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="call-to-action-inner call-to-action-inner-5 text-center">
                        <h2 className="white-color text-decoration">24/7 Availability, Make <a href="appointment.html">An Appointment</a></h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* CALL TO ACTION END */}

    {/* PROGRESS BAR AREA START */}
    <div className="ltn__progress-bar-area before-bg-right pt-115 pb-95">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="ltn__progress-bar-wrap">
                        <div className="section-title-area ltn__section-title-2">
                            <h6 className="section-subtitle ltn__secondary-color">// skills</h6>
                            <h1 className="section-title">We Have A Skillest
                                Team Ever<span>.</span></h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                        </div>
                        <div className="ltn__progress-bar-inner">
                            <div className="ltn__progress-bar-item">
                                <p>Car Repair</p>
                                <div className="progress">
                                    <div className="progress-bar wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay=".5s" role="progressbar" style={{width: "72%"}}>
                                        <span>72%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="ltn__progress-bar-item">
                                <p>Car Rental Service</p>
                                <div className="progress">
                                    <div className="progress-bar wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay=".5s" role="progressbar" style={{width: "74%"}}>
                                        <span>74%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="ltn__progress-bar-item">
                                <p>Car Cleaning & Parts</p>
                                <div className="progress">
                                    <div className="progress-bar wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay=".5s" role="progressbar" style={{width: "81%"}}>
                                        <span>81%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 align-self-center">
                    <div className="ltn__video-bg-img ltn__video-popup-height-500 bg-overlay-black-50-- bg-image ml-30" data-bs-bg="img/others/5.jpg">
                        <a className="ltn__video-icon-2 ltn__video-icon-2-border---" href="https://www.youtube.com/embed/eWUxqVFBq74?autoplay=1&showinfo=0" data-rel="lightcase:myCollection">
                            <i className="fa fa-play"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* PROGRESS BAR AREA END */}

    {/* TESTIMONIAL AREA START (testimonial-4) */}
    <div className="ltn__testimonial-area bg-image pt-115 pb-70" data-bs-bg="img/bg/8.jpg">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title-area ltn__section-title-2 text-center">
                        <h6 className="section-subtitle ltn__secondary-color">//  Testimonials</h6>
                        <h1 className="section-title">Clients Feedbacks<span>.</span></h1>
                    </div>
                </div>
            </div>
            <div className="row ltn__testimonial-slider-3-active slick-arrow-1 slick-arrow-1-inner">
                <div className="col-lg-12">
                    <div className="ltn__testimonial-item ltn__testimonial-item-4">
                        <div className="ltn__testimoni-img">
                            <img src="img/testimonial/6.jpg" alt="#" />
                        </div>
                        <div className="ltn__testimoni-info">
                            <p>Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <h4>Rosalina D. William</h4>
                            <h6>Founder</h6>
                        </div>
                        <div className="ltn__testimoni-bg-icon">
                            <i className="far fa-comments"></i>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="ltn__testimonial-item ltn__testimonial-item-4">
                        <div className="ltn__testimoni-img">
                            <img src="img/testimonial/7.jpg" alt="#" />
                        </div>
                        <div className="ltn__testimoni-info">
                            <p>Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <h4>Rosalina D. William</h4>
                            <h6>Founder</h6>
                        </div>
                        <div className="ltn__testimoni-bg-icon">
                            <i className="far fa-comments"></i>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="ltn__testimonial-item ltn__testimonial-item-4">
                        <div className="ltn__testimoni-img">
                            <img src="img/testimonial/1.jpg" alt="#" />
                        </div>
                        <div className="ltn__testimoni-info">
                            <p>Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <h4>Rosalina D. William</h4>
                            <h6>Founder</h6>
                        </div>
                        <div className="ltn__testimoni-bg-icon">
                            <i className="far fa-comments"></i>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="ltn__testimonial-item ltn__testimonial-item-4">
                        <div className="ltn__testimoni-img">
                            <img src="img/testimonial/2.jpg" alt="#" />
                        </div>
                        <div className="ltn__testimoni-info">
                            <p>Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <h4>Rosalina D. William</h4>
                            <h6>Founder</h6>
                        </div>
                        <div className="ltn__testimoni-bg-icon">
                            <i className="far fa-comments"></i>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="ltn__testimonial-item ltn__testimonial-item-4">
                        <div className="ltn__testimoni-img">
                            <img src="img/testimonial/5.jpg" alt="#" />
                        </div>
                        <div className="ltn__testimoni-info">
                            <p>Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <h4>Rosalina D. William</h4>
                            <h6>Founder</h6>
                        </div>
                        <div className="ltn__testimoni-bg-icon">
                            <i className="far fa-comments"></i>
                        </div>
                    </div>
                </div>
                {/*  */}
            </div>
        </div>
    </div>
    {/* TESTIMONIAL AREA END */}

    {/* BLOG AREA START (blog-4) */}
    <div className="ltn__blog-area pt-115 pb-90">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title-area ltn__section-title-2 text-center">
                        <h6 className="section-subtitle ltn__secondary-color">// blog & insights</h6>
                        <h1 className="section-title">News Feeds<span>.</span></h1>
                    </div>
                </div>
            </div>
            <div className="row  ltn__blog-slider-one-active slick-arrow-1">
                <div className="col-lg-12">
                    <div className="ltn__blog-item ltn__blog-item-4 bg-image" data-bs-bg="img/blog/1.jpg">
                        <div className="ltn__blog-brief">
                            <div className="ltn__blog-meta">
                                <ul>
                                    <li className="ltn__blog-author">
                                        <a href="#"><i className="far fa-user"></i>by: Admin</a>
                                    </li>
                                    <li className="ltn__blog-tags">
                                        <a href="#"><i className="fas fa-tags"></i>Services</a>
                                    </li>
                                </ul>
                            </div>
                            <h3 className="ltn__blog-title"><a href="blog-details.html">Electric Car Maintenance, Servicing & Repairs</a></h3>
                            <p>Lorem ipsum labore et dolore mag na aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                            <div className="ltn__blog-meta-btn">
                                <div className="ltn__blog-meta">
                                    <ul>
                                        <li className="ltn__blog-date"><i className="far fa-calendar-alt"></i> June 24, 2020</li>
                                    </ul>
                                </div>
                                <div className="ltn__blog-btn">
                                    <a href="blog-details.html">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="ltn__blog-item ltn__blog-item-4 bg-image" data-bs-bg="img/blog/2.jpg">
                        <div className="ltn__blog-brief">
                            <div className="ltn__blog-meta">
                                <ul>
                                    <li className="ltn__blog-author">
                                        <a href="#"><i className="far fa-user"></i>by: Admin</a>
                                    </li>
                                    <li className="ltn__blog-tags">
                                        <a href="#"><i className="fas fa-tags"></i>Services</a>
                                    </li>
                                </ul>
                            </div>
                            <h3 className="ltn__blog-title"><a href="blog-details.html">Common Engine Oil Problems and Solutions</a></h3>
                            <p>Lorem ipsum labore et dolore mag na aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                            <div className="ltn__blog-meta-btn">
                                <div className="ltn__blog-meta">
                                    <ul>
                                        <li className="ltn__blog-date"><i className="far fa-calendar-alt"></i> June 24, 2020</li>
                                    </ul>
                                </div>
                                <div className="ltn__blog-btn">
                                    <a href="blog-details.html">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="ltn__blog-item ltn__blog-item-4 bg-image" data-bs-bg="img/blog/3.jpg">
                        <div className="ltn__blog-brief">
                            <div className="ltn__blog-meta">
                                <ul>
                                    <li className="ltn__blog-author">
                                        <a href="#"><i className="far fa-user"></i>by: Admin</a>
                                    </li>
                                    <li className="ltn__blog-tags">
                                        <a href="#"><i className="fas fa-tags"></i>Services</a>
                                    </li>
                                </ul>
                            </div>
                            <h3 className="ltn__blog-title"><a href="blog-details.html">How to Prepare for your First Track Day!</a></h3>
                            <p>Lorem ipsum labore et dolore mag na aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                            <div className="ltn__blog-meta-btn">
                                <div className="ltn__blog-meta">
                                    <ul>
                                        <li className="ltn__blog-date"><i className="far fa-calendar-alt"></i> June 24, 2020</li>
                                    </ul>
                                </div>
                                <div className="ltn__blog-btn">
                                    <a href="blog-details.html">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="ltn__blog-item ltn__blog-item-4 bg-image" data-bs-bg="img/blog/4.jpg">
                        <div className="ltn__blog-brief">
                            <div className="ltn__blog-meta">
                                <ul>
                                    <li className="ltn__blog-author">
                                        <a href="#"><i className="far fa-user"></i>by: Admin</a>
                                    </li>
                                    <li className="ltn__blog-tags">
                                        <a href="#"><i className="fas fa-tags"></i>Services</a>
                                    </li>
                                </ul>
                            </div>
                            <h3 className="ltn__blog-title"><a href="blog-details.html">The branch of biology that deals with the normal.</a></h3>
                            <p>Lorem ipsum labore et dolore mag na aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                            <div className="ltn__blog-meta-btn">
                                <div className="ltn__blog-meta">
                                    <ul>
                                        <li className="ltn__blog-date"><i className="far fa-calendar-alt"></i> June 24, 2020</li>
                                    </ul>
                                </div>
                                <div className="ltn__blog-btn">
                                    <a href="blog-details.html">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="ltn__blog-item ltn__blog-item-4">
                        <div className="ltn__blog-brief">
                            <div className="ltn__blog-meta">
                                <ul>
                                    <li className="ltn__blog-author">
                                        <a href="#"><i className="far fa-user"></i>by: Admin</a>
                                    </li>
                                    <li className="ltn__blog-tags">
                                        <a href="#"><i className="fas fa-tags"></i>Services</a>
                                    </li>
                                </ul>
                            </div>
                            <h3 className="ltn__blog-title"><a href="blog-details.html">How to: Make Your Tires Last Longer</a></h3>
                            <p>Lorem ipsum labore et dolore mag na aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                            <div className="ltn__blog-meta-btn">
                                <div className="ltn__blog-meta">
                                    <ul>
                                        <li className="ltn__blog-date"><i className="far fa-calendar-alt"></i> June 24, 2020</li>
                                    </ul>
                                </div>
                                <div className="ltn__blog-btn">
                                    <a href="blog-details.html">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* BLOG AREA END */}

    {/* FOOTER AREA START (ltn__footer-2 ltn__footer-color-1) */}
    <footer className="ltn__footer-area ltn__footer-2 ltn__footer-color-1">
        <div className="footer-top-area  section-bg-2">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-md-5">
                        <div className="footer-widget ltn__footer-timeline-widget ltn__footer-timeline-widget-1 bg-image bg-overlay-theme-black-90" data-bs-bg="img/bg/4.jpg">
                            <h6 className="ltn__secondary-color text-uppercase">// time shedule</h6>
                            <h4 className="footer-title">Meet In Timeline.</h4>
                            <ul>
                                <li>Monday <span>07:00AM - 20:00PM</span></li>
                                <li>Tuesday <span>07:00AM - 20:00PM</span></li>
                                <li>Wednesday <span>07:00AM - 20:00PM</span></li>
                                <li>Thursday <span>07:00AM - 20:00PM</span></li>
                                <li>Friday <span>07:00AM - 20:00PM</span></li>
                                <li>Saturday <span>07:00AM - 20:00PM</span></li>
                                <li>Sunday <span>Official Holiday</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-5 col-md-7">
                        <div className="footer-widget footer-menu-widget footer-menu-widget-2-column clearfix">
                            <h4 className="footer-title">Services.</h4>
                            <div className="footer-menu">
                                <ul>
                                    <li><a href="service.html">Engine Diagnostics</a></li>
                                    <li><a href="service.html">Vehicles Damaged</a></li>
                                    <li><a href="service.html">Air Conditioning Evac</a></li>
                                    <li><a href="service.html">Anti Lock Brake Service</a></li>
                                    <li><a href="service.html">Computer Diagnostics</a></li>
                                    <li><a href="service.html">Performance Upgrades</a></li>
                                </ul>
                            </div>
                            <div className="footer-menu">
                                <ul>
                                    <li><a href="service.html">Car Wash & Cleaning</a></li>
                                    <li><a href="service.html">Choose your Repairs</a></li>
                                    <li><a href="service.html">Free Consultancy</a></li>
                                    <li><a href="service.html">Emergency Time</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="footer-widget footer-blog-widget">
                            <h4 className="footer-title">News Feeds.</h4>
                            <div className="ltn__footer-blog-item">
                                <div className="ltn__blog-meta">
                                    <ul>
                                        <li className="ltn__blog-date"><i className="far fa-calendar-alt"></i> June 24, 2020</li>
                                    </ul>
                                </div>
                                <h4 className="ltn__blog-title"><a href="blog-details.html">The branch of biology that
                                    deals with the normal.</a></h4>
                            </div>
                            <div className="ltn__footer-blog-item">
                                <div className="ltn__blog-meta">
                                    <ul>
                                        <li className="ltn__blog-date"><i className="far fa-calendar-alt"></i> June 24, 2020</li>
                                    </ul>
                                </div>
                                <h4 className="ltn__blog-title"><a href="blog-details.html">The branch of biology that
                                    deals with the normal.</a></h4>
                            </div>
                            <div className="ltn__footer-blog-item">
                                <div className="ltn__blog-meta">
                                    <ul>
                                        <li className="ltn__blog-date"><i className="far fa-calendar-alt"></i> June 24, 2020</li>
                                    </ul>
                                </div>
                                <h4 className="ltn__blog-title"><a href="blog-details.html">The branch of biology that
                                    deals with the normal.</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="ltn__copyright-area ltn__copyright-2">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <div className="site-logo-wrap">
                            <div className="site-logo">
                                <a href="index.html"><img src="img/logo-2.png" alt="Logo" /></a>
                            </div>
                            <div className="get-support ltn__copyright-design clearfix">
                                <div className="get-support-info">
                                    <h6>Copyright & Design By</h6>
                                    <h4>Company - <span className="current-year"></span></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 align-self-center">
                        <div className="ltn__copyright-menu text-end">
                            <ul>
                                <li><a href="#">Terms & Conditions</a></li>
                                <li><a href="#">Claim</a></li>
                                <li><a href="#">Privacy & Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    {/* FOOTER AREA END */}

</div>
{/* Body main wrapper end */}

    {/* preloader area start */}
    {/* <div className="preloader" id="preloader">
        <div className="preloader-inner">
            <div className="spinner">
                <div className="dot1"></div>
                <div className="dot2"></div>
            </div>
        </div>
    </div> */}
    {/* preloader area end */} 


</div>
  )
}

export default Abouttest