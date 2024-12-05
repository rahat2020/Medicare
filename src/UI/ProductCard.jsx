"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Eye, Heart, ShoppingCart } from "react-feather";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const { image, name, price, rating } = product || null;
  const [itemAmount, setItemAmount] = useState(0);

  const productIcons = (
    <>
      <button>
        <Heart
          className="bg-red-200 rounded-full text-red-500 shadow-md shadow-red-200 hover:bg-red-500 hover:text-white duration-300 p-2"
          size={35}
        />
      </button>
      <Link href="#">
        <Eye
          className="bg-blue-200 rounded-full text-blue-500 shadow-md shadow-blue-200 hover:bg-blue-500 hover:text-white duration-300 p-2"
          size={35}
        />
      </Link>
      <Link href="#">
        <ShoppingCart
          className="bg-yellow-200 rounded-full text-yellow-500 shadow-md shadow-yellow-200 hover:bg-yellow-500 hover:text-white duration-300 p-2"
          size={35}
        />
      </Link>
    </>
  );

  return (
    <div className="bg-white">
      <div className="overflow-hidden border shadow-sm rounded-lg mb-5 group relative">
        {/* Product View Icons */}
        <div className="flex flex-col gap-3 text-18 text-white absolute -left-10 group-hover:left-3 top-3 duration-300">
          {productIcons}
        </div>

        <Image
          width={261}
          height={313}
          src={image}
          alt={name}
          className="object-cover transition-transform duration-300 group"
        />

        {/*Product Amount Section*/}
        <div className="flex justify-center gap-3 text-18 text-white absolute -bottom-12 group-hover:bottom-3 w-full duration-300">
          <button
            onClick={() => setItemAmount((prev) => Math.max(0, prev - 1))}
            className="bg-blue-600 px-4 py-1 rounded-full cursor-pointer"
          >
            -
          </button>
          <span className="bg-blue-600 px-6 py-1 rounded-full">{itemAmount}</span>
          <button
            onClick={() => setItemAmount((prev) => prev + 1)}
            className="bg-blue-600 px-4 py-1 rounded-full cursor-pointer"
          >
            +
          </button>
        </div>
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

export default ProductCard;
