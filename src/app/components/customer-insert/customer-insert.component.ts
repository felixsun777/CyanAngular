import { Component, OnInit } from '@angular/core';
import { VerificationService } from "../../services/verification.service";
import { ConnectService } from "../../services/connect.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-customer-insert',
  templateUrl: './customer-insert.component.html',
  styleUrls: ['./customer-insert.component.css']
})
export class CustomerInsertComponent implements OnInit {

  username:string;
  userName;
  password;
  realName;
  creditCard;
  phone;
  email;
  address;
  zip;
  customer;


  constructor(private verify:VerificationService, private router:Router, private connect:ConnectService) {
    if(!verify.getUserLoggedIn()){
      alert('Please login first');
      router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.username = this.verify.getUsername();
  }


  redirect(url:string){
    this.router.navigate([url]);
  }

  insert(){
    this.customer = {
      "username":this.userName,
      "password":this.password,
      "realName":this.realName,
      "creditCard":this.creditCard,
      "phone":this.phone,
      "email":this.email,
      "address":this.address,
      "zip":this.zip
    }
    this.connect.post('customer/insert',JSON.stringify(this.customer)).subscribe(
      (val) => {
      },
      response => {
        alert('Operation failed!')
      },
      () => {
        alert('Add succeed!')
      }
    );
  }
}

