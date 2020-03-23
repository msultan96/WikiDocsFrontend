import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/service/article.service';
import { Article } from 'src/app/shared/models/article';
import { User } from 'src/app/shared/models/user';
import { TransferService } from 'src/app/service/transfer.service';
import { Router } from '@angular/router';
import { IdParserService } from 'src/app/service/id-parser.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rejected-articles',
  templateUrl: './rejected-articles.component.html',
  styleUrls: ['./rejected-articles.component.css']
})
export class RejectedArticlesComponent implements OnInit {
  populated:boolean;
  articles:Article[];
	email:string;
	loadingArticles:boolean;
	pageNumber:number=0;
	pageSize:number=5;
	inviteCollaboratorForm:FormGroup;
	inviting:boolean;
	errorMessage:string;
	successMessage:string;
	
	constructor(
		private formBuilder:FormBuilder,
		private articleService:ArticleService,
		private transferService:TransferService,
		private modalService:NgbModal, 
		private router:Router,
		private idParserService:IdParserService) { }

  ngOnInit(): void {
    this.email = localStorage.getItem('email');    
		this.populateArticles();
		this.inviteCollaboratorForm = this.formBuilder.group({
			articleId:[''],
			email:['']
		});
  }

  populateArticles(){
    this.populated=false;
    this.articleService.getAllRejectedArticlesByEmail(this.email, this.pageNumber, this.pageSize).subscribe(
      response => {
          this.populated=true;
					this.articles = response;
					this.pageNumber+=1;
      });
  }

	onScroll(){
		this.loadingArticles=true;
		this.articleService.getAllRejectedArticlesByEmail(this.email, this.pageNumber, this.pageSize).subscribe(
		articles => {
			if(articles.length>0){
				this.articles = this.articles.concat(articles)
				this.pageNumber+=1;
			}
			this.loadingArticles=false;
		});
	}

	submitArticle(article:Article){
		let parsedId = this.idParserService.parse(article.id);
    this.articleService.submitArticleForApproval(parsedId).subscribe(
      response => {
				this.articles = this.articles.filter((item) => item != article);
      });
  }

  viewArticle(article:Article){
    this.transferService.setData(article);
    this.router.navigate(['User/Articles/Your/Viewing']);
	}
	
	showInviteModal(targetModal, article:Article) {
		let parsedId = this.idParserService.parse(article.id);
		this.modalService.open(targetModal, {
		 centered: true,
		 backdrop: 'static'
		});
	 
		this.inviteCollaboratorForm.patchValue({
			articleId: parsedId,
		 	email: ''
		});
	 }

	inviteSubmit(){
		this.errorMessage = '';
		this.successMessage = '';
		let articleId = this.inviteCollaboratorForm.get("articleId").value;
		let email = this.inviteCollaboratorForm.get("email").value;
		this.inviting=true;
		this.articleService.inviteUserToCollaborateByEmail(email, articleId).subscribe(
			response =>{
				let fullName = response;
				this.successMessage = fullName + " has been successfully invited to collaborate";
				this.inviting=false;
				this.inviteCollaboratorForm.patchValue({
					email: ''
				})
			},
			error => {
				this.errorMessage = error;
				this.inviting=false;
			}
		)
	 }

	 closeInviteModal(){
		this.errorMessage='';
		this.successMessage='';
		this.inviting=false;
		this.modalService.dismissAll();
 }

}
