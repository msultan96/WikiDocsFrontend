import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/service/article.service';
import { Article } from 'src/app/shared/models/article';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-all-approved-articles',
  templateUrl: './all-approved-articles.component.html',
  styleUrls: ['./all-approved-articles.component.css']
})
export class AllApprovedArticlesComponent implements OnInit {
  
  articles:Article[];
  allArticles:Article[];
  loggedInUser:User;
	populated:boolean;
	loadingArticles:boolean;
	pageNumber:number=0;
	pageSize:number=5;

  constructor(private articleService:ArticleService, private userService:UserService) { }
  
  ngOnInit(): void {
    this.loggedInUser = JSON.parse(sessionStorage.getItem("user"));
    this.populateArticles();
  }

  populateArticles(){
    this.populated=false;
    this.articleService.getAllApprovedArticles(this.pageNumber, this.pageSize).subscribe(
      response => {
        this.populated=true;
				this.articles = response;
				this.pageNumber+=1;
      });
	}
	
	onScroll(){
		this.loadingArticles=true;
		this.articleService.getAllApprovedArticles(this.pageNumber, this.pageSize).subscribe(
		articles => {
			if(articles.length>0){
				this.articles = this.articles.concat(articles)
				this.pageNumber+=1;
			}
			this.loadingArticles=false;
		});
	}

}