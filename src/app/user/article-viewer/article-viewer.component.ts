import { Component, OnInit } from '@angular/core';
import { TransferService } from 'src/app/service/transfer.service';
import { DomSanitizer } from '@angular/platform-browser';
import { IdParserService } from 'src/app/service/id-parser.service';
import { ArticleService } from 'src/app/service/article.service';
import { User } from 'src/app/shared/models/user';
import { Article } from 'src/app/shared/models/article';

@Component({
  selector: 'app-article-viewer',
  templateUrl: './article-viewer.component.html',
  styleUrls: ['./article-viewer.component.css']
})
export class ArticleViewerComponent implements OnInit {

  data = this.transferService.getData();
  loggedInUser:User;
	articleCreated:boolean;
  article:Article;
	padUrl:String = "http://localhost:9001/p/"
	etherPadId: String;

  constructor(private transferService:TransferService, private sanitizer:DomSanitizer,
              private idParserService:IdParserService, private articleService:ArticleService) {
  }

  ngOnInit() {
    this.loggedInUser = JSON.parse(sessionStorage.getItem("user"));
    this.articleCreated=false;
		this.loadArticle();
  }

  loadArticle(){
    if(this.data){
      this.article = this.data;
      let id = this.idParserService.parse(this.article.id);
      this.articleService.getArticleById(id).subscribe(
        response =>{
          this.padUrl+=id + "?";
          this.padUrl+="userName=" + this.loggedInUser.name;
          this.articleCreated=true;
        })
    }
    else{

    }
  }

}
