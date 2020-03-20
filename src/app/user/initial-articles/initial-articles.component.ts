import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/service/article.service';
import { Article } from 'src/app/shared/models/article';
import { User } from 'src/app/shared/models/user';
import { Router } from '@angular/router';
import { TransferService } from 'src/app/service/transfer.service';

@Component({
  selector: 'app-initial-articles',
  templateUrl: './initial-articles.component.html',
  styleUrls: ['./initial-articles.component.css']
})
export class InitialArticlesComponent implements OnInit {
  populated:boolean;
  articles:Article[];
  loggedInUser:User;
  loadingArticles:boolean;
  pageNumber:number = 0;
  pageSize:number = 5;

  constructor(private router:Router, private articleService:ArticleService, 
    private transferService:TransferService) { }

  ngOnInit(): void {
    this.loggedInUser = JSON.parse(sessionStorage.getItem("user"));
    this.populateArticles();
  }

  populateArticles(){
    this.populated=false;
    this.articleService.getAllInitialArticlesByEmail(this.loggedInUser.email, this.pageNumber, this.pageSize).subscribe(
      response => {
          this.populated=true;
					this.articles = response;
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

	submitArticle(article:Article){
    this.articleService.submitArticleForApproval(article).subscribe(
      response => {
          // this.articles = this.articles.splice(article);
      });
  }

  viewArticle(article:Article){
    this.transferService.setData(article);
    this.router.navigate(['User/Articles/Your/Viewing']);
  }
}
