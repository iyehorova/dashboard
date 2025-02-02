import { PaginationInfo } from './PaginationInfo';
import { Product } from './Product';

export interface ItemsData {
  Pagination: PaginationInfo;
  Items: Product[];
}
