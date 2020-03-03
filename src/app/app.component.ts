import { Component } from '@angular/core';
import { Customer } from './customer/customer';
import { Router } from '../../node_modules/@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  /*template:`
     <p id="sampleId"> Welcome to Angular</p>
  `,*/
 styleUrls: ['./app.component.css']
/* styles:[`
        p{
          color:blue;
          border: 2px solid red;
        }
        .sampleClass
        {
          color:red;
        }
        #sampleId
        {
          color:#34AEB6;
        }
 
 `]*/
})
export class AppComponent {
  title = 'FirstAngAppn';
  parentCustName:string = "John@123";
  custObjInParent:Customer;
  custId:string="1111";

  constructor(private router:Router)
  {

  }

  parentMethodToReciveData($event)
  {
    this.custObjInParent = $event;
    console.log(this.custObjInParent.custId+" "+this.custObjInParent.custName);
  }
  navigateToCustomer()
  {
      this.router.navigate(["/customer"]);
  }
  fetchCustomerDetails()
  {
      console.log(this.custId);
      this.router.navigate(["/customer",this.custId])
  }
}

