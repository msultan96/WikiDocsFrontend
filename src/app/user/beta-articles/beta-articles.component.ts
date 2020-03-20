import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/service/article.service';
import { Article } from 'src/app/shared/models/article';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-beta-articles',
  templateUrl: './beta-articles.component.html',
  styleUrls: ['./beta-articles.component.css']
})
export class BetaArticlesComponent implements OnInit {
  populated:boolean;
  articles:Article[];
	loggedInUser:User;
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
    this.articleService.getAllBetaArticlesByEmail(this.loggedInUser.email, this.pageNumber, this.pageSize).subscribe(
      response => {
          this.articles = response;
					this.populated=true;
					this.pageNumber+=1;
      });
  }

	onScroll(){
		this.loadingArticles=true;
		this.articleService.getAllBetaArticlesByEmail(this.loggedInUser.email, this.pageNumber, this.pageSize).subscribe(
		articles => {
			if(articles.length>0){
				this.articles = this.articles.concat(articles)
				this.pageNumber+=1;
			}
			this.loadingArticles=false;
		});
	}
}
