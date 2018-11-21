import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';
import { iUser } from './iuser';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})
export class UserListComponent implements OnInit {

  pageTitle: string = 'List of registered users';
  users: iUser[] = [];
  errorMessage: string;
  showImage: boolean = true;
  imageWidth: number = 70;
  imagemargin: number = 2;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      users => {this.users = users},
      error => this.errorMessage = <any>error
    );
  }

  toggleImage():void {
    this.showImage = !this.showImage;
  }

}
