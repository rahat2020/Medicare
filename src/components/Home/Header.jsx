import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowRight, CheckSquare, ChevronDown, Search } from "react-feather";

const Header = () => {
  return (
    <div className="md:h-screen px-4 md:px-6 flex flex-col md:flex-row items-center justify-between rounded-lg relative overflow-hidden ">
      {/* Left Section */}
      <div className="md:w-1/2 flex flex-col justify-center">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Consult <span className="text-blue-600">Best Doctors</span> Your
            Nearby Location
          </h1>
          <p className="text-gray-500 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
          <button className="flex items-center bg-blue-500 hover:bg-white hover:text-blue-500 text-white border hover:border-blue-500 rounded-lg font-semibold shadow-md transition duration-300 w-fit px-7 py-3 text-lg">
            <span>Start a Consult</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Search Section */}
        <div className="bg-white rounded-full shadow-md p-2 flex items-center space-x-2 border border-gray-200 w-full mt-14">
          <select className="outline-none border-none bg-transparent text-gray-500 px-4 py-3 w-1/3 appearance-none">
            <option>Select a location</option>
            <option>Bangladesh</option>
            <option>Pakistan</option>
            <option>Palestine</option>
            <option>Afghanistan</option>
          </select>
          <span className="text-gray-400">
            <ChevronDown />
          </span>
          <span className="border-l-2 py-4"></span>
          <input
            type="text"
            placeholder="Search doctors, clinics, etc."
            className="outline-none px-4 py-3 w-full text-gray-600"
          />
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full flex items-center space-x-1">
            <Search />
            <span>Search</span>
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative mt-8 md:mt-0 md:w-1/2 flex justify-center items-center">
        {/* Doctor Image */}
        <div className="relative w-full h-auto md:w-3/4 md:h-auto">
          <Image
            src="https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg="
            alt="Doctor"
            width={500}
            height={600}
            className="rounded-lg object-cover"
          />
        </div>

        {/* Check Up Card with Floating Animation */}
        <div className="absolute top-1/2 left-0 bg-white p-2 lg:p-4 rounded-lg border shadow-md flex items-center gap-4 animate-float-item-one">
          {/* Checkbox Section */}
          <div className="flex items-center gap-2 text-blue-600">
            <CheckSquare size={20} />
            <p className="text-gray-500 text-14 lg:text-16">Regular Checkup</p>
          </div>
        </div>

        {/* Floating Doctor Card with Animation */}
        <div className="absolute top-4 lg:top-1/4 -right-8 md:right-0 bg-white p-2 lg:p-3 border rounded-lg shadow-md flex flex-col text-center items-center gap-4 animate-float-item-two">
          <div className="w-12 lg:w-14 h-12 lg:h-14 rounded-full overflow-hidden border-2 border-white shadow-md relative">
            <Image
              src="https://media.istockphoto.com/id/1434687410/photo/portrait-of-happy-and-successful-african-american-doctor-man-working-inside-office-clinic.jpg?s=612x612&w=0&k=20&c=kKvUmzkotN3FrWTGgS3ar2mm4SLwlV3cbiNC-Bp12YI="
              alt="Doctor Avatar"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>

          <div className="text-sm">
            <p className="font-semibold text-gray-800">John Doe</p>
            <p className="text-gray-500">MBBS, Cardiologist</p>
          </div>
          <button className="text-blue-600 bg-gray-100 px-3 py-1 rounded-lg text-xs shadow-md">
            Book Now
          </button>
        </div>

        {/* Meet Our Doctors Section with Floating Animation */}
        <div className="absolute bottom-0 right-0 bg-white p-5 border rounded-lg shadow-md flex flex-col text-center items-center gap-2 mt-5 animate-float-item-one">
          <p className="font-semibold text-gray-800">Meet Our Doctors</p>
          <div className="flex -space-x-1">
            <img
              src="https://media.istockphoto.com/id/1327024466/photo/portrait-of-male-doctor-in-white-coat-and-stethoscope-standing-in-clinic-hall.jpg?s=612x612&w=0&k=20&c=49wqOwwuonk9f8NACL7M_5RosqQPFwJ8-dpmeo9AvQw="
              className="w-11 h-11 rounded-full border-2 border-white object-cover"
              alt="Doctor 2"
            />
            <img
              src="https://media.istockphoto.com/id/1270790502/photo/medical-concept-of-indian-beautiful-female-doctor-with-note-book.jpg?s=612x612&w=0&k=20&c=5r5tCLSnYHKiPNaHn4hu-e4u_-3eat_8PRdmEQgkmVM="
              className="w-11 h-11 rounded-full border-2 border-white object-cover"
              alt="Doctor 1"
            />
            <img
              src="https://media.istockphoto.com/id/1327024466/photo/portrait-of-male-doctor-in-white-coat-and-stethoscope-standing-in-clinic-hall.jpg?s=612x612&w=0&k=20&c=49wqOwwuonk9f8NACL7M_5RosqQPFwJ8-dpmeo9AvQw="
              className="w-11 h-11 rounded-full border-2 border-white object-cover"
              alt="Doctor 2"
            />
            <img
              src="https://media.istockphoto.com/id/488119238/photo/portrait-of-a-doctor-smiling.jpg?s=612x612&w=0&k=20&c=11dBh4bti6qDbAkiCsollQxO7u3k8q3VuiynwlUj2II="
              className="w-11 h-11 rounded-full border-2 border-white object-cover"
              alt="Doctor 3"
            />
            <span className="bg-blue-600 text-white p-2 rounded-full text-xs">
              12k+
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
