import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuItems = [
    {label:"Home" , link:'home' , active:true},
    {label:"KanbanBoard" , link:'kanbanBoard' , active:false}

  ]

  constructor(public loginService: LoginService, public router: Router) { }

  ngOnInit() {
  }

  handleMenuClick(evt) {
    this.menuItems.forEach(each => {
      if(each.label == evt.target.id) {
        each.active = true;
      }
      else {
        each.active = false
      }
    })
  }
  // onLogOut() {
  //   console.log("Doing logout ");
  //   this.router.navigate(['login']);
  //   // router - navigate 
  // }

  onLogOut() {
    console.log("Doing logout");
    sessionStorage.removeItem("loggedIn");
    sessionStorage.removeItem('loginToken');
    this.loginService.getLoginPublisher().next({
      loggedIn: false
    });
    this.router.navigate(['login']);
  }

}

