import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductItem } from '../shared/models/ProductItem';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, CommonModule,AuthComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  items = [
    new ProductItem(0, 'Samsung Galaxy A23', 25000, 1, 'a new brand samsung galaxy phone imported from US'),
    new ProductItem(1, 'Samsung Galaxy A54', 30000, 1, 'a new brand samsung galaxy phone imported from US'),
    new ProductItem(2, 'Samsung Galaxy A72', 34000, 1, 'a new brand samsung galaxy phone imported from US'),
    new ProductItem(3, 'Samsung Galaxy A15 5G', 18000, 1, 'a new brand samsung galaxy phone imported from US'),
    new ProductItem(4, 'Samsung Galaxy A15 5G', 18000, 1, 'a new brand samsung galaxy phone imported from US')
  ];
  title = 'e-commerce-app';
}
