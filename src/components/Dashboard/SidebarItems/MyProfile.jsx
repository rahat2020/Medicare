import React from "react";

const MyProfile = () => {
  return (
    <div>
      {/* Overview Cards */}
      <h2 className="text-xl font-semibold mb-6 border-b-2 border-blue-500 inline-block">
        Overview
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: "Total Appointment", value: "255", today: "15 Today" },
          { title: "Done Appointment", value: "220", today: "12 Today" },
          { title: "Pending Appointment", value: "35", today: "5 Today" },
          { title: "Total Payment", value: "255", today: "15 Today" },
          { title: "Total Review", value: "220", today: "5 Today" },
          { title: "Any One", value: "35", today: "5 Today" }
        ].map((card, idx) => (
          <div
            key={idx}
            className="bg-blue-500 text-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
          >
            <h3 className="text-lg font-semibold">{card.title}</h3>
            <p className="text-3xl font-bold my-2">{card.value}</p>
            <p className="text-sm">{card.today}</p>
          </div>
        ))}
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
          {[
            { label: "Name", value: "Smith Jhon" },
            { label: "Phone", value: "+880-16168-59689" },
            { label: "Email", value: "example@gmail.com" },
            { label: "Gender", value: "Male" },
            { label: "Weight", value: "64kg" },
            { label: "Age", value: "35" },
            {
              label: "Address",
              value: "2767 Sunrise Street, NY 1002, USA"
            }
          ].map((info, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-gray-500">{info.label}</span>
              <span className="font-semibold">{info.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
