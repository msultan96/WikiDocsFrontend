import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { LoginRoutingModule } from './login-routing.module';
import { AdminRoutingModule } from '../admin/admin-routing.module';


@NgModule({
    declarations: [

        
],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        LoginRoutingModule,
        AdminRoutingModule
    ],
    providers: [
       
    ],
    exports: []

})
export class LoginModule {

}

