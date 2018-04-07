import { Component, OnInit } from '@angular/core';
import { ConnectService } from "../../services/connect.service";
import { Router } from "@angular/router";
import { VerificationService } from "../../services/verification.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string = '';
  password:string = '';
  message:string = '';

  constructor(private connection:ConnectService, private verification:VerificationService, private router:Router) { }

  ngOnInit() {
  }


  login(){
    this.connection.get('login/'+this.username).subscribe(
      data => {
        if(data == null){
          this.alert();
        }else if(data['password'] == this.password){
          this.access()
        }else{
          this.alert();
        }
      }
    )
  }

  access(){
    this.verification.setUserLoggedIn(this.username);
    this.router.navigate(['menu']);
  }

  alert(){
    alert('Username or password incorrect');
  }

}
