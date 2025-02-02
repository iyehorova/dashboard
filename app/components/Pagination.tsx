'use client';

import { PaginationInfo } from '../interfaces/PaginationInfo';
import { ArrowLeft } from '../UI/ArrowLeft';

type Props = {
  paginationInfo: PaginationInfo;
};

export const Pagination = ({ paginationInfo }: Props) => {
  const { CurrentPage, ItemsPerPage, NumberOfPages, TotalItemsCount } =
    paginationInfo;
  const startItem = (CurrentPage - 1) * ItemsPerPage + 1;
  const endItem =
    CurrentPage === NumberOfPages
      ? TotalItemsCount
      : CurrentPage * ItemsPerPage;

  const handleChangeCurrentPage = () => {};

  return (
    <form className="mt-0 flex h-[60px] items-center justify-end gap-[50px] border border-x-grey border-b-grey text-additional">
      <div className="flex items-center gap-[20px]">
        <label htmlFor="items-per-page">Items per page:</label>

        <div className="relative h-[40px] w-[80px]">
          <select
            id="items-per-page"
            className="h-full w-full cursor-pointer appearance-none rounded-[5px] border border-grey bg-white pl-[15px] pr-[30px] text-black"
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
          <span className="inner-block flex w-[40px] rotate-180 items-center justify-center rounded-[5px] bg-light-grey text-grey">
            <ArrowLeft width={'16'} height={'16'} />
          </span>

          <input
            className="remove-arrow mx-[10px] h-[40px] w-[80px] rounded-[5px] border border-grey text-center"
            id="items-per-page"
            name="items-per-page"
            type="number"
            onChange={handleChangeCurrentPage}
            value={CurrentPage}
          />

          <span className="inner-block flex w-[40px] items-center justify-center rounded-[5px] bg-light-grey text-grey">
            <ArrowLeft width={'16'} height={'16'} />
          </span>
        </div>
      </div>
    </form>
  );
};
