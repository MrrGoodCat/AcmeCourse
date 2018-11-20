import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import {MatButtonModule} from '@angular/material';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products-list/product.module';
import { UserComponent } from './user/user.component';
//import { ProductEditComponent } from './product-edit/product-edit.component';
//import { CustomerComponent } from './customer/customer.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    UserComponent,
    //ProductEditComponent
   // CustomerComponent  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'},
    ]),
    ProductModule,
    SharedModule,
    //BrowserAnimationsModule,
    //MatButtonModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
