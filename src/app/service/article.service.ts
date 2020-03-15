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

  getAllArticles(email: string): Observable<Article[]> {
    let url: string = environment.articleAPIUrl + "/getAllArticlesByEmail/" + email + '/';
    return this.http.get<Article[]>(url)
        .pipe(catchError(this.handleError));
  }

  getAllApprovedArticles(email: string): Observable<Article[]> {
    let url: string = environment.articleAPIUrl + "/getAllApprovedArticlesByEmail/" + email + '/';
    return this.http.get<Article[]>(url)
        .pipe(catchError(this.handleError));
  }

  getAllBetaArticles(email: string): Observable<Article[]> {
    let url: string = environment.articleAPIUrl + "/getAllBetaArticlesByEmail/" + email + '/';
    return this.http.get<Article[]>(url)
        .pipe(catchError(this.handleError));
  }

  getAllInitialArticles(email: string): Observable<Article[]> {
    let url: string = environment.articleAPIUrl + "/getAllInitialArticlesByEmail/" + email + '/';
    return this.http.get<Article[]>(url)
        .pipe(catchError(this.handleError));
  }

  getAllRejectedArticles(email: string): Observable<Article[]> {
    let url: string = environment.articleAPIUrl + "/getAllRejectedArticlesByEmail/" + email + '/';
    return this.http.get<Article[]>(url)
        .pipe(catchError(this.handleError));
  }

  getAllDiscardedArticles(email: string): Observable<Article[]> {
    let url: string = environment.articleAPIUrl + "/getAllDiscardedArticlesByEmail/" + email + '/';
    return this.http.get<Article[]>(url)
        .pipe(catchError(this.handleError));
  }

  submitArticleForApproval(article: Article): Observable<Article> {
    let url: string = environment.articleAPIUrl + "/submitArticleForApproval";
    return this.http.post<Article>(url, article, {headers:this.headers})
        .pipe(catchError(this.handleError));
  }

  getAllApprovedArticlesAdmin(): Observable<Article[]> {
    let url: string = environment.articleAPIUrl + "/getApprovedArticles/";
    return this.http.get<Article[]>(url)
        .pipe(catchError(this.handleError));
  }

  getAllBetaArticlesAdmin(): Observable<Article[]> {
    let url: string = environment.articleAPIUrl + "/getBetaArticles/";
    return this.http.get<Article[]>(url)
        .pipe(catchError(this.handleError));
  }

  approveArticle(article: Article): Observable<Article> {
    let url: string = environment.articleAPIUrl + "/approveArticle";
    return this.http.post<Article>(url, article, {headers:this.headers})
        .pipe(catchError(this.handleError));
  }

  rejectArticle(article: Article): Observable<Article> {
    let url: string = environment.articleAPIUrl + "/rejectArticle";
    return this.http.post<Article>(url, article, {headers:this.headers})
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

  saveArticle(etherPadId:String): Observable<Article>{
      let url: string = environment.articleAPIUrl + "/saveArticle";
      return this.http.post<Article>(url, etherPadId, {headers:this.headers})
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
