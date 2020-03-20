import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/service/article.service';
import { Article } from 'src/app/shared/models/article';
import { User } from 'src/app/shared/models/user';
import { TransferService } from 'src/app/service/transfer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rejected-articles',
  templateUrl: './rejected-articles.component.html',
  styleUrls: ['./rejected-articles.component.css']
})
export class RejectedArticlesComponent implements OnInit {
  populated:boolean;
  articles:Article[];
	loggedInUser:User;
	loadingArticles:boolean;
	pageNumber:number=0;
	pageSize:number=5;
	
  constructor(private articleService:ArticleService, private transferService:TransferService,
              private router:Router) { }

  ngOnInit(): void {
    this.loggedInUser = JSON.parse(sessionStorage.getItem("user"));
    this.populateArticles();
  }

  populateArticles(){
    this.populated=false;
    this.articleService.getAllRejectedArticlesByEmail(this.loggedInUser.email, this.pageNumber, this.pageSize).subscribe(
      response => {
          this.populated=true;
					this.articles = response;
					this.pageNumber+=1;
      });
  }

	onScroll(){
		this.loadingArticles=true;
		this.articleService.getAllRejectedArticlesByEmail(this.loggedInUser.email, this.pageNumber, this.pageSize).subscribe(
		articles => {
			if(articles.length>0){
				this.articles = this.articles.concat(articles)
				this.pageNumber+=1;
			}
			this.loadingArticles=false;
		});
	}

	submitArticle(article:Article){
    console.log("Article submitted");
    this.articleService.submitArticleForApproval(article).subscribe(
      response => {
          console.log(response);
          this.populateArticles();
      });
  }

  viewArticle(article:Article){
    this.transferService.setData(article);
    this.router.navigate(['User/Articles/Your/Viewing']);
  }

}
