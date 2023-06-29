import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private readonly _http: HttpClient) {}

  public list(): Observable<Product[]> {
    const url = '/assets/products.json';

    return this._http.get<Product[]>(url).pipe(delay(4000));
  }
}
