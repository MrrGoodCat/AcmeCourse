import { Component, OnInit } from '@angular/core';
import { iUser } from './iuser';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {

  private user: iUser;
  private sub: Subscription;
  errorMessage: string;
  pageTitle: string = 'User Profile';

  constructor(private userService: UserService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe(
      params => {
        const id = +params.get('id');
        this.getUser(id);       
      }
    );
  }

  getUser(id: number): void {
    this.userService.getUser(id).subscribe(
      (user: iUser) => {this.user = user},
      (error: any) => {this.errorMessage = error}
    );
  }

  displayUser(user: iUser): void {

  }
}
