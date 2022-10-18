import React from 'react'
import Footer from '../../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import './AboutUs.css'


const AboutUs = () => {
    return (
        <div>
            <Navbar />
            <div className="container-xxl py-5">
                <h1 className="ff-secondary text-primary text-center fw-normal">About Us</h1>
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="row g-3">
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s" alt='aboutImg' src="../images/about-1.jpg" />
                                </div>
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.3s" alt='aboutImg' src="../images/about-2.jpg"
                                        style={{ margintop: "25%" }} />
                                </div>
                                <div className="col-6 text-end">
                                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.5s" alt='aboutImg' src="../images/about-3.jpg" />
                                </div>
                                <div className="col-6 text-end">
                                    <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.7s" alt='aboutImg' src="../images/about-4.jpg" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h5 className="section-title ff-secondary text-primary text-center text-start fw-normal">About Us</h5>
                            <h1 className="mb-4">Welcome to <span className="aboutText">Petuk.Ji</span></h1>
                            <p className="mb-4">One17 Technologies is an enthusiastic organization that believes in the equality to
                                grow together. In One17 Technologies One17forStartup we as a team of tech & marketing
                                enthusiasts helping Startups & Stable Businesses to get off the ground by providing complete
                                solution that they can START with ZERO COST and PAY as they GROW.</p>
                            <p className="mb-4">As a Digital marketing agency we are providing Services like App & Web Development,
                                Business Analysis , Digital Marketing, Business Consultancy, Initial Stage Startups FREE
                                Services like Mentorship, Idea Development, Business Plan Development, Investor Pitch Creation,
                                Incubator Services etc.</p>
                            <p className="mb-4">One17 Technologies as a social media agency, offers Unique Result-Driven Social
                                Media Marketing Services (SMM) and business solutions . Don’t just engage followers. Convert
                                them into loyal customers. Our social media marketing services can help your bottom line by
                                increasing your income statement!</p>
                            <div className="row g-4 mb-4">
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                                        <h2 className="tag flex-shrink-0 display-5 mb-0" data-toggle="counter-up">100</h2>
                                        <div className="ps-4">
                                            <p className="ptag mb-0">Selected Among Top <br />
                                                Start Ups In India</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                                        <div className="ps-4">
                                            <p className="ptag mb-0">Providing <span className="spantag">360</span> Degree Solution that
                                                one can start by paying <span className="spantag">₹0.00</span> at starting</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/*Founder Section*/}
            <div className="container-xxl mt-5 py-5">
                <h1 className="ff-secondary text-primary text-center fw-normal mb-lg-4" style={{ fontsize: "60px" }}>Founder</h1>
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="row g-3">
                                <div className="col-12 text-start">
                                    <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s" src='../images/founder.png' />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h1 className="mb-4 pt-lg-5"><span className="aboutText">Co-Founder, CTO, CEO</span></h1>
                            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus obcaecati rerum
                                voluptatem!
                                Asperiores commodi consectetur aut voluptatem atque quam deserunt perferendis porro mollitia
                                suscipit,
                                saepe velit explicabo aliquid aperiam minima.</p>
                            <div className="row g-4 mb-4">
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                                        <div className="ps-4">
                                            <p className="ptag mb-0"><span className="highlight">*</span> Managing Marketing & Business
                                                Development</p>
                                            <p className="ptag mb-0"><span className="highlight">*</span> Maintaining & improving Apps &
                                                IT Systems.</p>
                                            <p className="ptag mb-0"><span className="highlight">*</span> To work to get PMF in Q2'2022.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                                        <div className="ps-4">
                                            <p className="ptag mb-0"><span className="highlight">*</span> Raised Grant from State Govt.
                                                for marketing assistance & waiting for the very 1st instalment.</p>
                                            <p className="ptag mb-0"><span className="highlight">*</span> Selected among the top 100
                                                start-ups in India by Google & MeitY to nurture further and graduated.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/*Teams Section*/}
            <div className="container-xxl mt-5 pt-5 pb-3">
                <div className="container teams">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h3 className="section-title ff-secondary text-center heading fw-normal">Team Members</h3>
                        <h1 className="mb-5">Alone we can do little; As a Team we are doing so much.</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item text-center rounded overflow-hidden">
                                <div className="rounded-circle overflow-hidden m-4">
                                    <img className="img-fluid" src="../images/team1.png" alt="" />
                                </div>
                                <h5 className="mb-0">Seeram Sandeep</h5>
                                <small>Full Stack Developer</small>
                                <div className="d-flex justify-content-center mt-3">
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item text-center rounded overflow-hidden">
                                <div className="rounded-circle overflow-hidden m-4">
                                    <img className="img-fluid" src="../images/team6.png" alt="" />
                                </div>
                                <h5 className="mb-0">Vamsi Krishna</h5>
                                <small>Front End Developer</small>
                                <div className="d-flex justify-content-center mt-3">
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item text-center rounded overflow-hidden">
                                <div className="rounded-circle overflow-hidden m-4">
                                    <img className="img-fluid" src="../images/team7.jpg" alt="" />
                                </div>
                                <h5 className="mb-0">Rakesh Singh</h5>
                                <small>Back End Developer</small>
                                <div className="d-flex justify-content-center mt-3">
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="team-item text-center rounded overflow-hidden">
                                <div className="rounded-circle overflow-hidden m-4">
                                    <img className="img-fluid" src="../images/team8.jpg" alt="" />
                                </div>
                                <h5 className="mb-0">Geethika Seeram</h5>
                                <small>Data Scientist</small>
                                <div className="d-flex justify-content-center mt-3">
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="team-item text-center rounded overflow-hidden">
                                <div className="rounded-circle overflow-hidden m-4">
                                    <img className="img-fluid" src="../images/team3.png" alt="" />
                                </div>
                                <h5 className="mb-0">Mata Taruni</h5>
                                <small>HR Manager</small>
                                <div className="d-flex justify-content-center mt-3">
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="team-item text-center rounded overflow-hidden">
                                <div className="rounded-circle overflow-hidden m-4">
                                    <img className="img-fluid" src="../images/team2.png" alt="" />
                                </div>
                                <h5 className="mb-0">Hyndavi</h5>
                                <small>UI & UX</small>
                                <div className="d-flex justify-content-center mt-3">
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="team-item text-center rounded overflow-hidden">
                                <div className="rounded-circle overflow-hidden m-4">
                                    <img className="img-fluid" src="../images/team4.png" alt="" />
                                </div>
                                <h5 className="mb-0">Usha Sree</h5>
                                <small>Data Analyst</small>
                                <div className="d-flex justify-content-center mt-3">
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="team-item text-center rounded overflow-hidden">
                                <div className="rounded-circle overflow-hidden m-4">
                                    <img className="img-fluid" src="../images/team5.png" alt="" />
                                </div>
                                <h5 className="mb-0">Spandana</h5>
                                <small>System Analyst</small>
                                <div className="d-flex justify-content-center mt-3">
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*Testimonial Section*/}
            <section className="testimonial">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                            <div className="sec-heading text-center">
                                <h3 className="section-title ff-secondary text-center heading fw-normal">Testimonials</h3>
                                <h6>Our Client's Says</h6>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="clients-carousel owl-carousel">
                            <div className="single-box">
                                <div className="img-area"><img alt="" className="img-fluid"
                                    src="https://images.pexels.com/photos/3525908/pexels-photo-3525908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                                </div>
                                <div className="content">
                                    <p>"Good experience with this app. Very easy to handle this. I think this app good for every
                                        person whose ordering online food."</p>
                                    <h4>Sandeep</h4>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                </div>
                            </div>
                            <div className="single-box">
                                <div className="img-area"><img alt="" className="img-fluid"
                                    src="https://images.pexels.com/photos/5042302/pexels-photo-5042302.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                                </div>
                                <div className="content">
                                    <p>"Ordering food is quite hassle free from this app. The offers on selected restuarants are
                                        quite amazing. The service is really good."</p>
                                    <h4>Sanjeev</h4>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                            </div>
                            <div className="single-box">
                                <div className="img-area"><img alt="" className="img-fluid"
                                    src="https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                                </div>
                                <div className="content">
                                    <p>"Seriously the best food delivering app ever. it's far better than other food delivering
                                        apps! Thansks to petuk.ji team"</p>
                                    <h4>Syed Aznan</h4>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                </div>
                            </div>
                            <div className="single-box">
                                <div className="img-area"><img alt="" className="img-fluid"
                                    src="https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                                </div>
                                <div className="content">
                                    <span className="rating-star"><i className="icofont-star"></i><i className="icofont-star"></i><i
                                        className="icofont-star"></i><i className="icofont-star"></i><i
                                            className="icofont-star"></i></span>
                                    <p>"Best food delivery app in entire Meruth, It is providing best offers and seriously going
                                        to be very vast in coming future."</p>
                                    <h4>Ridhvik</h4>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*Get In Touch Section*/}
            <div className="head pb-5" id="getInTouch">
                <div className="container-fluid py-5">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="h1 font-weight-light text-center py-3 font-weight-bold"
                                style={{ color: "#FA9D1C", fontsize: "50px" }}>Get In Touch</h1>
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                    <div className="row pt-3">
                                        <div className="col-lg-1 offset-1 col-md-2 col-sm-2 col-2">
                                            <span style={{ fontsize: "30px", color: "#3A9947" }}><i className="fa fa-map-marker"
                                                aria-hidden="true"></i></span>
                                        </div>

                                        <div className="col-lg-10 col-md-9 col-sm-9 col-9">
                                            <h3 className="h3tag font-weight-bold">Find Us At Office</h3>
                                            <p>MIET incubation Center, MIET, Admin Block,<br />
                                                NH-58, Baghpat <br />
                                                Road, Bypass Crossing, Meerut, U.P, India. <br />
                                                Petuk Ji</p>
                                        </div>
                                    </div>
                                    <div className="row pt-3">
                                        <div className="col-lg-1 offset-1 col-md-2 col-sm-2 col-2">
                                            <span style={{ fontsize: "30px", color: "#3A9947" }}><i className="fa fa-phone"
                                                aria-hidden="true"></i></span>
                                        </div>
                                        <div className="col-lg-10 col-md-9 col-sm-9 col-9">
                                            <h3 className="h3tag font-weight-bold">Give Us A Call</h3>
                                            <p> +91-11-71279904<br />
                                                (11:00AM to 6:00PM) <br />
                                                customer.care@petukji.in </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                    <form id="queryForm" onSubmit="sendEmail(); reset(); return false;">
                                        <div className="form-row">
                                            <div className="form-group col-lg-6 col-md-12 col-sm-12 col-12">
                                                <label htmlFor="First Name">First Name</label>
                                                <input type="text" className="firstName form-control" id="firstName"
                                                    placeholder="First Name" required />
                                            </div>
                                            <div className="form-group col-lg-6 col-md-12 col-sm-12 col-12">
                                                <label htmlFor="Last Name">Last Name</label>
                                                <input type="text" className="lastName form-control" id="lastName"
                                                    placeholder="Last Name" required />
                                            </div>
                                        </div>
                                        <div className="form-row py-md-3 py-sm-3 py-xs-3">
                                            <div className="form-group col-lg-6 col-md-12 col-sm-12 col-12">
                                                <label htmlFor="Number">Mobile Number</label>
                                                <input type="tel" maxLength="10" className="number form-control" id="number"
                                                    placeholder="Enter Your Number" required />
                                            </div>
                                            <div className="form-group col-lg-6 col-md-12 col-sm-12 col-12">
                                                <label htmlFor="Email">Email</label>
                                                <input type="email" className="email form-control" placeholder="Enter Your Email"
                                                    id="email" required />
                                            </div>
                                        </div>
                                        <label htmlFor="Your Message" className="font-weight-bold">Your Query </label>
                                        <textarea className="message form-control mb-3" id="message" placeholder="Your Query"
                                            cols="10" rows="5" required ></textarea>
                                        <input type="checkbox" required /> <label htmlFor="">
                                            <h4 className="mb-4">I'm not a robot</h4>
                                        </label>
                                        <button type="submit" className="btn btn-primary float-right"
                                            style={{ backgroundcolor: "#3A9947 !important" }}>Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>










                <Footer />
            </div>


            )
}

            export default AboutUs