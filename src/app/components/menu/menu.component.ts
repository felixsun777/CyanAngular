import { Component, OnInit } from '@angular/core';
import { VerificationService } from "../../services/verification.service";
import { ConnectService } from "../../services/connect.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  product:number;
  order:number;
  customer:number;
  category:number;
  username:string;

  constructor(private verify:VerificationService, private router:Router, private connect:ConnectService) {
    if(!verify.getUserLoggedIn()){
      alert('Please login first');
      router.navigate(['/']);
    }

  }

  ngOnInit() {
    this.getCount();
    this.username = this.verify.getUsername();
  }

  getCount(){
    this.connect.get('menu').subscribe(
      data => {
        this.product = data['product'];
        this.order = data['order'];
        this.customer = data['customer'];
        this.category = data['category'];
      }
    )
  }

  redirect(url:string){
    this.router.navigate([url]);
  }

}
