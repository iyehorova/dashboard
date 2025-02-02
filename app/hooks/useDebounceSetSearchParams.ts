import { useDebouncedCallback } from 'use-debounce';
import { useSetSearchParams } from './useSetSearchParams';
import { SearchParams } from '../interfaces/SearchParams';

export function useDebounceSetSearchParams() {
  const setSearchParams = useSetSearchParams();

  return useDebouncedCallback((newParams: Partial<SearchParams>) => {
    setSearchParams(newParams);
  }, 500);
}
