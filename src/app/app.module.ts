import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SalutationPipe } from './customer/salutation.pipe'
import { CustomerserviceService } from './customer/customerservice.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { GuardserviceService } from './guardservice.service';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    SalutationPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    CustomerserviceService,
    GuardserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
