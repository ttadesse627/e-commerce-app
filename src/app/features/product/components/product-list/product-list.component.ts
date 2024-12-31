import { Component } from '@angular/core';
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
  items: ProductItem[] = [];
  constructor(private productService: ProductService) {
    this.items = this.productService.getAllProduct();
    console.log(this.items);
  }


}
