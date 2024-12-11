"use client";
import ComponentHeader from "@/UI/ComponentHeader";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import { testimonials } from "@/data/testimonialsData";
import Image from "next/image";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative bg-white text-center">
      <ComponentHeader title={"Testimonials"} desc={"What Our Client Says"} customStyles="pb-16" />

      <div className="relative flex items-center justify-center lg:justify-between">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-2 lg:left-0 rounded-full p-3 bg-white shadow-md hover:bg-blue-100 transition-colors duration-300"
          aria-label="Previous Testimonial"
        >
          <ChevronLeft className="w-6 h-6 text-blue-600" />
        </button>

        {/* Testimonial Content */}
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 mb-4">
              <Image
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                width={128}
                height={128}
                className="w-full h-full object-cover rounded-full shadow-md"
              />
            </div>
            <p className="text-gray-600 italic mb-4">{`"${currentTestimonial.feedback}"`}</p>
            <h4 className="font-semibold text-gray-800">{currentTestimonial.name}</h4>
            <p className="text-gray-500">{currentTestimonial.location}</p>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-2 lg:right-0 rounded-full p-3 bg-white shadow-md hover:bg-blue-100 transition-colors duration-300"
          aria-label="Next Testimonial"
        >
          <ChevronRight className="w-6 h-6 text-blue-600" />
        </button>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-6">
        {testimonials.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full mx-1 ${idx === currentIndex ? "bg-blue-500" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
