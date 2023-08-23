import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import $ from "jquery"
import "jquery-ui-dist/jquery-ui"
import 'jquery-nice-select/css/nice-select.css'; 
import 'jquery-nice-select/js/jquery.nice-select'; 
import {useFormik} from "formik"
import * as Yup from "yup"
import emailjs from '@emailjs/browser';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../App.css"


//import topbar & navbar
import ReUseNavBar from './reUseNavBar'
import ReUseUtilizeCartMobileMenu from './reUseUtilizeCart&MobileMenu'
import ReUseFooterWithTimeSchedule from './reUseFooterWithTimeSchedule'
import ScrollToTopButton from './ScrollToTopButton'





const ReUseAppointment = () => {

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

                 /* ---------------------------------------------------------
                    datepicker
                --------------------------------------------------------- */

                // $('.ltn__datepicker .input-group.date').datepicker({
                //     format: 'mm/dd/yyyy',
                //     /* format: 'mm/dd/yyyy', */
                //     /* format: 'yyyy/dd/mm', */
                // });

                 /* ---------------------------------------------------------
            9. Tooltip
        --------------------------------------------------------- */
        // $('[data-toggle="tooltip"]').tooltip();


        /* --------------------------------------------------------
            10. Nice Select
        --------------------------------------------------------- */
        //$('select').niceSelect();

        
    
            });
        
                  
        })($);
    },[])

    const formik = useFormik({
        initialValues : {
            firstname : "",
            lastname : "",
            email : "",
            ph_number : "",
            vehicle_brand : "",
            vehicle_model : "",
            vehicle_year : "",
            message : "",
            // special_offer : "",
            dropping_off : "",
            service_location : "",
            appointmentdate : "",
            appointment_time : ""
        },
        validationSchema: Yup.object().shape({
            firstname:Yup.string().required("First Name Required"),
            lastname:Yup.string().required("Last Name required"),
            email : Yup.string().matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Invalid email address').required("Email Required"),
            ph_number : Yup.string().required('Phone number is required').matches(/^\d+$/, 'Phone number must only contain numbers').min(10, 'Phone number must be exactly 10 digits').max(10, 'Phone number must be exactly 10 digits'),
            vehicle_brand : Yup.string().required("Select Brand"),
            vehicle_model : Yup.string().required('Select Model'),
            vehicle_year : Yup.string().required("Select year"),
            message : Yup.string().required("Specify Your Service"),
            // special_offer : Yup.string(),
            dropping_off : Yup.string().required("Choose one"),
            service_location : Yup.string().required("Select Location"),
            appointmentdate: Yup.string().required("select Date"),
            appointment_time : Yup.string().required("Select Time")        

        }),
        onSubmit : (values, {resetForm})=>{
            emailjs.sendForm('service_e8qlzcu', 'template_5cizylf', ".form", 'sscEHai5tPzFV7cwo')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            alert("Appointment request sent successfully...");
            resetForm({values:""}); 
            //console.log("first", values)

        }
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        formik.setFieldValue(name, value.trim());
      };
    
      
//   const handleDateChange = (date) => {
//     formik.setFieldValue("appointmentdate", date);
//     console.log(date);
//   }; 


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
                                    <h1 className="section-title white-color">Schedule Appointment</h1>
                                </div>
                                <div className="ltn__breadcrumb-list">
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li>Appointment</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* BREADCRUMB AREA END */}

            {/* APPOINTMENT AREA START */}
            <div className="ltn__appointment-area pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ltn__appointment-inner">

                                {/* appointment form */}
                                <form onSubmit={formik.handleSubmit} className='form'>
                                    <h6>Personal Information</h6>
                                    <div className="row">

                                        <div className="col-md-6">
                                            <div className="input-item input-item-name ltn__custom-icon">
                                                <input type="text" name="firstname" placeholder="First name" value={formik.values.firstname} onChange={handleInputChange}/>
                                            </div>
                                            {(formik.errors.firstname && formik.touched.firstname) && <small style={{color:"red"}}>{formik.errors.firstname}</small> }
                                        </div>

                                        <div className="col-md-6">
                                            <div className="input-item input-item-name ltn__custom-icon">
                                                <input type="text" name="lastname" placeholder="Last name" value={formik.values.lastname} onChange={handleInputChange}/>
                                            </div>
                                            {(formik.errors.lastname && formik.touched.lastname) && <small style={{color:"red"}}>{formik.errors.lastname}</small> }
                                        </div>

                                        <div className="col-md-6">
                                            <div className="input-item input-item-email ltn__custom-icon">
                                                <input type="email" name="email" placeholder="Email address" value={formik.values.email} onChange={handleInputChange} />
                                            </div>
                                            {(formik.errors.email && formik.touched.email) && <small style={{color:"red"}}>{formik.errors.email}</small> }
                                        </div>

                                        <div className="col-md-6">
                                            <div className="input-item input-item-phone ltn__custom-icon">
                                                <input type="text" name="ph_number" placeholder="Phone number"  value={formik.values.ph_number} onChange={handleInputChange}/>
                                            </div>
                                            {(formik.errors.ph_number && formik.touched.ph_number) && <small style={{color:"red"}}>{formik.errors.ph_number}</small> }
                                        </div>

                                    </div>

                                    <h6>Vehicles Information</h6>

                                    <div className="row">

                                        <div className="col-lg-4 col-md-6">
                                            <div className="input-item">
                                                <select className="nice-select" name='vehicle_brand' onChange={handleInputChange}>
                                                    <option value="">Brand</option>
                                                    <option value="Audi">Audi</option>
                                                    <option value="BMW">BMW</option>
                                                    <option value="Honda">Honda</option>
                                                    <option value="Nissan">Nissan</option>
                                                    <option value="others">others...</option>
                                                </select>
                                            </div>
                                            {(formik.errors.vehicle_brand && formik.touched.vehicle_brand) && <small style={{color:"red"}}>{formik.errors.vehicle_brand}</small> }
                                        </div>

                                        <div className="col-lg-4 col-md-6">
                                            <div className="input-item">
                                                <select className="nice-select" name='vehicle_model' onChange={handleInputChange}>
                                                    <option value="">Model</option>
                                                    <option value="Any">Any</option>
                                                    <option value="6 Series (1)">6 Series (1)</option>
                                                    <option value="7 Series (1)">7 Series (1)</option>
                                                    <option value="8 Series (1)">8 Series (1)</option>
                                                </select>
                                            </div>
                                            {(formik.errors.vehicle_model && formik.touched.vehicle_model) && <small style={{color:"red"}}>{formik.errors.vehicle_model}</small> }
                                        </div>

                                        <div className="col-lg-4 col-md-6">
                                            <div className="input-item">
                                                <select className="nice-select" name='vehicle_year' onChange={handleInputChange}>
                                                    <option value="">Year</option>
                                                    <option value="2015">2015</option>
                                                    <option value="2016">2016</option>
                                                    <option value="2017">2017</option>
                                                    <option value="2018">2018</option>
                                                    <option value="2019">2019</option>
                                                    <option value="2020">2020</option>
                                                </select>
                                            </div>
                                            {(formik.errors.vehicle_year && formik.touched.vehicle_year) && <small style={{color:"red"}}>{formik.errors.vehicle_year}</small> }
                                        </div>

                                        {/* <div className="col-md-12">
                                            <p><label className="input-info-save mb-0"><input type="checkbox" name="agree" /> My vehicle is not listed in the form above..</label></p>
                                        </div> */}
                                    </div>

                                    <h6>What type of service do you need on your vehicle?</h6>

                                    <div className="input-item input-item-textarea ltn__custom-icon">
                                        <textarea name="message" placeholder="Enter message" value={formik.values.message} onChange={formik.handleChange}></textarea>
                                        {(formik.errors.message && formik.touched.message) && <small style={{color:"red"}}>{formik.errors.message}</small> }
                                    </div>

                                    <div className="row">
                                        
                                        {/* <div className="col-lg-4 col-md-6">

                                            <h6>Special Offers</h6>
                                            <div className="input-item">
                                                <select className="nice-select" name='special_offer' onChange={handleInputChange}>
                                                    <option value="">Select offers</option>
                                                    <option value="$20 Off A/C Recharge or Repairs">$20 Off A/C Recharge or Repairs</option>
                                                    <option value="$25 Off Brake Service">$25 Off Brake Service</option>
                                                </select>
                                            </div>

                                        </div> */}

                                        <div className="col-lg-6 col-md-6">

                                            <h6>Wait or Droping Off</h6>
                                            <div className="input-item">
                                                <select className="nice-select" name='dropping_off' onChange={handleInputChange}>
                                                    <option value="">Please Choose</option>
                                                    <option value="Waiting">Waiting</option>
                                                    <option value="Dropping Off Vehicle">Dropping Off Vehicle</option>
                                                </select>
                                            </div>
                                            {(formik.errors.dropping_off && formik.touched.dropping_off) && <small style={{color:"red"}}>{formik.errors.dropping_off}</small> }

                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <h6>Choose Location</h6>
                                            <div className="input-item">
                                                <select className="nice-select" name='service_location' onChange={handleInputChange}>
                                                    <option value="">Location</option>
                                                    <option value="3245 East University Drive McKinney">3245 East University Drive McKinney</option>
                                                    {/* <option>Berlin (12)</option>
                                                    <option>New York (5)</option>
                                                    <option>london (7)</option> */}
                                                </select>
                                            </div>
                                            {(formik.errors.service_location && formik.touched.service_location) && <small style={{color:"red"}}>{formik.errors.service_location}</small> }
                                        </div>

                                        <div className="col-lg-6">
                                            <h6>select date</h6>

                                            <div className="row">
                                                {/* <div className="col-md-6">
                                                    <div className="input-item ltn__datepicker">
                                                        <div className="input-group date" data-provide="datepicker">
                                                            <input type="text" name="appointment_date" className="form-control" placeholder="Select Date" value={formik.values.appointment_date} onChange={formik.handleChange}/>
                                                            <div className="input-group-addon">
                                                                <i className="far fa-calendar-alt"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {(formik.errors.appointment_date && formik.touched.appointment_date) && <small style={{color:"red"}}>{formik.errors.appointment_date}</small> }
                                                </div> */}


                                                <div className="col-md-6">
                                                    <div className="input-item ltn__datepicker custom-datepicker">
                                                        <input type='date' name='appointmentdate' value={formik.values.appointmentdate} onChange={formik.handleChange}/>
                                                    {/* <DatePicker
                                                        className='react-datepicker'
                                                        selected={formik.values.appointmentdate}
                                                        onChange={handleDateChange}
                                                        placeholderText="Select Date"
                                                        dateFormat="dd/MM/yyyy" // Customize the date format if needed
                                                        isClearable // Allow clearing the selected date
                                                    /> */}
                                                    </div>
                                                    {(formik.errors.appointmentdate && formik.touched.appointmentdate) && <small style={{color:"red"}}>{formik.errors.appointment_date}</small> }
                                                </div>


                                                <div className="col-md-6">
                                                    <div className="input-item input-item-time">
                                                        <select className="nice-select" name='appointment_time'  onChange={handleInputChange}> 
                                                            <option value="">HH:MM</option>
                                                            <option value="9:00 AM - 11:00 AM">9:00 AM - 11:00 AM</option>
                                                            <option value="11:00 AM - 13:00 PM">11:00 AM - 13:00 PM</option>
                                                            <option value="13:00 PM - 15:00 PM">13:00 PM - 15:00 PM</option>
                                                            <option value="15:00 PM - 17:00 PM">15:00 PM - 17:00 PM</option>
                                                            <option value="17:00 PM - 19:00 PM">17:00 PM - 19:00 PM</option>
                                                        </select>
                                                    </div>
                                                    {(formik.errors.appointment_time && formik.touched.appointment_time) && <small style={{color:"red"}}>{formik.errors.appointment_time}</small> }
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="col-lg-6">
                                            <h6>Second Choice (optional)</h6>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="input-item ltn__datepicker">
                                                        <div className="input-group date" data-provide="datepicker">
                                                            <input type="text" className="form-control" placeholder="Select Date" />
                                                            <div className="input-group-addon">
                                                                <i className="far fa-calendar-alt"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="input-item input-item-time">
                                                        <select className="nice-select">
                                                            <option>HH:MM</option>
                                                            <option>9:00 AM - 11:00 AM</option>
                                                            <option>11:00 AM - 13:00 PM</option>
                                                            <option>13:00 PM - 15:00 PM</option>
                                                            <option>15:00 PM - 17:00 PM</option>
                                                            <option>17:00 PM - 19:00 PM</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                    <div className="alert alert-warning" role="alert">
                                        Please note that the date and time you requested may not be available. We will contact you to confirm your actual appointment details.
                                    </div>
                                    <div className="btn-wrapper text-center mt-0">
                                        <button className="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit">Submit Now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* APPOINTMENT AREA END */}

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

export default ReUseAppointment