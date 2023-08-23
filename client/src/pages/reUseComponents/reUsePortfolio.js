import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import $ from "jquery"
import "jquery-ui-dist/jquery-ui"

//import topbar & navbar
import ReUseNavBar from './reUseNavBar'
import ReUseUtilizeCartMobileMenu from './reUseUtilizeCart&MobileMenu'
import ReUseFooterWithTimeSchedule from './reUseFooterWithTimeSchedule'
import ScrollToTopButton from './ScrollToTopButton'



const ReUsePortfolio = () => {

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

                                 
                    /* --------------------------------------------------------
                        13. Isotope Gallery Active  ( Gallery / Portfolio )
                    -------------------------------------------------------- */
                    var $ltnGalleryActive = $('.ltn__gallery-active'),
                    $ltnGalleryFilterMenu = $('.ltn__gallery-filter-menu');
                /*Filter*/
                $ltnGalleryFilterMenu.on( 'click', 'button, a', function() {
                    var $this = $(this),
                        $filterValue = $this.attr('data-filter');
                    $ltnGalleryFilterMenu.find('button, a').removeClass('active');
                    $this.addClass('active');
                    $ltnGalleryActive.isotope({ filter: $filterValue });
                });
                /*Grid*/
                $ltnGalleryActive.each(function(){
                    var $this = $(this),
                        $galleryFilterItem = '.ltn__gallery-item';
                    $this.imagesLoaded( function() {
                        $this.isotope({
                            itemSelector: $galleryFilterItem,
                            percentPosition: true,
                            masonry: {
                                columnWidth: '.ltn__gallery-sizer',
                            }
                        });
                    });
                });

                /* --------------------------------------------------------
            18. Blog Slider One
        --------------------------------------------------------- */
        $('.ltn__blog-slider-one-active').not(".slick-initialized").slick({
            arrows: true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
            nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

          /* --------------------------------------------------------
            27. Brand Logo
        --------------------------------------------------------- */
        if($('.ltn__brand-logo-active').length){
            $('.ltn__brand-logo-active').not(".slick-initialized").slick({
                rtl: false,
                arrows: false,
                dots: false,
                infinite: true,
                speed: 300,
                slidesToShow: 5,
                slidesToScroll: 1,
                prevArrow: '<a class="slick-prev"><i class="fas fa-arrow-left" alt="Arrow Icon"></i></a>',
                nextArrow: '<a class="slick-next"><i class="fas fa-arrow-right" alt="Arrow Icon"></i></a>',
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            arrows: false,
                        }
                    },
                    {
                        breakpoint: 580,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        };

        
    
            });
        
                  
        })($);
    },[])


  return (
    <div>
        {/* [if lte IE 9]
        <p className="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
       [endif] */}

        {/* Add your site or application content here */}

        {/* Body main wrapper start */}

        <div classname="wrapper">
            
            {/* HEADER AREA START (header-4) */}
            <header className="ltn__header-area ltn__header-4 ltn__header-6 ltn__header-transparent gradient-color-2">

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
            <div className="ltn__breadcrumb-area ltn__breadcrumb-area-2 ltn__breadcrumb-color-white bg-overlay-theme-black-90 bg-image" data-bs-bg="assets/img/bg/9.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ltn__breadcrumb-inner ltn__breadcrumb-inner-2 justify-content-between">
                                <div className="section-title-area ltn__section-title-2">
                                    <h6 className="section-subtitle ltn__secondary-color">//  Welcome to our company</h6>
                                    <h1 className="section-title white-color">Our Portfolio</h1>
                                </div>
                                <div className="ltn__breadcrumb-list">
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li>Portfolio</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* BREADCRUMB AREA END */}

            {/* Gallery area start */}
            <div className="ltn__gallery-area mb-120">
                <div className="container">
                    {/*
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ltn__gallery-menu">
                                <div className="ltn__gallery-filter-menu portfolio-filter text-uppercase mb-50">
                                    <button data-filter="*" className="active">all</button>
                                    <button data-filter=".filter_category_1">White</button>
                                    <button data-filter=".filter_category_2">Red</button>
                                    <button data-filter=".filter_category_3">Black</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    */}

                    {/* Portfolio Wrapper Start */}
                    {/* (ltn__gallery-info-hide) Class for 'ltn__gallery-item-info' not showing */}
                    <div className="ltn__gallery-active row ltn__gallery-style-2 ltn__gallery-info-hide---">
                        <div className="ltn__gallery-sizer col-1"></div>

                        {/* gallery-item */}
                        <div className="ltn__gallery-item filter_category_3 col-lg-4 col-sm-6 col-12">
                            <div className="ltn__gallery-item-inner">
                                <div className="ltn__gallery-item-img">
                                    <a href="img/gallery/1.jpg" data-rel="lightcase:myCollection">
                                        <img src="assets/img/gallery/1.jpg" alt="Image" />
                                        <span className="ltn__gallery-action-icon">
                                            <i className="fas fa-search"></i>
                                        </span>
                                    </a>
                                </div>
                                <div className="ltn__gallery-item-info">
                                    <h4><a href="portfolio-details.html">Portfolio Link </a></h4>
                                    <p>Web Design & Development, Branding</p>
                                </div>
                            </div>
                        </div>
                        {/* gallery-item */}
                        <div className="ltn__gallery-item filter_category_2 col-lg-4 col-sm-6 col-12">
                            <div className="ltn__gallery-item-inner">
                                <div className="ltn__gallery-item-img">
                                    <a href="#ltn__inline_description_1" data-rel="lightcase:myCollection">
                                        <img src="assets/img/gallery/2.jpg" alt="Image" />
                                        <span className="ltn__gallery-action-icon">
                                            <i className="far fa-file-alt"></i>
                                        </span>
                                    </a>
                                </div>
                                <div className="ltn__gallery-item-info">
                                    <h4><a href="#ltn__inline_description_1" data-rel="lightcase:myCollection">Inline Description </a></h4>
                                    <p>Web Design & Development, Branding</p>
                                </div>
                            </div>
                        </div>
                        {/* gallery-item */}
                        <div className="ltn__gallery-item filter_category_1 col-lg-4 col-sm-6 col-12">
                            <div className="ltn__gallery-item-inner">
                                <div className="ltn__gallery-item-img">
                                    <a href="//www.youtube.com/embed/6v2L2UGZJAM?version=3" data-rel="lightcase:myCollection">
                                        <img src="assets/img/gallery/3.jpg" alt="Image" />
                                        <span className="ltn__gallery-action-icon">
                                            <i className="fab fa-youtube"></i>
                                        </span>
                                    </a>
                                </div>
                                <div className="ltn__gallery-item-info">
                                    <h4><a href="portfolio-details.html">Youtube Video </a></h4>
                                    <p>Web Design & Development, Branding</p>
                                </div>
                            </div>
                        </div>
                        {/* gallery-item */}
                        <div className="ltn__gallery-item filter_category_3 col-lg-4 col-sm-6 col-12">
                            <div className="ltn__gallery-item-inner">
                                <div className="ltn__gallery-item-img">
                                    <a href="https://player.vimeo.com/video/47362400" data-rel="lightcase:myCollection">
                                        <img src="assets/img/gallery/4.jpg" alt="Image" />
                                        <span className="ltn__gallery-action-icon">
                                            <i className="fab fa-vimeo-v"></i>
                                        </span>
                                    </a>
                                </div>
                                <div className="ltn__gallery-item-info">
                                    <h4><a href="portfolio-details.html">Vimeo Video </a></h4>
                                    <p>Web Design & Development, Branding</p>
                                </div>
                            </div>
                        </div>
                        {/* gallery-item */}
                        <div className="ltn__gallery-item filter_category_2 col-lg-4 col-sm-6 col-12">
                            <div className="ltn__gallery-item-inner">
                                <div className="ltn__gallery-item-img">
                                    <a href="media/1.mp4" data-rel="lightcase:myCollection">
                                        <img src="assets/img/gallery/5.jpg" alt="Image" />
                                        <span className="ltn__gallery-action-icon">
                                            <i className="fas fa-video"></i>
                                        </span>
                                    </a>
                                </div>
                                <div className="ltn__gallery-item-info">
                                    <h4><a href="portfolio-details.html">HTML5 Video </a></h4>
                                    <p>Web Design & Development, Branding</p>
                                </div>
                            </div>
                        </div>
                        {/* gallery-item */}
                        <div className="ltn__gallery-item filter_category_1 col-lg-4 col-sm-6 col-12">
                            <div className="ltn__gallery-item-inner">
                                <div className="ltn__gallery-item-img">
                                    <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1575.9076122223137!2d144.96590401578402!3d-37.81779982944919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b6af832249%3A0xe39e415e49a7c44e!2sFlinders%20Street%20Railway%20Station!5e0!3m2!1sen!2sbd!4v1598113544515!5m2!1sen!2sbd" data-rel="lightcase:myCollection">
                                        <img src="assets/img/gallery/6.jpg" alt="Image" />
                                        <span className="ltn__gallery-action-icon">
                                            <i className="fas fa-map-marker-alt"></i>
                                        </span>
                                    </a>
                                </div>
                                <div className="ltn__gallery-item-info">
                                    <h4><a href="portfolio-details.html">Google Map </a></h4>
                                    <p>Web Design & Development, Branding</p>
                                </div>
                            </div>
                        </div>
                        {/* gallery-item */}
                        <div className="ltn__gallery-item filter_category_3 col-lg-4 col-sm-6 col-12">
                            <div className="ltn__gallery-item-inner">
                                <div className="ltn__gallery-item-img">
                                    <a href="img/gallery/1.jpg" data-rel="lightcase:myCollection" data-lc-caption="Your caption Here">
                                        <img src="assets/img/gallery/7.jpg" alt="Image" />
                                        <span className="ltn__gallery-action-icon">
                                            <i className="fab fa-acquisitions-incorporated"></i>
                                        </span>
                                    </a>
                                </div>
                                <div className="ltn__gallery-item-info">
                                    <h4><a href="portfolio-details.html">Image Caption </a></h4>
                                    <p>Web Design & Development, Branding</p>
                                </div>
                            </div>
                        </div>
                        {/* gallery-item */}
                        <div className="ltn__gallery-item filter_category_2 col-lg-4 col-sm-6 col-12">
                            <div className="ltn__gallery-item-inner">
                                <div className="ltn__gallery-item-img">
                                    <a href="img/gallery/no-image.jpg" data-rel="lightcase:myCollection">
                                        <img src="assets/img/gallery/8.jpg" alt="Image" />
                                        <span className="ltn__gallery-action-icon">
                                            <i className="fas fa-not-equal"></i>
                                        </span>
                                    </a>
                                </div>
                                <div className="ltn__gallery-item-info">
                                    <h4><a href="portfolio-details.html">Not Found</a></h4>
                                    <p>Web Design & Development, Branding</p>
                                </div>
                            </div>
                        </div>
                        {/* gallery-item */}
                        <div className="ltn__gallery-item filter_category_1 col-lg-4 col-sm-6 col-12">
                            <div className="ltn__gallery-item-inner">
                                <div className="ltn__gallery-item-img">
                                    <a href="img/gallery/1.jpg" data-rel="lightcase:myCollection">
                                        <img src="assets/img/gallery/9.jpg" alt="Image" />
                                        <span className="ltn__gallery-action-icon">
                                            <i className="fas fa-search"></i>
                                        </span>
                                    </a>
                                </div>
                                <div className="ltn__gallery-item-info">
                                    <h4><a href="portfolio-details.html">Portfolio Link </a></h4>
                                    <p>Web Design & Development, Branding</p>
                                </div>
                            </div>
                        </div>
                        {/* gallery-item */}
                        <div className="ltn__gallery-item filter_category_3 col-lg-4 col-sm-6 col-12">
                            <div className="ltn__gallery-item-inner">
                                <div className="ltn__gallery-item-img">
                                    <a href="img/gallery/1.jpg" data-rel="lightcase:myCollection">
                                        <img src="assets/img/gallery/10.jpg" alt="Image" />
                                        <span className="ltn__gallery-action-icon">
                                            <i className="fas fa-search"></i>
                                        </span>
                                    </a>
                                </div>
                                <div className="ltn__gallery-item-info">
                                    <h4><a href="portfolio-details.html">Portfolio Link </a></h4>
                                    <p>Web Design & Development, Branding</p>
                                </div>
                            </div>
                        </div>
                        {/* gallery-item */}
                        <div className="ltn__gallery-item filter_category_2 col-lg-4 col-sm-6 col-12">
                            <div className="ltn__gallery-item-inner">
                                <div className="ltn__gallery-item-img">
                                    <a href="img/gallery/1.jpg" data-rel="lightcase:myCollection">
                                        <img src="assets/img/gallery/1.jpg" alt="Image" />
                                        <span className="ltn__gallery-action-icon">
                                            <i className="fas fa-search"></i>
                                        </span>
                                    </a>
                                </div>
                                <div className="ltn__gallery-item-info">
                                    <h4><a href="portfolio-details.html">Portfolio Link </a></h4>
                                    <p>Web Design & Development, Branding</p>
                                </div>
                            </div>
                        </div>
                        {/* gallery-item */}
                        <div className="ltn__gallery-item filter_category_1 col-lg-4 col-sm-6 col-12">
                            <div className="ltn__gallery-item-inner">
                                <div className="ltn__gallery-item-img">
                                    <a href="img/gallery/1.jpg" data-rel="lightcase:myCollection">
                                        <img src="assets/img/gallery/2.jpg" alt="Image" />
                                        <span className="ltn__gallery-action-icon">
                                            <i className="fas fa-search"></i>
                                        </span>
                                    </a>
                                </div>
                                <div className="ltn__gallery-item-info">
                                    <h4><a href="portfolio-details.html">Portfolio Link </a></h4>
                                    <p>Web Design & Development, Branding</p>
                                </div>
                            </div>
                        </div>                
                    </div>

                    <div id="ltn__inline_description_1" style={{display: "none"}}>
                        <h4 className="first">This content comes from a hidden element on that page</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis mi eu elit tempor facilisis id et neque. Nulla sit amet sem sapien. Vestibulum imperdiet porta ante ac ornare. Nulla et lorem eu nibh adipiscing ultricies nec at lacus. Cras laoreet ultricies sem, at blandit mi eleifend aliquam. Nunc enim ipsum, vehicula non pretium varius, cursus ac tortor.</p>
                        <p>Vivamus fringilla congue laoreet. Quisque ultrices sodales orci, quis rhoncus justo auctor in. Phasellus dui eros, bibendum eu feugiat ornare, faucibus eu mi. Nunc aliquet tempus sem, id aliquam diam varius ac. Maecenas nisl nunc, molestie vitae eleifend vel.</p>
                    </div>

                    <div className="btn-wrapper text-center">
                        <a href="#" className="btn btn-transparent btn-effect-3 btn-border">LOAD MORE +</a>
                    </div>

                    {/* pagination start */}
                    {/* 
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ltn__pagination text-center margin-top-50">
                                <ul>
                                    <li className="arrow-icon"><a href="#"> &leftarrow; </a></li>
                                    <li className="active"><a href="blog.html">1</a></li>
                                    <li><a href="blog-2.html">2</a></li>
                                    <li><a href="blog-2.html">3</a></li>
                                    <li><a href="blog-2.html">...</a></li>
                                    <li><a href="blog-2.html">10</a></li>
                                    <li className="arrow-icon"><a href="#"> &rightarrow; </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    */}
                    {/* pagination end */}

                </div>
            </div>
            {/* Gallery area end */}

            {/* CALL TO ACTION START (call-to-action-4) */}
            <div className="ltn__call-to-action-area ltn__call-to-action-4 bg-image pt-115 pb-120" data-bs-bg="assets/img/bg/6.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="call-to-action-inner call-to-action-inner-4 text-center">
                                <div className="section-title-area ltn__section-title-2">
                                    <h6 className="section-subtitle ltn__secondary-color">//  any question you have  //</h6>
                                    <h1 className="section-title white-color">897-876-987-90</h1>
                                </div>
                                <div className="btn-wrapper">
                                    <a href="tel:+123456789" className="theme-btn-1 btn btn-effect-1">MAKE A CALL</a>
                                    <Link to="/contact" className="btn btn-transparent btn-effect-3 white-color">CONTACT US</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ltn__call-to-4-img-1">
                    <img src="assets/img/bg/12.png" alt="#" />
                </div>
                <div className="ltn__call-to-4-img-2">
                    <img src="assets/img/bg/11.png" alt="#" />
                </div>
            </div>
            {/* CALL TO ACTION END */}

            {/* BLOG AREA START (blog-3) */}
            <div className="ltn__blog-area bg-image-top pt-115 " data-bs-bg="assets/img/bg/3.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-area ltn__section-title-2">
                                <h6 className="section-subtitle white-color">// blog & insights</h6>
                                <h1 className="section-title white-color">News Feeds.</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row  ltn__blog-slider-one-active slick-arrow-3 ltn__blog-3-arrow">
                        {/* Blog Item */}
                        <div className="col-lg-12">
                            <div className="ltn__blog-item ltn__blog-item-3">
                                <div className="ltn__blog-img">
                                    <a href="blog-details.html"><img src="assets/img/blog/1.jpg" alt="#" /></a>
                                </div>
                                <div className="ltn__blog-brief">
                                    <div className="ltn__blog-meta">
                                        <ul>
                                            <li className="ltn__blog-author">
                                                <a href="#"><i className="far fa-user"></i>by: Admin</a>
                                            </li>
                                            <li className="ltn__blog-tags">
                                                <a href="#"><i className="fas fa-tags"></i>Services</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <h3 className="ltn__blog-title"><a href="blog-details.html">Common Engine Oil Problems and Solutions</a></h3>
                                    <div className="ltn__blog-meta-btn">
                                        <div className="ltn__blog-meta">
                                            <ul>
                                                <li className="ltn__blog-date"><i className="far fa-calendar-alt"></i>June 24, 2020</li>
                                            </ul>
                                        </div>
                                        <div className="ltn__blog-btn">
                                            <a href="blog-details.html">Read more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Blog Item */}
                        <div className="col-lg-12">
                            <div className="ltn__blog-item ltn__blog-item-3">
                                <div className="ltn__blog-img">
                                    <a href="blog-details.html"><img src="assets/img/blog/2.jpg" alt="#" /></a>
                                </div>
                                <div className="ltn__blog-brief">
                                    <div className="ltn__blog-meta">
                                        <ul>
                                            <li className="ltn__blog-author">
                                                <a href="#"><i className="far fa-user"></i>by: Admin</a>
                                            </li>
                                            <li className="ltn__blog-tags">
                                                <a href="#"><i className="fas fa-tags"></i>Services</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <h3 className="ltn__blog-title"><a href="blog-details.html">How and when to replace brake rotors</a></h3>
                                    <div className="ltn__blog-meta-btn">
                                        <div className="ltn__blog-meta">
                                            <ul>
                                                <li className="ltn__blog-date"><i className="far fa-calendar-alt"></i>July 23, 2020</li>
                                            </ul>
                                        </div>
                                        <div className="ltn__blog-btn">
                                            <a href="blog-details.html">Read more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Blog Item */}
                        <div className="col-lg-12">
                            <div className="ltn__blog-item ltn__blog-item-3">
                                <div className="ltn__blog-img">
                                    <a href="blog-details.html"><img src="assets/img/blog/3.jpg" alt="#" /></a>
                                </div>
                                <div className="ltn__blog-brief">
                                    <div className="ltn__blog-meta">
                                        <ul>
                                            <li className="ltn__blog-author">
                                                <a href="#"><i className="far fa-user"></i>by: Admin</a>
                                            </li>
                                            <li className="ltn__blog-tags">
                                                <a href="#"><i className="fas fa-tags"></i>Services</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <h3 className="ltn__blog-title"><a href="blog-details.html">Electric Car Maintenance, Servicing & Repairs</a></h3>
                                    <div className="ltn__blog-meta-btn">
                                        <div className="ltn__blog-meta">
                                            <ul>
                                                <li className="ltn__blog-date"><i className="far fa-calendar-alt"></i>August 22, 2020</li>
                                            </ul>
                                        </div>
                                        <div className="ltn__blog-btn">
                                            <a href="blog-details.html">Read more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Blog Item */}
                        <div className="col-lg-12">
                            <div className="ltn__blog-item ltn__blog-item-3">
                                <div className="ltn__blog-img">
                                    <a href="blog-details.html"><img src="assets/img/blog/4.jpg" alt="#" /></a>
                                </div>
                                <div className="ltn__blog-brief">
                                    <div className="ltn__blog-meta">
                                        <ul>
                                            <li className="ltn__blog-author">
                                                <a href="#"><i className="far fa-user"></i>by: Admin</a>
                                            </li>
                                            <li className="ltn__blog-tags">
                                                <a href="#"><i className="fas fa-tags"></i>Services</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <h3 className="ltn__blog-title"><a href="blog-details.html">How to Prepare for your First Track Day!</a></h3>
                                    <div className="ltn__blog-meta-btn">
                                        <div className="ltn__blog-meta">
                                            <ul>
                                                <li className="ltn__blog-date"><i className="far fa-calendar-alt"></i>June 24, 2020</li>
                                            </ul>
                                        </div>
                                        <div className="ltn__blog-btn">
                                            <a href="blog-details.html">Read more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Blog Item */}
                        <div className="col-lg-12">
                            <div className="ltn__blog-item ltn__blog-item-3">
                                <div className="ltn__blog-img">
                                    <a href="blog-details.html"><img src="assets/img/blog/5.jpg" alt="#" /></a>
                                </div>
                                <div className="ltn__blog-brief">
                                    <div className="ltn__blog-meta">
                                        <ul>
                                            <li className="ltn__blog-author">
                                                <a href="#"><i className="far fa-user"></i>by: Admin</a>
                                            </li>
                                            <li className="ltn__blog-tags">
                                                <a href="#"><i className="fas fa-tags"></i>Services</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <h3 className="ltn__blog-title"><a href="blog-details.html">How to: Make Your Tires Last Longer</a></h3>
                                    <div className="ltn__blog-meta-btn">
                                        <div className="ltn__blog-meta">
                                            <ul>
                                                <li className="ltn__blog-date"><i className="far fa-calendar-alt"></i>June 24, 2020</li>
                                            </ul>
                                        </div>
                                        <div className="ltn__blog-btn">
                                            <a href="blog-details.html">Read more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                    </div>
                </div>
            </div>
            {/* BLOG AREA END */}

            {/* BRAND LOGO AREA START */}
            <div className="ltn__brand-logo-area ltn__brand-logo-1 pt-80 pb-110 plr--9">
                <div className="container-fluid">
                    <div className="row ltn__brand-logo-active">
                        <div className="col-lg-12">
                            <div className="ltn__brand-logo-item">
                                <img src="assets/img/brand-logo/1.png" alt="Brand Logo" />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="ltn__brand-logo-item">
                                <img src="assets/img/brand-logo/2.png" alt="Brand Logo" />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="ltn__brand-logo-item">
                                <img src="assets/img/brand-logo/3.png" alt="Brand Logo" />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="ltn__brand-logo-item">
                                <img src="assets/img/brand-logo/4.png" alt="Brand Logo" />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="ltn__brand-logo-item">
                                <img src="assets/img/brand-logo/5.png" alt="Brand Logo" />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="ltn__brand-logo-item">
                                <img src="assets/img/brand-logo/3.png" alt="Brand Logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* BRAND LOGO AREA END */}

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

export default ReUsePortfolio 