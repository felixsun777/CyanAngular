import { Component, OnInit } from '@angular/core';
import { VerificationService } from "../../services/verification.service";
import { ConnectService } from "../../services/connect.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  username:string;
  product;
  productId;
  productName;
  price;
  stock;
  availableDate;
  categoryId;
  msrp;
  brand;
  averageRanking;
  description;

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
        this.productId = data['productId'];
        this.productName = data['productName'];
        this.price = data['price'];
        this.stock = data['stock'];
        this.availableDate = data['availableDate'];
        this.categoryId = data['categoryId'];
        this.msrp = data['msrp'];
        this.brand = data['brand'];
        this.averageRanking = data['averageRanking'];
        this.description = data['description'];
      }
    );
  }

  redirect(url:string){
    this.router.navigate([url]);
  }

  update(){
    this.product = {
      "productId":this.productId,
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
    this.connect.put('product/update',JSON.stringify(this.product)).subscribe(
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


