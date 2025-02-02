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
    <table className="mt-[30px] w-full font-inherit">
      <thead>
        <tr className="h-[60px] bg-dark-grey text-white">
          {tableHeaders.map((header, i) => (
            <th
              key={i}
              className="border border-grey pl-0 text-center font-inherit text-input-title font-normal capitalize xl:pl-[30px] xl:text-left"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {products &&
          products.map(product => (
            <ProductItem product={product} key={product.Id} />
          ))}

        {!products && (
          <tr>
            <td colSpan={7} className="pt-4 text-center">
              Nothing was found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
