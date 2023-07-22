import React, {useEffect} from "react";
import {useLocation} from "react-router-dom";

const SmoothScroll = () => {
  const {pathname} = useLocation();
  useEffect(() => {
    const hash = pathname.substring(pathname.lastIndexOf("#"));

    if (hash !== "") {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        targetElement.scrollIntoView({behavior: "smooth"});
      }
    }
  }, [pathname]);
  return null;
};
export default SmoothScroll;
