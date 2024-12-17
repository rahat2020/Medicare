"use client";
import { overviewCard, patientInfo } from "@/data/myProfileAndSidebarData";
import React from "react";

const MyProfile = () => {
  return (
    <div>
      {/* Overview Cards */}
      <h2 className="text-xl font-semibold mb-6 border-b-2 border-blue-500 inline-block">
        Overview
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {overviewCard.map((card, idx) => {
          const { title, value, today } = card || {};
          return (
            <div
              key={idx}
              className="bg-blue-500 text-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-3xl font-bold my-2">{value}</p>
              <p className="text-sm">{today}</p>
            </div>
          );
        })}
      </div>

      {/* Profile Information */}
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <h2 className="text-xl font-semibold mb-6 border-b-2 border-blue-500 inline-block">
            Profile Information
          </h2>
          <button className="text-blue-500 hover:underline">Edit</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {patientInfo.map((info, idx) => {
            const { label, value } = info || {};
            return (
              <div key={idx} className="flex flex-col">
                <span className="text-gray-500">{label}</span>
                <span className="font-semibold">{value}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
