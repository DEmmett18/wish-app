import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Wish } from '../wish.model';
import { WishesService } from '../wishes.service';


@Component({
  selector: 'app-wish-create',
  templateUrl: './wish-create.component.html',
  styleUrls: ['./wish-create.component.css']
})
export class WishCreateComponent {
  enteredName = '';
  enteredUrl = '';

  constructor(public wishesService: WishesService) {}

  onAddWish(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.wishesService.addWish(form.value.name, form.value.url);
    form.resetForm();
  }
}
