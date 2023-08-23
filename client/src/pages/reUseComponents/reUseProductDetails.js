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





const ReUseProductDetails = () => {

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

                /* --------------------------------------------------------
            12. Product Details Page
        --------------------------------------------------------- */
        $('.ltn__shop-details-large-img').not(".slick-initialized").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.ltn__shop-details-small-img'
        });
        $('.ltn__shop-details-small-img').not(".slick-initialized").slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.ltn__shop-details-large-img',
            dots: false,
            arrows: true,
            focusOnSelect: true,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        /* --------------------------------------------------------
            16. Product Slider One
        --------------------------------------------------------- */
        $('.ltn__related-product-slider-one-active').not(".slick-initialized").slick({
            arrows: true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });

         /* --------------------------------------------------------
            29. Countdown
        --------------------------------------------------------- */
        $('[data-countdown]').each(function () {

            var $this = $(this),
                finalDate = $(this).data('countdown');
            if (!$this.hasClass('countdown-full-format')) {
                $this.countdown(finalDate, function (event) {
                    $this.html(event.strftime('<div class="single"><h1>%D</h1><p>Days</p></div> <div class="single"><h1>%H</h1><p>Hrs</p></div> <div class="single"><h1>%M</h1><p>Mins</p></div> <div class="single"><h1>%S</h1><p>Secs</p></div>'));
                });
            } else {
                $this.countdown(finalDate, function (event) {
                    $this.html(event.strftime('<div class="single"><h1>%Y</h1><p>Years</p></div> <div class="single"><h1>%m</h1><p>Months</p></div> <div class="single"><h1>%W</h1><p>Weeks</p></div> <div class="single"><h1>%d</h1><p>Days</p></div> <div class="single"><h1>%H</h1><p>Hrs</p></div> <div class="single"><h1>%M</h1><p>Mins</p></div> <div class="single"><h1>%S</h1><p>Secs</p></div>'));
                });
            }

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
    <div className="ltn__breadcrumb-area ltn__breadcrumb-area-2 ltn__breadcrumb-color-white bg-overlay-theme-black-90 bg-image plr--9" data-bs-bg="assets/img/bg/9.jpg">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <div className="ltn__breadcrumb-inner ltn__breadcrumb-inner-2 justify-content-between">
                        <div className="section-title-area ltn__section-title-2">
                            <h6 className="section-subtitle ltn__secondary-color">//  Welcome to our company</h6>
                            <h1 className="section-title white-color">Product Details</h1>
                        </div>
                        <div className="ltn__breadcrumb-list">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li>Product Details</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* BREADCRUMB AREA END */}

    {/* SHOP DETAILS AREA START */}
    <div className="ltn__shop-details-area pb-120">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="ltn__shop-details-inner">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="ltn__shop-details-img-gallery">
                                    <div className="ltn__shop-details-large-img">
                                        <div className="single-large-img">
                                            <a href="img/product/9.png" data-rel="lightcase:myCollection">
                                                <img src="assets/img/product/9.png" alt="Image" />
                                            </a>
                                        </div>
                                        <div className="single-large-img">
                                            <a href="img/product/2.png" data-rel="lightcase:myCollection">
                                                <img src="assets/img/product/2.png" alt="Image" />
                                            </a>
                                        </div>
                                        <div className="single-large-img">
                                            <a href="img/product/3.png" data-rel="lightcase:myCollection">
                                                <img src="assets/img/product/3.png" alt="Image" />
                                            </a>
                                        </div>
                                        <div className="single-large-img">
                                            <a href="img/product/4.png" data-rel="lightcase:myCollection">
                                                <img src="assets/img/product/4.png" alt="Image" />
                                            </a>
                                        </div>
                                        <div className="single-large-img">
                                            <a href="img/product/5.png" data-rel="lightcase:myCollection">
                                                <img src="assets/img/product/5.png" alt="Image" />
                                            </a>
                                        </div>
                                        <div className="single-large-img">
                                            <a href="img/product/6.png" data-rel="lightcase:myCollection">
                                                <img src="assets/img/product/6.png" alt="Image" />
                                            </a>
                                        </div>
                                        <div className="single-large-img">
                                            <a href="img/product/7.png" data-rel="lightcase:myCollection">
                                                <img src="assets/img/product/7.png" alt="Image" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="ltn__shop-details-small-img slick-arrow-2">
                                        <div className="single-small-img">
                                            <img src="assets/img/product/1.png" alt="Image" />
                                        </div>
                                        <div className="single-small-img">
                                            <img src="assets/img/product/2.png" alt="Image" />
                                        </div>
                                        <div className="single-small-img">
                                            <img src="assets/img/product/3.png" alt="Image" />
                                        </div>
                                        <div className="single-small-img">
                                            <img src="assets/img/product/4.png" alt="Image" />
                                        </div>
                                        <div className="single-small-img">
                                            <img src="assets/img/product/5.png" alt="Image" />
                                        </div>
                                        <div className="single-small-img">
                                            <img src="assets/img/product/6.png" alt="Image" />
                                        </div>
                                        <div className="single-small-img">
                                            <img src="assets/img/product/7.png" alt="Image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="shop-details-info modal-product-info">
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
                                        <span>$49.00</span>
                                        <del>$65.00</del>
                                    </div>
                                    <div className="modal-product-brief">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos repellendus repudiandae incidunt quidem pariatur expedita, quo quis modi tempore non.</p>
                                    </div>
                                    <div className="modal-product-meta ltn__product-details-menu-1 mb-30">
                                        <ul>
                                            <li><strong>SKU:</strong> <span>12345</span></li>
                                            <li><strong>Availability:</strong> <span>Many in stock</span></li>
                                            <li>
                                                <strong>Vendor:</strong> 
                                                <span>
                                                    <a href="#">Rose</a>
                                                </span>
                                            </li>
                                            <li>
                                                <strong>Product Type:</strong> 
                                                <span>
                                                    <a href="#">New</a>
                                                </span>
                                            </li>
                                            <li>
                                                <div className="ltn__color-widget clearfix">
                                                    <strong className="alignleft">Color</strong>
                                                    <ul>
                                                        <li className="black"><a href="#"></a></li>
                                                        <li className="white"><a href="#"></a></li>
                                                        <li className="red"><a href="#"></a></li>
                                                        <li className="yellow"><a href="#"></a></li>
                                                        <li className="green"><a href="#"></a></li>
                                                        <li className="blue"><a href="#"></a></li>
                                                        <li className="navy"><a href="#"></a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="ltn__tagcloud-widget ltn__size-widget clearfix">
                                                    <strong className="alignleft">Size</strong>
                                                    <ul>
                                                        <li><a href="#">S</a></li>
                                                        <li><a href="#">M</a></li>
                                                        <li><a href="#">L</a></li>
                                                        <li><a href="#">XL</a></li>
                                                        <li><a href="#">XXL</a></li>
                                                    </ul>
                                                </div>
                                            </li>
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
                                    <div className="ltn__countdown ltn__countdown-2 mb-10" data-countdown="2021/01/01"></div>
                                    <hr />
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
                                    <hr />
                                    <div className="ltn__safe-checkout">
                                        <h5>Guaranteed Safe Checkout</h5>
                                        <img src="assets/img/icons/payment-2.png" alt="Payment Image" />
                                    </div>
                                    <hr />
                                    <div className="ltn__product-details-menu-2">
                                        <ul>
                                            <li>
                                                <div className="product-meta-date">
                                                    <input type="date" name="date" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="product-buy-btn">
                                                    <a href="shop.html"  className="theme-btn-2 btn btn-effect-2">BUY NOW</a>
                                                </div>
                                            </li>
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
    {/* SHOP DETAILS AREA END */}

    {/* SHOP DETAILS TAB AREA START */}
    <div className="ltn__shop-details-tab-area pb-115">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="ltn__shop-details-tab-inner">
                        <div className="ltn__shop-details-tab-menu">
                            <div className="nav">
                                <a className="active show" data-bs-toggle ="tab" href="#liton_tab_details_1_1">Description</a>
                                <a data-bs-toggle ="tab" href="#liton_tab_details_1_2" className="">Reviews</a>
                                <a data-bs-toggle ="tab" href="#liton_tab_details_1_3" className="">Comments</a>
                                <a data-bs-toggle ="tab" href="#liton_tab_details_1_4" className="">Shipping Policy</a>
                                <a data-bs-toggle ="tab" href="#liton_tab_details_1_5" className="">Size Chart</a>
                            </div>
                        </div>
                        <div className="tab-content">
                            <div className="tab-pane fade active show" id="liton_tab_details_1_1">
                                <div className="ltn__shop-details-tab-content-inner">
                                    <h4 className="title-2">Lorem ipsum dolor sit amet elit.</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p> 
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum odio omnis animi magnam qui sequi dolore, voluptatum in recusandae dolorum obcaecati quas accusantium eius porro laborum, corporis! Consectetur, dolores, provident!</p>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="liton_tab_details_1_2">
                                <div className="ltn__shop-details-tab-content-inner">
                                    <h4 className="title-2">Customer Reviews</h4>
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
                                    <hr />
                                    {/* comment-area */}
                                    <div className="ltn__comment-area mb-30">
                                        <div className="ltn__comment-inner">
                                            <ul>
                                                <li>
                                                    <div className="ltn__comment-item clearfix">
                                                        <div className="ltn__commenter-img">
                                                            <img src="assets/img/testimonial/1.jpg" alt="Image" />
                                                        </div>
                                                        <div className="ltn__commenter-comment">
                                                            <h6><a href="#">Adam Smit</a></h6>
                                                            <div className="product-ratting">
                                                                <ul>
                                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                    <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                    <li><a href="#"><i className="far fa-star"></i></a></li>
                                                                </ul>
                                                            </div>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, omnis fugit corporis iste magnam ratione.</p>
                                                            <span className="ltn__comment-reply-btn">September 3, 2020</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="ltn__comment-item clearfix">
                                                        <div className="ltn__commenter-img">
                                                            <img src="assets/img/testimonial/3.jpg" alt="Image" />
                                                        </div>
                                                        <div className="ltn__commenter-comment">
                                                            <h6><a href="#">Adam Smit</a></h6>
                                                            <div className="product-ratting">
                                                                <ul>
                                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                    <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                    <li><a href="#"><i className="far fa-star"></i></a></li>
                                                                </ul>
                                                            </div>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, omnis fugit corporis iste magnam ratione.</p>
                                                            <span className="ltn__comment-reply-btn">September 2, 2020</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="ltn__comment-item clearfix">
                                                        <div className="ltn__commenter-img">
                                                            <img src="assets/img/testimonial/2.jpg" alt="Image" />
                                                        </div>
                                                        <div className="ltn__commenter-comment">
                                                            <h6><a href="#">Adam Smit</a></h6>
                                                            <div className="product-ratting">
                                                                <ul>
                                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                                    <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                                    <li><a href="#"><i className="far fa-star"></i></a></li>
                                                                </ul>
                                                            </div>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, omnis fugit corporis iste magnam ratione.</p>
                                                            <span className="ltn__comment-reply-btn">September 2, 2020</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* comment-reply */}
                                    <div className="ltn__comment-reply-area ltn__form-box mb-60">
                                        <form action="#">
                                            <h4 className="title-2">Add a Review</h4>
                                            <div className="mb-30">
                                                <div className="add-a-review">
                                                    <h6>Your Ratings:</h6>
                                                    <div className="product-ratting">
                                                        <ul>
                                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                            <li><a href="#"><i className="fas fa-star-half-alt"></i></a></li>
                                                            <li><a href="#"><i className="far fa-star"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="input-item input-item-textarea ltn__custom-icon">
                                                <textarea placeholder="Type your comments...."></textarea>
                                            </div>
                                            <div className="input-item input-item-name ltn__custom-icon">
                                                <input type="text" placeholder="Type your name...." />
                                            </div>
                                            <div className="input-item input-item-email ltn__custom-icon">
                                                <input type="email" placeholder="Type your email...." />
                                            </div>
                                            <div className="input-item input-item-website ltn__custom-icon">
                                                <input type="text" name="website" placeholder="Type your website...." />
                                            </div>
                                            <label className="mb-0"><input type="checkbox" name="agree" /> Save my name, email, and website in this browser for the next time I comment.</label>
                                            <div className="btn-wrapper">
                                                <button className="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit">Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="liton_tab_details_1_3">
                                <div className="ltn__shop-details-tab-content-inner">
                                    {/* comment-area */}
                                    <div className="ltn__comment-area mb-30">
                                        <h4 className="title-2">Comments (5)</h4>
                                        <div className="ltn__comment-inner">
                                            <ul>
                                                <li>
                                                    <div className="ltn__comment-item clearfix">
                                                        <div className="ltn__commenter-img">
                                                            <img src="assets/img/testimonial/1.jpg" alt="Image" />
                                                        </div>
                                                        <div className="ltn__commenter-comment">
                                                            <h6><a href="#">Adam Smit</a></h6>
                                                            <span className="comment-date">20th May 2020</span>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, omnis fugit corporis iste magnam ratione.</p>
                                                            <a href="#" className="ltn__comment-reply-btn"><i className="fas fa-reply"></i>Reply</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="ltn__comment-item clearfix">
                                                        <div className="ltn__commenter-img">
                                                            <img src="assets/img/testimonial/3.jpg" alt="Image" />
                                                        </div>
                                                        <div className="ltn__commenter-comment">
                                                            <h6><a href="#">Adam Smit</a></h6>
                                                            <span className="comment-date">20th May 2020</span>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, omnis fugit corporis iste magnam ratione.</p>
                                                            <a href="#" className="ltn__comment-reply-btn"><i className="fas fa-reply"></i>Reply</a>
                                                        </div>
                                                    </div>
                                                    <ul>
                                                        <li>
                                                            <div className="ltn__comment-item clearfix">
                                                                <div className="ltn__commenter-img">
                                                                    <img src="assets/img/testimonial/4.jpg" alt="Image" />
                                                                </div>
                                                                <div className="ltn__commenter-comment">
                                                                    <h6><a href="#">Adam Smit</a></h6>
                                                                    <span className="comment-date">20th May 2020</span>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, omnis fugit corporis iste magnam ratione.</p>
                                                                    <a href="#" className="ltn__comment-reply-btn"><i className="fas fa-reply"></i>Reply</a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="ltn__comment-item clearfix">
                                                                <div className="ltn__commenter-img">
                                                                    <img src="assets/img/testimonial/1.jpg" alt="Image" />
                                                                </div>
                                                                <div className="ltn__commenter-comment">
                                                                    <h6><a href="#">Adam Smit</a></h6>
                                                                    <span className="comment-date">20th May 2020</span>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, omnis fugit corporis iste magnam ratione.</p>
                                                                    <a href="#" className="ltn__comment-reply-btn"><i className="fas fa-reply"></i>Reply</a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <div className="ltn__comment-item clearfix">
                                                        <div className="ltn__commenter-img">
                                                            <img src="assets/img/testimonial/2.jpg" alt="Image" />
                                                        </div>
                                                        <div className="ltn__commenter-comment">
                                                            <h6><a href="#">Adam Smit</a></h6>
                                                            <span className="comment-date">20th May 2020</span>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, omnis fugit corporis iste magnam ratione.</p>
                                                            <a href="#" className="ltn__comment-reply-btn"><i className="fas fa-reply"></i>Reply</a>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* comment-reply */}
                                    <div className="ltn__comment-reply-area ltn__form-box mb-60">
                                        <form action="#">
                                            <h4 className="title-2">Leave a Reply</h4>
                                            <div className="input-item input-item-textarea ltn__custom-icon">
                                                <textarea placeholder="Type your comments...."></textarea>
                                            </div>
                                            <div className="input-item input-item-name ltn__custom-icon">
                                                <input type="text" placeholder="Type your name...." />
                                            </div>
                                            <div className="input-item input-item-email ltn__custom-icon">
                                                <input type="email" placeholder="Type your email...." />
                                            </div>
                                            <div className="input-item input-item-website ltn__custom-icon">
                                                <input type="text" name="website" placeholder="Type your website...." />
                                            </div>
                                            <label className="mb-0"><input type="checkbox" name="agree" /> Save my name, email, and website in this browser for the next time I comment.</label>
                                            <div className="btn-wrapper">
                                                <button className="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit"><i className="far fa-comments"></i> Post Comment</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="liton_tab_details_1_4">
                                <div className="ltn__shop-details-tab-content-inner">
                                    <h4 className="title-2">Shipping policy for our store</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam voluptates rerum neque ea libero numquam officiis ipsum, consectetur ducimus dicta in earum repellat sunt ab odit laboriosam cupiditate ipsam, doloremque.</p>
                                    <ul>
                                        <li>1-2 business days (Typically by end of day)</li>
                                        <li><a href="#">30 days money back guaranty</a></li>
                                        <li>24/7 live support</li>
                                        <li>odio dignissim qui blandit praesent</li>
                                        <li>luptatum zzril delenit augue duis dolore</li>
                                        <li>te feugait nulla facilisi.</li>
                                    </ul>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, quia vel eligendi ipsam. Ea, quasi quam ducimus recusandae unde ipsa nam rem a minus tenetur quae sint voluptatem voluptate inventore.</p>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="liton_tab_details_1_5">
                                <div className="ltn__shop-details-tab-content-inner">

                                    <div className="table-1 mb-20">
                                        <table className="">
                                            <tbody>
                                                <tr>
                                                    <th>SIZE</th>
                                                    <th>XS</th>
                                                    <th>S</th>
                                                    <th>S/M</th>
                                                    <th>M</th>
                                                    <th>M/L</th>
                                                    <th>L</th>
                                                    <th>XL</th>
                                                </tr>
                                                <tr data-region="uk">
                                                    <th>UK</th>
                                                    <td>4</td>
                                                    <td>6 - 8</td>
                                                    <td>6 - 10</td>
                                                    <td>10 - 12</td>
                                                    <td>12 - 16</td>
                                                    <td>14 - 16</td>
                                                    <td>18</td>
                                                </tr>
                                                <tr data-region="eur">
                                                    <th>
                                                        <span className="mobile-show">EUR</span><span className="mobile-none">EUROPE</span>
                                                    </th>
                                                    <td>32</td>
                                                    <td>34 - 36</td>
                                                    <td>34 - 38</td>
                                                    <td>38 - 40</td>
                                                    <td>40 - 44</td>
                                                    <td>42 - 44</td>
                                                    <td>46</td>
                                                </tr>
                                                <tr data-region="usa">
                                                    <th>
                                                        <span>USA/</span><span className="mobile-none">CANADA</span><span className="mobile-show"> CA</span>
                                                    </th>
                                                    <td>0</td>
                                                    <td>2 - 4</td>
                                                    <td>2 - 6</td>
                                                    <td>6 - 8</td>
                                                    <td>8 - 12</td>
                                                    <td>10 - 12</td>
                                                    <td>14</td>
                                                </tr>
                                                <tr data-region="aus">
                                                    <th>AUS / NZ</th>
                                                    <td>4</td>
                                                    <td>6 - 8</td>
                                                    <td>6 - 10</td>
                                                    <td>10 - 12</td>
                                                    <td>12 - 16</td>
                                                    <td>14 - 16</td>
                                                    <td>18</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* SHOP DETAILS TAB AREA END */}

    {/* PRODUCT SLIDER AREA START */}
    <div className="ltn__product-slider-area ltn__product-gutter pb-70">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title-area ltn__section-title-2">
                        <h6 className="section-subtitle ltn__secondary-color">//  cars</h6>
                        <h1 className="section-title">Related Products<span>.</span></h1>
                    </div>
                </div>
            </div>
            <div className="row ltn__related-product-slider-one-active slick-arrow-1">
                {/* ltn__product-item */}
                <div className="col-lg-12">
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
                            <h2 className="product-title"><a href="product-details.html">Wheel Bearing Retainer</a></h2>
                            <div className="product-price">
                                <span>$149.00</span>
                                <del>$162.00</del>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ltn__product-item */}
                <div className="col-lg-12">
                    <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                            <a href="product-details.html"><img src="assets/img/product/8.png" alt="#" /></a>
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
                <div className="col-lg-12">
                    <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                            <a href="product-details.html"><img src="assets/img/product/9.png" alt="#" /></a>
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
                <div className="col-lg-12">
                    <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                            <a href="product-details.html"><img src="assets/img/product/10.png" alt="#" /></a>
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
                            <h2 className="product-title"><a href="product-details.html">Tail Light Lens</a></h2>
                            <div className="product-price">
                                <span>$78.00</span>
                                <del>$85.00</del>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ltn__product-item */}
                <div className="col-lg-12">
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
                <div className="col-lg-12">
                    <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                            <a href="product-details.html"><img src="assets/img/product/6.png" alt="#" /></a>
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
                                <span>$150.00</span>
                                <del>$180.00</del>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  */}
            </div>
        </div>
    </div>
    {/* PRODUCT SLIDER AREA END */}

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

export default ReUseProductDetails