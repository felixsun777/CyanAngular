import { Component, OnInit } from '@angular/core';
import { VerificationService } from "../../services/verification.service";
import { ConnectService } from "../../services/connect.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-department-insert',
  templateUrl: './department-insert.component.html',
  styleUrls: ['./department-insert.component.css']
})
export class DepartmentInsertComponent implements OnInit {

  username:string;
  department;
  departmentName;
  description;


  constructor(private verify:VerificationService, private router:Router, private connect:ConnectService) { }

  ngOnInit() {
    this.username = this.verify.getUsername();
  }

  redirect(url:string){
    this.router.navigate([url]);
  }

  insert(){
    this.department = {
      "departmentName":this.departmentName,
      "description":this.description
    }
    this.connect.post('department/insert',JSON.stringify(this.department)).subscribe(
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

