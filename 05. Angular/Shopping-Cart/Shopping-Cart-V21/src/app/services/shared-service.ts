import { Injectable,signal,WritableSignal } from '@angular/core';
import { ProductInterface } from "../interfaces/product-interface";
import { CartInterface } from '../interfaces/cart-interface';

@Injectable({
  providedIn: 'root',
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

  private cart: WritableSignal<CartInterface> = signal({ total: 0, items: [], totalQuantity: 0 });

  getProducts(): ProductInterface[] {
      return this.productList;
  }

  getCart(): WritableSignal<CartInterface> {
    return this.cart;
  }

  addToCart(product: ProductInterface): void {
    const existingCartItem = this.cart().items.find(item => item.product.id === product.id);
    if(existingCartItem)
    {
      existingCartItem.quantity += 1;
      existingCartItem.finalPrice = existingCartItem.quantity * existingCartItem.product.price;
      this.cart.update(cart=> ({
        ...cart,
        totalQuantity: cart.totalQuantity + 1
      }));
    }
    else
    {
      this.cart.update(cart => ({
        ...cart,
        items: [...cart.items, {product, quantity: 1, finalPrice: product.price}],
        totalQuantity: cart.totalQuantity + 1
      }));
    }
    this.cart.update(cart => ({
      ...cart,
      total: cart.total + product.price,
    }));
  }

  removeAllCartItems(): void {
    this.cart.set({ total: 0, items: [], totalQuantity: 0 });
  }

  decreaseQuantity(product: ProductInterface): void {
    const existingCartItemIndex = this.cart().items.findIndex(item => item.product.id === product.id);
    if(existingCartItemIndex !== -1)
    {
      const existingCartItem = this.cart().items[existingCartItemIndex];
      existingCartItem.quantity -= 1;
      existingCartItem.finalPrice = existingCartItem.quantity * existingCartItem.product.price;
      this.cart.update(cart => ({
        ...cart,
        total: cart.total - product.price,
        totalQuantity: cart.totalQuantity - 1
      }));    
      if(existingCartItem.quantity === 0)
      {
        this.cart.update(cart => ({
          ...cart,
          items: cart.items.filter((_, index) => index !== existingCartItemIndex)
        }));
      }
    }
  }

  removeItemFromCart(product: ProductInterface): void {
    const existingCartItemIndex = this.cart().items.findIndex(item => item.product.id === product.id);
    if(existingCartItemIndex !== -1)
    {
      const existingCartItem = this.cart().items[existingCartItemIndex];
      this.cart.update(cart => ({
        ...cart,
        total: cart.total - existingCartItem.finalPrice,
        totalQuantity: cart.totalQuantity - existingCartItem.quantity,
        items: cart.items.filter((_, index) => index !== existingCartItemIndex)
      }));
    }
  }
}
