"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X, User, Lock, ChevronDown, AlignRight } from "react-feather";

const Topbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const [speDropdownOpen, setSpeDropdownOpen] = useState(false);

  const links = (
    <>
      <Link href="/" className="hover:text-blue-600 flex gap-1 items-center">
        Home
      </Link>

      <div className="relative group">
        <Link
          href={"#"}
          className="hover:text-blue-600 flex gap-1 items-center"
        >
          Pages <ChevronDown />
        </Link>

        {/* Dropdown */}
        <div className="w-48 absolute left-0 top-6 mt-1 border rounded-sm opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out hidden group-hover:block bg-white shadow-lg z-10">
          <div className="bg-white w-48 py-2 opacity-0 -mt-4"></div>
          <Link
            href="/about"
            className="hover:text-blue-600 flex gap-1 items-center px-4 py-3 duration-300 hover:px-6"
          >
            About Us
          </Link>
          <hr />
          <Link
            href="/services"
            className="hover:text-blue-600 flex gap-1 items-center px-4 py-3 duration-300 hover:px-6"
          >
            Services
          </Link>
          <hr />
          <Link
            href="/serviceDetails"
            className="hover:text-blue-600 flex gap-1 items-center px-4 py-3 duration-300 hover:px-6"
          >
            Service Details
          </Link>
          <hr />
          <Link
            href="/faq"
            className="hover:text-blue-600 flex gap-1 items-center px-4 py-3 duration-300 hover:px-6"
          >
            FAQ
          </Link>
        </div>
      </div>

      <div className="relative group">
        <Link href="#" className="hover:text-blue-600 flex gap-1 items-center">
          Specialties <ChevronDown />
        </Link>

        {/* Dropdown */}
        <div className="w-48 absolute left-0 top-6 mt-1 border rounded-sm opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out hidden group-hover:block bg-white shadow-lg z-10">
          <div className="bg-white w-48 py-2 opacity-0 -mt-4"></div>
          <Link
            href="/cardiologist"
            className="hover:text-blue-600 flex gap-1 items-center px-4 py-3 duration-300 hover:px-6"
          >
            Cardiologist
          </Link>
          <hr />
          <Link
            href="/neurology"
            className="hover:text-blue-600 flex gap-1 items-center px-4 py-3 duration-300 hover:px-6"
          >
            Neurology
          </Link>
          <hr />
          <Link
            href="/ophthalmology"
            className="hover:text-blue-600 flex gap-1 items-center px-4 py-3 duration-300 hover:px-6"
          >
            Ophthalmology
          </Link>
          <hr />
          <Link
            href="/urology"
            className="hover:text-blue-600 flex gap-1 items-center px-4 py-3 duration-300 hover:px-6"
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
  const smallDeviceLinks = (
    <>
      <Link href="/" className="hover:text-blue-600 flex gap-1 items-center">
        Home
      </Link>

      <div className="relative">
        <Link
          href={"#"}
          onClick={() => setPagesDropdownOpen(!pagesDropdownOpen)}
          className="hover:text-blue-600 flex gap-1 items-center"
        >
          Pages <ChevronDown />
        </Link>

        {/* Dropdown */}
        {
        pagesDropdownOpen && <div className="w-48 left-0 top-6 mt-1 border rounded-sm transition-all duration-300 bg-white shadow-lg z-10">
          <Link
            href="/about"
            className="hover:text-blue-600 flex gap-1 items-center px-4 py-3 duration-300"
          >
            About Us
          </Link>
          <hr />
          <Link
            href="/services"
            className="hover:text-blue-600 flex gap-1 items-center px-4 py-3 duration-300"
          >
            Services
          </Link>
          <hr />
          <Link
            href="/serviceDetails"
            className="hover:text-blue-600 flex gap-1 items-center px-4 py-3 duration-300"
          >
            Service Details
          </Link>
          <hr />
          <Link
            href="/faq"
            className="hover:text-blue-600 flex gap-1 items-center px-4 py-3 duration-300"
          >
            FAQ
          </Link>
        </div>
        }
      </div>

      <div className="relative">
        <Link onClick={()=> setSpeDropdownOpen(!speDropdownOpen)} href="#" className="hover:text-blue-600 flex gap-1 items-center">
          Specialties <ChevronDown />
        </Link>

        {/* Dropdown */}
        {speDropdownOpen && <div className="w-48 left-0 top-6 mt-1 border rounded-sm transition-all duration-300 bg-white shadow-lg z-10">
          <div className="bg-white w-48 py-2 opacity-0 -mt-4"></div>
          <Link
            href="/cardiologist"
            className="hover:text-blue-600 flex gap-1 items-center px-4 py-3 duration-300"
          >
            Cardiologist
          </Link>
          <hr />
          <Link
            href="/neurology"
            className="hover:text-blue-600 flex gap-1 items-center px-4 py-3 duration-300"
          >
            Neurology
          </Link>
          <hr />
          <Link
            href="/ophthalmology"
            className="hover:text-blue-600 flex gap-1 items-center px-4 py-3 duration-300"
          >
            Ophthalmology
          </Link>
          <hr />
          <Link
            href="/urology"
            className="hover:text-blue-600 flex gap-1 items-center px-4 py-3 duration-300"
          >
            Urology
          </Link>
        </div>}
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
      <div className="px-4 md:px-6 lg:px-0 flex items-center justify-between text-sm md:text-[15px] py-4">
        <div className="flex gap-4 items-center">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-5xl text-blue-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <AlignRight />}
          </button>

          {/* Logo */}
          <div className="text-3xl font-bold text-blue-600">
            <Link href="/">Medicare</Link>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-3 lg:space-x-6 font-[500] flex-grow justify-center">
          {links}
        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-2 md:space-x-4">
          <Link
            href="/signUp"
            className="hover:bg-blue-600 hover:text-white px-2 lg:px-4 py-1 lg:py-2 rounded-md border font-semibold flex items-center gap-2 duration-300"
          >
            <User /> Register
          </Link>
          <Link
            href="/login"
            className="bg-blue-600 text-white hover:bg-white hover:text-blue-600 px-2 lg:px-4 py-1 lg:py-2 rounded-md border font-semibold flex items-center gap-2 duration-300"
          >
            <Lock className="font-extra-bold text-sm md:text-16" /> Login
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg p-4 space-y-4">
          {smallDeviceLinks}

          {/* Mobile Buttons */}
          <div className="flex flex-col space-y-2">
            <Link
              href="/signUp"
              className="hover:bg-blue-600 hover:text-white px-4 py-2 rounded-md border font-semibold flex items-center gap-2 duration-300"
            >
              <User /> Register
            </Link>
            <Link
              href="/login"
              className="bg-blue-600 text-white hover:bg-white hover:text-blue-600 px-4 py-2 rounded-md border font-semibold flex items-center gap-2 duration-300"
            >
              <Lock className="font-extra-bold text-16" /> Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Topbar;
