"use client";
import React from "react";
import AboutBanner from "@/UI/CommonBanner";
import AboutMedicare from "./AboutMedicare";
import Doctors from "../Home/Doctors";
import Services from "./Services";

const AboutUs = () => {
  return (
    <div>
      <AboutBanner customStyles="h-[550px]" />
      <div className="max-w-6xl mx-auto space-y-20 md:space-y-32">
        <AboutMedicare />
        <Services />
        <Doctors />
      </div>
    </div>
  );
};

export default AboutUs;
