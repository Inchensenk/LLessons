import { Component, OnInit } from '@angular/core';
import { Product } from './interfaces/product.interface';
import { CartProduct } from './interfaces/cart-product.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // public title = 'shop-app';

  // public onClick(): void {
  //   alert('Hi!');

  //   this.title = (Math.random()*10-5).toString();
  // }

  public products: Product[] = [];
  public cartProducts: CartProduct[] = [];
  public cart: CartProduct[] = [];

  public loading: boolean = false;

  //constructor(){}

  ngOnInit(): void {
    this.loadProducts();
  }

  public loadProducts(): void {
    this.loading = true;

    setTimeout(() => {
      this.products = [
        {
          id: 'item1',
          title: 'Pixel 7 8/128 LEMONGRASS',
          price: 51000,
          img: '/assets/img/PIXEL 7 8_128 lemongrass.png',
          imgAlt: 'Pixel 7 8/128 LEMONGRASS',
        },
        {
          id: 'item2',
          title: 'PIXEL 7 8/128 SNOW',
          price: 50500,
          img: '/assets/img/PIXEL 7 8_128 Snow.png',
          imgAlt: 'PIXEL 7 8/128 SNOW',
        },
        {
          id: 'item3',
          title: 'Pixel 6 Pro 12/128Gb Sorta Sunny',
          price: 50900,
          img: '/assets/img/Pixel 6 Pro 12_128Gb Sorta Sunny.png',
          imgAlt: 'Pixel 6 Pro 12/128Gb Sorta Sunny',
        },
        {
          id: 'item4',
          title: 'Pixel 7 Pro 12/256Gb HAZEL',
          price: 99990,
          img: '/assets/img/Pixel 7 Pro 12_256Gb Hazel.png',
          imgAlt: 'Pixel 7 Pro 12/256Gb HAZEL',
        },
        {
          id: 'item5',
          title: 'Pixel 3A 64Gb BLACK',
          price: 20400,
          img: '/assets/img/Pixel 3A 64Gb Black.png',
          imgAlt: 'Pixel 3A 64Gb BLACK',
        },
        {
          id: 'item6',
          title: 'Pixel 6A 6/128Gb SAGE',
          price: 33990,
          img: '/assets/img/Pixel 6A 6_128Gb Sage.png',
          imgAlt: 'Pixel 6A 6/128Gb SAGE',
        },
        {
          id: 'item7',
          title: 'Pixel 7 8/256Gb OBSIDIAN',
          price: 63900,
          img: '/assets/img/Pixel 7 8_256Gb Obsidian.png',
          imgAlt: 'Pixel 7 8/256Gb OBSIDIAN',
        },
        {
          id: 'item8',
          title: 'Google Chromecast HD c Google TV',
          price: 5890,
          img: '/assets/img/Google Chromecast HD c Google TV.png',
          imgAlt: 'Google Chromecast HD c Google TV',
        },
        {
          id: 'item9',
          title: 'Xiaomi Mi Band 7',
          price: 3440,
          img: '/assets/img/Xiaomi Mi Band 7.png',
          imgAlt: 'Xiaomi Mi Band 7',
        },
        {
          id: 'item10',
          title: 'Xiaomi Mi TV Stick 4K HDR Global',
          price: 4380,
          img: '/assets/img/Xiaomi Mi TV Stick 4K HDR Global (MDZ-27-AA).png',
          imgAlt: 'Xiaomi Mi TV Stick 4K HDR Global',
        },
      ];

      this.cartProducts = this.products.map((p) => {
        //... - spread оператор (вызовит полнуб копию объекта Product)
        return {
          ...p,
          quantity: 1,
        }; //получили обьекты с бэкенда и трансформировали(добавили свойство quantity, которое по умолчанию = 1)
      });

      this.loading = false;
    }, 4000);
  }

  //обработка добавления или удаления товара из корзины
  public toggle(product: CartProduct): void {
    const checkProductIndex = this.cart.findIndex((p) => {
      return p.id === product.id;
    });

    //если товар который мы добавляем не равен -1

    if (checkProductIndex !== -1) {
      this.cart.splice(checkProductIndex, 1); //тогда удаляем одну позицию начиная с этого индекса, у нашей корзины
      product.added = false;
    } else {
      this.cart.push(product);
      product.added = true; //флаг для окрашивания кнопки "Add to cart" при добавлении товара в корзину
    }

    console.log(this.cart);
  }
}
