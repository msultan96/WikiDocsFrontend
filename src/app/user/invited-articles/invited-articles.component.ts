import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/shared/models/article';
import { User } from 'src/app/shared/models/user';
import { ArticleService } from 'src/app/service/article.service';
import { TransferService } from 'src/app/service/transfer.service';
import { Router } from '@angular/router';
import { IdParserService } from 'src/app/service/id-parser.service';

@Component({
  selector: 'app-invited-articles',
  templateUrl: './invited-articles.component.html',
  styleUrls: ['./invited-articles.component.css']
})
export class InvitedArticlesComponent implements OnInit {

	populated:boolean;
  articles:Article[];
  email:string;
  loadingArticles:boolean;
  pageNumber:number = 0;
	pageSize:number = 5;
	
	constructor(private router:Router, private articleService:ArticleService,
		private transferService:TransferService, private idParserService:IdParserService) { }

  ngOnInit(): void {
    this.email = localStorage.getItem('email');  		
		this.populateArticles();
	}
	
	populateArticles(){
    this.populated=false;
    this.articleService.getAllInvitedArticlesByEmail(this.email, this.pageNumber, this.pageSize).subscribe(
      response => {
          this.populated=true;
					this.articles = response;
					this.pageNumber+=1;
      });
	}
	
	onScroll(){
		this.loadingArticles=true;
		this.articleService.getAllInvitedArticlesByEmail(this.email, this.pageNumber, this.pageSize).subscribe(
		response => {
			if(response.length>0){
				this.articles = this.articles.concat(response)
				this.pageNumber+=1;
			}
			this.loadingArticles=false;
		});
	}

	viewArticle(article:Article){
    this.transferService.setData(article);
    this.router.navigate(['User/Articles/Your/Viewing']);
  }

}
