import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public loginService: LoginService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // Replce this check with, salt from server with uname and pass ecryption
    if(sessionStorage.getItem("loggedIn") == 'yes') {
      console.log('Gaurding authentication succes');
      return true;
    }
    else {
      console.log('Gaurding authentication fail');
      this.loginService.getLoginPublisher().next({
        loggedIn: false
      });
      return false;
    }
  }
}
