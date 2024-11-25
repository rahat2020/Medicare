import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "react-feather";

const DoctorsCard = ({ doctor }) => {
  const doctorContactIcons = (
    <>
      <Link href="#">
        <Facebook
          className="text-blue-500 hover:text-white hover:bg-blue-500 absolute z-20 duration-300 -left-10 group-hover:left-3 bottom-40 bg-gray-100 shadow-lg p-2 rounded-full "
          size={34}
        />
      </Link>
      <Link href="#">
        <Linkedin
          className="text-blue-500 hover:text-white hover:bg-blue-500 absolute z-20 duration-300 -left-10  group-hover:left-3 bottom-[120px] bg-gray-100 shadow-lg p-2 rounded-full "
          size={34}
        />
      </Link>
      <Link href="#">
        <Twitter
          className="text-blue-500 hover:text-white hover:bg-blue-500 absolute z-20 duration-300 -left-10 group-hover:left-3 bottom-20 bg-gray-100 shadow-lg p-2 rounded-full "
          size={34}
        />
      </Link>
      <Link href="#">
        <Instagram
          className="text-blue-500 hover:text-white hover:bg-blue-500 absolute z-20 duration-300 -left-10 group-hover:left-3 bottom-10 bg-gray-100 shadow-lg p-2 rounded-full "
          size={34}
        />
      </Link>
    </>
  );

  return (
    <div className="bg-white rounded-lg p-4 doc_card_style">
      <div className="relative doc_card_img rounded-md group bg-gray-200 overflow-hidden mb-4 overflow-x-hidden">
        <Image
          src={doctor.image}
          alt={doctor.name}
          className="object-cover w-full h-full group"
          width={500}
          height={500}
        />
        {doctorContactIcons}
      </div>
      <div className="text-center">
        <h3 className="font-semibold text-lg">{doctor.name}</h3>
        <p className="text-sm text-gray-500">{doctor.profession}</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <p className="text-blue-500 font-semibold">{doctor.location}</p>
        <p className="bg-gray-100 p-1 rounded-md text-sm">{doctor.price}</p>
      </div>
      <div className="flex justify-between items-center mt-2 ratings">
        <div className="flex items-center text-yellow-500">
          <span className="font-bold text-sm">{doctor.rating}</span>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.63-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.45 4.73L5.82 21z" />
          </svg>
          <span className="ml-1 text-gray-500 text-sm">(0)</span>
        </div>
      </div>
    </div>
  );
};

export default DoctorsCard;
