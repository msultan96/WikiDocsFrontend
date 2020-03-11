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
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http:HttpClient) { }

  login(user:User): Observable<User> {
    let url: string = environment.userAPIUrl + "/login"
    return this.http.post<User>(url,user,{headers:this.headers})
        .pipe(catchError(this.handleError));
  }

  createNewArticle(email:string, channelId:string): Observable<Article> {
    let url: string = environment.userAPIUrl + "/createNewArticle"
    const object = {"email":email,"channelId":channelId};
    console.log(object)
    return this.http.post<Article>(url,object,{headers:this.headers})
        .pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err);
    let errMsg: string = '';
    if (err.error instanceof Error) {
        errMsg = err.error.message;
        console.log(errMsg)
    }
    else if (typeof err.error === 'string') {
        errMsg = JSON.parse(err.error).message
    }
    else {
        if (err.status == 0) {
            errMsg = "A connection to back end can not be established.";
        } else {
            errMsg = err.error.message;
            console.log(errMsg);
        }
    }
    return throwError(errMsg);
}

}
