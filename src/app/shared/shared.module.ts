import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star/star.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatTabsModule, MatIconModule, MatToolbarModule} from '@angular/material';
//import { ConvertToDatePipe } from './convert-to-date.pipe';


@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    MatIconModule,
    MatToolbarModule
  ],
  declarations: [
    StarComponent
    //ConvertToDatePipe
  ],
  exports: [
    StarComponent,
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    MatIconModule,
    MatToolbarModule

  ]
})
export class SharedModule { 

}
