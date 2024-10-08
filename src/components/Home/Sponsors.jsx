"use client";
import ComponentHeader from "@/UI/ComponentHeader";
import React, { useEffect, useRef } from "react";

const Sponsors = () => {
  const scrollContainerRef = useRef(null);

  
  useEffect(() => {
    const container = scrollContainerRef.current;
    let scrollSpeed = 0.5; 

    const scrollLogos = () => {
      if (container) {
        container.scrollLeft += scrollSpeed; 
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0; 
        }
      }
    };

    const intervalId = setInterval(scrollLogos, 20); 

    return () => clearInterval(intervalId); 
  }, []);

  const logos = [
    "/assets/partners-1.svg", 
    "/assets/partners-2.svg",
    "/assets/partners-3.svg",
    "/assets/partners-4.svg",
    "/assets/partners-5.svg",
    "/assets/partners-6.svg",
  ];

  return (
    <section className="py-12">
      <ComponentHeader desc={"Our Partners"}/>

      <div className="overflow-hidden mb-16">
        <div
          ref={scrollContainerRef}
          className="flex items-center justify-between gap-8 animate-scroll"
        >
          {logos.map((logo, index) => (
            <div key={index} className="w-80 h-20 px-6 flex items-center justify-center border rounded-md">
              <img src={logo} alt={`Partner ${index}`} className="w-full h-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
