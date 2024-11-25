// components/GoToTop.js

"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "react-feather";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="flex items-center justify-center fixed bottom-5 right-5 px-4 w-12 h-12 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition duration-300 animate-float-item-one"
      >
        <ArrowUp />
      </button>
    )
  );
};

export default GoToTop;
