import { Product } from './product.interface';
export interface CartProduct extends Product {
  quantity: number;
  added?: boolean; //?-optional-необязательное поле(аналог nullable в .NET)
}
