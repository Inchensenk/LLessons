import { Injectable } from '@angular/core';

/**
 * DI - Dependency Injection
 */
@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public set<T>(key: string, value: T): void {
    const stringyfiedString = JSON.stringify(value);

    localStorage.setItem(key, stringyfiedString);
  }

  public get<T>(key: string): T | null {
    const item = localStorage.getItem(key);

    if (!item) {
      return null;
    }

    const parsedItem = JSON.parse(item);

    return parsedItem;
  }
}

/*

  A

  1. new A();

  A => B
       => C => F
                => .........
       => D         ...

  new B()

  new A(new B(
    new C(
      new F()
    ),
    new D()
  ))

  Dependency [ token , recipe ]

*/
