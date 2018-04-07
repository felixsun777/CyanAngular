import { Component, OnInit } from '@angular/core';
import { VerificationService } from "../../services/verification.service";
import { ConnectService } from "../../services/connect.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  username:string;
  products;

  constructor(private verify:VerificationService, private router:Router, private connect:ConnectService) {
    if(!verify.getUserLoggedIn()){
      alert('Please login first');
      router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.username = this.verify.getUsername();
    this.getDepartments();
  }

  getDepartments(){
    this.connect.get('product/products').subscribe(
      data => {
        this.products = data;
      }
    )
  }

  redirect(url:string){
    this.router.navigate([url]);
  }

  modify(p){
    this.router.navigate(['/product/update'],{queryParams:p});
  }

  review(p){
    this.router.navigate(['/product/review'],{queryParams:p});
  }

  delete(productId){
    var hide_id = 'delete_' + productId;
    var show_id = 'confirm_' + productId;
    document.getElementById(hide_id).style.display="none";
    document.getElementById(show_id).style.display="inline";
  }

  confirm(productId){
    this.connect.delete('product/delete/'+ productId).subscribe(
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
