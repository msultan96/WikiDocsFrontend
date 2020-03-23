import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/service/article.service';
import { IdParserService } from 'src/app/service/id-parser.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { User } from 'src/app/shared/models/user';
import { Article } from 'src/app/shared/models/article';
import { TransferService } from 'src/app/service/transfer.service';
import { Status } from 'src/app/shared/models/status';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-viewer',
  templateUrl: './article-viewer.component.html',
  styleUrls: ['./article-viewer.component.css']
})
export class ArticleViewerComponent implements OnInit {

  data;
	email:string;
	userName:string;

	articleLoaded:boolean;
  article:Article;
  etherPadId: string;
  padUrl:string;
  safeUrl:SafeResourceUrl;
  readOnly:boolean=false;

  constructor(
		private articleService:ArticleService,
		private userService:UserService,
		private idParserService:IdParserService,
		private sanitizer:DomSanitizer,
		private transferService:TransferService,
		private router:Router){}

  ngOnInit(): void {
    this.email = localStorage.getItem('email');
    this.articleLoaded=false;
    this.readOnly=false;
		this.data=this.transferService.getData();
		
		this.init(this.email);
		
	}
	
	init(email:string) {
		this.userService.getNameByEmail(email).subscribe(
			response =>{
				this.userName = response;
				this.loadArticle();
			}
		)
	}

  loadArticle(){
    if(this.data){
      this.article = this.data;
      if(this.article.status==Status.APPROVED||this.article.status==Status.BETA||this.article.status==Status.DISCARDED){
        this.readOnly=true;
      }
      this.etherPadId = this.idParserService.parse(this.article.id);
      this.articleService.getEtherPadUrl(this.etherPadId).subscribe(
        response =>{
          let responseString:any = response;
          this.padUrl = responseString;
          this.padUrl+="userName=" + spaceConvertor(this.userName);
          this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.padUrl);
          this.articleLoaded=true;
        });
      }
      else{
        this.router.navigate(['/error']);
      }
  }

  saveArticle(){
		this.articleService.saveArticle(this.etherPadId).subscribe(
			response => {
				console.log(response);
			});
  }
  
}

function spaceConvertor(name:String){
  return name.replace(" ", "%20");
}