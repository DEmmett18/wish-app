import { Component } from '@angular/core';

import { Wish } from './wishes/wish.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedWishes: Wish[] = [];


  onWishAdded(wish) {
    this.storedWishes.push(wish);
  }
}
