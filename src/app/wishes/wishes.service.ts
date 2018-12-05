import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Wish } from './wish.model';

@Injectable({providedIn: 'root'})
export class WishesService {
  private wishes: Wish[] = [];
  private wishesUpdated = new Subject<Wish[]>();

  constructor(private http: HttpClient) {}

  getWishes() {
    // Send an HTTP request
    this.http.
      get<{message: string, wishes: Wish[]}>(
        'http://localhost:3000/api/wishes'
      )
      .pipe(map((wishData) => {
        return wishData.wishes.map(wish => {
          return{
            name: wish.name,
            url: wish.url,
            id: wish._id
          };
        });
      }))
      .subscribe(transformedWishes => {
        this.wishes = transformedWishes;
        this.wishesUpdated.next([...this.wishes]);
      });
    return [...this.wishes];
  }

  getWishesUpdateListener() {
    return this.wishesUpdated.asObservable();
  }

  addWish(name: string, url: string) {
    const wish: Wish = { id: null, name: name, url: url};
    this.http
      .post<{ message: string }>('http://localhost:3000/api/wishes', wish)
      .subscribe(responseData => {
        console.log(responseData.message);
        this.wishes.push(wish);
        this.wishesUpdated.next([...this.wishes]);
      });
  }
}
