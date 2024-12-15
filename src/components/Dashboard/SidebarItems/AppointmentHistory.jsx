"use client";
import { useState } from "react";
import { allAppointments } from "@/data/appointmentsData";
import TableComponent from "@/UI/TableComponent";
import Pagination from "@/UI/Pagination";

const AppointmentHistory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(allAppointments.length / itemsPerPage);
  const currentAppointments = allAppointments.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => setCurrentPage(page);

  const headers = ["SN", "Doctor", "Date", "Chamber", "Status", "Action"];
  const renderRow = (appointment, index) => {
    const { id, doctor, specialization, date, time, chamber, status } = appointment;
    return (
      <tr key={id} className="hover:bg-gray-50 whitespace-nowrap">
        <td className="border px-4 py-3">{(currentPage - 1) * itemsPerPage + index + 1}</td>
        <td className="border px-4 py-3">
          <div className="flex flex-col items-start">
            <span>{doctor}</span>
            <span className="text-xs text-gray-500">{specialization}</span>
          </div>
        </td>
        <td className="border px-4 py-3">
          <div className="flex flex-col items-start">
            <span>{date}</span>
            <span className="text-xs text-blue-500">{time}</span>
          </div>
        </td>
        <td className="border px-4 py-3">{chamber}</td>
        <td className="border px-4 py-3">
          <span
            className={`py-1 px-3 rounded-full text-white text-xs ${
              status === "Complete" ? "bg-green-400" : "bg-blue-400"
            }`}
          >
            {status}
          </span>
        </td>
        <td className="border px-4 py-3">
          <button className="bg-blue-100 text-blue-500 px-3 py-1 rounded-full hover:bg-blue-200">
            Edit
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg max-w-6xl mx-auto">
      <h2 className="text-lg md:text-xl font-semibold mb-6 border-b-2 border-blue-500 inline-block">
        Appointment History
      </h2>
      <TableComponent headers={headers} data={currentAppointments} renderRow={renderRow} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default AppointmentHistory;
