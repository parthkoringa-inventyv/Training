import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { CartInterface } from '../../interfaces/cart-interface';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { ProductInterface } from '../../interfaces/product-interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MatCardModule,MatIconModule,MatButtonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit, OnDestroy {
  protected readonly title = 'Shopping Cart';

  protected readonly service = inject(SharedService);

  cart!: CartInterface;
  
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