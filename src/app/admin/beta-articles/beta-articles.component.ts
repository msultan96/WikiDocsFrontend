import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/shared/models/article';
import { User } from 'src/app/shared/models/user';
import { ArticleService } from 'src/app/service/article.service';
import { IdParserService } from 'src/app/service/id-parser.service';

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

  constructor(private articleService:ArticleService, private idParserService:IdParserService) { }
  
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
		let parsedId = this.idParserService.parse(article.id);
    this.articleService.approveArticle(parsedId).subscribe(
      response => {
        this.articles = this.articles.filter((item) => item != article);
			});
	}

  rejectArticle(article:Article){
		let parsedId = this.idParserService.parse(article.id);
    this.articleService.rejectArticle(parsedId).subscribe(
      response => {
        this.articles = this.articles.filter((item) => item != article);
			});
	}
	
}
