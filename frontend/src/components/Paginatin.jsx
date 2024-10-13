import React, { useState } from 'react'

const Paginatin = ({ totalPages, hasNextPage}) => {
    const [currentPage, setCurrentPage] = useState(1);
  

     const handleNextPage = () => {
       if (hasNextPage) {
         setCurrentPage((prev) => prev + 1);
       }
     };
     const handlePreviousPage = () => {
       if (currentPage > 1) {
         setCurrentPage((prev) => prev - 1);
       }
     };

      const generatePageNumbers = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
          pages.push(i);
        }
        return pages;
      };

  return (
    <div className=' relative pb-10 pt-10 w-full'>
      {totalPages > 1 && (
        <div className="pagination">
          <a
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="prev cursor-pointer "
          >
            Prev
          </a>
          {generatePageNumbers()
            .slice(currentPage - 1, currentPage + 4)
            .filter((page) => page <= totalPages)
            .filter((page) => page > 0)
            .map((page) => (
              <a
                key={page}
                onClick={() => setCurrentPage(page)}
                className="num"
                activeclassname="active"
              >
                {page}
              </a>
            ))}
          <a
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="next bg-green-400"
          >
            Next
          </a>
        </div>
      )}
    </div>
  );
}

export default Paginatin