"use client";
import AppButton from "@/UI/AppButton";
import ComponentHeader from "@/UI/ComponentHeader";
import Image from "next/image";
import { useState } from "react";

export default function AboutMedicare() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const toggleVideoPopup = () => {
    setIsVideoOpen(!isVideoOpen);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left Section */}
        <div className="relative w-full md:w-1/2">
          <div className="relative">
            <Image
              width={400}
              height={500}
              src="/assets/about_mdc.png"
              alt="Doctor"
              className="rounded-lg w-full"
            />
            <button
              onClick={toggleVideoPopup}
              className="absolute inset-0 m-auto flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full shadow-md hover:bg-blue-700 focus:outline-none transition-all duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 12l7.5-4.5v9l-7.5-4.5z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Section*/}
        <div className="w-full md:w-1/2">
          <ComponentHeader title={"About Medicare"} titleClasses="text-start text-20" />
          <h2 className="text-3xl font-bold text-gray-800 mt-4">
            Good Services And Better Health By Our Specialists
          </h2>
          <p className="text-gray-600 mt-4">
            Great doctor if you need your family member to get effective immediate assistance,
            emergency treatment, or a simple consultation.
          </p>
          <p className="text-gray-600 mt-4">
            The most well-known dummy text is the &apos;Lorem Ipsum&apos;, which is said to have
            originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language.
          </p>
          <AppButton
            text={"Read More"}
            customStyles={
              "w-fit border-blue-200 bg-blue-200 shadow-md shadow-blue-200 font-semibold text-blue-600 hover:bg-blue-600 hover:text-white cursor-pointer"
            }
          />
        </div>
      </div>

      {/* Video Popup */}
      {isVideoOpen && (
        <div className="fixed inset-0 m-auto bottom-20 md:bottom-32 z-50 flex items-center justify-center">
          <div className="relative bg-white rounded-lg shadow-lg w-11/12 lg:w-2/3">
            <button
              onClick={toggleVideoPopup}
              className="absolute top-2 right-2 text-white hover:text-gray-800 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="h-[200px] md:h-[500px]">
              <iframe
                src="https://www.youtube.com/embed/NrsCej6SVxM?si=lA4tuG6TpnmeoBOV"
                title="YouTube video"
                className="rounded-lg w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
