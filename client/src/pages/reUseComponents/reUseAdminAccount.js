import React, {useEffect, useState} from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import $ from "jquery"
import "jquery-ui-dist/jquery-ui"
import { useFormik } from 'formik'
import * as Yup from "yup"
import axios from 'axios'
import jwt_decode from "jwt-decode";
import "../../App.css"



//import topbar & navbar
import ReUseNavBar from './reUseNavBar'
import ReUseUtilizeCartMobileMenu from './reUseUtilizeCart&MobileMenu'
import ReUseFooterWithTimeSchedule from './reUseFooterWithTimeSchedule'
import ScrollToTopButton from './ScrollToTopButton'


//import inspection report
import ReUseInspectionReport from './reUseInspectionReport'
 

import server_access_point from '../components/config'





const ReUseAdminAccount = (params) => {

    let navigate = useNavigate();

    //get all users data

    const [usersdate, setUsersData] = useState([]);

    const [inspectionReport, setInspectionReport] = useState([]);


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
     
  
        axios.get(`${server_access_point}/getsignupuserdetails`).then(res=> setUsersData(res.data)).catch(err=>console.log(err));

        axios.get(`${server_access_point}/getinspectionreport`).then(res=> setInspectionReport(res.data)).catch(err=>console.log(err));


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
            },

        validationSchema:Yup.object().shape({

            // email : Yup.string().matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Invalid email address').required("Email Required"),

            //  mobileNO : Yup.string().required('Phone number is required').matches(/^\d+$/, 'Phone number must only contain numbers').min(10, 'Phone number must be exactly 10 digits').max(10, 'Phone number must be exactly 10 digits'),

            password : Yup.string().min(6, 'Password must be at least six characters long.').max(16,'Maximum of sixteen character allowed!').required("Password Required"),

            }),

        onSubmit: async(values, {resetForm})=>{
           // alert("clicked")
           // console.log("admin", values);
           
            await axios.put(`${server_access_point}/editadmin/${params.value1._id}`, values).then(res=>
            {
                alert(res.data.message); 

                resetForm({values : ""});

                 //navigate to signin page
                // if(res.data.status === 200 && res.data.response === true){
                //     navigate("/signin");
                // }
            }).catch(err=>console.log(err));
            
        }               

    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        formik.setFieldValue(name, value.trim());
      };


       //form validaqtion using formik add user (both mechanic & user)
    const formik1 = useFormik({
        initialValues: {
            adduserName : "",
            addemail : "",
            addmobileNO : "",
            adduserType : "",
            addpassword : "",
            addconfirmPassword : "",
            // checkbox : false
            },

        validationSchema:Yup.object().shape({

            adduserName : Yup.string().required("Name is Required"),

            addemail : Yup.string().matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Invalid email address').required("Email Required"),

            addmobileNO : Yup.string().required('Phone number is required').matches(/^\d+$/, 'Phone number must only contain numbers').min(10, 'Phone number must be exactly 10 digits').max(10, 'Phone number must be exactly 10 digits'),

            adduserType : Yup.string().required("Specify Type"),

            addpassword : Yup.string().min(6, 'Password must be at least six characters long.').max(16,'Maximum of sixteen character allowed!').required("Password Required"),

            addconfirmPassword : Yup.string().oneOf([Yup.ref('addpassword'), null],"Passwords didn't match ! ").required("Password Required"),

            // checkbox: Yup.boolean().oneOf([true], 'Click the Check Box to Accept Terms & Conditions')
            }),

        onSubmit: async(values, {resetForm})=>{

            //console.log("addudser", values);
           
            await axios.post(`${server_access_point}/signup`, values).then(res=>
            {
                alert(res.data.message); 

                resetForm({values : ""});

            }).catch(err=>console.log(err));
            
        }               

    })
    
    //add user handle Onchange event

    const handleInputChange1 = (event) => {
        const { name, value } = event.target;
        formik1.setFieldValue(name, value.trim());
      };


      //handle Delete mechanic

      const handleDeletemechanic = (list)=>{
        let response = window.confirm(` Want to Delete This MEchanic #${list.userName}`);

        if(response){
        axios.delete(`${server_access_point}/deletemechanic/${list._id}`).then(res=>setUsersData(res.data)).catch(err=>console.log(err));
        }

      }

      //handle Edit mechanic

