"use client";
import Link from "next/link";
import React, { useState } from "react";
import { X, User, Lock, AlignRight } from "react-feather";
import { navData } from "@/data/navData";
import AppButton from "@/UI/AppButton";
import Image from "next/image";
import SignInAndSignUp from "../Authentication";

const Topbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const [speDropdownOpen, setSpeDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log("ismoda", isModalOpen);
  const links = (
    <>
      {navData.map((item, index) => (
        <div key={index} className="relative group">
          <Link href={item.href} className="hover:text-blue-600 flex gap-1 items-center">
            {item.label} {item.icon && <span className="ml-1">{item.icon}</span>}
          </Link>

          {item.dropdown && (
            <div className="w-48 absolute left-0 top-6 mt-1 border rounded-sm opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out hidden group-hover:block bg-white shadow-lg z-10">
              <div className="bg-white w-48 py-2 opacity-0 -mt-4"></div>
              {item.dropdown.map((dropdownItem, idx) => (
                <div key={idx}>
                  <Link
                    href={dropdownItem.href}
                    className="hover:text-blue-600 flex gap-1 items-center px-4 py-3 duration-300 hover:px-6"
                  >
                    {dropdownItem.label}
                  </Link>
                  {idx < item.dropdown.length - 1 && <hr />}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );

  const smallDeviceLinks = (
    <>
      {navData?.map((item, index) => (
        <div key={index} className="relative">
          <Link
            href={item?.href}
            onClick={() => {
              if (item.dropdown) {
                if (item.label === "Pages") {
                  setPagesDropdownOpen(!pagesDropdownOpen);
                } else if (item.label === "Specialties") {
                  setSpeDropdownOpen(!speDropdownOpen);
                }
              }
            }}
            className="hover:text-blue-600 flex gap-1 items-center"
          >
            {item.label} {item?.icon}
          </Link>

          {/* Dropdown */}
          {item?.dropdown && (
            <div
              className={`w-48 left-0 top-6 mt-1 border rounded-sm transition-all duration-300 bg-white z-10 ${
                (item.label === "Pages" && pagesDropdownOpen) ||
                (item.label === "Specialties" && speDropdownOpen)
                  ? "block"
                  : "hidden"
              }`}
            >
              {item?.dropdown?.map((dropdownItem, idx) => (
                <div key={idx}>
                  <Link
                    href={dropdownItem?.href}
                    className="hover:text-blue-600 flex gap-1 items-center px-4 py-3 duration-300"
                  >
                    {dropdownItem?.label}
                  </Link>
                  {idx < item.dropdown.length - 1 && <hr />}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );

  return (
    <nav className="bg-white ">
      <div className="px-4 lg:px-24 flex items-center justify-between text-sm md:text-[15px] py-4">
        <div className="flex gap-4 items-center">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-5xl text-blue-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <AlignRight />}
          </button>

          {/* Logo */}
          <div className="">
            <Link href="/">
              <Image
                src={"/assets/MEDICARE_HALF.png"}
                alt="logo"
                width={175}
                height={80}
                quality={100}
                priority={true}
              />
            </Link>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-3 lg:space-x-6 font-[500] flex-grow justify-center">
          {links}
        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-2 md:space-x-4">
          <AppButton
            withoutHrefBtn
            text="Register"
            icon={User}
            callback={() => setIsModalOpen(true)}
            customStyles={"hover:bg-blue-500 hover:text-white px-2"}
          />
          <AppButton
            withoutHrefBtn
            text="Login"
            icon={Lock}
            callback={() => setIsModalOpen(true)}
            customStyles={
              "bg-blue-500 text-white hover:bg-white hover:text-blue-500 border-blue-500 px-2"
            }
          />
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
              className="hover:bg-blue-500 hover:text-white px-4 py-2 rounded-md border font-semibold flex items-center gap-2 duration-300"
            >
              <User /> Register
            </Link>
            <Link
              href="/login"
              className="bg-blue-500 text-white hover:bg-white hover:text-blue-600 px-4 py-2 rounded-md border font-semibold flex items-center gap-2 duration-300"
            >
              <Lock className="font-extra-bold text-16" /> Login
            </Link>
          </div>
        </div>
      )}
      {isModalOpen && <SignInAndSignUp setIsModalOpen={setIsModalOpen} />}
    </nav>
  );
};

export default Topbar;
