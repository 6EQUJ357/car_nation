import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import $ from "jquery"
import "jquery-ui-dist/jquery-ui"

//import topbar & navbar
import ReUseNavBar from './reUseNavBar'
import ReUseUtilizeCartMobileMenu from './reUseUtilizeCart&MobileMenu'
import ReUseFooterWithTimeSchedule from './reUseFooterWithTimeSchedule'
import ScrollToTopButton from './ScrollToTopButton'


const ReUseCheckOut = () => {

    
    useEffect(()=>{  
        (function($) {
            "use strict";
          
           $(document).ready(function(){
      
                /* --------------------------------------------------------
                    1. Variables
                --------------------------------------------------------- */
                var $window = $(window),
                $body = $('body');
        
                /* --------------------------------------------------------
                    2. Mobile Menu
                --------------------------------------------------------- */
                 /* ---------------------------------
                    Utilize Function 
                ----------------------------------- */
                (function () {
                    var $ltn__utilizeToggle = $('.ltn__utilize-toggle'),
                        $ltn__utilize = $('.ltn__utilize'),
                        $ltn__utilizeOverlay = $('.ltn__utilize-overlay'),
                        $mobileMenuToggle = $('.mobile-menu-toggle');
                    $ltn__utilizeToggle.on('click', function (e) {
                        e.preventDefault();
                        var $this = $(this),
                            $target = $this.attr('href');
                        $body.addClass('ltn__utilize-open');
                        $($target).addClass('ltn__utilize-open');
                        $ltn__utilizeOverlay.fadeIn();
                        if ($this.parent().hasClass('mobile-menu-toggle')) {
                            $this.addClass('close');
                        }
                    });
                    $('.ltn__utilize-close, .ltn__utilize-overlay').on('click', function (e) {
                        e.preventDefault();
                        $body.removeClass('ltn__utilize-open');
                        $ltn__utilize.removeClass('ltn__utilize-open');
                        $ltn__utilizeOverlay.fadeOut();
                        $mobileMenuToggle.find('a').removeClass('close');
                    });
                })();
        
                /* ------------------------------------
                    Utilize Menu
                ----------------------------------- */
                function mobileltn__utilizeMenu() {
                    var $ltn__utilizeNav = $('.ltn__utilize-menu, .overlay-menu'),
                        $ltn__utilizeNavSubMenu = $ltn__utilizeNav.find('.sub-menu');
        
                    /*Add Toggle Button With Off Canvas Sub Menu*/
                    $ltn__utilizeNavSubMenu.parent().prepend('<span class="menu-expand"></span>');
        
                    /*Category Sub Menu Toggle*/
                    $ltn__utilizeNav.on('click', 'li a, .menu-expand', function (e) {
                        var $this = $(this);
                        if ($this.attr('href') === '#' || $this.hasClass('menu-expand')) {
                            e.preventDefault();
                            if ($this.siblings('ul:visible').length) {
                                $this.parent('li').removeClass('active');
                                $this.siblings('ul').slideUp();
                                $this.parent('li').find('li').removeClass('active');
                                $this.parent('li').find('ul:visible').slideUp();
                            } else {
                                $this.parent('li').addClass('active');
                                $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
                                $this.closest('li').siblings('li').find('ul:visible').slideUp();
                                $this.siblings('ul').slideDown();
                            }
                        }
                    });
                }
                mobileltn__utilizeMenu();
        
                /* --------------------------------------------------------
                    3. Mega Menu
                --------------------------------------------------------- */
                $('.mega-menu').each(function(){
                    if($(this).children('li').length){
                        var ulChildren = $(this).children('li').length;
                        $(this).addClass('column-'+ulChildren)
                    }
                });
                
        
                /* Remove Attribute( href ) from sub-menu title in mega-menu */
                /*
                $('.mega-menu > li > a').removeAttr('href');
                */
        
        
                /* Mega Munu  */
                // $(".mega-menu").parent().css({"position": "inherit"});
                $(".mega-menu").parent().addClass("mega-menu-parent");
                
        
                /* Add space for Elementor Menu Anchor link */
                // $( window ).on( 'elementor/frontend/init', function() {
                //     elementorFrontend.hooks.addFilter( 'frontend/handlers/menu_anchor/scroll_top_distance', function( scrollTop ) {
                //         return scrollTop - 75;
                //     });
                // });
        
                /* --------------------------------------------------------
                    3-2. Category Menu
                --------------------------------------------------------- */
         
                $('.ltn__category-menu-title').on('click', function(){
                    $('.ltn__category-menu-toggle').slideToggle(500);
                });	
        
                /* Category Menu More Item show */
                $('.ltn__category-menu-more-item-parent').on('click', function(){
                    $('.ltn__category-menu-more-item-child').slideToggle();
                    $(this).toggleClass('rx-change');
        
                });
        
                /* Category Submenu Column Count */
                $('.ltn__category-submenu').each(function(){
                    if($(this).children('li').length){
                        var ulChildren = $(this).children('li').length;
                        $(this).addClass('ltn__category-column-no-'+ulChildren)
                    }
                });
        
                /* Category Menu Responsive */
                function ltn__CategoryMenuToggle(){
                    $('.ltn__category-menu-toggle .ltn__category-menu-drop > a').on('click', function(){
                    if($(window).width() < 991){
                        $(this).removeAttr('href');
                        var element = $(this).parent('li');
                        if (element.hasClass('open')) {
                            element.removeClass('open');
                            element.find('li').removeClass('open');
                            element.find('ul').slideUp();
                        }
                        else {
                            element.addClass('open');
                            element.children('ul').slideDown();
                            element.siblings('li').children('ul').slideUp();
                            element.siblings('li').removeClass('open');
                            element.siblings('li').find('li').removeClass('open');
                            element.siblings('li').find('ul').slideUp();
                        }
                    }
                    });
                    $('.ltn__category-menu-toggle .ltn__category-menu-drop > a').append('<span class="expand"></span>');
                }
                ltn__CategoryMenuToggle();
        
        
                /* ---------------------------------------------------------
                    4. One Page Navigation ($ Easing Plugin )
                --------------------------------------------------------- */
                //$ for page scrolling feature - requires$ Easing plugin
                $(function() {
                    $('a.page-scroll').bind('click', function(event) {
                        var $anchor = $(this);
                        $('html, body').stop().animate({
                            scrollTop: $($anchor.attr('href')).offset().top
                        }, 1500, 'easeInOutExpo');
                        event.preventDefault();
                    });
                });
        
        
                /* --------------------------------------------------------
                    5. Toogle Search
                -------------------------------------------------------- */
                // Handle click on toggle search button
                $('.header-search-1').on('click', function() {
                    $('.header-search-1, .header-search-1-form').toggleClass('search-open');
                    return false;
                });
        
        
                /* ---------------------------------------------------------
                    6. Current Year Copyright area
                --------------------------------------------------------- */
                $(".current-year").text((new Date).getFullYear());
        
        
                /* ---------------------------------------------------------
                    7. Background Image
                --------------------------------------------------------- */
                var $backgroundImage = $('.bg-image, .bg-image-top');
                $backgroundImage.each(function() {
                    var $this = $(this),
                        $bgImage = $this.data('bs-bg');
                    $this.css('background-image', 'url('+$bgImage+')');
                });
        
    
            });
        
                  
        })($);
    },[])



  return (
    <div>

        {/* [if lte IE 9]
            <p className="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
             [endif] */}

        {/* Add your site or application content here */}

        {/* Body main wrapper start */}
        <div className="body-wrapper">

            {/* HEADER AREA START (header-4) */}
            <header className="ltn__header-area ltn__header-4 ltn__header-transparent gradient-color-2">

                  {/* ltn__header-middle-area start */}
                  <ReUseNavBar />
                    {/* ltn__header-middle-area end */}

            </header>
            {/* HEADER AREA END */}
            
          
            {/* Utilize Cart Menu Start */}
            {/* Utilize Mobile Menu Start */}
            <ReUseUtilizeCartMobileMenu />
            {/* Utilize Cart Menu End */}
            {/* Utilize Mobile Menu End */}

            {/* BREADCRUMB AREA START */}
            <div className="ltn__breadcrumb-area ltn__breadcrumb-area-2 ltn__breadcrumb-color-white bg-overlay-theme-black-90 bg-image" data-bs-bg="assets/img/bg/9.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ltn__breadcrumb-inner ltn__breadcrumb-inner-2 justify-content-between">
                                <div className="section-title-area ltn__section-title-2">
                                    <h6 className="section-subtitle ltn__secondary-color">//  Welcome to our company</h6>
                                    <h1 className="section-title white-color">Checkout</h1>
                                </div>
                                <div className="ltn__breadcrumb-list">
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li>Checkout</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* BREADCRUMB AREA END */}

            {/* WISHLIST AREA START */}
            <div className="ltn__checkout-area mb-105">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ltn__checkout-inner">
                                <div className="ltn__checkout-single-content ltn__returning-customer-wrap">
                                    <h5>Returning customer? <a className="ltn__secondary-color" href="#ltn__returning-customer-login" data-bs-toggle ="collapse">Click here to login</a></h5>
                                    <div id="ltn__returning-customer-login" className="collapse ltn__checkout-single-content-info">
                                        <div className="ltn_coupon-code-form ltn__form-box">
                                            <p>Please login your accont.</p>
                                            <form action="#" >
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="input-item input-item-name ltn__custom-icon">
                                                            <input type="text" name="ltn__name" placeholder="Enter your name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="input-item input-item-email ltn__custom-icon">
                                                            <input type="email" name="ltn__email" placeholder="Enter email address" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <button className="btn theme-btn-1 btn-effect-1 text-uppercase">Login</button>
                                                <label className="input-info-save mb-0"><input type="checkbox" name="agree" /> Remember me</label>
                                                <p className="mt-30"><Link to="/signup">Lost your password?</Link></p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="ltn__checkout-single-content ltn__coupon-code-wrap">
                                    <h5>Have a coupon? <a className="ltn__secondary-color" href="#ltn__coupon-code" data-bs-toggle ="collapse">Click here to enter your code</a></h5>
                                    <div id="ltn__coupon-code" className="collapse ltn__checkout-single-content-info">
                                        <div className="ltn__coupon-code-form">
                                            <p>If you have a coupon code, please apply it below.</p>
                                            <form action="#" >
                                                <input type="text" name="coupon-code" placeholder="Coupon code" />
                                                <button className="btn theme-btn-2 btn-effect-2 text-uppercase">Apply Coupon</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="ltn__checkout-single-content mt-50">
                                    <h4 className="title-2">Billing Details</h4>
                                    <div className="ltn__checkout-single-content-info">
                                        <form action="#" >
                                            <h6>Personal Information</h6>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="input-item input-item-name ltn__custom-icon">
                                                        <input type="text" name="ltn__name" placeholder="First name" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="input-item input-item-name ltn__custom-icon">
                                                        <input type="text" name="ltn__lastname" placeholder="Last name" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="input-item input-item-email ltn__custom-icon">
                                                        <input type="email" name="ltn__email" placeholder="email address" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="input-item input-item-phone ltn__custom-icon">
                                                        <input type="text" name="ltn__phone" placeholder="phone number" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="input-item input-item-website ltn__custom-icon">
                                                        <input type="text" name="ltn__company" placeholder="Company name (optional)" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="input-item input-item-website ltn__custom-icon">
                                                        <input type="text" name="ltn__phone" placeholder="Company address (optional)" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-4 col-md-6">
                                                    <h6>Country</h6>
                                                    <div className="input-item">
                                                        <select className="nice-select">
                                                            <option>Select Country</option>
                                                            <option>Australia</option>
                                                            <option>Canada</option>
                                                            <option>China</option>
                                                            <option>Morocco</option>
                                                            <option>Saudi Arabia</option>
                                                            <option>United Kingdom (UK)</option>
                                                            <option>United States (US)</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12">
                                                    <h6>Address</h6>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="input-item">
                                                                <input type="text" placeholder="House number and street name" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="input-item">
                                                                <input type="text" placeholder="Apartment, suite, unit etc. (optional)" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <h6>Town / City</h6>
                                                    <div className="input-item">
                                                        <input type="text" placeholder="City" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <h6>State </h6>
                                                    <div className="input-item">
                                                        <input type="text" placeholder="State" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6">
                                                    <h6>Zip</h6>
                                                    <div className="input-item">
                                                        <input type="text" placeholder="Zip" />
                                                    </div>
                                                </div>
                                            </div>
                                            <p><label className="input-info-save mb-0"><input type="checkbox" name="agree" /> Create an account?</label></p>
                                            <h6>Order Notes (optional)</h6>
                                            <div className="input-item input-item-textarea ltn__custom-icon">
                                                <textarea name="ltn__message" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="ltn__checkout-payment-method mt-50">
                                <h4 className="title-2">Payment Method</h4>
                                <div id="checkout_accordion_1">
                                    {/* card */}
                                    <div className="card">
                                        <h5 className="collapsed ltn__card-title" data-bs-toggle ="collapse" data-bs-target="#faq-item-2-1" aria-expanded="false">
                                            Check payments
                                        </h5>
                                        <div id="faq-item-2-1" className="collapse" data-parent="#checkout_accordion_1">
                                            <div className="card-body">
                                                <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* card */}
                                    <div className="card">
                                        <h5 className="ltn__card-title" data-bs-toggle ="collapse" data-bs-target="#faq-item-2-2" aria-expanded="true"> 
                                            Cash on delivery 
                                        </h5>
                                        <div id="faq-item-2-2" className="collapse show" data-parent="#checkout_accordion_1">
                                            <div className="card-body">
                                                <p>Pay with cash upon delivery.</p>
                                            </div>
                                        </div>
                                    </div>                          
                                    {/* card */}
                                    <div className="card">
                                        <h5 className="collapsed ltn__card-title" data-bs-toggle ="collapse" data-bs-target="#faq-item-2-3" aria-expanded="false" >
                                            PayPal <img src="assets/img/icons/payment-3.png" alt="#" />
                                        </h5>
                                        <div id="faq-item-2-3" className="collapse" data-parent="#checkout_accordion_1">
                                            <div className="card-body">
                                                <p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ltn__payment-note mt-30 mb-30">
                                    <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
                                </div>
                                <button className="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit">Place order</button>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="shoping-cart-total mt-50">
                                <h4 className="title-2">Cart Totals</h4>
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td>Brake Conversion Kit <strong>× 2</strong></td>
                                            <td>$298.00</td>
                                        </tr>
                                        <tr>
                                            <td>OE Replica Wheels <strong>× 2</strong></td>
                                            <td>$170.00</td>
                                        </tr>
                                        <tr>
                                            <td>Wheel Bearing Retainer <strong>× 2</strong></td>
                                            <td>$150.00</td>
                                        </tr>
                                        <tr>
                                            <td>Shipping and Handing</td>
                                            <td>$15.00</td>
                                        </tr>
                                        <tr>
                                            <td>Vat</td>
                                            <td>$00.00</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Order Total</strong></td>
                                            <td><strong>$633.00</strong></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* WISHLIST AREA START */}

            {/* FOOTER AREA START (ltn__footer-2 ltn__footer-color-1) */}
            <ReUseFooterWithTimeSchedule />
            {/* FOOTER AREA END */}
        </div>
        {/* Body main wrapper end */}

        {/* scroll to top */}
        <ScrollToTopButton />
         {/* scroll to top End*/}



    </div>
  )
}

export default ReUseCheckOut