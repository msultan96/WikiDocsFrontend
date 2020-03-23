import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, NgForm } from '@angular/forms';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { TransferService } from '../service/transfer.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  errorMessage:string;
  registrationInProgress:boolean;
  registerForm: FormGroup;
  user: User;

  constructor(
		private authService:AuthService,
		private router:Router,
		private formBuilder:FormBuilder,
    private transferService:TransferService) { }

  ngOnInit(): void {
		this.registrationInProgress=false;
		
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  register(form: NgForm){
    this.registrationInProgress=true;
    this.authService.register(form).subscribe(
      response =>{
				console.log(response);
				this.registrationInProgress=false;

        // this.registrationInProgress=false;
        // this.transferService.setData("You've successfully registered!");
        // this.router.navigate(['/login']);
      },
      error => {
        if(error == "No message available"){
          this.errorMessage="Something went wrong..."
        }
        else{
          this.errorMessage = error;
        }
        this.registrationInProgress = false;
      });
  }

  navigateLogin(){
    this.router.navigate(['/login']);
  }
}
