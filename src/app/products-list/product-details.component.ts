import { Component, OnInit } from '@angular/core';
import { IProduct } from './iproduct';

@Component({
  //selector: 'pm-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.sass']
})
export class ProductDetailsComponent implements OnInit {

  pageTitle: string = 'Product Details';
  product: IProduct;
  constructor() { }

  ngOnInit() {
  }

}
