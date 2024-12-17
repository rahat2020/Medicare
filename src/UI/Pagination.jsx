const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [...Array(totalPages).keys()].map((n) => n + 1);

  return (
    <div className="flex justify-center items-center mt-6 space-x-2">
      {/* Previous Button */}
      <button
        className={`w-12 h-12 flex justify-center items-center rounded-full border ${
          currentPage === 1
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-white text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white"
        }`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &laquo;
      </button>

      {/* Page Numbers */}
      {pageNumbers.map((page) => (
        <button
          key={page}
          className={`w-12 h-12 flex justify-center items-center rounded-full border ${
            currentPage === page
              ? "bg-blue-500 text-white border-blue-500"
              : "bg-white text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white"
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        className={`w-12 h-12 flex justify-center items-center rounded-full border ${
          currentPage === totalPages
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-white text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white"
        }`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &raquo;
      </button>
    </div>
  );
};

export default Pagination;
