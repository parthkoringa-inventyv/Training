import { Component, inject } from '@angular/core';
import { SharedService } from '../../services/shared-service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { ProductInterface } from '../../interfaces/product-interface';

@Component({
  selector: 'app-cart',
  imports: [MatCardModule,MatIconModule,MatButtonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  protected readonly title = 'Shopping Cart';

  protected readonly service = inject(SharedService);

  cart = this.service.getCart();

  clearCart(): void {
    this.service.removeAllCartItems();
  }

  increaseQuantity(product: ProductInterface): void {
    this.service.addToCart(product);
  }

  decreaseQuantity(product: ProductInterface): void {
    this.service.decreaseQuantity(product);
  }

  removeItem(product: ProductInterface): void {
    this.service.removeItemFromCart(product);
  }
}
