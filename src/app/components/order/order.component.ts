import { Component, OnInit } from '@angular/core';
import { VerificationService } from "../../services/verification.service";
import { ConnectService } from "../../services/connect.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  username:string;
  orders;

  constructor(private verify:VerificationService, private router:Router, private connect:ConnectService) {
    if(!verify.getUserLoggedIn()){
      alert('Please login first');
      router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.username = this.verify.getUsername();
    this.getOrders();
  }

  getOrders(){
    this.connect.get('order/orders').subscribe(
      data => {
        this.orders = data;
      }
    )
  }

  redirect(url:string){
    this.router.navigate([url]);
  }

  status(o){
    this.router.navigate(['/order/update'],{queryParams:o});
  }

  detail(o){
    this.router.navigate(['/order/detail'],{queryParams:o});
  }

}
