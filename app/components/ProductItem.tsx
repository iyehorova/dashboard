import Image from 'next/image';
import { Product } from '../interfaces/Product';

type ProductItemProps = {
  product: Product;
};

export const ProductItem = ({ product }: ProductItemProps) => {
  const {
    Image: imageUrl,
    Name,
    Category,
    ProductPrice,
    Country,
    Status,
  } = product;
  const countries = JSON.parse(Country).join(', ');

  return (
    <tr className="">
      <td className="border border-grey py-1 text-center align-middle md:py-2 xl:py-[10px]">
        <span
          style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : {}}
          className={`inline-block h-[50px] w-[50px] bg-cover bg-center bg-no-repeat ${!imageUrl ? 'bg-light-grey' : ''}`}
        ></span>
      </td>

      <td className="border border-grey pl-2 lg:pl-5 xl:pl-[30px]">{Name}</td>
      <td className="border border-grey pl-0 text-center xl:pl-[30px] xl:text-left">
        {Category ? Category : 'N/A'}
      </td>

      <td className="border border-grey pl-0 text-center xl:pl-[30px] xl:text-left">
        {ProductPrice ? '$' + ProductPrice : 'N/A'}
      </td>

      <td className="border border-grey pl-0 text-center xl:pl-[30px] xl:text-left">
        {countries}
      </td>
      <td className="border border-grey pl-0 text-center xl:pl-[30px] xl:text-left">
        {Status}
      </td>

      <td className="border border-grey pl-0 text-center xl:pl-[30px] xl:text-left">
        <div className="flex justify-center space-x-2 xl:justify-start">
          <span className="flex h-[40px] w-[40px] items-center justify-center rounded-[5px] bg-light-grey hover:bg-yellow">
            <Image
              src="/edit-icon.svg"
              alt=""
              width={18}
              height={18}
              priority
            />
          </span>

          <span className="flex h-[40px] w-[40px] items-center justify-center rounded-[5px] bg-light-grey hover:bg-yellow">
            <Image
              src="/delete-icon.svg"
              alt=""
              width={14}
              height={14}
              priority
            />
          </span>
        </div>
      </td>
    </tr>
  );
};
