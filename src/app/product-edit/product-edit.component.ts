import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.sass']
})
export class ProductEditComponent implements OnInit {
  editForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.editForm = this.fb.group({
      productName: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  save(){
    console.log(this.editForm);
    console.log('Saved ' + JSON.stringify(this.editForm.value));
  }
}
