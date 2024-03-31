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

  constructor(
    private cartService: CartService,
    private https: HttpClient,
    private toastService: ToastService // Inject ToastService here
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
    this.toastService.show('Product removed from cart.'); // Use toastService here
  }

  purchaseItem(item: any) {
    // console.log('Item purchased:', item);
    // this.toastService.show('Product purchased.'); // Use toastService here
    alert('You have purchased the items.');
    this.https
      .post(
        // 'https://uiexercise.theproindia.com/api/Order/AddOrder',
        'http://localhost:43228/api/Order/PostOrder',
        {
          CustomerId: '457b5ccc-1ec5-49b3-a849-08dc44a922b3',
          ProductId: item.productID,
          Quantity: item.quantity,
        }
      )
      .subscribe((res) => {
        console.log(res);
      });

    this.cartService.removeFromCart(item);
  }
}
