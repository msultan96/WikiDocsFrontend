import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, NgForm } from '@angular/forms';
import { LoginValidators } from '../shared/validators/login.validator';
import { User } from '../shared/models/user';
import { Role } from '../shared/models/role';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { TransferService } from '../service/transfer.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	faSpinner=faSpinner;
		
	loginForm: FormGroup;
	email: '';
	password: '';
	isLoading=false;

	errorMessage:string ="";
  successMessage = this.transferService.getData();

	constructor(
		private userService:UserService,
		private router:Router,
		private formBuilder:FormBuilder,
		private transferService:TransferService,
		private authService: AuthService) { }

  ngOnInit(): void {
		localStorage.clear();
		this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });

  }

  login(form: NgForm){
		this.isLoading=true;
    this.authService.login(form).subscribe(
      response => {
				if(response.token && response.username){
					this.isLoading = false;
					localStorage.setItem('token', response.token);
					localStorage.setItem('email', response.username);
					if(response.role[0].role === "USER"){
						this.router.navigate(['User/Articles/All/Approved'])
					}
					if(response.role[0].role === "ADMIN"){
						this.router.navigate(['Admin/Articles/All'])
					}
				}
      },
      error => {
				this.errorMessage = error.error.errorMessage;
        this.isLoading = false;
      });
  }

  navigateRegistration(){
    this.router.navigate(['/register']);
  }

}
