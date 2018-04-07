import { Component, OnInit } from '@angular/core';
import { VerificationService } from "../../services/verification.service";
import { ConnectService } from "../../services/connect.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {

  username:string;
  userId;
  userName;
  password;
  realName;
  creditCard;
  phone;
  email;
  receiveEmail;
  address;
  zip;
  customer;


  constructor(private verify:VerificationService, private router:Router,private actrouter:ActivatedRoute, private connect:ConnectService) { }

  ngOnInit() {
    this.username = this.verify.getUsername();
    this.actrouter.queryParams.subscribe(
      data => {
        this.userId = data['userId'];
        this.userName = data['username'];
        this.password = data['password'];
        this.realName = data['realName'];
        this.creditCard = data['creditCard'];
        this.phone = data['phone'];
        this.email = data['email'];
        this.receiveEmail = data['receiveEmail'];
        this.address = data['address'];
        this.zip = data['zip'];
      }
    );
  }

  redirect(url:string){
    this.router.navigate([url]);
  }

  update(){
    this.customer = {
      "userId":this.userId,
      "username":this.userName,
      "password":this.password,
      "realName":this.realName,
      "creditCard":this.creditCard,
      "phone":this.phone,
      "email":this.email,
      "address":this.address,
      "zip":this.zip,
      "receiveEmail":this.receiveEmail
    }
    this.connect.put('customer/update',JSON.stringify(this.customer)).subscribe(
      (val) => {
      },
      response => {
        alert('Operation failed!')
      },
      () => {
        alert('Update succeed!')
      }
    );
  }

}
