import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { TransferService } from '../service/transfer.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  errorMessage:string;
  registrationInProgress:boolean;
  signUpForm: FormGroup;
  user: User;

  constructor(private userService:UserService, private router:Router, private formBuilder:FormBuilder,
              private transferService:TransferService) { }

  ngOnInit(): void {
    this.registrationInProgress=false;
    this.user = new User();
    this.createSignUpForm();
  }

  createSignUpForm(){
    this.signUpForm = this.formBuilder.group({
      name: [this.user.name, [Validators.required], null],
      email: [this.user.email, [Validators.required], null],
      password: [this.user.password, [Validators.required], null],
      confirmPassword: [null, [Validators.required], null]
    });
  }

  register(){
    this.registrationInProgress=true;
    this.user = this.signUpForm.value as User;
    this.userService.register(this.user).subscribe(
      response =>{
        this.registrationInProgress=false;
        this.transferService.setData("You've successfully registered!");
        this.router.navigate(['/login']);
      })
  }

  navigateLogin(){
    this.router.navigate(['/login']);
  }
}
