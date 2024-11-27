"use client";
import Image from "next/image";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-[80vh] w-full">
      <Image
        src={"/assets/not-found.gif"}
        alt="loader"
        width={300}
        height={100}
        quality={100}
        priority={true}
      />
    </div>
  );
};

export default NotFound;
