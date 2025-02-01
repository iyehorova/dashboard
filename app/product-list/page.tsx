import { ProductTable } from '../components/ProductTable';
import { Searchbar } from '../components/Searchbar';

export default function ProductListPage() {
  return (
    <main className="mb-[30px] mt-[24px] mx-[30px] flex-1">
      <h3 className="text-h3 font-semibold mb-[20px]">Product List</h3>
      <p className='mb-[30px]'>Review and manage the products available on the marketplace.</p>
      <Searchbar />
      <ProductTable />
    </main>
  );
}
