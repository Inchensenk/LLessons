import { Component, OnInit } from '@angular/core';
import { Product } from './interfaces/product.interface';
import { CartProduct } from './interfaces/cart-product.interface';

import { tap } from 'rxjs';
import { ProductService } from './services/product.service';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public products: Product[] = [];
  public cartProducts: CartProduct[] = [];
  public cart: CartProduct[] = [];

  public loading = false;

  public get total(): number {
    return this._cartService.total;
  }

  constructor(
    private readonly _cartService: CartService,
    private readonly _productsService: ProductService,
  ) {}

  public ngOnInit(): void {
    this.loadProducts();
  }

  public loadProducts(): void {
    this.loading = true;

    this._productsService
      .list()
      .pipe(
        tap((products) => {
          this.products = products;
          this._prepareCartAndProducts();
          this.loading = false;
        }),
      )
      .subscribe();
  }

  public toggle(product: CartProduct): void {
    if (this._cartService.contains(product.id)) {
      this._cartService.remove(product.id);

      product.added = false;

      return;
    }

    this._cartService.add(product);

    product.added = true;
  }

  private _prepareCartAndProducts(): void {
    this._cartService.prepareCart(this.products);

    this.cart = this._cartService.cart;

    this.cartProducts = this.products.map((p): CartProduct => {
      const tempProduct = this._cartService.get(p.id);

      if (tempProduct) {
        return {
          ...p,
          quantity: tempProduct.quantity,
          added: true,
        };
      }

      return {
        ...p,
        quantity: 1,
        added: false,
      };
    });
  }
}
