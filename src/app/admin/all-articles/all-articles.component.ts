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

  articles:Article[] = [];
  loggedInUser:User;
	approvedPopulated:boolean;
	betaPopulated:boolean;
	loadArticles:boolean;
	pageNumber:number=0;
	pageSize:number=5;
  
  constructor(private articleService:ArticleService) { }
  
  ngOnInit(): void {
    this.loggedInUser = JSON.parse(sessionStorage.getItem("user"));
    this.populateArticles();
  }

  populateArticles(){
    this.approvedPopulated=false;
//     this.articleService.getAllApprovedAndBetaArticles(this.pageNumber, this.pageSize).subscribe(
//       response => {
//         this.populated=true;  
//         let tempArticles:Article[] = response
//         this.articles = this.articles.concat(tempArticles);
//       });
	}
}
