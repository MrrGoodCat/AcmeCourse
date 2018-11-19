import { NgModule } from '@angular/core';
import { ProductsListComponent } from './products-list.component';
import { ProductDetailsComponent } from './product-details.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from '../products/product-detail.guard';
import { SharedModule } from '../shared/shared.module';
import { CustomerComponent } from '../customer/customer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductEditComponent } from '../product-edit/product-edit.component';
import { ProductEditGuard } from '../product-edit/product-edit.guard';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from './product-data';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'products', component: ProductsListComponent},
      {path: 'customer', component: CustomerComponent},
      {path: 'products/:id',canActivate: [ProductDetailGuard], component: ProductDetailsComponent},
      {path: 'products/:id/edit', canDeactivate: [ProductEditGuard], component: ProductEditComponent}
      
    ]),
    SharedModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(ProductData)
  ],
  declarations: [
    ProductsListComponent,
    ProductDetailsComponent,
    ConvertToSpacesPipe,
    CustomerComponent,
    ProductEditComponent
  ]
})
export class ProductModule { }
