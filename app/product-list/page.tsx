import { Suspense } from 'react';
import { ProductTable } from '../components/ProductTable';
import { Searchbar } from '../components/Searchbar';
import { fetchData } from '../api/fetchData';
import { Pagination } from '../components/Pagination';
import { SearchParams } from '../interfaces/SearchParams';

type Props = {
  searchParams: Promise<SearchParams>;
};

export default async function ProductListPage({ searchParams }: Props) {
  const query = await searchParams;
  const serverData = await fetchData(query);

  return (
    <main className="mx-[30px] mb-[30px] mt-[24px] flex-1">
      <h3 className="mb-[20px] text-h3 font-semibold">Product List</h3>

      <p className="mb-[30px]">
        Review and manage the products available on the marketplace.
      </p>

      <section className="relative pb-[104px]">
        <Searchbar />

        <Suspense fallback={null}>
          <ProductTable products={serverData.Items} />
          <Pagination paginationInfo={serverData.Pagination} />
        </Suspense>
      </section>
    </main>
  );
}
