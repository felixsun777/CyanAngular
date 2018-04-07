import { Component, OnInit } from '@angular/core';
import { VerificationService } from "../../services/verification.service";
import { ConnectService } from "../../services/connect.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  username:string;
  customers;

  constructor(private verify:VerificationService, private router:Router, private connect:ConnectService) {
    if(!verify.getUserLoggedIn()){
      alert('Please login first');
      router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.username = this.verify.getUsername();
    this.getCustomers();
  }

  getCustomers(){
    this.connect.get('customer/customers').subscribe(
      data => {
        this.customers = data;
      }
    )
  }

  redirect(url:string){
    this.router.navigate([url]);
  }

  modify(c){
    this.router.navigate(['/customer/update'],{queryParams:c});
  }

  comfirm(userId){
    var hide_id = 'delete_' + userId;
    var show_id = 'confirm_' + userId;
    document.getElementById(hide_id).style.display="none";
    document.getElementById(show_id).style.display="inline";
  }

  delete(userId){
    this.connect.delete('customer/delete/'+ userId).subscribe(
      (val) => {
      },
      response => {
        alert('Operation failed!')
      },
      () => {
        alert('Delete succeed!');
        this.ngOnInit();
      }
    );
  }
}
