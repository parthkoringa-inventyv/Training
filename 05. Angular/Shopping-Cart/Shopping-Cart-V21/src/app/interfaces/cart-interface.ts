import { CartItemInterface } from "./cart-item-interface";

export interface CartInterface {
    total: number;
    items: CartItemInterface[];
    totalQuantity: number;
}
