"use client";
import React, { useState } from "react";
import Image from "next/image";
import MyProfile from "./SidebarItems/MyProfile";
import AppointmentHistory from "./SidebarItems/Appointment/AppointmentHistory";
import MeetingHistory from "./SidebarItems/MeetingHistory";

const PatientDashboard = () => {
  const [activeSection, setActiveSection] = useState("My Profile");

  const sidebarOptions = [
    "My Profile",
    "Appointment",
    "Meeting History",
    "Logout"
  ];

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const renderContent = () => {
    switch (activeSection) {
      case "My Profile":
        return <MyProfile />;
      case "Appointment":
        return <AppointmentHistory />;
      case "Meeting History":
        return <MeetingHistory />;
      case "Logout":
        return (
          <div className="text-center">
            <p className="text-lg">You have logged out successfully.</p>
          </div>
        );
      default:
        return (
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold">Content for {activeSection}</h2>
          </div>
        );
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row mx-auto max-w-7xl p-4 gap-6">
        {/* Left Sidebar */}
        <div className="bg-white shadow rounded-lg p-6 w-full md:w-1/4">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHVzZXJ8ZW58MHx8MHx8fDA%3D"
                alt="Profile"
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>
            <h2 className="mt-4 text-lg font-semibold">Addition Smith</h2>
            <p className="text-sm text-gray-500">Patient Id: 20220501073345</p>
          </div>

          <div className="mt-6 space-y-4">
            {sidebarOptions.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleSectionChange(option)}
                className={`block w-full text-left px-4 py-2 rounded-md text-sm md:text-base lg:text-lg ${
                  activeSection === option
                    ? "bg-blue-500 text-white"
                    : "bg-blue-50 text-blue-600 hover:bg-blue-100"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 space-y-6">{renderContent()}</div>
      </div>
    </div>
  );
};

export default PatientDashboard;
