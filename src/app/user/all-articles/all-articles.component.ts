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

  articles:Article[];
  loggedInUser:User;
  populated:Boolean;


  constructor(private articleService:ArticleService) { }
  
  ngOnInit(): void {
    console.log("What")
    this.loggedInUser = JSON.parse(sessionStorage.getItem("user"));
    this.populateArticles();
  }

  populateArticles(){
    this.populated=false;
    this.articleService.getAllArticles(this.loggedInUser.email).subscribe(
      response => {
          this.articles = response;
          this.populated=true;
      });
  }

}
