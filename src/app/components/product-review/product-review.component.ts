import { Component, OnInit } from '@angular/core';
import { VerificationService } from "../../services/verification.service";
import { ConnectService } from "../../services/connect.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.css']
})
export class ProductReviewComponent implements OnInit {

  username:string;
  product;
  reviews;

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
        this.product = data;
      }
    );
    this.getProductReviews();
  }

  getProductReviews(){
    this.connect.get('product/review/' + this.product.productId).subscribe(
      data => {
        this.reviews = data;
      }
    )
  }

  redirect(url:string){
    this.router.navigate([url]);
  }

}
