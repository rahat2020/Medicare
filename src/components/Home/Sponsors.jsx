"use client";
import ComponentHeader from "@/UI/ComponentHeader";
import Image from "next/image";
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
    "/assets/sponsors/partners-1.svg",
    "/assets/sponsors/partners-2.svg",
    "/assets/sponsors/partners-3.svg",
    "/assets/sponsors/partners-4.svg",
    "/assets/sponsors/partners-5.svg",
    "/assets/sponsors/partners-6.svg"
  ];

  return (
    <div className="pb-12">
      <ComponentHeader title={"Our Partners"} />

      <div className="overflow-hidden mb-16 w-full">
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-8 w-full whitespace-nowrap overflow-x-hidden"
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="w-40 h-20 px-6 flex items-center justify-center border rounded-md flex-shrink-0"
              style={{ minWidth: "160px", minHeight: "80px" }}
            >
              <Image
                src={logo}
                alt={`Partner ${index}`}
                width={100}
                height={100}
                className="max-w-full max-h-full"
              />
            </div>
          ))}
          {logos.map((logo, index) => (
            <div
              key={`${index}-duplicate`}
              className="w-40 h-20 px-6 flex items-center justify-center border rounded-md flex-shrink-0"
              style={{ minWidth: "160px", minHeight: "80px" }}
            >
              <Image
                src={logo}
                width={100}
                height={100}
                alt={`Partner duplicate ${index}`}
                className="max-w-full max-h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
