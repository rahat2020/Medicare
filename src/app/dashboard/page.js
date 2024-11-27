import React from 'react';
import CommonBanner from '@/UI/CommonBanner';

const PatientDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div>
        <CommonBanner title="Dashboard" routeName="Dashboard" />
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row mx-auto max-w-7xl p-4 gap-6">
        {/* Left Sidebar */}
        <div className="bg-white shadow rounded-lg p-6 w-full md:w-1/4">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHVzZXJ8ZW58MHx8MHx8fDA%3D"
                alt="Profile"
                width={96} // Set the width explicitly
                height={96} // Set the height explicitly
                className="object-cover w-full h-full"
              />
            </div>
            <h2 className="mt-4 text-lg font-semibold">Addition Smith</h2>
            <p className="text-sm text-gray-500">Patient Id: 20220501073345</p>
          </div>

          <div className="mt-6 space-y-4">
            {[
              'My Profile',
              'Appointment',
              'Transaction History',
              'Meeting History',
              'Upcoming Meeting',
              'Message',
              'Logout',
            ].map((item, idx) => (
              <button
                key={idx}
                className={`block w-full text-left px-4 py-2 rounded-md ${
                  item === 'Logout'
                    ? 'bg-green-500 text-white'
                    : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 space-y-6">
          {/* Overview Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Total Appointment', value: '255', today: '15 Today' },
              { title: 'Done Appointment', value: '220', today: '12 Today' },
              { title: 'Pending Appointment', value: '35', today: '5 Today' },
              { title: 'Total Payment', value: '255', today: '15 Today' },
              { title: 'Total Review', value: '220', today: '5 Today' },
              { title: 'Any One', value: '35', today: '5 Today' },
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
              <h2 className="text-xl font-semibold">Profile Information</h2>
              <button className="text-blue-500 hover:underline">Edit</button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'Name', value: 'Smith Jhon' },
                { label: 'Phone', value: '+880-16168-59689' },
                { label: 'Email', value: 'example@gmail.com' },
                { label: 'Gender', value: 'Male' },
                { label: 'Weight', value: '64kg' },
                { label: 'Age', value: '35' },
                { label: 'Address', value: '2767 Sunrise Street, NY 1002, USA' },
              ].map((info, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-gray-500">{info.label}</span>
                  <span className="font-semibold">{info.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;