"use client";
import ComponentHeader from "@/UI/ComponentHeader";
import React, { useEffect, useRef } from "react";

const Sponsors = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    let scrollSpeed = 1; 
    let animationFrameId;

    const scrollLogos = () => {
      if (container) {
        container.scrollLeft += scrollSpeed; 


        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scrollLogos); 
    };

    animationFrameId = requestAnimationFrame(scrollLogos); 

    return () => cancelAnimationFrame(animationFrameId); 
  }, [scrollContainerRef]);

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
      <ComponentHeader desc={"Our Partners"} />

      <div className="overflow-hidden mb-16 w-full">
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-8 w-full whitespace-nowrap overflow-x-hidden" 
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="w-40 h-20 px-6 flex items-center justify-center border rounded-md flex-shrink-0"
              style={{ minWidth: '160px', minHeight: '80px' }}
            >
              <img src={logo} alt={`Partner ${index}`} className="max-w-full max-h-full" />
            </div>
          ))}
          {logos.map((logo, index) => (
            <div
              key={`${index}-duplicate`}
              className="w-40 h-20 px-6 flex items-center justify-center border rounded-md flex-shrink-0"
              style={{ minWidth: '160px', minHeight: '80px' }}
            >
              <img src={logo} alt={`Partner duplicate ${index}`} className="max-w-full max-h-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
