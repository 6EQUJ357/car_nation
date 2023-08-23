import React, {useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import $ from 'jquery';
import "jquery-ui-dist/jquery-ui"


const ReUseNavBar = () => {

    const navigate = useNavigate();

    useEffect(()=>{  
        (function($) {
            "use strict";
          
           $(document).ready(function(){
                        /* --------------------------------------------------------
                36. Header menu sticky
            -------------------------------------------------------- */
            $(window).on('scroll',function() {    
                var scroll = $(window).scrollTop();
                if (scroll < 445) {
                    $(".ltn__header-sticky").removeClass("sticky-active");
                } else {
                    $(".ltn__header-sticky").addClass("sticky-active");
                }
            }); 
           })
        })($);
    },[])


    //sign out

    const signuphandle = ()=>{
        let userResponse = window.confirm("you want to logged out...")
        if(userResponse){
            //setToken(null)
            localStorage.clear();
            navigate("/signin");
        }
    }



  return (

        
         <div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-black ltn__logo-right-menu-option">   {/* ltn__header-middle-area start */}
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="site-logo-wrap">
                            <div className="site-logo" style={{width:"200px", height:"auto"}}>
                                <Link  to="/"><img src="assets/img/logo_1.png" alt="Logo"/></Link>     
                            </div> 
                            <div className="get-support clearfix get-support-color-white" >
                                <div className="get-support-icon" >
                                    <i className="icon-call"></i>
                                </div>
                                <div className="get-support-info">
                                    <h6>Get Support</h6>
                                    <h4><a href="tel:+1 2145974922">+1 (214) 597-4922</a></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col header-menu-column menu-color-white"> 
                        <div className="header-menu d-none d-xl-block">
                            <nav>
                                <div className="ltn__main-menu">
                                    <ul>
                                        <li><Link to="/">Home</Link>
                                            {/* <ul className="sub-menu ltn__sub-menu-col-2">
                                                <li><a href="#">Home Pages</a>
                                                    <ul className="sub-menu-child">
                                                        <li>
                                                            <a href="index.html">Home Style - 01</a>
                                                            <img src="assets/img/home-demos/home-1.jpg" alt="#" />
                                                        </li>
                                                        <li>
                                                            <Link to="/">Home Style - 02</Link>
                                                            <img src="assets/img/home-demos/home-2.jpg" alt="#" />
                                                        </li>
                                                        <li>
                                                            <a href="index-3.html">Home Style - 03</a>
                                                            <img src="assets/img/home-demos/home-3.jpg" alt="#" />
                                                        </li>
                                                        <li>
                                                            <a href="index-4.html">Home Style - 04</a>
                                                            <img src="assets/img/home-demos/home-4.jpg" alt="#" />
                                                        </li>
                                                        <li>
                                                            <a href="index-5.html">Home Style - 05 <span className="menu-item-badge">video</span></a>
                                                            <img src="assets/img/home-demos/home-5.jpg" alt="#" />
                                                        </li>
                                                        <li>
                                                            <a href="index-6.html">Home Style - 06</a>
                                                            <img src="assets/img/home-demos/home-6.jpg" alt="#" />
                                                        </li>
                                                        <li>
                                                            <a href="index-7.html">Home Style - 07</a>
                                                            <img src="assets/img/home-demos/home-7.jpg" alt="#" />
                                                        </li>
                                                        <li>
                                                            <a href="index-8.html">Home Style - 08 <span className="menu-item-badge">Map</span></a>
                                                            <img src="assets/img/home-demos/home-8.jpg" alt="#" />
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Home Pages</a>
                                                    <ul className="sub-menu-child">
                                                        <li>
                                                            <a href="index-9.html">Home Style - 09</a>
                                                            <img src="assets/img/home-demos/home-9.jpg" alt="#" />
                                                        </li>
                                                        <li>
                                                            <a href="index-10.html">Home Style - 10</a>
                                                            <img src = "assets/img/home-demos/home-10.jpg" alt="#" />
                                                        </li>
                                                        <li>
                                                            <a href="index-11.html">Home Style - 11</a>
                                                            <img src = "assets/img/home-demos/home-11.jpg" alt="#" />
                                                        </li>
                                                        <li>
                                                            <a href="index-12.html">Home Style - 12</a>
                                                            <img src = "assets/img/home-demos/home-12.jpg" alt="#" />
                                                        </li>
                                                        <li>
                                                            <a href="index-13.html">Home Style - 13</a>
                                                            <img src = "assets/img/home-demos/home-13.jpg" alt="#" />
                                                        </li>
                                                        <li>
                                                            <a href="index-14.html">Home Style - 14</a>
                                                            <img src = "assets/img/home-demos/home-14.jpg" alt="#" />
                                                        </li>
                                                        <li>
                                                            <a href="index-15.html">Home Style - 15</a>
                                                            <img src = "assets/img/home-demos/home-15.jpg" alt="#" />
                                                        </li>
                                                        <li>
                                                            <a href="index-16.html">Home Style - 16</a>
                                                            <img src = "assets/img/home-demos/home-16.jpg" alt="#" />
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul> */}
                                        </li>
                                        
                                        <li><Link to="/about">About</Link>
                                            {/* <ul>
                                                <li><Link to="/about">About</Link></li>
                                                <li><a href="service.html">Services</a></li>
                                                <li><a href="service-details.html">Service Details</a></li>
                                                <li><a href="portfolio.html">Portfolio</a></li>
                                                <li><a href="portfolio-2.html">Portfolio - 02</a></li>
                                                <li><a href="portfolio-details.html">Portfolio Details</a></li>
                                                <li><a href="team.html">Team</a></li>
                                                <li><a href="team-details.html">Team Details</a></li>
                                                <li><a href="faq.html">FAQ</a></li>
                                                <li><a href="locations.html">Google Map Locations</a></li>
                                            </ul> */}
                                        </li>


                                        <li className="menu-icon" ><Link to="/service">Services</Link> 
                                            <ul> {/* style.css > line 4140, line 4154 */}
                                                <li><Link to="/generalmaintenance"> <span style={{color:"red"}}><i className="icon-mechanic"></i></span> General Maintenance</Link></li>
                                                <li><Link to="/breakingservices"><span style={{color:"red"}}><i className="icon-car-parts-3"></i></span> Brake Services</Link></li>
                                                <li><Link to="/enginerepairs"><span style={{color:"red"}}><i className="icon-car-parts"></i></span> Engine Repair</Link></li>
                                                <li><Link to="/transmissionservices"><span style={{color:"red"}}><i className="icon-repair"></i></span> Transmission Services</Link></li>
                                                <li><Link to="/electricalsystemrepairs"><span style={{color:"red"}}><i className="icon-automobile"></i></span> Electrical System Repairs</Link></li>
                                                <li><Link to="/heatingcoolingsystem"><span style={{color:"red"}}><i className="icon-car-parts-1"></i></span> Heating & Cooling Systems</Link></li>
                                                <li><Link to="/suspensionsteering"><span style={{color:"red"}}><i className="icon-car-parts-2"></i></span> Suspension & Steering</Link></li>
                                                <li><Link to="/exhaustsystemrepairs"><span style={{color:"red"}}><i className="icon-car-parts-4"></i></span> Exhaust System Repairs</Link></li>
                                                <li><Link to="/wheeltireservices"><span style={{color:"red"}}><i className="icon-maintenance-1"></i></span> Wheel & Tire Services</Link></li>
                                                <li><Link to="/diagnosticsTroubleShooting"><span style={{color:"red"}}><i className="icon-car-parts-5"></i></span> Diagnostics & Troubleshooting</Link></li>
                                               
                                            
{/*                                                 
                                                <li><Link to="/portfolio">Portfolio</Link></li>
                                               
                                                <li><Link to="/team">Team</Link></li>
                                                
                                                <li><Link to="/maplocation">Google Map Locations</Link></li> */}
                                            </ul>
                                        </li>

                                        {/* <li className="menu-icon"><a href="#">Shop</a>
                                            <ul>
                                                <li><a href="shop.html">Shop</a></li>
                                                <li><a href="shop-grid.html">Shop Grid</a></li>
                                                <li><a href="shop-left-sidebar.html">Shop Left sidebar</a></li>
                                                <li><a href="shop-right-sidebar.html">Shop right sidebar</a></li>
                                                <li><a href="product-details.html">Shop details </a></li>
                                                <li><a href="product-details-2.html">Shop details 02</a></li>
                                                <li><a href="#">Other Pages <span className="float-end"></span></a>
                                                    <ul>
                                                        <li><a href="cart.html">Cart</a></li>
                                                        <li><a href="wishlist.html">Wishlist</a></li>
                                                        <li><a href="checkout.html">Checkout</a></li>
                                                        <li><a href="order-tracking.html">Order Tracking</a></li>
                                                        <li><a href="account.html">My Account</a></li>
                                                        <li><a href="login.html">Sign in</a></li>
                                                        <li><a href="register.html">Register</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="shop-car-grid.html">Shop Car Grid</a></li>
                                                <li><a href="shop-car-left-sidebar.html">Shop Car Left sidebar</a></li>
                                                <li><a href="shop-car-right-sidebar.html">Shop Car right sidebar</a></li>
                                                <li><a href="product-details-3.html">Shop Car details </a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-icon"><a href="#">News</a>
                                            <ul>
                                                <li><a href="blog.html">News</a></li>
                                                <li><a href="blog-grid.html">News Grid</a></li>
                                                <li><a href="blog-left-sidebar.html">News Left sidebar</a></li>
                                                <li><a href="blog-right-sidebar.html">News Right sidebar</a></li>
                                                <li><a href="blog-details.html">News details</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-icon"><a href="#">Pages</a>
                                            <ul className="mega-menu">
                                                <li><a href="#">Inner Pages</a>
                                                    <ul>
                                                        <li><a href="portfolio.html">Portfolio</a></li>
                                                        <li><a href="portfolio-2.html">Portfolio - 02</a></li>
                                                        <li><a href="portfolio-details.html">Portfolio Details</a></li>
                                                        <li><a href="team.html">Team</a></li>
                                                        <li><a href="team-details.html">Team Details</a></li>
                                                        <li><a href="faq.html">FAQ</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Inner Pages</a>
                                                    <ul>
                                                        <li><a href="history.html">History</a></li>
                                                        <li><a href="appointment.html">Appointment</a></li>
                                                        <li><a href="locations.html">Google Map Locations</a></li>
                                                        <li><a href="404.html">404</a></li>
                                                        <li><a href="contact.html">Contact</a></li>
                                                        <li><a href="coming-soon.html">Coming Soon</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Shop Pages</a>
                                                    <ul>
                                                        <li><a href="shop.html">Shop</a></li>
                                                        <li><a href="shop-left-sidebar.html">Shop Left sidebar</a></li>
                                                        <li><a href="shop-right-sidebar.html">Shop right sidebar</a></li>
                                                        <li><a href="shop-grid.html">Shop Grid</a></li>
                                                        <li><a href="product-details.html">Shop details </a></li>
                                                        <li><a href="cart.html">Cart</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="shop.html"><img src = "assets/img/banner/menu-banner-1.jpg" alt="#" /></a>
                                                </li>
                                            </ul>
                                        </li> */}

                                        <li><Link to="/contact">Contact</Link></li>
                                        {/* <li><Link to="/pricedetails">Price Details</Link></li> */}
                                        <li className="special-link"><Link to="/appointment">GET APPOINTMENT</Link></li>

                                        <li>
                                            <div className="ltn__header-options ltn__header-options-2">
                                                {/* header-search-1 */}
                                                {/* <div className="header-search-wrap">
                                                    <div className="header-search-1">
                                                        <div className="search-icon">
                                                            <i className="icon-search for-search-show"></i>
                                                            <i className="icon-cancel  for-search-close"></i>
                                                        </div>
                                                    </div>
                                                    <div className="header-search-1-form">
                                                        <form id="#" method="get"  action="#">
                                                            <input type="text" name="search" value="" placeholder="Search here..."/>
                                                            <button type="submit">
                                                                <span><i className="icon-search"></i></span>
                                                            </button>
                                                        </form>
                                                    </div>
                                                </div> */}
                            
                                                {/* user-menu */}
                                                <div className="ltn__drop-menu user-menu">
                                                            <ul>
                                                                <li>
                                                                    <a><i className="icon-user"></i></a>
                                                                    <ul>
                                                                        {localStorage.getItem("token") ?
                                                                        <>
                                                                        <li><button style={{border:"none", backgroundColor:"white"}}><Link to="/signin" >Account</Link></button></li> 

                                                                        <li><button type='button' onClick={signuphandle} style={{border:"none", backgroundColor:"white"}}>Sign Out</button></li>
                                                                         
                                                                        </>           
                                                                        :                                                                      
                                                                        <li><Link to="/signin" >Sign in</Link></li>
                                                                                                                                               
                                                                        }

                                                                        {/* <li><Link to="/signup">Register</Link></li> */}
                                                                        {/* <li><Link to="/myaccount">My Account</Link></li> */}
                                                                        {/* <li><Link to="/wishlist" >Wishlist</Link></li> */}
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                </div>
                                    
                                                {/* mini-cart */}
                                                {/* <div className="mini-cart-icon"> 
                                                    <Link to="/cart" >
                                                        <i className="icon-shopping-cart"></i>
                                                        <sup>2</sup> 
                                                    </Link>
                                                </div> */}
                                                {/* mini-cart */}


                                                {/* Mobile Menu Button */}
                                                {/* <div className="mobile-menu-toggle d-xl-none">
                                                    <a href="#ltn__utilize-mobile-menu" className="ltn__utilize-toggle">
                                                        <svg viewBox="0 0 800 600">
                                                            <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top"></path>
                                                            <path d="M300,320 L540,320" id="middle"></path>
                                                            <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
                                                        </svg>
                                                    </a>
                                                </div> */}
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                               
                            </nav>
                            
                        </div>
                        
                    </div>


                    <div className="ltn__header-options ltn__header-options-2">

                        {/* Mobile Menu Button  */}
                        <div className="mobile-menu-toggle d-xl-none">
                            <a href="#ltn__utilize-mobile-menu" className="ltn__utilize-toggle">
                                <svg viewBox="0 0 800 600">
                                    <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top"></path>
                                    <path d="M300,320 L540,320" id="middle"></path>
                                    <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>
            </div>





            
        </div>
      

  )
}

export default ReUseNavBar