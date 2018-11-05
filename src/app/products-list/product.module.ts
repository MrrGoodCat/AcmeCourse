import { NgModule } from '@angular/core';
import { ProductsListComponent } from './products-list.component';
import { ProductDetailsComponent } from './product-details.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from '../products/product-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'products', component: ProductsListComponent},
      {path: 'products/:id',canActivate: [ProductDetailGuard], component: ProductDetailsComponent}
    ]),
    SharedModule,
  ],
  declarations: [
    ProductsListComponent,
    ProductDetailsComponent,
    ConvertToSpacesPipe
  ]
})
export class ProductModule { }
