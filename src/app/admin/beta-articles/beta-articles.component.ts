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

  constructor(private articleService:ArticleService) { }
  
  ngOnInit(): void {
    this.loggedInUser = JSON.parse(sessionStorage.getItem("user"));
    this.populateArticles();
  }

  populateArticles(){
    this.populated=false;
    this.articleService.getAllBetaArticlesAdmin().subscribe(
      response => {
        this.populated=true;  
        this.articles = response;
      });
  }

  approveArticle(article:Article){
    this.articleService.approveArticle(article).subscribe(
      response => {
        this.populateArticles();
      }
    )
  }

  rejectArticle(article:Article){
    this.articleService.rejectArticle(article).subscribe(
      response => {
        this.populateArticles();
      }
    )
  }
}
