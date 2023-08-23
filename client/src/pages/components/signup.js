//register  signup is changes & the component is optional (not consider)...


import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import $ from "jquery"
import "jquery-ui-dist/jquery-ui"
import {useFormik} from "formik"
import * as Yup from "yup"
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import ScrollToTopButton from '../reUseComponents/ScrollToTopButton';


//import topbar & navbar
import ReUseNavBar from "../reUseComponents/reUseNavBar"
import ReUseUtilizeCartMobileMenu from '../reUseComponents/reUseUtilizeCart&MobileMenu'
import ReUseFooterWithTimeSchedule from '../reUseComponents/reUseFooterWithTimeSchedule'


import server_access_point from './config';



const Signup = () => {

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

    //navigate library
    const navigate = useNavigate();


    //form validaqtion using formik
    const formik = useFormik({
        initialValues: {
            userName : "",
            email : "",
            mobileNO : "",
            password : "",
            confirmPassword : "",
            // checkbox : false
            },

        validationSchema:Yup.object().shape({

            userName : Yup.string().required("Name is Required"),

            email : Yup.string().matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Invalid email address').required("Email Required"),

             mobileNO : Yup.string().required('Phone number is required').matches(/^\d+$/, 'Phone number must only contain numbers').min(10, 'Phone number must be exactly 10 digits').max(10, 'Phone number must be exactly 10 digits'),

            password : Yup.string().min(6, 'Password must be at least six characters long.').max(16,'Maximum of sixteen character allowed!').required("Password Required"),

            confirmPassword : Yup.string().oneOf([Yup.ref('password'), null],"Passwords didn't match ! ").required("Password Required"),

            // checkbox: Yup.boolean().oneOf([true], 'Click the Check Box to Accept Terms & Conditions')
            }),

        onSubmit: async(values, {resetForm})=>{
           
           // const [response, setResponse] = useState({})
            await axios.post(`${server_access_point}/signup`, values).then(res=>
            {
                alert(res.data.message); 

                //resetForm({values : ""});

                 //navigate to signin page
                if(res.data.status === 200 && res.data.response === true){
                    navigate("/signin");
                }
            }).catch(err=>console.log(err));
            
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
            <div className="ltn__breadcrumb-area ltn__breadcrumb-area-2 ltn__breadcrumb-color-white bg-overlay-theme-black-90 bg-image" data-bs-bg="assets/img/contact/signup.jpeg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ltn__breadcrumb-inner ltn__breadcrumb-inner-2 justify-content-between">
                                <div className="section-title-area ltn__section-title-2">
                                    <h6 className="section-subtitle ltn__secondary-color">//  Welcome to our company</h6>
                                    <h1 className="section-title white-color">Account</h1>
                                </div>
                                <div className="ltn__breadcrumb-list">
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li>Register</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* BREADCRUMB AREA END */}

            {/* LOGIN AREA START (Register) */}
            <div className="ltn__login-area pb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-area text-center">
                                <h1 className="section-title">Register <br />Your Account</h1>
                                {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
                                    Sit aliquid,  Non distinctio vel iste.</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="account-login-inner">

                                {/* signUp form */}
                                <form onSubmit={formik.handleSubmit} className="ltn__form-box contact-form-box">

                                    <input type="text" name="userName" placeholder="Name" value={formik.values.userName} onChange={handleInputChange}/>
                                    {(formik.touched.userName && formik.errors.userName) && <small style={{color:"red"}}>{formik.errors.userName}</small>}

                                    <input type="email" name="email" placeholder="Email*"  value={formik.values.email} onChange={handleInputChange}/>
                                    {(formik.touched.email && formik.errors.email) && <small style={{color:"red"}}>{formik.errors.email}</small>}

                                    <input type="text" inputMode="numeric" pattern="[0-9]*" name="mobileNO" placeholder="Mobile No..." value={formik.values.mobileNO} onChange={handleInputChange} />
                                    {(formik.touched.mobileNO && formik.errors.mobileNO) && <small style={{color:"red"}}>{formik.errors.mobileNO}</small>}

                                    <input type="password" name="password" placeholder="Password*"  value={formik.values.password} onChange={handleInputChange} />
                                    {(formik.touched.password && formik.errors.password) && <small style={{color:"red"}}>{formik.errors.password}</small>}
                                    
                                    <input type="password" name="confirmPassword" placeholder="Confirm Password*" value={formik.values.confirmPassword} onChange={handleInputChange}/>
                                    {(formik.touched.confirmPassword && formik.errors.confirmPassword) && <small style={{color:"red"}}>{formik.errors.confirmPassword}</small>}
                                    <br />

                                    {/* <label className="checkbox-inline">
                                        <input type="checkbox" value="" />
                                        I consent to Herboil processing my personal data in order to send personalized marketing material in accordance with the consent form and the privacy policy.
                                    </label> */}

                                    {/* <label className="checkbox-inline">
                                        <input type="checkbox" name="checkbox" {...formik.getFieldProps("checkbox")}/>
                                        &nbsp; Accept Terms and Conditions
                                    </label>
                                    <br />
                                    {(formik.touched.confirmPassword && formik.errors.checkbox) && <small style={{color:"red"}}>{formik.errors.checkbox}</small>} */}

                                    <div className="btn-wrapper">
                                        <button className="theme-btn-1 btn reverse-color btn-block" type="submit">CREATE ACCOUNT</button>
                                    </div>
                                </form>


                                <div className="by-agree text-center">
                                    <p>By creating an account, you agree to our:</p>
                                    <p><a href="#">TERMS OF CONDITIONS  &nbsp; &nbsp; | &nbsp; &nbsp;  PRIVACY POLICY</a></p>
                                    <div className="go-to-btn mt-50">
                                        <Link to="/signin">ALREADY HAVE AN ACCOUNT ?</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* LOGIN AREA END */}

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

export default Signup