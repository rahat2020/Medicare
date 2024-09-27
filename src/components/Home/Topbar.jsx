import Link from "next/link";
import React from "react";
import { FaRegUser } from "react-icons/fa6";
import { IoLockClosedOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const Topbar = () => {
  const links = (
    <>
      <Link href="/" className="hover:text-blue-600 flex gap-1 items-center">
        Home <IoIosArrowDown/>
      </Link>
      <Link href="/pages" className="hover:text-blue-600 flex gap-1 items-center">

        Pages <IoIosArrowDown/>
      </Link>
      <Link href="/specialties" className="hover:text-blue-600 flex gap-1 items-center">

        Specialties <IoIosArrowDown/>
      </Link>
      <Link href="/doctors" className="hover:text-blue-600 flex gap-1 items-center">

        Doctors <IoIosArrowDown/>
      </Link>
      <Link href="/blog" className="hover:text-blue-600 flex gap-1 items-center">

        Blog <IoIosArrowDown/>
      </Link>
      <Link href="/contact" className="hover:text-blue-600 flex gap-1 items-center">

        Cont act Us <IoIosArrowDown/>
      </Link>
    </>
  );

  return (
    <nav className="bg-white">
      <div className="container mx-auto flex items-center justify-between p-4 text-[15px]">
        {/* Logo */}
        <div className="text-3xl font-bold text-blue-600">
          <Link href="/">Medicare</Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 font-semibold duration-300">
          {links}
        </div>

        {/* Contact Info and Buttons */}
        <div className="flex items-center space-x-4">
          <Link
            href="/signUp"
            className="hover:bg-blue-600 hover:text-white px-4 py-2 rounded-md border font-semibold flex items-center gap-2 duration-300"
          >
            <FaRegUser /> Register
          </Link>
          <Link
            href="/login"
            className="bg-blue-600 text-white hover:bg-white hover:text-blue-600 px-4 py-2 rounded-md border font-semibold flex items-center gap-2 duration-300"
          >
            <IoLockClosedOutline className="font-extra-bold text-16" /> Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
