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

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'products', component: ProductsListComponent},
      {path: 'customer', component: CustomerComponent},
      {path: 'products/:id',canActivate: [ProductDetailGuard], component: ProductDetailsComponent},
      {path: 'products/:id/edit', component: ProductEditComponent}
      
    ]),
    SharedModule,
    ReactiveFormsModule
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
