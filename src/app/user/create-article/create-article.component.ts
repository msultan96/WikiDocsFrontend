import { Component, ViewChild, ElementRef } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { ArticleService } from 'src/app/service/article.service';
import { Article } from 'src/app/shared/models/article';
import { DomSanitizer } from '@angular/platform-browser';
import { IdParserService } from 'src/app/service/id-parser.service';

@Component( {
	selector: 'app-create-article',
	templateUrl: './create-article.component.html',
	styleUrls: [ './create-article.component.css' ]
} )

export class CreateArticleComponent {

	loggedInUser:User;
	articleCreated:boolean;
	article:Article;
	padUrl:string = "http://localhost:9001/p/"
	etherPadId: string;


	constructor(private articleService:ArticleService, private sanitizer:DomSanitizer,
				private idParserService:IdParserService){}

	ngOnInit(): void{
		this.loggedInUser = JSON.parse(sessionStorage.getItem("user"));
		this.articleCreated=false;
		this.createArticle();
		
	}

	createArticle(){
		this.articleService.createNewArticle(this.loggedInUser.email).subscribe(
			response => {
				this.article = response;
				this.etherPadId = this.idParserService.parse(this.article.id);
				this.padUrl+=this.etherPadId + "?";
				this.padUrl+="userName=" + this.loggedInUser.name;
				this.articleCreated=true;
			});
	}

	saveArticle(){
		this.articleService.saveArticle(this.etherPadId).subscribe(
			response => {
				console.log(response);
			});
	}

	deleteArticle(){

	}

	
}