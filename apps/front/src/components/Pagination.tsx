import { FC, useCallback, useMemo } from 'react';

import { defaultItemsPerPage, defaultPage } from '@/constants';

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  onPageChange: (page: number) => void;
}

export const Pagination: FC<PaginationProps> = ({ currentPage, totalItems, onPageChange }) => {
  const totalPages = useMemo(() => Math.ceil(totalItems / defaultItemsPerPage), [totalItems]);
  const isFirstPage = useMemo(() => currentPage === defaultPage, [currentPage]);
  const isLastPage = useMemo(() => currentPage === totalPages, [currentPage, totalPages]);

  const getPreviousPage = useCallback(
    () => onPageChange(currentPage - 1),
    [currentPage, onPageChange],
  );
  const getNextPage = useCallback(() => onPageChange(currentPage + 1), [currentPage, onPageChange]);

  if (currentPage > totalPages) return null;

  return (
    <div className="flex flex-col items-center">
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Page <span className="font-semibold dark:text-slate-300">{currentPage}</span> sur{' '}
        <span className="font-semibold dark:text-slate-300">{totalPages}</span>
      </span>
      <div className="inline-flex mt-2 xs:mt-0">
        <button
          className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-900 rounded-s dark:bg-gray-900 dark:border-gray-950 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white dark:disabled:bg-gray-600 dark:disabled:text-gray-500"
          disabled={isFirstPage}
          onClick={getPreviousPage}
        >
          <svg
            className="w-3.5 h-3.5 me-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          Précédent
        </button>
        <button
          className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-s border-gray-900 rounded-e dark:bg-gray-900 dark:border-gray-950 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white dark:disabled:bg-gray-600 dark:disabled:text-gray-500"
          disabled={isLastPage}
          onClick={getNextPage}
        >
          Suivant
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
