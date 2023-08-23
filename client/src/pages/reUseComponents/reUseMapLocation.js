import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import $ from "jquery"
import "jquery-ui-dist/jquery-ui"


//import topbar & navbar
import ReUseNavBar from './reUseNavBar'
import ReUseUtilizeCartMobileMenu from './reUseUtilizeCart&MobileMenu'
import ReUseFooterWithTimeSchedule from './reUseFooterWithTimeSchedule'
import ScrollToTopButton from './ScrollToTopButton'




const ReUseMapLocation = () => {

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

        {/*- Body main wrapper start */}
        <div className="body-wrapper">

            {/*- HEADER AREA START (header-4) */}
            <header className="ltn__header-area ltn__header-4 ltn__header-transparent gradient-color-2">

                {/* ltn__header-middle-area start */}
                <ReUseNavBar />
                {/* ltn__header-middle-area end */}

            </header>
            {/*- HEADER AREA END */}
            
            {/* Utilize Cart Menu Start */}
            {/* Utilize Mobile Menu Start */}
            <ReUseUtilizeCartMobileMenu />
            {/* Utilize Cart Menu End */}
            {/* Utilize Mobile Menu End */}


            {/*- BREADCRUMB AREA START */}
            <div className="ltn__breadcrumb-area ltn__breadcrumb-area-2 ltn__breadcrumb-color-white bg-overlay-theme-black-90 bg-image mb-0" data-bs-bg="assets/img/bg/9.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ltn__breadcrumb-inner ltn__breadcrumb-inner-2 justify-content-between">
                                <div className="section-title-area ltn__section-title-2">
                                    <h6 className="section-subtitle ltn__secondary-color">//  Welcome to our company</h6>
                                    <h1 className="section-title white-color">Google Map Locations</h1>
                                </div>
                                <div className="ltn__breadcrumb-list">
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li>Locations</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*- BREADCRUMB AREA END */}


            {/*- GOOGLE MAP LOCATIONS AREA START */}
            <div className="ltn__google-map-locations-area">
                <div id="gmap"></div>
            </div>
            {/*- GOOGLE MAP LOCATIONS AREA END */}

            <div className="ltn__google-map-locations-list-area mt-115 mb-70"> 
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ltn__location-search mb-100">
                                <div className="section-title-area ltn__section-title-2 ">
                                    <h1 className="section-title">Find your nearby location<span>.</span></h1>
                                </div>
                                <form action="#" className="clearfix">
                                    <h3>Your State</h3>
                                    <div className="input-item">
                                        <select className="nice-select">
                                            <option>Make A Selection</option>
                                            <option>Sort by popularity</option>
                                            <option>Sort by new arrivals</option>
                                            <option>Sort by price: low to high</option>
                                            <option>Sort by price: high to low</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="ltn__state-location">
                                <h2 className="ltn__state-location-title">Alabama</h2>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="ltn__map-item">
                                <h3 className="ltn__location-name">Boston, New York</h3>
                                <h5 className="ltn__location-single-info"><i className="fas fa-map-marked-alt"></i>5816 S. Coulter Street Amarillo, <br /> TX 79119</h5>
                                <h4 className="ltn__location-single-info"><i className="fas fa-phone-volume"></i>0123456789</h4>
                                <div className="btn-wrapper">
                                    <Link to="/appointment" className="btn btn-transparent btn-border btn-effect-4"><i className="fas fa-location-arrow"></i> Get An Appointment</Link>
                                    <a href="#" className="btn btn-transparent btn-border btn-effect-3"><i className="fas fa-globe"></i> View Website</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="ltn__map-item">
                                <h3 className="ltn__location-name">Boston, New York</h3>
                                <h5 className="ltn__location-single-info"><i className="fas fa-map-marked-alt"></i>5816 S. Coulter Street Amarillo, <br /> TX 79119</h5>
                                <h4 className="ltn__location-single-info"><i className="fas fa-phone-volume"></i>0123456789</h4>
                                <div className="btn-wrapper">
                                    <Link to="/appointment" className="btn btn-transparent btn-border btn-effect-4"><i className="fas fa-location-arrow"></i> Get An Appointment</Link>
                                    <a href="#" className="btn btn-transparent btn-border btn-effect-3"><i className="fas fa-globe"></i> View Website</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="ltn__map-item">
                                <h3 className="ltn__location-name">Boston, New York</h3>
                                <h5 className="ltn__location-single-info"><i className="fas fa-map-marked-alt"></i>5816 S. Coulter Street Amarillo, <br /> TX 79119</h5>
                                <h4 className="ltn__location-single-info"><i className="fas fa-phone-volume"></i>0123456789</h4>
                                <div className="btn-wrapper">
                                    <Link to="/appointment" className="btn btn-transparent btn-border btn-effect-4"><i className="fas fa-location-arrow"></i> Get An Appointment</Link>
                                    <a href="#" className="btn btn-transparent btn-border btn-effect-3"><i className="fas fa-globe"></i> View Website</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="ltn__map-item">
                                <h3 className="ltn__location-name">Boston, New York</h3>
                                <h5 className="ltn__location-single-info"><i className="fas fa-map-marked-alt"></i>5816 S. Coulter Street Amarillo, <br /> TX 79119</h5>
                                <h4 className="ltn__location-single-info"><i className="fas fa-phone-volume"></i>0123456789</h4>
                                <div className="btn-wrapper">
                                    <Link to="/appointment" className="btn btn-transparent btn-border btn-effect-4"><i className="fas fa-location-arrow"></i> Get An Appointment</Link>
                                    <a href="#" className="btn btn-transparent btn-border btn-effect-3"><i className="fas fa-globe"></i> View Website</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="ltn__map-item">
                                <h3 className="ltn__location-name">Boston, New York</h3>
                                <h5 className="ltn__location-single-info"><i className="fas fa-map-marked-alt"></i>5816 S. Coulter Street Amarillo, <br /> TX 79119</h5>
                                <h4 className="ltn__location-single-info"><i className="fas fa-phone-volume"></i>0123456789</h4>
                                <div className="btn-wrapper">
                                    <Link to="/appointment" className="btn btn-transparent btn-border btn-effect-4"><i className="fas fa-location-arrow"></i> Get An Appointment</Link>
                                    <a href="#" className="btn btn-transparent btn-border btn-effect-3"><i className="fas fa-globe"></i> View Website</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="ltn__map-item">
                                <h3 className="ltn__location-name">Boston, New York</h3>
                                <h5 className="ltn__location-single-info"><i className="fas fa-map-marked-alt"></i>5816 S. Coulter Street Amarillo, <br /> TX 79119</h5>
                                <h4 className="ltn__location-single-info"><i className="fas fa-phone-volume"></i>0123456789</h4>
                                <div className="btn-wrapper">
                                    <a href="appointment.html" className="btn btn-transparent btn-border btn-effect-4"><i className="fas fa-location-arrow"></i> Get An Appointment</a>
                                    <a href="#" className="btn btn-transparent btn-border btn-effect-3"><i className="fas fa-globe"></i> View Website</a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-12">
                            <div className="ltn__state-location">
                                <h2 className="ltn__state-location-title">Boston</h2>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="ltn__map-item">
                                <h3 className="ltn__location-name">Boston, New York</h3>
                                <h5 className="ltn__location-single-info"><i className="fas fa-map-marked-alt"></i>5816 S. Coulter Street Amarillo, <br /> TX 79119</h5>
                                <h4 className="ltn__location-single-info"><i className="fas fa-phone-volume"></i>0123456789</h4>
                                <div className="btn-wrapper">
                                    <Link to="/appointment" className="btn btn-transparent btn-border btn-effect-4"><i className="fas fa-location-arrow"></i> Get An Appointment</Link>
                                    <a href="#" className="btn btn-transparent btn-border btn-effect-3"><i className="fas fa-globe"></i> View Website</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="ltn__map-item">
                                <h3 className="ltn__location-name">Boston, New York</h3>
                                <h5 className="ltn__location-single-info"><i className="fas fa-map-marked-alt"></i>5816 S. Coulter Street Amarillo, <br /> TX 79119</h5>
                                <h4 className="ltn__location-single-info"><i className="fas fa-phone-volume"></i>0123456789</h4>
                                <div className="btn-wrapper">
                                    <Link to="/appointment" className="btn btn-transparent btn-border btn-effect-4"><i className="fas fa-location-arrow"></i> Get An Appointment</Link>
                                    <a href="#" className="btn btn-transparent btn-border btn-effect-3"><i className="fas fa-globe"></i> View Website</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="ltn__map-item">
                                <h3 className="ltn__location-name">Boston, New York</h3>
                                <h5 className="ltn__location-single-info"><i className="fas fa-map-marked-alt"></i>5816 S. Coulter Street Amarillo, <br /> TX 79119</h5>
                                <h4 className="ltn__location-single-info"><i className="fas fa-phone-volume"></i>0123456789</h4>
                                <div className="btn-wrapper">
                                    <Link to="/appointment" className="btn btn-transparent btn-border btn-effect-4"><i className="fas fa-location-arrow"></i> Get An Appointment</Link>
                                    <a href="#" className="btn btn-transparent btn-border btn-effect-3"><i className="fas fa-globe"></i> View Website</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="ltn__state-location">
                                <h2 className="ltn__state-location-title">New York</h2>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="ltn__map-item">
                                <h3 className="ltn__location-name">Boston, New York</h3>
                                <h5 className="ltn__location-single-info"><i className="fas fa-map-marked-alt"></i>5816 S. Coulter Street Amarillo, <br /> TX 79119</h5>
                                <h4 className="ltn__location-single-info"><i className="fas fa-phone-volume"></i>0123456789</h4>
                                <div className="btn-wrapper">
                                    <Link to="/appointment" className="btn btn-transparent btn-border btn-effect-4"><i className="fas fa-location-arrow"></i> Get An Appointment</Link>
                                    <a href="#" className="btn btn-transparent btn-border btn-effect-3"><i className="fas fa-globe"></i> View Website</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="ltn__map-item">
                                <h3 className="ltn__location-name">Boston, New York</h3>
                                <h5 className="ltn__location-single-info"><i className="fas fa-map-marked-alt"></i>5816 S. Coulter Street Amarillo, <br /> TX 79119</h5>
                                <h4 className="ltn__location-single-info"><i className="fas fa-phone-volume"></i>0123456789</h4>
                                <div className="btn-wrapper">
                                    <Link to="/appointment" className="btn btn-transparent btn-border btn-effect-4"><i className="fas fa-location-arrow"></i> Get An Appointment</Link>
                                    <a href="#" className="btn btn-transparent btn-border btn-effect-3"><i className="fas fa-globe"></i> View Website</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="ltn__map-item">
                                <h3 className="ltn__location-name">Boston, New York</h3>
                                <h5 className="ltn__location-single-info"><i className="fas fa-map-marked-alt"></i>5816 S. Coulter Street Amarillo, <br /> TX 79119</h5>
                                <h4 className="ltn__location-single-info"><i className="fas fa-phone-volume"></i>0123456789</h4>
                                <div className="btn-wrapper">
                                    <Link to="/appointment" className="btn btn-transparent btn-border btn-effect-4"><i className="fas fa-location-arrow"></i> Get An Appointment</Link>
                                    <a href="#" className="btn btn-transparent btn-border btn-effect-3"><i className="fas fa-globe"></i> View Website</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*- FOOTER AREA START (footer-2) */}
            <ReUseFooterWithTimeSchedule />
            {/*- FOOTER AREA END */}

        </div>
        {/*- Body main wrapper end */}

        {/* scroll to top */}
        <ScrollToTopButton />
         {/* scroll to top End*/}



    </div>
  )
}

export default ReUseMapLocation