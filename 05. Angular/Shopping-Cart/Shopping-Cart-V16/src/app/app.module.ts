import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
