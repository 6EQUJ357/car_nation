import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import $ from "jquery"
import "jquery-ui-dist/jquery-ui"
import {useFormik} from "formik"
import * as Yup from "yup"
import emailjs from '@emailjs/browser';



//import topbar & navbar
import ReUseNavBar from './reUseNavBar'
import ReUseUtilizeCartMobileMenu from './reUseUtilizeCart&MobileMenu'
import ReUseFooterWithTimeSchedule from './reUseFooterWithTimeSchedule'
import ScrollToTopButton from './ScrollToTopButton'



const ReUseContact = () => {

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

    const formik = useFormik({
        initialValues : {
            name: "", 
            email:"",
            service : "",
            ph_number : "",
            message:""
        },
        validationSchema : Yup.object().shape({
            name : Yup.string().required("Name Required"),
            email : Yup.string().matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Invalid email address').required("Email Required"),
            service : Yup.string().required("Select Service"),
            ph_number : Yup.string().required('Phone number is required').matches(/^\d+$/, 'Phone number must only contain numbers').min(10, 'Phone number must be exactly 10 digits').max(10, 'Phone number must be exactly 10 digits'),
            message : Yup.string()

        }),
        onSubmit : (values, {resetForm})=>{
            emailjs.sendForm('service_e8qlzcu', 'template_xwx5kj9', ".form", 'sscEHai5tPzFV7cwo')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            alert("Quotation request sent successfully...");
            resetForm({values:""});
        }

    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        formik.setFieldValue(name, value.trim());
      };
    
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
            <div className="ltn__breadcrumb-area ltn__breadcrumb-area-2 ltn__breadcrumb-color-white bg-overlay-theme-black-90 bg-image" data-bs-bg="assets/img/contact/main.webp">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ltn__breadcrumb-inner ltn__breadcrumb-inner-2 justify-content-between">
                                <div className="section-title-area ltn__section-title-2">
                                    <h6 className="section-subtitle ltn__secondary-color">//  Welcome to our company</h6>
                                    <h1 className="section-title white-color">Contact Us</h1>
                                </div>
                                <div className="ltn__breadcrumb-list">
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li>Contact</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* BREADCRUMB AREA END */}

            {/* CONTACT ADDRESS AREA START */}
            <div className="ltn__contact-address-area mb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                                <div className="ltn__contact-address-icon">
                                    <img src="assets/img/icons/10.png" alt="Icon Image" />
                                </div>
                                <h3>Email Address</h3>
                                <p> <a href='mailto:Service@carnationautorepair.com'>Service@carnationautorepair.com </a>
                                </p>
                                <br />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                                <div className="ltn__contact-address-icon">
                                    <img src="assets/img/icons/11.png" alt="Icon Image" />
                                </div>
                                <h3>Phone Number</h3>
                                <p><a href='tel:+1 214597-4922'>+1 (214) 597-4922</a></p>
                                <br />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                                <div className="ltn__contact-address-icon">
                                    <img src="assets/img/icons/12.png" alt="Icon Image" />
                                </div>
                                <h3>Office Address</h3>
                                <p>3245 East University Drive McKinney,<br/> TX 75069 </p>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* CONTACT ADDRESS AREA END */}
            
            {/* CONTACT MESSAGE AREA START */}
            <div className="ltn__contact-message-area mb-120 mb--100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ltn__form-box contact-form-box box-shadow white-bg">
                                <h4 className="title-2">Get A Quote</h4>

                                {/* form */}
                                <form onSubmit={formik.handleSubmit} className='form'>
                                    <div className="row">

                                        <div className="col-md-6">
                                            <div className="input-item input-item-name ltn__custom-icon">
                                                <input type="text" name="name" placeholder="Enter your name" value={formik.values.name} onChange={handleInputChange}/>
                                            </div>
                                            {(formik.errors.name && formik.touched.name) && <small style={{color:"red"}}>{formik.errors.name}</small> }
                                        </div>

                                        <div className="col-md-6">
                                            <div className="input-item input-item-email ltn__custom-icon">
                                                <input type="email" name="email" placeholder="Enter email address"  value={formik.values.email} onChange={handleInputChange}/>
                                            </div>
                                            {(formik.errors.email && formik.touched.email) && <small style={{color:"red"}}>{formik.errors.email}</small> }
                                        </div>

                                        <div className="col-md-6">
                                            <div className="input-item">
                                                <select className="nice-select" name = "service" onChange={handleInputChange}>
                                                    <option value="">-- Select Service Type --</option>
                                                    <option value="General Maintenance">General Maintenance </option>
                                                    <option value="Brake Services">Brake Services </option>
                                                    <option value="Engine Repair">Engine Repair</option>
                                                    <option value="Transmission Services">Transmission Services</option>
                                                    <option value="Electrical System Repairs">Electrical System Repairs</option>
                                                    <option value="Heating and Cooling Systems">Heating and Cooling Systems</option>
                                                    <option value="Suspension and Steering">Suspension and Steering</option>
                                                    <option value="Exhaust System Repairs">Exhaust System Repairs</option>
                                                    <option value="Wheel and Tire Services">Wheel and Tire Services</option>
                                                    <option value="Diagnostics and Troubleshooting">Diagnostics and Troubleshooting</option>
                                                </select>
                                            </div>
                                            {(formik.errors.service && formik.touched.service) && <small style={{color:"red"}}>{formik.errors.service}</small> }
                                        </div>

                                        <div className="col-md-6">
                                            <div className="input-item input-item-phone ltn__custom-icon">
                                                <input type="text" name="ph_number" placeholder="Enter phone number" value={formik.values.ph_number} onChange={handleInputChange}/>
                                            </div>
                                            {(formik.errors.ph_number && formik.touched.ph_number) && <small style={{color:"red"}}>{formik.errors.ph_number}</small> }
                                        </div>
                                    </div>
                                    <div className="input-item input-item-textarea ltn__custom-icon">
                                        <textarea name="message" placeholder="Enter message (optional)" value={formik.values.message} onChange={handleInputChange}></textarea>
                                    </div>
                                    {(formik.errors.message && formik.touched.message) && <small style={{color:"red"}}>{formik.errors.message}</small> }


                                    {/* <p><label className="input-info-save mb-0"><input type="checkbox" name="agree" /> Save my name, email, and website in this browser for the next time I comment.</label></p> */}
                                    <div className="btn-wrapper mt-0">
                                        <button className="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit">get an free service</button>
                                    </div>
                                    {/* <p className="form-messege mb-0 mt-20"></p> */}
                                </form> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /> <br /> <br /> <br /> <br />
            {/* CONTACT MESSAGE AREA END */}

            {/* GOOGLE MAP AREA START */}
            <div className="google-map">

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3338.729037527466!2d-96.56545018904617!3d33.194978662399045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c0d82cd635f63%3A0xf3d3eb6ce9f73cc4!2sCAR%20NATION!5e0!3m2!1sen!2sus!4v1689674085100!5m2!1sen!2sus" width="100%" height="100%" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>

            </div>
            {/* GOOGLE MAP AREA END */}

            {/* FOOTER AREA START (footer-2) */}
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

export default ReUseContact