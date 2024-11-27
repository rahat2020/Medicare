import { useState } from "react";

const AppointmentHistory = () => {
  // Sample appointment data
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
    },
    {
      id: 13,
      doctor: "Dr. Samuel Bro",
      specialization: "Dental",
      date: "05 Jun 2023",
      time: "4:30 PM",
      chamber: "12/3 Mirpur Dhaka Bangladesh",
      status: "Pending"
    }
  ];

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Items per page
  const totalPages = Math.ceil(allAppointments.length / itemsPerPage);

  // Paginated data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedAppointments = allAppointments.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="p-4 bg-white shadow-md rounded-lg max-w-5xl mx-auto">
      <h2 className="text-xl font-semibold border-b pb-4 mb-4">Appointment History</h2>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200 text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="border px-4 py-2">SN</th>
              <th className="border px-4 py-2">Doctor</th>
              <th className="border px-4 py-2">Date</th>
              <th className="border px-4 py-2">Chamber</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedAppointments.map((appointment, index) => (
              <tr key={appointment.id} className="text-center hover:bg-gray-50">
                <td className="border px-4 py-2">{startIndex + index + 1}</td>
                <td className="border px-4 py-2">
                  <div className="flex flex-col items-center">
                    <span className="font-medium">{appointment.doctor}</span>
                    <span className="text-sm text-gray-500">{appointment.specialization}</span>
                  </div>
                </td>
                <td className="border px-4 py-2">
                  {appointment.date} <br /> {appointment.time}
                </td>
                <td className="border px-4 py-2">{appointment.chamber}</td>
                <td className="border px-4 py-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      appointment.status === "Complete"
                        ? "bg-green-100 text-green-600"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    {appointment.status}
                  </span>
                </td>
                <td className="border px-4 py-2">
                  <button className="text-blue-500 underline hover:text-blue-700">Edit</button>
                </td>
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
              ? "bg-gray-300 text-gray-500"
              : "bg-blue-500 text-white hover:bg-blue-600"
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
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-blue-500 hover:bg-gray-300"
            }`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}

        <button
          className={`px-4 py-2 rounded ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-500"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next &raquo;
        </button>
      </div>
    </div>
  );
};

export default AppointmentHistory;
