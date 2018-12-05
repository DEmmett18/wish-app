import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatExpansionModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WishListComponent } from './wishes/wish-list/wish-list.component';
import { WishCreateComponent } from './wishes/wish-create/wish-create.component';

import { WishesService } from './wishes/wishes.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WishListComponent,
    WishCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatExpansionModule,
    HttpClientModule
  ],
  providers: [WishesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
