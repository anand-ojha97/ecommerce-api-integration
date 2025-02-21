import React from "react";
import { Link } from "react-router-dom";
const ShopPagination = ({
  productPerPage,
  length,
  currentPage,
  handlePagination,
}) => {
  const totalPages = Math.ceil(length / productPerPage); // Total number of pages
  const paginationNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );
  return (
    <div className="pagination flex gap-3 my-9 items-center justify-center">
      {paginationNumbers.map((pageNumber) => (
        <Link
          key={pageNumber}
          to="#"
          onClick={() => handlePagination(pageNumber)} // Page change handler
          className={`px-3 py-2 border rounded-lg transition-all duration-300 ${
            pageNumber === currentPage
              ? "bg-default-green text-white"
              : "border-default-gold hover:bg-default-green hover:text-white"
          }`}
        >
          {pageNumber}
        </Link>
      ))}
    </div>
  );
};

export default ShopPagination;
