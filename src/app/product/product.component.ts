import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartProduct } from '../interfaces/cart-product.interface';
import { Product } from '../interfaces/product.interface';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  //Возможность родительского компонента влиять на дочерний
  @Input()//Входной декоратор(функция которая применяется либо к классу, либо к полю класса)
  public product!: CartProduct;//!-Допускаем поле, без инициализации

  //Возможность посылать родительскому компоненту сигналы из дочернего компанента
  @Output()//Позволяет создавать кастомный event, на который любой желающий, который пользуется этим компонентом, может подписаться.
  public added = new EventEmitter<CartProduct>();//EventEmitter выдает наружу продукт который мы добавляем

  public quantityInValid = false;

  public onAdded(): void {
    this.added.emit(this.product);
  }

  public onQuantityChanged(newValue: string): void{
    // console.log('newValue', newValue);
    // console.log(this.product.quantity);


    if(/^\d+$/.test(newValue)){
      this.quantityInValid = false;//делаем кнопку активной
      this.product.quantity = Number(newValue);//в итоговую модель записали распарсенные данные
    }else{
      this.quantityInValid = true;
    }
    
}
}