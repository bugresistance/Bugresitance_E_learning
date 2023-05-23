import React, { useState } from 'react'
import NavbarTop from './Shared/NavbarTop'

// importing images
import blog1 from '../images/blog-img1.png'
import blog2 from '../images/blog-img2.png'
import blog3 from '../images/blog-img3.png'
import blog4 from '../images/blog-img4.png'
import blog5 from '../images/blog-img5.png'
import leftArrow from '../images/arrow-left.png'
import rightArrow from '../images/arrow-right.png'
import featured1 from '../images/featured-img1.png'
import featured2 from '../images/featured-img2.png'
import featured3 from '../images/featured-img3.png'
import productservicebg from '../images/view-product-bg.png'
import productserviceicon from '../images/view-product-icon.png'
import { Tab, Tabs } from '@mui/material'

const Blog = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            {/* <!-- header-section start --> */}
            <NavbarTop />
            {/* <!-- inner banner start -->  */}
            <section id="banner-section" class="inner-banner blog cart">
                <div class="banner-content d-flex align-items-center">
                    <div class="container">
                        <div class="row d-flex justify-content-start">
                            <div class="col-lg-12">
                                <div class="text-area">
                                    <h1>Career Blog</h1>
                                    <div class="breadcrumb-area">
                                        {/* <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb d-flex">
                                        <li class="breadcrumb-item"><a href="index-2.html">Home</a></li>
                                        <li class="breadcrumb-item"><a href="index-2.html">Pages</a></li>
                                    </ol>
                                </nav> */}
                                        Your success is our success, and we can all work together to make
                                        our society a better place to live and work.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- inner section end -->

    <!-- blog content start --> */}
            <section id="blog-content" class="pb-120">
                <div class="container">
                    <div class="top-area">
                        <div class="row d-flex justify-content-center">
                            <div class="col-lg-12">
                                <div class="nav-top-area wow fadeInUp">
                                    {/* <ul class="nav nav-tabs d-flex justify-content-between" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link posts active" id="all_posts-tab" data-toggle="tab" href="#all_posts" role="tab" aria-controls="all_posts" aria-selected="true">
                                        All Jobs
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link design" id="design-tab" data-toggle="tab" href="#design" role="tab" aria-controls="design" aria-selected="false">
                                        SQA
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link marketing" id="marketing-tab" data-toggle="tab" href="#marketing" role="tab" aria-controls="marketing" aria-selected="false">
                                        Developer
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link development" id="development-tab" data-toggle="tab" href="#development" role="tab" aria-controls="development" aria-selected="false">
                                        Database
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link tutorial" id="tutorial-tab" data-toggle="tab" href="#tutorial" role="tab" aria-controls="tutorial" aria-selected="false">
                                        Devops
                                    </a>
                                </li>
                            </ul> */}
                                    <Tabs
                                        value={value}
                                        onChange={handleChange}
                                        variant="scrollable"
                                        // scrollButtons="auto"
                                        scrollButtons
                                        allowScrollButtonsMobile
                                        aria-label="scrollable auto tabs example"
                                    >
                                        <ul class="nav nav-tabs d-flex justify-content-between" id="myTab" role="tablist">
                                            <li class="nav-item">
                                            <Tab label="Item One" class="nav-link posts active" id="all_posts-tab" data-toggle="tab" href="#all_posts" role="tab" aria-controls="all_posts" aria-selected="true"/>
                                            </li>
                                            <li class="nav-item">
                                            <Tab label="Item One" class="nav-link posts active" id="all_posts-tab" data-toggle="tab" href="#all_posts" role="tab" aria-controls="all_posts" aria-selected="true"/>
                                            </li>
                                            <li class="nav-item">
                                            <Tab label="Item One" class="nav-link posts active" id="all_posts-tab" data-toggle="tab" href="#all_posts" role="tab" aria-controls="all_posts" aria-selected="true"/>
                                            </li>
                                            <li class="nav-item">
                                            <Tab label="Item One" class="nav-link posts active" id="all_posts-tab" data-toggle="tab" href="#all_posts" role="tab" aria-controls="all_posts" aria-selected="true"/>
                                            </li>
                                        </ul>
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="all_posts" role="tabpanel" aria-labelledby="all_posts-tab">
                                    <div class="row d-flex justify-content-center">
                                        <div class="col-lg-12 col-sm-9">
                                            <div class="single-item flex-item mb-30">
                                                <div class="image-area">
                                                    <img src={blog1} class="blog-item" alt="image" />
                                                </div>
                                                <div class="text-item">
                                                    <div class="date-area">
                                                        <span class="date">Manual Testing</span>
                                                    </div>
                                                    <a href="blog-single.html"><h3>How do you use time tracking for projects?</h3></a>
                                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form...</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6 col-md-6 col-sm-6">
                                            <div class="single-item mb-30">
                                                <div class="image-area">
                                                    <img src={blog2} class="blog-item" alt="image" />
                                                </div>
                                                <div class="text-item">
                                                    <div class="date-area">
                                                        <span class="date">Api Testing</span>
                                                    </div>
                                                    <a href="#"><h3>How do you use time tracking for projects?</h3></a>
                                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form...</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6">
                                            <div class="single-item mb-30">
                                                <div class="image-area">
                                                    <img src={blog3} class="blog-item" alt="image" />
                                                </div>
                                                <div class="text-item">
                                                    <div class="date-area">
                                                        <span class="date">Jmeter</span>
                                                    </div>
                                                    <a href="blog-single.html"><h3>How do you use time tracking for projects?</h3></a>
                                                    <p>Lorem ipsum dolor sit amet, elit. ligula in blandit sagittis, arcu ligula</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6">
                                            <div class="single-item mb-30">
                                                <div class="image-area">
                                                    <img src={blog4} class="blog-item" alt="image" />
                                                </div>
                                                <div class="text-item">
                                                    <div class="date-area">
                                                        <span class="date">Api Testing</span>
                                                    </div>
                                                    <a href="blog-single.html"><h3>Limitless Myths About Web Design</h3></a>
                                                    <p>Lorem ipsum dolor sit amet, elit. ligula in blandit sagittis, arcu ligula</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6">
                                            <div class="single-item mb-30">
                                                <div class="image-area">
                                                    <img src={blog5} class="blog-item" alt="image" />
                                                </div>
                                                <div class="text-item">
                                                    <div class="date-area">
                                                        <span class="date">Test</span>
                                                    </div>
                                                    <a href="blog-single.html"><h3>Challenges Faced By Android App Dev.</h3></a>
                                                    <p>Lorem ipsum dolor sit amet, elit. ligula in blandit sagittis, arcu ligula</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                {/* <div class="tab-pane fade" id="design" role="tabpanel" aria-labelledby="design-tab">
                            <div class="row d-flex justify-content-center">
                                <div class="col-lg-12 col-sm-9">
                                    <div class="single-item flex-item mb-30">
                                        <div class="image-area">
                                            <span>New</span>
                                            <img src="images/blog-img1.png" class="blog-item" alt="image"/>
                                            <div class="icon">
                                                <img src="images/design-icon.png" alt="image"/>
                                            </div>
                                        </div>
                                        <div class="text-item">
                                            <div class="date-area">
                                                <img src="images/date-icon.png" alt="image"/>
                                                <span class="date">Sep 15, 2020</span>
                                                <span>In Design</span>
                                            </div>
                                            <a href="blog-single.html"><h3>How do you use time tracking for projects?</h3></a>
                                            <p>Lorem ipsum dolor sit amet, elit. ligula in blandit sagittis, arcu ligula</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="single-item mb-30">
                                        <div class="image-area">
                                            <img src="images/blog-img4.png" class="blog-item" alt="image"/>
                                            <div class="icon">
                                                <img src="images/design-icon.png" alt="image"/>
                                            </div>
                                        </div>
                                        <div class="text-item">
                                            <div class="date-area">
                                                <img src="images/date-icon.png" alt="image"/>
                                                <span class="date">Sep 15, 2020</span>
                                                <span>In Design</span>
                                            </div>
                                            <a href="blog-single.html"><h3>Limitless Myths About Web Design</h3></a>
                                            <p>Lorem ipsum dolor sit amet, elit. ligula in blandit sagittis, arcu ligula</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="single-item mb-30">
                                        <div class="image-area">
                                            <img src="images/blog-img6.png" class="blog-item" alt="image"/>
                                            <div class="icon">
                                                <img src="images/design-icon.png" alt="image"/>
                                            </div>
                                        </div>
                                        <div class="text-item">
                                            <div class="date-area">
                                                <img src="images/date-icon.png" alt="image"/>
                                                <span class="date">Sep 15, 2020</span>
                                                <span>In Design</span>
                                            </div>
                                            <a href="blog-single.html"><h3>Principles of Effective Web Design</h3></a>
                                            <p>Lorem ipsum dolor sit amet, elit. ligula in blandit sagittis, arcu ligula</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="marketing" role="tabpanel" aria-labelledby="marketing-tab">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="single-item mb-30">
                                        <div class="image-area">
                                            <img src="images/blog-img2.png" class="blog-item" alt="image"/>
                                            <div class="icon">
                                                <img src="images/marketing-icon.png" alt="image"/>
                                            </div>
                                        </div>
                                        <div class="text-item">
                                            <div class="date-area">
                                                <img src="images/date-icon.png" alt="image"/>
                                                <span class="date">Sep 15, 2020</span>
                                                <span>In Marketing</span>
                                            </div>
                                            <a href="blog-single.html"><h3>How do you use time tracking for projects?</h3></a>
                                            <p>Lorem ipsum dolor sit amet, elit. ligula in blandit sagittis, arcu ligula</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="development" role="tabpanel" aria-labelledby="development-tab">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="single-item mb-30">
                                        <div class="image-area">
                                            <img src="images/blog-img5.png" class="blog-item" alt="image"/>
                                            <div class="icon">
                                                <img src="images/development-icon.png" alt="image"/>
                                            </div>
                                        </div>
                                        <div class="text-item">
                                            <div class="date-area">
                                                <img src="images/date-icon.png" alt="image"/>
                                                <span class="date">Sep 15, 2020</span>
                                                <span>In Development</span>
                                            </div>
                                            <a href="blog-single.html"><h3>Challenges Faced By Android App Dev.</h3></a>
                                            <p>Lorem ipsum dolor sit amet, elit. ligula in blandit sagittis, arcu ligula</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="single-item mb-30">
                                        <div class="image-area">
                                            <img src="images/blog-img7.png" class="blog-item" alt="image"/>
                                            <div class="icon">
                                                <img src="images/development-icon.png" alt="image"/>
                                            </div>
                                        </div>
                                        <div class="text-item">
                                            <div class="date-area">
                                                <img src="images/date-icon.png" alt="image"/>
                                                <span class="date">Sep 15, 2020</span>
                                                <span>In Development</span>
                                            </div>
                                            <a href="blog-single.html"><h3>How To Hire Mobile Apps Developers</h3></a>
                                            <p>Lorem ipsum dolor sit amet, elit. ligula in blandit sagittis, arcu ligula</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="tutorial" role="tabpanel" aria-labelledby="tutorial-tab">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="single-item mb-30">
                                        <div class="image-area">
                                            <img src="images/blog-img3.png" class="blog-item" alt="image"/>
                                            <div class="icon">
                                                <img src="images/tutorials-icon.png" alt="image"/>
                                            </div>
                                        </div>
                                        <div class="text-item">
                                            <div class="date-area">
                                                <img src="images/date-icon.png" alt="image"/>
                                                <span class="date">Sep 15, 2020</span>
                                                <span>In Tutorials</span>
                                            </div>
                                            <a href="blog-single.html"><h3>How do you use time tracking for projects?</h3></a>
                                            <p>Lorem ipsum dolor sit amet, elit. ligula in blandit sagittis, arcu ligula</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                            </div>
                            <div class="row">
                                <div class="col-lg-12 d-flex justify-content-center">
                                    <nav aria-label="Page navigation example">
                                        <ul class="pagination">
                                            <li class="page-item"><a class="page-link" href="#"><img src={leftArrow} alt="left" /></a></li>
                                            <li class="page-item"><a class="page-link" href="#">01</a></li>
                                            <li class="page-item"><a class="page-link active" href="#">02</a></li>
                                            <li class="page-item"><a class="page-link" href="#">03</a></li>
                                            <li class="page-item"><a class="page-link" href="#">04</a></li>
                                            <li class="page-item"><a class="page-link" href="#"><img src={rightArrow} alt="right" /></a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            {/* Most Viewed Part */}
                            <div class="featured-post">
                                <h3>Most Viewed</h3>
                                <div class="single-item d-flex align-items-center">
                                    <div class="left-item">
                                        <img src={featured1} alt="image" />
                                    </div>
                                    <div class="right-item">
                                        <a href="#"><h5>Manual Testing</h5></a>
                                        <p>How do you use time tracking for projects?</p>
                                        <span>Lorem ipsum dolor sit amet, elit. ligula in blandit sagittis, arcu ligula</span>
                                    </div>
                                </div>
                                <div class="single-item d-flex align-items-center">
                                    <div class="left-item">
                                        <img src={featured2} alt="image" />
                                    </div>
                                    <div class="right-item">
                                        <a href="#"><h5>Manual Testing</h5></a>
                                        <p>How do you use time tracking for projects?</p>
                                        <span>Lorem ipsum dolor sit amet, elit. ligula in blandit sagittis, arcu ligula</span>
                                    </div>
                                </div>
                                <div class="single-item d-flex align-items-center">
                                    <div class="left-item">
                                        <img src={featured3} alt="image" />
                                    </div>
                                    <div class="right-item">
                                        <a href="#"><h5>Manual Testing</h5></a>
                                        <p>How do you use time tracking for projects?</p>
                                        <span>Lorem ipsum dolor sit amet, elit. ligula in blandit sagittis, arcu ligula</span>
                                    </div>
                                </div>

                            </div>

                            {/* Tags */}
                            <div class="tags-area">
                                <h3>Tags</h3>
                                <div class="tags">
                                    <a href="#" class="tag-item">SQA</a>
                                    <a href="#" class="tag-item">Job</a>
                                    <a href="#" class="tag-item">Testing</a>
                                    <a href="#" class="tag-item">QA Testing</a>
                                    <a href="#" class="tag-item active">Manual Testing</a>
                                    <a href="#" class="tag-item">Jmeter</a>
                                    <a href="#" class="tag-item">API Testing</a>
                                    <a href="#" class="tag-item">Database</a>
                                    <a href="#" class="tag-item">DevOps</a>
                                    <a href="#" class="tag-item">Web Developer</a>
                                </div>
                            </div>
                            <div class="view-product">
                                <img src={productservicebg} alt="image" style={{ width: '100%' }} />
                                <div class="text-area">
                                    <img src={productserviceicon} alt="image" />
                                    <h1>Explore My Products</h1>
                                    <a href="products.html" class="cmn-btn">View Services</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- content end --> */}
        </div>
    )
}

export default Blog