"use client";
import Image from "next/image";
import React from "react";

const AppSpinner = ({ clsname }) => {
  return (
    <div className={`${clsname} flex justify-center items-center text-dark fw-bold my-5 `}>
      <Image
        src={"/assets/loader.gif"}
        alt="loader"
        width={55}
        height={50}
        quality={100}
        priority={true}
      />
    </div>
  );
};

export default AppSpinner;
