import { Component, OnInit } from '@angular/core';
import { VerificationService } from "../../services/verification.service";
import { ConnectService } from "../../services/connect.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-department-update',
  templateUrl: './department-update.component.html',
  styleUrls: ['./department-update.component.css']
})
export class DepartmentUpdateComponent implements OnInit {

  username:string;
  department;
  departmentId;
  departmentName;
  description;


  constructor(private verify:VerificationService, private router:Router,private actrouter:ActivatedRoute, private connect:ConnectService) { }

  ngOnInit() {
    this.username = this.verify.getUsername();
    this.actrouter.queryParams.subscribe(
      data => {
        this.departmentId = data['departmentId'];
        this.departmentName = data['departmentName'];
        this.description = data['description'];
      }
    );
  }

  redirect(url:string){
    this.router.navigate([url]);
  }

  update(){
    this.department = {
      "departmentId":this.departmentId,
      "departmentName":this.departmentName,
      "description":this.description
    }
    this.connect.put('department/update',JSON.stringify(this.department)).subscribe(
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
