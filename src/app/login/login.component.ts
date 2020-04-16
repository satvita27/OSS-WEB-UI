import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName;
  password;

  constructor( public loginService: LoginService, public router: Router) { }
  // ngOnInit(): void {
    
  // }

  ngOnInit() {
    this.loginService.getLoginPublisher().next({
      loggedIn: false
    });
    sessionStorage.removeItem('loggedIn');
    sessionStorage.removeItem('loginToken');
  }
  // onLogin() {
  //   console.log("Doing login ");
  //   this.router.navigate(['home']);
  //   // router - navigate 
  // }
  
  onLogin() {
    console.log("Doing login with userName: " + this.userName + " and password:" + this.password);
    sessionStorage.setItem('loggedIn', 'yes');
    sessionStorage.setItem("loginToken", btoa(this.userName + ":" + this.password));
    this.loginService.getLoginPublisher().next({
      loggedIn: true
    });
    this.router.navigate(['home']); 
    // router - navigate 
  }
}


