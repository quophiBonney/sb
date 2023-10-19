import React, { useState } from "react";
import { useSpring } from "react-spring";
import loader from "../images/loader.gif";
function Preloader() {
  const [x, setX] = useState(0);
  const spring = useSpring({
    from: { x: 100 },
    to: { x },
  });
  return (
    <div className="container-fluid">
      <div
        className="row justify-content-center align-items-center"
        style={{
          minHeight: "100vh",
          transform: `translateX(${spring.value}px)`,
        }}
      >
        <div className="col-12 text-center text-dark">
          <div>
            <img
              src={loader}
              alt="loading gif"
              className="img-fluid img-responsive"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preloader;
