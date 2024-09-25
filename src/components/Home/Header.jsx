import Link from "next/link";
import React from "react";
import { FaRegUser } from "react-icons/fa6";
import { IoLockClosedOutline } from "react-icons/io5";

const Header = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <Link href="/">Medicare</Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/pages" className="hover:text-blue-600">
            Pages
          </Link>
          <Link href="/specialties" className="hover:text-blue-600">
            Specialties
          </Link>
          <Link href="/doctors" className="hover:text-blue-600">
            Doctors
          </Link>
          <Link href="/blog" className="hover:text-blue-600">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-blue-600">
            Contact Us
          </Link>
        </div>

        {/* Contact Info and Buttons */}
        <div className="flex items-center space-x-4">
          <Link
            href="/signUp"
            className="hover:bg-blue-600 hover:text-white px-4 py-2 rounded-md border font-semibold flex items-center gap-2 duration-200"
          >
            <FaRegUser /> Register
          </Link>
          <Link
            href="/login"
            className="bg-blue-600 text-white hover:bg-white hover:text-blue-600 px-4 py-2 rounded-md border font-semibold flex items-center gap-2 duration-200"
          >
            <IoLockClosedOutline  className="font-extra-bold text-lg"/> Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
