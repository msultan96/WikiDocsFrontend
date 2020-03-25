import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
const url = 'http://localhost:8080/DLM_Wiki/AuthAPI/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
	
	isLoggedIn = false;
	redirectUrl: string;

	constructor(private http: HttpClient) { }
	
	login(data:any): Observable<any> {
		return this.http.post<any>(url + 'login', data)
		.pipe(
			tap( _ => this.isLoggedIn = true),
		);
	}

	logout(): Observable<any> {
		return this.http.get<any>(url + 'logout')
			.pipe(
				tap( _ => this.isLoggedIn = false),
				catchError(this.handleError('logout', []))
			);
	}

	register(data:any):Observable<any> {
		return this.http.post<any>(url + 'register',data)
			.pipe(
        tap( _ => this.log('register'))
			);
		}

	private handleError<T>(operation = 'operation', result?: T){
		return (error: any): Observable<T> => {
			console.error(error); //log to console
			this.log(`${operation} failed: ${error.message}`);
			return of(result as T);
		}
	}

	private log(message:string){
		console.log(message);
	}
}
