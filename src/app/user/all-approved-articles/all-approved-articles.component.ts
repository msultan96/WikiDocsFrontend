import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/service/article.service';
import { Article } from 'src/app/shared/models/article';
import { User } from 'src/app/shared/models/user';

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
        console.log(response);
      });
  }

  onScrollDown() {
    
  }
}