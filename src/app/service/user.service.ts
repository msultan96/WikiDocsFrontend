import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from "../../environments/environment";
import { Article } from '../shared/models/article';
import { User } from '../shared/models/user';

@Injectable({
    providedIn: 'root'
})

export class UserService {
    private headers = new HttpHeaders({'Content-Type': 'application/json' });
    constructor(private http:HttpClient) { }

    getNameByEmail(email:string): Observable<string>{
		let url: string = environment.userAPIUrl + "/getNameByEmail/"+email;
		return this.http.get<string>(url, {responseType:'text' as 'json' })
		  .pipe(catchError(this.handleError));
	  }

    private handleError(httpErrorResponse: HttpErrorResponse) {
        let errMsg: string = '';
        // console.log(httpErrorResponse.error.errorMessage);
        if (httpErrorResponse.error instanceof Error) {
            errMsg = httpErrorResponse.error.message;
            // console.log(errMsg)
        }
        else if (typeof httpErrorResponse.error === 'string') {
            errMsg = JSON.parse(httpErrorResponse.error).message
        }
        else {
            if (httpErrorResponse.status == 0) {
                errMsg = "A connection to back end can not be established.";
            } else {
                errMsg = httpErrorResponse.error.errorMessage;
                // console.log(errMsg);
            }
        }
        return throwError(errMsg);
    }
}
