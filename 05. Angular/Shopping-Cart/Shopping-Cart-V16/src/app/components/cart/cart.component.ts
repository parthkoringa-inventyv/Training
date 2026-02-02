import { Component, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartInterface } from 'src/app/interfaces/cart-interface';
import { ProductInterface } from 'src/app/interfaces/product-interface';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
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