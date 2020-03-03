import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { Customer} from './customer'

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {

  constructor(private http:HttpClient) { }
  private url="http://localhost:8080/getAllCustomers/";

  getAllCustomers():Observable<Customer[]>
  {
      return this.http.get<Customer[]>(this.url);
  }
  getCustomerDetails(custId):Observable<Customer>
  {
    console.log('inside service')
    console.log("Custid in service"+custId);
   
    return this.http.get<Customer>("http://localhost:8080/getCustomerDetails/"+custId);
  }

  

}
