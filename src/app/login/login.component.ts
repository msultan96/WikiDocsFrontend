import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { LoginValidators } from '../shared/validators/login.validator';
import { User } from '../shared/models/user';
import { Role } from '../shared/models/role';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { TransferService } from '../service/transfer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User;
  errorMessage:string ="";
  successMessage = this.transferService.getData();
  loginForm: FormGroup;
  loginInProgress:Boolean = false;
  faSpinner=faSpinner;

  constructor(private userService:UserService, private router:Router, private formBuilder:FormBuilder,
              private transferService:TransferService) { }

  ngOnInit(): void {
    this.user = new User();
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email: [this.user.email, [Validators.required, LoginValidators.validateEmailId], null],
      password: [this.user.password, [Validators.required], null]
    });
  }

  login(){
    this.loginInProgress=true;
    this.errorMessage=null;
    this.user = this.loginForm.value as User;

    this.userService.login(this.user).subscribe(
      response => {
        this.user = response;
        sessionStorage.setItem("user", JSON.stringify(this.user));
        sessionStorage.setItem("userRole", this.user.role);
        

        this.loginInProgress = false;
        if(this.user.role==Role.USER){
          this.router.navigate(['/User/Articles/All/Approved']);
        } else if(this.user.role==Role.ADMIN){
          this.router.navigate(['/Admin/Articles/All']);
        } else{
          this.router.navigate(["Error"]);
        }
      },
      error => {
        if(error == "No message available"){
          this.successMessage='';
          this.errorMessage="Something went wrong..."
        }
        else{
          this.errorMessage = error;
        }
        this.loginInProgress = false;
      });
  }

  navigateRegistration(){
    this.router.navigate(['/signup']);
  }

}
