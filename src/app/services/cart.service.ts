import { Injectable } from '@angular/core';
import { CartProduct } from '../interfaces/cart-product.interface';
import { LocalStorageService } from './local-storage.service';
import { CartProductForLocalStorage } from '../types/cart-for-local-storage.type';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _cart: CartProduct[] = [];
  private _total = 0;

  public get cart(): CartProduct[] {
    return this._cart;
  }

  public get total(): number {
    return this._total;
  }

  constructor(private readonly _localStorage: LocalStorageService) {}

  public prepareCart(products: Product[]): void {
    const cart = this._localStorage.get<CartProductForLocalStorage[]>('cart');

    if (!cart) {
      this._localStorage.set<CartProductForLocalStorage[]>('cart', []);
      return;
    }

    const tempProducts = products.filter((p) => {
      const target = cart.find((pr) => {
        return pr.id === p.id;
      });

      return !!target;
    });

    this._cart = tempProducts.map((p) => {
      const target = cart.find((pr) => {
        return pr.id === p.id;
      });

      return {
        ...p,
        quantity: target?.quantity ?? 0,
      };
    });

    this._total = this._calculateTotal();
  }

  public add(product: CartProduct): void {
    if (this.contains(product.id)) {
      return;
    }

    this._cart.push(product);
    this._total = this._calculateTotal();
    this._saveCartToStorage();
  }

  public remove(id: string): void {
    if (!this.contains(id)) {
      return;
    }

    const index = this._cart.findIndex((p) => {
      return p.id === id;
    });

    this._cart.splice(index, 1);
    this._total = this._calculateTotal();
    this._saveCartToStorage();
  }

  public clear(): void {
    this._localStorage.set('cart', []);
    this._cart = [];
    this._total = 0;
  }

  public contains(id: string): boolean {
    // const checkProduct = this._cart.some((p) => p.id === id));

    const checkProduct = this._cart.some((p) => {
      return p.id === id;
    });

    return checkProduct;
  }

  public get(id: string): CartProduct | undefined {
    const p = this._cart.find((p) => {
      return p.id === id;
    });

    return p;
  }

  private _calculateTotal(): number {
    const total = this.cart.reduce((acc, current) => {
      return acc + Number(current.price) * Number(current.quantity);
    }, 0);

    return total;
  }

  private _saveCartToStorage(): void {
    const tempCart: CartProductForLocalStorage[] = this._cart.map((p) => {
      return {
        id: p.id,
        quantity: p.quantity,
      };
    });

    this._localStorage.set<CartProductForLocalStorage[]>('cart', tempCart);
  }
}
