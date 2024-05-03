import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-getproduct',
  templateUrl: './getproduct.component.html',
  styleUrl: './getproduct.component.css',
})
export class GetproductComponent {
  readonly getk = 'https://localhost:7194/api/Product/Getproduct';
  products: any;
  constructor(private https: HttpClient) {}
  getProduct() {
    this.https.get(this.getk).subscribe((res) => {
      console.log(res);
      this.products = res;
    });
  }
}
