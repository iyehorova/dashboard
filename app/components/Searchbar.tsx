'use client';
import Image from 'next/image';
import { FormEvent, useState, ChangeEvent } from 'react';
import { useSetSearchParams } from '../hooks/useSetSearchParams';
import { useGetSearchParamsByParam } from '../hooks/useGetSearchParamsByParam';
import { useDebounceSetSearchParams } from '../hooks/useDebounceSetSearchParams';

export const Searchbar = () => {
  const initialValue = useGetSearchParamsByParam('query') || '';
  const [query, setQuery] = useState(initialValue);
  const setSearchParams = useSetSearchParams();
  const updateSearchParams = useDebounceSetSearchParams();

  const handleSearchQuerySubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchParams({ query: query.trim() });
  };

  const handleChangeQuery = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
    updateSearchParams({ query: value.trim() });
  };

  return (
    <form
      className="flex items-center rounded-[5px] border border-grey"
      onSubmit={handleSearchQuerySubmit}
    >
      <input
        type="text"
        name="query"
        placeholder="Search"
        className="w-full px-[25px] outline-none"
        value={query}
        onChange={handleChangeQuery}
      />

      <div className="ml-auto flex h-[48px] w-[56px] items-center justify-center bg-yellow">
        <Image src="/search-icon.svg" alt="" width={24} height={24} priority />
      </div>

      <button
        type="submit"
        className="absolute bottom-0 left-0 mx-auto bg-yellow px-[26px] py-[12px] text-btn-text uppercase rounded-[5px]"
      >
        Submit
      </button>
    </form>
  );
};
