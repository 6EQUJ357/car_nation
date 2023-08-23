import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ReUseUtilizeCartMobileMenu = () => {
    let navigate = useNavigate();

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
    <div>
       
    <div id="ltn__utilize-cart-menu" className="ltn__utilize ltn__utilize-cart-menu">    {/* Utilize Cart Menu Start */}
        <div className="ltn__utilize-menu-inner ltn__scrollbar">
            <div className="ltn__utilize-menu-head">
                <span className="ltn__utilize-menu-title">Cart</span>
                <button className="ltn__utilize-close">×</button>
            </div>
            <div className="mini-cart-product-area ltn__scrollbar">
                <div className="mini-cart-item clearfix">
                    <div className="mini-cart-img">
                        <a href="#"><img src = "assets/img/product/1.png" alt="Image" /></a>
                        <span className="mini-cart-item-delete"><i className="icon-cancel"></i></span>
                    </div>
                    <div className="mini-cart-info">
                        <h6><a href="#">Wheel Bearing Retainer</a></h6>
                        <span className="mini-cart-quantity">1 x $65.00</span>
                    </div>
                </div>
                <div className="mini-cart-item clearfix">
                    <div className="mini-cart-img">
                        <a href="#"><img src = "assets/img/product/2.png" alt="Image" /></a>
                        <span className="mini-cart-item-delete"><i className="icon-cancel"></i></span>
                    </div>
                    <div className="mini-cart-info">
                        <h6><a href="#">Brake Conversion Kit</a></h6>
                        <span className="mini-cart-quantity">1 x $85.00</span>
                    </div> 
                </div>
                <div className="mini-cart-item clearfix">
                    <div className="mini-cart-img">
                        <a href="#"><img src = "assets/img/product/3.png" alt="Image" /></a>
                        <span className="mini-cart-item-delete"><i className="icon-cancel"></i></span>
                    </div>
                    <div className="mini-cart-info">
                        <h6><a href="#">OE Replica Wheels</a></h6>
                        <span className="mini-cart-quantity">1 x $92.00</span>
                    </div>
                </div>
                <div className="mini-cart-item clearfix">
                    <div className="mini-cart-img">
                        <a href="#"><img src = "assets/img/product/4.png" alt="Image" /></a>
                        <span className="mini-cart-item-delete"><i className="icon-cancel"></i></span>
                    </div>
                    <div className="mini-cart-info">
                        <h6><a href="#">Shock Mount Insulator</a></h6>
                        <span className="mini-cart-quantity">1 x $68.00</span>
                    </div>
                </div>
            </div>
            <div className="mini-cart-footer">
                <div className="mini-cart-sub-total">
                    <h5>Subtotal: <span>$310.00</span></h5>
                </div>
                <div className="btn-wrapper">
                    <Link to="/cart" className="theme-btn-1 btn btn-effect-1">View Cart</Link>
                    <Link to="/cart" className="theme-btn-2 btn btn-effect-2">Checkout</Link>
                </div>
                <p>Free Shipping on All Orders Over $100!</p>
            </div>

        </div>
    </div>
   {/* Utilize Cart Menu End */}

   {/* Utilize Mobile Menu Start */}
    <div id="ltn__utilize-mobile-menu" className="ltn__utilize ltn__utilize-mobile-menu">
        <div className="ltn__utilize-menu-inner ltn__scrollbar">
            <div className="ltn__utilize-menu-head">
                <div className="site-logo">
                <Link  to="/"><img src="assets/img/logo_1.png" alt="Logo"/></Link>   
                </div>
                <button className="ltn__utilize-close">×</button>
            </div>
            {/* <div className="ltn__utilize-menu-search-form">
                <form action="#">
                    <input type="text" placeholder="Search..." />
                    <button><i className="fas fa-search"></i></button>
                </form>
            </div> */}
            <div className="ltn__utilize-menu">
                <ul>
                    <li><Link to="/">Home</Link>
                        {/* <ul className="sub-menu">
                            <li><a href="index.html">Home Style - 01</a></li>
                            <li><a href="index-2.html">Home Style - 02</a></li>
                            <li><a href="index-3.html">Home Style - 03</a></li>
                            <li><a href="index-4.html">Home Style - 04</a></li>
                            <li><a href="index-5.html">Home Style - 05 <span className="menu-item-badge">video</span></a></li>
                            <li><a href="index-6.html">Home Style - 06</a></li>
                            <li><a href="index-7.html">Home Style - 07</a></li>
                            <li><a href="index-8.html">Home Style - 08 <span className="menu-item-badge">Map</span></a></li>
                            <li><a href="index-9.html">Home Style - 09</a></li>
                            <li><a href="index-10.html">Home Style - 10</a></li>
                            <li><a href="index-11.html">Home Style - 11</a></li>
                            <li><a href="index-12.html">Home Style - 12</a></li>
                            <li><a href="index-13.html">Home Style - 13</a></li>
                            <li><a href="index-14.html">Home Style - 14</a></li>
                            <li><a href="index-15.html">Home Style - 15</a></li>
                            <li><a href="index-16.html">Home Style - 16</a></li>
                        </ul> */}
                    </li>

                    <li><Link to="/about">About</Link>
                        {/* <ul className="sub-menu">
                            <li><a href="about.html">About</a></li>
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

                    <li className="menu-icon"><Link to="/service">Services</Link>
                        <ul style={{listStyleType:"none"}}>
                            <li><Link to="/generalmaintenance"><span style={{color:"red"}}><i className="icon-mechanic"></i></span>  General Maintenance</Link></li>
                            <li><Link to="/breakingservices"><span style={{color:"red"}}><i className="icon-car-parts-3"></i></span> Brake Services</Link></li>
                            <li><Link to="/enginerepairs"><span style={{color:"red"}}><i className="icon-car-parts"></i></span> Engine Repair</Link></li>
                            <li><Link to="/transmissionservices"><span style={{color:"red"}}><i className="icon-repair"></i></span>  Transmission Services</Link></li>
                            <li><Link to="/electricalsystemrepairs"><span style={{color:"red"}}><i className="icon-automobile"></i></span>  Electrical System Repairs</Link></li>
                            <li><Link to="/heatingcoolingsystem"><span style={{color:"red"}}><i className="icon-car-parts-1"></i></span>  Heating and Cooling Systems</Link></li>
                            <li><Link to="/suspensionsteering"><span style={{color:"red"}}><i className="icon-car-parts-2"></i></span>  Suspension and Steering</Link></li>
                            <li><Link to="/exhaustsystemrepairs"><span style={{color:"red"}}><i className="icon-car-parts-4"></i></span>  Exhaust System Repairs</Link></li>
                            <li><Link to="/wheeltireservices"><span style={{color:"red"}}><i className="icon-maintenance-1"></i></span>  Wheel and Tire Services</Link></li>
                            <li><Link to="/diagnosticsTroubleShooting"><span style={{color:"red"}}><i className="icon-car-parts-5"></i></span>  Diagnostics and Troubleshooting</Link></li>
                            
                        
                            {/*                                                 
                            <li><Link to="/portfolio">Portfolio</Link></li>
                            
                            <li><Link to="/team">Team</Link></li>
                            
                            <li><Link to="/maplocation">Google Map Locations</Link></li> */}
                        </ul>
                    </li>


                    {/* <li><a href="#">Shop</a>
                        <ul className="sub-menu">
                            <li><a href="shop.html">Shop</a></li>
                            <li><a href="shop-grid.html">Shop Grid</a></li>
                            <li><a href="shop-left-sidebar.html">Shop Left sidebar</a></li>
                            <li><a href="shop-right-sidebar.html">Shop right sidebar</a></li>
                            <li><a href="product-details.html">Shop details </a></li>
                            <li><a href="product-details-2.html">Shop details 02</a></li>
                            <li><a href="shop-car-grid.html">Shop Car Grid</a></li>
                            <li><a href="shop-car-left-sidebar.html">Shop Car Left sidebar</a></li>
                            <li><a href="shop-car-right-sidebar.html">Shop Car right sidebar</a></li>
                            <li><a href="product-details-3.html">Shop Car details </a></li>
                            <li><a href="cart.html">Cart</a></li>
                            <li><a href="wishlist.html">Wishlist</a></li>
                            <li><a href="checkout.html">Checkout</a></li>
                            <li><a href="order-tracking.html">Order Tracking</a></li>
                            <li><a href="account.html">My Account</a></li>
                            <li><a href="login.html">Sign in</a></li>
                            <li><a href="register.html">Register</a></li>
                        </ul>
                    </li>
                    <li><a href="#">News</a>
                        <ul className="sub-menu">
                            <li><a href="blog.html">News</a></li>
                            <li><a href="blog-grid.html">News Grid</a></li>
                            <li><a href="blog-left-sidebar.html">News Left sidebar</a></li>
                            <li><a href="blog-right-sidebar.html">News Right sidebar</a></li>
                            <li><a href="blog-details.html">News details</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Pages</a>
                        <ul className="sub-menu">
                            <li><a href="about.html">About</a></li>
                            <li><a href="service.html">Services</a></li>
                            <li><a href="service-details.html">Service Details</a></li>
                            <li><a href="portfolio.html">Portfolio</a></li>
                            <li><a href="portfolio-2.html">Portfolio - 02</a></li>
                            <li><a href="portfolio-details.html">Portfolio Details</a></li>
                            <li><a href="team.html">Team</a></li>
                            <li><a href="team-details.html">Team Details</a></li>
                            <li><a href="faq.html">FAQ</a></li>
                            <li><a href="history.html">History</a></li>
                            <li><a href="appointment.html">Appointment</a></li>
                            <li><a href="locations.html">Google Map Locations</a></li>
                            <li><a href="404.html">404</a></li>
                            <li><a href="contact.html">Contact</a></li>
                            <li><a href="coming-soon.html">Coming Soon</a></li>
                        </ul>
                    </li> */}

                    <li><Link to="/contact">Contact</Link></li>
                    <li className="special-link"><Link to="/appointment">GET APPOINTMENT</Link></li>
                </ul>

            </div>

            <div className="ltn__utilize-buttons ltn__utilize-buttons-2">
                {/* <ul>
                    <li>
                        <Link to="/myaccount" title="My Account">
                            <span className="utilize-btn-icon">
                                <i className="far fa-user"></i>
                            </span>
                            My Account
                        </Link>
                    </li> */}

                    <ul>
                        <li>
                            
                            <ul>
                                {localStorage.getItem("token") ?
                                <>
                                <li><button style={{border:"none", backgroundColor:"white"}}><Link to="/signin" ><a><i className="icon-user"></i></a> Account</Link></button></li> 

                                <li><button type='button' onClick={signuphandle} style={{border:"none", backgroundColor:"white"}}>Sign Out</button></li>
                                    
                                </>           
                                :                                                                      
                                <li><Link to="/signin" >Sign in</Link></li>
                                                                                                        
                                }

                                
                            </ul>
                        </li>
                        {/* </ul> */}
                        {/* <li>
                            <Link to="/wishlist" title="Wishlist">
                                <span className="utilize-btn-icon">
                                    <i className="far fa-heart"></i>
                                    <sup>3</sup>
                                </span>
                                Wishlist
                            </Link>
                        </li> */}
                        {/* <li>
                            <Link to="/cart" title="Shoping Cart">
                                <span className="utilize-btn-icon">
                                    <i className="fas fa-shopping-cart"></i>
                                    <sup>5</sup>
                                </span>
                                Shoping Cart
                            </Link>
                        </li> */}
                    </ul>
            </div>
            <div className="ltn__social-media-2">
                <ul>
                    <li><a href="#" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#" title="Twitter"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#" title="Linkedin"><i className="fab fa-linkedin"></i></a></li>
                    <li><a href="#" title="Instagram"><i className="fab fa-instagram"></i></a></li>
                </ul>
            </div>
        </div>
        {/* Utilize Mobile Menu End */}

    </div>
   
    <div className="ltn__utilize-overlay"></div>

    </div>
  )
}

export default ReUseUtilizeCartMobileMenu