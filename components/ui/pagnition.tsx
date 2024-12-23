// components/Pagination.tsx
import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  // Generate page numbers array with more intelligent ellipsis handling
  const getPageNumbers = () => {
    // If total pages are 7 or less, show all pages
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // Core logic for dynamic page number display
    const pages: (number | string)[] = [];

    // Always show first page
    pages.push(1);

    // Determine the range of pages to show
    let start: number;
    let end: number;

    if (currentPage <= 4) {
      // If current page is in the first group
      start = 2;
      end = 3;
      
      // Fill first group of pages
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      
      // Add end ellipsis
      pages.push('...');
      pages.push(totalPages);
    } else if (currentPage >= totalPages - 3) {
      // If current page is in the last group
      pages.push('...');
      
      // Show last 5 pages
      for (let i = totalPages - 4; i <= totalPages; ++i) {
        pages.push(i);
      }
    } else {
      // Current page is in the middle
      pages.push('...');
      
      // Show current page and surrounding pages
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        pages.push(i);
      }
      
      pages.push('...');
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="flex items-center gap-2 w-full justify-center py-2 text-white">
      {/* Previous button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 disabled:opacity-50 w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#18191C]"
      >
        <svg width="11" height="11" viewBox="0 0 7 11" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.87166 1.16511V0.130708C6.87166 0.0410502 6.76862 -0.00846212 6.69904 0.0464028L0.666567 4.7581C0.615313 4.79796 0.57384 4.849 0.545312 4.90732C0.516783 4.96565 0.501953 5.02972 0.501953 5.09465C0.501953 5.15958 0.516783 5.22365 0.545312 5.28197C0.57384 5.3403 0.615313 5.39134 0.666567 5.4312L6.69904 10.1429C6.76996 10.1978 6.87166 10.1482 6.87166 10.0586V9.02418C6.87166 8.95861 6.84088 8.89572 6.79003 8.85557L1.97262 5.09532L6.79003 1.33372C6.84088 1.29358 6.87166 1.23068 6.87166 1.16511Z" />
        </svg>
      </button>

      {/* Page numbers */}
      {getPageNumbers().map((page, index) => (
        <React.Fragment key={index}>
          {page === '...' ? (
            <span className="px-2">...</span>
          ) : (
            <button
              onClick={() => onPageChange(Number(page))}
              className={`px-3 py-1 ${
                currentPage === page
                  ? 'bg-xButtonColor text-white'
                  : 'border border-xMutedText/20 bg-black/50'
              } w-[40px] h-[40px] rounded-full flex items-center justify-center`}
            >
              {page}
            </button>
          )}
        </React.Fragment>
      ))}

      {/* Next button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 disabled:opacity-50 w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#18191C]"
      >
        <svg width="11" height="11" viewBox="0 0 7 11" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
          <path d="M6.87166 1.16511V0.130708C6.87166 0.0410502 6.76862 -0.00846212 6.69904 0.0464028L0.666567 4.7581C0.615313 4.79796 0.57384 4.849 0.545312 4.90732C0.516783 4.96565 0.501953 5.02972 0.501953 5.09465C0.501953 5.15958 0.516783 5.22365 0.545312 5.28197C0.57384 5.3403 0.615313 5.39134 0.666567 5.4312L6.69904 10.1429C6.76996 10.1978 6.87166 10.1482 6.87166 10.0586V9.02418C6.87166 8.95861 6.84088 8.89572 6.79003 8.85557L1.97262 5.09532L6.79003 1.33372C6.84088 1.29358 6.87166 1.23068 6.87166 1.16511Z"/>
        </svg>
      </button>
    </div>
  );
};

export default Pagination;