import { Component, ViewChild, ElementRef } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { ArticleService } from 'src/app/service/article.service';
import { Article } from 'src/app/shared/models/article';
import { DomSanitizer } from '@angular/platform-browser';
import { IdParserService } from 'src/app/service/id-parser.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';


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

	articleNameForm:FormGroup;
	errorMessage:string;
	successMessage:string;
	

	@ViewChild('openModal') openModal:ElementRef;
	@ViewChild('articleNameModal') articleNameModal:ElementRef;

	constructor(
		private formBuilder:FormBuilder,
		private modalService:NgbModal, 
		private articleService:ArticleService,
		private sanitizer:DomSanitizer,
		private idParserService:IdParserService){}

		

	ngOnInit(): void{
		this.loggedInUser = JSON.parse(sessionStorage.getItem("user"));
		this.articleNameForm = this.formBuilder.group({
			name:['']
		});

	}

	ngAfterViewInit(){
		let ngbModalOptions: NgbModalOptions = {
      backdrop : 'static',
      keyboard : false
};
		this.modalService.open(this.articleNameModal, ngbModalOptions);
	}

	createArticle(){
		this.articleCreated=false;
		let articleName = this.articleNameForm.get("name").value;
		this.articleService.createNewArticle(this.loggedInUser.email, articleName).subscribe(
			response => {
				this.article = response;
				this.etherPadId = this.idParserService.parse(this.article.id);
				this.padUrl+=this.etherPadId + "?";
				this.padUrl+="userName=" + this.loggedInUser.name;
				this.articleCreated=true;
				this.modalService.dismissAll();
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