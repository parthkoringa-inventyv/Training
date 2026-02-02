import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { ProductInterface } from '../../interfaces/product-interface';
import { CartInterface } from '../../interfaces/cart-interface';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatBadge } from '@angular/material/badge';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,MatIconModule,MatBadge],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit, OnDestroy {
  protected readonly title = 'Product List';
  protected readonly service = inject(SharedService);

  cart!: CartInterface;
  products = this.service.getProducts();
  
  private cartSubscription!: Subscription;

  ngOnInit(): void {
    this.cartSubscription = this.service.getCart().subscribe(cart => {
      this.cart = cart;
    });
  }

  ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  addToCart(product: ProductInterface): void {
    this.service.addToCart(product);
  }
}