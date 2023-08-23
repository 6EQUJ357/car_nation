import React from 'react'
import { Link } from 'react-router-dom'


const Test = () => {
  return (
    <div>
    {/* {/*[if lte IE 9]>
        <p className="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
    <![endif]*/}

    {/* Add your site or application content here */} 

{/* Body main wrapper start */}
<div className="body-wrapper">

    {/* HEADER AREA START (header-4) */}
    <header className="ltn__header-area ltn__header-4 ltn__header-6 ltn__header-transparent gradient-color-2">
        {/* ltn__header-top-area start */}
        <div className="ltn__header-top-area top-area-color-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="ltn__top-bar-menu">
                            <ul>
                                <li><a href="mailto:Service@carnationautorepair.com"><i className="icon-mail"></i> Service@carnationautorepair.com</a></li>
                                <li><a href="locations.html"><i className="icon-placeholder"></i> 3245 East University Drive McKinney, TX 75069</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="top-bar-right text-end">
                            <div className="ltn__top-bar-menu">
                                <ul>
                                    {/* <li>
                                        ltn__language-menu
                                        <div className="ltn__drop-menu ltn__currency-menu ltn__language-menu">
                                            <ul>
                                                <li><a href="#" className="dropdown-toggle"><span className="active-currency">English</span></a>
                                                    <ul>
                                                        <li><a href="#">Arabic</a></li>
                                                        <li><a href="#">Bengali</a></li>
                                                        <li><a href="#">Chinese</a></li>
                                                        <li><a href="#">English</a></li>
                                                        <li><a href="#">French</a></li>
                                                        <li><a href="#">Hindi</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </li> */}
                                    <li>
                                        {/* ltn__social-media */}
                                        <div className="ltn__social-media">
                                            <ul>
                                                <li><a href="#" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                                                <li><a href="#" title="Twitter"><i className="fab fa-twitter"></i></a></li>
                                                
                                                <li><a href="#" title="Instagram"><i className="fab fa-instagram"></i></a></li>
                                                {/* <li><a href="#" title="Dribbble"><i className="fab fa-dribbble"></i></a></li> */}
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* ltn__header-top-area end */}
        {/* ltn__header-middle-area start */}
        <div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-black ltn__logo-right-menu-option">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="site-logo-wrap">
                            <div className="site-logo">
                                <a href="index.html"><img src="assets/img/logo-2.png" alt="Logo" /></a>
                            </div>
                            <div className="get-support clearfix get-support-color-white">
                                <div className="get-support-icon">
                                    <i className="icon-call"></i>
                                </div>
                                <div className="get-support-info">
                                    <h6>Get Support</h6>
                                    <h4><a href="tel:+1 2145974922">+1 (214) 597-4922</a></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col header-menu-column menu-color-white">
                        <div className="header-menu d-none d-xl-block">
                            <nav>
                                <div className="ltn__main-menu">
                                    <ul>
                                        <li ><Link to="/test">Home</Link>
                                            {/* <ul className="sub-menu ltn__sub-menu-col-2">
                                                <li><a href="#">Home Pages</a>
                                                    <ul className="sub-menu-child">
                                                        <li>
                                                            <a href="index.html">Home Style - 01</a>
                                                            <img src="assets/img/home-demos/home-1.jpg" alt="#" />
                                                        </li>
                                                        <li>
                                                            <a href="index-2.html">Home Style - 02</a>
                                                            <img src="assets/img/home-demos/home-2.jpg" alt="#" />
                                                        </li>
                                                        <li>
                                                            <a href="index-3.html">Home Style - 03</a>
                                                            <img src="assets/img/home-demos/home-3.jpg" alt="#" />
                                                        </li>
                                                        <li>
                                                            <a href="index-4.html">Home Style - 04</a>
                                                            <img src="assets/img/home-demos/home-4.jpg" alt="#" />
                                                        </li>
                                                        <li>
                                                            <a href="index-5.html">Home Style - 05 <span className="menu-item-badge">video</span></a>
                                                            <img src="assets/img/home-demos/home-5.jpg" alt="#" />
                                                        </li>
                                                        <li>
                                                            <a href="index-6.html">Home Style - 06</a>
                                                            <img src="assets/img/home-demos/home-6.jpg" alt="#" />
                                                        </li>
                                                        <li>
                                                            <a href="index-7.html">Home Style - 07</a>
                                                            <img src="assets/img/home-demos/home-7.jpg" alt="#" />
                                                        </li>
                                                        <li>
                                                            <a href="index-8.html">Home Style - 08 <span className="menu-item-badge">Map</span></a>
                                                            <img src="assets/img/home-demos/home-8.jpg" alt="#" />
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Home Pages</a>
                                                    <ul className="sub-menu-child">
                                                        <li>
                                                            <a href="index-9.html">Home Style - 09</a>
                                                            <img src="assets/img/home-demos/home-9.jpg" alt="#" />
                                                        </li>
                                                        <li>
                                                            <a href="index-10.html">Home Style - 10</a>
                                                            <img src="assets/img/home-demos/home-10.jpg" alt="#" />
                                                        </li>
                                                        <li>
                                                            <a href="index-11.html">Home Style - 11</a>
                                                            <img src="assets/img/home-demos/home-11.jpg" alt="#" />
                                                        </li>
                                                        <li>
                                                            <a href="index-12.html">Home Style - 12</a>
                                                            <img src="assets/img/home-demos/home-12.jpg" alt="#" />
                                                        </li>
                                                        <li>
                                                            <a href="index-13.html">Home Style - 13</a>
                                                            <img src="assets/img/home-demos/home-13.jpg" alt="#" />
                                                        </li>
                                                        <li>
                                                            <a href="index-14.html">Home Style - 14</a>
                                                            <img src="assets/img/home-demos/home-14.jpg" alt="#" />
                                                        </li>
                                                        <li>
                                                            <a href="index-15.html">Home Style - 15</a>
                                                            <img src="assets/img/home-demos/home-15.jpg" alt="#" />
                                                        </li>
                                                        <li>
                                                            <a href="index-16.html">Home Style - 16</a>
                                                            <img src="assets/img/home-demos/home-16.jpg" alt="#" />
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul> */}
                                        </li>
                                        <li ><Link to="/abouttest">About</Link>
                                            {/* <ul>
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
                                            </ul> */}
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
                    <div className="mobile-menu-toggle  menu-btn-white menu-btn-border--- d-xl-none">
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

    {/* SLIDER AREA START (slider-4) */}
    <div className="ltn__slider-area ltn__slider-4 ">
        <div className="ltn__slide-one-active----- slick-slide-arrow-1----- slick-slide-dots-1----- arrow-white----- ltn__slide-animation-active">
            {/* ltn__slide-item */}
            <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-4 text-color-white bg-image" data-bs-bg="https://cutewallpaper.org/27/cars-hd-wallpaper-for-pc/1920x1080-dark-car-wallpapers-top-free-1920x1080-dark-car-backgrounds--wallpaperaccess.png">
                <div className="ltn__slide-item-inner text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 align-self-center">
                                <div className="slide-item-info">
                                    <div className="slide-item-info-inner ltn__slide-animation">
                                        <h6 className="slide-sub-title ltn__secondary-color animated text-uppercase">//  any kind of car you will get  //</h6>
                                        <h1 className="slide-title animated ">Professional Car <br />  Service Provide</h1>
                                        <div className="btn-wrapper animated">
                                            <a href="service.html" className="theme-btn-1 btn btn-effect-1">OUR SERVICES</a>
                                            <a href="about.html" className="btn btn-transparent btn-effect-2 white-color">LEARN MORE</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="ltn__slide-animation">
                                    <div className="slide-item-img">
                                        <a href="shop.html"><img src="img/slider/31.png" alt="#" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* SLIDER AREA END */}

    {/* CAR DEALER FORM AREA START */}
    <div className="ltn__car-dealer-form-area pt-115 pb-115">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="ltn__car-dealer-form-tab">
                        <div className="ltn__tab-menu  text-uppercase">
                            <div className="nav">
                                <a className="active show" data-bs-toggle ="tab" href="#ltn__form_tab_1_1"><i className="fas fa-car"></i>Find A Car</a>
                                <a data-bs-toggle ="tab" href="#ltn__form_tab_1_2" className=""><i className="far fa-user"></i>Get a Dealer</a>
                                <a data-bs-toggle ="tab" href="#ltn__form_tab_1_3" className=""><i className="fas fa-cogs"></i>Find Accessories</a>
                                <a data-bs-toggle ="tab" href="#ltn__form_tab_1_4" className=""><i className="fas fa-cogs"></i>Booking</a>
                            </div>
                        </div>
                        <div className="tab-content">
                            <div className="tab-pane fade active show" id="ltn__form_tab_1_1">
                                <div className="car-dealer-form-inner">
                                    <form action="#" className="ltn__car-dealer-form-box row">
                                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-4 col-md-6">
                                            <select className="nice-select">
                                                <option>Select Year</option>
                                                <option>2015</option>
                                                <option>2016</option>
                                                <option>2017</option>
                                                <option>2018</option>
                                                <option>2019</option>
                                                <option>2020</option>
                                            </select>
                                        </div> 
                                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-car col-lg-4 col-md-6">
                                            <select className="nice-select">
                                                <option>Select Brand</option>
                                                <option>Audi</option>
                                                <option>BMW</option>
                                                <option>Honda</option>
                                                <option>Nissan</option>
                                            </select>
                                        </div> 
                                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-meter col-lg-4 col-md-6">
                                            <select className="nice-select">
                                                <option>Select Model</option>
                                                <option>Any</option>
                                                <option>6 Series (1)</option>
                                                <option>7 Series (1)</option>
                                                <option>8 Series (1)</option>
                                            </select>
                                        </div> 
                                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-ring col-lg-4 col-md-6">
                                            <select className="nice-select">
                                                <option>Select Mileage</option>
                                                <option>2019 Toyota Camry (2WD 2.5L)</option>
                                                <option>2018 Honda Accord (2WD 1.5L)</option>
                                                <option>2018 Nissan Versa (2WD 1.6L)</option>
                                                <option>2017 Honda Civic (2WD 1.5L)</option>
                                            </select>
                                        </div> 
                                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-transgender col-lg-4 col-md-6">
                                            <select className="nice-select">
                                                <option>Select Transmission</option>
                                                <option>1. Manual transmission</option>
                                                <option>2. Automatic transmission</option>
                                                <option>3. Continuously variable transmission (CVT)</option>
                                                <option>4. Semi-automatic and dual-clutch transmissions</option>
                                            </select>
                                        </div> 
                                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-cog col-lg-4 col-md-6">
                                            <select className="nice-select">
                                                <option>Select Condition</option>
                                                <option>1 - Excellent condition</option>
                                                <option>2 - Very Good condition</option>
                                                <option>3 - Good condition</option>
                                                <option>4 - Fair condition</option>
                                                <option>5 - Poor condition</option>
                                                <option>6 - Parts or Salvage</option>
                                            </select>
                                        </div> 
                                        <div className="car-price-filter-range col-lg-12">
                                            <div className="price_filter">
                                                <div className="price_slider_amount">
                                                    <input type="submit"  value="Your range:"/> 
                                                    <input type="text" className="amount" name="price"  placeholder="Add Your Price" /> 
                                                </div>
                                                {/* <div className="slider-range"></div> */}
                                                <div className="slider-range ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"><div className="ui-slider-range ui-widget-header ui-corner-all" style={{left: "0%", width: "29.2929%"}}></div><span className="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" style={{left: "0%"}}></span><span className="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" style={{left: "29.2929%"}}></span></div>
                                            </div>
                                            <div className="btn-wrapper text-center">
                                                <button type="submit" className="btn theme-btn-1 btn-effect-1 text-uppercase">Search Inventory</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="ltn__form_tab_1_2">
                                <div className="car-dealer-form-inner">
                                    <form action="#" className="ltn__car-dealer-form-box row">
                                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-4 col-md-6">
                                            <select className="nice-select">
                                                <option>Select Year</option>
                                                <option>2015</option>
                                                <option>2016</option>
                                                <option>2017</option>
                                                <option>2018</option>
                                                <option>2019</option>
                                                <option>2020</option>
                                            </select>
                                        </div> 
                                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-car col-lg-4 col-md-6">
                                            <select className="nice-select">
                                                <option>Select Country</option>
                                                <option>Australia (15)</option>
                                                <option>Germany (25)</option>
                                                <option>United States (10)</option>
                                                <option>United Kingdom (12)</option>
                                            </select>
                                        </div> 
                                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-meter col-lg-4 col-md-6">
                                            <select className="nice-select">
                                                <option>Select Region</option>
                                                <option>Melbourne (9)</option>
                                                <option>Berlin (12)</option>
                                                <option>New York (5)</option>
                                                <option>london (7)</option>
                                            </select>
                                        </div> 
                                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-car col-lg-4 col-md-6">
                                            <select className="nice-select">
                                                <option>Select Brand</option>
                                                <option>Audi</option>
                                                <option>BMW</option>
                                                <option>Honda</option>
                                                <option>Nissan</option>
                                            </select>
                                        </div> 
                                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-meter col-lg-4 col-md-6">
                                            <select className="nice-select">
                                                <option>Select Model</option>
                                                <option>Any</option>
                                                <option>6 Series (1)</option>
                                                <option>7 Series (1)</option>
                                                <option>8 Series (1)</option>
                                            </select>
                                        </div> 
                                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-ring col-lg-4 col-md-6">
                                            <select className="nice-select">
                                                <option>Select Mileage</option>
                                                <option>2019 Toyota Camry (2WD 2.5L)</option>
                                                <option>2018 Honda Accord (2WD 1.5L)</option>
                                                <option>2018 Nissan Versa (2WD 1.6L)</option>
                                                <option>2017 Honda Civic (2WD 1.5L)</option>
                                            </select>
                                        </div> 
                                        <div className="car-price-filter-range col-lg-12">
                                            <div className="price_filter">
                                                <div className="price_slider_amount">
                                                    <input type="submit"  value="Your range:"/> 
                                                    <input type="text" className="amount" name="price"  placeholder="Add Your Price" /> 
                                                </div>
                                                <div className="slider-range"></div>
                                            </div>
                                            <div className="btn-wrapper text-center">
                                                <button type="submit" className="btn theme-btn-1 btn-effect-1 text-uppercase">Search Inventory</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="ltn__form_tab_1_3">
                                <div className="car-dealer-form-inner">
                                    <form action="#" className="ltn__car-dealer-form-box row">
                                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-4 col-md-6">
                                            <select className="nice-select">
                                                <option>Select Year</option>
                                                <option>2015</option>
                                                <option>2016</option>
                                                <option>2017</option>
                                                <option>2018</option>
                                                <option>2019</option>
                                                <option>2020</option>
                                            </select>
                                        </div> 
                                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-car col-lg-4 col-md-6">
                                            <select className="nice-select">
                                                <option>Select Brand</option>
                                                <option>Audi</option>
                                                <option>BMW</option>
                                                <option>Honda</option>
                                                <option>Nissan</option>
                                            </select>
                                        </div> 
                                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-meter col-lg-4 col-md-6">
                                            <select className="nice-select">
                                                <option>Select Model</option>
                                                <option>Any</option>
                                                <option>6 Series (1)</option>
                                                <option>7 Series (1)</option>
                                                <option>8 Series (1)</option>
                                            </select>
                                        </div> 
                                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-ring col-lg-4 col-md-6">
                                            <select className="nice-select">
                                                <option>Select Mileage</option>
                                                <option>2019 Toyota Camry (2WD 2.5L)</option>
                                                <option>2018 Honda Accord (2WD 1.5L)</option>
                                                <option>2018 Nissan Versa (2WD 1.6L)</option>
                                                <option>2017 Honda Civic (2WD 1.5L)</option>
                                            </select>
                                        </div> 
                                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-transgender col-lg-4 col-md-6">
                                            <select className="nice-select">
                                                <option>Select Transmission</option>
                                                <option>1. Manual transmission</option>
                                                <option>2. Automatic transmission</option>
                                                <option>3. Continuously variable transmission (CVT)</option>
                                                <option>4. Semi-automatic and dual-clutch transmissions</option>
                                            </select>
                                        </div> 
                                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-cog col-lg-4 col-md-6">
                                            <select className="nice-select">
                                                <option>Select Condition</option>
                                                <option>1 - Excellent condition</option>
                                                <option>2 - Very Good condition</option>
                                                <option>3 - Good condition</option>
                                                <option>4 - Fair condition</option>
                                                <option>5 - Poor condition</option>
                                                <option>6 - Parts or Salvage</option>
                                            </select>
                                        </div> 
                                        <div className="car-price-filter-range col-lg-12">
                                            <div className="price_filter">
                                                <div className="price_slider_amount">
                                                    <input type="submit"  value="Your range:"/> 
                                                    <input type="text" className="amount" name="price"  placeholder="Add Your Price" /> 
                                                </div>
                                                <div className="slider-range"></div>
                                            </div>
                                            <div className="btn-wrapper text-center">
                                                <button type="submit" className="btn theme-btn-1 btn-effect-1 text-uppercase">Search Inventory</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="ltn__form_tab_1_4">
                                <div className="car-dealer-form-inner">
                                    <form action="#" className="ltn__car-dealer-form-box row">
                                        <div className="col-lg-3 col-md-6">
                                            <div className="input-item input-item-name ltn__custom-icon">
                                                <input type="text" name="name" placeholder="First Name" />
                                            </div>
                                        </div> 
                                        <div className="col-lg-3 col-md-6">
                                            <div className="input-item input-item-name ltn__custom-icon">
                                                <input type="text" name="lastname" placeholder="Last Name" />
                                            </div>
                                        </div> 
                                        <div className="col-lg-3 col-md-6">
                                            <div className="input-item input-item-name ltn__custom-icon">
                                                <input type="email" name="email" placeholder="Email Address" />
                                            </div>
                                        </div> 
                                        <div className="col-lg-3 col-md-6">
                                            <div className="input-item input-item-name ltn__custom-icon">
                                                <input type="text" name="phone" placeholder="Phone Number" />
                                            </div>
                                        </div> 
                                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-car col-lg-3 col-md-6">
                                            <select className="nice-select">
                                                <option>All Makes</option>
                                                <option>Audi</option>
                                                <option>BMW</option>
                                                <option>Honda</option>
                                                <option>Nissan</option>
                                            </select>
                                        </div> 
                                        <div className="ltn__car-dealer-form-item ltn__datepicker col-lg-3 col-md-6">
                                            <div className="input-group date" data-provide="datepicker">
                                                <input type="text" className="form-control" placeholder="Select Date" />
                                                <div className="input-group-addon">
                                                    <i className="far fa-calendar-alt"></i>
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-meter col-lg-3 col-md-6">
                                            <select className="nice-select">
                                                <option>HH:MM</option>
                                                <option>9:00 AM - 11:00 AM</option>
                                                <option>11:00 AM - 13:00 PM</option>
                                                <option>13:00 PM - 15:00 PM</option>
                                                <option>15:00 PM - 17:00 PM</option>
                                                <option>17:00 PM - 19:00 PM</option>
                                            </select>
                                        </div> 
                                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-meter col-lg-3 col-md-6">
                                            <select className="nice-select">
                                                <option>Select Model</option>
                                                <option>Any</option>
                                                <option>6 Series (1)</option>
                                                <option>7 Series (1)</option>
                                                <option>8 Series (1)</option>
                                            </select>
                                        </div> 

                                        {/* <div className="ltn__car-dealer-form-item col-lg-3 col-md-6">
                                            <div className="input-item input-item-date mb-0">
                                                <input type="date" name="date" placeholder="DATE">
                                            </div>
                                        </div>  */}
                                        <div className="car-price-filter-range col-lg-12">
                                            <div className="btn-wrapper text-center mt-0">
                                                <button type="submit" className="btn theme-btn-1 btn-effect-1 text-uppercase">Submit Request</button>
                                                {/* <a href="shop-car-right-sidebar.html" className="btn theme-btn-1 btn-effect-1 text-uppercase">Search Inventory</a> */}
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* CAR DEALER FORM AREA END */}

    {/* FEATURE AREA START ( Feature - 6) */}
    <div className="ltn__feature-area pb-90">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title-area ltn__section-title-2 text-center">
                        <h6 className="section-subtitle ltn__secondary-color">//  features  //</h6>
                        <h1 className="section-title">Core Features<span>.</span></h1>
                    </div>
                </div>
            </div>
            <div className="row ltn__custom-gutter">
                <div className="col-lg-3 col-sm-6 col-12">
                    <div className="ltn__feature-item ltn__feature-item-6">
                        <div className="ltn__feature-icon">
                            <span><i className="icon-car-parts"></i></span>
                        </div>
                        <div className="ltn__feature-info">
                            <h3><a href="service-details.html">All Kind Brand</a></h3>
                            <p>Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.</p>
                            <a className="ltn__service-btn" href="service-details.html">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                    <div className="ltn__feature-item ltn__feature-item-6 active">
                        <div className="ltn__feature-icon">
                            <span><i className="icon-mechanic"></i></span>
                        </div>
                        <div className="ltn__feature-info">
                            <h3><a href="service-details.html">Expert Mechanics</a></h3>
                            <p>Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.</p>
                            <a className="ltn__service-btn" href="service-details.html">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                    <div className="ltn__feature-item ltn__feature-item-6">
                        <div className="ltn__feature-icon">
                            <span><i className="icon-repair"></i></span>
                        </div>
                        <div className="ltn__feature-info">
                            <h3><a href="service-details.html">Repair Vehicales</a></h3>
                            <p>Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.</p>
                            <a className="ltn__service-btn" href="service-details.html">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                    <div className="ltn__feature-item ltn__feature-item-6">
                        <div className="ltn__feature-icon">
                            <span><i className="icon-car-parts-9"></i></span>
                        </div>
                        <div className="ltn__feature-info">
                            <h3><a href="service-details.html">Paint & Costume</a></h3>
                            <p>Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.</p>
                            <a className="ltn__service-btn" href="service-details.html">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* FEATURE AREA END */}

    {/* CALL TO ACTION START (call-to-action-4) */}
    <div className="ltn__call-to-action-area ltn__call-to-action-4 bg-image pt-115 pb-120" data-bs-bg="https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="call-to-action-inner call-to-action-inner-4 text-center">
                        <div className="section-title-area ltn__section-title-2">
                            <h6 className="section-subtitle ltn__secondary-color">//  any question you have  //</h6>
                            <h1 className="section-title white-color">897-876-987-90</h1>
                        </div>
                        <div className="btn-wrapper">
                            <a href="tel:+123456789" className="theme-btn-1 btn btn-effect-1">MAKE A CALL</a>
                            <a href="contact.html" className="btn btn-transparent btn-effect-4 white-color">CONTACT US</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="ltn__call-to-4-img-1">
            <img src="assets/img/bg/12.png" alt="#" />
        </div>
        <div className="ltn__call-to-4-img-2">
            <img src="assets/img/bg/11.png" alt="#" />
        </div>
    </div>
    {/* CALL TO ACTION END */}

    {/* PRODUCT TAB AREA START (product-item-3) */}
    <div className="ltn__product-tab-area ltn__product-gutter pt-115 pb-70">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title-area ltn__section-title-2">
                        <h6 className="section-subtitle ltn__secondary-color">// Cars</h6>
                        <h1 className="section-title">Car Best Deals</h1>
                    </div>
                    <div className="ltn__tab-menu ltn__tab-menu-top-right text-uppercase">
                        <div className="nav">
                            <a className="active show" data-bs-toggle ="tab" href="#liton_tab_2_1">New Cars</a>
                            <a data-bs-toggle ="tab" href="#liton_tab_2_2" className="">Old Cars</a>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div className="tab-pane fade active show" id="liton_tab_2_1">
                            <div className="ltn__product-tab-content-inner">
                                <div className="row ltn__tab-product-slider-one-active slick-arrow-1">
                                    {/* ltn__product-item */}
                                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src="img/product-2/1.png" alt="#" /></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="soldout-badge">New</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-bs-toggle ="modal" data-bs-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-bs-toggle ="modal" data-bs-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-bs-toggle ="modal" data-bs-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <h2 className="product-title"><a href="product-details.html">Mercedes A-Class</a></h2>
                                                <div className="product-price">
                                                    <span>$65,000</span>
                                                    <del>$68,000</del>
                                                </div>
                                                <div className="product-info-brief">
                                                    <ul>
                                                        <li>
                                                            <i className="fas fa-car"></i>2020
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-cog"></i>Auto
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-road"></i>90kph
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ltn__product-item */}
                                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src="img/product-2/2.png" alt="#" /></a>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-bs-toggle ="modal" data-bs-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-bs-toggle ="modal" data-bs-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-bs-toggle ="modal" data-bs-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <h2 className="product-title"><a href="product-details.html">BMW 4 Series</a></h2>
                                                <div className="product-price">
                                                    <span>$50,000</span>
                                                    <del>$62,000</del>
                                                </div>
                                                <div className="product-info-brief">
                                                    <ul>
                                                        <li>
                                                            <i className="fas fa-car"></i>2020
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-cog"></i>Auto
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-road"></i>95kph
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ltn__product-item */}
                                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src="img/product-2/3.png" alt="#" /></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="soldout-badge">Hot</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-bs-toggle ="modal" data-bs-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-bs-toggle ="modal" data-bs-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-bs-toggle ="modal" data-bs-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <h2 className="product-title"><a href="product-details.html">Tesla Model S</a></h2>
                                                <div className="product-price">
                                                    <span>$49,000</span>
                                                    <del>$55,000</del>
                                                </div>
                                                <div className="product-info-brief">
                                                    <ul>
                                                        <li>
                                                            <i className="fas fa-car"></i>2020
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-cog"></i>Auto
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-road"></i>80kph
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ltn__product-item */}
                                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src="img/product-2/4.png" alt="#" /></a>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-bs-toggle ="modal" data-bs-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-bs-toggle ="modal" data-bs-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-bs-toggle ="modal" data-bs-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <h2 className="product-title"><a href="product-details.html">Toyota Corolla </a></h2>
                                                <div className="product-price">
                                                    <span>$43,000</span>
                                                    <del>$48,000</del>
                                                </div>
                                                <div className="product-info-brief">
                                                    <ul>
                                                        <li>
                                                            <i className="fas fa-car"></i>2020
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-cog"></i>Auto
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-road"></i>70kph
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ltn__product-item */}
                                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src="img/product-2/5.png" alt="#" /></a>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-bs-toggle ="modal" data-bs-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-bs-toggle ="modal" data-bs-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-bs-toggle ="modal" data-bs-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <h2 className="product-title"><a href="product-details.html">Jaguar F-type </a></h2>
                                                <div className="product-price">
                                                    <span>$43,000</span>
                                                    <del>$48,000</del>
                                                </div>
                                                <div className="product-info-brief">
                                                    <ul>
                                                        <li>
                                                            <i className="fas fa-car"></i>2020
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-cog"></i>Auto
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-road"></i>70kph
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*  */}
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="liton_tab_2_2">
                            <div className="ltn__product-tab-content-inner">
                                <div className="row ltn__tab-product-slider-one-active slick-arrow-1">
                                    {/* ltn__product-item */}
                                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src="img/product-2/6.png" alt="#" /></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="soldout-badge">New</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-bs-toggle ="modal" data-bs-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-bs-toggle ="modal" data-bs-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-bs-toggle ="modal" data-bs-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <h2 className="product-title"><a href="product-details.html">Nissan Skyline</a></h2>
                                                <div className="product-price">
                                                    <span>$39,000</span>
                                                    <del>$42,000</del>
                                                </div>
                                                <div className="product-info-brief">
                                                    <ul>
                                                        <li>
                                                            <i className="fas fa-car"></i>2019
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-cog"></i>Auto
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-road"></i>75kph
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ltn__product-item */}
                                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src="img/product-2/7.png" alt="#" /></a>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-bs-toggle ="modal" data-bs-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-bs-toggle ="modal" data-bs-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-bs-toggle ="modal" data-bs-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <h2 className="product-title"><a href="product-details.html">Hyundai Tucson</a></h2>
                                                <div className="product-price">
                                                    <span>$52,000</span>
                                                    <del>$55,000</del>
                                                </div>
                                                <div className="product-info-brief">
                                                    <ul>
                                                        <li>
                                                            <i className="fas fa-car"></i>2020
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-cog"></i>Auto
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-road"></i>82kph
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ltn__product-item */}
                                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src="img/product-2/8.png" alt="#" /></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="soldout-badge">Hot</li>
                                                    </ul>
                                                </div>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-bs-toggle ="modal" data-bs-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-bs-toggle ="modal" data-bs-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-bs-toggle ="modal" data-bs-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <h2 className="product-title"><a href="product-details.html">Ford Ranger</a></h2>
                                                <div className="product-price">
                                                    <span>$59,000</span>
                                                    <del>$62,000</del>
                                                </div>
                                                <div className="product-info-brief">
                                                    <ul>
                                                        <li>
                                                            <i className="fas fa-car"></i>2017
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-cog"></i>Auto
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-road"></i>92kph
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ltn__product-item */}
                                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src="img/product-2/9.png" alt="#" /></a>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-bs-toggle ="modal" data-bs-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-bs-toggle ="modal" data-bs-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-bs-toggle ="modal" data-bs-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <h2 className="product-title"><a href="product-details.html">Volkswagen Polo</a></h2>
                                                <div className="product-price">
                                                    <span>$40,000</span>
                                                    <del>$43,000</del>
                                                </div>
                                                <div className="product-info-brief">
                                                    <ul>
                                                        <li>
                                                            <i className="fas fa-car"></i>2018
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-cog"></i>Auto
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-road"></i>80kph
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ltn__product-item */}
                                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src="img/product-2/10.png" alt="#" /></a>
                                                <div className="product-hover-action">
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="Quick View" data-bs-toggle ="modal" data-bs-target="#quick_view_modal">
                                                                <i className="far fa-eye"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Add to Cart" data-bs-toggle ="modal" data-bs-target="#add_to_cart_modal">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="Wishlist" data-bs-toggle ="modal" data-bs-target="#liton_wishlist_modal">
                                                                <i className="far fa-heart"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <h2 className="product-title"><a href="product-details.html">Honda Freed</a></h2>
                                                <div className="product-price">
                                                    <span>$40,000</span>
                                                    <del>$43,000</del>
                                                </div>
                                                <div className="product-info-brief">
                                                    <ul>
                                                        <li>
                                                            <i className="fas fa-car"></i>2019
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-cog"></i>Auto
                                                        </li>
                                                        <li>
                                                            <i className="fas fa-road"></i>80kph
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*  */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* PRODUCT TAB AREA END */}

    {/* BANNER AREA START */}
    <div className="ltn__banner-area pb-90">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="ltn__banner-item">
                        <div className="ltn__banner-img">
                            <a href="shop.html"><img src="img/banner/1.jpg" alt="Banner Image" /></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="ltn__banner-item">
                        <div className="ltn__banner-img">
                            <a href="shop.html"><img src="img/banner/2.jpg" alt="Banner Image" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* BANNER AREA END */}

    {/* VIDEO AREA START */}
    <div className="ltn__video-popup-area ltn__video-popup-margin">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="ltn__video-bg-img ltn__video-popup-height-600 bg-overlay-black-10-- bg-image" data-bs-bg="assets/img/bg/15.jpg">
                        <a className="ltn__video-icon-2 ltn__video-icon-2-border" href="https://www.youtube.com/embed/X7R-q9rsrtU?autoplay=1&showinfo=0" data-rel="lightcase:myCollection">
                            <i className="fa fa-play"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* VIDEO AREA END*/}

    {/* BRAND LOGO AREA START */}
    <div className="ltn__brand-logo-area ltn__brand-logo-1 bg-image bg-overlay-theme-black-90 pt-290 pb-110 plr--9" data-bs-bg="assets/img/bg/7.jpg">
        <div className="container-fluid">
            <div className="row ltn__brand-logo-active">
                <div className="col-lg-12">
                    <div className="ltn__brand-logo-item">
                        <img src="assets/img/brand-logo/b1.png" alt="Brand Logo" />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="ltn__brand-logo-item">
                        <img src="assets/img/brand-logo/b2.png" alt="Brand Logo" />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="ltn__brand-logo-item">
                        <img src="assets/img/brand-logo/b3.png" alt="Brand Logo" />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="ltn__brand-logo-item">
                        <img src="assets/img/brand-logo/b4.png" alt="Brand Logo" />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="ltn__brand-logo-item">
                        <img src="assets/img/brand-logo/b5.png" alt="Brand Logo" />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="ltn__brand-logo-item">
                        <img src="assets/img/brand-logo/b3.png" alt="Brand Logo" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* BRAND LOGO AREA END */}

    {/* TESTIMONIAL AREA START (testimonial-3) */}
    <div className="ltn__testimonial-area bg-image pt-115 pb-70" data-bs-bg="assets/img/bg/8.jpg">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title-area ltn__section-title-2">
                        <h6 className="section-subtitle ltn__secondary-color">//  Testimonials</h6>
                        <h1 className="section-title">Clients Feedbacks<span>.</span></h1>
                    </div>
                </div>
            </div>
            <div className="row ltn__testimonial-slider-2-active slick-arrow-3">
                <div className="col-lg-12">
                    <div className="ltn__testimonial-item ltn__testimonial-item-3">
                        <div className="ltn__testimonial-img">
                            <img src="assets/img/blog/4.jpg" alt="#" />
                        </div>
                        <div className="ltn__testimoni-info">
                            <p>Lorem ipsum ctetur elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <div className="ltn__testimoni-info-inner">
                                <div className="ltn__testimoni-img">
                                    <img src="assets/img/testimonial/1.jpg" alt="#" />
                                </div>
                                <div className="ltn__testimoni-name-designation">
                                    <h4>Jacob William</h4>
                                    <h6>Founder, Browni Co.</h6>
                                </div>
                            </div>
                            <div className="ltn__testimoni-bg-icon">
                                <i className="far fa-comments"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="ltn__testimonial-item ltn__testimonial-item-3">
                        <div className="ltn__testimonial-img">
                            <img src="assets/img/blog/5.jpg" alt="#" />
                        </div>
                        <div className="ltn__testimoni-info">
                            <p>Lorem ipsum ctetur elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <div className="ltn__testimoni-info-inner">
                                <div className="ltn__testimoni-img">
                                    <img src="assets/img/testimonial/1.jpg" alt="#" />
                                </div>
                                <div className="ltn__testimoni-name-designation">
                                    <h4>Ethan James</h4>
                                    <h6>Admin</h6>
                                </div>
                            </div>
                            <div className="ltn__testimoni-bg-icon">
                                <i className="far fa-comments"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="ltn__testimonial-item ltn__testimonial-item-3">
                        <div className="ltn__testimonial-img">
                            <img src="assets/img/blog/6.jpg" alt="#" />
                        </div>
                        <div className="ltn__testimoni-info">
                            <p>Lorem ipsum ctetur elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <div className="ltn__testimoni-info-inner">
                                <div className="ltn__testimoni-img">
                                    <img src="assets/img/testimonial/1.jpg" alt="#" />
                                </div>
                                <div className="ltn__testimoni-name-designation">
                                    <h4>Jacob William</h4>
                                    <h6>Founder, Browni Co.</h6>
                                </div>
                            </div>
                            <div className="ltn__testimoni-bg-icon">
                                <i className="far fa-comments"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="ltn__testimonial-item ltn__testimonial-item-3">
                        <div className="ltn__testimonial-img">
                            <img src="assets/img/blog/1.jpg" alt="#" />
                        </div>
                        <div className="ltn__testimoni-info">
                            <p>Lorem ipsum ctetur elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <div className="ltn__testimoni-info-inner">
                                <div className="ltn__testimoni-img">
                                    <img src="assets/img/testimonial/1.jpg" alt="#" />
                                </div>
                                <div className="ltn__testimoni-name-designation">
                                    <h4>Liam Mason</h4>
                                    <h6>Officer</h6>
                                </div>
                            </div>
                            <div className="ltn__testimoni-bg-icon">
                                <i className="far fa-comments"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="ltn__testimonial-item ltn__testimonial-item-3">
                        <div className="ltn__testimonial-img">
                            <img src="assets/img/blog/2.jpg" alt="#" />
                        </div>
                        <div className="ltn__testimoni-info">
                            <p>Lorem ipsum ctetur elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <div className="ltn__testimoni-info-inner">
                                <div className="ltn__testimoni-img">
                                    <img src="assets/img/testimonial/1.jpg" alt="#" />
                                </div>
                                <div className="ltn__testimoni-name-designation">
                                    <h4>Noah Alexander</h4>
                                    <h6>Professor</h6>
                                </div>
                            </div>
                            <div className="ltn__testimoni-bg-icon">
                                <i className="far fa-comments"></i>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  */}
            </div>
        </div>
    </div>
    {/* TESTIMONIAL AREA END */}

    {/* IMAGE SLIDER AREA START (img-slider-3) */}
    <div className="ltn__img-slider-area">
        <div className="container-fluid">
            <div className="row ltn__image-slider-4-active slick-arrow-1 slick-arrow-1-inner ltn__no-gutter-all">
                <div className="col-lg-12">
                    <div className="ltn__img-slide-item-4">
                        <a href="img/img-slide/21.jpg" data-rel="lightcase:myCollection">
                            <img src="assets/img/img-slide/21.jpg" alt="Image" />
                        </a>
                        <div className="ltn__img-slide-info">
                            <div className="ltn__img-slide-info-brief">
                                <h6>Sports Car</h6>
                                <h1><a href="portfolio-details.html">BMW Pro Street Car</a></h1>
                            </div>
                            <div className="btn-wrapper">
                                <a href="portfolio-details.html" className="btn theme-btn-1 btn-effect-1 text-uppercase">Details</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="ltn__img-slide-item-4">
                        <a href="img/img-slide/22.jpg" data-rel="lightcase:myCollection">
                            <img src="assets/img/img-slide/22.jpg" alt="Image" />
                        </a>
                        <div className="ltn__img-slide-info">
                            <div className="ltn__img-slide-info-brief">
                                <h6>Sports Car</h6>
                                <h1><a href="portfolio-details.html">BMW Pro Street Car</a></h1>
                            </div>
                            <div className="btn-wrapper">
                                <a href="portfolio-details.html" className="btn theme-btn-1 btn-effect-1 text-uppercase">Details</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="ltn__img-slide-item-4">
                        <a href="img/img-slide/23.jpg" data-rel="lightcase:myCollection">
                            <img src="assets/img/img-slide/23.jpg" alt="Image" />
                        </a>
                        <div className="ltn__img-slide-info">
                            <div className="ltn__img-slide-info-brief">
                                <h6>Sports Car</h6>
                                <h1><a href="portfolio-details.html">BMW Pro Street Car</a></h1>
                            </div>
                            <div className="btn-wrapper">
                                <a href="portfolio-details.html" className="btn theme-btn-1 btn-effect-1 text-uppercase">Details</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="ltn__img-slide-item-4">
                        <a href="img/img-slide/24.jpg" data-rel="lightcase:myCollection">
                            <img src="assets/img/img-slide/24.jpg" alt="Image" />
                        </a>
                        <div className="ltn__img-slide-info">
                            <div className="ltn__img-slide-info-brief">
                                <h6>Sports Car</h6>
                                <h1><a href="portfolio-details.html">BMW Pro Street Car</a></h1>
                            </div>
                            <div className="btn-wrapper">
                                <a href="portfolio-details.html" className="btn theme-btn-1 btn-effect-1 text-uppercase">Details</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="ltn__img-slide-item-4">
                        <a href="img/img-slide/22.jpg" data-rel="lightcase:myCollection">
                            <img src="assets/img/img-slide/22.jpg" alt="Image" />
                        </a>
                        <div className="ltn__img-slide-info">
                            <div className="ltn__img-slide-info-brief">
                                <h6>Sports Car</h6>
                                <h1><a href="portfolio-details.html">BMW Pro Street Car</a></h1>
                            </div>
                            <div className="btn-wrapper">
                                <a href="portfolio-details.html" className="btn theme-btn-1 btn-effect-1 text-uppercase">Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* IMAGE SLIDER AREA END */}

    {/* BLOG AREA START (blog-4) */}
    <div className="ltn__blog-area pt-85 pb-90">
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
                    <div className="ltn__blog-item ltn__blog-item-4 bg-image" data-bs-bg="assets/img/blog/1.jpg">
                        <div className="ltn__blog-brief">
                            <div className="ltn__blog-meta">
                                <ul>
                                    <li className="ltn__blog-author">
                                        <a href="#"><i className="far fa-envelope"></i> by: Admin</a>
                                    </li>
                                    <li className="ltn__blog-tags">
                                        <a href="#"><i className="far fa-envelope"></i> Services</a>
                                    </li>
                                </ul>
                            </div>
                            <h3 className="ltn__blog-title"><a href="blog-details.html">The branch of biology that deals with the normal.</a></h3>
                            <p>Lorem ipsum labore et dolore mag na aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                            <div className="ltn__blog-meta-btn">
                                <div className="ltn__blog-meta">
                                    <ul>
                                        <li className="ltn__blog-date"><i className="far fa-envelope"></i> June 24, 2020</li>
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
                    <div className="ltn__blog-item ltn__blog-item-4 bg-image" data-bs-bg="assets/img/blog/2.jpg">
                        <div className="ltn__blog-brief">
                            <div className="ltn__blog-meta">
                                <ul>
                                    <li className="ltn__blog-author">
                                        <a href="#"><i className="far fa-envelope"></i> by: Admin</a>
                                    </li>
                                    <li className="ltn__blog-tags">
                                        <a href="#"><i className="far fa-envelope"></i> Services</a>
                                    </li>
                                </ul>
                            </div>
                            <h3 className="ltn__blog-title"><a href="blog-details.html">The branch of biology that deals with the normal.</a></h3>
                            <p>Lorem ipsum labore et dolore mag na aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                            <div className="ltn__blog-meta-btn">
                                <div className="ltn__blog-meta">
                                    <ul>
                                        <li className="ltn__blog-date"><i className="far fa-envelope"></i> June 24, 2020</li>
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
                    <div className="ltn__blog-item ltn__blog-item-4 bg-image" data-bs-bg="assets/img/blog/3.jpg">
                        <div className="ltn__blog-brief">
                            <div className="ltn__blog-meta">
                                <ul>
                                    <li className="ltn__blog-author">
                                        <a href="#"><i className="far fa-envelope"></i> by: Admin</a>
                                    </li>
                                    <li className="ltn__blog-tags">
                                        <a href="#"><i className="far fa-envelope"></i> Services</a>
                                    </li>
                                </ul>
                            </div>
                            <h3 className="ltn__blog-title"><a href="blog-details.html">The branch of biology that deals with the normal.</a></h3>
                            <p>Lorem ipsum labore et dolore mag na aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                            <div className="ltn__blog-meta-btn">
                                <div className="ltn__blog-meta">
                                    <ul>
                                        <li className="ltn__blog-date"><i className="far fa-envelope"></i> June 24, 2020</li>
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
                    <div className="ltn__blog-item ltn__blog-item-4 bg-image" data-bs-bg="assets/img/blog/4.jpg">
                        <div className="ltn__blog-brief">
                            <div className="ltn__blog-meta">
                                <ul>
                                    <li className="ltn__blog-author">
                                        <a href="#"><i className="far fa-envelope"></i> by: Admin</a>
                                    </li>
                                    <li className="ltn__blog-tags">
                                        <a href="#"><i className="far fa-envelope"></i> Services</a>
                                    </li>
                                </ul>
                            </div>
                            <h3 className="ltn__blog-title"><a href="blog-details.html">The branch of biology that deals with the normal.</a></h3>
                            <p>Lorem ipsum labore et dolore mag na aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                            <div className="ltn__blog-meta-btn">
                                <div className="ltn__blog-meta">
                                    <ul>
                                        <li className="ltn__blog-date"><i className="far fa-envelope"></i> June 24, 2020</li>
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
                        {/* <div className="ltn__blog-img">
                            <a href="blog-details.html"><img src="img/blog/21.jpg" alt="#" /></a>
                        </div> */}
                        <div className="ltn__blog-brief">
                            <div className="ltn__blog-meta">
                                <ul>
                                    <li className="ltn__blog-author">
                                        <a href="#"><i className="far fa-envelope"></i> by: Admin</a>
                                    </li>
                                    <li className="ltn__blog-tags">
                                        <a href="#"><i className="far fa-envelope"></i> Services</a>
                                    </li>
                                </ul>
                            </div>
                            <h3 className="ltn__blog-title"><a href="blog-details.html">The branch of biology that deals with the normal.</a></h3>
                            <p>Lorem ipsum labore et dolore mag na aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                            <div className="ltn__blog-meta-btn">
                                <div className="ltn__blog-meta">
                                    <ul>
                                        <li className="ltn__blog-date"><i className="far fa-envelope"></i> June 24, 2020</li>
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

    <div className="contact-feature-area before-bg-bottom mb--30">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="ltn__contact-feature-item">
                        <div className="ltn__contact-feature-icon">
                            <img src="assets/img/icons/7.png" alt="Icon Image" />
                        </div>
                        <div className="ltn__contact-feature-info">
                            <a href="tel:+123456789">
                                <span className="h6">+123-456-789</span><br />
                                <span className="h2">Make A Call</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="ltn__contact-feature-item">
                        <div className="ltn__contact-feature-icon">
                            <img src="assets/img/icons/8.png" alt="Icon Image" />
                        </div>
                        <div className="ltn__contact-feature-info">
                            <a href="mailto:info@webmail.com">
                                <span className="h6">info@webmail.com</span><br />
                                <span className="h2">Support Mail</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="ltn__contact-feature-item">
                        <div className="ltn__contact-feature-icon">
                            <img src="assets/img/icons/9.png" alt="Icon Image" />
                        </div>
                        <div className="ltn__contact-feature-info">
                            <a href="locations.html">
                                <span className="h6">12/A, New York, USA</span><br />
                                <span className="h2">Office Address</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* FOOTER AREA START (ltn__footer-2 ltn__footer-color-1) */}
    <footer className="ltn__footer-area ltn__footer-2 ltn__footer-color-1">
        <div className="footer-top-area footer-top-extra-padding  section-bg-2 bg-image" data-bs-bg="assets/img/bg/footer-bg-1.png">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-md-5">
                        <div className="footer-widget footer-about-widget clearfix">
                            <h4 className="footer-title">About Us.</h4>
                            <p>Corporate clients and leisure travelers has been relying on <a href="contact.html">Groundlink</a> for dependable,
                                safe, and professional chauffeured car service in major cities across <a href="locations.html">World</a>.
                                Indeed, it has been more than one decade and five years that Groundlink</p>
                            <div className="ltn__social-media-4">
                                <ul>
                                    <li><a href="#" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#" title="Twitter"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#" title="Behance"><i className="fab fa-behance"></i></a></li>
                                    <li><a href="#" title="Youtube"><i className="fab fa-youtube"></i></a></li>
                                </ul>
                            </div>
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
                                        <li className="ltn__blog-date"><i className="far fa-calendar-alt"></i> June 28, 2020</li>
                                    </ul>
                                </div>
                                <h4 className="ltn__blog-title"><a href="blog-details.html">Electric Car Maintenance, Servicing & Repairs</a></h4>
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
                                    <h4>Example - <span className="current-year"></span></h4>
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

    {/* MODAL AREA START (Quick View Modal) */}
    <div className="ltn__modal-area ltn__quick-view-modal-area">
        <div className="modal fade" id="quick_view_modal" tabindex="-1">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            {/* <i className="fas fa-times"></i> */}
                        </button>
                    </div>
                    <div className="modal-body">
                         <div className="ltn__quick-view-modal-inner">
                             <div className="modal-product-item">
                                <div className="row">
                                    <div className="col-lg-6 col-12">
                                        <div className="modal-product-img">
                                            <img src="assets/img/product/4.png" alt="#" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <div className="modal-product-info">
                                            <div className="product-ratting">
                                                <ul>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                    <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    <li className="review-total"> <a href="#"> ( 95 Reviews )</a></li>
                                                </ul>
                                            </div>
                                            <h3>Brake Conversion Kit</h3>
                                            <div className="product-price">
                                                <span>$149.00</span>
                                                <del>$165.00</del>
                                            </div>
                                            <div className="modal-product-meta ltn__product-details-menu-1">
                                                <ul>
                                                    <li>
                                                        <strong>Categories:</strong> 
                                                        <span>
                                                            <a href="#">Parts</a>
                                                            <a href="#">Car</a>
                                                            <a href="#">Seat</a>
                                                            <a href="#">Cover</a>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="ltn__product-details-menu-2">
                                                <ul>
                                                    <li>
                                                        <div className="cart-plus-minus">
                                                            <input type="text" value="02" name="qtybutton" className="cart-plus-minus-box" />
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="theme-btn-1 btn btn-effect-1" title="Add to Cart" data-bs-toggle ="modal" data-bs-target="#add_to_cart_modal">
                                                            <i className="fas fa-shopping-cart"></i>
                                                            <span>ADD TO CART</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="ltn__product-details-menu-3">
                                                <ul>
                                                    <li>
                                                        <a href="#" className="" title="Wishlist" data-bs-toggle ="modal" data-bs-target="#liton_wishlist_modal">
                                                            <i className="far fa-heart"></i>
                                                            <span>Add to Wishlist</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="" title="Compare" data-bs-toggle ="modal" data-bs-target="#quick_view_modal">
                                                            <i className="fas fa-exchange-alt"></i>
                                                            <span>Compare</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <hr />
                                            <div className="ltn__social-media">
                                                <ul>
                                                    <li>Share:</li>
                                                    <li><a href="#" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                                                    <li><a href="#" title="Twitter"><i className="fab fa-twitter"></i></a></li>
                                                    <li><a href="#" title="Linkedin"><i className="fab fa-linkedin"></i></a></li>
                                                    <li><a href="#" title="Instagram"><i className="fab fa-instagram"></i></a></li>
                                                    
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                             </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* MODAL AREA END */}

    {/* MODAL AREA START (Add To Cart Modal) */}
    <div className="ltn__modal-area ltn__add-to-cart-modal-area">
        <div className="modal fade" id="add_to_cart_modal" tabindex="-1">
            <div className="modal-dialog modal-md" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                         <div className="ltn__quick-view-modal-inner">
                             <div className="modal-product-item">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="modal-product-img">
                                            <img src="assets/img/product/1.png" alt="#" />
                                        </div>
                                         <div className="modal-product-info">
                                            <h5><a href="product-details.html">Brake Conversion Kit</a></h5>
                                            <p className="added-cart"><i className="fa fa-check-circle"></i>  Successfully added to your Cart</p>
                                            <div className="btn-wrapper">
                                                <a href="cart.html" className="theme-btn-1 btn btn-effect-1">View Cart</a>
                                                <a href="checkout.html" className="theme-btn-2 btn btn-effect-2">Checkout</a>
                                            </div>
                                         </div>
                                         {/* additional-info */}
                                         <div className="additional-info d-none">
                                            <p>We want to give you <b>10% discount</b> for your first order, <br />  Use discount code at checkout</p>
                                            <div className="payment-method">
                                                <img src="assets/img/icons/payment.png" alt="#" />
                                            </div>
                                         </div>
                                    </div>
                                </div>
                             </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* MODAL AREA END */}

    {/* MODAL AREA START (Wishlist Modal) */}
    <div className="ltn__modal-area ltn__add-to-cart-modal-area">
        <div className="modal fade" id="liton_wishlist_modal" tabindex="-1">
            <div className="modal-dialog modal-md" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                         <div className="ltn__quick-view-modal-inner">
                             <div className="modal-product-item">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="modal-product-img">
                                            <img src="assets/img/product/7.png" alt="#" />
                                        </div>
                                         <div className="modal-product-info">
                                            <h5><a href="product-details.html">Brake Conversion Kit</a></h5>
                                            <p className="added-cart"><i className="fa fa-check-circle"></i>  Successfully added to your Wishlist</p>
                                            <div className="btn-wrapper">
                                                <a href="wishlist.html" className="theme-btn-1 btn btn-effect-1">View Wishlist</a>
                                            </div>
                                         </div>
                                         {/* additional-info */}
                                         <div className="additional-info d-none">
                                            <p>We want to give you <b>10% discount</b> for your first order, <br />  Use discount code at checkout</p>
                                            <div className="payment-method">
                                                <img src="assets/img/icons/payment.png" alt="#" />
                                            </div>
                                         </div>
                                    </div>
                                </div>
                             </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* MODAL AREA END */}

