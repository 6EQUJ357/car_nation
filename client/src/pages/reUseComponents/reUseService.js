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
 





const ReUseService = () => {

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
            18. Blog Slider One
        --------------------------------------------------------- */
        $('.ltn__blog-slider-one-active').not(".slick-initialized").slick({
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
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
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
            <div className="ltn__breadcrumb-area ltn__breadcrumb-area-2 ltn__breadcrumb-color-white bg-overlay-theme-black-90 bg-image" data-bs-bg="assets/img/service/main.webp">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ltn__breadcrumb-inner ltn__breadcrumb-inner-2 justify-content-between">
                                <div className="section-title-area ltn__section-title-2">
                                    <h6 className="section-subtitle ltn__secondary-color">//  Welcome to our company</h6>
                                    <h1 className="section-title white-color">What We Do</h1>
                                </div>
                                <div className="ltn__breadcrumb-list">
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li>Service</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* BREADCRUMB AREA END */}

            {/* ABOUT US AREA START */}
            <div className="ltn__about-us-area pb-115">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 align-self-center">
                            <div className="about-us-img-wrap ltn__img-shape-left  about-img-left">
                                <img src="assets/img/service/inspection.webp" alt="Image" />
                            </div>
                        </div>
                        <div className="col-lg-7 align-self-center">
                            <div className="about-us-info-wrap">
                                <div className="section-title-area ltn__section-title-2">
                                    <h6 className="section-subtitle ltn__secondary-color">//  RELIABLE SERVICES</h6>
                                    <h1 className="section-title">We are Qualified &
                                        Professional<span>.</span></h1>
                                    <p>We pride ourselves on being more than just a car service. We are a team of qualified and professional individuals dedicated to providing exceptional transportation experiences. </p>
                                </div>
                                <div className="about-us-info-wrap-inner about-us-info-devide">
                                    <p>From our knowledgeable drivers to our well-maintained vehicles, we strive for excellence in every aspect. Trust us to deliver reliable, safe, and comfortable rides, because when it comes to car service, we are the epitome of professionalism.</p>
                                    <div className="list-item-with-icon">
                                        <ul>
                                            <li><Link to="/contact">24/7 Online Support</Link></li>
                                            <li><Link to="/team">Expert Team</Link></li>
                                            <li><Link to="/servicedetails">Pure Equipment</Link></li>
                                            <li><Link to="/shop">Unlimited Product</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ABOUT US AREA END */}

            {/* SERVICE AREA START (Service 1) */}
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
            {/* SERVICE AREA END */}

            {/* OUR JOURNEY AREA START */}
            <div className="ltn__our-journey-area bg-image bg-overlay-theme-90 pt-280 pb-350 mb-35 plr--9" data-bs-bg="assets/img/bg/8.jpg">
                <div className="container-fluid">
                    <div className="row"> 
                        <div className="col-lg-12">
                            <div className="ltn__our-journey-wrap ">
                                <ul>
                                    <li><span className="ltn__journey-icon">1900</span>
                                        <ul>
                                            <li>
                                                <div className="ltn__journey-history-item-info clearfix">
                                                    <div className="ltn__journey-history-img">
                                                        <img src="assets/img/service/history-1.jpg" alt="#" />
                                                    </div>
                                                    <div className="ltn__journey-history-info">
                                                        <h3>Started Journey</h3>
                                                        <p>Lorem ipsum dolor sit amet, consectetur ad ipisic ing elit, sed do eiusmod tempor.</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="active"><span className="ltn__journey-icon">1950</span>
                                        <ul>
                                            <li>
                                                <div className="ltn__journey-history-item-info clearfix">
                                                    <div className="ltn__journey-history-img">
                                                        <img src="assets/img/service/history-1.jpg" alt="#" />
                                                    </div>
                                                    <div className="ltn__journey-history-info">
                                                        <h3>Get Rewards</h3>
                                                        <p>Lorem ipsum dolor sit amet, consectetur ad ipisic ing elit, sed do eiusmod tempor.</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><span className="ltn__journey-icon">1994</span>
                                        <ul>
                                            <li>
                                                <div className="ltn__journey-history-item-info clearfix">
                                                    <div className="ltn__journey-history-img">
                                                        <img src="assets/img/service/history-1.jpg" alt="#" /> 
                                                    </div>
                                                    <div className="ltn__journey-history-info">
                                                        <h3>Top Winner</h3>
                                                        <p>Lorem ipsum dolor sit amet, consectetur ad ipisic ing elit, sed do eiusmod tempor.</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><span className="ltn__journey-icon">2010</span>
                                        <ul>
                                            <li>
                                                <div className="ltn__journey-history-item-info clearfix">
                                                    <div className="ltn__journey-history-img">
                                                        <img src="assets/img/service/history-1.jpg" alt="#" />
                                                    </div>
                                                    <div className="ltn__journey-history-info">
                                                        <h3>Get Rewards</h3>
                                                        <p>Lorem ipsum dolor sit amet, consectetur ad ipisic ing elit, sed do eiusmod tempor.</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><span className="ltn__journey-icon">2020</span>
                                        <ul>
                                            <li>
                                                <div className="ltn__journey-history-item-info clearfix">
                                                    <div className="ltn__journey-history-img">
                                                        <img src="assets/img/service/history-1.jpg" alt="#" />
                                                    </div>
                                                    <div className="ltn__journey-history-info">
                                                        <h3>Get Rewards</h3>
                                                        <p>Lorem ipsum dolor sit amet, consectetur ad ipisic ing elit, sed do eiusmod tempor.</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* OUR JOURNEY AREA END */}

            {/* VIDEO AREA START */}
            <div className="ltn__video-popup-area ltn__video-popup-margin-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="ltn__video-bg-img ltn__video-popup-height-600 bg-overlay-black-50--- bg-image" data-bs-bg="assets/img/service/youtubecover.jpeg">
                                <a className="ltn__video-icon-2 ltn__video-icon-2-border---" href="https://youtu.be/n41eTtRRqus" data-rel="lightcase:myCollection" target='_blank' >
                                    <i className="fa fa-play"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* VIDEO AREA END */}

            {/* BLOG AREA START (blog-4) */}
            <div className="ltn__blog-area pt-115 pb-90">
            <ReUseBlog />
            </div>
            {/* BLOG AREA END */}

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

export default ReUseService