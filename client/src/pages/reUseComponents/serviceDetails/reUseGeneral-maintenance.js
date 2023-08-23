import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import $ from "jquery"
import "jquery-ui-dist/jquery-ui"


//import topbar & navbar
import ReUseNavBar from '../reUseNavBar'
import ReUseUtilizeCartMobileMenu from '../reUseUtilizeCart&MobileMenu'
import ReUseFooterWithTimeSchedule from '../reUseFooterWithTimeSchedule'
import ScrollToTopButton from '../ScrollToTopButton'



const ReUseGeneralMaintenance = () => {

    
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
            <div className="ltn__breadcrumb-area ltn__breadcrumb-area-2 ltn__breadcrumb-color-white bg-overlay-theme-black-90 bg-image" data-bs-bg="assets/img/service/gene_main.jpeg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ltn__breadcrumb-inner ltn__breadcrumb-inner-2 justify-content-between">
                                <div className="section-title-area ltn__section-title-2">
                                    <h6 className="section-subtitle ltn__secondary-color">//  Welcome to Car Nation</h6>
                                    <h1 className="section-title white-color">General maintenance</h1>
                                </div>
                                <div className="ltn__breadcrumb-list">
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/generalmaintenance">Service</Link></li>
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
                                <div className="ltn__blog-img">
                                    <img src="assets/img/service/gene_main2.jpeg" alt="Image" />
                                </div>
                                <p> <span className="ltn__first-letter">A</span>t we understand the importance of regular maintenance to keep your vehicle running smoothly and efficiently. Our team of experienced technicians is skilled in providing top-notch general maintenance services to help you maintain the optimal performance and longevity of your vehicle.</p>
                                <p>Our General Maintenance services are designed to address routine vehicle needs, ensuring that your car remains in excellent condition and minimizing the risk of unexpected breakdowns. Whether you drive a sedan, SUV, truck, or any other type of vehicle, our technicians are equipped with the knowledge and expertise to handle a wide range of maintenance tasks. </p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <img src="assets/img/service/gene_main3.webp" alt="image" />
                                        {/* <label>Image caption here.</label> */}
                                    </div>
                                    <div className="col-lg-6">
                                        <img src="assets/img/service/gene_main4.webp" alt="image" />
                                    </div>
                                </div>
                                <p>By regularly scheduling General Maintenance services with us, you can enjoy peace of mind knowing that your vehicle is in good hands. Our technicians will perform thorough inspections, provide detailed reports on the condition of your vehicle, and offer expert recommendations to address any potential issues. </p>

                                <p>At [Service Center Name], we are committed to delivering exceptional service, utilizing high-quality parts, and employing skilled technicians who stay up to date with the latest industry practices. Trust us to keep your vehicle in optimal condition through our comprehensive General Maintenance services.</p>

                                <p>Contact us today to schedule an appointment or learn more about how our General Maintenance services can benefit your vehicle's performance and reliability.</p>

                                <div className="ltn__service-list-menu text-uppercase mt-50">
                                    <ul>
                                        <li><i className="fas fa-car"></i> Oil Change </li>
                                        <li><i className="fas fa-life-ring"></i> Filter Replacements </li>
                                        <li><i className="fas fa-cog"></i> Fluid Checks and Top-Ups </li>
                                        <li><i className="fas fa-car"></i> Tire Rotations </li>
                                        <li><i className="fas fa-car"></i> Battery Inspection </li>
                                        <li><i className="fas fa-life-ring"></i> Light Bulb Replacements </li>
                                        <li><i className="fas fa-cog"></i> Belts and Hoses Inspection </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4">
                            <aside className="sidebar-area ltn__right-sidebar">
                                {/* Menu Widget */}
                                <div className="widget-2 ltn__menu-widget ltn__menu-widget-2 text-uppercase">
                                    <ul>
                                        <li><a href="#">Oil Change <span><i className="fas fa-arrow-right"></i></span></a></li>
                                        <li className="active"><a href="#">Filter Replacements <span><i className="fas fa-arrow-right"></i></span></a></li>
                                        <li><a href="#">Fluid Checks and Top-Ups <span><i className="fas fa-arrow-right"></i></span></a></li>
                                        <li><a href="#">Tire Rotations <span><i className="fas fa-arrow-right"></i></span></a></li>
                                        <li><a href="#">Battery Inspection <span><i className="fas fa-arrow-right"></i></span></a></li>
                                        <li><a href="#">Light Bulb Replacements <span><i className="fas fa-arrow-right"></i></span></a></li>
                                        <li><a href="#">Belts and Hoses Inspection <span><i className="fas fa-arrow-right"></i></span></a></li>
                                    </ul>
                                </div>
                                {/* Newsletter Widget */}
                                {/* <div className="widget ltn__search-widget ltn__newsletter-widget">                            
                                    <h6 className="ltn__widget-sub-title">// subscribe</h6>
                                    <h4 className="ltn__widget-title">Get Newsletter</h4>
                                    <form action="#">
                                        <input type="text" name="search" placeholder="Search" />
                                        <button type="submit"><i className="fas fa-search"></i></button>
                                    </form>
                                    <div className="ltn__newsletter-bg-icon">
                                        <i className="fas fa-envelope-open-text"></i>
                                    </div>
                                </div> */}
                                {/* Banner Widget */}
                                {/* <div className="widget ltn__banner-widget">
                                    <Link to="/shop"><img src="assets/img/banner/banner-1.jpg" alt="Banner Image" /></Link>
                                </div> */}
                            </aside>
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

export default ReUseGeneralMaintenance