import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.sass']
})
export class UserEditComponent implements OnInit {

  userEditForm: FormGroup;
  pageTitle: string;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userEditForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      userSecondName: ['', [Validators.required, Validators.minLength(3)]],
      userEmail: ['', [Validators.required, Validators.email]],
      userPhone: ['', [Validators.required, Validators.minLength(12)]],
      userBDay: ['']
    });
    this.pageTitle = "Edit user";
  }

  saveUser():void{
    console.log('Data has been saved!')
  }
}
