import React from 'react'
import { Link } from 'react-router-dom'

const ReUseTopBar = () => {
  return (
    <div>
        {/* ltn__header-top-area start */}
        <div className="ltn__header-top-area top-area-color-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="ltn__top-bar-menu">
                            <ul>
                                <li><a href="mailto:Service@carnationautorepair.com"><i className="icon-mail"></i> Service@carnationautorepair.com</a></li>
                                <li><Link to="/contact"><i className="icon-placeholder"></i> 3245 East University Drive McKinney, TX 75069</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="top-bar-right text-end">
                            <div className="ltn__top-bar-menu">
                                <ul>
                                     {/* <li>
                                        ltn__language-menu 
                                        <div className="ltn__drop-menu ltn__currency-menu ltn__language-menu">
                                            <ul>
                                                <li><a href="#" className="dropdown-toggle"><span className="active-currency">English</span></a>
                                                    <ul>
                                                        <li><a href="#">Arabic</a></li>
                                                        <li><a href="#">Bengali</a></li>
                                                        <li><a href="#">Chinese</a></li>
                                                        <li><a href="#">English</a></li>
                                                        <li><a href="#">French</a></li>
                                                        <li><a href="#">Hindi</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </li> */}
                                    <li>
                                       {/* ltn__social-media */}
                                        <div className="ltn__social-media">
                                            <ul>
                                                <li><a href="#" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                                                <li><a href="#" title="Twitter"><i className="fab fa-twitter"></i></a></li>
                                                
                                                <li><a href="#" title="Instagram"><i className="fab fa-instagram"></i></a></li>
                                                {/* <li><a href="#" title="Dribbble"><i className="fab fa-dribbble"></i></a></li> */}
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       {/* ltn__header-top-area end */}

    </div>
  )
}

export default ReUseTopBar