import { Component,  OnInit  } from '@angular/core';
import { LoginService } from './login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ossProject'; 
  loggedIn = false;

  constructor(public loginService: LoginService) { }
  
  ngOnInit() {

    if(sessionStorage.getItem("loggedIn") == 'yes'){
      this.loggedIn = true;
    }

    this.loginService.getLoginSubscriber().subscribe(result => {
      this.loggedIn = result.loggedIn;
    });
  } 
  
}
