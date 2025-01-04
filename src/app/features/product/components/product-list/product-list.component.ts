import { Component, signal } from '@angular/core';
import { ProductItem } from '../../../../shared/models/ProductItem';
import { ProductService } from '../../services/product.service';
import { RouterModule, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [RouterModule, CommonModule, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  items = signal<ProductItem[]>([]);
  constructor(private productService: ProductService) {
    this.items.update((value) => [...value, ...this.productService.getAllProduct()]);
  }
}
