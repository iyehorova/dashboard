import { ProductItem } from './ProductItem';
import { Product } from '../interfaces/Product';

const tableHeaders = [
  'image',
  'name',
  'category',
  'price',
  'country',
  'marketplace status',
  'action',
];

type Props = {
  products: Product[];
};

export const ProductTable = ({ products }: Props) => {
  return (
    <table className="font-inherit mt-[30px] w-full">
      <thead>
        <tr className="h-[60px] bg-dark-grey text-white">
          {tableHeaders.map((header, i) => (
            <th
              key={i}
              className="font-inherit border border-grey pl-0 text-center text-input-title font-normal capitalize xl:pl-[30px] xl:text-left"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {products.map(product => (
          <ProductItem product={product} key={product.Id} />
        ))}
      </tbody>
    </table>
  );
};
