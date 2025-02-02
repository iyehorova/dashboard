import { useSearchParams } from 'next/navigation';
import { SearchParams } from '../interfaces/SearchParams';

export function useGetSearchParamsByParam(
  param: keyof SearchParams,
): string | undefined {
  const params = useSearchParams();
  return params.get(param)?.toString();
}
