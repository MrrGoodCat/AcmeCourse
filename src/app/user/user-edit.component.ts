import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.sass']
})
export class UserEditComponent implements OnInit {

  editUserForm: FormGroup;
  pageTitle: string = "Edit user";
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  saveUser():void{
    console.log('Data has been saved!')
  }
}
