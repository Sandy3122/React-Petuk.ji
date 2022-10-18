import React from 'react'
import './Footer.css'

const Footer = () => {
  return (

        <footer className="footer container-fluid bg-dark text-light pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
          <div className="container py-5">
              <div className="row">
                  <div className="col-lg-2 col-md-6">
                      <h4 className="section-title ff-secondary text-start footerText fw-normal mb-4">Company</h4>
                      <a className="btn btn-link" href="/aboutUs">About Us</a>
                      <a className="btn btn-link" href="/careers">Careers</a>
                      <a className="btn btn-link" href="/aboutUs#getInTouch">Get In Touch</a>
                      <a className="btn btn-link" href="#0">Privacy Policy</a>
                      <a className="btn btn-link" href="#0">Terms & Condition</a>
                  </div>
                  <div className="col-lg-3 col-md-6">
                      <h4 className="section-title ff-secondary text-start footerText fw-normal mb-4">Contact</h4>
                      <p className="mb-2"><i className="fa fa-phone"></i> +91-11-71279904</p>
                      <p className="mb-2"><i className="fa fa-clock-o"></i> (11:00AM to 6:00PM)</p>
                      <p className="mb-2"><i className="fa fa-envelope"></i> customer.care@petukji.in</p>
                      <div className="d-flex pt-2 pb-4">
                          <a className="btn btn-outline-light btn-social" href="#0"><i className="fab fa-twitter"></i></a>
                          <a className="btn btn-outline-light btn-social" href="#0"><i className="fab fa-facebook-f"></i></a>
                          <a className="btn btn-outline-light btn-social" href="#0"><i className="fab fa-youtube"></i></a>
                          <a className="btn btn-outline-light btn-social" href="#0"><i className="fab fa-linkedin-in"></i></a>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                      <h4 className="section-title ff-secondary text-start footerText fw-normal mb-4">OFFICE LOCATION</h4>
                      <h5 className="text-light fw-normal">Petuk Ji Pvt. Ltd.</h5>
                      <p>MIET incubation Center, MIET, Admin Block, NH-58, Baghpat</p>
                      <h5 className="text-light fw-normal">Road, Bypass Crossing, Meerut, U.P, India.</h5>
                      <p>Petuk Ji </p>
                  </div>
                  <div className="col-lg-3 col-md-6">
                      <h4 className="section-title ff-secondary text-start footerText fw-normal mb-4">Rights</h4>
                      <p>Terms | Privacy | Restaurant Partners TnC | Delivery Partners</p>
                      <p>TnC | Delivery Offer TnC | Site Map</p>
                      <p>&copy 2021-24 Petuk Ji Private Limited | All Rights Reserved</p>
  
                      <div className="position-relative mx-auto" style={{width:'400px'}}>
                          
                      </div>
                  </div>
              </div>
          </div>
      </footer>  
    )
}

export default Footer
