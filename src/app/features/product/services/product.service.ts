import { Injectable } from '@angular/core';
import { ProductItem } from '../../../shared/models/ProductItem';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private productList: ProductItem[] = [
    {
      id: 1,
      name: "Item 1",
      price: 10,
      amount: 1,
      description: 'Description of item 1'
    },
    {
      id: 1,
      name: "Item 1",
      price: 10,
      amount: 1,
      description: 'Description of item 1'
    },
    {
      id: 1,
      name: "Item 1",
      price: 10,
      amount: 1,
      description: 'Description of item 1'
    },
    {
      id: 1,
      name: "Item 1",
      price: 10,
      amount: 1,
      description: 'Description of item 1'
    },
    {
      id: 1,
      name: "Item 1",
      price: 10,
      amount: 1,
      description: 'Description of item 1'
    },
  ];


  constructor() { }
  getAllProduct(): ProductItem[] {
    return this.productList;
  }

  getProductById(id: number): ProductItem | undefined {
    return this.productList.find(productItem => productItem.id === id)
  }

}
