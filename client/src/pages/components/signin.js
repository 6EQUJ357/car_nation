import React, {useEffect, useContext} from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"
import axios from "axios"
import { GoogleLogin } from '@react-oauth/google';
import ScrollToTopButton from '../reUseComponents/ScrollToTopButton';


import $ from "jquery"
import "jquery-ui-dist/jquery-ui"


//import topbar & navbar
import ReUseNavBar from "../reUseComponents/reUseNavBar"
import ReUseUtilizeCartMobileMenu from '../reUseComponents/reUseUtilizeCart&MobileMenu'
import ReUseFooterWithTimeSchedule from '../reUseComponents/reUseFooterWithTimeSchedule'
import { Link, Navigate, useNavigate } from 'react-router-dom'


import server_access_point from './config';





const Signin = () => {

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

    //token variable
    
    const navigate = useNavigate();

    //form signin using formik with yup
    const formik = useFormik({
        initialValues : {
            email : "",
            password : ""
        },
        validationSchema:Yup.object().shape({
            email : Yup.string().matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Invalid email address').required("Email Required"),
            password : Yup.string().required("Password Required")
        }),
        onSubmit: async(values, {resetForm})=>{
            //console.log("first", values)

           await axios.post(`${server_access_point}/signin`, values).then(res=>
           {
            if(res.data.status === 400){
            alert(res.data.message);
            }

            if(res.data.status === 200){
            
            //setToken(res.data.token);
            localStorage.setItem("token", res.data.token);
             //resetForm({values : ""});

            //navigate to user page
            
            navigate("/adminaccount"); 
            


            }
            
        }).catch(err=>console.log("error",err));
           
        }

    }) 

    if(localStorage.getItem("token")){
        return <Navigate to ="/adminaccount"/>
    }

    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        formik.setFieldValue(name, value.trim());
    }

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
            <div className="ltn__breadcrumb-area ltn__breadcrumb-area-2 ltn__breadcrumb-color-white bg-overlay-theme-black-90 bg-image" data-bs-bg="assets/img/contact/signin.jpg">
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
                                        <li>Login</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* BREADCRUMB AREA END */}

            {/* LOGIN AREA START */}
            <div className="ltn__login-area pb-65">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-area text-center">
                                <h1 className="section-title">Sign In <br />To  Your Account</h1>
                                {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
                                    Sit aliquid,  Non distinctio vel iste.</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="row ">
                        <div className='col-lg-2'></div>
                        <div className="col-12 col-lg-8">
                            <div className="account-login-inner">

                                {/* signin form */} 
                                <form onSubmit={formik.handleSubmit} className="ltn__form-box contact-form-box">

                                    <input type="text" name="email" placeholder="Email*" value={formik.values.email} onChange={handleInputChange}/>
                                    {(formik.touched.email && formik.errors.email) && <small style={{color:"red"}}>{formik.errors.email}</small>}

                                    <input type="password" name="password" placeholder="Password*" value={formik.values.password} onChange={handleInputChange} autoComplete='off'/>
                                    {(formik.touched.password && formik.errors.password) && <small style={{color:"red"}}>{formik.errors.password}</small>}

                                    <div className="btn-wrapper mt-0">
                                        <button className="theme-btn-1 btn btn-block w-100" type="submit">SIGN IN</button>
                                    </div>

                                    {/* <div className="go-to-btn mt-20">
                                        <a href="#" title="Wishlist" data-bs-toggle ="modal" data-bs-target="#ltn_forget_password_modal"><small>FORGOTTEN YOUR PASSWORD?</small></a>
                                    </div> */}
                                </form>

                                {/* google login component */}
                                {/* <div className="w-75" >
                                    <div className="account-create text-center w-75 m-auto">
                                        <GoogleLogin
                                        onSuccess={credentialResponse => {
                                        console.log(credentialResponse);
                                        }}
                                        theme="filled_blue"
                                        shape="circle"
                                        onError={() => {
                                            console.log('Login Failed');
                                        }}
                                        />
                                    </div>
                                </div> */}
           
                            </div>
                        </div>
                        <div className='col-lg-2'></div>
 
                       
                       
                        <div className="col-lg-6">
                            <div className="account-create text-center pt-50">
                                <h4>DON'T HAVE AN ACCOUNT?</h4>
                                <p>Add items to your wishlistget personalised recommendations <br />
                                    check out more quickly track your orders register</p>
                                <div className="btn-wrapper">
                                    <Link to="/signup" className="theme-btn-1 btn black-btn">CREATE ACCOUNT</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* LOGIN AREA END */}


            {/* <div className="w-25" style={{border:"2px solid red"}}>
                <div className="account-create text-center w-75">
                    <GoogleLogin
                    onSuccess={credentialResponse => {
                    console.log(credentialResponse);
                    }}
                    theme="filled_blue"
                    shape="circle"
                    onError={() => {
                        console.log('Login Failed');
                    }}
                    />
                </div>
            </div> */}
           

            
           
            {/* FOOTER AREA START (ltn__footer-2 ltn__footer-color-1) */}
            <ReUseFooterWithTimeSchedule />
            {/* FOOTER AREA END */}

            {/* MODAL AREA START (Add To Cart Modal) */}
            <div className="ltn__modal-area ltn__add-to-cart-modal-area---">
                <div className="modal fade" id="ltn_forget_password_modal" tabIndex="-1">
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
                                                <div className="modal-product-info text-center">
                                                    <h4>FORGET PASSWORD?</h4>
                                                    <p className="added-cart"> Enter you register email.</p>
                                                    <form action="#" className="ltn__form-box">
                                                        <input type="text" name="email" placeholder="Type your register email*" />
                                                        <div className="btn-wrapper mt-0">
                                                            <button className="theme-btn-1 btn btn-block" type="submit">Submit</button>
                                                        </div>
                                                    </form>
                                                </div>
                                                {/* additional-info */}
                                                <div className="additional-info d-none">
                                                    <p>We want to give you <b>10% discount</b> for your first order, <br />  Use discount code at checkout</p>
                                                    <div className="payment-method">
                                                        <img src="assert/img/icons/payment.png" alt="#" />
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

        {/* scroll to top */}
          <ScrollToTopButton />
         {/* scroll to top End*/}



    </div>
  )
}

export default Signin