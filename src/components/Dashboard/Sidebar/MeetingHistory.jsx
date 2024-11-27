import { useState } from 'react';

const MeetingHistory = () => {
  // Sample meeting data
  const allMeetings = [
    { id: 1, patient: 'Andrea Lomarco', time: '05 Jun 2023, 03:50 AM', transactionId: '#FB1234124OPF51568', paymentMethod: 'Paypal' },
    { id: 2, patient: 'Lucas Swing', time: '02 Feb 2023, 05:50 AM', transactionId: '#FB1234124OPF515689', paymentMethod: 'Brac bank' },
    { id: 3, patient: 'Marc Twain', time: '25 Jun 2023, 02:50 AM', transactionId: '#FB1234124OPF515', paymentMethod: 'Hand Cash' },
    { id: 4, patient: 'Andrea Lomarco', time: '05 Jun 2023, 03:50 AM', transactionId: '#FB1234124OPF51568', paymentMethod: 'Paypal' },
    { id: 5, patient: 'Lucas Swing', time: '02 Feb 2023, 05:50 AM', transactionId: '#FB1234124OPF515689', paymentMethod: 'Brac bank' },
    { id: 6, patient: 'Marc Twain', time: '25 Jun 2023, 02:50 AM', transactionId: '#FB1234124OPF515', paymentMethod: 'Hand Cash' },
    { id: 7, patient: 'Andrea Lomarco', time: '05 Jun 2023, 03:50 AM', transactionId: '#FB1234124OPF51568', paymentMethod: 'Paypal' },
    { id: 8, patient: 'Marc Twain', time: '25 Jun 2023, 02:50 AM', transactionId: '#FB1234124OPF515', paymentMethod: 'Hand Cash' },
    { id: 9, patient: 'Andrea Lomarco', time: '05 Jun 2023, 03:50 AM', transactionId: '#FB1234124OPF51568', paymentMethod: 'Paypal' },
  ];

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Items per page
  const totalPages = Math.ceil(allMeetings.length / itemsPerPage);

  // Paginated data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedMeetings = allMeetings.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="p-4 bg-white shadow-md rounded-lg max-w-5xl mx-auto">
      <h2 className="text-xl font-semibold border-b pb-4 mb-4">Meeting History</h2>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200 text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="border px-4 py-2">SL</th>
              <th className="border px-4 py-2">Patient</th>
              <th className="border px-4 py-2">Time</th>
              <th className="border px-4 py-2">Transaction ID</th>
              <th className="border px-4 py-2">Payment Method</th>
            </tr>
          </thead>
          <tbody>
            {paginatedMeetings.map((meeting, index) => (
              <tr key={meeting.id} className="text-center hover:bg-gray-50">
                <td className="border px-4 py-2">{startIndex + index + 1}</td>
                <td className="border px-4 py-2">{meeting.patient}</td>
                <td className="border px-4 py-2">{meeting.time}</td>
                <td className="border px-4 py-2">{meeting.transactionId}</td>
                <td className="border px-4 py-2">{meeting.paymentMethod}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6 space-x-2">
        <button
          className={`px-4 py-2 rounded ${
            currentPage === 1
              ? 'bg-gray-300 text-gray-500'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          &laquo; Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={`px-4 py-2 rounded ${
              currentPage === page
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-blue-500 hover:bg-gray-300'
            }`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}

        <button
          className={`px-4 py-2 rounded ${
            currentPage === totalPages
              ? 'bg-gray-300 text-gray-500'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next &raquo;
        </button>
      </div>
    </div>
  );
};

export default MeetingHistory;
