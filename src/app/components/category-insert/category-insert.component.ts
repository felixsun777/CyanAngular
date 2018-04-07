import { Component, OnInit } from '@angular/core';
import { VerificationService } from "../../services/verification.service";
import { ConnectService } from "../../services/connect.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-category-insert',
  templateUrl: './category-insert.component.html',
  styleUrls: ['./category-insert.component.css']
})
export class CategoryInsertComponent implements OnInit {

  username:string;
  categoryName;
  departmentId;
  description;
  category;

  constructor(private verify:VerificationService, private router:Router, private connect:ConnectService) {
    if(!verify.getUserLoggedIn()){
      alert('Please login first');
      router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.username = this.verify.getUsername();
  }


  redirect(url:string){
    this.router.navigate([url]);
  }

  insert(){
    this.category = {
      "categoryName":this.categoryName,
      "departmentId":this.departmentId,
      "description":this.description
    }
    this.connect.post('category/insert',JSON.stringify(this.category)).subscribe(
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

