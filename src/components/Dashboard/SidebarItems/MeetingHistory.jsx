import { useState } from "react";
import Pagination from "../../../UI/Pagination";

const MeetingHistory = () => {
  // Sample meeting data
  const allMeetings = [
    {
      id: 1,
      patient: "Andrea Lomarco",
      time: "05 Jun 2023, 03:50 AM",
      transactionId: "#FB1234124OPF51568",
      paymentMethod: "Paypal"
    },
    {
      id: 2,
      patient: "Lucas Swing",
      time: "02 Feb 2023, 05:50 AM",
      transactionId: "#FB1234124OPF515689",
      paymentMethod: "Brac bank"
    },
    {
      id: 3,
      patient: "Marc Twain",
      time: "25 Jun 2023, 02:50 AM",
      transactionId: "#FB1234124OPF515",
      paymentMethod: "Hand Cash"
    },
    {
      id: 4,
      patient: "Andrea Lomarco",
      time: "05 Jun 2023, 03:50 AM",
      transactionId: "#FB1234124OPF51568",
      paymentMethod: "Paypal"
    },
    {
      id: 5,
      patient: "Lucas Swing",
      time: "02 Feb 2023, 05:50 AM",
      transactionId: "#FB1234124OPF515689",
      paymentMethod: "Brac bank"
    },
    {
      id: 6,
      patient: "Marc Twain",
      time: "25 Jun 2023, 02:50 AM",
      transactionId: "#FB1234124OPF515",
      paymentMethod: "Hand Cash"
    },
    {
      id: 7,
      patient: "Andrea Lomarco",
      time: "05 Jun 2023, 03:50 AM",
      transactionId: "#FB1234124OPF51568",
      paymentMethod: "Paypal"
    },
    {
      id: 8,
      patient: "Marc Twain",
      time: "25 Jun 2023, 02:50 AM",
      transactionId: "#FB1234124OPF515",
      paymentMethod: "Hand Cash"
    },
    {
      id: 9,
      patient: "Andrea Lomarco",
      time: "05 Jun 2023, 03:50 AM",
      transactionId: "#FB1234124OPF51568",
      paymentMethod: "Paypal"
    },
    {
      id: 10,
      patient: "Andrea Lomarco",
      time: "05 Jun 2023, 03:50 AM",
      transactionId: "#FB1234124OPF51568",
      paymentMethod: "Paypal"
    },
    {
      id: 11,
      patient: "Andrea Lomarco",
      time: "05 Jun 2023, 03:50 AM",
      transactionId: "#FB1234124OPF51568",
      paymentMethod: "Paypal"
    },
    {
      id: 12,
      patient: "Andrea Lomarco",
      time: "05 Jun 2023, 03:50 AM",
      transactionId: "#FB1234124OPF51568",
      paymentMethod: "Paypal"
    },
    {
      id: 13,
      patient: "Andrea Lomarco",
      time: "05 Jun 2023, 03:50 AM",
      transactionId: "#FB1234124OPF51568",
      paymentMethod: "Paypal"
    },
    {
      id: 14,
      patient: "Andrea Lomarco",
      time: "05 Jun 2023, 03:50 AM",
      transactionId: "#FB1234124OPF51568",
      paymentMethod: "Paypal"
    },
    {
      id: 15,
      patient: "Andrea Lomarco",
      time: "05 Jun 2023, 03:50 AM",
      transactionId: "#FB1234124OPF51568",
      paymentMethod: "Paypal"
    },
    {
      id: 16,
      patient: "Andrea Lomarco",
      time: "05 Jun 2023, 03:50 AM",
      transactionId: "#FB1234124OPF51568",
      paymentMethod: "Paypal"
    }
  ];

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
              <th className="border px-4 py-3 text-left">Time</th>
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
                <td className="border px-4 py-3 whitespace-nowrap">{meeting.time}</td>
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
