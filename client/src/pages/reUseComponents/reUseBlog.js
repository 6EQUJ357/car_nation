import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import $ from "jquery"
import "jquery-ui-dist/jquery-ui"
import ScrollToTopButton from './ScrollToTopButton'


const ReUseBlog = () => {

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

        
    
            });
        
                  
        })($);
    },[])


  return (
    <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title-area ltn__section-title-2 text-center">
                        <h6 className="section-subtitle ltn__secondary-color">// blog & insights</h6>
                        <h1 className="section-title">News Feeds<span>.</span></h1>
                    </div>
                </div>
            </div>
            <div className="row  ltn__blog-slider-one-active slick-arrow-1">
                <div className="col-lg-12">
                    <div className="ltn__blog-item ltn__blog-item-4 bg-image" data-bs-bg="assets/img/blog/blog1.jpeg">
                        <div className="ltn__blog-brief">
                            <div className="ltn__blog-meta">
                                <ul>
                                    <li className="ltn__blog-author">
                                        <a href="#"><i className="far fa-user"></i>by: Admin</a>
                                    </li>
                                    <li className="ltn__blog-tags">
                                        <Link to="/service"><i className="fas fa-tags"></i>Services</Link>
                                    </li>
                                </ul>
                            </div>
                            <h3 className="ltn__blog-title"><a href="">Electric Car Maintenance, Servicing & Repairs</a></h3>
                            <p>Lorem ipsum labore et dolore mag na aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                            <div className="ltn__blog-meta-btn">
                                <div className="ltn__blog-meta">
                                    <ul>
                                        <li className="ltn__blog-date"><i className="far fa-calendar-alt"></i> June 24, 2020</li>
                                    </ul>
                                </div>
                                <div className="ltn__blog-btn">
                                    <a href="">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="ltn__blog-item ltn__blog-item-4 bg-image" data-bs-bg="assets/img/blog/blog2.jpeg">
                        <div className="ltn__blog-brief">
                            <div className="ltn__blog-meta">
                                <ul>
                                    <li className="ltn__blog-author">
                                        <a href="#"><i className="far fa-user"></i>by: Admin</a>
                                    </li>
                                    <li className="ltn__blog-tags">
                                        <Link to="/service"><i className="fas fa-tags"></i>Services</Link>
                                    </li>
                                </ul>
                            </div>
                            <h3 className="ltn__blog-title"><a href="">Common Engine Oil Problems and Solutions</a></h3>
                            <p>Lorem ipsum labore et dolore mag na aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                            <div className="ltn__blog-meta-btn">
                                <div className="ltn__blog-meta">
                                    <ul>
                                        <li className="ltn__blog-date"><i className="far fa-calendar-alt"></i> June 24, 2020</li>
                                    </ul>
                                </div>
                                <div className="ltn__blog-btn">
                                    <a href="">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="ltn__blog-item ltn__blog-item-4 bg-image" data-bs-bg="assets/img/blog/blog1.jpeg">
                        <div className="ltn__blog-brief">
                            <div className="ltn__blog-meta">
                                <ul>
                                    <li className="ltn__blog-author">
                                        <a href="#"><i className="far fa-user"></i>by: Admin</a>
                                    </li>
                                    <li className="ltn__blog-tags">
                                        <Link to="/service"><i className="fas fa-tags"></i>Services</Link>
                                    </li>
                                </ul>
                            </div>
                            <h3 className="ltn__blog-title"><a href="">How to Prepare for your First Track Day!</a></h3>
                            <p>Lorem ipsum labore et dolore mag na aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                            <div className="ltn__blog-meta-btn">
                                <div className="ltn__blog-meta">
                                    <ul>
                                        <li className="ltn__blog-date"><i className="far fa-calendar-alt"></i> June 24, 2020</li>
                                    </ul>
                                </div>
                                <div className="ltn__blog-btn">
                                    <a href="">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="ltn__blog-item ltn__blog-item-4 bg-image" data-bs-bg="assets/img/blog/blog3.jpeg">
                        <div className="ltn__blog-brief">
                            <div className="ltn__blog-meta">
                                <ul>
                                    <li className="ltn__blog-author">
                                        <a href="#"><i className="far fa-user"></i>by: Admin</a>
                                    </li>
                                    <li className="ltn__blog-tags">
                                        <Link to="/service"><i className="fas fa-tags"></i>Services</Link>
                                    </li>
                                </ul>
                            </div>
                            <h3 className="ltn__blog-title"><a href="">The branch of biology that deals with the normal.</a></h3>
                            <p>Lorem ipsum labore et dolore mag na aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                            <div className="ltn__blog-meta-btn">
                                <div className="ltn__blog-meta">
                                    <ul>
                                        <li className="ltn__blog-date"><i className="far fa-calendar-alt"></i> June 24, 2020</li>
                                    </ul>
                                </div>
                                <div className="ltn__blog-btn">
                                    <a href="">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="ltn__blog-item ltn__blog-item-4 bg-image" data-bs-bg="assets/img/blog/blog2.jpeg">
                        <div className="ltn__blog-brief">
                            <div className="ltn__blog-meta">
                                <ul>
                                    <li className="ltn__blog-author">
                                        <a href="#"><i className="far fa-user"></i>by: Admin</a>
                                    </li>
                                    <li className="ltn__blog-tags">
                                        <Link to="/service"><i className="fas fa-tags"></i>Services</Link>
                                    </li>
                                </ul>
                            </div>
                            <h3 className="ltn__blog-title"><a href="">How to: Make Your Tires Last Longer</a></h3>
                            <p>Lorem ipsum labore et dolore mag na aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                            <div className="ltn__blog-meta-btn">
                                <div className="ltn__blog-meta">
                                    <ul>
                                        <li className="ltn__blog-date"><i className="far fa-calendar-alt"></i> June 24, 2020</li>
                                    </ul>
                                </div>
                                <div className="ltn__blog-btn">
                                    <a href="">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* scroll to top */}
            {/* <ScrollToTopButton /> */}
         {/* scroll to top End*/}


        </div>
  )
}

export default ReUseBlog