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
  loggedInUser:User;
  constructor(private articleService:ArticleService, private transferService:TransferService,
              private router:Router) { }

  ngOnInit(): void {
    this.loggedInUser = JSON.parse(sessionStorage.getItem("user"));
    this.populateArticles();
  }

  populateArticles(){
    this.populated=false;
    this.articleService.getAllDiscardedArticles(this.loggedInUser.email).subscribe(
      response => {
          this.populated=true;
          this.articles = response;
      });
  }

  viewArticle(article:Article){
    this.transferService.setData(article);
    this.router.navigate(['User/Articles/Your/Viewing']);
  }

}
