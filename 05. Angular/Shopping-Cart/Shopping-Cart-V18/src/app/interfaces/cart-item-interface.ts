import { ProductInterface } from "./product-interface";

export interface CartItemInterface {
    product: ProductInterface;
    quantity: number;
    finalPrice: number;
}
