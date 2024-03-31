import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  cart$ = this.cart.asObservable();

  constructor() {
    // Retrieve cart items from local storage on service initialization
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.cart.next(JSON.parse(storedCart));
    }
  }

  addToCart(product: any, quantity: number) {
    const currentCart = this.cart.getValue();
    const productIndex = currentCart.findIndex(p => p.productID === product.ProductID);

    if (productIndex !== -1) {
      // If product already exists in cart, update its quantity
      currentCart[productIndex].Quantity += quantity;
    } else {
      // If product is not in cart, add it with the specified quantity
      currentCart.push({ ...product, Quantity: quantity });
    }

    // Update the cart BehaviorSubject with the modified cart
    this.cart.next(currentCart);

    // Update local storage with the updated cart
    localStorage.setItem('cart', JSON.stringify(currentCart));
  }

  removeFromCart(index: number) {
    const currentCart = this.cart.getValue();
    currentCart.splice(index, 1);

    // Update the cart BehaviorSubject with the modified cart
    this.cart.next(currentCart);

    // Update local storage with the updated cart
    localStorage.setItem('cart', JSON.stringify(currentCart));
  }

  getCartItems() {
    return this.cart.getValue();
  }
}
