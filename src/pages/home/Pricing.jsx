import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Pricing = () => {
  return (
    <div>
      <div className="container-fluid aboutme">
        <div className="container" style={{ marginTop: "150px" }}>
          <div className="row justify-content-center">
            <div
              className="col-xs-12 col-sm-6 col-md-6 col-lg-3 mt-5"
              data-aos="flip-left"
              data-aos-delay="100"
              data-aos-duration="2000"
              style={{ overflowX: "hidden" }}
            >
              <div className="card px-2 h-100">
                <div className="card-body">
                  <h5 className="card-title">Frontend Website</h5>
                  <ul style={{ listStyle: "none" }}>
                    <li>
                      <BsFillPatchCheckFill /> Hi
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-xs-12 col-sm-6 col-md-6 col-lg-3 mt-5"
              data-aos="flip-right"
              data-aos-delay="200"
              data-aos-duration="2000"
              style={{ overflowX: "hidden" }}
            >
              <div className="card px-2 h-100">
                <div className="card-body">
                  <h5 className="card-title">Full Stack Website</h5>
                  <ul style={{ listStyle: "none" }}>
                    <li>
                      <BsFillPatchCheckFill /> Hi
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-xs-12 col-sm-6 col-md-6 col-lg-3 mt-5"
              data-aos="flip-right"
              data-aos-delay="200"
              data-aos-duration="2000"
              style={{ overflowX: "hidden" }}
            >
              <div className="card px-2 h-100">
                <div className="card-body">
                  <h5 className="card-title">WordPress Site</h5>
                  <ul style={{ listStyle: "none" }}>
                    <li>
                      <BsFillPatchCheckFill /> Hi
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-xs-12 col-sm-6 col-md-6 col-lg-3 mt-5"
              data-aos="flip-left"
              data-aos-delay="100"
              data-aos-duration="2000"
              style={{ overflowX: "hidden" }}
            >
              <div className="card px-2 h-100">
                <div className="card-body">
                  <h5 className="card-title">Mentoring</h5>
                  <ul style={{ listStyle: "none" }}>
                    <li>
                      <BsFillPatchCheckFill /> Hi
                    </li>
                  </ul>
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
