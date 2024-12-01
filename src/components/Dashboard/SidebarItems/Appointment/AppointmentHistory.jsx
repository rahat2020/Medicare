import React, { useState } from "react";
import Pagination from "../../../../UI/Pagination";

const allAppointments = [
  {
    id: 1,
    doctor: "Dr. Samuel Bro",
    specialization: "Dental",
    date: "05 Jun 2023",
    time: "4:30 PM",
    chamber: "12/3 Mirpur Dhaka Bangladesh",
    status: "Complete"
  },
  {
    id: 2,
    doctor: "Dr. Samuel Bro",
    specialization: "Dental",
    date: "05 Jun 2023",
    time: "4:30 PM",
    chamber: "12/3 Mirpur Dhaka Bangladesh",
    status: "Pending"
  },
  {
    id: 3,
    doctor: "Dr. Samuel Bro",
    specialization: "Dental",
    date: "05 Jun 2023",
    time: "4:30 PM",
    chamber: "12/3 Mirpur Dhaka Bangladesh",
    status: "Complete"
  },
  {
    id: 4,
    doctor: "Dr. Samuel Bro",
    specialization: "Dental",
    date: "05 Jun 2023",
    time: "4:30 PM",
    chamber: "12/3 Mirpur Dhaka Bangladesh",
    status: "Pending"
  },
  {
    id: 5,
    doctor: "Dr. Samuel Bro",
    specialization: "Dental",
    date: "05 Jun 2023",
    time: "4:30 PM",
    chamber: "12/3 Mirpur Dhaka Bangladesh",
    status: "Complete"
  },
  {
    id: 6,
    doctor: "Dr. Samuel Bro",
    specialization: "Dental",
    date: "05 Jun 2023",
    time: "4:30 PM",
    chamber: "12/3 Mirpur Dhaka Bangladesh",
    status: "Pending"
  },
  {
    id: 7,
    doctor: "Dr. Samuel Bro",
    specialization: "Dental",
    date: "05 Jun 2023",
    time: "4:30 PM",
    chamber: "12/3 Mirpur Dhaka Bangladesh",
    status: "Complete"
  },
  {
    id: 8,
    doctor: "Dr. Samuel Bro",
    specialization: "Dental",
    date: "05 Jun 2023",
    time: "4:30 PM",
    chamber: "12/3 Mirpur Dhaka Bangladesh",
    status: "Pending"
  },
  {
    id: 9,
    doctor: "Dr. Samuel Bro",
    specialization: "Dental",
    date: "05 Jun 2023",
    time: "4:30 PM",
    chamber: "12/3 Mirpur Dhaka Bangladesh",
    status: "Complete"
  },
  {
    id: 10,
    doctor: "Dr. Samuel Bro",
    specialization: "Dental",
    date: "05 Jun 2023",
    time: "4:30 PM",
    chamber: "12/3 Mirpur Dhaka Bangladesh",
    status: "Pending"
  },
  {
    id: 11,
    doctor: "Dr. Samuel Bro",
    specialization: "Dental",
    date: "05 Jun 2023",
    time: "4:30 PM",
    chamber: "12/3 Mirpur Dhaka Bangladesh",
    status: "Complete"
  },
  {
    id: 12,
    doctor: "Dr. Samuel Bro",
    specialization: "Dental",
    date: "05 Jun 2023",
    time: "4:30 PM",
    chamber: "12/3 Mirpur Dhaka Bangladesh",
    status: "Pending"
  }
];

const AppointmentHistory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const appointmentsPerPage = 6;

  // Calculate paginated data
  const totalPages = Math.ceil(allAppointments.length / appointmentsPerPage);
  const currentAppointments = allAppointments.slice(
    (currentPage - 1) * appointmentsPerPage,
    currentPage * appointmentsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg max-w-6xl mx-auto">
      <h2 className="text-lg md:text-xl font-semibold mb-6 border-b-2 border-blue-500 inline-block">
        Appointment History
      </h2>
      {/* Appointments Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-left border-collapse border border-gray-200 text-xs sm:text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="py-4 px-2 sm:px-4 border">SN</th>
              <th className="py-4 px-2 sm:px-4 border">Doctor</th>
              <th className="py-4 px-2 sm:px-4 border">Date</th>
              <th className="py-4 px-2 sm:px-4 border">Chamber</th>
              <th className="py-4 px-2 sm:px-4 border">Status</th>
              <th className="py-4 px-2 sm:px-4 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentAppointments.map((appointment, index) => (
              <tr key={appointment.id} className="text-xs sm:text-sm hover:bg-gray-50">
                <td className="py-4 px-2 sm:px-4 border">
                  {(currentPage - 1) * appointmentsPerPage + index + 1}
                </td>
                <td className="border px-2 sm:px-4 py-4">
                  <div className="flex flex-col items-start sm:items-center">
                    <span className="font-medium">{appointment.doctor}</span>
                    <span className="text-[8px] md:text-xs sm:text-sm text-gray-500">
                      {appointment.specialization}
                    </span>
                  </div>
                </td>
                <td className="border px-2 sm:px-4 py-4">
                  <div className="flex flex-col items-start sm:items-center">
                    <span className="font-medium">{appointment.date}</span>
                    <span className="text-xs text-blue-500">{appointment.time}</span>
                  </div>
                </td>
                <td className="border px-2 sm:px-4 py-4">{appointment.chamber}</td>
                <td className="border px-2 sm:px-4 py-4">
                  {appointment.status === "Complete" ? (
                    <span className="py-1 px-3 rounded-full text-white text-xs sm:text-sm bg-green-400">
                      {appointment.status}
                    </span>
                  ) : (
                    <span className="py-1 px-3 rounded-full text-white text-xs sm:text-sm bg-blue-400">
                      {appointment.status}
                    </span>
                  )}
                </td>
                <td className="border px-2 sm:px-4 py-4">
                  <button className="bg-blue-100 text-blue-500 px-3 py-1 rounded-full text-xs sm:text-sm hover:bg-blue-200">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default AppointmentHistory;
