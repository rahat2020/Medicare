"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Camera } from "react-feather";

const menuItems = [
  { name: "My Profile", href: "/dashboard" },
  { name: "Appointment History", href: "/appointment-history" },
  { name: "Meeting History", href: "/meeting-history" },
  { name: "Setting", href: "/settings" },
  { name: "Logout", href: "/logout" }
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="h-full flex flex-col">
      {/* Profile Section */}
      <div className="text-center mb-6">
        <div className="relative inline-block">
          <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-white shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHVzZXJ8ZW58MHx8MHx8fDA%3D"
              alt="Profile"
              width={96}
              height={96}
              className="rounded-full w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-1 right-1 bg-white hover:bg-blue-500 p-2 rounded-full shadow-md cursor-pointer transition ">
            <Camera className="text-black hover:text-white w-4 h-4" title="Edit Profile Picture" />
          </div>
        </div>
        <h2 className="mt-4 text-lg font-semibold text-gray-800">Addition Smith</h2>
        <p className="text-sm text-gray-500">Patient Id: 20220501073345</p>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 px-4">
        <ul className="space-y-3">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`block w-full text-left px-4 py-2 rounded-md text-sm md:text-base lg:text-lg ${
                  pathname === item.href
                    ? "bg-blue-500 text-white"
                    : "bg-blue-50 text-blue-600 hover:bg-blue-100"
                } transition`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
