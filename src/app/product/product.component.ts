import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartProduct } from '../interfaces/cart-product.interface';
import { Product } from '../interfaces/product.interface';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input()//Входной декоратор(функция которая применяется либо к классу, либо к полю класса)
  public product!: CartProduct;//!-Допускаем поле, без инициализации

  @Output()//Позволяет создавать кастомный event, на который любой желающий, который пользуется этим компонентом, может подписаться.
  public added = new EventEmitter<CartProduct>();//EventEmitter выдает наружу продукт который мы добавляем

  public onAdded(): void {
    this.added.emit(this.product);
  }



}
