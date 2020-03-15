import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/shared/models/article';
import { User } from 'src/app/shared/models/user';
import { ArticleService } from 'src/app/service/article.service';

@Component({
  selector: 'app-approved-articles',
  templateUrl: './approved-articles.component.html',
  styleUrls: ['./approved-articles.component.css']
})
export class ApprovedArticlesComponent implements OnInit {

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
    this.articleService.getAllApprovedArticlesAdmin().subscribe(
      response => {
        this.populated=true;  
        this.articles = response;
      });
  }

}
