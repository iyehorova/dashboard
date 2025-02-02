import { useSearchParams, useRouter } from 'next/navigation';
import { SearchParams } from "../interfaces/SearchParams";

export const useSetSearchParams = () => { 
  const router = useRouter();
  const searchParams = useSearchParams();

  return (newParams: Partial<SearchParams>) => {  
    const params = new URLSearchParams(searchParams);

    Object.entries(newParams).forEach(([key, value]) => {
      params.set(key, value);
    });
    
    router.push(`?${params.toString()}`, { scroll: false });
  }
}