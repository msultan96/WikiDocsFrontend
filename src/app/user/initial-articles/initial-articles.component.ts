import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/service/article.service';
import { Article } from 'src/app/shared/models/article';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-initial-articles',
  templateUrl: './initial-articles.component.html',
  styleUrls: ['./initial-articles.component.css']
})
export class InitialArticlesComponent implements OnInit {
  populated:boolean;
  articles:Article[];
  loggedInUser:User;
  constructor(private articleService:ArticleService) { }

  ngOnInit(): void {
    this.loggedInUser = JSON.parse(sessionStorage.getItem("user"));
    this.populateArticles();
  }

  populateArticles(){
    this.populated=false;
    this.articleService.getAllInitialArticles(this.loggedInUser.email).subscribe(
      response => {
          console.log(response);
          this.populated=true;
          this.articles = response;
      });
  }

  submitArticle(article:Article){
    this.articleService.submitArticleForApproval(article).subscribe(
      response => {
          console.log(response);
          this.populateArticles();
      });
  }
}
