import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/service/article.service';
import { Article } from 'src/app/shared/models/article';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-approved-articles',
  templateUrl: './approved-articles.component.html',
  styleUrls: ['./approved-articles.component.css']
})
export class ApprovedArticlesComponent implements OnInit {
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
    this.articleService.getAllApprovedArticlesByEmail(this.loggedInUser.email, this.pageNumber, this.pageSize).subscribe(
      response => {
          this.populated=true;
					this.articles=response;
					this.pageNumber+=1;
      });
	}
	
	onScroll(){
		this.loadingArticles=true;
		this.articleService.getAllInitialArticlesByEmail(this.loggedInUser.email, this.pageNumber, this.pageSize).subscribe(
		articles => {
			if(articles.length>0){
				this.articles = this.articles.concat(articles)
				this.pageNumber+=1;
			}
			this.loadingArticles=false;
		});
	}

}
