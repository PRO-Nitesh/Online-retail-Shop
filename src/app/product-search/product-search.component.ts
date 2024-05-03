import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css'],
})
export class ProductSearchComponent {
  searchQuery: string = '';
  searchResults: any[] = [];
  constructor(
    private http: HttpClient,
    private cartService: CartService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getProduct();
  }
  readonly apiUrl = 'https://localhost:7194/api/Product/Getproduct';
  products: any[] = [];
  searchProducts() {
    this.searchResults = this.products.filter((item) => {
      return item.productName
        ?.toLowerCase()
        .includes(this.searchQuery.toLowerCase());
    });
  }
  getProduct() {
    this.http.get<any[]>(this.apiUrl).subscribe((res) => {
      this.products = res;
      this.searchResults = res;
    });
  }

  addToCart(product: any) {
    const quantityToAdd = prompt(
      `Enter the quantity for ${product.productName}:`,
      '1'
    );
    const quantity = Number(quantityToAdd);

    if (quantity <= 0 || isNaN(quantity)) {
      alert('Invalid quantity.');
      return;
    }

    if (product.quantity >= quantity) {
      this.cartService.addToCart(product, quantity);
      alert('Product added to cart successfully.');
      this.router.navigate(['/Cart']);
    } else {
      alert('Not enough stock available.');
    }
  }
}
