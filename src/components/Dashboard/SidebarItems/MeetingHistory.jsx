"use client";
import { useState } from "react";
import Pagination from "../../../UI/Pagination";
import { allMeetings } from "@/data/meetingsHistoryData";

const MeetingHistory = () => {
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  // Calculate paginated data
  const totalPages = Math.ceil(allMeetings.length / itemsPerPage);
  const currentMeetings = allMeetings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg max-w-5xl mx-auto">
      <h2 className="text-lg md:text-xl font-semibold mb-6 border-b-2 border-blue-500 inline-block">
        Meeting History
      </h2>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200 text-sm table-auto">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="border px-4 py-3 text-left">SL</th>
              <th className="border px-4 py-3 text-left">Patient</th>
              <th className="border px-4 py-3 text-left">Date</th>
              <th className="border px-4 py-3 text-left">Transaction ID</th>
              <th className="border px-4 py-3 text-left">Payment Method</th>
            </tr>
          </thead>
          <tbody>
            {currentMeetings.map((meeting, index) => (
              <tr key={meeting.id} className="hover:bg-gray-50">
                <td className="border px-4 py-3 whitespace-nowrap">
                  {(currentPage - 1) * itemsPerPage + index + 1}
                </td>
                <td className="border px-4 py-3 whitespace-normal break-words">
                  {meeting.patient}
                </td>
                <td className="border px-2 sm:px-4 py-4">
                  <div className="flex flex-col items-start sm:items-center">
                    <span className="font-medium">{meeting.date}</span>
                    <span className="text-xs text-blue-500">{meeting.time}</span>
                  </div>
                </td>
                <td className="border px-4 py-3 whitespace-normal break-words">
                  {meeting.transactionId}
                </td>
                <td className="border px-4 py-3 whitespace-nowrap">{meeting.paymentMethod}</td>
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

export default MeetingHistory;
