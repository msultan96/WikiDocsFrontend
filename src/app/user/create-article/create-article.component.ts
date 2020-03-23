import { Component, ViewChild, ElementRef } from '@angular/core';
import { ArticleService } from 'src/app/service/article.service';
import { Article } from 'src/app/shared/models/article';
import { DomSanitizer } from '@angular/platform-browser';
import { IdParserService } from 'src/app/service/id-parser.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/service/user.service';


@Component( {
	selector: 'app-create-article',
	templateUrl: './create-article.component.html',
	styleUrls: [ './create-article.component.css' ]
} )

export class CreateArticleComponent {

	email:string;
	userName:string;
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
		private userService:UserService,
		private sanitizer:DomSanitizer,
		private idParserService:IdParserService){}

		

	ngOnInit(): void{
		this.articleCreated=false;
		this.articleNameForm = this.formBuilder.group({
			name:['', [Validators.required]]
		});
	}

	init() {
    this.email = localStorage.getItem('email');  		
		this.userService.getNameByEmail(this.email).subscribe(
			response =>{
				this.userName = response;
				this.createArticle();
			}
		)
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
		this.articleService.createNewArticle(this.email, articleName).subscribe(
			response => {
				console.log(articleName);
				this.article = response;
				this.etherPadId = this.idParserService.parse(this.article.id);
				this.padUrl+=this.etherPadId + "?";
				this.padUrl+="userName=" + spaceConvertor(this.userName);
				this.articleCreated=true;
				this.modalService.dismissAll();
				this.articleNameForm.patchValue({
					name: ''
				});
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

function spaceConvertor(name:String){
  return name.replace(" ", "%20");
}