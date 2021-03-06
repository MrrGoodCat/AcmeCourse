import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, FormArray, FormControl } from '@angular/forms';
import { ProductService } from '../products-list/product.service';
import { IProduct } from '../products-list/iproduct';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, fromEvent, merge } from 'rxjs';
import { NumberValidators } from '../shared/number.validator';
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
      starRating: ['', NumberValidators.range(1,5)],
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

  // getProduct(id: number): void{
  //   this.product = this.prod.getProductById(id);
  //   this.displayProduct(this.product);
  // }

  getProduct(id: number): void {
    this.prod.getProduct(id)
      .subscribe(
        (product: IProduct) => this.displayProduct(product),
        (error: any) => this.errorMessage = <any>error
      );
  }

  saveProduct():void {
    console.log(this.editForm);
    console.log('Saved ' + JSON.stringify(this.editForm.value));
    if(this.editForm.valid){
      if(this.editForm.dirty)
      {
        const p = { ...this.product, ...this.editForm.value };

        if(p.id === 0)
        {
          this.prod.createProduct(p)
          .subscribe(
            () => this.onSaveComplete(),
            (error: any) => this.errorMessage = <any>error
          );
        } else {
          this.prod.updateProduct(p)
          .subscribe(
            () => this.onSaveComplete(),
            (error: any) => this.errorMessage = <any>error
          );
        }
      } else {
        this.onSaveComplete();
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.'
    }
  }

  displayProduct(product: IProduct): void {
    if (this.editForm) {
      this.editForm.reset();
    }
    this.product = product;

    if (this.product.id === 0) {
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

  deleteProduct():void {
    if(this.product.id === 0){
      this.onSaveComplete();
    } else {
      if(confirm(`Really delete the product: ${this.product.productName}?`)){
        this.prod.deleteProduct(this.product.id)
        .subscribe(
          () => this.onSaveComplete(),
          (error: any) => this.errorMessage = <any>error
        );
      } 
    }
  }

  onSaveComplete(): void {
    this.editForm.reset();
    this.router.navigate(['/products']);
  }
}
