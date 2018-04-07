import { Component, OnInit } from '@angular/core';
import { VerificationService } from "../../services/verification.service";
import { ConnectService } from "../../services/connect.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-order-update',
  templateUrl: './order-update.component.html',
  styleUrls: ['./order-update.component.css']
})
export class OrderUpdateComponent implements OnInit {

  username:string;
  orderId;
  orderStatus;
  orderDate;
  userId;
  orderSum;
  order;

  constructor(private verify:VerificationService, private router:Router,private actrouter:ActivatedRoute, private connect:ConnectService) {
    if(!verify.getUserLoggedIn()){
      alert('Please login first');
      router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.username = this.verify.getUsername();
    this.actrouter.queryParams.subscribe(
      data => {
        this.orderId = data['orderId'];
        this.orderStatus = data['orderStatus'];
        this.orderDate = data['orderDate'];
        this.userId = data['userId'];
        this.orderSum = data['orderSum'];
      }
    );
  }

  redirect(url:string){
    this.router.navigate([url]);
  }

  update(){
    this.order = {
      "orderId":this.orderId,
      "orderStatus":this.orderStatus,
      "orderDate":this.orderDate,
      "userId":this.userId,
      "orderSum":this.orderSum
    }
    this.connect.put('order/update',JSON.stringify(this.order)).subscribe(
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

