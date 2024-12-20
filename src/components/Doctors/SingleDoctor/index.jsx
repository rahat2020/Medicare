"use client";

import { useState } from "react";
import { Star, Clock, Calendar } from "react-feather";
import Image from "next/image";
import { alterredUserAvatar } from "@/utils/appHelpers";
import AppBreadcrumb from "@/UI/AppBreadCrumb";
import useMediaQuery from "@/hooks/useMediaQuery";

const SingleDoctor = ({ id }) => {
  console.log(id);
  const [activeTab, setActiveTab] = useState("info");
  const isMobileScreen = useMediaQuery("(max-width: 768px");

  const breadcrumbList = [
    {
      title: "All Doctors",
      href: "/all-doctors"
    },
    {
      title: "Single Doctor",
      activeLink: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-start items-center lg:flex-row">
          {breadcrumbList.map((item, index) => (
            <AppBreadcrumb
              key={item.title}
              breadcrumbList={breadcrumbList}
              item={item}
              index={index}
              href={item.href}
              isMobileScreen={isMobileScreen}
              breadcrumbListLength={breadcrumbList.length}
            />
          ))}
        </div>
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left Column - Image */}
            <div className="flex-shrink-0">
              <div className="relative w-48 h-48">
                <Image
                  src={alterredUserAvatar}
                  alt="Doctor profile"
                  fill
                  className="rounded-lg object-cover"
                />
                <span className="absolute bottom-2 left-2 px-2 py-1 text-xs font-semibold bg-green-500 text-white rounded-full">
                  Online
                </span>
              </div>
            </div>

            {/* Middle Column - Details */}
            <div className="flex-grow space-y-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Asst. Prof. Dr. Masrun Mostafa Chowdhury
                </h1>
                <p className="text-gray-600">MBBS, DDV (Dermatology)</p>
                <p className="text-gray-600">Training/Courses: CCd (Diabetology)</p>
                <span className="inline-block mt-2 px-3 py-1 text-sm font-semibold bg-blue-500 text-white rounded-full">
                  Dermatologist
                </span>
              </div>

              <div className="flex flex-wrap gap-6">
                <div>
                  <p className="text-sm text-gray-600">Total Experience</p>
                  <p className="font-semibold">10+ Years</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">BMDC Number</p>
                  <p className="font-semibold">72892</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Rating</p>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">4.9 (1358)</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600">
                Working in Ad-din Barishal Rafiquel Haque Medical Hospital
              </p>
            </div>

            {/* Right Column - Consultation Fee */}
            <div className="flex flex-col items-end gap-4">
              <div className="text-right">
                <p className="text-sm text-gray-600">Consultation Fee</p>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 line-through">৳500</span>
                  <span className="text-2xl font-bold text-blue-600">৳390</span>
                  <span className="text-sm text-gray-600">(Inc. VAT)</span>
                </div>
              </div>
              <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                See Doctor Now
              </button>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="flex border-b">
            {["info", "experience", "reviews"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 text-sm font-medium capitalize ${
                  activeTab === tab
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="p-6">
            {activeTab === "info" && (
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">About Doctor</h2>
                  <p className="text-gray-600">
                    অনুগ্রহ করে নিচের দুটি বিষয়ে লক্ষ্য রাখুন - ১। Please submit your personal
                    picture and previous documents on profile for better consultation ২।প্রতি ৫ দিন
                    পর পর নতুন রোগী,পুরাতন রোগী,ফলোআাপ রোগী সবাই আপনার ফোন নম্বর দিয়ে বুক করতে
                    পারবে। আপনাদের সেবায় নিজেকে নিবেদন করি।বিশেষজ্ঞ ডাক্তার দেখে,পরামর্শ নিয়ে,ঔষধ
                    খেয়ে ভালো থাকুন সবাই।ধন্যবাদ।
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4">At a Glance</h2>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 text-gray-600 mb-2">
                        <Clock className="w-4 h-4" />
                        <span>Instant Consultation Time</span>
                      </div>
                      <div className="ml-6 space-y-1">
                        <p>Mon: (1 PM - 10 PM)</p>
                        <p>Wed: (9 AM - 3:30 PM)</p>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 text-gray-600 mb-2">
                        <Calendar className="w-4 h-4" />
                        <span>Appointment Consultation Time</span>
                      </div>
                      <div className="ml-6">
                        <p>Mon - Wed: (1 PM - 11 PM)</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Patient Attended</p>
                        <p className="font-semibold">6172</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Joined DocTime</p>
                        <p className="font-semibold">April 23, 2022</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Avg. Consultation Time</p>
                        <p className="font-semibold">15 minutes</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Doctor Code</p>
                        <p className="font-semibold">DT6398</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "experience" && (
              <p className="text-gray-600">Experience information will go here.</p>
            )}

            {activeTab === "reviews" && <p className="text-gray-600">Reviews will go here.</p>}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SingleDoctor;
