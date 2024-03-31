import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({

  selector: 'app-getproduct',
  templateUrl: './getproduct.component.html',
  styleUrl: './getproduct.component.css',
})
export class GetproductComponent {
  readonly getk =
    //'https://uiexercise.theproindia.com/api/Product/GetAllProduct';
    'http://localhost:43228/api/Product/GetProducts';
  products: any;
  constructor(private https: HttpClient) {}
  getProduct() {
    // this.products=this.https.get(this.getk);
    this.https.get(this.getk).subscribe((res) => {
      console.log(res);
      this.products = res;
    });
  }
}