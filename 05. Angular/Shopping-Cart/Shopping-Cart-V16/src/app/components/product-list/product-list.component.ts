import { Component, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartInterface } from 'src/app/interfaces/cart-interface';
import { ProductInterface } from 'src/app/interfaces/product-interface';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
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
