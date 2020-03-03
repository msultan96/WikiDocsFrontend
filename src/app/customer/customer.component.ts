import { Component, OnInit, Input, Output,EventEmitter, OnDestroy } from '@angular/core';
import {Customer} from './customer';
import { SalutationPipe } from './salutation.pipe';
import { FormBuilder, FormGroup,Validators, FormControl } from '../../../node_modules/@angular/forms';
import { CustomerserviceService } from './customerservice.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';



@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit,OnDestroy {
  custForm:FormGroup;

  constructor(private formBuilder:FormBuilder,private custService:CustomerserviceService,
    private activatedRoute:ActivatedRoute) 
  { 
    console.log("Constructor!");
  }
  parameterVal:string;
  customer:Customer;
  fetchCustomerDetails()
  {
    this.activatedRoute.paramMap.subscribe(
      params => this.parameterVal = params.get('id')
    )
    console.log('ParameterVal:'+this.parameterVal);

    this.custService.getCustomerDetails(this.parameterVal).subscribe(
        custObjFromWS => {this.customer=custObjFromWS;console.log(this.customer);},
        error => this.error = <any>error

    );
    


  }

  ngOnInit() 
  {
    //console.log("ngONINit")
   // this.fetchCustomerDetails();
    this.custForm = this.formBuilder.group(
      {
          custId:['',[Validators.required,Validators.maxLength(6)]],
          custName:['XXX',validateCustName],
          emailId:[''],
          dob:[''],
          address: this.formBuilder.group(
            {
              street:[''],
              city:['']
            }

          )
      }
    );
  }

 
  ngOnDestroy()
  {
    console.log("On Destroy");
    

  }
 // custObj:Customer = new Customer(1111,"John","John@gmail.com","11/20/2019");
  tableBgColor:string = "pink";
  tableColsSpan:number=4;
  tableStyleFontColor:string = "blue";
  username:string="James";
  custList:Customer[] = [
    new Customer(1111,"John","John@gmail.com","11/20/2019","M",123233.1234,0.005),
    new Customer(2222,"Nivia","Peter@gmail.com","10/20/2019","F",234324,10),
    new Customer(3333,"James","James@gmail.com","12/20/2019","M",324324,15)
  ];
  changeCustName()
  {
    //this.custObj.custName="Peter";
  }

  @Input()  
  childCustName:string;

  @Output()
  childCustObjForParent:EventEmitter<Customer> = new EventEmitter<Customer>();

  methodForSendingDataToParent(custObj:Customer)
  {
     this.childCustObjForParent.emit(custObj);
  }
  custIdForm:string;
  custNameForm:string;
  emailIdForm:string;
  dobForm:string;
  flag:boolean = false;
  isFine:boolean = false;
  custListFromService:Customer[];
  error:string;

  getAllCustomer()
  {
     this.custService.getAllCustomers().subscribe(
       custList => this.custListFromService = custList,
       error => this.error = <any> error
     )
     console.log(this.custListFromService);

  }


}
function validateCustName(custName:FormControl)
{
  let regExp=/^[A-Za-z ]+$/
 return  regExp.test(custName.value) ? null :
  {
    nameError:
    {
      errorMessage:'Customer Name is invalid!'
    }
  } 


}

