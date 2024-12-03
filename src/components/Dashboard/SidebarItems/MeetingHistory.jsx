"use client";
import { useState } from "react";
import { allMeetings } from "@/data/meetingsHistoryData";
import TableComponent from "@/UI/TableComponent";
import Pagination from "@/UI/Pagination";

const MeetingHistory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const totalPages = Math.ceil(allMeetings.length / itemsPerPage);
  const currentMeetings = allMeetings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => setCurrentPage(page);

  const headers = ["SL", "Patient", "Date", "Transaction ID", "Payment Method"];
  const renderRow = (meeting, index) => {
    const { id, patient, date, time, transactionId, paymentMethod } = meeting;
    return (
      <tr key={id} className="hover:bg-gray-50 whitespace-nowrap">
        <td className="border px-4 py-3">{(currentPage - 1) * itemsPerPage + index + 1}</td>
        <td className="border px-4 py-3">{patient}</td>
        <td className="border px-4 py-3">
          <div className="flex flex-col items-start">
            <span>{date}</span>
            <span className="text-xs text-blue-500">{time}</span>
          </div>
        </td>
        <td className="border px-4 py-3">{transactionId}</td>
        <td className="border px-4 py-3">{paymentMethod}</td>
      </tr>
    );
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg max-w-6xl mx-auto">
      <h2 className="text-lg md:text-xl font-semibold mb-6 border-b-2 border-blue-500 inline-block">
        Meeting History
      </h2>
      <TableComponent headers={headers} data={currentMeetings} renderRow={renderRow} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default MeetingHistory;
