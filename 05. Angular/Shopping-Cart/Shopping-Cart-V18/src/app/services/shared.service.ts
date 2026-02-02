import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductInterface } from "../interfaces/product-interface";
import { CartInterface } from '../interfaces/cart-interface';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private readonly productList: ProductInterface[] = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Smartphone', price: 600 },
    { id: 3, name: 'Headphones', price: 150 },
    { id: 4, name: 'Wireless Mouse', price: 40 },
    { id: 5, name: 'Mechanical Keyboard', price: 120 },
    { id: 6, name: '27-inch Monitor', price: 350 },
    { id: 7, name: 'USB-C Hub', price: 70 },
  ];

  private cartSubject: BehaviorSubject<CartInterface> = new BehaviorSubject<CartInterface>({ total: 0, items: [], totalQuantity: 0 });
  public cart$: Observable<CartInterface> = this.cartSubject.asObservable();

  getProducts(): ProductInterface[] {
      return this.productList;
  }

  getCart(): Observable<CartInterface> {
    return this.cart$;
  }

  addToCart(product: ProductInterface): void {
    const currentCart = this.cartSubject.value;
    const existingCartItem = currentCart.items.find(item => item.product.id === product.id);
    
    if(existingCartItem)
    {
      existingCartItem.quantity += 1;
      existingCartItem.finalPrice = existingCartItem.quantity * existingCartItem.product.price;
      this.cartSubject.next({
        ...currentCart,
        totalQuantity: currentCart.totalQuantity + 1,
        total: currentCart.total + product.price
      });
    }
    else
    {
      this.cartSubject.next({
        ...currentCart,
        items: [...currentCart.items, {product, quantity: 1, finalPrice: product.price}],
        totalQuantity: currentCart.totalQuantity + 1,
        total: currentCart.total + product.price
      });
    }
  }

  removeAllCartItems(): void {
    this.cartSubject.next({ total: 0, items: [], totalQuantity: 0 });
  }

  decreaseQuantity(product: ProductInterface): void {
    const currentCart = this.cartSubject.value;
    const existingCartItemIndex = currentCart.items.findIndex(item => item.product.id === product.id);
    
    if(existingCartItemIndex !== -1)
    {
      const existingCartItem = currentCart.items[existingCartItemIndex];
      existingCartItem.quantity -= 1;
      existingCartItem.finalPrice = existingCartItem.quantity * existingCartItem.product.price;
      
      if(existingCartItem.quantity === 0)
      {
        this.cartSubject.next({
          ...currentCart,
          total: currentCart.total - product.price,
          totalQuantity: currentCart.totalQuantity - 1,
          items: currentCart.items.filter((_, index) => index !== existingCartItemIndex)
        });
      }
      else
      {
        this.cartSubject.next({
          ...currentCart,
          total: currentCart.total - product.price,
          totalQuantity: currentCart.totalQuantity - 1
        });
      }
    }
  }

  removeItemFromCart(product: ProductInterface): void {
    const currentCart = this.cartSubject.value;
    const existingCartItemIndex = currentCart.items.findIndex(item => item.product.id === product.id);
    
    if(existingCartItemIndex !== -1)
    {
      const existingCartItem = currentCart.items[existingCartItemIndex];
      this.cartSubject.next({
        ...currentCart,
        total: currentCart.total - existingCartItem.finalPrice,
        totalQuantity: currentCart.totalQuantity - existingCartItem.quantity,
        items: currentCart.items.filter((_, index) => index !== existingCartItemIndex)
      });
    }
  }
}