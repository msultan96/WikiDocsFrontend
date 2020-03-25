import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from "../../environments/environment";
import { Article } from '../shared/models/article';
import { User } from '../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private headers = new HttpHeaders({'Content-Type': 'application/json' });
	constructor(private http:HttpClient) { }
	
	getAllApprovedArticles(pageNumber:number, pageSize:number): Observable<Article[]> {
		let pathVariables = pageNumber + "/" + pageSize + "/";
    let url: string = environment.articleAPIUrl + "/getAllApprovedArticles/" + pathVariables;
		return this.http.get<Article[]>(url)
        .pipe(
					tap(_ => this.log('fetched all approved articles')),
					catchError(this.handleError('getApprovedArticles', []))
				);
  }

  getAllBetaArticles(pageNumber:number, pageSize:number): Observable<Article[]> {
		let pathVariables = pageNumber + "/" + pageSize + "/";
    let url: string = environment.articleAPIUrl + "/getAllBetaArticles/" + pathVariables;
    return this.http.get<Article[]>(url)
        .pipe(
					tap(_ => this.log('fetched all beta articles')),
					catchError(this.handleError('getAllBetaArticles', []))
				);
  }

	getAllArticlesByEmail(email: string, pageNumber:number, pageSize:number): Observable<Article[]> {
		let pathVariables = email + "/" + pageNumber + "/" + pageSize + "/";
		let url: string = environment.articleAPIUrl + "/getAllArticlesByEmail/" + pathVariables;
		return this.http.get<Article[]>(url)
			.pipe(
				tap(_ => this.log(`fetched all articles by ${email}`)),
				catchError(this.handleError('getAllArticlesByEmail', []))
			);
	}

  getAllApprovedArticlesByEmail(email: string, pageNumber:number, pageSize:number): Observable<Article[]> {
		let pathVariables = email + "/" + pageNumber + "/" + pageSize + "/";
    let url: string = environment.articleAPIUrl + "/getAllApprovedArticlesByEmail/" + pathVariables
    return this.http.get<Article[]>(url)
        .pipe(
					tap(_ => this.log(`fetched all approved articles by ${email}`)),
					catchError(this.handleError('getAllApprovedArticlesByEmail', []))
					
				);
  }

  getAllBetaArticlesByEmail(email: string, pageNumber:number, pageSize:number): Observable<Article[]> {
		let pathVariables = email + "/" + pageNumber + "/" + pageSize + "/";
    let url: string = environment.articleAPIUrl + "/getAllBetaArticlesByEmail/" + pathVariables
    return this.http.get<Article[]>(url)
        .pipe(
					tap(_ => this.log(`fetched all beta articles by ${email}`)),
					catchError(this.handleError('getAllBetaArticlesByEmail', []))
				);
  }

  getAllInitialArticlesByEmail(email: string, pageNumber:number, pageSize:number): Observable<Article[]> {
		let pathVariables = email + "/" + pageNumber + "/" + pageSize + "/";
    let url: string = environment.articleAPIUrl + "/getAllInitialArticlesByEmail/" + pathVariables;
    return this.http.get<Article[]>(url)
				.pipe(
					tap(_ => this.log(`fetched all initial articles by ${email}`)),
					catchError(this.handleError('getAllInitialArticlesByEmail', []))
				);
  }

  getAllRejectedArticlesByEmail(email: string, pageNumber:number, pageSize:number): Observable<Article[]> {
		let pathVariables = email + "/" + pageNumber + "/" + pageSize + "/";
    let url: string = environment.articleAPIUrl + "/getAllRejectedArticlesByEmail/" + pathVariables
    return this.http.get<Article[]>(url)
        .pipe(
					tap(_ => this.log(`fetched all rejected articles by ${email}`)),
					catchError(this.handleError('getAllRejectedArticlesByEmail', []))
				);
  }

  getAllDiscardedArticlesByEmail(email: string, pageNumber:number, pageSize:number): Observable<Article[]> {
		let pathVariables = email + "/" + pageNumber + "/" + pageSize + "/";
    let url: string = environment.articleAPIUrl + "/getAllDiscardedArticlesByEmail/" + pathVariables
    return this.http.get<Article[]>(url)
        .pipe(
					tap(_ => this.log(`fetched all discarded articles by ${email}`)),
					catchError(this.handleError('getAllDiscardedArticlesByEmail', []))
				);
  }

	getAllInvitedArticlesByEmail(email: string, pageNumber:number, pageSize:number): Observable<Article[]> {
		let pathVariables = email + "/" + pageNumber + "/" + pageSize + "/";
    let url: string = environment.articleAPIUrl + "/getAllInvitedArticlesByEmail/" + pathVariables
    return this.http.get<Article[]>(url)
        .pipe(
					tap(_ => this.log(`fetched all invited articles for ${email}`)),
					catchError(this.handleError('getAllInvitedArticlesByEmail', []))
				);
  }
	submitArticleForApproval(articleId: string): Observable<any> {
    let url: string = environment.articleAPIUrl + "/submitArticleForApproval";
    return this.http.post<Article>(url, articleId, {headers:this.headers})
        .pipe(
					tap(_ => this.log(`submitted article ${articleId}`)),
					catchError(this.handleError('submitArticleForApproval', []))
			);
	}

  approveArticle(articleId: string): Observable<any> {
    let url: string = environment.articleAPIUrl + "/approveArticle/" + articleId;
    return this.http.get<Article>(url, {headers:this.headers})
        .pipe(
					tap(_ => this.log(`approved article ${articleId}`)),
					catchError(this.handleError('approveArticle', []))
					);
  }

  rejectArticle(articleId: string): Observable<any> {
    let url: string = environment.articleAPIUrl + "/rejectArticle/" + articleId;
    return this.http.get<Article>(url, {headers:this.headers})
        .pipe(
					tap(_ => this.log(`rejected article ${articleId}`)),
					catchError(this.handleError('rejectArticle', []))
			);
  }

  getArticleById(articleId: string): Observable<any> {
    let url: string = environment.articleAPIUrl + "/getArticleById";
    return this.http.post<Article>(url, articleId, {headers:this.headers})
        .pipe(
					tap(_ => this.log(`fetched article ${articleId}`)),
					catchError(this.handleError('getArticleById', []))
			);
  }

  createNewArticle(email:string, articleName:string): Observable<any> {
    let url: string = environment.articleAPIUrl + "/createNewArticle"
    const object = {"email":email, "articleName":articleName};
    return this.http.post<Article>(url,object,{headers:this.headers})
        .pipe(
					tap(_ => this.log(`created new article for ${email}`)),
					catchError(this.handleError('createNewArticle', []))
			);
  }

  saveArticle(etherPadId:string): Observable<any>{
      let url: string = environment.articleAPIUrl + "/saveArticle";
      return this.http.post<Article>(url, etherPadId, {headers:this.headers})
      .pipe(
				tap(_ => this.log(`saved article ${etherPadId}`)),
				catchError(this.handleError('saveArticle', []))
			);
  }

  getEtherPadUrl(articleId:string): Observable<any>{
    let url: string = environment.articleAPIUrl + "/getEtherPadUrl";
    return this.http.post<string>(url, articleId, {responseType:'text' as 'json' })
      .pipe(
				tap(_ => this.log(`fetched url for article ${articleId}`)),
				catchError(this.handleError('getEtherPadUrl', []))
			);
	}
	
	inviteUserToCollaborateByEmail(email:string, articleId:string): Observable<any>{
		let url: string = environment.articleAPIUrl + "/inviteUserToCollaborateByEmail/";
		const object = {"email":email, "articleId":articleId};
    return this.http.post<string>(url, object,{responseType:'text' as 'json' })
      .pipe(
				tap(_ => this.log(`invited ${email} to collab on article ${articleId}`)),
				catchError(this.handleError('inviteUserToCollaborateByEmail', []))
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

// private handleError(err: HttpErrorResponse) {
// 		let errMsg: string = '';
//     if (err.error instanceof Error) {
//         errMsg = err.error.message;
//     }
//     else if (typeof err.error === 'string') {
//         errMsg = JSON.parse(err.error).errorMessage;
//     }
//     else {
//         if (err.status == 0) {
//             errMsg = "A connection to the back end could not be established.";
//         } else {
//             errMsg = err.error.errorMessage;
//         }
//     }
//     return throwError(errMsg);
// }

}
