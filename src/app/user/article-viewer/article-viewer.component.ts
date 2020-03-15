import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/service/article.service';
import { IdParserService } from 'src/app/service/id-parser.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { User } from 'src/app/shared/models/user';
import { Article } from 'src/app/shared/models/article';
import { TransferService } from 'src/app/service/transfer.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-article-viewer',
  templateUrl: './article-viewer.component.html',
  styleUrls: ['./article-viewer.component.css']
})
export class ArticleViewerComponent implements OnInit {

  data;
  loggedInUser:User;
	articleLoaded:boolean;
  article:Article;
  etherPadId: string;
  padUrl:string;
  safeUrl:SafeResourceUrl;
  readOnly:boolean;

  constructor(private articleService:ArticleService, private idParserService:IdParserService,
              private sanitizer:DomSanitizer, private transferService:TransferService){}

  ngOnInit(): void {
    this.loggedInUser = JSON.parse(sessionStorage.getItem("user"));
    this.articleLoaded=false;
    this.data=this.transferService.getData();
    console.log(this.data);
		this.loadArticle();
  }

  loadArticle(){
    if(this.data){
      this.article = this.data;
      console.log(this.article);
      this.etherPadId = this.idParserService.parse(this.article.id);
      console.log(this.etherPadId);
      this.articleService.getEtherPadUrl(this.etherPadId).subscribe(
        response =>{
          let responseString:any = response;
          this.padUrl = responseString;
          this.padUrl+="userName=" + spaceConvertor(this.loggedInUser.name);
          this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.padUrl);
          console.log(this.padUrl);
          this.articleLoaded=true;
        });
      }
      else{
        console.log("no data");
      }
  }

  saveArticle(){
		console.log(this.etherPadId);
		this.articleService.saveArticle(this.etherPadId).subscribe(
			response => {
				console.log(response);
			});
  }
  
}

function spaceConvertor(name:String){
  return name.replace(" ", "%20");
}