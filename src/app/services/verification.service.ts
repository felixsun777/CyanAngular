import { Injectable } from '@angular/core';

@Injectable()
export class VerificationService {

  private isUserLoggedIn: boolean;
  private username: string;

  constructor() {
    this.isUserLoggedIn = false;
  }

  getUserLoggedIn(){
    return this.isUserLoggedIn;
  }

  setUserLoggedIn(username:string){
    this.isUserLoggedIn = true;
    this.username = username;
  }

  getUsername(){
    return this.username;
  }

}