const editMechanicData = (data)=>{
    navigate("/editmechanic", {state : data})
}






      //handle Delete user

      const handleDeleteuser = async(list)=>{
        let response = window.confirm(` Want to Delete This User #${list.userName}`);

        if(response){
        axios.delete(`${server_access_point}/deleteuser/${list._id}`).then(res=>setUsersData(res.data)).catch(err=>console.log(err));
        }
        
      }

      //handle edit user

      const editUserData = (data)=>{
        navigate("/edituser", {state : data})
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

                                                    <a data-bs-toggle ="tab" href="#liton_tab_1_6">Create Mechanic / User <i className="fas fa-user-plus"></i></a>
                                                    <a data-bs-toggle ="tab" href="#liton_tab_1_7">All Mechanics <i className="fas fa-users"></i></a>
                                                    <a data-bs-toggle ="tab" href="#liton_tab_1_8">All Users <i className="fas fa-users"></i></a>

                                                    

                                                    <a data-bs-toggle ="tab" href="#liton_tab_1_2">Job Assign To Mechanic <i class="fas fa-wrench"></i></a>
                                                    <a data-bs-toggle ="tab" href="#liton_tab_1_9">All Inspection Reports<i className="fas fa-arrow-down"></i></a>
                                                    <a data-bs-toggle ="tab" href="#liton_tab_1_3">Inspection Report <i class="fas fa-file-invoice"></i></a>
                                                    <a data-bs-toggle ="tab" href="#liton_tab_1_4">State Of Vehicles <i className="fas fa-car-side"></i></a>
                                                    <a data-bs-toggle ="tab"  onClick={params.value2}> Logout <i className="fas fa-sign-out-alt"></i></a>
                                                
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="tab-content">

                                                <div className="tab-pane fade" id="liton_tab_1_5">
                                                    <div className="ltn__myaccount-tab-content-inner">
                                                        <p>Admin Details...</p>

                                                        <div className="ltn__form-box">

                                                            <form onSubmit={formik.handleSubmit}>
                                                                <div className="row mb-50">

                                                                    <div className="col-md-6">
                                                                        <label>Name:</label>

                                                                        <input type="text" name="userName" placeholder="Name" value={formik.values.userName} onChange={handleInputChange}/>

                                                                    </div>

                                                                    <div className="col-md-6">
                                                                        <label>Email:</label>

                                                                        <input type="email" name="email" placeholder="Email*"  value={formik.values.email}  readOnly/>
                                                                
                                                                    </div>

                                                                    <div className="col-md-6">
                                                                        <label>Mobile Number:</label> 

                                                                        <input type="text" inputMode="numeric" pattern="[0-9]*" name="mobileNO" placeholder="Mobile No..." value={formik.values.mobileNO} onChange={handleInputChange} />

                                                                    </div>

                                                                    <div className="col-md-6">
                                                                        <label>Password:</label>

                                                                        <input type="password" name="password" placeholder="Password*"  value={formik.values.password} onChange={handleInputChange} />

                                                                        {(formik.touched.password && formik.errors.password) && <small style={{color:"red"}}>{formik.errors.password}</small>}

                                                                    </div>
                                                                    
                                                                </div>

                                                                {/* <fieldset>
                                                                    <legend>Password change</legend>
                                                                    <div className="row">
                                                                        <div className="col-md-12">
                                                                            <label>Current password (leave blank to leave unchanged):</label>
                                                                            <input type="password" name="ltn__name" />
                                                                            <label>New password (leave blank to leave unchanged):</label>
                                                                            <input type="password" name="ltn__lastname" />
                                                                            <label>Confirm new password:</label>
                                                                            <input type="password" name="ltn__lastname" />
                                                                        </div>
                                                                    </div>
                                                                </fieldset> */}

                                                                <div className="btn-wrapper">
                                                                    <button type="submit" className="btn theme-btn-1 btn-effect-1 text-uppercase">Save Changes</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="tab-pane fade" id="liton_tab_1_6">
                                                    <div className="ltn__myaccount-tab-content-inner">
                                                        <p>Create Mechanic / User...</p>

                                                        <div className="ltn__form-box">

                                                            <form onSubmit={formik1.handleSubmit}>
                                                                <div className="row mb-50">

                                                                    <div className="col-md-6"> 
                                                                        <label>Name:</label>

                                                                        <input type="text" name="adduserName" placeholder="Name" value={formik1.values.adduserName} onChange={handleInputChange1}/>
                                                                        {(formik1.touched.adduserName && formik1.errors.adduserName) && <small style={{color:"red"}}>{formik1.errors.adduserName}</small>} 


                                                                    </div>

                                                                    <div className="col-md-6">
                                                                        <label>Email:</label>

                                                                        <input type="email" name="addemail" placeholder="Email*"  value={formik1.values.addemail} onChange={handleInputChange1}/>
                                                                        {(formik1.touched.addemail && formik1.errors.addemail) && <small style={{color:"red"}}>{formik1.errors.addemail}</small>}

                                                                
                                                                    </div>

                                                                    <div className="col-md-6">
                                                                        <label>Mobile Number:</label> 

                                                                        <input type="text" inputMode="numeric" pattern="[0-9]*" name="addmobileNO" placeholder="Mobile No..." value={formik1.values.addmobileNO} onChange={handleInputChange1} />
                                                                        {(formik1.touched.addmobileNO && formik1.errors.addmobileNO) && <small style={{color:"red"}}>{formik1.errors.addmobileNO}</small>}


                                                                    </div>

                                                                    <div className="col-md-6">
                                                                        <label>Type:</label> 

                                                                        <select name='adduserType' onChange={formik1.handleChange} className="col-md-6">
                                                                            <option>---select---</option>
                                                                            <option value="mechanic">Mechanic</option>
                                                                            <option value="user">User</option>
                                                                        </select>
                                                                        <br />
                                                                        {(formik1.touched.adduserType && formik1.errors.adduserType) && <small style={{color:"red"}}>{formik1.errors.adduserType}</small>}


                                                                    </div>

                                                                    <div className="col-md-6">
                                                                        <label>Password:</label>

                                                                        <input type="password" name="addpassword" placeholder="Password*"  value={formik1.values.addpassword} onChange={handleInputChange1} />

                                                                        {(formik1.touched.addpassword && formik1.errors.addpassword) && <small style={{color:"red"}}>{formik1.errors.addpassword}</small>}

                                                                    </div>

                                                                    <div className="col-md-6">
                                                                        <label>Conform Password:</label>

                                                                        <input type="password" name="addconfirmPassword" placeholder="Confirm Password*" value={formik1.values.addconfirmPassword} onChange={handleInputChange1}/>
                                                                        {(formik1.touched.addconfirmPassword && formik1.errors.addconfirmPassword) && <small style={{color:"red"}}>{formik1.errors.addconfirmPassword}</small>}
                                    

                                                                    </div>
                                                                    
                                                                </div>


                                                                <div className="btn-wrapper">
                                                                    <button type="submit" className="btn theme-btn-1 btn-effect-1 text-uppercase">Add User</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="tab-pane fade" id="liton_tab_1_7">
                                                    <div className="ltn__myaccount-tab-content-inner">
                                                        <p>All <strong>Mechanics</strong>.</p>
                                                    </div>

                                                    <div className="ltn__myaccount-tab-content-inner">
                                                        
                                                        <div className="table-responsive">
                                                            <table className="table">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Mechanic Name</th>
                                                                        <th>Email</th>
                                                                        <th>Date</th>
                                                                        <th>Action</th>
                                                                    </tr>
                                                                </thead>

                                                                {usersdate.length > 0 ?  usersdate.filter(list=>list.userType === "mechanic").map(list=>
                                                                <tbody key={list._id}>
                                                                    <tr>
                                                                        <td>{list.userName}</td>
                                                                        <td>{list.email}</td>
                                                                        <td>{new Date(list.date).toDateString()}</td>
                                                                        <td > 
                                                                            <button type='button' onClick={()=>handleDeletemechanic(list)} >
                                                                            <i className="fas fa-trash" ></i>
                                                                            </button>
                                                                            &emsp;
                                                                            <button type='button' onClick={()=>editMechanicData(list)}>
                                                                            <i className="fas fa-edit" ></i>
                                                                            </button>
                                                                        </td>
                                                                    </tr>
                                                                    
                                                                </tbody>
                                                                )
                                                            :
                                                            <div className="table">
                                                                <p>No Data...</p>
                                                            </div>
                                                            }
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>



                                                <div className="tab-pane fade" id="liton_tab_1_8"> 
                                                    <div className="ltn__myaccount-tab-content-inner">
                                                        <p>All <strong>Users</strong>.</p>
                                                    </div>

                                                    <div className="ltn__myaccount-tab-content-inner">
                                                        
                                                        <div className="table-responsive">
                                                            <table className="table">
                                                                <thead>
                                                                    <tr>
                                                                        <th>User Name</th>
                                                                        <th>Email</th>
                                                                        <th>Date</th>
                                                                        <th>Action</th>
                                                                    </tr>
                                                                </thead>

                                                                {usersdate.length > 0 ?  usersdate.filter(list=>list.userType === "user").map(list=>
                                                                <tbody key={list._id}>
                                                                    <tr>
                                                                        <td>{list.userName}</td>
                                                                        <td>{list.email}</td>
                                                                        <td>{new Date(list.date).toDateString()}</td>
                                                                        <td> 
                                                                            <button type='button' onClick={()=>handleDeleteuser(list)} >
                                                                            <i class="fas fa-trash"></i>
                                                                            </button>
                                                                             &emsp;
                                                                            <button type='button' onClick={()=>editUserData(list)} >
                                                                            <i class="fas fa-edit"></i>
                                                                            </button>
                                                                            
                                                                        </td>                                                                   
                                                                    </tr>
                                                                    
                                                                </tbody>
                                                                )
                                                            :
                                                            <div className="table">
                                                                <p>No Data...</p>
                                                            </div>
                                                            }
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="tab-pane fade active show" id="liton_tab_1_1">
                                                    <div className="ltn__myaccount-tab-content-inner">
                                                        <p>Hello <strong>{params.value1.userName}</strong></p>
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
                                                   <ReUseInspectionReport />
                                                </div>

                                                <div className="tab-pane fade" id="liton_tab_1_9"> 
                                                    <div className="ltn__myaccount-tab-content-inner">
                                                        <p>All <strong>Inspection Reports</strong>.</p>
                                                    </div>

                                                    <div className="ltn__myaccount-tab-content-inner">
                                                        
                                                        <div className="table-responsive">
                                                            <table className="table">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Capture Image</th>
                                                                        <th>Vehicle Name</th>
                                                                        <th>Vehicle Number</th>
                                                                        <th>Model Number</th>
                                                                        <th>Contact Number</th>
                                                                        <th>Readings</th>
                                                                        <th>Remarks</th>
                                                                        <th>Date</th>
                                                                        {/* <th>Action</th> */}
                                                                    </tr>
                                                                </thead>

                                                                {inspectionReport.length > 0 ?  inspectionReport.map(list=>
                                                                <tbody key={list._id}>
                                                                    <tr>
                                                                        <td><img className='captureImg' src={list.capturingVehicleImg} alt='image'/></td>
                                                                        <td>{list.vehicleName}</td>
                                                                        <td>{list.vehicleNumber}</td>
                                                                        <td>{list.modelNumber}</td>
                                                                        <td>{list.contactNumber}</td>
                                                                        <td>{list.readings}</td>
                                                                        <td>{list.remarks}</td>
                                                                        <td>{new Date(list.date).toDateString()}</td>
                                                                        {/* <td> 
                                                                            <button type='button' onClick={()=>handleDeleteuser(list)} >
                                                                            <i class="fas fa-trash"></i>
                                                                            </button>
                                                                             &emsp;
                                                                            <button type='button' onClick={()=>editUserData(list)} >
                                                                            <i class="fas fa-edit"></i>
                                                                            </button>
                                                                            
                                                                        </td>                                                                    */}
                                                                    </tr>
                                                                    
                                                                </tbody>
                                                                )
                                                            :
                                                            <div className="table">
                                                                <p>No Data Found...</p>
                                                            </div>
                                                            }
                                                            </table>
                                                        </div>
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

           

             {/* mechanic edit model end */}

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

export default ReUseAdminAccount