"use client";

import AppButton from "@/UI/AppButton";
import CommonBanner from "@/UI/CommonBanner";
import Image from "next/image";
import { Globe, Mail, MapPin, Phone, Upload } from "react-feather";

const ContactUs = () => {
  return (
    <div className="">
      <CommonBanner title="Contact Us" routeName="Contact Us" />
      <div className="max-w-7xl mx-auto mb-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          <div className="bg-white shadow-md rounded-lg p-6 flex justify-center items-center flex-col text-center">
            <div className="bg-pink-600 flex justify-center items-center w-10 h-10 rounded-full">
              <span className="text-white text-3xl">
                <MapPin />
              </span>
            </div>
            <h3 className="text-lg font-semibold mt-4">Office Address</h3>
            <p className="text-sm text-gray-600 mt-2">
              16/A, Romadan House City, Tower New York, United States
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 flex justify-center items-center flex-col text-center">
            <div className="bg-blue-500 flex justify-center items-center w-10 h-10 rounded-full">
              <span className="text-white text-3xl">
                <Phone />
              </span>
            </div>
            <h3 className="text-lg font-semibold mt-4">Phone Number</h3>
            <p className="text-sm text-gray-600 mt-2">
              +880 1234 567895 <br /> +880 9876 543217
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 flex justify-center items-center flex-col text-center">
            <div className="bg-yellow-500 flex justify-center items-center w-10 h-10 rounded-full">
              <span className="text-white text-3xl">
                <Mail />
              </span>
            </div>
            <h3 className="text-lg font-semibold mt-4">Office Address</h3>
            <p className="text-sm text-gray-600 mt-2">
              medicare@gmail.com <br /> medicare-support@gmail.com
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 flex justify-center items-center flex-col text-center">
            <div className="bg-green-500 flex justify-center items-center w-10 h-10 rounded-full">
              <span className="text-white text-3xl">
                <Globe />
              </span>
            </div>
            <h3 className="text-lg font-semibold mt-4">Website Address</h3>
            <p className="text-sm text-gray-600 mt-2">
              16/A, Romadan House City Tower <br /> New York, United States
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 py-10">
          <div className="flex-1 flex justify-center items-center">
            <Image
              src="/assets/faq-img.png"
              alt="Doctors"
              width={400}
              height={400}
              loading="lazy"
              className="rounded-lg animate-float-item-one"
            />
          </div>
          <form className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 p-3">
            <input
              type="text"
              placeholder="Full Name"
              className="border rounded-full p-2 w-full focus:outline-none focus:text-border-regular"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border rounded-full p-2 w-full focus:outline-none"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="border rounded-full p-2 w-full focus:outline-none"
            />
            <input
              type="text"
              placeholder="Subject"
              className="border rounded-full p-2 w-full focus:outline-none"
            />
            <input
              type="text"
              placeholder="Service"
              className="border rounded-full p-2 w-full md:col-span-2 focus:outline-none"
            />
            <textarea
              placeholder="Message"
              className="border rounded-lg p-2 w-full md:col-span-2 h-24 focus:outline-none"
            ></textarea>
            <AppButton
              icon={Upload}
              text="Submit"
              withoutHrefBtn={true}
              customStyles={
                " justify-center md:col-span-2 bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition duration-300"
              }
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
