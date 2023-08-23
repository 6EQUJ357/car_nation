import React from 'react'
import { Link } from 'react-router-dom'


const ReUseFooterWithTimeSchedule = () => {
  return (
    <div>
         {/* FOOTER AREA START (ltn__footer-2 ltn__footer-color-1) */}
         <footer className="ltn__footer-area ltn__footer-2 ltn__footer-color-1">
                    <div className="footer-top-area footer-top-extra-padding  section-bg-2 bg-image" data-bs-bg="assets/img/home/footer.avif">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-4 col-md-5">
                                    <div className="footer-widget footer-about-widget clearfix">
                                        <h4 className="footer-title">About Us.</h4>
                                        <p>Welcome to <Link to="/">Car Nation</Link>, your premier choice for reliable and luxurious transportation in the United States. With a commitment to excellence and a focus on customer satisfaction, we pride ourselves on delivering top-notch car services that meet the needs of our discerning clientele.</p>
                                        {/* <h4 className="footer-title">Social.</h4> */}
                                        <div className="ltn__social-media-4">
                                            <ul>
                                                <li><a href="#" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                                                <li><a href="#" title="Twitter"><i className="fab fa-twitter"></i></a></li>
                                                <li><a href="#" title="Instagram"><i className="fab fa-instagram"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-8 col-md-7">
                                    <div className="footer-widget footer-menu-widget footer-menu-widget-2-column clearfix">
                                        <h4 className="footer-title">Services.</h4>
                                        <div className="footer-menu">
                                            <ul>
                                            <li><Link to="/generalmaintenance">General Maintenance</Link></li>
                                                <li><Link to="/breakingservices">Brake Services</Link></li>
                                                <li><Link to="/enginerepairs">Engine Repair</Link></li>
                                                <li><Link to="/transmissionservices">Transmission Services</Link></li>
                                                <li><Link to="/electricalsystemrepairs">Electrical System Repairs</Link></li>
                                                <li><Link to="/heatingcoolingsystem">Heating and Cooling Systems</Link></li>
                                            </ul>
                                        </div>
                                    
                                        <div className="footer-menu">
                                            <ul>
                                                <li><Link to="/suspensionsteering">Suspension and Steering</Link></li>
                                                <li><Link to="/exhaustsystemrepairs">Exhaust System Repairs</Link></li>
                                                <li><Link to="/wheeltireservices">Wheel and Tire Services</Link></li>
                                                <li><Link to="/diagnosticsTroubleShooting">Diagnostics and Troubleshooting</Link></li> 
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="col-xl-4 col-md-5">
                                    <div className="footer-widget ltn__footer-timeline-widget ltn__footer-timeline-widget-1 bg-image bg-overlay-theme-black-90" data-bs-bg="assets/img/service/footer.avif">
                                        <h6 className="ltn__secondary-color text-uppercase">// time shedule</h6>
                                        <h4 className="footer-title">Meet In Timeline.</h4>
                                        <ul>
                                            <li>Monday <span>9:00 AM - 6:00 PM</span></li>
                                            <li>Tuesday <span>9:00 AM - 6:00 PM</span></li>
                                            <li>Wednesday <span>9:00 AM - 6:00 PM</span></li>
                                            <li>Thursday <span>9:00 AM - 6:00 PM</span></li>
                                            <li>Friday <span>9:00 AM - 6:00 PM</span></li>
                                            <li>Saturday <span>9:00 AM - 6:00 PM</span></li>
                                            <li>Sunday <span>Official Holiday</span></li>
                                        </ul>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="ltn__copyright-area ltn__copyright-2">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-12">
                                    <div className="site-logo-wrap" >
                                        <div className="site-logo"  style={{width:"200px", height:"auto"}}>
                                            <Link to="/"><img src = "assets/img/logo_1.png" alt="Logo" /></Link>
                                        </div>
                                        <div className="get-support ltn__copyright-design clearfix">
                                            <div className="get-support-info">
                                                <h6>Copyright By</h6>
                                                <h4>Car Nation <span className="current-year"></span></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12 align-self-center">
                                    <div className="ltn__copyright-menu text-end">
                                        <ul>
                                            <li><a href="#">Terms & Conditions</a></li>
                                            <li><a href="#">Claim</a></li>
                                            <li><a href="#">Privacy & Policy</a></li>
                                        </ul>
                                    </div>

                                    <div className="ltn__copyright-menu text-end">
                                        <ul>
                                            <li><a href='https://msoftweb.online/' style={{fontWeight:"bold"}} target='_blank'>Design & Developed By Msoft.</a></li>
                                           
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            {/* FOOTER AREA END */}
    </div>
  )
}

export default ReUseFooterWithTimeSchedule