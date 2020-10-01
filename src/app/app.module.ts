import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentDetailComponent } from './Student-details/student-detail/student-detail.component';
import { StudentDetailListComponent } from './Student-details/student-detail-list/student-detail-list.component';
import { StudentDetailService } from './shared/student-detail.service';
import {FormsModule} from "@angular/forms"
import { HttpClientModule} from "@angular/common/http"


@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent,
    StudentDetailComponent,
    StudentDetailListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [StudentDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
