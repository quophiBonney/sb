import React from "react";
import Typed from "typed.js";
import {useEffect, useRef} from "react";

const Typing = ({strings}) => {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Web Developer",
        "React Developer",
        "Software Engineer",
        "Content Writer",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      loop: true,
      backSpeed: 100,
      backDelay: 100,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return <div></div>;
};
export default Typing;
