import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from "../../environments/environment";
import { Article } from '../shared/models/article';

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
        .pipe(catchError(this.handleError));
  }

  getAllBetaArticles(pageNumber:number, pageSize:number): Observable<Article[]> {
		let pathVariables = pageNumber + "/" + pageSize + "/";
    let url: string = environment.articleAPIUrl + "/getAllBetaArticles/" + pathVariables;
    return this.http.get<Article[]>(url)
        .pipe(catchError(this.handleError));
  }

	getAllArticlesByEmail(email: string, pageNumber:number, pageSize:number): Observable<Article[]> {
		let pathVariables = email + "/" + pageNumber + "/" + pageSize + "/";
		let url: string = environment.articleAPIUrl + "/getAllArticlesByEmail/" + pathVariables;
		return this.http.get<Article[]>(url)
			.pipe(catchError(this.handleError));
	}

  getAllApprovedArticlesByEmail(email: string, pageNumber:number, pageSize:number): Observable<Article[]> {
		let pathVariables = email + "/" + pageNumber + "/" + pageSize + "/";
    let url: string = environment.articleAPIUrl + "/getAllApprovedArticlesByEmail/" + pathVariables
    return this.http.get<Article[]>(url)
        .pipe(catchError(this.handleError));
  }

  getAllBetaArticlesByEmail(email: string, pageNumber:number, pageSize:number): Observable<Article[]> {
		let pathVariables = email + "/" + pageNumber + "/" + pageSize + "/";
    let url: string = environment.articleAPIUrl + "/getAllBetaArticlesByEmail/" + pathVariables
    return this.http.get<Article[]>(url)
        .pipe(catchError(this.handleError));
  }

  getAllInitialArticlesByEmail(email: string, pageNumber:number, pageSize:number): Observable<Article[]> {
		let pathVariables = email + "/" + pageNumber + "/" + pageSize + "/";
    let url: string = environment.articleAPIUrl + "/getAllInitialArticlesByEmail/" + pathVariables;
    return this.http.get<Article[]>(url)
        .pipe(catchError(this.handleError));
  }

  getAllRejectedArticlesByEmail(email: string, pageNumber:number, pageSize:number): Observable<Article[]> {
		let pathVariables = email + "/" + pageNumber + "/" + pageSize + "/";
    let url: string = environment.articleAPIUrl + "/getAllRejectedArticlesByEmail/" + pathVariables
    return this.http.get<Article[]>(url)
        .pipe(catchError(this.handleError));
  }

  getAllDiscardedArticlesByEmail(email: string, pageNumber:number, pageSize:number): Observable<Article[]> {
		let pathVariables = email + "/" + pageNumber + "/" + pageSize + "/";
    let url: string = environment.articleAPIUrl + "/getAllDiscardedArticlesByEmail/" + pathVariables
    return this.http.get<Article[]>(url)
        .pipe(catchError(this.handleError));
  }

	submitArticleForApproval(articleId: string): Observable<Article> {
    let url: string = environment.articleAPIUrl + "/submitArticleForApproval";
    return this.http.post<Article>(url, articleId, {headers:this.headers})
        .pipe(catchError(this.handleError));
	}

  approveArticle(articleId: string): Observable<Article> {
    let url: string = environment.articleAPIUrl + "/approveArticle";
    return this.http.post<Article>(url, articleId, {headers:this.headers})
        .pipe(catchError(this.handleError));
  }

  rejectArticle(articleId: string): Observable<Article> {
    let url: string = environment.articleAPIUrl + "/rejectArticle";
    return this.http.post<Article>(url, articleId, {headers:this.headers})
        .pipe(catchError(this.handleError));
  }

  getArticleById(articleId: string): Observable<Article> {
    let url: string = environment.articleAPIUrl + "/getArticleById";
    return this.http.post<Article>(url, articleId, {headers:this.headers})
        .pipe(catchError(this.handleError));
  }

  createNewArticle(email:string): Observable<Article> {
    let url: string = environment.articleAPIUrl + "/createNewArticle"
    const object = {"email":email};
    return this.http.post<Article>(url,object,{headers:this.headers})
        .pipe(catchError(this.handleError));
  }

  saveArticle(etherPadId:string): Observable<Article>{
      let url: string = environment.articleAPIUrl + "/saveArticle";
      return this.http.post<Article>(url, etherPadId, {headers:this.headers})
      .pipe(catchError(this.handleError));
  }

  getEtherPadUrl(articleId:string): Observable<string>{
    let url: string = environment.articleAPIUrl + "/getEtherPadUrl";
    return this.http.post<string>(url, articleId, {responseType:'text' as 'json' })
      .pipe(catchError(this.handleError));
  }


private handleError(err: HttpErrorResponse) {
    let errMsg: string = '';
    if (err.error instanceof Error) {
        errMsg = err.error.message;
    }
    else if (typeof err.error === 'string') {
        errMsg = JSON.parse(err.error).message
    }
    else {
        if (err.status == 0) {
            errMsg = "A connection to the back end could not be established.";
        } else {
            errMsg = err.error.message;
        }
    }
    return throwError(errMsg);
}

}
