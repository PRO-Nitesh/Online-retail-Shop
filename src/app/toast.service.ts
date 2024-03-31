import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  message: string = '';
  isVisible: boolean = false;

  constructor() { }
  show(message: string) {
    this.message = message;
    this.isVisible = true;
    setTimeout(() => {
      this.isVisible = false;
    }, 3000); // Hide after 3 seconds
  }
}
