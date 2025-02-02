import { Suspense } from 'react';
import { ProductTable } from '../components/ProductTable';
import { Searchbar } from '../components/Searchbar';
import { fetchData } from '../api/fetchData';
import { Pagination } from '../components/Pagination';
import { SearchParams } from '../interfaces/SearchParams';
// import { Product } from '../interfaces/Product';


type Props = {
  searchParams: Promise<SearchParams>
};
// const fakeData: Product[] = [
//   { Id: 2,
//     Name: "jhgjh",
//     ProductPrice: 300,
//     Image: "",
//     Country: JSON.stringify(['us']),
//     Category: "kjhk",
//     Status: "",}
// ]
// const fakePagination = {
//   CurrentPage:2,
//   ItemsPerPage: 3,
//   NumberOfPages: 2,
//   TotalItemsCount: 5,
// }

export default async function ProductListPage({ searchParams }: Props) {
 const query = await searchParams;
 const serverData = await fetchData(query);

  return (
    <main className="mx-[30px] mb-[30px] mt-[24px] flex-1">
      <h3 className="mb-[20px] text-h3 font-semibold">Product List</h3>

      <p className="mb-[30px]">
        Review and manage the products available on the marketplace.
      </p>

      <Searchbar />

      <Suspense fallback={null}>
        <ProductTable products={serverData.Items} />
        {/* <ProductTable products={ fakeData} /> */}
        <Pagination paginationInfo={serverData.Pagination} />
        {/* <Pagination paginationInfo={fakePagination} /> */}
      </Suspense>
    </main>
  );
}
