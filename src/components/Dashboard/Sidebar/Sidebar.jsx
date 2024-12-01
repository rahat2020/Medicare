import Image from "next/image";
import React from "react";

const Sidebar = () => {
  return (
    <div className="w-full md:w-1/4 bg-white p-6 shadow-md">
      <div className="text-center mb-6">
        <div className="relative w-24 h-24 mx-auto mb-4">
          <Image
            src="/user-photo.jpg"
            alt="User"
            className="rounded-full w-full h-full object-cover"
          />
          <div className="absolute bottom-0 right-0 bg-blue-500 p-1 rounded-full cursor-pointer">
            <Image src="/camera-icon.png" alt="Edit" className="w-4 h-4" />
          </div>
        </div>
        <h2 className="text-xl font-semibold">Addition Smith</h2>
        <p className="text-gray-500 text-sm">Patient Id: 20220501073345</p>
      </div>
      <ul className="space-y-4">
        <li className="text-gray-700 font-medium cursor-pointer">My Profile</li>
        <li className="text-blue-500 font-medium cursor-pointer">Appointment</li>
        <li className="text-gray-700 font-medium cursor-pointer">Transaction History</li>
        <li className="text-gray-700 font-medium cursor-pointer">Meeting History</li>
        <li className="text-gray-700 font-medium cursor-pointer">Upcoming Meeting</li>
        <li className="text-gray-700 font-medium cursor-pointer">Message</li>
        <li className="text-green-500 font-medium cursor-pointer">Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;
