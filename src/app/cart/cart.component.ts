import { Component, Input } from '@angular/core';
import { CartProduct } from '../interfaces/cart-product.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  @Input()
  public cart: CartProduct[] = [];
}
