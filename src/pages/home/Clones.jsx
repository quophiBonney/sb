import React from "react";
import ClonesSlider from "./ClonesSlider";

const Clones = () => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-delay="300"
      data-aos-duration="1000"
      style={{ overflowX: "hidden" }}
      id="clones"
    >
      <ClonesSlider />
    </div>
  );
};

export default Clones;
