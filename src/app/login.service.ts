import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginInfo: BehaviorSubject<any> = new BehaviorSubject({ loggedIn: false });

  constructor() {}
  getLoginPublisher() {
    return this.loginInfo;
  }
  
  getLoginSubscriber() {
    return this.loginInfo.asObservable();
  }

}
