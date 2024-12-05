import Image from "next/image";
import React from "react";

const OurProductCard = ({ product }) => {
  const { image, name, price, rating } = product || null;
  return (
    <div className="bg-white">
      <div className="overflow-hidden border shadow-sm rounded-lg mb-5">
        <Image
          width={261}
          height={313}
          src={image}
          alt={name}
          className="object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="px-2">
        <h2 className="text-sm font-semibold mb-2">{name}</h2>
        <div className="flex items-center justify-between">
          <p className="text-gray-400 text-sm font-semibold">{price}</p>
          <span className="flex items-center">
            {Array(rating)
              .fill(0)
              .map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-4 text-[#F1B561]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.78 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"
                  />
                </svg>
              ))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default OurProductCard;
