import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/service/article.service';
import { Article } from 'src/app/shared/models/article';
import { User } from 'src/app/shared/models/user';
import { TransferService } from 'src/app/service/transfer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-discarded-articles',
  templateUrl: './discarded-articles.component.html',
  styleUrls: ['./discarded-articles.component.css']
})
export class DiscardedArticlesComponent implements OnInit {
  populated:boolean;
  articles:Article[];
	email:string;
	loadingArticles:boolean;
	pageNumber:number = 0;
	pageSize:number = 5;
	
  constructor(private articleService:ArticleService, private transferService:TransferService,
              private router:Router) { }

  ngOnInit(): void {
    this.email = localStorage.getItem('email');  		
    this.populateArticles();
  }

  populateArticles(){
    this.populated=false;
    this.articleService.getAllDiscardedArticlesByEmail(this.email, this.pageNumber, this.pageSize).subscribe(
      response => {
          this.populated=true;
					this.articles = response;
					this.pageNumber+=1;
      });
  }

  viewArticle(article:Article){
    this.transferService.setData(article);
    this.router.navigate(['User/Articles/Your/Viewing']);
	}
	
	onScroll(){
		this.loadingArticles=true;
		this.articleService.getAllDiscardedArticlesByEmail(this.email, this.pageNumber, this.pageSize).subscribe(
		articles => {
			if(articles.length>0){
				this.articles = this.articles.concat(articles)
				this.pageNumber+=1;
			}
			this.loadingArticles=false;
		});
	}

}
