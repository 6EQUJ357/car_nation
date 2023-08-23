import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import $ from "jquery"
import "jquery-ui-dist/jquery-ui"

//import topbar & navbar
import ReUseNavBar from './reUseNavBar'
import ReUseUtilizeCartMobileMenu from './reUseUtilizeCart&MobileMenu'
// import ReUseBlog from './reUseBlog'
import ReUseFooterWithTimeSchedule from './reUseFooterWithTimeSchedule'
import ScrollToTopButton from './ScrollToTopButton'



const ReUseAboutPage = () => {

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
            21. Testimonial Slider - 3
        --------------------------------------------------------- */
        $('.ltn__testimonial-slider-3-active').not(".slick-initialized").slick({
            arrows: true,
            centerMode: true,
            centerPadding: '80px',
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        centerMode: false,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

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
            <div className="ltn__breadcrumb-area ltn__breadcrumb-area-2 ltn__breadcrumb-color-white bg-overlay-theme-black-90 bg-image" data-bs-bg="assets/img/about/aboutmain.webp">
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
                                        <li><Link to="/">Home</Link></li>
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
                                <img src="assets\img\bg\10.png" alt="About Us Image" />
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
                                    <p> Our fleet of well-maintained vehicles undergoes regular inspections and is equipped with state-of-the-art safety features.</p>
                                </div>

                                <p>Welcome to Car Nation, your premier choice for reliable and luxurious transportation in the United States. With a commitment to excellence and a focus on customer satisfaction, we pride ourselves on delivering top-notch car services that meet the needs of our discerning clientele. </p>
                                <div className="btn-wrapper">
                                    <Link to="/service" className="theme-btn-3 btn btn-effect-4">OUR SERVICES</Link>
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
                                    <h3><Link to="/service">All Kind Brand</Link></h3>
                                </div>
                                <div className="ltn__feature-info">
                                    <p>From renowned luxury brands to reliable everyday vehicles, we cater to all car brands, ensuring quality service for every make and model on the road.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-12">
                            <div className="ltn__feature-item ltn__feature-item-7">
                                <div className="ltn__feature-icon-title">
                                    <div className="ltn__feature-icon">
                                        <span><i className="icon-mechanic"></i></span>
                                    </div>
                                    <h3><Link to="/service">Expert Mechanics</Link></h3>
                                </div>
                                <div className="ltn__feature-info">
                                    <p>Experience peace of mind with our team of expert mechanics, who bring their vast knowledge and skill to deliver top-notch automotive services.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-12">
                            <div className="ltn__feature-item ltn__feature-item-7">
                                <div className="ltn__feature-icon-title">
                                    <div className="ltn__feature-icon">
                                        <span><i className="icon-repair"></i></span>
                                    </div>
                                    <h3><Link to="/service">Repair Vehicales</Link></h3>
                                </div>
                                <div className="ltn__feature-info">
                                    <p>We specialize in repairing vehicles with precision and care, providing efficient solutions to get you back on the road with confidence.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* FEATURE AREA END */}

            {/* CALL TO ACTION START (call-to-action-5) */}
            <div className="call-to-action-area call-to-action-5 bg-image bg-overlay-theme-90 pt-40 pb-25" data-bs-bg="assets/img/bg/13.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="call-to-action-inner call-to-action-inner-5 text-center">
                                <h2 className="white-color text-decoration">Make<Link to="/appointment">An Appointment</Link></h2>
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
                                    <p>Our team comprises the most skilled professionals in the industry, bringing unrivaled expertise and passion to deliver exceptional service that exceeds expectations.</p>
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
                            <div className="ltn__video-bg-img ltn__video-popup-height-500 bg-overlay-black-50-- bg-image ml-30" data-bs-bg="assets/img/about/videocover.jpeg">
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
            <div className="ltn__testimonial-area bg-image pt-115 pb-70" data-bs-bg="assets/img/bg/8.jpg">
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
                                    <img src="assets/img/about/terminalavatar.jpg" alt="#" />
                                </div>
                                <div className="ltn__testimoni-info">
                                    <p> as outlined during the reservation process. I appreciate the absence of any unexpected or hidden charges. It's refreshing to deal with a car service that values transparency and provides a great value for the price paid.</p>
                                    <h4>Rosalina D. William</h4>
                                    {/* <h6>Founder</h6> */}
                                </div>
                                <div className="ltn__testimoni-bg-icon">
                                    <i className="far fa-comments"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="ltn__testimonial-item ltn__testimonial-item-4">
                                <div className="ltn__testimoni-img">
                                    <img src="assets/img/about/terminalavatar.jpg" alt="#" />
                                </div>
                                <div className="ltn__testimoni-info">
                                    <p>From the moment I made the reservation until the end of my journey, your staff was prompt, They addressed all my queries promptly and handled my special requests with care. It made a difference in my overall experience.</p>
                                    <h4>Jacob William</h4>
                                    {/* <h6>Founder</h6> */}
                                </div>
                                <div className="ltn__testimoni-bg-icon">
                                    <i className="far fa-comments"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="ltn__testimonial-item ltn__testimonial-item-4">
                                <div className="ltn__testimoni-img">
                                    <img src="assets/img/about/terminalavatar.jpg" alt="#" />
                                </div>
                                <div className="ltn__testimoni-info">
                                    <p>I would like to extend my gratitude to your entire team for delivering such an outstanding car service. I will definitely recommend your services to friends, family. Thank you for making my journey comfortable, safe, and hassle-free.</p>
                                    <h4>Ethan James</h4>
                                    {/* <h6>Founder</h6> */}
                                </div>
                                <div className="ltn__testimoni-bg-icon">
                                    <i className="far fa-comments"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="ltn__testimonial-item ltn__testimonial-item-4">
                                <div className="ltn__testimoni-img">
                                    <img src="assets/img/about/terminalavatar.jpg" alt="#" />
                                </div>
                                <div className="ltn__testimoni-info">
                                    <p>First and foremost, the reliability of your service was impeccable. Your driver arrived precisely on time for both my pick-up and drop-off.I greatly appreciated the punctuality and professionalism displayed by your driver.</p>
                                    <h4>Sunitha Uram</h4>
                                    {/* <h6>Founder</h6> */}
                                </div>
                                <div className="ltn__testimoni-bg-icon">
                                    <i className="far fa-comments"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="ltn__testimonial-item ltn__testimonial-item-4">
                                <div className="ltn__testimoni-img">
                                    <img src="assets/img/about/terminalavatar.jpg" alt="#" />
                                </div>
                                <div className="ltn__testimoni-info">
                                    <p>I am writing to express my utmost satisfaction with the car service I recently received from your company. From start to finish, the entire experience exceeded my expectations, and I wanted to share my feedback with you.</p>
                                    <h4>Liam Mason</h4>
                                    {/* <h6>Founder</h6> */}
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
            {/* <div className="ltn__blog-area pt-115 pb-90">
                <ReUseBlog />
            </div> */}
            {/* BLOG AREA END */}

            {/* FOOTER AREA START (ltn__footer-2 ltn__footer-color-1) */}
            <ReUseFooterWithTimeSchedule />
            {/* FOOTER AREA END */}

        </div>
        {/* Body main wrapper end */}


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

export default ReUseAboutPage