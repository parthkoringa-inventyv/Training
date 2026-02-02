import { Component, inject } from '@angular/core';
import { SharedService } from '../../services/shared-service';
import { ProductInterface } from '../../interfaces/product-interface';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatBadge } from '@angular/material/badge';

@Component({
  selector: 'app-product-list',
  imports: [MatCardModule,MatButtonModule,MatIconModule,MatBadge],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  protected readonly title = 'Product List';
  protected readonly service = inject(SharedService);

  cart = this.service.getCart();
  products = this.service.getProducts();

  addToCart(product: ProductInterface): void {
    this.service.addToCart(product);
  }
}
