import { Component, OnInit } from '@angular/core';
import { VerificationService } from "../../services/verification.service";
import { ConnectService } from "../../services/connect.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent implements OnInit {

  username:string;
  categoryId;
  categoryName;
  departmentId;
  description;
  category;


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
        this.categoryId = data['categoryId'];
        this.categoryName = data['categoryName'];
        this.departmentId = data['departmentId'];
        this.description = data['description'];
      }
    );
  }

  redirect(url:string){
    this.router.navigate([url]);
  }

  update(){
    this.category = {
      "categoryId":this.categoryId,
      "categoryName":this.categoryName,
      "departmentId":this.departmentId,
      "description":this.description
    }
    this.connect.put('category/update',JSON.stringify(this.category)).subscribe(
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

