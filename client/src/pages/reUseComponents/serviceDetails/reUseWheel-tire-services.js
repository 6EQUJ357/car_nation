import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import $ from "jquery"
import "jquery-ui-dist/jquery-ui"

//import topbar & navbar
import ReUseNavBar from '../reUseNavBar'
import ReUseUtilizeCartMobileMenu from '../reUseUtilizeCart&MobileMenu'
import ReUseFooterWithTimeSchedule from '../reUseFooterWithTimeSchedule'
import ScrollToTopButton from '../ScrollToTopButton'


const ReUseWheelTireServices = () => {

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
           <div className="ltn__breadcrumb-area ltn__breadcrumb-area-2 ltn__breadcrumb-color-white bg-overlay-theme-black-90 bg-image" data-bs-bg="assets/img/service/whe_tyr.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ltn__breadcrumb-inner ltn__breadcrumb-inner-2 justify-content-between">
                                <div className="section-title-area ltn__section-title-2">
                                    <h6 className="section-subtitle ltn__secondary-color">//  Welcome to Car Nation</h6>
                                    <h1 className="section-title white-color"> Wheel & Tire Services</h1>
                                </div>
                                <div className="ltn__breadcrumb-list">
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/wheeltireservices">Service</Link></li>
                                        <li>Car Repair</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* BREADCRUMB AREA END */}

            {/* PAGE DETAILS AREA START (service-details) */}
            <div className="ltn__page-details-area ltn__service-details-area mb-105">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="ltn__page-details-inner ltn__service-details-inner">
                            <h2> Ensuring Safety and Performance on the Road</h2>

                                <div className="ltn__blog-img">
                                    <img src="assets/img/service/whe_tyr1.jpg" alt="Image" />
                                </div>
                                <p> <span className="ltn__first-letter">W</span>elcome to our website dedicated to providing comprehensive wheel and tire services for your vehicle. We understand that your wheels and tires are crucial components that directly impact your safety, handling, and overall driving experience. Our team of skilled technicians is committed to providing top-quality services to keep your wheels and tires in optimal condition.</p>
                               
                                <div className="row">
                                    <div className="col-lg-6">
                                        <img src="assets/img/service/whe_tyr2.jpg" alt="image" />
                                        {/* <label>Image caption here.</label> */}
                                    </div>
                                    <div className="col-lg-6">
                                        <img src="assets/img/service/whe_tyr3.jpg" alt="image" />
                                    </div>
                                </div>

                                <h2> Importance of Wheel and Tire Services</h2>
                                <ul>
                                    <li>Highlight the significance of properly maintained wheels and tires in ensuring safe and comfortable driving.</li>
                                    <li>Explain how well-maintained wheels and tires contribute to improved handling, traction, fuel efficiency, and overall vehicle performance.</li>
                                    <li>Emphasize the importance of regular maintenance to detect and address potential issues, ensuring your safety on the road.</li>
                                </ul>

                                <h2>Signs of Wheel and Tire Problems</h2>
                                <ul>
                                    <li>Provide a comprehensive list of common signs that indicate potential wheel and tire issues, such as uneven tire wear, vibration at high speeds, loss of tire pressure, or damage to the wheels.</li>
                                    <li>Encourage visitors to be attentive to these signs and seek professional inspection and services promptly to prevent accidents, tire blowouts, or further damage.</li>
                                </ul>

                                <h2>Comprehensive Wheel and Tire Services Offered</h2>
                                <ul>
                                    <li>Detail the wide range of services available, including tire mounting, balancing, and rotation, tire repair or replacement, wheel alignment, and wheel balancing.</li>
                                    <li>Highlight the expertise of our technicians in performing these services accurately and efficiently, ensuring optimal tire performance and longevity.</li>
                                </ul>

                                {/* <div className="ltn__service-list-menu text-uppercase mt-50">
                                    <ul>
                                        <li><i className="fas fa-car"></i> Front Brakes Repair <span className="service-price">$225.95 <span>Plus Parts</span></span> </li>
                                        <li><i className="fas fa-life-ring"></i> Rear Brakes Repair <span className="service-price">$225.95 <span>Plus Parts</span></span> </li>
                                        <li><i className="fas fa-cog"></i> Axle <span className="service-price">$225.95 <span>Plus Parts</span></span> </li>
                                        <li><i className="fas fa-car"></i> Starters / Alternators <span className="service-price">$225.95 <span>Plus Parts</span></span> </li>
                                    </ul>
                                </div> */}

                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
            {/* PAGE DETAILS AREA END */}

            {/* FOOTER AREA START (ltn__footer-2 ltn__footer-color-1) */}
            <ReUseFooterWithTimeSchedule/> 
            {/* AREA END */}


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

export default ReUseWheelTireServices