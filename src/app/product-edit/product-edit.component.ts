import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, FormArray, FormControl } from '@angular/forms';
import { ProductService } from '../products-list/product.service';
import { IProduct } from '../products-list/iproduct';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, fromEvent, merge } from 'rxjs';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.sass']
})
export class ProductEditComponent implements OnInit {
  editForm: FormGroup;
  product: IProduct;
  pageTitle: string;
  errorMessage: string;
  private sub: Subscription;

  get tags(): FormArray {
    return <FormArray>this.editForm.get('tags');
  }

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private prod: ProductService) { }

  ngOnInit() {
    this.editForm = this.fb.group({
      productName: ['', [Validators.required, Validators.minLength(3)]],
      productCode: ['', [Validators.required, Validators.minLength(3)]],
      starRating: ['', [Validators.min(1), Validators.max(5)]],
      tags: this.fb.array([]),
      description: ['']

    });

    //Reads the produc Id from the route parameter
    this.sub = this.route.paramMap.subscribe(
      params => {
        const id = +params.get('id');
        console.log('id is: ' + id);
        this.getProduct(id);
      }
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  buildTags(): FormGroup{
    return this.fb.group({
      tag: ''
    });
  }

  addTag(): void {
    this.tags.push(new FormControl());
  }

  getProduct(id: number): void{
    this.product = this.prod.getProductById(id);
    this.displayProduct(this.product);
  }

  // getProduct(id: number): void {
  //   this.prod.getProduct(id)
  //     .subscribe(
  //       (product: IProduct) => this.displayProduct(product),
  //       (error: any) => this.errorMessage = <any>error
  //     );
  // }

  save(){
    console.log(this.editForm);
    console.log('Saved ' + JSON.stringify(this.editForm.value));
  }

  displayProduct(product: IProduct): void {
    if (this.editForm) {
      this.editForm.reset();
    }
    this.product = product;

    if (this.product.productId === 0) {
      this.pageTitle = 'Add Product';
    } else {
      this.pageTitle = `Edit Product: ${this.product.productName}`;
    }

    // Update the data on the form
    this.editForm.patchValue({
      productName: this.product.productName,
      productCode: this.product.productCode,
      starRating: this.product.starRating,
      description: this.product.description
    });
    this.editForm.setControl('tags', this.fb.array(this.product.tags || []));
  }
}
