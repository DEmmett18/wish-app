import { Component, OnInit, OnDestroy, ViewChild, Input } from '@angular/core';
import { MatExpansionModule, MatAccordion } from '@angular/material';
import { Wish } from '../wish.model';
import { WishesService } from '../wishes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit, OnDestroy {
  wishes: Wish[] = [];
  private wishesSub: Subscription;

  constructor(public wishesService: WishesService) {}

  ngOnInit() {
    this.wishesService.getWishes();
    this.wishesSub = this.wishesService.getWishesUpdateListener()
      .subscribe((wishes: Wish[]) => {
        this.wishes = wishes;
      });
  }

  ngOnDestroy() {
    this.wishesSub.unsubscribe();
  }
}
