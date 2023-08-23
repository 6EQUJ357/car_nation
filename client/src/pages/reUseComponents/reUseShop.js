import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import $ from "jquery"
import "jquery-ui-dist/jquery-ui"

//import topbar & navbar
import ReUseNavBar from './reUseNavBar'
import ReUseUtilizeCartMobileMenu from './reUseUtilizeCart&MobileMenu'
import ReUseBlog from './reUseBlog'
import ReUseFooterWithTimeSchedule from './reUseFooterWithTimeSchedule'
import ScrollToTopButton from './ScrollToTopButton'





const ReUseShop = () => {

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

                  /* ---------------------------------------------------------
            32. Price Slider
        --------------------------------------------------------- */
        $( ".slider-range" ).slider({
            range: true,
            min: 50,
            max: 5000,
            values: [ 50, 1500 ],
            slide: function( event, ui ) {
                $( ".amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
            }
        });
        $( ".amount" ).val( "$" + $( ".slider-range" ).slider( "values", 0 ) +
        " - $" + $( ".slider-range" ).slider( "values", 1 ) ); 

        /* --------------------------------------------------------
            33. Quantity plus minus
        -------------------------------------------------------- */
        $(".cart-plus-minus").prepend('<div class="dec qtybutton">-</div>');
        $(".cart-plus-minus").append('<div class="inc qtybutton">+</div>');
        $(".qtybutton").on("click", function() {
            var $button = $(this);
            var oldValue = $button.parent().find("input").val();
            if ($button.text() == "+") {
                var newVal = parseFloat(oldValue) + 1;
            } 
            else {
                if (oldValue > 0) {
                    var newVal = parseFloat(oldValue) - 1;
                } 
                else {
                    newVal = 0;
                }
            }
            $button.parent().find("input").val(newVal);
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
<div className="wrapper">

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
    <div className="ltn__breadcrumb-area ltn__breadcrumb-area-3 ltn__breadcrumb-color-white bg-overlay-theme-black-90 bg-image plr--9" data-bs-bg="assets/img/bg/9.jpg">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <div className="ltn__breadcrumb-inner ltn__breadcrumb-inner-2 justify-content-between">
                        <div className="section-title-area ltn__section-title-2">
                            <h6 className="section-subtitle ltn__secondary-color">//  Welcome to our company</h6>
                            <h1 className="section-title white-color">Shop</h1>
                        </div>
                        <div className="ltn__breadcrumb-list">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li>Shop</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* BREADCRUMB AREA END */}
    
    {/* PRODUCT DETAILS AREA START */}
    <div className="ltn__product-area ltn__product-gutter mb-120">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="ltn__shop-options">
                        <ul>
                            <li>
                                <div className="ltn__grid-list-tab-menu ">
                                    <div className="nav">
                                        <a className="active show" data-bs-toggle ="tab" href="#liton_product_grid"><i className="fas fa-th-large"></i></a>
                                        <a data-bs-toggle ="tab" href="#liton_product_list"><i className="fas fa-list"></i></a>
                                    </div>
                                </div>
                            </li>
                            <li>
                               <div className="showing-product-number text-right">
                                    <span>Showing 1–12 of 18 results</span>
                                </div> 
                            </li>
                            <li>
                               <div className="short-by text-center">
                                    <select className="nice-select">
                                        <option>Default Sorting</option>
                                        <option>Sort by popularity</option>
                                        <option>Sort by new arrivals</option>
                                        <option>Sort by price: low to high</option>
                                        <option>Sort by price: high to low</option>
                                    </select>
                                </div> 
                            </li>
                        </ul>
                    </div>
                    <div className="tab-content">
                        <div className="tab-pane fade active show" id="liton_product_grid">
                            <div className="ltn__product-tab-content-inner ltn__product-grid-view">
                                <div className="row">
                                    {/* ltn__product-item */}
                                    <div className="col-xl-4 col-sm-6 col-6">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src="assets/img/product/1.png" alt="#"  /></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">New</li>
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
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Wheel Bearing Retainer</a></h2>
                                                <div className="product-price">
                                                    <span>$149.00</span>
                                                    <del>$162.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ltn__product-item */}
                                    <div className="col-xl-4 col-sm-6 col-6">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src="assets/img/product/2.png" alt="#"  /></a>
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
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Brake Conversion Kit</a></h2>
                                                <div className="product-price">
                                                    <span>$62.00</span>
                                                    <del>$85.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ltn__product-item */}
                                    <div className="col-xl-4 col-sm-6 col-6">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src="assets/img/product/3.png" alt="#"  /></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">Hot</li>
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
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Shock Mount Insulator</a></h2>
                                                <div className="product-price">
                                                    <span>$75.00</span>
                                                    <del>$92.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ltn__product-item */}
                                    <div className="col-xl-4 col-sm-6 col-6">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src="assets/img/product/4.png" alt="#" /></a>
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
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Tail Light Lens</a></h2>
                                                <div className="product-price">
                                                    <span>$78.00</span>
                                                    <del>$85.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ltn__product-item */}
                                    <div className="col-xl-4 col-sm-6 col-6">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src="assets/img/product/5.png" alt="#"  /></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">Sell -25%</li>
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
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Coil Spring Conversion Kit</a></h2>
                                                <div className="product-price">
                                                    <span>$150.00</span>
                                                    <del>$180.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ltn__product-item */}
                                    <div className="col-xl-4 col-sm-6 col-6">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src="assets/img/product/6.png" alt="#"  /></a>
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
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">OE Replica Wheels</a></h2>
                                                <div className="product-price">
                                                    <span>$152.00</span>
                                                    <del>$158.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ltn__product-item */}
                                    <div className="col-xl-4 col-sm-6 col-6">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src="assets/img/product/7.png" alt="#"  /></a>
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
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Wheel Bearing Retainer</a></h2>
                                                <div className="product-price">
                                                    <span>$149.00</span>
                                                    <del>$162.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ltn__product-item */}
                                    <div className="col-xl-4 col-sm-6 col-6">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src="assets/img/product/8.png" alt="#"  /></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">New</li>
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
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Brake Conversion Kit</a></h2>
                                                <div className="product-price">
                                                    <span>$62.00</span>
                                                    <del>$85.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ltn__product-item */}
                                    <div className="col-xl-4 col-sm-6 col-6">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src="assets/img/product/9.png" alt="#"  /></a>
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
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Shock Mount Insulator</a></h2>
                                                <div className="product-price">
                                                    <span>$75.00</span>
                                                    <del>$92.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ltn__product-item */}
                                    <div className="col-xl-4 col-sm-6 col-6">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src="assets/img/product/10.png" alt="#"  /></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">Sell</li>
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
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Tail Light Lens</a></h2>
                                                <div className="product-price">
                                                    <span>$78.00</span>
                                                    <del>$85.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ltn__product-item */}
                                    <div className="col-xl-4 col-sm-6 col-6">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src="assets/img/product/11.png" alt="#"  /></a>
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
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Coil Spring Conversion Kit</a></h2>
                                                <div className="product-price">
                                                    <span>$150.00</span>
                                                    <del>$180.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ltn__product-item */}
                                    <div className="col-xl-4 col-sm-6 col-6">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src="assets/img/product/12.png" alt="#" /></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">New</li>
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
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">OE Replica Wheels</a></h2>
                                                <div className="product-price">
                                                    <span>$165.00</span>
                                                    <del>$1720.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ltn__product-item */}
                                    <div className="col-xl-4 col-sm-6 col-6">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src="assets/img/product/1.png" alt="#" /></a>
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
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Wheel Bearing Retainer</a></h2>
                                                <div className="product-price">
                                                    <span>$149.00</span>
                                                    <del>$162.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ltn__product-item */}
                                    <div className="col-xl-4 col-sm-6 col-6">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src="assets/img/product/2.png" alt="#" /></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">New</li>
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
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Brake Conversion Kit</a></h2>
                                                <div className="product-price">
                                                    <span>$62.00</span>
                                                    <del>$85.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ltn__product-item */}
                                    <div className="col-xl-4 col-sm-6 col-6">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src="assets/img/product/3.png" alt="#" /></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">New</li>
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
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Shock Mount Insulator</a></h2>
                                                <div className="product-price">
                                                    <span>$75.00</span>
                                                    <del>$92.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ltn__product-item */}
                                    <div className="col-xl-4 col-sm-6 col-6">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src="assets/img/product/4.png" alt="#" /></a>
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
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Tail Light Lens</a></h2>
                                                <div className="product-price">
                                                    <span>$78.00</span>
                                                    <del>$85.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ltn__product-item */}
                                    <div className="col-xl-4 col-sm-6 col-6">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src="assets/img/product/5.png" alt="#" /></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">New</li>
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
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Coil Spring Conversion Kit</a></h2>
                                                <div className="product-price">
                                                    <span>$150.00</span>
                                                    <del>$180.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ltn__product-item */}
                                    <div className="col-xl-4 col-sm-6 col-6">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src="assets/img/product/7.png" alt="#" /></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">New</li>
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
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">OE Replica Wheels</a></h2>
                                                <div className="product-price">
                                                    <span>$165.00</span>
                                                    <del>$1720.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ltn__product-item */}
                                    <div className="col-xl-4 col-sm-6 col-6">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src="assets/img/product/12.png" alt="#" /></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">New</li>
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
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">OE Replica Wheels</a></h2>
                                                <div className="product-price">
                                                    <span>$165.00</span>
                                                    <del>$1720.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ltn__product-item */}
                                    <div className="col-xl-4 col-sm-6 col-6">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src="assets/img/product/1.png" alt="#" /></a>
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
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Wheel Bearing Retainer</a></h2>
                                                <div className="product-price">
                                                    <span>$149.00</span>
                                                    <del>$162.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ltn__product-item */}
                                    <div className="col-xl-4 col-sm-6 col-6">
                                        <div className="ltn__product-item ltn__product-item-3 text-center">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src="assets/img/product/2.png" alt="#" /></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">New</li>
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
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <h2 className="product-title"><a href="product-details.html">Brake Conversion Kit</a></h2>
                                                <div className="product-price">
                                                    <span>$62.00</span>
                                                    <del>$85.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*  */}
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="liton_product_list">
                            <div className="ltn__product-tab-content-inner ltn__product-list-view">
                                <div className="row">
                                    {/* ltn__product-item */}
                                    <div className="col-lg-12">
                                        <div className="ltn__product-item ltn__product-item-3">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src="assets/img/product/1.png" alt="#" /></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">New</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <h2 className="product-title"><a href="product-details.html">Brake Conversion Kit</a></h2>
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product-price">
                                                    <span>$165.00</span>
                                                    <del>$1720.00</del>
                                                </div>
                                                <div className="product-brief">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores sit odit nesciunt,  aliquid, deleniti non et ut dolorem!</p>
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
                                        </div>
                                    </div>
                                    {/* ltn__product-item */}
                                    <div className="col-lg-12">
                                        <div className="ltn__product-item ltn__product-item-3">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src="assets/img/product/2.png" alt="#" /></a>
                                            </div>
                                            <div className="product-info">
                                                <h2 className="product-title"><a href="product-details.html">Tail Light Lens</a></h2>
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product-price">
                                                    <span>$165.00</span>
                                                    <del>$1720.00</del>
                                                </div>
                                                <div className="product-brief">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores sit odit nesciunt,  aliquid, deleniti non et ut dolorem!</p>
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
                                        </div>
                                    </div>
                                    {/* ltn__product-item */}
                                    <div className="col-lg-12">
                                        <div className="ltn__product-item ltn__product-item-3">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src="assets/img/product/3.png" alt="#" /></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">New</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <h2 className="product-title"><a href="product-details.html">Brake Conversion Kit</a></h2>
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product-price">
                                                    <span>$165.00</span>
                                                    <del>$1720.00</del>
                                                </div>
                                                <div className="product-brief">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores sit odit nesciunt,  aliquid, deleniti non et ut dolorem!</p>
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
                                        </div>
                                    </div>
                                    {/* ltn__product-item */}
                                    <div className="col-lg-12">
                                        <div className="ltn__product-item ltn__product-item-3">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src="assets/img/product/4.png" alt="#" /></a>
                                            </div>
                                            <div className="product-info">
                                                <h2 className="product-title"><a href="product-details.html">Wheel Bearing Retainer</a></h2>
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product-price">
                                                    <span>$165.00</span>
                                                    <del>$1720.00</del>
                                                </div>
                                                <div className="product-brief">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores sit odit nesciunt,  aliquid, deleniti non et ut dolorem!</p>
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
                                        </div>
                                    </div>
                                    {/* ltn__product-item */}
                                    <div className="col-lg-12">
                                        <div className="ltn__product-item ltn__product-item-3">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src="assets/img/product/5.png" alt="#" /></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">Hot</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <h2 className="product-title"><a href="product-details.html">OE Replica Wheels</a></h2>
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product-price">
                                                    <span>$165.00</span>
                                                    <del>$1720.00</del>
                                                </div>
                                                <div className="product-brief">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores sit odit nesciunt,  aliquid, deleniti non et ut dolorem!</p>
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
                                        </div>
                                    </div>
                                    {/* ltn__product-item */}
                                    <div className="col-lg-12">
                                        <div className="ltn__product-item ltn__product-item-3">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src="assets/img/product/6.png" alt="#" /></a>
                                                <div className="product-badge">
                                                    <ul>
                                                        <li className="sale-badge">New</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <h2 className="product-title"><a href="product-details.html">OE Replica Wheels</a></h2>
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product-price">
                                                    <span>$165.00</span>
                                                    <del>$1720.00</del>
                                                </div>
                                                <div className="product-brief">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores sit odit nesciunt,  aliquid, deleniti non et ut dolorem!</p>
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
                                        </div>
                                    </div>
                                    {/* ltn__product-item */}
                                    <div className="col-lg-12">
                                        <div className="ltn__product-item ltn__product-item-3">
                                            <div className="product-img">
                                                <a href="product-details.html"><img src="assets/img/product/4.png" alt="#" /></a>
                                            </div>
                                            <div className="product-info">
                                                <h2 className="product-title"><a href="product-details.html">Wheel Bearing Retainer</a></h2>
                                                <div className="product-ratting">
                                                    <ul>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                        <li><a href="#"><i className="far fa-star"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product-price">
                                                    <span>$165.00</span>
                                                    <del>$1720.00</del>
                                                </div>
                                                <div className="product-brief">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores sit odit nesciunt,  aliquid, deleniti non et ut dolorem!</p>
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
                                        </div>
                                    </div>
                                    {/*  */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ltn__pagination-area text-center">
                        <div className="ltn__pagination">
                            <ul>
                                <li><a href="#"><i className="fas fa-angle-double-left"></i></a></li>
                                <li><a href="#">1</a></li>
                                <li className="active"><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">...</a></li>
                                <li><a href="#">10</a></li>
                                <li><a href="#"><i className="fas fa-angle-double-right"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar">
                        {/* Category Widget */}
                        <div className="widget ltn__menu-widget">
                            <h4 className="ltn__widget-title ltn__widget-title-border">Product categories</h4>
                            <ul>
                                <li><a href="#">Body <span><i className="fas fa-long-arrow-alt-right"></i></span></a></li>
                                <li><a href="#">Interior <span><i className="fas fa-long-arrow-alt-right"></i></span></a></li>
                                <li><a href="#">Lights <span><i className="fas fa-long-arrow-alt-right"></i></span></a></li>
                                <li><a href="#">Parts <span><i className="fas fa-long-arrow-alt-right"></i></span></a></li>
                                <li><a href="#">Tires <span><i className="fas fa-long-arrow-alt-right"></i></span></a></li>
                                <li><a href="#">Uncategorized <span><i className="fas fa-long-arrow-alt-right"></i></span></a></li>
                                <li><a href="#">Wheel <span><i className="fas fa-long-arrow-alt-right"></i></span></a></li>
                            </ul>
                        </div>
                        {/* Price Filter Widget */}
                        <div className="widget ltn__price-filter-widget">
                            <h4 className="ltn__widget-title ltn__widget-title-border">Filter by price</h4>
                            <div className="price_filter">
                                <div className="price_slider_amount">
                                    <input type="submit"  value="Your range:"/> 
                                    <input type="text" className="amount" name="price"  placeholder="Add Your Price" /> 
                                </div>
                                <div className="slider-range"></div>
                            </div>
                        </div>
                        {/* Top Rated Product Widget */}
                        <div className="widget ltn__top-rated-product-widget">
                            <h4 className="ltn__widget-title ltn__widget-title-border">Top Rated Product</h4>
                            <ul>
                                <li>
                                    <div className="top-rated-product-item clearfix">
                                        <div className="top-rated-product-img">
                                            <a href="product-details.html"><img src="assets/img/product/1.png" alt="#" /></a>
                                        </div>
                                        <div className="top-rated-product-info">
                                            <div className="product-ratting">
                                                <ul>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                </ul>
                                            </div>
                                            <h6><a href="product-details.html">Mixel Solid Seat Cover</a></h6>
                                            <div className="product-price">
                                                <span>$49.00</span>
                                                <del>$65.00</del>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="top-rated-product-item clearfix">
                                        <div className="top-rated-product-img">
                                            <a href="product-details.html"><img src="assets/img/product/2.png" alt="#" /></a>
                                        </div>
                                        <div className="top-rated-product-info">
                                            <div className="product-ratting">
                                                <ul>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                </ul>
                                            </div>
                                            <h6><a href="product-details.html">Brake Conversion Kit</a></h6>
                                            <div className="product-price">
                                                <span>$49.00</span>
                                                <del>$65.00</del>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="top-rated-product-item clearfix">
                                        <div className="top-rated-product-img">
                                            <a href="product-details.html"><img src="assets/img/product/3.png" alt="#" /></a>
                                        </div>
                                        <div className="top-rated-product-info">
                                            <div className="product-ratting">
                                                <ul>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                    <li><a href="#"><i className="far fa-star"></i></a></li>
                                                </ul>
                                            </div>
                                            <h6><a href="product-details.html">Coil Spring Conversion</a></h6>
                                            <div className="product-price">
                                                <span>$49.00</span>
                                                <del>$65.00</del>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* Search Widget */}
                        <div className="widget ltn__search-widget">
                            <h4 className="ltn__widget-title ltn__widget-title-border">Search Objects</h4>
                            <form action="#">
                                <input type="text" name="search" placeholder="Search your keyword..." />
                                <button type="submit"><i className="fas fa-search"></i></button>
                            </form>
                        </div>
                        {/* Tagcloud Widget */}
                        <div className="widget ltn__tagcloud-widget">
                            <h4 className="ltn__widget-title ltn__widget-title-border">Popular Tags</h4>
                            <ul>
                                <li><a href="#">Popular</a></li>
                                <li><a href="#">desgin</a></li>
                                <li><a href="#">ux</a></li>
                                <li><a href="#">usability</a></li>
                                <li><a href="#">develop</a></li>
                                <li><a href="#">icon</a></li>
                                <li><a href="#">Car</a></li>
                                <li><a href="#">Service</a></li>
                                <li><a href="#">Repairs</a></li>
                                <li><a href="#">Auto Parts</a></li>
                                <li><a href="#">Oil</a></li>
                                <li><a href="#">Dealer</a></li>
                                <li><a href="#">Oil Change</a></li>
                                <li><a href="#">Body Color</a></li>
                            </ul>
                        </div>
                        {/* Size Widget */}
                        <div className="widget ltn__tagcloud-widget ltn__size-widget">
                            <h4 className="ltn__widget-title ltn__widget-title-border">Product Size</h4>
                            <ul>
                                <li><a href="#">S</a></li>
                                <li><a href="#">M</a></li>
                                <li><a href="#">L</a></li>
                                <li><a href="#">XL</a></li>
                                <li><a href="#">XXL</a></li>
                            </ul>
                        </div>
                        {/* Color Widget */}
                        <div className="widget ltn__color-widget">
                            <h4 className="ltn__widget-title ltn__widget-title-border">Product Color</h4>
                            <ul>
                                <li className="black"><a href="#"></a></li>
                                <li className="white"><a href="#"></a></li>
                                <li className="red"><a href="#"></a></li>
                                <li className="silver"><a href="#"></a></li>
                                <li className="gray"><a href="#"></a></li>
                                <li className="maroon"><a href="#"></a></li>
                                <li className="yellow"><a href="#"></a></li>
                                <li className="olive"><a href="#"></a></li>
                                <li className="lime"><a href="#"></a></li>
                                <li className="green"><a href="#"></a></li>
                                <li className="aqua"><a href="#"></a></li>
                                <li className="teal"><a href="#"></a></li>
                                <li className="blue"><a href="#"></a></li>
                                <li className="navy"><a href="#"></a></li>
                                <li className="fuchsia"><a href="#"></a></li>
                                <li className="purple"><a href="#"></a></li>
                                <li className="pink"><a href="#"></a></li>
                                <li className="nude"><a href="#"></a></li>
                                <li className="orange"><a href="#"></a></li>

                                <li><a href="#" className="orange"></a></li>
                                <li><a href="#" className="orange"></a></li>
                            </ul>
                        </div>
                        {/* Banner Widget */}
                        <div className="widget ltn__banner-widget">
                            <a href="shop.html"><img src="assets/img/banner/banner-2.jpg" alt="#" /></a>
                        </div>

                    </aside>
                </div>
            </div>
        </div>
    </div>
    {/* PRODUCT DETAILS AREA END */}

    {/* FOOTER AREA START (ltn__footer-2 ltn__footer-color-1) */}
    <ReUseFooterWithTimeSchedule />
    {/* FOOTER AREA END */}

    {/* MODAL AREA START (Quick View Modal) */}
    <div className="ltn__modal-area ltn__quick-view-modal-area">
        <div className="modal fade" id="quick_view_modal" tabIndex="-1">
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
        <div className="modal fade" id="add_to_cart_modal" tabIndex="-1">
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
                                                <Link to="/checkout" className="theme-btn-2 btn btn-effect-2">Checkout</Link>
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
        <div className="modal fade" id="liton_wishlist_modal" tabIndex="-1">
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

{/* scroll to top */}
<ScrollToTopButton />
         {/* scroll to top End*/}




    </div>
  )
}

export default ReUseShop