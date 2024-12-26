import { Component } from '@angular/core';
import { ProductItem } from '../../shared/models/ProductItem';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  items = [
    new ProductItem(1, 'Item 1', 25000, 1, 'This description of item 1'),
    new ProductItem(2, 'Item 2', 30000, 1, 'This description of item 2'),
    new ProductItem(3, 'Item 3', 34000, 1, 'This description of item 3'),
    new ProductItem(4, 'Item 4', 18000, 1, 'This description of item 4'),
    new ProductItem(5, 'Item 5', 18000, 1, 'This description of item 5')
  ];
}
