import Link from "next/link";
import React from "react";
import { FaRegUser } from "react-icons/fa6";
import { IoLockClosedOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const Topbar = () => {
  const links = (
    <>
      <Link href="/" className="hover:text-blue-600 flex gap-1 items-center">
        Home
      </Link>

      <div className="relative group">
        <Link
          href="/pages"
          className="hover:text-blue-600 flex gap-1 items-center"
        >
          Pages <IoIosArrowDown />
        </Link>

        {/* Dropdown */}
        <div className="w-48 absolute top-6 border rounded-sm opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-700 ease-in-out hidden group-hover:block bg-white shadow-lg">
          <Link
            href="/about"
            className="hover:text-blue-600 flex gap-1 items-center px-4 py-3 hover:px-6 duration-300"
          >
            About Us
          </Link>
          <hr />
          <Link
            href="/services"
            className="hover:text-blue-600 flex gap-1 items-center px-4 py-3 hover:px-6 duration-300"
          >
            Services
          </Link>
          <hr />
          <Link
            href="/serviceDetails"
            className="hover:text-blue-600 flex gap-1 items-center px-4 py-3 hover:px-6 duration-300"
          >
            Service Details
          </Link>
          <hr />
          <Link
            href="/faq"
            className="hover:text-blue-600 flex gap-1 items-center px-4 py-3 hover:px-6 duration-300"
          >
            FAQ
          </Link>
        </div>
      </div>

      <div className="relative group">
        <Link
          href="/specialties"
          className="hover:text-blue-600 flex gap-1 items-center"
        >
          Specialties <IoIosArrowDown />
        </Link>

        {/* Dropdown */}
        <div className="w-48 absolute top-6 border rounded-sm opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-700 ease-in-out hidden group-hover:block bg-white shadow-lg">
          <Link
            href="/cardiologist"
            className="hover:text-blue-600 flex gap-1 items-center px-4 py-3 hover:px-6 duration-300"
          >
            Cardiologist
          </Link>
          <hr />
          <Link
            href="/neurology"
            className="hover:text-blue-600 flex gap-1 items-center px-4 py-3 hover:px-6 duration-300"
          >
            Neurology
          </Link>
          <hr />
          <Link
            href="/ophthalmology"
            className="hover:text-blue-600 flex gap-1 items-center px-4 py-3 hover:px-6 duration-300"
          >
            Ophthalmology
          </Link>
          <hr />
          <Link
            href="/urology"
            className="hover:text-blue-600 flex gap-1 items-center px-4 py-3 hover:px-6 duration-300"
          >
            Urology
          </Link>
        </div>
      </div>

      <Link
        href="/doctors"
        className="hover:text-blue-600 flex gap-1 items-center"
      >
        Doctors
      </Link>
      <Link
        href="/blog"
        className="hover:text-blue-600 flex gap-1 items-center"
      >
        Blog
      </Link>
      <Link
        href="/contact"
        className="hover:text-blue-600 flex gap-1 items-center"
      >
        Contact Us
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
        <div className="hidden md:flex space-x-6 font-[500] duration-300">
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
