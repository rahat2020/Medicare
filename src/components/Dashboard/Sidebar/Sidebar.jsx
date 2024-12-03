"use client";
import { menuItems } from "@/data/myProfileAndSidebarData";
import { alterredUserAvatar } from "@/utils/appHelpers";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Camera } from "react-feather";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="h-full flex flex-col">
      {/* Profile Section */}
      <div className="text-center mb-6">
        <div className="relative inline-block">
          <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-white shadow-md">
            <Image
              src={alterredUserAvatar}
              alt="Profile"
              width={96}
              height={96}
              className="rounded-full w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-1 right-1 bg-white hover:bg-blue-500 text-black hover:text-white p-2 rounded-full shadow-md cursor-pointer transition ">
            <Camera className="w-4 h-4" title="Edit Profile Picture" />
          </div>
        </div>
        <h2 className="mt-4 text-lg font-semibold text-gray-800">Addition Smith</h2>
        <p className="text-sm text-gray-500">Patient Id: 20220501073345</p>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 px-4">
        <ul className="space-y-3">
          {menuItems.map((item) => {
            const { label, href } = item || {};
            return (
              <li key={label}>
                <Link
                  href={href}
                  className={`block w-full text-left px-4 py-2 rounded-md text-base sm:text-xs md:text-[13] lg:text-base xl:text-lg ${
                    pathname === href
                      ? "bg-blue-500 text-white"
                      : "bg-blue-50 text-blue-600 hover:bg-blue-100"
                  } transition`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
