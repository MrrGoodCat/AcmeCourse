import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

import { ProductEditComponent } from './product-edit.component';

@Injectable({
  providedIn: 'root'
})

export class ProductEditGuard implements CanDeactivate<ProductEditComponent> {
  canDeactivate(component: ProductEditComponent): Observable<boolean> | Promise<boolean> | boolean {
    if (component.editForm.dirty) {
      const productName = component.editForm.get('productName').value || 'New Product';
      return confirm(`Navigate away and lose all changes to ${productName}?`);
    }
    return true;
  }
}
