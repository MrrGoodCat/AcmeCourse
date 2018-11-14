import { NgModule } from '@angular/core';
import { ProductsListComponent } from './products-list.component';
import { ProductDetailsComponent } from './product-details.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from '../products/product-detail.guard';
import { SharedModule } from '../shared/shared.module';
import { CustomerComponent } from '../customer/customer.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'products', component: ProductsListComponent},
      {path: 'edit', component: CustomerComponent},
      {path: 'products/:id',canActivate: [ProductDetailGuard], component: ProductDetailsComponent}
      
    ]),
    SharedModule,
  ],
  declarations: [
    ProductsListComponent,
    ProductDetailsComponent,
    ConvertToSpacesPipe,
    CustomerComponent
  ]
})
export class ProductModule { }
