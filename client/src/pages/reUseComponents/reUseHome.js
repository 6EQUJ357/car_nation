import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';
import "slick-carousel/slick/slick"
import $ from 'jquery';
//import "jquery.scrollup" 
import "jquery-ui-dist/jquery-ui"
import WOW from 'wowjs'; 
import 'wowjs/css/libs/animate.css';
import ScrollToTopButton from './ScrollToTopButton';
import Modal from "react-modal"; 
import ReUseFooterWithTimeSchedule from './reUseFooterWithTimeSchedule';




//import topbar & navbar 
import ReUseTopBar from './reUseTopBar'
import ReUseNavBar from './reUseNavBar'
import ReUseUtilizeCartMobileMenu from './reUseUtilizeCart&MobileMenu' 
// import ReUseBlog from './reUseBlog'

const ReUseHome = () => {
    
    // const [isOpen, setIsOpen] = useState(false); 

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
                    8. wow js init
                --------------------------------------------------------- */
                // Initialize WOW.js when the component mounts
                const wow = new WOW.WOW();
                wow.init();


       
                /* --------------------------------------------------------
                    17. Tab Product Slider One
                --------------------------------------------------------- */
                
                $('.ltn__tab-product-slider-one-active').not(".slick-initialized").slick({
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
                                breakpoint: 1200,
                                settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 1
                                }
                            },
                            {
                                breakpoint: 992,
                                settings: {
                                    arrows: false,
                                    dots: true,
                                    slidesToShow: 2,
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
                27. Brand Logo
            --------------------------------------------------------- */
       
            if($('.ltn__brand-logo-active').length >0){
                $('.ltn__brand-logo-active').not(".slick-initialized").slick({
                    rtl: false,
                    arrows: false,
                    dots: false,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 5,
                    slidesToScroll: 1,
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
                                slidesToScroll: 1,
                                arrows: false,
                            }
                        },
                        {
                            breakpoint: 580,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1
                            }
                        }
                    ]
                });
            };
        
             /* --------------------------------------------------------
            15. Slider One Active 
        --------------------------------------------------------- */
        $('.ltn__slide-one-active').slick({
            autoplay: false,
            autoplaySpeed: 2000,
            arrows: true,
            dots: true,
            fade: true,
            cssEase: 'linear',
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        arrows: false,
                        dots: true,
                    }
                }
            ]
        }).on('afterChange', function(){
            new WOW().init();
        });
        /* --------------------------------------------------------
            15-2. Slider Active 2
        --------------------------------------------------------- */
        $('.ltn__slide-active-2').slick({
            autoplay: false,
            autoplaySpeed: 2000,
            arrows: false,
            dots: true,
            fade: true,
            cssEase: 'linear',
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        arrows: false,
                        dots: true,
                    }
                }
            ]
        }).on('afterChange', function(){
            new WOW().init();
        });


                 /* --------------------------------------------------------
                20. Testimonial Slider - 2
            --------------------------------------------------------- */
                $('.ltn__testimonial-slider-2-active').not(".slick-initialized").slick({
                    arrows: true,
                    dots: false,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
                    nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
                    responsive: [
                        {
                            breakpoint: 1200,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 992,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 580,
                            settings: {
                                arrows: false,
                                dots: true,
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]
                });

                /* --------------------------------------------------------
                    26. Image Slide - 4 
                --------------------------------------------------------- */
                $('.ltn__image-slider-4-active').not(".slick-initialized").slick({
                    rtl: false,
                    arrows: true,
                    dots: false,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '0px',
                    prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
                    nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
                    responsive: [
                        {
                            breakpoint: 1200,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 992,
                            settings: {
                                arrows: false,
                                dots: true,
                                slidesToShow: 2,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                arrows: false,
                                dots: true,
                                slidesToShow: 2,
                                slidesToScroll: 1,
                            }
                        },
                        {
                            breakpoint: 580,
                            settings: {
                                arrows: false,
                                dots: true,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                            }
                        }
                    ]
                });


                /* --------------------------------------------------------
                    34. scrollUp active
                -------------------------------------------------------- */
                // $.scrollUp({
                //     scrollText: '<i class="fa fa-angle-up"></i>',
                //     easingType: 'linear',
                //     scrollSpeed: 900,
                //     animation: 'fade'
                // });

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

                 /* ---------------------------------------------------------
                    datepicker
                --------------------------------------------------------- */

                // $('.ltn__datepicker .input-group.date').datepicker({
                //     format: 'mm/dd/yyyy',
                //     /* format: 'mm/dd/yyyy', */
                //     /* format: 'yyyy/dd/mm', */
                // });

                /* --------------------------------------------------------
                    11. Default active and hover item active
                --------------------------------------------------------- */
                var ltn__active_item = $('.ltn__feature-item-6, .ltn__our-journey-wrap ul li, .ltn__pricing-plan-item')
                ltn__active_item.mouseover(function() {
                    ltn__active_item.removeClass('active');
                    $(this).addClass('active');
                });

                 /* --------------------------------------------------------
                    Newsletter Popup
                -------------------------------------------------------- */
                
                 //$('#ltn__newsletter_popup').modal('show');

                //  setIsOpen(true);


                $(window).on('load',function(){
                    /*-----------------
                        preloader
                    ------------------*/
                    if($('#preloader').length){
                        var preLoder = $("#preloader");
                        preLoder.fadeOut(1000);
            
                    };
            
            
                });

                
    
            });
        
                  
        })($);
    },[])

    // const closeModal = () => {
    //     setIsOpen(false);
    //   };
    


  return (
    <div>

       {/* [if lte IE 9]
        <p className="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
       [endif] */}

        {/* Add your site or application content here */}

        {/* Body main wrapper start */}
        <div className="body-wrapper">

            {/* HEADER AREA START (header-4) */}
                <header className="ltn__header-area ltn__header-4 ltn__header-6 ltn__header-transparent gradient-color-2">
                
                {/* ltn__header-top-area start */}
                <ReUseTopBar />
                {/* ltn__header-top-area end */}

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

        
            {/* SLIDER AREA START (slider-4) */}
                <div className="ltn__slider-area ltn__slider-4 " >
                    <div className="ltn__slide-one-active----- slick-slide-arrow-1----- slick-slide-dots-1----- arrow-white----- ltn__slide-animation-active" >
                    {/* ltn__slide-item */}
                        <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-4 text-color-white bg-image" data-bs-bg="assets/img/home/homelogo1.jpg" style={{backgroundPosition : "top"}}>
                            <div className="ltn__slide-item-inner text-center">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12 align-self-center">
                                            <div className="slide-item-info">
                                                <div className="slide-item-info-inner ltn__slide-animation">
                                                    <h6 className="slide-sub-title  animated text-uppercase" style={{textShadow:"3px 3px 5px black", fontSize:"20px"}}>//  any kind of car you will get  //</h6>
                                                    <h1 className="slide-title animated " style={{textShadow:"5px 5px 10px black"}}>Professional Car Service Provider</h1>
                                                    <div className="btn-wrapper animated">
                                                        <Link to="/service" className="theme-btn-1 btn btn-effect-1">OUR SERVICES</Link> 
                                                        <Link to="/about" className="btn btn-transparent btn-effect-2 white-color">LEARN MORE</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="ltn__slide-animation">
                                                <div className="slide-item-img">
                                                    <Link to=""><img src = "assets/img/slider/31.png" alt="#" /></Link>
                                                </div>
                                            </div> */}
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
               
                 {/*    <div className="container">
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
                                    {/* <div className="tab-content">
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
                                                            <div className="slider-range"></div>
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
                                                    </div>  
                                                    <div className="car-price-filter-range col-lg-12">
                                                        <div className="btn-wrapper text-center mt-0">
                                                            <button type="submit" className="btn theme-btn-1 btn-effect-1 text-uppercase">Submit Request</button>
                                                        {/* <a href="shop-car-right-sidebar.html" className="btn theme-btn-1 btn-effect-1 text-uppercase">Search Inventory</a> 
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div> 
                    </div> */}
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
                                        <h3><Link to="/service">All Kind Brand</Link></h3>
                                        <p>We provide top-notch car services for all leading car brands, ensuring expertise and reliability across the automotive spectrum.</p>
                                        <Link className="ltn__service-btn" to="/service">Read More</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-12">
                                <div className="ltn__feature-item ltn__feature-item-6 active">
                                    <div className="ltn__feature-icon">
                                        <span><i className="icon-mechanic"></i></span>
                                    </div>
                                    <div className="ltn__feature-info">
                                        <h3><Link to="/service">Expert Mechanics</Link></h3>
                                        <p>Experience peace of mind with our team of expert mechanics, who bring their vast knowledge and skill to deliver top-notch automotive services.</p>
                                        <Link className="ltn__service-btn" to="/service">Read More</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-12">
                                <div className="ltn__feature-item ltn__feature-item-6">
                                    <div className="ltn__feature-icon">
                                        <span><i className="icon-repair"></i></span>
                                    </div>
                                    <div className="ltn__feature-info">
                                        <h3><Link to="/service">Repair Vehicales</Link></h3>
                                        <p>We specialize in repairing vehicles with precision and care, providing efficient solutions to get you back on the road with confidence.</p>
                                        <Link className="ltn__service-btn" to="/service">Read More</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-12">
                                <div className="ltn__feature-item ltn__feature-item-6">
                                    <div className="ltn__feature-icon">
                                        <span><i className="icon-car-parts-9"></i></span>
                                    </div>
                                    <div className="ltn__feature-info">
                                        <h3><Link to="/service">Paint & Costume</Link></h3>
                                        <p>Elevate your ride with our expert paint and customization services, adding a touch of uniqueness and style to your vehicle.</p>
                                        <Link className="ltn__service-btn" to="/service">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* FEATURE AREA END */}

            {/* CALL TO ACTION START (call-to-action-4) */}
                <div className="ltn__call-to-action-area ltn__call-to-action-4 bg-image pt-115 pb-120"  data-bs-bg="assets/img/home/home1.jpeg"> 
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="call-to-action-inner call-to-action-inner-4 text-center">
                                    <div className="section-title-area ltn__section-title-2"> 
                                        <h6 className="section-subtitle ltn__secondary-color">//  any question you have  //</h6>
                                        <h1 className="section-title white-color">+1 (214) 597-4922</h1>
                                    </div>
                                    <div className="btn-wrapper">
                                        <a href="tel:+1 2145974922" className="theme-btn-1 btn btn-effect-1">MAKE A CALL</a>
                                        <Link to="/contact" className="btn btn-transparent btn-effect-4 white-color">CONTACT US</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ltn__call-to-4-img-1">
                        <img src = "assets/img/bg/12.png" alt="#" />
                    </div>
                    <div className="ltn__call-to-4-img-2">
                        <img src = "assets/img/bg/11.png" alt="#" />
                    </div>
                </div>
            {/* CALL TO ACTION END */}
            

            {/* PRODUCT TAB AREA START (product-item-3) */}
                <div className="ltn__product-tab-area ltn__product-gutter pt-115 pb-70">

                {/* CALL TO ACTION START (call-to-action-5) */}
                <div className="call-to-action-area call-to-action-5 bg-image bg-overlay-theme-90 pt-40 pb-25" data-bs-bg="assets/img/bg/13.jpg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="call-to-action-inner call-to-action-inner-5 text-center">
                                    <h2 className="white-color text-decoration">Make <Link to="/appointment">An Appointment</Link></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* CALL TO ACTION END */}

                <div className="ltn__service-area section-bg-1 pt-115 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-area ltn__section-title-2 text-center">
                                <h6 className="section-subtitle ltn__secondary-color">// Service</h6>
                                <h1 className="section-title">What We Do<span>.</span></h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="ltn__service-item-2 white-bg">
                                <div className="service-item-icon">
                                    <i className="icon-mechanic"></i>
                                </div>
                                <div className="service-item-brief">
                                    <h6 className="ltn__secondary-color">// General Maintenance</h6>
                                    <h3><Link to="/generalmaintenance">designed to address routine vehicle needs</Link></h3>
                                        <ul>
                                            <li><span>//</span> Oil Change </li>
                                            <li><span>//</span>  Filter Replacements </li>
                                            <li><span>//</span>  Fluid Checks and Top-Ups</li>
                                            <li><span>//</span> Battery Inspection</li>
                                        </ul>

                                        <div className="ltn__blog-meta-btn">
                                            <div className="ltn__blog-meta">
                                                <ul>
                                                    <li className="ltn__blog-date"><i className="fas fa-arrow-right"></i></li>
                                                </ul>
                                            </div>

                                            <div className="ltn__blog-btn">
                                                <Link to="/generalmaintenance">Read more</Link>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="ltn__service-item-2 white-bg">
                                <div className="service-item-icon">
                                    <i className="icon-maintenance-1"></i>
                                </div>
                                <div className="service-item-brief">
                                    <h6 className="ltn__secondary-color">// wheel and Tire</h6>
                                    <h3><Link to="/wheeltireservices">Ensuring Safety and Performance on the Road</Link></h3>
                                        <ul>
                                            <li><span>//</span> Tire puncher with cleaning</li>
                                            <li><span>//</span> Tire Customization</li>
                                            <li><span>//</span> Tire check & fixing</li>
                                            <li><span>//</span> Tire change & color</li>
                                        </ul>

                                        <div className="ltn__blog-meta-btn">
                                            <div className="ltn__blog-meta">
                                                <ul>
                                                    <li className="ltn__blog-date"><i className="fas fa-arrow-right"></i></li>
                                                </ul>
                                            </div>

                                            <div className="ltn__blog-btn">
                                                <Link to="/wheeltireservices">Read more</Link>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="ltn__service-item-2 white-bg">
                                <div className="service-item-icon">
                                    <i className="icon-car-parts-3"></i> 
                                </div>
                                <div className="service-item-brief">
                                    <h6 className="ltn__secondary-color">// Brake Services</h6>
                                    <h3><Link to="/breakingservices">Ensuring Safety and Performance on the Road</Link></h3>
                                        <ul>
                                            <li><span>//</span> Efficient brake repairs</li>
                                            <li><span>//</span> Reliable brake solutions</li>
                                            <li><span>//</span> Expert brake maintenance</li>
                                            <li><span>//</span> Trustworthy brake specialists</li>
                                        </ul>

                                        <div className="ltn__blog-meta-btn">
                                            <div className="ltn__blog-meta">
                                                <ul>
                                                    <li className="ltn__blog-date"><i className="fas fa-arrow-right"></i></li>
                                                </ul>
                                            </div>

                                            <div className="ltn__blog-btn">
                                                <Link to="/breakingservices">Read more</Link>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="ltn__service-item-2 white-bg">
                                <div className="service-item-icon">
                                    <i className="icon-car-parts"></i>
                                </div>
                                <div className="service-item-brief">
                                    <h6 className="ltn__secondary-color">// Engine Repair</h6>
                                    <h3><Link to="/enginerepairs">Restoring  Performance to Your Vehicle</Link></h3>
                                        <ul>
                                            <li><span>//</span> Expert engine diagnostics</li>
                                            <li><span>//</span> Reliable engine repair</li>
                                            <li><span>//</span> Skilled engine technicians</li>
                                            <li><span>//</span> Efficient engine troubleshooting</li>
                                        </ul>

                                        <div className="ltn__blog-meta-btn">
                                            <div className="ltn__blog-meta">
                                                <ul>
                                                    <li className="ltn__blog-date"><i className="fas fa-arrow-right"></i></li>
                                                </ul>
                                            </div>

                                            <div className="ltn__blog-btn">
                                                <Link to="/enginerepairs">Read more</Link>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="ltn__service-item-2 white-bg">
                                <div className="service-item-icon">
                                    <i className="icon-repair"></i>
                                </div>
                                <div className="service-item-brief">
                                    <h6 className="ltn__secondary-color">// Transmission Services</h6>
                                    <h3><Link to="/transmissionservices">Keeping Your Vehicle Shifting Smoothly</Link></h3>
                                        <ul>
                                            <li><span>//</span>Smooth transmission operation</li>
                                            <li><span>//</span> Expert transmission maintenance</li>
                                            <li><span>//</span> Reliable transmission repairs</li>
                                            <li><span>//</span> Skilled transmission technicians</li>
                                        </ul>

                                        <div className="ltn__blog-meta-btn">
                                            <div className="ltn__blog-meta">
                                                <ul>
                                                    <li className="ltn__blog-date"><i className="fas fa-arrow-right"></i></li>
                                                </ul>
                                            </div>

                                            <div className="ltn__blog-btn">
                                                <Link to="/transmissionservices">Read more</Link>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="ltn__service-item-2 white-bg">
                                <div className="service-item-icon">
                                    <i className="icon-automobile"></i>
                                </div>
                                <div className="service-item-brief">
                                    <h6 className="ltn__secondary-color">//  Electrical System Repairs</h6>
                                    <h3><Link to="/electricalsystemrepairs">Restoring Power and Efficiency to Your Vehicle</Link></h3>
                                        <ul>
                                            <li><span>//</span> Reliable electrical system solutions</li>
                                            <li><span>//</span> Expert electrical repairs</li>
                                            <li><span>//</span> Efficient electrical troubleshooting</li>
                                            <li><span>//</span> Skilled electrical technicians</li>
                                        </ul>

                                        <div className="ltn__blog-meta-btn">
                                            <div className="ltn__blog-meta">
                                                <ul>
                                                    <li className="ltn__blog-date"><i className="fas fa-arrow-right"></i></li>
                                                </ul>
                                            </div>

                                            <div className="ltn__blog-btn">
                                                <Link to="/electricalsystemrepairs">Read more</Link>
                                            </div>
                                        </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="ltn__service-item-2 white-bg">
                                <div className="service-item-icon">
                                    <i className="icon-car-parts-1"></i>
                                </div>
                                <div className="service-item-brief">
                                    <h6 className="ltn__secondary-color">//  Heating and Cooling Systems</h6>
                                    <h3><Link to="/heatingcoolingsystem">Comfortable Climate Control for Your Vehicle</Link></h3>
                                        <ul>
                                            <li><span>//</span> Effective climate control solutions</li>
                                            <li><span>//</span> Expert heating and cooling</li>
                                            <li><span>//</span> Reliable HVAC services</li>
                                            <li><span>//</span> Skilled temperature regulation</li>
                                        </ul>

                                        <div className="ltn__blog-meta-btn">
                                            <div className="ltn__blog-meta">
                                                <ul>
                                                    <li className="ltn__blog-date"><i className="fas fa-arrow-right"></i></li>
                                                </ul>
                                            </div>

                                            <div className="ltn__blog-btn">
                                                <Link to="/heatingcoolingsystem">Read more</Link>
                                            </div>
                                        </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="ltn__service-item-2 white-bg">
                                <div className="service-item-icon">
                                    <i className="icon-car-parts-2"></i>
                                </div>
                                <div className="service-item-brief">
                                    <h6 className="ltn__secondary-color">// Suspension and Steering</h6>
                                    <h3><Link to="/suspensionsteering">Smooth and Controlled Driving Experience</Link></h3>
                                        <ul>
                                            <li><span>//</span> Smooth handling and control</li>
                                            <li><span>//</span> Expert suspension services</li>
                                            <li><span>//</span> Reliable steering solutions</li>
                                            <li><span>//</span> Skilled suspension specialists</li>
                                        </ul>

                                        <div className="ltn__blog-meta-btn">
                                            <div className="ltn__blog-meta">
                                                <ul>
                                                    <li className="ltn__blog-date"><i className="fas fa-arrow-right"></i></li>
                                                </ul>
                                            </div>

                                            <div className="ltn__blog-btn">
                                                <Link to="/suspensionsteering">Read more</Link>
                                            </div>
                                        </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="ltn__service-item-2 white-bg">
                                <div className="service-item-icon">
                                    <i className="icon-car-parts-4"></i>
                                </div>
                                <div className="service-item-brief">
                                    <h6 className="ltn__secondary-color">//  Exhaust System Repairs</h6>
                                    <h3><Link to="/exhaustsystemrepairs">Enhancing Performance and Reducing Emissions</Link></h3>
                                        <ul>
                                            <li><span>//</span> Efficient exhaust system repairs</li>
                                            <li><span>//</span> Reliable muffler solutions</li>
                                            <li><span>//</span> Expert exhaust maintenance</li>
                                            <li><span>//</span> Skilled emission control technicians</li>
                                        </ul>

                                        <div className="ltn__blog-meta-btn">
                                            <div className="ltn__blog-meta">
                                                <ul>
                                                    <li className="ltn__blog-date"><i className="fas fa-arrow-right"></i></li>
                                                </ul>
                                            </div>

                                            <div className="ltn__blog-btn">
                                                <Link to="/exhaustsystemrepairs">Read more</Link>
                                            </div>
                                        </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="ltn__service-item-2 white-bg">
                                <div className="service-item-icon">
                                    <i className="icon-car-parts-5"></i>
                                </div>
                                <div className="service-item-brief">
                                    <h6 className="ltn__secondary-color">//  Diagnostics and Troubleshooting</h6>
                                    <h3><Link to="/diagnosticsTroubleShooting">Identifying and Resolving Vehicle Issues</Link></h3>
                                        <ul>
                                            <li><span>//</span> Comprehensive diagnostic solutions</li>
                                            <li><span>//</span> Expert troubleshooting services</li>
                                            <li><span>//</span> Reliable vehicle diagnostics</li>
                                            <li><span>//</span> Skilled problem-solving technicians</li>
                                        </ul>

                                        <div className="ltn__blog-meta-btn">
                                            <div className="ltn__blog-meta">
                                                <ul>
                                                    <li className="ltn__blog-date"><i className="fas fa-arrow-right"></i></li>
                                                </ul>
                                            </div>

                                            <div className="ltn__blog-btn">
                                                <Link to="/diagnosticsTroubleShooting">Read more</Link>
                                            </div>
                                        </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
                 {/*   <div className="container">
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
                                            {/* ltn__product-item 
                                                <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                                                    <div className="ltn__product-item ltn__product-item-3 text-center">
                                                        <div className="product-img">
                                                            <Link to="#"><img src = "assets/img/home/mercedes benz.jpeg" alt="#" /></Link>
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
                                                            <h2 className="product-title"><Link to="productdetails">Mercedes A-className</Link></h2>
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
                                            {/* ltn__product-item
                                                <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                                                    <div className="ltn__product-item ltn__product-item-3 text-center">
                                                        <div className="product-img">
                                                            <Link to="#"><img src = "assets/img/home/bmw.jpeg" alt="#" /></Link>
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
                                                            <h2 className="product-title"><Link to="#">BMW 4 Series</Link></h2>
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
                                            {/* ltn__product-item
                                                <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                                                    <div className="ltn__product-item ltn__product-item-3 text-center">
                                                        <div className="product-img">
                                                            <Link to="productdetails"><img src = "assets/img/home/tesla.avif" alt="#" /></Link>
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
                                                            <h2 className="product-title"><Link to="#">Tesla Model S</Link></h2>
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
                                            {/* ltn__product-item 
                                                <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                                                    <div className="ltn__product-item ltn__product-item-3 text-center">
                                                        <div className="product-img">
                                                            <Link to="#"><img src = "assets/img/home/toyota.jpeg" alt="#" /></Link>
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
                                                            <h2 className="product-title"><Link to="#">Toyota Corolla </Link></h2>
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
                                            {/* ltn__product-item 
                                                <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                                                    <div className="ltn__product-item ltn__product-item-3 text-center">
                                                        <div className="product-img">
                                                            <Link to="#"><img src = "assets/img/home/jaguar.jpeg" alt="#" /></Link>
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
                                                            <h2 className="product-title"><Link to="#">Jaguar F-type </Link></h2>
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
                                            
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="liton_tab_2_2">
                                        <div className="ltn__product-tab-content-inner">
                                            <div className="row ltn__tab-product-slider-one-active slick-arrow-1">
                                            {/* ltn__product-item 
                                                <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                                                    <div className="ltn__product-item ltn__product-item-3 text-center">
                                                        <div className="product-img">
                                                            <Link to="#"><img src = "assets/img/home/nissan.jpeg" alt="#" /></Link>
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
                                                            <h2 className="product-title"><Link to="#">Nissan Skyline</Link></h2>
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
                                            {/* ltn__product-item
                                                <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                                                    <div className="ltn__product-item ltn__product-item-3 text-center">
                                                        <div className="product-img">
                                                            <Link to="#"><img src = "assets/img/home/honda.jpeg" alt="#" /></Link>
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
                                                            <h2 className="product-title"><Link to="#">Hyundai Tucson</Link></h2>
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
                                            {/* ltn__product-item 
                                                <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                                                    <div className="ltn__product-item ltn__product-item-3 text-center">
                                                        <div className="product-img">
                                                            <Link to="#"><img src = "assets/img/home/ford.jpeg" alt="#" /></Link>
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
                                                            <h2 className="product-title"><Link to="#">Ford Ranger</Link></h2>
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
                                            {/* ltn__product-item 
                                                <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                                                    <div className="ltn__product-item ltn__product-item-3 text-center">
                                                        <div className="product-img">
                                                            <Link to="#"><img src = "assets/img/home/volks wagan.jpeg" alt="#" /></Link>
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
                                                            <h2 className="product-title"><Link to="#">Volkswagen Polo</Link></h2>
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
                                            {/* ltn__product-item 
                                                <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                                                    <div className="ltn__product-item ltn__product-item-3 text-center">
                                                        <div className="product-img">
                                                            <Link to="#"><img src = "assets/img/home/hondafeed.jpeg" alt="#" /></Link>
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
                                                            <h2 className="product-title"><Link to="#">Honda Freed</Link></h2>
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
                                            
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div> */}
                </div>
            {/* PRODUCT TAB AREA END */}

             {/* SERVICE AREA START (Service 1) */}
            
            {/* SERVICE AREA END */}
            

            {/* BANNER AREA START */}
                <div className="ltn__banner-area pb-90">
                    {/* <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="ltn__banner-item">
                                    <div className="ltn__banner-img">
                                        <Link to=""><img src = "assets/img/home/bmw1.jpeg" alt="Banner Image" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="ltn__banner-item">
                                    <div className="ltn__banner-img">
                                        <Link to=""><img src = "assets/img/home/toyota1.jpeg" alt="Banner Image" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            {/* BANNER AREA END */}

            {/* VIDEO AREA START */}
                <div className="ltn__video-popup-area ltn__video-popup-margin">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                            <div className="ltn__video-bg-img ltn__video-popup-height-500 bg-overlay-black-50-- bg-image ml-30"  data-bs-bg="assets/img/home/videocover.webp">
                                <a className="ltn__video-icon-2 ltn__video-icon-2-border---" href="https://www.youtube.com/embed/n41eTtRRqus" data-rel="lightcase:myCollection" target='_blank' >
                                    <i className="fa fa-play"></i>
                                </a>
                            </div>
                                {/* <div className="ltn__video-bg-img ltn__video-popup-height-600 bg-overlay-black-10-- bg-image" data-bs-bg="https://images.pexels.com/photos/3807329/pexels-photo-3807329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2">
                                    <a className="ltn__video-icon-2 ltn__video-icon-2-border" href="https://www.youtube.com/embed/n41eTtRRqus" target='_blank' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                                        <i className="fa fa-play"></i>
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            {/* VIDEO AREA END*/}

            {/* BRAND LOGO AREA START */}
                <div className="ltn__brand-logo-area ltn__brand-logo-1 bg-image bg-overlay-theme-black-90 pt-290 pb-110 plr--9" data-bs-bg="assets/img/home/black.jpg">
                    <div className="container-fluid">
                        <div className="row ltn__brand-logo-active">
                            <div className="col-lg-12">
                                <div className="ltn__brand-logo-item">
                                    <img src = "assets/img/brand-logo/b1.png" alt="Brand Logo" />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="ltn__brand-logo-item">
                                    <img src = "assets/img/brand-logo/b2.png" alt="Brand Logo" />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="ltn__brand-logo-item">
                                    <img src = "assets/img/brand-logo/b3.png" alt="Brand Logo" />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="ltn__brand-logo-item">
                                    <img src = "assets/img/brand-logo/b4.png" alt="Brand Logo" />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="ltn__brand-logo-item">
                                    <img src = "assets/img/brand-logo/b5.png" alt="Brand Logo" />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="ltn__brand-logo-item">
                                    <img src = "assets/img/brand-logo/b3.png" alt="Brand Logo" />
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
                                        <img src = "assets/img/home/terminal1.jpeg" alt="#" />
                                    </div>
                                    <div className="ltn__testimoni-info">
                                        <p>I am writing to express my utmost satisfaction with the car service I recently received from your company. From start to finish, the entire experience exceeded my expectations, and I wanted to share my feedback with you.</p>
                                        <div className="ltn__testimoni-info-inner">
                                            <div className="ltn__testimoni-img">
                                                <img src = "assets/img/home/terminal1.jpeg" alt="#" />
                                            </div>
                                            <div className="ltn__testimoni-name-designation">
                                                <h4>Jacob William</h4>
                                                {/* <h6>Founder, Browni Co.</h6> */}
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
                                        <img src = "assets/img/home/terminal2.jpeg" alt="#" />
                                    </div>
                                    <div className="ltn__testimoni-info">
                                        <p>First and foremost, the reliability of your service was impeccable. Your driver arrived precisely on time for both my pick-up and drop-off.I greatly appreciated the punctuality and professionalism displayed by your driver.</p>
                                        <div className="ltn__testimoni-info-inner">
                                            <div className="ltn__testimoni-img">
                                                <img src = "assets/img/home/terminal2.jpeg" alt="#" />
                                            </div>
                                            <div className="ltn__testimoni-name-designation">
                                                <h4>Ethan James</h4>
                                                {/* <h6>Admin</h6> */}
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
                                        <img src = "assets/img/home/terminal3.jpeg" alt="#" />
                                    </div>
                                    <div className="ltn__testimoni-info">
                                        <p>I would like to extend my gratitude to your entire team for delivering such an outstanding car service. I will definitely recommend your services to friends, family. Thank you for making my journey comfortable, safe, and hassle-free.</p>
                                        <div className="ltn__testimoni-info-inner">
                                            <div className="ltn__testimoni-img">
                                                <img src = "assets/img/home/terminal3.jpeg" alt="#" />
                                            </div>
                                            <div className="ltn__testimoni-name-designation">
                                                <h4>Sunitha Uram</h4>
                                                {/* <h6>Founder, Browni Co.</h6> */}
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
                                        <img src = "assets/img/home/terminal4.webp" alt="#" />
                                    </div>
                                    <div className="ltn__testimoni-info">
                                        <p> From the moment I made the reservation until the end of my journey, your staff was prompt, friendly, and accommodating. They addressed all my queries promptly and handled my special requests with care. It made a difference in my overall experience.</p>
                                        <div className="ltn__testimoni-info-inner">
                                            <div className="ltn__testimoni-img">
                                                <img src = "assets/img/home/terminal4.webp" alt="#" />
                                            </div>
                                            <div className="ltn__testimoni-name-designation">
                                                <h4>Liam Mason</h4>
                                                {/* <h6>Officer</h6> */}
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
                                        <img src = "assets/img/home/terminal5.webp" alt="#" />
                                    </div>
                                    <div className="ltn__testimoni-info">
                                        <p>the pricing was fair and transparent, as outlined during the reservation process. I appreciate the absence of any unexpected or hidden charges. It's refreshing to deal with a car service that values transparency and provides a great value for the price paid.</p>
                                        <div className="ltn__testimoni-info-inner">
                                            <div className="ltn__testimoni-img">
                                                <img src = "assets/img/home/terminal5.webp" alt="#" />
                                            </div>
                                            <div className="ltn__testimoni-name-designation">
                                                <h4>Noah Alexander</h4>
                                                {/* <h6>Professor</h6> */}
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
                    {/* <div className="container-fluid">
                        <div className="row ltn__image-slider-4-active slick-arrow-1 slick-arrow-1-inner ltn__no-gutter-all">
                            <div className="col-lg-12">
                                <div className="ltn__img-slide-item-4">
                                    <a href="assets/img/home/bmw2.webp" data-rel="lightcase:myCollection" target='_blank'>
                                        <img src = "assets/img/home/bmw2.webp" alt="Image" />
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
                                    <a href="assets/img/home/benz.jpeg" data-rel="lightcase:myCollection" target='_blank'>
                                        <img src = "assets/img/home/benz.jpeg" alt="Image" />
                                    </a>
                                    <div className="ltn__img-slide-info">
                                        <div className="ltn__img-slide-info-brief">
                                            <h6>Sports Car</h6>
                                            <h1><a href="portfolio-details.html">Mercedes Pro Street Car</a></h1>
                                        </div>
                                        <div className="btn-wrapper">
                                            <a href="portfolio-details.html" className="btn theme-btn-1 btn-effect-1 text-uppercase">Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="ltn__img-slide-item-4">
                                    <a href="assets/img/home/tesla1.jpeg" data-rel="lightcase:myCollection" target='_blank'>
                                        <img src = "assets/img/home/tesla1.jpeg" alt="Image" />
                                    </a>
                                    <div className="ltn__img-slide-info">
                                        <div className="ltn__img-slide-info-brief">
                                            <h6>Sports Car</h6>
                                            <h1><a href="portfolio-details.html">Tesla Pro Street Car</a></h1>
                                        </div>
                                        <div className="btn-wrapper">
                                            <a href="portfolio-details.html" className="btn theme-btn-1 btn-effect-1 text-uppercase">Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="ltn__img-slide-item-4">
                                    <a href="assets/img/home/jaguarpro.jpeg" data-rel="lightcase:myCollection" target='_blank'>
                                        <img src = "assets/img/home/jaguarpro.jpeg" alt="Image" />
                                    </a>
                                    <div className="ltn__img-slide-info">
                                        <div className="ltn__img-slide-info-brief">
                                            <h6>Sports Car</h6>
                                            <h1><a href="portfolio-details.html">Jaguar Pro Street Car</a></h1>
                                        </div>
                                        <div className="btn-wrapper">
                                            <a href="portfolio-details.html" className="btn theme-btn-1 btn-effect-1 text-uppercase">Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="ltn__img-slide-item-4">
                                    <a href="assets/img/home/toyotapro.jpeg" data-rel="lightcase:myCollection" target='_blank'>
                                        <img src = "assets/img/home/toyotapro.jpeg" alt="Image" />
                                    </a>
                                    <div className="ltn__img-slide-info"> 
                                        <div className="ltn__img-slide-info-brief">
                                            <h6>Sports Car</h6>
                                            <h1><a href="portfolio-details.html">Toyota Pro Street Car</a></h1>
                                        </div>
                                        <div className="btn-wrapper">
                                            <a href="portfolio-details.html" className="btn theme-btn-1 btn-effect-1 text-uppercase">Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            {/* IMAGE SLIDER AREA END */}

            {/* BLOG AREA START (blog-4) */}
                {/* <div className="ltn__blog-area pt-85 pb-90">
                    <ReUseBlog />
                </div> */}
            {/* BLOG AREA END */}

            <div className="contact-feature-area before-bg-bottom mb--30">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="ltn__contact-feature-item">
                                <div className="ltn__contact-feature-icon">
                                    <img src = "assets/img/icons/7.png" alt="Icon Image" />
                                </div>
                                <div className="ltn__contact-feature-info">
                                    <a href="tel:+1 2145974922">
                                        <span className="h6" style={{color:"orangered"}}>+1 (214) 597-4922</span><br />
                                        <span className="h2">Make A Call</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="ltn__contact-feature-item">
                                <div className="ltn__contact-feature-icon">
                                    <img src = "assets/img/icons/8.png" alt="Icon Image" />
                                </div>
                                <div className="ltn__contact-feature-info">
                                    <a href="mailto:Service@carnationautorepair.com">
                                        <span className="h6" style={{color:"orangered"}}>Service@carnationautorepair.com</span><br />
                                        <span className="h2">Support Mail</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="ltn__contact-feature-item">
                                <div className="ltn__contact-feature-icon">
                                    <img src = "assets/img/icons/9.png" alt="Icon Image" />
                                </div>
                                <div className="ltn__contact-feature-info">
                                    <Link to="/contact">
                                        <span className="h6" style={{color:"orangered"}}>3245 East University, TX 75069</span><br />
                                        <span className="h2">Office Address</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
                                                        <img src = "assets/img/product/4.png" alt="#" />
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
                                                                {/* <li><a href="#" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                                                                <li><a href="#" title="Twitter"><i className="fab fa-twitter"></i></a></li>
                                                                <li><a href="#" title="Linkedin"><i className="fab fa-linkedin"></i></a></li>
                                                                <li><a href="#" title="Instagram"><i className="fab fa-instagram"></i></a></li> */}
                                                                <li><a href="#" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                                                                <li><a href="#" title="Twitter"><i className="fab fa-twitter"></i></a></li>                                               
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
                                                        <img src = "assets/img/product/1.png" alt="#" />
                                                    </div>
                                                    <div className="modal-product-info">
                                                        <h5><Link to="#">Brake Conversion Kit</Link></h5>
                                                        <p className="added-cart"><i className="fa fa-check-circle"></i>  Successfully added to your Cart</p>
                                                        <div className="btn-wrapper">
                                                            <Link to="/cart" className="theme-btn-1 btn btn-effect-1">View Cart</Link>
                                                            <Link to="/checkout" className="theme-btn-2 btn btn-effect-2">Checkout</Link>
                                                        </div>
                                                    </div>
                                                    {/* additional-info */}
                                                    <div className="additional-info d-none">
                                                        <p>We want to give you <b>10% discount</b> for your first order, <br />  Use discount code at checkout</p>
                                                        <div className="payment-method">
                                                            <img src = "assets/img/icons/payment.png" alt="#" />
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
                                                        <img src = "assets/img/product/7.png" alt="#" />
                                                    </div>
                                                    <div className="modal-product-info">
                                                        <h5><Link to="#">Brake Conversion Kit</Link></h5>
                                                        <p className="added-cart"><i className="fa fa-check-circle"></i>  Successfully added to your Wishlist</p>
                                                        <div className="btn-wrapper">
                                                            <Link to="/wishlist" className="theme-btn-1 btn btn-effect-1">View Wishlist</Link>
                                                        </div>
                                                    </div>
                                                    {/* additional-info */}
                                                    <div className="additional-info d-none">
                                                        <p>We want to give you <b>10% discount</b> for your first order, <br />  Use discount code at checkout</p>
                                                        <div className="payment-method">
                                                            <img src = "assets/img/icons/payment.png" alt="#" />
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
                {/* <div className="modal fade" id="ltn__newsletter_popup" tabIndex="-1">
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
                                                <img src = "assets/img/home/newsletter.jpg" alt="#" />
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
                                        additional-info
                                            <div className="additional-info d-none">
                                                <p>We want to give you <b>10% discount</b> for your first order, <br />  Use discount code at checkout</p>
                                                <div className="payment-method">
                                                    <img src = "assets/img/icons/payment.png" alt="#" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        {/* MODAL AREA END */}

        {/* MODAL AREA START (Newsletter Modal) */}
            <div className="ltn__modal-area ltn__newsletter-popup-1 d-none">
                {/* <div className="modal fade" id="ltn__newsletter_popup---" tabIndex="-1">
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
                                        additional-info
                                            <div className="additional-info d-none">
                                                <p>We want to give you <b>10% discount</b> for your first order, <br />  Use discount code at checkout</p>
                                                <div className="payment-method">
                                                    <img src = "assets/img/icons/payment.png" alt="#" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6">
                                            <div className="ltn__newsletter-popup-img">
                                                <img src = "assets/img/banner/banner-2.jpg" alt="#" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        {/* MODAL AREA END */}

        {/* MODAL AREA START (Newsletter Modal) */}
       
            <div className="ltn__modal-area ltn__newsletter-popup-2 d-none">
                {/* <div className="modal fade" id="ltn__newsletter_popup----" tabIndex="-1">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true"> &times; </span>
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
                                        additional-info
                                            <div className="additional-info d-none">
                                                <p>We want to give you <b>10% discount</b> for your first order, <br />  Use discount code at checkout</p>
                                                <div className="payment-method">
                                                    <img src = "assets/img/icons/payment.png" alt="#" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6">
                                            <div className="ltn__newsletter-popup-img">
                                                <img src = "assets/img/banner/banner-2.jpg" alt="#" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        
            {/* <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="Modal Window"
                ariaHideApp={false} // To prevent accessibility issues
                style={{
                    overlay: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    zIndex: 9999, // Set the z-index to a high value to display on top
                    },
                    content: {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "transparent",
                    padding: "20px",
                    border: "none",
                    width: "80vw", // Set width to 80% of viewport width
                    height: "80vh", // Set height to 80% of viewport height
                    maxHeight: "80vh", // Maximum height to 80% of viewport height
                    overflow: "hidden", // Hide scrollbar
        
                    // Media query for mobile view
                    "@media (maxWidth: 600px)": {
                        width: "90vw", // Adjust width for smaller screens
                        height: "70vh", // Adjust height for smaller screens
                    },
                    },
                }}
            >
                <div >
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="ltn__newsletter-popup-item">
                                <div className="row">
                                    <div className="col-12 col-lg-6">
                                        <div className="ltn__newsletter-popup-img">
                                            <img src = "assets/img/home/newsletter.jpg" alt="#" />
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
                                    {/* additional-info 
                                        <div className="additional-info d-none">
                                            <p>We want to give you <b>10% discount</b> for your first order, <br />  Use discount code at checkout</p>
                                            <div className="payment-method">
                                                <img src = "assets/img/icons/payment.png" alt="#" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal> */}
        {/* MODAL AREA END */}

         {/* scroll to top */}
            <ScrollToTopButton />
         {/* scroll to top End*/}


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

    </div>
  )
}

export default ReUseHome