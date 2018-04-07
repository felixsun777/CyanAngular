import { Component, OnInit } from '@angular/core';
import { VerificationService } from "../../services/verification.service";
import { ConnectService } from "../../services/connect.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  username:string;
  departments;
  isConfirm:boolean;

  constructor(private verify:VerificationService, private router:Router, private connect:ConnectService) {
    if(!verify.getUserLoggedIn()){
      alert('Please login first');
      router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.username = this.verify.getUsername();
    this.getDepartments();
    this.isConfirm = false;
  }

  getDepartments(){
    this.connect.get('department/departments').subscribe(
      data => {
        this.departments = data;
      }
    )
  }

  redirect(url:string){
    this.router.navigate([url]);
  }

  modify(d){
    this.router.navigate(['/department/update'],{queryParams:d});
  }

  comfirm(departmentId){
    var hide_id = 'delete_' + departmentId;
    var show_id = 'confirm_' + departmentId;
    document.getElementById(hide_id).style.display="none";
    document.getElementById(show_id).style.display="inline";
  }

  delete(departmentId){
    this.connect.delete('department/delete/'+ departmentId).subscribe(
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
