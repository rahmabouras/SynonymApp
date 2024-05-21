import React, { useState } from 'react';
import './Synonyms.css';

export default function Synonyms({ synonyms }) {
  const [currentPage, setCurrentPage] = useState(1);
  const synonymsPerPage = 10;

  // Calculate the indexes for the current page
  const indexOfLastSynonym = currentPage * synonymsPerPage;
  const indexOfFirstSynonym = indexOfLastSynonym - synonymsPerPage;
  const currentSynonyms = synonyms.slice(indexOfFirstSynonym, indexOfLastSynonym);

  const totalPages = Math.ceil(synonyms.length / synonymsPerPage);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div className="Synonyms">
      {synonyms.length > 0 ? (
        <>
          <ul>
            {currentSynonyms.map((synonym, index) => (
              <li key={index}>{synonym.word}</li>
            ))}
          </ul>
          <div className="pagination">
            <button onClick={handlePreviousPage} disabled={currentPage === 1}>
              Previous
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        </>
      ) : (
        <p>No synonyms found.</p>
      )}
    </div>
  );
}
