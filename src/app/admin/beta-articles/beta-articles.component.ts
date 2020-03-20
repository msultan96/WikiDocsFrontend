import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/shared/models/article';
import { User } from 'src/app/shared/models/user';
import { ArticleService } from 'src/app/service/article.service';

@Component({
  selector: 'app-beta-articles',
  templateUrl: './beta-articles.component.html',
  styleUrls: ['./beta-articles.component.css']
})
export class BetaArticlesComponent implements OnInit {

  articles:Article[];
  loggedInUser:User;
	populated:boolean;
	loadingArticles:boolean;
	pageNumber:number=0;
	pageSize:number=5;

  constructor(private articleService:ArticleService) { }
  
  ngOnInit(): void {
    this.loggedInUser = JSON.parse(sessionStorage.getItem("user"));
    this.populateArticles();
  }

  populateArticles(){
    this.populated=false;
    this.articleService.getAllBetaArticles(this.pageNumber, this.pageSize).subscribe(
      response => {
        this.populated=true;  
				this.articles = response;
				this.pageNumber+=1
      });
	}
	
	onScroll(){
		this.loadingArticles=true;
		this.articleService.getAllBetaArticles(this.pageNumber, this.pageSize).subscribe(
		articles => {
			if(articles.length>0){
				this.articles = this.articles.concat(articles)
				this.pageNumber+=1;
			}
			this.loadingArticles=false;
		});
	}

  approveArticle(article:Article){
    this.articleService.approveArticle(article).subscribe(
      response => {
        this.populateArticles();
			});
	}

  rejectArticle(article:Article){
    this.articleService.rejectArticle(article).subscribe(
      response => {
        this.populateArticles();
			});
	}
	
}
