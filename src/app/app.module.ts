import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
  Routes,
  provideRouter,
  withComponentInputBinding,
} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetproductComponent } from './getproduct/getproduct.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { HomeComponent } from './home/home.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { CartComponent } from './cart/cart.component';
import { ToastComponent } from './toast/toast.component';

const appRoute: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'GetProduct',
    component: GetproductComponent,
  },
  {
    path: 'AddProduct',
    component: AddproductComponent,
  },
  {
    path: 'search',
    component: ProductSearchComponent,
  },{
    path: "Cart",
    component: CartComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    GetproductComponent,
    AddproductComponent,
    HomeComponent,
    ProductSearchComponent,
    CartComponent,
    ToastComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [provideRouter(appRoute, withComponentInputBinding())],
  bootstrap: [AppComponent],
})
export class AppModule {}
