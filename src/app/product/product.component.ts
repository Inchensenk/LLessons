import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartProduct } from '../interfaces/cart-product.interface';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input()
  public product!: CartProduct;

  @Output()
  public added = new EventEmitter<CartProduct>();

  public quantityInvalid = false;

  public onAdded(): void {
    this.added.emit(this.product);
  }

  public onQuantityChanged(newValue: string): void {
    if (/^\d+$/.test(newValue)) {
      this.quantityInvalid = false;
      this.product.quantity = Number(newValue);
    } else {
      this.quantityInvalid = true;
    }
  }
}