</div>
{/* Body main wrapper end */}


    {/* MODAL AREA START (Newsletter Modal) */}
    <div className="ltn__modal-area ltn__newsletter-popup-1 d-none----">
        <div className="modal fade" id="ltn__newsletter_popup" tabindex="-1">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="ltn__newsletter-popup-item">
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    <div className="ltn__newsletter-popup-img">
                                        <img src="assets/img/banner/newsletter-popup-1.jpg" alt="#" />
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 align-self-center">
                                    <div className="ltn__newsletter-popup-info">
                                        <h2>NEWSLETTER</h2>
                                        <p>Enter your email below to receive a $30 coupon, special offers, exclusive discounts and more!</p>

                                        <form action="#" className="ltn__newsletter-popup-form">
                                            <div className="input-item input-item-email ltn__custom-icon">
                                                <input type="email" placeholder="Enter your email" />
                                            </div>
                                            <div className="btn-wrapper mt-0">
                                                <button type="submit" className="btn theme-btn-3 btn-effect-4 text-uppercase">Subscribe</button>
                                            </div>
                                        </form>
                                    </div>
                                    {/* additional-info */}
                                    <div className="additional-info d-none">
                                        <p>We want to give you <b>10% discount</b> for your first order, <br />  Use discount code at checkout</p>
                                        <div className="payment-method">
                                            <img src="assets/img/icons/payment.png" alt="#" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* MODAL AREA END */}

    {/* MODAL AREA START (Newsletter Modal) */}
    <div className="ltn__modal-area ltn__newsletter-popup-1 d-none">
        <div className="modal fade" id="ltn__newsletter_popup---" tabindex="-1">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="ltn__newsletter-popup-item  text-center">
                            <div className="row">
                                <div className="col-12 col-lg-6 align-self-center">
                                    <div className="ltn__newsletter-popup-info">
                                        <h3>NEWSLETTER</h3>
                                        <p>nter your email below to receive a $30 coupon, special offers, exclusive discounts and more!</p>

                                        <form action="#" className="ltn__newsletter-popup-form">
                                            <div className="input-item input-item-email ltn__custom-icon">
                                                <input type="email" placeholder="Enter your email" />
                                            </div>
                                            <div className="btn-wrapper mt-0">
                                                <button type="submit" className="btn theme-btn-3 btn-effect-4 text-uppercase">Subscribe</button>
                                            </div>
                                        </form>
                                    </div>
                                    {/* additional-info */}
                                    <div className="additional-info d-none">
                                        <p>We want to give you <b>10% discount</b> for your first order, <br />  Use discount code at checkout</p>
                                        <div className="payment-method">
                                            <img src="assets/img/icons/payment.png" alt="#" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <div className="ltn__newsletter-popup-img">
                                        <img src="assets/img/banner/banner-2.jpg" alt="#" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* MODAL AREA END */}

    {/* MODAL AREA START (Newsletter Modal) */}
    <div className="ltn__modal-area ltn__newsletter-popup-2 d-none">
        <div className="modal fade" id="ltn__newsletter_popup----" tabindex="-1">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">{/*  <i className="icon-cancel"></i> */} &times; </span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="ltn__newsletter-popup-item  text-center">
                            <div className="row">
                                <div className="col-12 col-lg-6 align-self-center">
                                    <div className="ltn__newsletter-popup-info">
                                        <h3>NEWSLETTER</h3>
                                        <p>nter your email below to receive a $30 coupon, special offers, exclusive discounts and more!</p>

                                        <form action="#" className="ltn__newsletter-popup-form">
                                            <div className="input-item input-item-email ltn__custom-icon">
                                                <input type="email" placeholder="Enter your email" />
                                            </div>
                                            <div className="btn-wrapper mt-0">
                                                <button type="submit" className="btn theme-btn-3 btn-effect-4 btn-full-width text-uppercase">Subscribe</button>
                                            </div>
                                        </form>
                                    </div>
                                    {/* additional-info */}
                                    <div className="additional-info d-none">
                                        <p>We want to give you <b>10% discount</b> for your first order, <br />  Use discount code at checkout</p>
                                        <div className="payment-method">
                                            <img src="assets/img/icons/payment.png" alt="#" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <div className="ltn__newsletter-popup-img">
                                        <img src="assets/img/banner/banner-2.jpg" alt="#" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* MODAL AREA END */}


    {/* preloader area start */}
    <div className="preloader d-none" id="preloader">
        <div className="preloader-inner">
            <div className="spinner">
                <div className="dot1"></div>
                <div className="dot2"></div>
            </div>
        </div>
    </div>
    {/* preloader area end */}

    {/* All JS Plugins */}
    <script src="js/plugins.js"></script>
    {/* Main JS */}
    <script src="js/main.js"></script>
  
</div>
  )
}

export default Test