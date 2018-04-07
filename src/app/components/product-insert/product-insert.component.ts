import { Component, OnInit } from '@angular/core';
import { VerificationService } from "../../services/verification.service";
import { ConnectService } from "../../services/connect.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-product-insert',
  templateUrl: './product-insert.component.html',
  styleUrls: ['./product-insert.component.css']
})
export class ProductInsertComponent implements OnInit {

  username:string;
  product;
  productName;
  price;
  stock;
  availableDate;
  categoryId;
  msrp;
  brand;
  averageRanking;
  description;

  constructor(private verify:VerificationService, private router:Router, private connect:ConnectService) { }

  ngOnInit() {
    this.username = this.verify.getUsername();
  }

  redirect(url:string){
    this.router.navigate([url]);
  }

  insert(){
    this.product = {
      "productName":this.productName,
      "price":this.price,
      "stock":this.stock,
      "availableDate":this.availableDate,
      "categoryId":this.categoryId,
      "msrp":this.msrp,
      "brand":this.brand,
      "averageRanking":this.averageRanking,
      "description":this.description
    }
    this.connect.post('product/insert',JSON.stringify(this.product)).subscribe(
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
