import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../cart.service';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: any = [];
  searchResults: any;
  cart: any;
  cartItemRemoved: any;

  constructor(
    private cartService: CartService,
    private https: HttpClient,
    private toastService: ToastService
  ) {
    this.cartItems = this.cartService.getCartItems();
    console.log(this.cartItems);
  }

  ngOnInit(): void {
    // This method is called once the component is initialized
    // You can perform initialization tasks here if needed
  }
  removeFromCart(item: any) {
    this.cartService.removeFromCart(item);
    alert('The items has been removed form the shopping cart.');
    window.location.reload();
  }

  purchaseItem(item: any) {
    console.log(item);
    this.https
      .post('http://localhost:43228/api/Order/PostOrder', {
        customerId: '4f184652-ce69-4696-8cd6-d88cf607f103',
        productID: item.productID,
        quantity: item.quantity,
      })
      .subscribe(
        (res) => {
          console.log(res);
          alert('Your purchase has been successful.');
        },
        (err) => {
          console.log(err);
        }
      );

    this.cartService.removeFromCart(item);
  }
}
