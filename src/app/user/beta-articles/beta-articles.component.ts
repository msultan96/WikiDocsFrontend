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
  constructor(private articleService:ArticleService) { }

  ngOnInit(): void {
    this.loggedInUser = JSON.parse(sessionStorage.getItem("user"));
    this.populateArticles();
  }

  populateArticles(){
    this.populated=false;
    this.articleService.getAllBetaArticles(this.loggedInUser.email).subscribe(
      response => {
          console.log(response);
          this.articles = response;
          this.populated=true;
      });
  }

}
