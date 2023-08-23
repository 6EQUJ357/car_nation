import React, {useEffect} from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import $ from "jquery"
import "jquery-ui-dist/jquery-ui"
import { useFormik } from 'formik'
import * as Yup from "yup"
import axios from 'axios'
import jwt_decode from "jwt-decode";



//import topbar & navbar
import ReUseNavBar from './reUseNavBar'
import ReUseUtilizeCartMobileMenu from './reUseUtilizeCart&MobileMenu'
import ReUseFooterWithTimeSchedule from './reUseFooterWithTimeSchedule'
import ScrollToTopButton from './ScrollToTopButton'





const ReUseMechanicAccount = (params) => {

    let navigate = useNavigate();

       // Function to handle token expiration and redirect
       const handleTokenExpiration = () => {
        const token = localStorage.getItem('token');
        if (token) {
          const decodedToken = jwt_decode(token);
          //console.log("decodetoken", decodedToken);
    
          const currentTime = Date.now() / 1000; // Convert milliseconds to seconds
          //console.log("currenttime", currentTime);
    
          if (decodedToken.exp < currentTime) {
            // Token has expired, redirect to login page
            localStorage.clear(); // Clear token from storage
            navigate("/signin"); // Redirect to login page
          } 
          else {
            // Token is still valid, set up a timer to check for expiration
            const timeUntilExpiration = (decodedToken.exp - currentTime) * 1000; // Convert seconds back to milliseconds
            setTimeout(handleTokenExpiration, timeUntilExpiration);
          }
        } else {
          // Token not found, redirect to login page
          navigate("/signin");
        }
      };
  
    useEffect(() => { 
     
  
      handleTokenExpiration(); // Call the function when the component mounts
  
      // Cleanup function to clear the timer when the component unmounts
      return () => clearTimeout(handleTokenExpiration);
    }, []);

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
                    $ltn__utilizeNavSubMenu.parent().prepend('<span className="menu-expand"></span>');
        
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
                    $('.ltn__category-menu-toggle .ltn__category-menu-drop > a').append('<span className="expand"></span>');
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

     //form validaqtion using formik edit admin
     const formik = useFormik({
        initialValues: {
            userName : params.value1.userName,
            email : params.value1.email, 
            mobileNO : params.value1.mobileNO, 
            password : "",
            }            

    })




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
            <div className="ltn__breadcrumb-area ltn__breadcrumb-area-2 ltn__breadcrumb-color-white bg-overlay-theme-black-90 bg-image" data-bs-bg="assets/img/contact/myaccount.webp">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ltn__breadcrumb-inner ltn__breadcrumb-inner-2 justify-content-between">
                                <div className="section-title-area ltn__section-title-2">
                                    <h6 className="section-subtitle ltn__secondary-color">//  Welcome to our company</h6>
                                    <h1 className="section-title white-color text-capitalize">{params.value1.userType} Account</h1>
                                </div>
                                <div className="ltn__breadcrumb-list">
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li className='text-capitalize'>{params.value1.userType} Account</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* BREADCRUMB AREA END */}

            {/* WISHLIST AREA START */}
            <div className="liton__wishlist-area pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* PRODUCT TAB AREA START */}
                            <div className="ltn__product-tab-area">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="ltn__tab-menu-list mb-50">
                                                <div className="nav">
                                                    <a className="active show" data-bs-toggle ="tab" href="#liton_tab_1_1">Dashboard <i className="fas fa-home"></i></a>
                                                    <a data-bs-toggle ="tab" href="#liton_tab_1_5">Account Details <i className="fas fa-user-tie"></i></a>                                                    

                                                    
                                                    <a data-bs-toggle ="tab" href="#liton_tab_1_2">generate Inspection Report<i className="fas fa-file-alt"></i></a>

                                                    <a data-bs-toggle ="tab" href="#liton_tab_1_3">All Inspection Report <i className="fas fa-arrow-down"></i></a>
                                                    <a data-bs-toggle ="tab" href="#liton_tab_1_4">All Vehicles Assigned For You <i className="fas fa-car-side"></i></a>
                                                    <a data-bs-toggle ="tab" href="#liton_tab_1_6">Current Vehicles Under Service <i className="fas fa-car-side"></i></a>
                                                    <a data-bs-toggle ="tab"  onClick={params.value2}> Logout <i className="fas fa-sign-out-alt"></i></a>
                                                
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="tab-content">

                                                <div className="tab-pane fade" id="liton_tab_1_5">
                                                    <div className="ltn__myaccount-tab-content-inner">
                                                        <p>Account Details</p>

                                                        <div className="ltn__form-box">

                                                            <form >
                                                                <div className="row mb-50">

                                                                    <div className="col-md-6">
                                                                        <label>Name:</label>

                                                                        <input type="text" name="userName" placeholder="Name" value={formik.values.userName} readOnly/>

                                                                    </div>

                                                                    <div className="col-md-6">
                                                                        <label>Email:</label>

                                                                        <input type="email" name="email" placeholder="Email*"  value={formik.values.email} readOnly/>
                                                                
                                                                    </div>

                                                                    <div className="col-md-6">
                                                                        <label>Mobile Number:</label> 

                                                                        <input type="text" inputMode="numeric" pattern="[0-9]*" name="mobileNO" placeholder="Mobile No..." value={formik.values.mobileNO} readOnly />

                                                                    </div>

                                                                    
                                                                    
                                                                </div>


                                                                
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>

                                            
                                                <div className="tab-pane fade active show" id="liton_tab_1_1">
                                                    <div className="ltn__myaccount-tab-content-inner">
                                                        <p>Hello <strong >{params.value1.userName}</strong></p>
                                                        <p>From your account dashboard you can view your <span>recent orders</span>, manage your <span>shipping and billing addresses</span>, and <span>edit your password and account details</span>.</p>
                                                    </div>
                                                </div> 


                                                <div className="tab-pane fade" id="liton_tab_1_2">
                                                    <div className="ltn__myaccount-tab-content-inner">
                                                        {/* <div className="table-responsive">
                                                            <table className="table">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Order</th>
                                                                        <th>Date</th>
                                                                        <th>Status</th>
                                                                        <th>Total</th>
                                                                        <th>Action</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>1</td>
                                                                        <td>Jun 22, 2019</td>
                                                                        <td>Pending</td>
                                                                        <td>$3000</td>
                                                                        <td><Link to="/cart">View</Link></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>2</td>
                                                                        <td>Nov 22, 2019</td>
                                                                        <td>Approved</td>
                                                                        <td>$200</td>
                                                                        <td><Link to="/cart">View</Link></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>3</td>
                                                                        <td>Jan 12, 2020</td>
                                                                        <td>On Hold</td>
                                                                        <td>$990</td>
                                                                        <td><Link to="/cart">View</Link></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div> */}
                                                         <p>No Data Found...</p>
                                                    </div>
                                                </div>


                                                <div className="tab-pane fade" id="liton_tab_1_3">
                                                    <div className="ltn__myaccount-tab-content-inner">
                                                        {/* <div className="table-responsive">
                                                            <table className="table">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Product</th>
                                                                        <th>Date</th>
                                                                        <th>Expire</th>
                                                                        <th>Download</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>Carsafe - Car Service PSD Template</td>
                                                                        <td>Nov 22, 2020</td>
                                                                        <td>Yes</td>
                                                                        <td><a href="#"><i className="far fa-arrow-to-bottom mr-1"></i> Download File</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Carsafe - Car Service HTML Template</td>
                                                                        <td>Nov 10, 2020</td>
                                                                        <td>Yes</td>
                                                                        <td><a href="#"><i className="far fa-arrow-to-bottom mr-1"></i> Download File</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Carsafe - Car Service WordPress Theme</td>
                                                                        <td>Nov 12, 2020</td>
                                                                        <td>Yes</td>
                                                                        <td><a href="#"><i className="far fa-arrow-to-bottom mr-1"></i> Download File</a></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div> */}
                                                         <p>No Data Found...</p>
                                                    </div>
                                                </div>


                                                <div className="tab-pane fade" id="liton_tab_1_4">
                                                    <div className="ltn__myaccount-tab-content-inner">
                                                        <p>No Data Found...</p>
                                                        {/* <div className="row">
                                                            <div className="col-md-6 col-12 learts-mb-30">
                                                                <h4>Billing Address <small><a href="#">edit</a></small></h4>
                                                                <address>
                                                                    <p><strong>Alex Tuntuni</strong></p>
                                                                    <p>1355 Market St, Suite 900 <br />
                                                                        San Francisco, CA 94103</p>
                                                                    <p>Mobile: (123) 456-7890</p>
                                                                </address>
                                                            </div>
                                                            <div className="col-md-6 col-12 learts-mb-30">
                                                                <h4>Shipping Address <small><a href="#">edit</a></small></h4>
                                                                <address>
                                                                    <p><strong>Alex Tuntuni</strong></p>
                                                                    <p>1355 Market St, Suite 900 <br />
                                                                        San Francisco, CA 94103</p>
                                                                    <p>Mobile: (123) 456-7890</p>
                                                                </address>
                                                            </div>
                                                        </div> */}
                                                    </div>
                                                </div>

                                                <div className="tab-pane fade" id="liton_tab_1_6">
                                                    <div className="ltn__myaccount-tab-content-inner">
                                                        <p>No Data Found...</p>
                                                        {/* <div className="row">
                                                            <div className="col-md-6 col-12 learts-mb-30">
                                                                <h4>Billing Address <small><a href="#">edit</a></small></h4>
                                                                <address>
                                                                    <p><strong>Alex Tuntuni</strong></p>
                                                                    <p>1355 Market St, Suite 900 <br />
                                                                        San Francisco, CA 94103</p>
                                                                    <p>Mobile: (123) 456-7890</p>
                                                                </address>
                                                            </div>
                                                            <div className="col-md-6 col-12 learts-mb-30">
                                                                <h4>Shipping Address <small><a href="#">edit</a></small></h4>
                                                                <address>
                                                                    <p><strong>Alex Tuntuni</strong></p>
                                                                    <p>1355 Market St, Suite 900 <br />
                                                                        San Francisco, CA 94103</p>
                                                                    <p>Mobile: (123) 456-7890</p>
                                                                </address>
                                                            </div>
                                                        </div> */}
                                                    </div>
                                                </div>

                                                


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* PRODUCT TAB AREA END */}
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

export default ReUseMechanicAccount