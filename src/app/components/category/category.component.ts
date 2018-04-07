import { Component, OnInit } from '@angular/core';
import { VerificationService } from "../../services/verification.service";
import { ConnectService } from "../../services/connect.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  username:string;
  categories;

  constructor(private verify:VerificationService, private router:Router, private connect:ConnectService) {
    if(!verify.getUserLoggedIn()){
      alert('Please login first');
      router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.username = this.verify.getUsername();
    this.getCategories();
  }

  getCategories(){
    this.connect.get('category/categories').subscribe(
      data => {
        this.categories = data;
      }
    )
  }

  redirect(url:string){
    this.router.navigate([url]);
  }

  modify(c){
    this.router.navigate(['/category/update'],{queryParams:c});
  }

  comfirm(categoryId){
    var hide_id = 'delete_' + categoryId;
    var show_id = 'confirm_' + categoryId;
    document.getElementById(hide_id).style.display="none";
    document.getElementById(show_id).style.display="inline";
  }

  delete(categoryId){
    this.connect.delete('category/delete/'+ categoryId).subscribe(
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
