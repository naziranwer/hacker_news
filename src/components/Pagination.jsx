import React from "react";

const Pagination = ({ page, setPage }) => (
  <div className="flex justify-center my-4">
    <button
      onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
      className="px-4 py-2 mx-2 bg-gray-300 rounded hover:bg-gray-400"
    >
      Previous
    </button>
    <span className="px-4 py-2">{page + 1}</span>
    <button
      onClick={() => setPage((prev) => prev + 1)}
      className="px-4 py-2 mx-2 bg-gray-300 rounded hover:bg-gray-400"
    >
      Next
    </button>
  </div>
);

export default Pagination;
