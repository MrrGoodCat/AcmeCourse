import { TestBed, async, inject } from '@angular/core/testing';

import { ProductEdit\productEditGuard } from './product-edit\product-edit.guard';

describe('ProductEdit\productEditGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductEdit\productEditGuard]
    });
  });

  it('should ...', inject([ProductEdit\productEditGuard], (guard: ProductEdit\productEditGuard) => {
    expect(guard).toBeTruthy();
  }));
});
