"use client";

import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState("");

  const handleResize = () => {
    const width = window.innerWidth;
    if (width < 480) setScreenSize("xs");
    else if (width < 768) setScreenSize("sm");
    else if (width < 1024) setScreenSize("md");
    else if (width < 1200) setScreenSize("lg");
    else if (width < 1600) setScreenSize("xl");
    else setScreenSize("xxl");
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize(); // call it once to set the initial value

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
};

export default useScreenSize;
