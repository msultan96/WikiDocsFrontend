import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/shared/models/article';
import { User } from 'src/app/shared/models/user';
import { ArticleService } from 'src/app/service/article.service';

@Component({
  selector: 'app-all-articles',
  templateUrl: './all-articles.component.html',
  styleUrls: ['./all-articles.component.css']
})

export class AllArticlesComponent implements OnInit {

  articles:Article[] = null;
  email:string;
  populated:boolean;
  loadingArticles:boolean;
  pageNumber:number = 0;
  pageSize:number = 5;

  constructor(private articleService:ArticleService) { }
  
  ngOnInit(): void {
    this.email = localStorage.getItem('email');
    this.populateArticles();
  }

  populateArticles(){
    this.populated=false;
    this.articleService.getAllArticlesByEmail(this.email, this.pageNumber, this.pageSize).subscribe(
      articles => {
				this.articles = articles;
				this.populated=true;
				this.pageNumber+=1;
      });
  }

	onScroll(){
		this.loadingArticles=true;
		this.articleService.getAllArticlesByEmail(this.email, this.pageNumber, this.pageSize).subscribe(
		articles => {
			if(articles.length>0){
				this.articles = this.articles.concat(articles)
				this.pageNumber+=1;
			}
			this.loadingArticles=false;
		});
	}

	
}
