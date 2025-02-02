/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { PaginationInfo } from '../interfaces/PaginationInfo';
import { ArrowLeft } from '../UI/ArrowLeft';
import { useSetSearchParams } from '../hooks/useSetSearchParams';

type Props = {
  paginationInfo: PaginationInfo;
};

const START_PAGE = 1;

export const Pagination = ({ paginationInfo }: Props) => {
  const { CurrentPage, ItemsPerPage, NumberOfPages, TotalItemsCount } =
    paginationInfo;

  const startItem = (CurrentPage - 1) * ItemsPerPage + 1;

  const endItem =
    CurrentPage === NumberOfPages
      ? TotalItemsCount
      : CurrentPage * ItemsPerPage;

  const setSearchParams = useSetSearchParams();
  const [itemsPerPage, setItemsPerPage] = useState(ItemsPerPage);
  const [currentPage, setCurrentPage] = useState(CurrentPage);

  useEffect(() => {
    setSearchParams({ page: currentPage.toString() });
  }, [currentPage]);

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleChangeItemsPerPage = (event: ChangeEvent<HTMLSelectElement>) => {
    const newLimit = Number(event.target.value);
    if (itemsPerPage !== newLimit) {
      setItemsPerPage(newLimit);
      setCurrentPage(START_PAGE);
      setSearchParams({
        limit: newLimit.toString(),
        page: START_PAGE.toString(),
      });
    }
  };

  const handleGetPreviousPage = () => {
    setCurrentPage(prev => (prev > START_PAGE ? prev - 1 : START_PAGE));
  };

  const handleGetNextPage = () => {
    setCurrentPage(prev => (prev < NumberOfPages ? prev + 1 : NumberOfPages));
  };

  return (
    <form
      className="mt-0 flex h-[60px] items-center justify-end gap-[50px] border border-x-grey border-b-grey text-additional"
      onSubmit={handleFormSubmit}
    >
      <div className="flex items-center gap-[20px]">
        <label htmlFor="items-per-page">Items per page:</label>

        <div className="relative h-[40px] w-[80px]">
          <select
            id="items-per-page"
            name="limit"
            className="h-full w-full cursor-pointer appearance-none rounded-[5px] border border-grey bg-white pl-[15px] pr-[30px] text-black"
            value={itemsPerPage}
            onChange={handleChangeItemsPerPage}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
          <div className="pointer-events-none absolute right-[10px] top-1/2 -translate-y-1/2 rotate-90 text-grey">
            <ArrowLeft width={'16'} height={'16'} />
          </div>
        </div>
      </div>

      <div className="mr-[30px] flex items-center gap-[10px]">
        <p className="pr-[10px]">{`Showing ${startItem}-${endItem} of ${TotalItemsCount}`}</p>

        <div className="flex">
          <button
            className="inner-block flex w-[40px] rotate-180 items-center justify-center rounded-[5px] bg-light-grey text-grey hover:bg-yellow disabled:bg-transparent disabled:text-transparent"
            onClick={handleGetPreviousPage}
            disabled={currentPage <= START_PAGE}
          >
            <ArrowLeft width={'16'} height={'16'} />
          </button>

          <input
            className="remove-arrow mx-[10px] h-[40px] w-[80px] rounded-[5px] border border-grey text-center disabled:bg-white"
            id="items-per-page"
            name="page"
            type="number"
            disabled
            value={currentPage}
          />

          <button
            className="inner-block flex w-[40px] items-center justify-center rounded-[5px] bg-light-grey text-grey hover:bg-yellow disabled:bg-transparent disabled:text-transparent"
            onClick={handleGetNextPage}
            disabled={currentPage >= NumberOfPages}
          >
            <ArrowLeft width={'16'} height={'16'} />
          </button>
        </div>
      </div>
    </form>
  );
};
