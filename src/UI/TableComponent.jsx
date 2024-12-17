"use client";
import React from "react";

const TableComponent = ({ headers, data, renderRow }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-200 text-sm table-auto">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="border px-4 py-3 text-left">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{data.map((item, index) => renderRow(item, index))}</tbody>
      </table>
    </div>
  );
};

export default TableComponent;
