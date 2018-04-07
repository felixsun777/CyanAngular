import { Component, OnInit } from '@angular/core';
import { VerificationService } from "../../services/verification.service";
import { ConnectService } from "../../services/connect.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  username:string;
  details;
  order;

  constructor(private verify:VerificationService, private actrouter:ActivatedRoute, private router:Router, private connect:ConnectService) {
    if(!verify.getUserLoggedIn()){
      alert('Please login first');
      router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.username = this.verify.getUsername();
    this.actrouter.queryParams.subscribe(
      data => {
        this.order = data;
      }
    );
    this.getOrderDeatils();
  }

  getOrderDeatils(){
    this.connect.get('order/detail/' + this.order.orderId).subscribe(
      data => {
        this.details = data;
      }
    )
  }

  redirect(url:string){
    this.router.navigate([url]);
  }

}
