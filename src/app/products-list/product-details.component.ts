import { Component, OnInit } from '@angular/core';
import { IProduct } from './iproduct';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  //selector: 'pm-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.sass']
})
export class ProductDetailsComponent implements OnInit {

  pageTitle: string = 'Product Details';
  product: IProduct;
  constructor(private route: ActivatedRoute, private router: Router, private prod: ProductService) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.product = this.prod.getProductById(id);
  }

  onBack(): void{
    this.router.navigate(['/products']);
  }
}
