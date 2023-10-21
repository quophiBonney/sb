import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
// import "@paystack/button";
const Pricing = () => {
  //  const handleMentoringBooking = () => {
  //   const handler = window.PaystackPop.setup({
  //     key: "public_key",
  //     email: "solomonbonney27@gmail.com",
  //     amount: 250,
  //     currency: 'GHS',
  //     ref: 'subscription_123',
  //     callback: function(response){
  //       alert('Booking successful: '+ response.reference);
  //     },
  //     onClose: function(){
  //       alert("Payment window closed");
  //     }
  //   });
  //   handler.openIframe();
  //  }
  //  const handleFrontendBooking = () => {
  //   const handler = window.PaystackPop.setup({
  //     key: "public_key",
  //     email: "solomonbonney27@gmail.com",
  //     amount: 800,
  //     currency: 'GHS',
  //     ref: 'subscription_123',
  //     callback: function(response){
  //       alert('Booking successful: '+ response.reference);
  //     },
  //     onClose: function(){
  //       alert("Payment window closed");
  //     }
  //   });
  //   handler.openIframe();
  //  }
  return (
    <div>
      <div className="container-fluid aboutme" id="pricing">
        <div className="container" style={{ marginTop: "150px" }}>
          <div className="row justify-content-center">
            <h3 className="text-light text-uppercase">Pricing</h3>
            <p className="text-light">
              All you need to know about my hourly rate and charges for various
              operations.
            </p>
            <div
              className="col-xs-12 col-sm-6 col-md-6 col-lg-4 mt-3"
              data-aos="flip-left"
              data-aos-delay="100"
              data-aos-duration="2000"
              style={{ overflowX: "hidden" }}
            >
              <div className="card h-100 shadow price-card">
                <h5 className="card-title text-center fw-bold text-uppercase mt-3 mb-3 px-3">
                  Frontend Website
                </h5>
                <ul style={{ listStyle: "none" }}>
                  <li className="mb-2">
                    <BsFillPatchCheckFill size={20} className="text-primary" />
                    <span className="mx-2">4 pages for $70</span>
                  </li>
                  <li className="mb-2">
                    <BsFillPatchCheckFill size={20} className="text-primary" />
                    <span className="mx-2">$15 per hour</span>
                  </li>
                  <li className="mb-2">
                    <BsFillPatchCheckFill size={20} className="text-primary" />
                    <span className="mx-2">Full time support</span>
                  </li>
                  <li className="mb-2">
                    <BsFillPatchCheckFill size={20} className="text-primary" />
                    <span className="mx-2">ReactJS, NextJS</span>
                  </li>
                  <li className="mb-2">
                    <BsFillPatchCheckFill size={20} className="text-primary" />
                    <span className="mx-2">SEO friendly</span>
                  </li>
                  <li className="mb-2">
                    <BsFillPatchCheckFill size={20} className="text-primary" />
                    <span className="mx-2">No database</span>
                  </li>
                  <li className="mb-2">
                    <BsFillPatchCheckFill size={20} className="text-primary" />
                    <span className="mx-2">Form submission</span>
                  </li>
                </ul>
                <div className="px-3 mb-5">
                  <button
                    className="btn btn-primary w-100"
                    variant="primary"
                    // onClick={handleFrontendBooking}
                  >
                    Book Me
                  </button>
                </div>
              </div>
            </div>
            <div
              className="col-xs-12 col-sm-6 col-md-6 col-lg-4 mt-3"
              data-aos="flip-right"
              data-aos-delay="200"
              data-aos-duration="2000"
              style={{ overflowX: "hidden" }}
            >
              <div className="card h-100 shadow price-card">
                <h5 className="card-title text-center fw-bold text-uppercase mt-3 mb-3 px-3">
                  Full Stack Website
                </h5>
                <ul style={{ listStyle: "none" }}>
                  <li className="mb-2">
                    <BsFillPatchCheckFill size={20} className="text-primary" />
                    <span className="mx-2">4 pages for $150</span>
                  </li>
                  <li className="mb-2">
                    <BsFillPatchCheckFill size={20} className="text-primary" />
                    <span className="mx-2">$20 per hour</span>
                  </li>
                  <li className="mb-2">
                    <BsFillPatchCheckFill size={20} className="text-primary" />
                    <span className="mx-2">Full time support</span>
                  </li>
                  <li className="mb-2">
                    <BsFillPatchCheckFill size={20} className="text-primary" />
                    <span className="mx-2">ReactJS, NextJS, NodeJS,</span>
                  </li>
                  <li className="mb-2">
                    <BsFillPatchCheckFill size={20} className="text-primary" />
                    <span className="mx-2">Database & Dashboard</span>
                  </li>
                  <li className="mb-2">
                    <BsFillPatchCheckFill size={20} className="text-primary" />
                    <span className="mx-2">SEO friendly</span>
                  </li>
                  <li className="mb-2">
                    <BsFillPatchCheckFill size={20} className="text-primary" />
                    <span className="mx-2">Documentation & training</span>
                  </li>
                </ul>
                <div className="px-3 mb-5">
                  <button className="btn btn-primary w-100" variant="primary">
                    Book Me
                  </button>
                </div>
              </div>
            </div>
            <div
              className="col-xs-12 col-sm-6 col-md-6 col-lg-4 mt-3"
              data-aos="flip-right"
              data-aos-delay="200"
              data-aos-duration="2000"
              style={{ overflowX: "hidden" }}
            >
              <div className="card h-100 shadow price-card">
                <h5 className="card-title text-center fw-bold text-uppercase mt-3 mb-3 px-3">
                  Mentoring Session
                </h5>
                <ul style={{ listStyle: "none" }}>
                  <li className="mb-2">
                    <BsFillPatchCheckFill size={20} className="text-primary" />
                    <span className="mx-2">3 hours per session</span>
                  </li>
                  <li className="mb-2">
                    <BsFillPatchCheckFill size={20} className="text-primary" />
                    <span className="mx-2">$25 for a session</span>
                  </li>
                  <li className="mb-2">
                    <BsFillPatchCheckFill size={20} className="text-primary" />
                    <span className="mx-2">Access to learning materials</span>
                  </li>
                  <li className="mb-2">
                    <BsFillPatchCheckFill size={20} className="text-primary" />
                    <span className="mx-2">Projects based learning</span>
                  </li>
                  <li className="mb-2">
                    <BsFillPatchCheckFill size={20} className="text-primary" />
                    <span className="mx-2">Freelancing guides and tips</span>
                  </li>
                  <li className="mb-2">
                    <BsFillPatchCheckFill size={20} className="text-primary" />
                    <span className="mx-2">Optimize your online presence</span>
                  </li>
                </ul>
                <div className="px-3 mb-5">
                  <button
                    className="btn btn-primary w-100"
                    variant="primary"
                    // onClick={handleMentoringBooking}
                  >
                    Book Me
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
