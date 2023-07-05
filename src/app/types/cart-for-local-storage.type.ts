import { CartProduct } from '../interfaces/cart-product.interface';

export type CartProductForLocalStorage = Omit<
  CartProduct,
  'title' | 'img' | 'imgAlt' | 'price' | 'added'
>;
