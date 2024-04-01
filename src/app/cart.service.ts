import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  [x: string]: any;
  private cart: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  cart$ = this.cart.asObservable();

  constructor() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.cart.next(JSON.parse(storedCart));
    }
  }

  addToCart(product: any, quantity: number) {
    const currentCart = this.cart.getValue();
    const productIndex = currentCart.findIndex(
      (p) => p.productID === product.productID
    );

    if (productIndex !== -1) {
      currentCart[productIndex].quantity += quantity;
    } else {
      currentCart.push({ ...product, quantity: quantity });
    }

    this.cart.next(currentCart);

    localStorage.setItem('cart', JSON.stringify(currentCart));
  }

  removeFromCart(index: number) {
    const currentCart = this.cart.getValue();
    currentCart.splice(index, 1);

    this.cart.next(currentCart);

    localStorage.setItem('cart', JSON.stringify(currentCart));
  }

  getCartItems() {
    return this.cart.getValue();
  }
}
