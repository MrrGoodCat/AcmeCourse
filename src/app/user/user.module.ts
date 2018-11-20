import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './user-list.component';
import { UserComponent } from './user.component';
import { UserEditComponent } from './user-edit.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { UserData } from './user-data';
import { ReactiveFormsModule } from '@angular/forms';
import { ConvertToDatePipe } from '../shared/convert-to-date.pipe';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'user', component: UserListComponent},
      {path: 'user/:id', component: UserComponent},
      {path: 'user/:id/edit', component: UserEditComponent}
    ]),
    SharedModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(UserData),
    
  ],
  declarations: [
    UserComponent,
    UserEditComponent,
    UserListComponent,
    ConvertToDatePipe
  ]
})
export class UserModule { }
