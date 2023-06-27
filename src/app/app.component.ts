import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // public title = 'shop-app';

  // public onClick(): void {
  //   alert('Hi!');

  //   this.title = (Math.random()*10-5).toString();
  // }

public products = [
  {
    "id": "item1",
    "title": "Pixel 7 8/128 LEMONGRASS",
    "price": 51000,
    "img": "./img/PIXEL 7 8_128 lemongrass.png",
    "imgAlt": "Pixel 7 8/128 LEMONGRASS"
  },
  {
    "id": "item2",
    "title": "PIXEL 7 8/128 SNOW",
    "price": 50500,
    "img": "./img/PIXEL 7 8_128 Snow.png",
    "imgAlt": "PIXEL 7 8/128 SNOW"
  },
  {
    "id": "item3",
    "title": "Pixel 6 Pro 12/128Gb Sorta Sunny",
    "price": 50900,
    "img": "./img/Pixel 6 Pro 12_128Gb Sorta Sunny.png",
    "imgAlt": "Pixel 6 Pro 12/128Gb Sorta Sunny"
  },
  {
    "id": "item4",
    "title": "Pixel 7 Pro 12/256Gb HAZEL",
    "price": 99990,
    "img": "./img/Pixel 7 Pro 12_256Gb Hazel.png",
    "imgAlt": "Pixel 7 Pro 12/256Gb HAZEL"
  },
  {
    "id": "item5",
    "title": "Pixel 3A 64Gb BLACK",
    "price": 20400,
    "img": "./img/Pixel 3A 64Gb Black.png",
    "imgAlt": "Pixel 3A 64Gb BLACK"
  },
  {
    "id": "item6",
    "title": "Pixel 6A 6/128Gb SAGE",
    "price": 33990,
    "img": "./img/Pixel 6A 6_128Gb Sage.png",
    "imgAlt": "Pixel 6A 6/128Gb SAGE"
  },
  {
    "id": "item7",
    "title": "Pixel 7 8/256Gb OBSIDIAN",
    "price": 63900,
    "img": "./img/Pixel 7 8_256Gb Obsidian.png",
    "imgAlt": "Pixel 7 8/256Gb OBSIDIAN"
  },
  {
    "id": "item8",
    "title": "Google Chromecast HD c Google TV",
    "price": 5890,
    "img": "./img/Google Chromecast HD c Google TV.png",
    "imgAlt": "Google Chromecast HD c Google TV"
  },
  {
    "id": "item9",
    "title": "Xiaomi Mi Band 7",
    "price": 3440,
    "img": "./img/Xiaomi Mi Band 7.png",
    "imgAlt": "Xiaomi Mi Band 7"
  },
  {
    "id": "item10",
    "title": "Xiaomi Mi TV Stick 4K HDR Global",
    "price": 4380,
    "img": "./img/Xiaomi Mi TV Stick 4K HDR Global (MDZ-27-AA).png",
    "imgAlt": "Xiaomi Mi TV Stick 4K HDR Global"
  }
];
}
