import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { LoginComponent } from '../login/login.component';
import { User } from '../shared/models/user';
import { Role } from '../shared/models/role';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {  }
  
  logout(){
    sessionStorage.clear();
  }
  onScroll() {
    console.log('scrolled!!');
  }
}
