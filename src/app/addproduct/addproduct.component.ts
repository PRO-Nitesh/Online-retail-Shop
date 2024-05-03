import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css',
})
export class AddproductComponent {
  readonly addlink = 'https://localhost:7194/api/Product';
  constructor(private https: HttpClient) {}
  products: {
    productId?: string;
    productName: string;
    quantity: number;
    isActive: boolean;
  } = {
    productId: '',
    productName: '',
    quantity: 0,
    isActive: false,
  };
  addproduct(pro: { ProductName: string; ProductQuantity: number }) {
    this.products = {
      productName: pro.ProductName,
      quantity: pro.ProductQuantity,
      isActive: true,
    };
    this.https.post(this.addlink, this.products).subscribe((res) => {
      console.log(res);
    });

    alert('Product has been added!');
  }
}
