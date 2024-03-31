import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css',
})
export class AddproductComponent {
  readonly addlink=
  // "https://uiexercise.theproindia.com/api/Product/AddProduct";
  "http://localhost:43228/api/Product/PostProduct";
  constructor(private https:HttpClient){}
  products: {
    productID?: string;
    productName: string;
    quantity: number;
    isActive: boolean;
} = {
  productID: '',
  productName: '',
  quantity: 0,
  isActive: false
};
  addproduct(pro:{Pname:string,Pquan:number}){
    this.products={
    
      productName:pro.Pname,
      quantity:pro.Pquan,
      isActive:true
    }
    this.https.post(this.addlink,this.products).subscribe((res)=>{
      console.log(res);
    })

    alert("Product has been added!");
  }
}

