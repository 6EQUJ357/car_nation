import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import $ from "jquery"
import "jquery-ui-dist/jquery-ui"

//import topbar & navbar
import ReUseNavBar from './reUseNavBar'
import ReUseUtilizeCartMobileMenu from './reUseUtilizeCart&MobileMenu'
import ReUseFooterWithTimeSchedule from './reUseFooterWithTimeSchedule'
import ScrollToTopButton from './ScrollToTopButton'



const ReUseTeam = () => {

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
                            <h1 className="section-title white-color">Our Experts</h1>
                        </div>
                        <div className="ltn__breadcrumb-list">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li>Team</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* BREADCRUMB AREA END */}

    {/* TEAM AREA START (Team - 3) */}
    <div className="ltn__team-area pt-110--- pb-90">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="ltn__team-item ltn__team-item-3">
                        <div className="team-img">
                            <img src="assets/img/team/1.jpg" alt="Image" />
                        </div>
                        <div className="team-info">
                            <h6 className="ltn__secondary-color">//  founder  //</h6>
                            <h4><a href="team-details.html">Rosalina D. William</a></h4>
                            <div className="ltn__social-media">
                                <ul>
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="ltn__team-item ltn__team-item-3">
                        <div className="team-img">
                            <img src="assets/img/team/2.jpg" alt="Image" />
                        </div>
                        <div className="team-info">
                            <h6 className="ltn__secondary-color">//  CEo  //</h6>
                            <h4><a href="team-details.html">Kelian Anderson</a></h4>
                            <div className="ltn__social-media">
                                <ul>
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="ltn__team-item ltn__team-item-3">
                        <div className="team-img">
                            <img src="assets/img/team/3.jpg" alt="Image" />
                        </div>
                        <div className="team-info">
                            <h6 className="ltn__secondary-color">//  machanic  //</h6>
                            <h4><a href="team-details.html">Miranda H. Halim</a></h4>
                            <div className="ltn__social-media">
                                <ul>
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="ltn__team-item ltn__team-item-3">
                        <div className="team-img">
                            <img src="assets/img/team/4.jpg" alt="Image" />
                        </div>
                        <div className="team-info">
                            <h6 className="ltn__secondary-color">//  machanic  //</h6>
                            <h4><a href="team-details.html">Damble D. Browni.</a></h4>
                            <div className="ltn__social-media">
                                <ul>
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="ltn__team-item ltn__team-item-3">
                        <div className="team-img">
                            <img src="assets/img/team/5.jpg" alt="Image" />
                        </div>
                        <div className="team-info">
                            <h6 className="ltn__secondary-color">//  machanic  //</h6>
                            <h4><a href="team-details.html">Aiden Benjamin</a></h4>
                            <div className="ltn__social-media">
                                <ul>
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="ltn__team-item ltn__team-item-3">
                        <div className="team-img">
                            <img src="assets/img/team/6.jpg" alt="Image" />
                        </div>
                        <div className="team-info">
                            <h6 className="ltn__secondary-color">//  machanic  //</h6>
                            <h4><a href="team-details.html">James Carter</a></h4>
                            <div className="ltn__social-media">
                                <ul>
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="ltn__team-item ltn__team-item-3">
                        <div className="team-img">
                            <img src="assets/img/team/7.jpg" alt="Image" />
                        </div>
                        <div className="team-info">
                            <h6 className="ltn__secondary-color">//  machanic  //</h6>
                            <h4><a href="team-details.html">William Gabriel</a></h4>
                            <div className="ltn__social-media">
                                <ul>
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="ltn__team-item ltn__team-item-3">
                        <div className="team-img">
                            <img src="assets/img/team/8.jpg" alt="Image" />
                        </div>
                        <div className="team-info">
                            <h6 className="ltn__secondary-color">//  machanic  //</h6>
                            <h4><a href="team-details.html">Adam Joseph</a></h4>
                            <div className="ltn__social-media">
                                <ul>
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* TEAM AREA END */}

    {/* CALL TO ACTION START ( Service Form ) */}
    <div className="ltn__service-form-wrap-area plr--5">
        <div className="container-fluid ">
            <div className="row">
                <div className="col-xl-12">
                    <div className="ltn__service-form-area ltn__service-form-1 bg-image bg-overlay-theme-black-60 pt-115 pb-95" data-bs-bg="assets/img/bg/2.jpg">
                        <div className="row">
                            <div className="col-xl-5 col-lg-12 align-self-center">
                                <div className="ltn__service-form-brief">
                                    <div className="section-title-area ltn__section-title-2 mb-0">
                                        <h6 className="section-subtitle white-color">// Call To Action</h6>
                                        <h1 className="section-title white-color">Get An Free Service
                                            From Us.</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-12 align-self-center">
                                <div className="ltn__service-form-wrap ltn__service-form-color-white">
                                    <form action="#" className="ltn__service-form-box">
                                        <ul>
                                            <li>
                                                <select className="nice-select">
                                                    <option>Service Name</option>
                                                    <option>Car Repair </option>
                                                    <option>Engine Repairing </option>
                                                    <option>Oil Change</option>
                                                    <option>Car Wash</option>
                                                </select>
                                            </li>
                                            <li>
                                                <div className="input-item input-item-date mb-0 ltn__custom-icon">
                                                    <input type="text" name="date" placeholder="DATE" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="btn-wrapper">
                                                    <button type="submit" className="btn theme-btn-1 btn-effect-1 text-uppercase">Check Availability</button>
                                                </div>
                                            </li>
                                        </ul>                            
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* CALL TO ACTION END */}

    {/* PROGRESS BAR AREA START */}
    <div className="ltn__progress-bar-area pt-115">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="ltn__progress-bar-wrap">
                        <div className="section-title-area ltn__section-title-2">
                            <h6 className="section-subtitle ltn__secondary-color">// skills</h6>
                            <h1 className="section-title">We Have A Skillest
                                Team Ever<span>.</span></h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
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
                    <div className="about-img-right">
                        <img src="assets/img/team/t-4.png" alt="Image" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* PROGRESS BAR AREA END */}

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

export default ReUseTeam